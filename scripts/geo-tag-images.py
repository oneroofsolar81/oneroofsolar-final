"""
Geo-tag solar panel installation images with Darwin GPS coordinates and SEO metadata.

Requirements:
    pip install Pillow piexif

Usage:
    python scripts/geo-tag-images.py

Run this locally on the ORIGINAL image files before re-uploading.
This script writes EXIF GPS data (latitude/longitude), title, description,
and keywords into each image file IN PLACE.

NOTE: WebP files do not support EXIF natively. If your source images are
WebP, convert them to JPEG first, apply EXIF, then convert back to WebP
(or keep JPEG originals for Google Image indexing alongside WebP for web).
For JPEG sources, this script works directly.
"""

import os
import struct
import piexif
from PIL import Image

# Darwin, Northern Territory coordinates
LATITUDE = -12.4634
LONGITUDE = 130.8456

def decimal_to_dms(decimal_degrees):
    """Convert decimal degrees to (degrees, minutes, seconds) as EXIF rationals."""
    d = abs(decimal_degrees)
    degrees = int(d)
    minutes_float = (d - degrees) * 60
    minutes = int(minutes_float)
    seconds = round((minutes_float - minutes) * 60 * 10000)
    return (
        (degrees, 1),
        (minutes, 1),
        (seconds, 10000),
    )

# DMS conversion for Darwin:
# Latitude:  -12.4634 -> 12° 27' 48.24" S
# Longitude: 130.8456 -> 130° 50' 44.16" E

IMAGES = [
    {
        "file": "public/assets/images/home/home-about-stuart-park.webp",
        "title": "Solar panel installation on a Stuart Park rooftop in Darwin",
        "description": "Oneroof Solar team completing a solar panel installation on a residential rooftop in Stuart Park, Darwin, NT.",
        "keywords": "solar panel installation darwin, OneRoof Solar Darwin",
    },
    {
        "file": "public/assets/images/home/home-project-bayview.webp",
        "title": "Solar power system on a Darwin rooftop during dry season",
        "description": "High-output solar panel system installed on a rooftop in Darwin, generating peak energy during the NT dry season.",
        "keywords": "solar power darwin, darwin solar panels",
    },
    {
        "file": "public/assets/images/home/home-hero-bayview.webp",
        "title": "Residential solar panels installed on a Darwin home",
        "description": "Rooftop solar panel system installed by Oneroof Solar on a residential property in Darwin, NT.",
        "keywords": "solar panels darwin, install solar panels on roof",
    },
    {
        "file": "public/assets/images/home/home-premium-aerial.webp",
        "title": "Aerial view of solar array on a property in the Northern Territory",
        "description": "Aerial photograph showing a large solar panel array installed on a property in the Northern Territory.",
        "keywords": "solar installation darwin, solar panel installation nt",
    },
    {
        "file": "public/assets/images/home/home-packages-house.webp",
        "title": "Solar and battery package house illustration for Darwin homes",
        "description": "Illustration of a home with solar panels and battery storage representing residential packages in Darwin, NT.",
        "keywords": "solar system darwin, solar installers darwin",
    },
]


def apply_gps_exif(filepath, title, description, keywords):
    """Write GPS coordinates and descriptive metadata into EXIF."""
    if not os.path.exists(filepath):
        print(f"  SKIP (not found): {filepath}")
        return

    ext = os.path.splitext(filepath)[1].lower()
    if ext in (".webp", ".png"):
        print(f"  NOTE: {ext} has limited EXIF support. Convert to JPEG first for full GPS tagging.")
        print(f"        Skipping: {filepath}")
        return

    try:
        img = Image.open(filepath)
        exif_dict = piexif.load(img.info.get("exif", b""))
    except Exception:
        exif_dict = {"0th": {}, "Exif": {}, "GPS": {}, "1st": {}}

    lat_dms = decimal_to_dms(LATITUDE)
    lon_dms = decimal_to_dms(LONGITUDE)

    exif_dict["GPS"] = {
        piexif.GPSIFD.GPSLatitudeRef: b"S",
        piexif.GPSIFD.GPSLatitude: lat_dms,
        piexif.GPSIFD.GPSLongitudeRef: b"E",
        piexif.GPSIFD.GPSLongitude: lon_dms,
    }

    exif_dict["0th"][piexif.ImageIFD.ImageDescription] = description.encode("utf-8")
    exif_dict["0th"][piexif.ImageIFD.DocumentName] = title.encode("utf-8")
    exif_dict["0th"][piexif.ImageIFD.Artist] = b"OneRoof Solar"
    exif_dict["0th"][piexif.ImageIFD.Copyright] = b"OneRoof Solar https://www.oneroofsolar.com.au"

    exif_bytes = piexif.dump(exif_dict)
    img.save(filepath, exif=exif_bytes)
    print(f"  OK: {filepath}")


def main():
    print("Geo-tagging images with Darwin coordinates (-12.4634, 130.8456)...\n")
    for entry in IMAGES:
        print(f"Processing: {entry['file']}")
        apply_gps_exif(
            entry["file"],
            entry["title"],
            entry["description"],
            entry["keywords"],
        )
    print("\nDone. Re-upload the tagged images to your hosting.")
    print("\nAlternative: use exiftool (if installed) for WebP support:")
    print('  exiftool -GPSLatitude=-12.4634 -GPSLongitude=130.8456 '
          '-GPSLatitudeRef=S -GPSLongitudeRef=E '
          '-Title="Solar panel installation Darwin" '
          '-Description="..." -Keywords="..." <file>')


if __name__ == "__main__":
    main()
