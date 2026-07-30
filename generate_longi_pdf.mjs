import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateLongiPDF() {
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // --- PAGE 1 ---
  const page1 = pdfDoc.addPage([595.28, 841.89]); // A4
  
  // Header logo bar
  page1.drawRectangle({
    x: 0,
    y: 780,
    width: 595.28,
    height: 61.89,
    color: rgb(0.97, 0.98, 0.97)
  });

  page1.drawText('LONGi Solar', { x: 40, y: 802, size: 24, font: fontBold, color: rgb(0.82, 0.1, 0.1) });
  page1.drawText('Hi-MO X10 Explorer', { x: 40, y: 720, size: 36, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  page1.drawText('LR7-54HVH 475~490M', { x: 40, y: 675, size: 28, font: fontBold, color: rgb(0.82, 0.1, 0.1) });

  // Key Features
  const features = [
    '• Suitable for Distribution Market',
    '• Highest efficiency with the best energy generation performance',
    '• TaiRay wafer & BC technology enhances high product reliability',
    '• Smart manufacturing & LONGi product lifecycle standards deliver exceptional product quality'
  ];

  features.forEach((feat, idx) => {
    page1.drawText(feat, { x: 40, y: 620 - idx * 24, size: 11, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
  });

  // Warranty Box
  page1.drawRectangle({
    x: 40,
    y: 450,
    width: 250,
    height: 60,
    color: rgb(0.96, 0.96, 0.98),
    borderColor: rgb(0.8, 0.8, 0.9),
    borderWidth: 1
  });
  page1.drawText('15 Year', { x: 50, y: 485, size: 18, font: fontBold, color: rgb(0.82, 0.1, 0.1) });
  page1.drawText('15-year Warranty for Materials and Processing', { x: 50, y: 462, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });

  page1.drawRectangle({
    x: 305,
    y: 450,
    width: 250,
    height: 60,
    color: rgb(0.96, 0.96, 0.98),
    borderColor: rgb(0.8, 0.8, 0.9),
    borderWidth: 1
  });
  page1.drawText('30 Year', { x: 315, y: 485, size: 18, font: fontBold, color: rgb(0.82, 0.1, 0.1) });
  page1.drawText('30-year Warranty for Extra Linear Power Output', { x: 315, y: 462, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });

  // System and Product Certifications
  page1.drawText('Complete System and Product Certifications:', { x: 40, y: 390, size: 13, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  const certs = [
    '• IEC 61215, IEC 61730, UL 61730',
    '• ISO9001:2015: ISO Quality Management System',
    '• ISO14001: 2015: ISO Environment Management System',
    '• ISO45001: 2018: Occupational Health and Safety',
    '• IEC62941: Guideline for module design qualification and type approval'
  ];
  certs.forEach((cert, idx) => {
    page1.drawText(cert, { x: 40, y: 365 - idx * 20, size: 10, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  });

  page1.drawText('LONGi Solar  |  Hi-MO X10 Explorer  |  LR7-54HVH 475~490M', { x: 40, y: 50, size: 11, font: fontBold, color: rgb(0.2, 0.2, 0.2) });

  // --- PAGE 2 ---
  const page2 = pdfDoc.addPage([595.28, 841.89]);

  // Highlights Bar
  page2.drawRectangle({ x: 40, y: 770, width: 515, height: 40, color: rgb(0.15, 0.15, 0.18) });
  page2.drawText('24.0% MAX EFFICIENCY  |  0~3% TOLERANCE  |  <1% Y1 DEGRADATION  |  0.35% Y2-30  |  BC-CELL', {
    x: 50, y: 785, size: 9, font: fontBold, color: rgb(1, 1, 1)
  });

  // Mechanical Parameters Table
  page2.drawRectangle({ x: 40, y: 730, width: 515, height: 20, color: rgb(0.92, 0.92, 0.94) });
  page2.drawText('Mechanical Parameters', { x: 45, y: 736, size: 11, font: fontBold, color: rgb(0.1, 0.1, 0.1) });

  const mechParams = [
    ['Cell Orientation', '108 (6 x 18)'],
    ['Junction Box', 'IP68, three diodes'],
    ['Output Cable', '4mm2, +400, -200mm / +/-1200mm length customized'],
    ['Glass', 'Single glass, 3.2mm coated tempered glass'],
    ['Frame', 'Anodized aluminum alloy frame'],
    ['Weight', '21.6kg'],
    ['Dimension', '1800 x 1134 x 30mm'],
    ['Packaging', '36pcs per pallet / 216pcs per 20 GP / 864pcs per 40 HC']
  ];

  mechParams.forEach((row, i) => {
    const yPos = 710 - i * 18;
    if (i % 2 === 1) {
      page2.drawRectangle({ x: 40, y: yPos - 3, width: 515, height: 18, color: rgb(0.97, 0.97, 0.97) });
    }
    page2.drawText(row[0], { x: 45, y: yPos, size: 9, font: fontBold, color: rgb(0.2, 0.2, 0.2) });
    page2.drawText(row[1], { x: 180, y: yPos, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  });

  // Electrical Characteristics STC Table
  page2.drawRectangle({ x: 40, y: 535, width: 515, height: 20, color: rgb(0.92, 0.92, 0.94) });
  page2.drawText('Electrical Characteristics (STC : AM1.5 1000W/m2 25°C)', { x: 45, y: 541, size: 11, font: fontBold, color: rgb(0.1, 0.1, 0.1) });

  const stcHeaders = ['Module Type', 'LR7-54HVH-475M', 'LR7-54HVH-480M', 'LR7-54HVH-485M', 'LR7-54HVH-490M'];
  const stcRows = [
    ['Maximum Power (Pmax/W)', '475', '480', '485', '490'],
    ['Open Circuit Voltage (Voc/V)', '40.18', '40.29', '40.40', '40.52'],
    ['Short Circuit Current (Isc/A)', '15.03', '15.13', '15.23', '15.33'],
    ['Voltage at Max Power (Vmp/V)', '33.16', '33.28', '33.40', '33.51'],
    ['Current at Max Power (Imp/A)', '14.33', '14.43', '14.53', '14.63'],
    ['Module Efficiency (%)', '23.3%', '23.5%', '23.8%', '24.0%']
  ];

  // Table header
  page2.drawRectangle({ x: 40, y: 515, width: 515, height: 18, color: rgb(0.85, 0.85, 0.88) });
  stcHeaders.forEach((h, colIdx) => {
    const xPos = colIdx === 0 ? 45 : 200 + (colIdx - 1) * 85;
    page2.drawText(h, { x: xPos, y: 520, size: 8.5, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  });

  stcRows.forEach((row, rowIdx) => {
    const yPos = 495 - rowIdx * 18;
    if (rowIdx % 2 === 1) {
      page2.drawRectangle({ x: 40, y: yPos - 3, width: 515, height: 18, color: rgb(0.97, 0.97, 0.97) });
    }
    row.forEach((cell, colIdx) => {
      const xPos = colIdx === 0 ? 45 : 200 + (colIdx - 1) * 85;
      page2.drawText(cell, {
        x: xPos,
        y: yPos,
        size: 8.5,
        font: colIdx === 0 ? fontBold : fontRegular,
        color: rgb(0.2, 0.2, 0.2)
      });
    });
  });

  // Operating Parameters & Ratings Table
  page2.drawRectangle({ x: 40, y: 365, width: 515, height: 20, color: rgb(0.92, 0.92, 0.94) });
  page2.drawText('Operating Parameters & Temperature Ratings', { x: 45, y: 371, size: 11, font: fontBold, color: rgb(0.1, 0.1, 0.1) });

  const opParams = [
    ['Operational Temperature', '-40 °C ~ +85 °C'],
    ['Maximum System Voltage', 'DC1500V (IEC)'],
    ['Maximum Series Fuse Rating', '25A'],
    ['Front Side Max Static Loading', '5400Pa'],
    ['Rear Side Max Static Loading', '2400Pa'],
    ['Temperature Coefficient of Pmax', '-0.260 %/°C'],
    ['Temperature Coefficient of Voc', '-0.200 %/°C'],
    ['Temperature Coefficient of Isc', '+0.050 %/°C']
  ];

  opParams.forEach((row, i) => {
    const yPos = 345 - i * 18;
    if (i % 2 === 1) {
      page2.drawRectangle({ x: 40, y: yPos - 3, width: 515, height: 18, color: rgb(0.97, 0.97, 0.97) });
    }
    page2.drawText(row[0], { x: 45, y: yPos, size: 9, font: fontBold, color: rgb(0.2, 0.2, 0.2) });
    page2.drawText(row[1], { x: 250, y: yPos, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  });

  page2.drawText('LONGi Solar  |  Specifications in this datasheet are subject to change without notice.', { x: 40, y: 50, size: 9, font: fontRegular, color: rgb(0.4, 0.4, 0.4) });

  const pdfBytes = await pdfDoc.save();

  const publicDir = path.join(process.cwd(), 'public');
  const downloadsDir = path.join(publicDir, 'downloads');

  if (!fs.existsSync(downloadsDir)) {
    fs.mkdirSync(downloadsDir, { recursive: true });
  }

  const targetPathDownloads = path.join(downloadsDir, 'longi-hi-mo-x10-lr7-54hvh-datasheet.pdf');
  const targetPathPublic = path.join(publicDir, 'longi-hi-mo-x10-lr7-54hvh-datasheet.pdf');

  fs.writeFileSync(targetPathDownloads, pdfBytes);
  fs.writeFileSync(targetPathPublic, pdfBytes);

  console.log(`LONGi PDF saved successfully to:\n- ${targetPathDownloads}\n- ${targetPathPublic}`);
}

generateLongiPDF().catch(console.error);
