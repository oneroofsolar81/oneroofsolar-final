import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateJinkoPDF() {
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // --- PAGE 1 ---
  const page1 = pdfDoc.addPage([595.28, 841.89]); // A4
  
  // Background header bar
  page1.drawRectangle({
    x: 0,
    y: 780,
    width: 595.28,
    height: 61.89,
    color: rgb(0.97, 0.98, 0.97)
  });

  // Logo text
  page1.drawText('www.jinkosolar.com', { x: 40, y: 805, size: 11, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  page1.drawText('Jinko Solar', { x: 440, y: 802, size: 22, font: fontBold, color: rgb(0.18, 0.55, 0.15) });

  // Main Branding Title
  page1.drawText('Tiger Neo', { x: 40, y: 720, size: 42, font: fontBold, color: rgb(0.15, 0.58, 0.22) });
  page1.drawText('48HL4M-DV', { x: 40, y: 670, size: 30, font: fontBold, color: rgb(0.15, 0.15, 0.15) });
  page1.drawText('440-470 Watt', { x: 40, y: 630, size: 26, font: fontBold, color: rgb(0.2, 0.2, 0.2) });
  page1.drawText('MONO-FACIAL MODULE WITH DUAL GLASS', { x: 40, y: 602, size: 13, font: fontBold, color: rgb(0.35, 0.35, 0.35) });
  page1.drawText('N-type', { x: 40, y: 575, size: 20, font: fontBold, color: rgb(0.15, 0.15, 0.15) });

  // Decorative right panel graphic placeholder box
  page1.drawRectangle({
    x: 350,
    y: 560,
    width: 205,
    height: 200,
    color: rgb(0.12, 0.18, 0.15),
    borderColor: rgb(0.25, 0.65, 0.3),
    borderWidth: 2
  });
  page1.drawText('Jinko N-Type', { x: 385, y: 670, size: 16, font: fontBold, color: rgb(1, 1, 1) });
  page1.drawText('TOPCon Dual Glass', { x: 375, y: 645, size: 14, font: fontRegular, color: rgb(0.8, 0.95, 0.8) });
  page1.drawText('440W - 470W', { x: 395, y: 615, size: 16, font: fontBold, color: rgb(0.36, 0.85, 0.3) });

  // Divider line
  page1.drawLine({ start: { x: 40, y: 545 }, end: { x: 555, y: 545 }, thickness: 1.5, color: rgb(0.2, 0.6, 0.25) });

  // Section 1: HOT 3.0 Technology
  page1.drawText('HOT 3.0 Technology', { x: 40, y: 518, size: 16, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  page1.drawText("N-type modules with JinkoSolar's HOT 3.0 technology offer better reliability and efficiency.", {
    x: 40,
    y: 495,
    size: 10.5,
    font: fontRegular,
    color: rgb(0.25, 0.25, 0.25)
  });

  // Section 2: Mechanical Load Enhanced
  page1.drawText('Mechanical Load Enhanced', { x: 40, y: 450, size: 15, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  page1.drawText('Certified to withstand:', { x: 40, y: 432, size: 10, font: fontBold, color: rgb(0.3, 0.3, 0.3) });
  page1.drawText('• 5400 Pa front side max static test load', { x: 40, y: 415, size: 10, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  page1.drawText('• 2400 Pa rear side max static test load', { x: 40, y: 400, size: 10, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });

  // Warranty Box (Right Side)
  page1.drawRectangle({
    x: 350,
    y: 380,
    width: 205,
    height: 150,
    color: rgb(0.96, 0.98, 0.96),
    borderColor: rgb(0.8, 0.88, 0.8),
    borderWidth: 1
  });
  page1.drawText('WARRANTY & DEGRADATION', { x: 362, y: 510, size: 10, font: fontBold, color: rgb(0.2, 0.2, 0.2) });
  
  page1.drawText('25 Year', { x: 362, y: 480, size: 18, font: fontBold, color: rgb(0.15, 0.58, 0.22) });
  page1.drawText('Product Warranty', { x: 362, y: 466, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });

  page1.drawText('30 Year', { x: 455, y: 480, size: 18, font: fontBold, color: rgb(0.15, 0.58, 0.22) });
  page1.drawText('Linear Power Warranty', { x: 455, y: 466, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });

  page1.drawText('1%', { x: 362, y: 435, size: 16, font: fontBold, color: rgb(0.2, 0.2, 0.2) });
  page1.drawText('1st-year Degradation', { x: 362, y: 422, size: 8.5, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });

  page1.drawText('0.40%', { x: 455, y: 435, size: 16, font: fontBold, color: rgb(0.2, 0.2, 0.2) });
  page1.drawText('Annual Y2-30 (87.4%)', { x: 455, y: 422, size: 8.5, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });

  // Standards and Quality Compliance
  page1.drawText('Certifications & Compliance:', { x: 40, y: 350, size: 12, font: fontBold, color: rgb(0.15, 0.15, 0.15) });
  const certs = [
    '• IEC61215:2021 / IEC61730:2023',
    '• ISO9001:2015: Quality Management System',
    '• ISO14001:2015: Environment Management System',
    '• ISO45001:2018: Occupational Health and Safety Management System',
    '• TUV SUD | CE | PV CYCLE | Clean Energy Council Member | Positive Quality'
  ];
  certs.forEach((cert, idx) => {
    page1.drawText(cert, { x: 40, y: 330 - idx * 18, size: 10, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  });

  // Footer Model Code
  page1.drawText('Model Code: JKM440-470N-48HL4M-DV-Z1C1-OC', { x: 40, y: 50, size: 11, font: fontBold, color: rgb(0.2, 0.2, 0.2) });


  // --- PAGE 2 ---
  const page2 = pdfDoc.addPage([595.28, 841.89]);

  // Title
  page2.drawText('JKMxxxN-48HL4M-DV (xxx=440-470, in steps of 5)', { x: 40, y: 805, size: 16, font: fontBold, color: rgb(0.15, 0.58, 0.22) });

  // Mechanical Characteristics Table Header
  page2.drawRectangle({ x: 40, y: 768, width: 515, height: 22, color: rgb(0.9, 0.94, 0.9) });
  page2.drawText('Mechanical Characteristics', { x: 45, y: 774, size: 12, font: fontBold, color: rgb(0.1, 0.4, 0.15) });

  const mechSpecs = [
    ['Cell Type', 'N-type Mono-crystalline'],
    ['No. of cells', '96 (48 x 2)'],
    ['Dimensions', '1762 x 1134 x 30 mm'],
    ['Weight', '20.0 kg'],
    ['Front Glass', '1.6 mm, Anti-reflection Coating'],
    ['Back Glass', '1.6 mm, Heat Strengthened Glass'],
    ['Frame', 'Anodized Aluminium Alloy'],
    ['Junction Box', 'IP68 Rated'],
    ['Protection Class', 'Class II'],
    ['Connector Type', 'PV-JK03M/xy (Jinko) / PV-KST4-EVO2A/xy (Staubli)'],
    ['Output Cables', '4.0 mm2, (+): 400 mm, (-): 200 mm']
  ];

  mechSpecs.forEach((row, i) => {
    const yPos = 746 - i * 18;
    if (i % 2 === 1) {
      page2.drawRectangle({ x: 40, y: yPos - 3, width: 515, height: 18, color: rgb(0.97, 0.97, 0.97) });
    }
    page2.drawText(row[0], { x: 45, y: yPos, size: 9.5, font: fontBold, color: rgb(0.25, 0.25, 0.25) });
    page2.drawText(row[1], { x: 220, y: yPos, size: 9.5, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  });

  // Specifications STC Table
  page2.drawRectangle({ x: 40, y: 528, width: 515, height: 22, color: rgb(0.9, 0.94, 0.9) });
  page2.drawText('Specifications (STC: Irradiance 1000W/m2, Cell Temp 25°C, AM=1.5)', { x: 45, y: 534, size: 11, font: fontBold, color: rgb(0.1, 0.4, 0.15) });

  const stcHeaders = ['Parameter', '440', '445', '450', '455', '460', '465', '470'];
  const stcRows = [
    ['Maximum Power (Pmax) [Wp]', '440', '445', '450', '455', '460', '465', '470'],
    ['Maximum Power Voltage (Vmp) [V]', '29.57', '29.81', '30.04', '30.28', '30.51', '30.74', '30.97'],
    ['Maximum Power Current (Imp) [A]', '14.88', '14.93', '14.98', '15.03', '15.08', '15.13', '15.18'],
    ['Open-circuit Voltage (Voc) [V]', '35.54', '35.71', '35.88', '36.05', '36.22', '36.39', '36.56'],
    ['Short-circuit Current (Isc) [A]', '15.73', '15.78', '15.83', '15.88', '15.93', '15.98', '16.03'],
    ['Module Efficiency STC [%]', '22.02%', '22.27%', '22.52%', '22.77%', '23.02%', '23.27%', '23.52%']
  ];

  // Header row
  page2.drawRectangle({ x: 40, y: 508, width: 515, height: 18, color: rgb(0.85, 0.88, 0.85) });
  stcHeaders.forEach((h, colIdx) => {
    const xPos = colIdx === 0 ? 45 : 220 + (colIdx - 1) * 46;
    page2.drawText(h, { x: xPos, y: 513, size: 8.5, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  });

  stcRows.forEach((row, rowIdx) => {
    const yPos = 488 - rowIdx * 18;
    if (rowIdx % 2 === 1) {
      page2.drawRectangle({ x: 40, y: yPos - 3, width: 515, height: 18, color: rgb(0.97, 0.97, 0.97) });
    }
    row.forEach((cell, colIdx) => {
      const xPos = colIdx === 0 ? 45 : 220 + (colIdx - 1) * 46;
      page2.drawText(cell, {
        x: xPos,
        y: yPos,
        size: 8.5,
        font: colIdx === 0 ? fontBold : fontRegular,
        color: rgb(0.25, 0.25, 0.25)
      });
    });
  });

  // Application & Temperature Conditions Table
  page2.drawRectangle({ x: 40, y: 358, width: 515, height: 22, color: rgb(0.9, 0.94, 0.9) });
  page2.drawText('Application Conditions & Temperature Coefficients', { x: 45, y: 364, size: 11, font: fontBold, color: rgb(0.1, 0.4, 0.15) });

  const appSpecs = [
    ['Operating Temperature', '-40 °C ~ +70 °C'],
    ['Maximum System Voltage', '1500 VDC (IEC)'],
    ['Maximum Series Fuse Rating', '30 A'],
    ['Temperature Coefficient of Pmax', '-0.29 %/°C'],
    ['Temperature Coefficient of Voc', '-0.25 %/°C'],
    ['Temperature Coefficient of Isc', '0.045 %/°C']
  ];

  appSpecs.forEach((row, i) => {
    const yPos = 338 - i * 18;
    if (i % 2 === 1) {
      page2.drawRectangle({ x: 40, y: yPos - 3, width: 515, height: 18, color: rgb(0.97, 0.97, 0.97) });
    }
    page2.drawText(row[0], { x: 45, y: yPos, size: 9, font: fontBold, color: rgb(0.25, 0.25, 0.25) });
    page2.drawText(row[1], { x: 250, y: yPos, size: 9, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  });

  // Footer branding
  page2.drawText('Jinko Solar Co., Ltd.  |  www.jinkosolar.com  |  www.jinkosolar.com.au', { x: 40, y: 50, size: 10, font: fontRegular, color: rgb(0.4, 0.4, 0.4) });
  page2.drawText('Made in China  |  JKM440-470N-48HL4M-DV-Z1C1-OC', { x: 320, y: 50, size: 10, font: fontBold, color: rgb(0.2, 0.2, 0.2) });

  const pdfBytes = await pdfDoc.save();

  // Ensure directories exist
  const publicDir = path.join(process.cwd(), 'public');
  const downloadsDir = path.join(publicDir, 'downloads');

  if (!fs.existsSync(downloadsDir)) {
    fs.mkdirSync(downloadsDir, { recursive: true });
  }

  // Write to both /public/downloads/ and /public/
  const targetPathDownloads = path.join(downloadsDir, 'jinko-tiger-neo-440-470w-datasheet.pdf');
  const targetPathPublic = path.join(publicDir, 'jinko-tiger-neo-440-470w-datasheet.pdf');

  fs.writeFileSync(targetPathDownloads, pdfBytes);
  fs.writeFileSync(targetPathPublic, pdfBytes);

  console.log(`PDF saved successfully to:\n- ${targetPathDownloads}\n- ${targetPathPublic}`);
}

generateJinkoPDF().catch(console.error);
