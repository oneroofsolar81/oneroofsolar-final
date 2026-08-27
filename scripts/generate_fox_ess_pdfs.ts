import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';

// Common Palette
const darkNavy = rgb(0.06, 0.09, 0.13); // #0F1722
const foxPurple = rgb(0.46, 0.38, 0.65); // #7561A6
const textDark = rgb(0.12, 0.15, 0.18);
const textGray = rgb(0.38, 0.43, 0.48);
const bgLight = rgb(0.96, 0.97, 0.98);
const borderGray = rgb(0.84, 0.87, 0.90);
const tableHeaderBg = rgb(0.90, 0.92, 0.96);

function setupPageHeader(page: any, width: number, height: number, fontBold: any, fontRegular: any, docType = 'TECHNICAL DATASHEET') {
  page.drawRectangle({
    x: 0,
    y: height - 75,
    width: width,
    height: 75,
    color: darkNavy,
  });

  page.drawText('FOX ESS', {
    x: 40,
    y: height - 44,
    size: 22,
    font: fontBold,
    color: foxPurple,
  });

  page.drawText('www.fox-ess.com | Solar & Storage Solutions', {
    x: 40,
    y: height - 60,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.8, 0.8, 0.8),
  });

  page.drawText(docType, {
    x: width - 180,
    y: height - 48,
    size: 9.5,
    font: fontBold,
    color: rgb(1, 1, 1),
  });
}

function drawFooter(page: any, text: string, fontRegular: any) {
  page.drawText(text, {
    x: 40,
    y: 25,
    size: 8,
    font: fontRegular,
    color: textGray,
  });
}

// 1. EQ4800 Battery
async function genEQ4800() {
  const doc = await PDFDocument.create();
  const fontR = await doc.embedFont(StandardFonts.Helvetica);
  const fontB = await doc.embedFont(StandardFonts.HelveticaBold);
  const page = doc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  setupPageHeader(page, width, height, fontB, fontR);

  page.drawText('EQ4800 High Voltage Storage Battery', { x: 40, y: height - 110, size: 20, font: fontB, color: darkNavy });
  page.drawText('4.66kWh Modular LFP Battery | Scalable from 9.32kWh to 41.93kWh (EQ4800-L2 to -L9)', { x: 40, y: height - 128, size: 10, font: fontB, color: textGray });

  // Key Highlights Box
  page.drawRectangle({ x: 40, y: height - 195, width: width - 80, height: 55, color: bgLight, borderColor: borderGray, borderWidth: 1 });
  page.drawText('KEY HIGHLIGHTS:', { x: 50, y: height - 152, size: 8.5, font: fontB, color: darkNavy });
  page.drawText('- 4.66kWh unit capacity | 100% Depth of Discharge | CAN communication interface', { x: 50, y: height - 167, size: 8, font: fontR, color: textDark });
  page.drawText('- Large temperature tolerance (-10C to +55C discharge) | Plug & Play stackable series installation up to 9 modules', { x: 50, y: height - 180, size: 8, font: fontR, color: textDark });
  page.drawText('- High round-trip efficiency (>95%) | IP65 protection | 10-Year Manufacturer Standard Warranty', { x: 50, y: height - 193, size: 8, font: fontB, color: foxPurple });

  // Table
  const rows = [
    { name: 'Model', v1: 'EQ4800-L2', v2: 'EQ4800-L3', v3: 'EQ4800-L4', v4: 'EQ4800-L5', v5: 'EQ4800-L6', v6: 'EQ4800-L7', v7: 'EQ4800-L8', v8: 'EQ4800-L9' },
    { name: 'Battery Module Qty', v1: '1*M + 1*S', v2: '1*M + 2*S', v3: '1*M + 3*S', v4: '1*M + 4*S', v5: '1*M + 5*S', v6: '1*M + 6*S', v7: '1*M + 7*S', v8: '1*M + 8*S' },
    { name: 'Nominal Voltage [V]', v1: '89.6 V', v2: '134.4 V', v3: '179.2 V', v4: '224.0 V', v5: '268.8 V', v6: '313.6 V', v7: '358.4 V', v8: '403.2 V' },
    { name: 'Nominal Power [kW]', v1: '4.48 kW', v2: '6.72 kW', v3: '8.96 kW', v4: '11.20 kW', v5: '13.44 kW', v6: '15.68 kW', v7: '17.92 kW', v8: '20.16 kW' },
    { name: 'Nominal Energy [kWh]', v1: '9.32 kWh', v2: '13.98 kWh', v3: '18.64 kWh', v4: '23.30 kWh', v5: '27.96 kWh', v6: '32.61 kWh', v7: '37.27 kWh', v8: '41.93 kWh' },
    { name: 'Usable Capacity [kWh]', v1: '9.32 kWh', v2: '13.98 kWh', v3: '18.64 kWh', v4: '23.30 kWh', v5: '27.96 kWh', v6: '32.61 kWh', v7: '37.27 kWh', v8: '41.93 kWh' },
    { name: 'Operating Voltage [V]', v1: '81.2-103V', v2: '121.8-154V', v3: '162.4-206V', v4: '203.0-257V', v5: '243.6-309V', v6: '284.2-360V', v7: '324.8-412V', v8: '365.4-463V' },
    { name: 'Dimensions H (mm)', v1: '570*386*380', v2: '570*524*380', v3: '570*662*380', v4: '570*800*380', v5: '570*938*380', v6: '570*1076*380', v7: '570*1214*380', v8: '570*1352*380' },
    { name: 'Weight [kg]', v1: '83.5 kg', v2: '122.5 kg', v3: '161.5 kg', v4: '200.5 kg', v5: '239.5 kg', v6: '278.5 kg', v7: '317.5 kg', v8: '356.5 kg' },
  ];

  let y = height - 215;
  const rh = 18;
  const col0W = 115;
  const colValW = 49;

  rows.forEach((r, idx) => {
    page.drawRectangle({ x: 40, y: y - rh, width: width - 80, height: rh, color: idx === 0 ? tableHeaderBg : rgb(1, 1, 1), borderColor: borderGray, borderWidth: 0.5 });
    page.drawText(r.name, { x: 44, y: y - 12, size: 6.8, font: idx === 0 ? fontB : fontR, color: darkNavy });
    const vals = [r.v1, r.v2, r.v3, r.v4, r.v5, r.v6, r.v7, r.v8];
    vals.forEach((v, vIdx) => {
      page.drawText(v, { x: 40 + col0W + vIdx * colValW + 2, y: y - 12, size: 6.5, font: idx === 0 ? fontB : fontR, color: textDark });
    });
    y -= rh;
  });

  // Specs section
  y -= 15;
  page.drawRectangle({ x: 40, y: y - 180, width: width - 80, height: 180, color: bgLight, borderColor: borderGray, borderWidth: 1 });
  page.drawText('ELECTRICAL & OPERATING SPECIFICATIONS (LFP Chemistry):', { x: 50, y: y - 20, size: 8.5, font: fontB, color: darkNavy });
  page.drawText('- Battery Type: LFP (LiFePO4) | Normal Capacity: 104 Ah | Depth of Discharge: 100%', { x: 50, y: y - 38, size: 8, font: fontR, color: textDark });
  page.drawText('- Recommend Charge/Discharge Current: 30 A | Max Charge/Discharge Current: 50 A | Peak (60s): 65 A', { x: 50, y: y - 56, size: 8, font: fontR, color: textDark });
  page.drawText('- Battery Pack Round-Trip Efficiency: > 95% | Communication: CAN | Display: LED indicators', { x: 50, y: y - 74, size: 8, font: fontR, color: textDark });
  page.drawText('- Installation: Outdoor / Indoor (Floor Stand) | Ingress Protection: IP65 | Cooling: Natural Convection', { x: 50, y: y - 92, size: 8, font: fontR, color: textDark });
  page.drawText('- Operating Temp: Charge 0 to 55C / Discharge -10 to 55C | Max Altitude: 3,000m | Humidity: 5-95%', { x: 50, y: y - 110, size: 8, font: fontR, color: textDark });
  page.drawText('- Safety & EMC Certifications: IEC 62619, EN IEC 61000-6-1/2/3/4, UN38.3', { x: 50, y: y - 128, size: 8, font: fontR, color: textDark });
  page.drawText('Supplied and installed by Oneroof Solar Darwin & NT (Call 0483 986 444)', { x: 50, y: y - 155, size: 8.5, font: fontB, color: foxPurple });

  drawFooter(page, 'Oneroof Solar - Authorized Fox ESS Partner | EQ4800 High Voltage Battery Datasheet', fontR);

  fs.writeFileSync(path.join(process.cwd(), 'public', 'downloads', 'Fox ESS EQ4800 High Voltage Storage Battery Datasheet.pdf'), await doc.save());
}

// 2. EQ5500 Battery
async function genEQ5500() {
  const doc = await PDFDocument.create();
  const fontR = await doc.embedFont(StandardFonts.Helvetica);
  const fontB = await doc.embedFont(StandardFonts.HelveticaBold);
  const page = doc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  setupPageHeader(page, width, height, fontB, fontR);

  page.drawText('EQ5500 High Voltage Storage Battery', { x: 40, y: height - 110, size: 20, font: fontB, color: darkNavy });
  page.drawText('5.46kWh Modular LFP Battery | Scalable from 10.92kWh to 49.14kWh (EQ5500-L2 to -L9)', { x: 40, y: height - 128, size: 10, font: fontB, color: textGray });

  page.drawRectangle({ x: 40, y: height - 195, width: width - 80, height: 55, color: bgLight, borderColor: borderGray, borderWidth: 1 });
  page.drawText('KEY HIGHLIGHTS:', { x: 50, y: height - 152, size: 8.5, font: fontB, color: darkNavy });
  page.drawText('- 5.46kWh unit capacity | 100% Depth of Discharge | CAN communication interface', { x: 50, y: height - 167, size: 8, font: fontR, color: textDark });
  page.drawText('- Scalable up to 9 modules in series (49.14kWh) | Natural convection cooling | IP65 rated', { x: 50, y: height - 180, size: 8, font: fontR, color: textDark });
  page.drawText('- High 122Ah cell capacity | 50A continuous charge/discharge | 10-Year Standard Warranty', { x: 50, y: height - 193, size: 8, font: fontB, color: foxPurple });

  const rows = [
    { name: 'Model', v1: 'EQ5500-L2', v2: 'EQ5500-L3', v3: 'EQ5500-L4', v4: 'EQ5500-L5', v5: 'EQ5500-L6', v6: 'EQ5500-L7', v7: 'EQ5500-L8', v8: 'EQ5500-L9' },
    { name: 'Battery Module Qty', v1: '1*M + 1*S', v2: '1*M + 2*S', v3: '1*M + 3*S', v4: '1*M + 4*S', v5: '1*M + 5*S', v6: '1*M + 6*S', v7: '1*M + 7*S', v8: '1*M + 8*S' },
    { name: 'Nominal Voltage [V]', v1: '89.6 V', v2: '134.4 V', v3: '179.2 V', v4: '224.0 V', v5: '268.8 V', v6: '313.6 V', v7: '358.4 V', v8: '403.2 V' },
    { name: 'Nominal Power [kW]', v1: '4.48 kW', v2: '6.72 kW', v3: '8.96 kW', v4: '11.20 kW', v5: '13.44 kW', v6: '15.68 kW', v7: '17.92 kW', v8: '20.16 kW' },
    { name: 'Nominal Energy [kWh]', v1: '10.92 kWh', v2: '16.38 kWh', v3: '21.84 kWh', v4: '27.30 kWh', v5: '32.76 kWh', v6: '38.22 kWh', v7: '43.68 kWh', v8: '49.14 kWh' },
    { name: 'Usable Capacity [kWh]', v1: '10.92 kWh', v2: '16.38 kWh', v3: '21.84 kWh', v4: '27.30 kWh', v5: '32.76 kWh', v6: '38.22 kWh', v7: '43.68 kWh', v8: '49.14 kWh' },
    { name: 'Operating Voltage [V]', v1: '81.2-102V', v2: '121.8-153V', v3: '162.4-204V', v4: '203.0-255V', v5: '243.6-306V', v6: '284.2-357V', v7: '324.8-408V', v8: '365.4-459V' },
    { name: 'Dimensions H (mm)', v1: '570*386*380', v2: '570*524*380', v3: '570*662*380', v4: '570*800*380', v5: '570*938*380', v6: '570*1076*380', v7: '570*1214*380', v8: '570*1352*380' },
    { name: 'Weight [kg]', v1: '85 kg', v2: '126 kg', v3: '167 kg', v4: '208 kg', v5: '249 kg', v6: '290 kg', v7: '331 kg', v8: '372 kg' },
  ];

  let y = height - 215;
  const rh = 18;
  const col0W = 115;
  const colValW = 49;

  rows.forEach((r, idx) => {
    page.drawRectangle({ x: 40, y: y - rh, width: width - 80, height: rh, color: idx === 0 ? tableHeaderBg : rgb(1, 1, 1), borderColor: borderGray, borderWidth: 0.5 });
    page.drawText(r.name, { x: 44, y: y - 12, size: 6.8, font: idx === 0 ? fontB : fontR, color: darkNavy });
    const vals = [r.v1, r.v2, r.v3, r.v4, r.v5, r.v6, r.v7, r.v8];
    vals.forEach((v, vIdx) => {
      page.drawText(v, { x: 40 + col0W + vIdx * colValW + 2, y: y - 12, size: 6.5, font: idx === 0 ? fontB : fontR, color: textDark });
    });
    y -= rh;
  });

  y -= 15;
  page.drawRectangle({ x: 40, y: y - 180, width: width - 80, height: 180, color: bgLight, borderColor: borderGray, borderWidth: 1 });
  page.drawText('ELECTRICAL & OPERATING SPECIFICATIONS (122Ah Cell Architecture):', { x: 50, y: y - 20, size: 8.5, font: fontB, color: darkNavy });
  page.drawText('- Battery Type: LFP (LiFePO4) | Normal Capacity: 122 Ah | Depth of Discharge: 100%', { x: 50, y: y - 38, size: 8, font: fontR, color: textDark });
  page.drawText('- Recommend Charge/Discharge Current: 50 A | Max Charge/Discharge Current: 50 A | Peak (60s): 65 A', { x: 50, y: y - 56, size: 8, font: fontR, color: textDark });
  page.drawText('- Battery Pack Round-Trip Efficiency: > 95% | Communication: CAN | Display: LED indicators', { x: 50, y: y - 74, size: 8, font: fontR, color: textDark });
  page.drawText('- Installation: Outdoor / Indoor (Floor Mount) | Ingress Protection: IP65 | Cooling: Natural Convection', { x: 50, y: y - 92, size: 8, font: fontR, color: textDark });
  page.drawText('- Operating Temp: Charge 0 to 55C / Discharge -10 to 55C | Max Altitude: 3,000m | Humidity: 5-95%', { x: 50, y: y - 110, size: 8, font: fontR, color: textDark });
  page.drawText('- Safety & EMC Certifications: IEC 62619, EN IEC 61000-6-1/2/3/4, UN38.3', { x: 50, y: y - 128, size: 8, font: fontR, color: textDark });
  page.drawText('Supplied and installed by Oneroof Solar Darwin & NT (Call 0483 986 444)', { x: 50, y: y - 155, size: 8.5, font: fontB, color: foxPurple });

  drawFooter(page, 'Oneroof Solar - Authorized Fox ESS Partner | EQ5500 High Voltage Battery Datasheet', fontR);

  fs.writeFileSync(path.join(process.cwd(), 'public', 'downloads', 'Fox ESS EQ5500 High Voltage Storage Battery Datasheet.pdf'), await doc.save());
}

// 3. EP11 Battery
async function genEP11() {
  const doc = await PDFDocument.create();
  const fontR = await doc.embedFont(StandardFonts.Helvetica);
  const fontB = await doc.embedFont(StandardFonts.HelveticaBold);
  const page = doc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  setupPageHeader(page, width, height, fontB, fontR);

  page.drawText('EP11 High Voltage Storage Battery', { x: 40, y: height - 110, size: 20, font: fontB, color: darkNavy });
  page.drawText('10.36kWh High-Capacity LFP Battery | Scalable up to 41.6kWh (4 Units in Parallel)', { x: 40, y: height - 128, size: 10, font: fontB, color: textGray });

  page.drawRectangle({ x: 40, y: height - 200, width: width - 80, height: 60, color: bgLight, borderColor: borderGray, borderWidth: 1 });
  page.drawText('KEY HIGHLIGHTS & COMPATIBILITY:', { x: 50, y: height - 152, size: 8.5, font: fontB, color: darkNavy });
  page.drawText('- Compatible PCS: All Series of Fox ESS H1, KH, H3, H3-Pro, and US Hybrid Inverters', { x: 50, y: height - 167, size: 8, font: fontR, color: textDark });
  page.drawText('- Floor or Wall Mounting | Slimline Profile (710*625*147mm) | 100% Depth of Discharge', { x: 50, y: height - 180, size: 8, font: fontR, color: textDark });
  page.drawText('- 10.36kWh Usable Capacity | 384V Nominal High Voltage | IP65 Weatherproof Housing', { x: 50, y: height - 193, size: 8, font: fontB, color: foxPurple });

  const specs = [
    ['Battery Type', 'LFP (LiFePO4)'],
    ['Nominal Energy / Usable Capacity', '10.36 kWh / 10.36 kWh (100% DoD)'],
    ['Nominal Voltage / Operating Voltage', '384 V / 348 V ~ 438 V'],
    ['Nominal Power', '10,368 W'],
    ['Max. Charge / Discharge Current', '27 A (Recommended 13.5 A)'],
    ['Peak Discharge Current / Peak Charge', '65 A @ 60s / 32.4 A @ 5s'],
    ['Battery Pack Round-Trip Efficiency', '>= 95%'],
    ['Communication & Display', 'CAN Communication | LED*5 status display'],
    ['Scalability', 'Max. 4 Units in Parallel (up to 41.6 kWh)'],
    ['Installation Location & Mounting', 'Outdoor / Indoor (Floor or Wall Mounting)'],
    ['Operating Temperature', 'Charge: 0 ~ 55 C | Discharge: -10 ~ 55 C'],
    ['Cooling Method & Ingress Rating', 'Natural Convection | IP65 Rated'],
    ['Dimensions & Weight', '710 * 625 * 147 mm | 99 +/- 2 kg'],
    ['Certifications & Safety Standards', 'IEC 62619, EN IEC 61000-6-1/3, UN38.3'],
  ];

  let y = height - 220;
  const rh = 18;
  specs.forEach(([label, val]) => {
    page.drawRectangle({ x: 40, y: y - rh, width: width - 80, height: rh, color: rgb(1, 1, 1), borderColor: borderGray, borderWidth: 0.5 });
    page.drawText(label, { x: 50, y: y - 12, size: 7.5, font: fontB, color: darkNavy });
    page.drawText(val, { x: 235, y: y - 12, size: 7.5, font: fontR, color: textDark });
    y -= rh;
  });

  drawFooter(page, 'Oneroof Solar - Authorized Fox ESS Partner | EP11 High Voltage Battery Datasheet', fontR);

  fs.writeFileSync(path.join(process.cwd(), 'public', 'downloads', 'Fox ESS EP11 High Voltage Storage Battery Datasheet.pdf'), await doc.save());
}

// 4. EP12 Plus Battery
async function genEP12Plus() {
  const doc = await PDFDocument.create();
  const fontR = await doc.embedFont(StandardFonts.Helvetica);
  const fontB = await doc.embedFont(StandardFonts.HelveticaBold);
  const page = doc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  setupPageHeader(page, width, height, fontB, fontR);

  page.drawText('EP12 Plus (w) High Voltage Storage Battery', { x: 40, y: height - 110, size: 20, font: fontB, color: darkNavy });
  page.drawText('11.52kWh High-Capacity LFP Battery | Scalable to 46.08kWh (4 Units in Parallel)', { x: 40, y: height - 128, size: 10, font: fontB, color: textGray });

  page.drawRectangle({ x: 40, y: height - 200, width: width - 80, height: 60, color: bgLight, borderColor: borderGray, borderWidth: 1 });
  page.drawText('KEY HIGHLIGHTS & INTEGRATED FIRE PROTECTION:', { x: 50, y: height - 152, size: 8.5, font: fontB, color: darkNavy });
  page.drawText('- Integrated Active Fire Protection Function for maximum residential safety', { x: 50, y: height - 167, size: 8, font: fontR, color: textDark });
  page.drawText('- Floor or Wall Mounting | Compact Dimensions (710*640*185mm) | 100% Depth of Discharge', { x: 50, y: height - 180, size: 8, font: fontR, color: textDark });
  page.drawText('- 11.52kWh Usable Energy | 384V Nominal High Voltage | Scalable to 46.08kWh', { x: 50, y: height - 193, size: 8, font: fontB, color: foxPurple });

  const specs = [
    ['Battery Type', 'LFP (LiFePO4)'],
    ['Nominal Energy / Usable Capacity', '11.52 kWh / 11.52 kWh (100% DoD)'],
    ['Nominal Voltage / Operating Voltage', '384 V / 348 V ~ 438 V'],
    ['Nominal Power', '11.52 kW'],
    ['Max. Charge / Discharge Current', '30 A (Recommended 15 A)'],
    ['Peak Discharge Current / Peak Charge', '65 A @ 60s / 36 A @ 5s'],
    ['Battery Pack Round-Trip Efficiency', '>= 95%'],
    ['Fire Protection Function', 'Integrated (YES)'],
    ['Communication & Display', 'CAN Communication | LED*5 status display'],
    ['Scalability', 'Max. 4 Units in Parallel (up to 46.08 kWh)'],
    ['Installation Location & Mounting', 'Outdoor / Indoor (Floor or Wall Mounting)'],
    ['Operating Temperature', 'Charge: 0 ~ 55 C | Discharge: -10 ~ 55 C'],
    ['Cooling Method & Ingress Rating', 'Natural Convection | IP65 Rated'],
    ['Dimensions & Weight', '710 * 640 * 185 mm | 98 kg'],
    ['Certifications & Safety Standards', 'IEC 62619, EN IEC 61000-6-1/2/3/4, UN38.3'],
  ];

  let y = height - 220;
  const rh = 18;
  specs.forEach(([label, val]) => {
    page.drawRectangle({ x: 40, y: y - rh, width: width - 80, height: rh, color: rgb(1, 1, 1), borderColor: borderGray, borderWidth: 0.5 });
    page.drawText(label, { x: 50, y: y - 12, size: 7.5, font: fontB, color: darkNavy });
    page.drawText(val, { x: 235, y: y - 12, size: 7.5, font: fontR, color: textDark });
    y -= rh;
  });

  drawFooter(page, 'Oneroof Solar - Authorized Fox ESS Partner | EP12 Plus High Voltage Battery Datasheet', fontR);

  fs.writeFileSync(path.join(process.cwd(), 'public', 'downloads', 'Fox ESS EP12 Plus High Voltage Storage Battery Datasheet.pdf'), await doc.save());
}

// 5. H3 Smart Inverter
async function genH3Smart() {
  const doc = await PDFDocument.create();
  const fontR = await doc.embedFont(StandardFonts.Helvetica);
  const fontB = await doc.embedFont(StandardFonts.HelveticaBold);
  const page = doc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  setupPageHeader(page, width, height, fontB, fontR);

  page.drawText('H3 Smart Series Three-Phase Hybrid Inverter', { x: 40, y: height - 110, size: 20, font: fontB, color: darkNavy });
  page.drawText('5kW to 15kW | Three-Phase | 3 MPPTs | High-Voltage Battery Compatible', { x: 40, y: height - 128, size: 10, font: fontB, color: textGray });

  page.drawRectangle({ x: 40, y: height - 200, width: width - 80, height: 60, color: bgLight, borderColor: borderGray, borderWidth: 1 });
  page.drawText('PRODUCT HIGHLIGHTS:', { x: 50, y: height - 152, size: 8.5, font: fontB, color: darkNavy });
  page.drawText('- 3 MPPT Trackers with wide 120-950V operating range | Compatible with HV Lithium batteries (100-800V)', { x: 50, y: height - 167, size: 8, font: fontR, color: textDark });
  page.drawText('- Up to 15kW Charge / Discharge power | Fast EPS switch time < 20ms | IP65 Weatherproof', { x: 50, y: height - 180, size: 8, font: fontR, color: textDark });
  page.drawText('- Advanced FoxCloud V2.0 monitoring with WiFi + LAN + Bluetooth | AS/NZS 4777.2 compliance', { x: 50, y: height - 193, size: 8, font: fontB, color: foxPurple });

  const rows = [
    { name: 'Model', v1: 'H3-5.0-Smart', v2: 'H3-6.0-Smart', v3: 'H3-8.0-Smart', v4: 'H3-9.9-Smart', v5: 'H3-10.0-Smart', v6: 'H3-12.0-Smart', v7: 'H3-15.0-Smart' },
    { name: 'Max. PV Array Power [Wp]', v1: '11,000 W', v2: '14,000 W', v3: '18,000 W', v4: '20,000 W', v5: '20,000 W', v6: '24,000 W', v7: '30,000 W' },
    { name: 'Max. DC Voltage / MPPTs', v1: '1000V / 3', v2: '1000V / 3', v3: '1000V / 3', v4: '1000V / 3', v5: '1000V / 3', v6: '1000V / 3', v7: '1000V / 3' },
    { name: 'Nominal AC Power [W]', v1: '5,000 W', v2: '6,000 W', v3: '8,000 W', v4: '9,900 W', v5: '10,000 W', v6: '12,000 W', v7: '15,000 W' },
    { name: 'Max. Apparent AC Power', v1: '5,500 VA', v2: '6,600 VA', v3: '8,800 VA', v4: '9,900 VA', v5: '11,000 VA', v6: '13,200 VA', v7: '16,500 VA' },
    { name: 'Max. AC Current (Per Phase)', v1: '8.3 A', v2: '10.0 A', v3: '13.3 A', v4: '15.0 A', v5: '16.7 A', v6: '20.0 A', v7: '25.0 A' },
    { name: 'Battery Voltage Range', v1: '100-800 V', v2: '100-800 V', v3: '100-800 V', v4: '100-800 V', v5: '100-800 V', v6: '100-800 V', v7: '100-800 V' },
    { name: 'Max. Charge/Discharge Current', v1: '50.0 A', v2: '50.0 A', v3: '50.0 A', v4: '50.0 A', v5: '50.0 A', v6: '50.0 A', v7: '50.0 A' },
    { name: 'Max. Efficiency / Euro', v1: '97.9% / 97.2%', v2: '97.9% / 97.2%', v3: '97.9% / 97.2%', v4: '97.9% / 97.2%', v5: '97.9% / 97.2%', v6: '97.9% / 97.2%', v7: '97.9% / 97.2%' },
    { name: 'Dimensions & Weight', v1: '600*450*226 / 34kg', v2: '600*450*226 / 34kg', v3: '600*450*226 / 34kg', v4: '600*450*226 / 34kg', v5: '600*450*226 / 34kg', v6: '600*450*226 / 34kg', v7: '600*450*226 / 34kg' },
  ];

  let y = height - 215;
  const rh = 18;
  const col0W = 115;
  const colValW = 56;

  rows.forEach((r, idx) => {
    page.drawRectangle({ x: 40, y: y - rh, width: width - 80, height: rh, color: idx === 0 ? tableHeaderBg : rgb(1, 1, 1), borderColor: borderGray, borderWidth: 0.5 });
    page.drawText(r.name, { x: 44, y: y - 12, size: 6.8, font: idx === 0 ? fontB : fontR, color: darkNavy });
    const vals = [r.v1, r.v2, r.v3, r.v4, r.v5, r.v6, r.v7];
    vals.forEach((v, vIdx) => {
      page.drawText(v, { x: 40 + col0W + vIdx * colValW + 2, y: y - 12, size: 6.2, font: idx === 0 ? fontB : fontR, color: textDark });
    });
    y -= rh;
  });

  drawFooter(page, 'Oneroof Solar - Authorized Fox ESS Partner | H3 Smart Three-Phase Hybrid Inverter Datasheet', fontR);

  fs.writeFileSync(path.join(process.cwd(), 'public', 'downloads', 'Fox ESS H3 Smart Three Phase Hybrid Inverter Datasheet.pdf'), await doc.save());
}

// 6. KH/KA Inverter
async function genKHKA() {
  const doc = await PDFDocument.create();
  const fontR = await doc.embedFont(StandardFonts.Helvetica);
  const fontB = await doc.embedFont(StandardFonts.HelveticaBold);
  const page = doc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  setupPageHeader(page, width, height, fontB, fontR);

  page.drawText('KH / KA Single-Phase Hybrid & AC Inverter', { x: 40, y: height - 110, size: 20, font: fontB, color: darkNavy });
  page.drawText('7kW to 10.5kW | Single-Phase | 3/4 MPPTs | High-Power Residential Hybrid Inverter', { x: 40, y: height - 128, size: 10, font: fontB, color: textGray });

  page.drawRectangle({ x: 40, y: height - 200, width: width - 80, height: 60, color: bgLight, borderColor: borderGray, borderWidth: 1 });
  page.drawText('PRODUCT HIGHLIGHTS (Australian Edition):', { x: 50, y: height - 152, size: 8.5, font: fontB, color: darkNavy });
  page.drawText('- Australian 63A breaker compatible with 14,500 VA maximum throughput', { x: 50, y: height - 167, size: 8, font: fontR, color: textDark });
  page.drawText('- 3 or 4 MPPT Trackers (16A each) | Ultra-low 75V start-up | Up to 21kW PV Array', { x: 50, y: height - 180, size: 8, font: fontR, color: textDark });
  page.drawText('- High-Voltage battery compatibility (85V-480V) with 50A charge/discharge current | IP65 rating', { x: 50, y: height - 193, size: 8, font: fontB, color: foxPurple });

  const rows = [
    { name: 'Model (Hybrid / AC)', v1: 'KH7 / KA7', v2: 'KH8 / KA8', v3: 'KH9 / KA9', v4: 'KH9.9 / KA9.9', v5: 'KH10 / KA10', v6: 'KH10.5 / KA10.5' },
    { name: 'Max. PV Array Power [Wp]', v1: '15,000 W', v2: '16,000 W', v3: '18,000 W', v4: '20,000 W', v5: '20,000 W', v6: '21,000 W' },
    { name: 'No. of MPPT Trackers', v1: '3 MPPT', v2: '3 MPPT', v3: '4 MPPT', v4: '4 MPPT', v5: '4 MPPT', v6: '4 MPPT' },
    { name: 'Nominal AC Power [VA]', v1: '7,000 VA', v2: '8,000 VA', v3: '9,000 VA', v4: '9,900 VA', v5: '10,000 VA', v6: '10,500 VA' },
    { name: 'Max. Apparent Power [VA]', v1: '7,700 VA', v2: '8,800 VA', v3: '9,900 VA', v4: '9,900 VA', v5: '10,500 VA', v6: '10,500 VA' },
    { name: 'Max. AC Current [A]', v1: '33.5 A', v2: '38.3 A', v3: '43.0 A', v4: '43.0 A', v5: '45.7 A', v6: '45.7 A' },
    { name: 'Max. Input AC Power (AU)', v1: '14,000 VA', v2: '14,500 VA', v3: '14,500 VA', v4: '14,500 VA', v5: '14,500 VA', v6: '14,500 VA' },
    { name: 'EPS Peak Power (60s)', v1: '10,000 W', v2: '10,000 W', v3: '12,000 W', v4: '12,000 W', v5: '12,000 W', v6: '12,000 W' },
    { name: 'Max. Efficiency / MPPT', v1: '97.8% / 99.9%', v2: '97.8% / 99.9%', v3: '97.8% / 99.9%', v4: '97.8% / 99.9%', v5: '97.8% / 99.9%', v6: '97.8% / 99.9%' },
    { name: 'Dimensions & Weight', v1: '450*527*208 / 29kg', v2: '450*527*208 / 29kg', v3: '450*527*208 / 29kg', v4: '450*527*208 / 29kg', v5: '450*527*208 / 29kg', v6: '450*527*208 / 29kg' },
  ];

  let y = height - 215;
  const rh = 18;
  const col0W = 115;
  const colValW = 65;

  rows.forEach((r, idx) => {
    page.drawRectangle({ x: 40, y: y - rh, width: width - 80, height: rh, color: idx === 0 ? tableHeaderBg : rgb(1, 1, 1), borderColor: borderGray, borderWidth: 0.5 });
    page.drawText(r.name, { x: 44, y: y - 12, size: 6.8, font: idx === 0 ? fontB : fontR, color: darkNavy });
    const vals = [r.v1, r.v2, r.v3, r.v4, r.v5, r.v6];
    vals.forEach((v, vIdx) => {
      page.drawText(v, { x: 40 + col0W + vIdx * colValW + 2, y: y - 12, size: 6.5, font: idx === 0 ? fontB : fontR, color: textDark });
    });
    y -= rh;
  });

  drawFooter(page, 'Oneroof Solar - Authorized Fox ESS Partner | KH/KA Single-Phase Hybrid Inverter Datasheet', fontR);

  fs.writeFileSync(path.join(process.cwd(), 'public', 'downloads', 'Fox ESS KH KA Single Phase Hybrid Inverter Datasheet.pdf'), await doc.save());
}

// 7. H1(G2) Inverter
async function genH1G2() {
  const doc = await PDFDocument.create();
  const fontR = await doc.embedFont(StandardFonts.Helvetica);
  const fontB = await doc.embedFont(StandardFonts.HelveticaBold);
  const page = doc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  setupPageHeader(page, width, height, fontB, fontR);

  page.drawText('H1(G2) / AC1(G2) Single-Phase Hybrid & AC Inverter', { x: 40, y: height - 110, size: 19, font: fontB, color: darkNavy });
  page.drawText('3kW to 6kW | Single-Phase | 2 MPPTs | High-Voltage Hybrid Inverter (G2 Generation)', { x: 40, y: height - 128, size: 10, font: fontB, color: textGray });

  page.drawRectangle({ x: 40, y: height - 200, width: width - 80, height: 60, color: bgLight, borderColor: borderGray, borderWidth: 1 });
  page.drawText('PRODUCT HIGHLIGHTS & AUSTRALIAN GRID SETTINGS (AS/NZS 4777.2):', { x: 50, y: height - 152, size: 8.5, font: fontB, color: darkNavy });
  page.drawText('- Dual MPPT Trackers (16A each) with wide 80-550V range and 75V low start-up voltage', { x: 50, y: height - 167, size: 8, font: fontR, color: textDark });
  page.drawText('- High-voltage battery interface (80-480V) with 40A charge/discharge current | IP65 rating', { x: 50, y: height - 180, size: 8, font: fontR, color: textDark });
  page.drawText('- EPS emergency backup power switch time < 20ms | Up to 7.2kW peak overload backup (60s)', { x: 50, y: height - 193, size: 8, font: fontB, color: foxPurple });

  const rows = [
    { name: 'Model', v1: 'H1-3.0-E-G2', v2: 'H1-3.7-E-G2', v3: 'H1-4.6-E-G2', v4: 'H1-5.0-E-G2', v5: 'H1-6.0-E-G2' },
    { name: 'Max. PV Array Power [Wp]', v1: '6,000 W', v2: '7,400 W', v3: '9,200 W', v4: '10,000 W', v5: '12,000 W' },
    { name: 'Max. DC Voltage / MPPTs', v1: '600V / 2 (1/1)', v2: '600V / 2 (1/1)', v3: '600V / 2 (1/1)', v4: '600V / 2 (1/1)', v5: '600V / 2 (1/1)' },
    { name: 'Rated Output Power [W]', v1: '3,000 W', v2: '3,680 W', v3: '4,600 W', v4: '5,000 W', v5: '6,000 W' },
    { name: 'Max. Output Apparent Power', v1: '3,300 VA', v2: '4,048 VA', v3: '5,060 VA', v4: '5,500 VA', v5: '6,600 VA' },
    { name: 'Rated Current (AUS)', v1: '13.0 A', v2: '16.0 A', v3: '20.0 A', v4: '21.7 A', v5: '26.1 A' },
    { name: 'Battery Voltage Range', v1: '80-480 V', v2: '80-480 V', v3: '80-480 V', v4: '80-480 V', v5: '80-480 V' },
    { name: 'Max. Charge/Discharge Current', v1: '40.0 A', v2: '40.0 A', v3: '40.0 A', v4: '40.0 A', v5: '40.0 A' },
    { name: 'EPS Peak Output (60s)', v1: '3,600 VA', v2: '4,400 VA', v3: '5,500 VA', v4: '6,000 VA', v5: '7,200 VA' },
    { name: 'Dimensions & Weight', v1: '434*418*185 / 22kg', v2: '434*418*185 / 22kg', v3: '434*418*185 / 22kg', v4: '434*418*185 / 22kg', v5: '434*418*185 / 22kg' },
  ];

  let y = height - 215;
  const rh = 18;
  const col0W = 125;
  const colValW = 75;

  rows.forEach((r, idx) => {
    page.drawRectangle({ x: 40, y: y - rh, width: width - 80, height: rh, color: idx === 0 ? tableHeaderBg : rgb(1, 1, 1), borderColor: borderGray, borderWidth: 0.5 });
    page.drawText(r.name, { x: 44, y: y - 12, size: 6.8, font: idx === 0 ? fontB : fontR, color: darkNavy });
    const vals = [r.v1, r.v2, r.v3, r.v4, r.v5];
    vals.forEach((v, vIdx) => {
      page.drawText(v, { x: 40 + col0W + vIdx * colValW + 2, y: y - 12, size: 6.8, font: idx === 0 ? fontB : fontR, color: textDark });
    });
    y -= rh;
  });

  drawFooter(page, 'Oneroof Solar - Authorized Fox ESS Partner | H1(G2) Single-Phase Hybrid Inverter Datasheet', fontR);

  fs.writeFileSync(path.join(process.cwd(), 'public', 'downloads', 'Fox ESS H1 G2 Single Phase Hybrid Inverter Datasheet.pdf'), await doc.save());
}

// 8. L Series EV Charger
async function genLSeries() {
  const doc = await PDFDocument.create();
  const fontR = await doc.embedFont(StandardFonts.Helvetica);
  const fontB = await doc.embedFont(StandardFonts.HelveticaBold);
  const page = doc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  setupPageHeader(page, width, height, fontB, fontR);

  page.drawText('L Series EV Charger', { x: 40, y: height - 110, size: 20, font: fontB, color: darkNavy });
  page.drawText('7.3kW Single-Phase (L07P) | 11kW Three-Phase (L11P) Smart Residential EV Charger', { x: 40, y: height - 128, size: 10, font: fontB, color: textGray });

  page.drawRectangle({ x: 40, y: height - 200, width: width - 80, height: 60, color: bgLight, borderColor: borderGray, borderWidth: 1 });
  page.drawText('KEY FEATURES:', { x: 50, y: height - 152, size: 8.5, font: fontB, color: darkNavy });
  page.drawText('- Solar Linkage: Use excess rooftop solar PV power directly to charge electric vehicles', { x: 50, y: height - 167, size: 8, font: fontR, color: textDark });
  page.drawText('- Dynamic Load Balancing & Scheduled Time Charging | Bluetooth & WiFi (2.4GHz) control', { x: 50, y: height - 180, size: 8, font: fontR, color: textDark });
  page.drawText('- IP55 & IK08 Robust Durability | Type 2 Tethered Plug (5m / 6m optional)', { x: 50, y: height - 193, size: 8, font: fontB, color: foxPurple });

  const specs = [
    ['Model', 'L07P (Single-Phase)', 'L11P (Three-Phase)'],
    ['Wiring Scheme', '1P + N + PE', '3P + N + PE'],
    ['Input / Output Voltage', '230 Vac +/- 20%', '400 Vac +/- 20%'],
    ['Maximum Current / Power', '32 A / 7.3 kW', '16 A / 11 kW'],
    ['Connector Type', 'Type 2 plug (Tethered 5m standard, 6m optional)', 'Type 2 plug (Tethered 5m standard, 6m optional)'],
    ['Start Mode & Interface', 'Plug & Charge / App control', 'Plug & Charge / App control'],
    ['Connectivity', 'Bluetooth, WiFi (2.4GHz)', 'Bluetooth, WiFi (2.4GHz)'],
    ['Electrical Protection', 'Over/Under Voltage, Overcurrent, Ground Protection, Surge Protection, PEN', 'Over/Under Voltage, Overcurrent, Ground Protection, Surge Protection, PEN'],
    ['Residual Current Detection', 'DC 6mA (Internal RCD-DD IEC 62955)', 'DC 6mA (Internal RCD-DD IEC 62955)'],
    ['Dimensions & Weight', '196 * 197 * 105 mm | 3.7 kg', '196 * 197 * 105 mm | 4.0 kg'],
    ['Mounting & Environment', 'Wall-mount / Post-mount | -25C to +50C | IP55 / IK08', 'Wall-mount / Post-mount | -25C to +50C | IP55 / IK08'],
    ['Certifications', 'CE / CB / RCM (Australia) / UKCA', 'CE / CB / RCM (Australia) / UKCA'],
  ];

  let y = height - 220;
  const rh = 18;
  specs.forEach(([label, v1, v2], idx) => {
    page.drawRectangle({ x: 40, y: y - rh, width: width - 80, height: rh, color: idx === 0 ? tableHeaderBg : rgb(1, 1, 1), borderColor: borderGray, borderWidth: 0.5 });
    page.drawText(label, { x: 50, y: y - 12, size: 7.5, font: idx === 0 ? fontB : fontB, color: darkNavy });
    page.drawText(v1, { x: 180, y: y - 12, size: 7, font: idx === 0 ? fontB : fontR, color: textDark });
    page.drawText(v2, { x: 370, y: y - 12, size: 7, font: idx === 0 ? fontB : fontR, color: textDark });
    y -= rh;
  });

  drawFooter(page, 'Oneroof Solar - Authorized Fox ESS Partner | L Series Smart EV Charger Datasheet', fontR);

  fs.writeFileSync(path.join(process.cwd(), 'public', 'downloads', 'Fox ESS L Series EV Charger Datasheet.pdf'), await doc.save());
}

// 9. L Max Series EV Charger
async function genLMaxSeries() {
  const doc = await PDFDocument.create();
  const fontR = await doc.embedFont(StandardFonts.Helvetica);
  const fontB = await doc.embedFont(StandardFonts.HelveticaBold);
  const page = doc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  setupPageHeader(page, width, height, fontB, fontR);

  page.drawText('L MAX Series EV Charger', { x: 40, y: height - 110, size: 20, font: fontB, color: darkNavy });
  page.drawText('7.3kW Single-Phase | 11kW Three-Phase | RFID + App + OCPP 1.6/2.0.1 Protocol', { x: 40, y: height - 128, size: 10, font: fontB, color: textGray });

  page.drawRectangle({ x: 40, y: height - 200, width: width - 80, height: 60, color: bgLight, borderColor: borderGray, borderWidth: 1 });
  page.drawText('KEY FEATURES:', { x: 50, y: height - 152, size: 8.5, font: fontB, color: darkNavy });
  page.drawText('- Flexible Integration: OCPP 1.6 JSON or 2.0.1 compliant with open MODBUS interface', { x: 50, y: height - 167, size: 8, font: fontR, color: textDark });
  page.drawText('- RFID Access Control: Mifare ISO/IEC 14443 A RFID Card Reader + Plug & Charge + App', { x: 50, y: height - 180, size: 8, font: fontR, color: textDark });
  page.drawText('- Ethernet RJ45 + Bluetooth + WiFi 2.4GHz | Solar Linkage & Dynamic Load Balancing', { x: 50, y: height - 193, size: 8, font: fontB, color: foxPurple });

  const specs = [
    ['Model', 'L07P (Single-Phase)', 'L11P (Three-Phase)'],
    ['Wiring Scheme', '1P + N + PE', '3P + N + PE'],
    ['Input / Output Voltage', '230 Vac +/- 20%', '400 Vac +/- 20%'],
    ['Maximum Current / Power', '32 A / 7.3 kW', '16 A / 11 kW'],
    ['Connector Type', 'Type 2 plug (Tethered 5m standard, 6m optional)', 'Type 2 plug (Tethered 5m standard, 6m optional)'],
    ['RFID Reader / Start Mode', 'Mifare ISO/IEC 14443 A | Plug&Charge / RFID / App', 'Mifare ISO/IEC 14443 A | Plug&Charge / RFID / App'],
    ['Communication Protocols', 'Ethernet RJ45, WiFi, BLE, OCPP 1.6/2.0.1', 'Ethernet RJ45, WiFi, BLE, OCPP 1.6/2.0.1'],
    ['Electrical Protection', 'Over/Under Voltage, Overcurrent, Ground, Surge, PEN', 'Over/Under Voltage, Overcurrent, Ground, Surge, PEN'],
    ['Residual Current Detection', 'DC 6mA (Internal RCD-DD IEC 62955)', 'DC 6mA (Internal RCD-DD IEC 62955)'],
    ['Dimensions & Weight', '196 * 197 * 105 mm | 3.7 kg', '196 * 197 * 105 mm | 4.0 kg'],
    ['Mounting & Ingress', 'Wall-mount / Post-mount | IP55 / IK08', 'Wall-mount / Post-mount | IP55 / IK08'],
    ['Certifications', 'CE / CB / RCM (Australia) / UKCA', 'CE / CB / RCM (Australia) / UKCA'],
  ];

  let y = height - 220;
  const rh = 18;
  specs.forEach(([label, v1, v2], idx) => {
    page.drawRectangle({ x: 40, y: y - rh, width: width - 80, height: rh, color: idx === 0 ? tableHeaderBg : rgb(1, 1, 1), borderColor: borderGray, borderWidth: 0.5 });
    page.drawText(label, { x: 50, y: y - 12, size: 7.5, font: idx === 0 ? fontB : fontB, color: darkNavy });
    page.drawText(v1, { x: 180, y: y - 12, size: 7, font: idx === 0 ? fontB : fontR, color: textDark });
    page.drawText(v2, { x: 370, y: y - 12, size: 7, font: idx === 0 ? fontB : fontR, color: textDark });
    y -= rh;
  });

  drawFooter(page, 'Oneroof Solar - Authorized Fox ESS Partner | L MAX Series Smart EV Charger Datasheet', fontR);

  fs.writeFileSync(path.join(process.cwd(), 'public', 'downloads', 'Fox ESS L Max Series EV Charger Datasheet.pdf'), await doc.save());
}

// 10. A Series EV Charger
async function genASeries() {
  const doc = await PDFDocument.create();
  const fontR = await doc.embedFont(StandardFonts.Helvetica);
  const fontB = await doc.embedFont(StandardFonts.HelveticaBold);
  const page = doc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  setupPageHeader(page, width, height, fontB, fontR);

  page.drawText('A Series Smart EV Charger', { x: 40, y: height - 110, size: 20, font: fontB, color: darkNavy });
  page.drawText('7.3kW / 11kW / 22kW | Plug & Socket Versions | V2G Ready (ISO 15118)', { x: 40, y: height - 128, size: 10, font: fontB, color: textGray });

  page.drawRectangle({ x: 40, y: height - 200, width: width - 80, height: 60, color: bgLight, borderColor: borderGray, borderWidth: 1 });
  page.drawText('KEY FEATURES:', { x: 50, y: height - 152, size: 8.5, font: fontB, color: darkNavy });
  page.drawText('- Available in Tethered Plug (with 6m cable) or Universal Socket (with shutter) versions', { x: 50, y: height - 167, size: 8, font: fontR, color: textDark });
  page.drawText('- Advanced V2G hardware-ready (ISO 15118) | OCPP 1.6 / 2.0.1 | 4G LTE optional', { x: 50, y: height - 180, size: 8, font: fontR, color: textDark });
  page.drawText('- Robust Body-IP65 / Socket-IP55 | IK08 | AC 30mA + DC 6mA Built-in RCD', { x: 50, y: height - 193, size: 8, font: fontB, color: foxPurple });

  const rows = [
    { name: 'Model (Plug Version)', v1: 'A7300P1-E-B', v2: 'A011KP1-E-B', v3: 'A022KP1-E-B' },
    { name: 'Model (Socket Version)', v1: 'A7300S1 / T2S-B', v2: 'A011KS1 / T2S-B', v3: 'A022KS1 / T2S-B' },
    { name: 'Wiring Scheme', v1: '1P + N + PE', v2: '3P + N + PE', v3: '3P + N + PE' },
    { name: 'Rated Voltage / Current', v1: '230V / 32 A', v2: '400V / 16 A', v3: '400V / 32 A' },
    { name: 'Max. AC Power [kW]', v1: '7.3 kW', v2: '11 kW', v3: '22 kW' },
    { name: 'Connector Options', v1: 'Type 2 (6m Cable or Socket)', v2: 'Type 2 (6m Cable or Socket)', v3: 'Type 2 (6m Cable or Socket)' },
    { name: 'Connectivity', v1: 'BLE, WiFi, RJ45, 4G, OCPP', v2: 'BLE, WiFi, RJ45, 4G, OCPP', v3: 'BLE, WiFi, RJ45, 4G, OCPP' },
    { name: 'Residual Current Detection', v1: 'AC 30mA + DC 6mA', v2: 'AC 30mA + DC 6mA', v3: 'AC 30mA + DC 6mA' },
    { name: 'Dimensions & Weight (Plug)', v1: '190*320*130mm | <=6.3kg', v2: '190*320*130mm | <=6.3kg', v3: '190*320*130mm | <=6.3kg' },
    { name: 'Dimensions & Weight (Socket)', v1: '190*320*144mm | <=3.2kg', v2: '190*320*144mm | <=3.2kg', v3: '190*320*144mm | <=3.2kg' },
  ];

  let y = height - 215;
  const rh = 18;
  const col0W = 150;
  const colValW = 120;

  rows.forEach((r, idx) => {
    page.drawRectangle({ x: 40, y: y - rh, width: width - 80, height: rh, color: idx === 0 ? tableHeaderBg : rgb(1, 1, 1), borderColor: borderGray, borderWidth: 0.5 });
    page.drawText(r.name, { x: 44, y: y - 12, size: 6.8, font: idx <= 1 ? fontB : fontB, color: darkNavy });
    const vals = [r.v1, r.v2, r.v3];
    vals.forEach((v, vIdx) => {
      page.drawText(v, { x: 40 + col0W + vIdx * colValW + 2, y: y - 12, size: 6.8, font: idx <= 1 ? fontB : fontR, color: textDark });
    });
    y -= rh;
  });

  drawFooter(page, 'Oneroof Solar - Authorized Fox ESS Partner | A Series Smart EV Charger Datasheet', fontR);

  fs.writeFileSync(path.join(process.cwd(), 'public', 'downloads', 'Fox ESS A Series EV Charger Datasheet.pdf'), await doc.save());
}

// 11. C Series Commercial EV Charger
async function genCSeries() {
  const doc = await PDFDocument.create();
  const fontR = await doc.embedFont(StandardFonts.Helvetica);
  const fontB = await doc.embedFont(StandardFonts.HelveticaBold);
  const page = doc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  setupPageHeader(page, width, height, fontB, fontR);

  page.drawText('C Series Commercial Dual EV Charger', { x: 40, y: height - 110, size: 20, font: fontB, color: darkNavy });
  page.drawText('14.6kW / 22kW / 44kW Dual Port | Commercial Billing & Cloud QR Payment Ready', { x: 40, y: height - 128, size: 10, font: fontB, color: textGray });

  page.drawRectangle({ x: 40, y: height - 200, width: width - 80, height: 60, color: bgLight, borderColor: borderGray, borderWidth: 1 });
  page.drawText('COMMERCIAL FEATURES & DUAL-GUN CAPABILITY:', { x: 50, y: height - 152, size: 8.5, font: fontB, color: darkNavy });
  page.drawText('- Dual Output Channels: Simultaneous dual EV charging (7.3kW*2, 11kW*2, 22kW*2)', { x: 50, y: height - 167, size: 8, font: fontR, color: textDark });
  page.drawText('- 3.5 inch IPS-TFT LCD Screen | QR Code Cloud Payment & RFID Mifare ISO 14443 A billing', { x: 50, y: height - 180, size: 8, font: fontR, color: textDark });
  page.drawText('- Integrated Dual MID-Certified Energy Meters | OCPP 1.6 / 2.0.1 | Heavy-duty IK10 & IP55', { x: 50, y: height - 193, size: 8, font: fontB, color: foxPurple });

  const rows = [
    { name: 'Model (Dual Cable)', v1: 'C014KP2-E-1 (7.3kW*2)', v2: 'C022KP2-E-1 (11kW*2)', v3: 'C044KP2-E-1 (22kW*2)' },
    { name: 'Model (Dual Socket)', v1: 'C014KS2-E-1 / T2S-1', v2: 'C022KS2-E-1 / T2S-1', v3: 'C044KS2-E-1 / T2S-1' },
    { name: 'Wiring Scheme', v1: 'L / N / PE (Single Phase)', v2: '3L / N / PE (Three Phase)', v3: '3L / N / PE (Three Phase)' },
    { name: 'Rated Voltage / Current', v1: '230 Vac / 64 A total', v2: '400 Vac / 32 A total', v3: '400 Vac / 64 A total' },
    { name: 'Max. AC Power [kW]', v1: '7.3 kW * 2 (14.6 kW)', v2: '11 kW * 2 (22 kW)', v3: '22 kW * 2 (44 kW)' },
    { name: 'Display & Payment', v1: '3.5" IPS-TFT / QR / RFID', v2: '3.5" IPS-TFT / QR / RFID', v3: '3.5" IPS-TFT / QR / RFID' },
    { name: 'Integrated MID Meter', v1: 'YES (Built-in Dual MID)', v2: 'YES (Built-in Dual MID)', v3: 'YES (Built-in Dual MID)' },
    { name: 'Communication', v1: 'Ethernet RJ45*2, WiFi, BLE, 4G', v2: 'Ethernet RJ45*2, WiFi, BLE, 4G', v3: 'Ethernet RJ45*2, WiFi, BLE, 4G' },
    { name: 'Impact & Ingress Rating', v1: 'IK10 / IP55 (Salt-mist treated)', v2: 'IK10 / IP55 (Salt-mist treated)', v3: 'IK10 / IP55 (Salt-mist treated)' },
    { name: 'Dimensions & Weight', v1: '365*527*150mm | <=18kg', v2: '365*527*150mm | <=18kg', v3: '365*527*150mm | <=18kg' },
  ];

  let y = height - 215;
  const rh = 18;
  const col0W = 150;
  const colValW = 120;

  rows.forEach((r, idx) => {
    page.drawRectangle({ x: 40, y: y - rh, width: width - 80, height: rh, color: idx === 0 ? tableHeaderBg : rgb(1, 1, 1), borderColor: borderGray, borderWidth: 0.5 });
    page.drawText(r.name, { x: 44, y: y - 12, size: 6.8, font: idx <= 1 ? fontB : fontB, color: darkNavy });
    const vals = [r.v1, r.v2, r.v3];
    vals.forEach((v, vIdx) => {
      page.drawText(v, { x: 40 + col0W + vIdx * colValW + 2, y: y - 12, size: 6.8, font: idx <= 1 ? fontB : fontR, color: textDark });
    });
    y -= rh;
  });

  drawFooter(page, 'Oneroof Solar - Authorized Fox ESS Partner | C Series Commercial Dual EV Charger Datasheet', fontR);

  fs.writeFileSync(path.join(process.cwd(), 'public', 'downloads', 'Fox ESS C Series Dual EV Charger Datasheet.pdf'), await doc.save());
}

async function generateAll() {
  console.log('Generating Fox ESS PDFs...');
  await genEQ4800();
  await genEQ5500();
  await genEP11();
  await genEP12Plus();
  await genH3Smart();
  await genKHKA();
  await genH1G2();
  await genLSeries();
  await genLMaxSeries();
  await genASeries();
  await genCSeries();
  console.log('All 11 Fox ESS PDFs generated successfully!');
}

generateAll().catch(console.error);
