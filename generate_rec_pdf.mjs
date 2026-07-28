import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateRecPDF() {
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // --- PAGE 1 ---
  const page1 = pdfDoc.addPage([595.28, 841.89]); // A4
  
  // Header bar
  page1.drawRectangle({
    x: 0,
    y: 780,
    width: 595.28,
    height: 61.89,
    color: rgb(0.96, 0.96, 0.97)
  });

  page1.drawText('REC SOLAR', { x: 40, y: 802, size: 24, font: fontBold, color: rgb(0.1, 0.2, 0.4) });
  page1.drawText("SOLAR'S MOST TRUSTED", { x: 200, y: 802, size: 10, font: fontRegular, color: rgb(0.4, 0.4, 0.4) });
  
  page1.drawText('REC ALPHA® PURE-RX', { x: 40, y: 720, size: 32, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  page1.drawText('DATASHEET', { x: 40, y: 685, size: 20, font: fontBold, color: rgb(0.3, 0.3, 0.3) });

  page1.drawText('450 - 475W', { x: 40, y: 630, size: 36, font: fontBold, color: rgb(0.1, 0.2, 0.4) });
  page1.drawText('HETEROJUNCTION TECHNOLOGY', { x: 40, y: 600, size: 14, font: fontBold, color: rgb(0.2, 0.5, 0.2) });

  // Key Specs Banner
  page1.drawRectangle({
    x: 40,
    y: 500,
    width: 515,
    height: 70,
    color: rgb(0.93, 0.95, 0.97),
    borderColor: rgb(0.8, 0.85, 0.9),
    borderWidth: 1
  });

  page1.drawText('228 W/m²', { x: 55, y: 542, size: 16, font: fontBold, color: rgb(0.1, 0.2, 0.4) });
  page1.drawText('POWER DENSITY', { x: 55, y: 522, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });

  page1.drawText('>92%', { x: 195, y: 542, size: 16, font: fontBold, color: rgb(0.1, 0.2, 0.4) });
  page1.drawText('POWER IN YEAR 25', { x: 195, y: 522, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });

  page1.drawText('-0.24%/°C', { x: 335, y: 542, size: 16, font: fontBold, color: rgb(0.1, 0.2, 0.4) });
  page1.drawText('TEMPERATURE COEFFICIENT', { x: 335, y: 522, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });

  // Pure Strength Features
  page1.drawText('PURE STRENGTH FEATURES', { x: 40, y: 450, size: 14, font: fontBold, color: rgb(0.1, 0.1, 0.1) });

  const features = [
    '• 55 mm Hail Resistant (Tested at 33.9 m/s)',
    '• +7000 Pa / -4000 Pa with 4-point clamping design load',
    '• +10000 Pa / -6000 Pa with 6-point clamping design load',
    '• Eligible for 25-Year REC ProTrust Warranty (Product, Performance & Labor)',
    '• Lead-free & RoHS compliant eco-friendly construction'
  ];

  features.forEach((feat, idx) => {
    page1.drawText(feat, { x: 40, y: 420 - idx * 24, size: 11, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
  });

  page1.drawText('Complete System and Product Certifications:', { x: 40, y: 270, size: 13, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  const certs = [
    '• ISO 14001; ISO 9001; IEC 45001; IEC 62941',
    '• IEC 61215:2021; IEC 61730:2023; UL 61730',
    '• IEC 61701 Salt Mist (SM6); IEC 62716 Ammonia Resistance',
    '• EN 13501-5 Roof Fire Performance (BROOF T2)'
  ];
  certs.forEach((cert, idx) => {
    page1.drawText(cert, { x: 40, y: 245 - idx * 20, size: 10, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  });

  page1.drawText('REC Solar  |  REC Alpha Pure-RX Series  |  Singapore Production', { x: 40, y: 50, size: 10, font: fontBold, color: rgb(0.3, 0.3, 0.3) });

  // --- PAGE 2 ---
  const page2 = pdfDoc.addPage([595.28, 841.89]);

  // Electrical Data STC Table
  page2.drawRectangle({ x: 40, y: 770, width: 515, height: 20, color: rgb(0.92, 0.92, 0.94) });
  page2.drawText('ELECTRICAL DATA (STC: AM1.5, 1000 W/m², 25°C)', { x: 45, y: 776, size: 11, font: fontBold, color: rgb(0.1, 0.1, 0.1) });

  const stcHeaders = ['Module Type', '450', '455', '460', '465', '470', '475'];
  const stcRows = [
    ['Nominal Power - Pmax (Wp)', '450', '455', '460', '465', '470', '475'],
    ['Nominal Power Voltage - Vmpp (V)', '54.3', '54.6', '54.9', '55.2', '55.4', '55.5'],
    ['Nominal Power Current - Impp (A)', '8.29', '8.34', '8.38', '8.43', '8.49', '8.56'],
    ['Open Circuit Voltage - Voc (V)', '65.6', '65.6', '65.7', '65.7', '65.7', '65.7'],
    ['Short Circuit Current - Isc (A)', '8.81', '8.84', '8.88', '8.91', '8.95', '9.00'],
    ['Power Density (W/m²)', '216', '219', '221', '223', '226', '228'],
    ['Panel Efficiency (%)', '21.6%', '21.9%', '22.1%', '22.3%', '22.6%', '22.8%']
  ];

  // Table header
  page2.drawRectangle({ x: 40, y: 750, width: 515, height: 18, color: rgb(0.85, 0.85, 0.88) });
  stcHeaders.forEach((h, colIdx) => {
    const xPos = colIdx === 0 ? 45 : 200 + (colIdx - 1) * 58;
    page2.drawText(h, { x: xPos, y: 755, size: 8, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  });

  stcRows.forEach((row, rowIdx) => {
    const yPos = 732 - rowIdx * 18;
    if (rowIdx % 2 === 1) {
      page2.drawRectangle({ x: 40, y: yPos - 3, width: 515, height: 18, color: rgb(0.97, 0.97, 0.97) });
    }
    row.forEach((cell, colIdx) => {
      const xPos = colIdx === 0 ? 45 : 200 + (colIdx - 1) * 58;
      page2.drawText(cell, {
        x: xPos,
        y: yPos,
        size: 8,
        font: colIdx === 0 ? fontBold : fontRegular,
        color: rgb(0.2, 0.2, 0.2)
      });
    });
  });

  // General Data & Mechanical Specs
  page2.drawRectangle({ x: 40, y: 580, width: 515, height: 20, color: rgb(0.92, 0.92, 0.94) });
  page2.drawText('GENERAL & MECHANICAL DATA', { x: 45, y: 586, size: 11, font: fontBold, color: rgb(0.1, 0.1, 0.1) });

  const mechParams = [
    ['Cell Type', '88 half-cut bifacial REC heterojunction cells with gapless technology'],
    ['Glass', '3.2 mm solar glass with anti-reflective surface treatment'],
    ['Backsheet / Frame', 'Highly resistant polymer (Black) / Anodized aluminum (Black)'],
    ['Dimensions & Weight', '1728 x 1205 x 30 mm (2.08 m²) / 22.7 kg'],
    ['Junction Box & Cable', 'IP68 rated, 4 bypass diodes / 4 mm² solar cable, 1.50 m + 1.50 m'],
    ['Origin', 'Made in Singapore']
  ];

  mechParams.forEach((row, i) => {
    const yPos = 560 - i * 18;
    if (i % 2 === 1) {
      page2.drawRectangle({ x: 40, y: yPos - 3, width: 515, height: 18, color: rgb(0.97, 0.97, 0.97) });
    }
    page2.drawText(row[0], { x: 45, y: yPos, size: 8.5, font: fontBold, color: rgb(0.2, 0.2, 0.2) });
    page2.drawText(row[1], { x: 170, y: yPos, size: 8.5, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  });

  // Warranty Table
  page2.drawRectangle({ x: 40, y: 430, width: 515, height: 20, color: rgb(0.92, 0.92, 0.94) });
  page2.drawText('WARRANTY DETAILS', { x: 45, y: 436, size: 11, font: fontBold, color: rgb(0.1, 0.1, 0.1) });

  const warrantyRows = [
    ['Installed by REC Certified Pro', 'No', 'Yes (<25 kW)', 'Yes (25-500 kW)'],
    ['Product Warranty (years)', '20', '25', '25'],
    ['Power Warranty (years)', '25', '25', '25'],
    ['Labor Warranty (years)', '0', '25', '10'],
    ['Power in Year 1 / Annual Loss', '98% / 0.25%', '98% / 0.25%', '98% / 0.25%'],
    ['Guaranteed Output at Year 25', '92%', '92%', '92%']
  ];

  warrantyRows.forEach((row, i) => {
    const yPos = 410 - i * 18;
    if (i % 2 === 1) {
      page2.drawRectangle({ x: 40, y: yPos - 3, width: 515, height: 18, color: rgb(0.97, 0.97, 0.97) });
    }
    page2.drawText(row[0], { x: 45, y: yPos, size: 8.5, font: fontBold, color: rgb(0.2, 0.2, 0.2) });
    page2.drawText(row[1], { x: 230, y: yPos, size: 8.5, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
    page2.drawText(row[2], { x: 320, y: yPos, size: 8.5, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
    page2.drawText(row[3], { x: 430, y: yPos, size: 8.5, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  });

  page2.drawText('REC Solar PTE. LTD.  |  Singapore  |  Specifications subject to change without notice.', { x: 40, y: 50, size: 9, font: fontRegular, color: rgb(0.4, 0.4, 0.4) });

  const pdfBytes = await pdfDoc.save();

  const publicDir = path.join(process.cwd(), 'public');
  const downloadsDir = path.join(publicDir, 'downloads');

  if (!fs.existsSync(downloadsDir)) {
    fs.mkdirSync(downloadsDir, { recursive: true });
  }

  const targetPathDownloads = path.join(downloadsDir, 'rec-alpha-pure-rx-datasheet.pdf');
  const targetPathPublic = path.join(publicDir, 'rec-alpha-pure-rx-datasheet.pdf');

  fs.writeFileSync(targetPathDownloads, pdfBytes);
  fs.writeFileSync(targetPathPublic, pdfBytes);

  console.log(`REC PDF saved successfully to:\n- ${targetPathDownloads}\n- ${targetPathPublic}`);
}

generateRecPDF().catch(console.error);
