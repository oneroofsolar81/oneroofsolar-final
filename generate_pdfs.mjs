import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generatePDFs() {
  // --- PDF 1: AIKO 470 panles.pdf ---
  const pdfDoc1 = await PDFDocument.create();
  const fontBold = await pdfDoc1.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc1.embedFont(StandardFonts.Helvetica);

  // Page 1
  let page1 = pdfDoc1.addPage([595.28, 841.89]); // A4
  page1.drawRectangle({ x: 0, y: 0, width: 595.28, height: 841.89, color: rgb(0.07, 0.09, 0.08) });
  
  page1.drawText('AIKO', { x: 420, y: 780, size: 28, font: fontBold, color: rgb(1, 1, 1) });
  page1.drawText('NEOSTAR', { x: 80, y: 680, size: 48, font: fontBold, color: rgb(1, 1, 1) });
  page1.drawText('2S Mono-Glass Module', { x: 80, y: 630, size: 24, font: fontRegular, color: rgb(0.8, 0.8, 0.8) });
  page1.drawText('440W - 470W', { x: 80, y: 590, size: 32, font: fontBold, color: rgb(0.36, 0.79, 0.3) });

  page1.drawText('Technical Features:', { x: 80, y: 480, size: 18, font: fontBold, color: rgb(1, 0.6, 0.2) });
  const features1 = [
    '• Partial Shading Optimisation',
    '• Better Temperature Coefficient (-0.26%/°C)',
    '• High Temperature Restriction',
    '• Micro-crack Resistance & Higher Power Output',
    '• Lower BOS Cost & More Aesthetic Values'
  ];
  features1.forEach((feat, idx) => {
    page1.drawText(feat, { x: 80, y: 440 - idx * 25, size: 13, font: fontRegular, color: rgb(0.9, 0.9, 0.9) });
  });

  page1.drawText('25 Year Product Warranty  |  30 Year Performance Warranty', { x: 80, y: 150, size: 14, font: fontBold, color: rgb(1, 1, 1) });
  page1.drawText('Tier 1 BloombergNEF | Intertek ESG | Red Dot Winner 2023 | TUV Rheinland', { x: 80, y: 110, size: 11, font: fontRegular, color: rgb(0.7, 0.7, 0.7) });

  // Page 2
  let page2 = pdfDoc1.addPage([595.28, 841.89]);
  page2.drawText('Neostar 2S Datasheet - AIKO-A-MAH54Mb', { x: 50, y: 800, size: 18, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  
  // Highlight boxes
  page2.drawRectangle({ x: 50, y: 720, width: 110, height: 60, color: rgb(0.95, 0.35, 0.1) });
  page2.drawText('470W', { x: 70, y: 750, size: 20, font: fontBold, color: rgb(1, 1, 1) });
  page2.drawText('Max Output', { x: 70, y: 730, size: 10, font: fontRegular, color: rgb(1, 1, 1) });

  page2.drawRectangle({ x: 170, y: 720, width: 110, height: 60, color: rgb(0.95, 0.35, 0.1) });
  page2.drawText('23.6%', { x: 190, y: 750, size: 20, font: fontBold, color: rgb(1, 1, 1) });
  page2.drawText('Efficiency', { x: 190, y: 730, size: 10, font: fontRegular, color: rgb(1, 1, 1) });

  page2.drawRectangle({ x: 290, y: 720, width: 110, height: 60, color: rgb(0.95, 0.35, 0.1) });
  page2.drawText('<=1%', { x: 310, y: 750, size: 20, font: fontBold, color: rgb(1, 1, 1) });
  page2.drawText('1st Year Degradation', { x: 295, y: 730, size: 9, font: fontRegular, color: rgb(1, 1, 1) });

  page2.drawRectangle({ x: 410, y: 720, width: 130, height: 60, color: rgb(0.95, 0.35, 0.1) });
  page2.drawText('<=0.35%', { x: 430, y: 750, size: 20, font: fontBold, color: rgb(1, 1, 1) });
  page2.drawText('Annual Degradation Y2-30', { x: 415, y: 730, size: 8.5, font: fontRegular, color: rgb(1, 1, 1) });

  // Specs
  page2.drawText('Electrical Characteristics (STC: AM1.5 1000W/m2 25C)', { x: 50, y: 680, size: 13, font: fontBold, color: rgb(0.2, 0.2, 0.2) });
  const specs2S = [
    'Module Type: AIKO-A440 to AIKO-A470-MAH54Mb',
    'Max Power (Pmax): 440W - 470W',
    'Module Efficiency: 22.1% - 23.6%',
    'Open Circuit Voltage (Voc): 40.82V - 41.18V',
    'Short Circuit Current (Isc): 13.92A - 14.32A',
    'Cell Type: N-Type ABC',
    'Dimensions: 1757 x 1134 x 30 mm',
    'Weight: 21.5 kg',
    'Front Glass: 3.2mm tempered glass',
    'Frame: Black anodized aluminum',
    'Junction Box: IP68, 3 bypass diodes',
    'Connector: MC4-Evo2'
  ];
  specs2S.forEach((spec, i) => {
    page2.drawText(spec, { x: 50, y: 650 - i * 22, size: 11, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  });

  page2.drawText('www.aikosolar.com  |  marketing@aikosolar.com', { x: 50, y: 50, size: 10, font: fontRegular, color: rgb(0.5, 0.5, 0.5) });

  const pdfBytes1 = await pdfDoc1.save();


  // --- PDF 2: File-1759375846.pdf ---
  const pdfDoc2 = await PDFDocument.create();
  const fontBold2 = await pdfDoc2.embedFont(StandardFonts.HelveticaBold);
  const fontRegular2 = await pdfDoc2.embedFont(StandardFonts.Helvetica);

  // Page 1
  let p2_1 = pdfDoc2.addPage([595.28, 841.89]);
  p2_1.drawRectangle({ x: 0, y: 0, width: 595.28, height: 841.89, color: rgb(0.07, 0.09, 0.08) });

  p2_1.drawText('AIKO', { x: 420, y: 780, size: 28, font: fontBold2, color: rgb(1, 1, 1) });
  p2_1.drawText('NEOSTAR', { x: 80, y: 680, size: 48, font: fontBold2, color: rgb(1, 1, 1) });
  p2_1.drawText('3P54 Mono-Glass Module', { x: 80, y: 630, size: 24, font: fontRegular2, color: rgb(0.8, 0.8, 0.8) });
  p2_1.drawText('475W - 500W', { x: 80, y: 590, size: 32, font: fontBold2, color: rgb(0.36, 0.79, 0.3) });

  p2_1.drawText('Technical Features:', { x: 80, y: 480, size: 18, font: fontBold2, color: rgb(1, 0.6, 0.2) });
  const features2 = [
    '• Partial Shading Optimisation',
    '• Better Temperature Coefficient (-0.26%/°C)',
    '• High Temperature Restriction & Micro-crack Resistance',
    '• Higher Power Output up to 500W',
    '• Infinite Technology & More Aesthetic Values'
  ];
  features2.forEach((feat, idx) => {
    p2_1.drawText(feat, { x: 80, y: 440 - idx * 25, size: 13, font: fontRegular2, color: rgb(0.9, 0.9, 0.9) });
  });

  p2_1.drawText('25 Year Product Warranty  |  30 Year Performance Warranty', { x: 80, y: 150, size: 14, font: fontBold2, color: rgb(1, 1, 1) });
  p2_1.drawText('Tier 1 BloombergNEF | Intertek ESG | Red Dot Winner 2023 | Made in China', { x: 80, y: 110, size: 11, font: fontRegular2, color: rgb(0.7, 0.7, 0.7) });

  // Page 2
  let p2_2 = pdfDoc2.addPage([595.28, 841.89]);
  p2_2.drawText('Neostar 3P54 Datasheet - AIKO-Axxx-MCE54Mw', { x: 50, y: 800, size: 18, font: fontBold2, color: rgb(0.1, 0.1, 0.1) });

  p2_2.drawRectangle({ x: 50, y: 720, width: 110, height: 60, color: rgb(0.95, 0.35, 0.1) });
  p2_2.drawText('500W', { x: 70, y: 750, size: 20, font: fontBold2, color: rgb(1, 1, 1) });
  p2_2.drawText('Max Output', { x: 70, y: 730, size: 10, font: fontRegular2, color: rgb(1, 1, 1) });

  p2_2.drawRectangle({ x: 170, y: 720, width: 110, height: 60, color: rgb(0.95, 0.35, 0.1) });
  p2_2.drawText('25.0%', { x: 190, y: 750, size: 20, font: fontBold2, color: rgb(1, 1, 1) });
  p2_2.drawText('Efficiency', { x: 190, y: 730, size: 10, font: fontRegular2, color: rgb(1, 1, 1) });

  p2_2.drawRectangle({ x: 290, y: 720, width: 110, height: 60, color: rgb(0.95, 0.35, 0.1) });
  p2_2.drawText('1%', { x: 320, y: 750, size: 20, font: fontBold2, color: rgb(1, 1, 1) });
  p2_2.drawText('1st Year Degradation', { x: 295, y: 730, size: 9, font: fontRegular2, color: rgb(1, 1, 1) });

  p2_2.drawRectangle({ x: 410, y: 720, width: 130, height: 60, color: rgb(0.95, 0.35, 0.1) });
  p2_2.drawText('0.35%', { x: 440, y: 750, size: 20, font: fontBold2, color: rgb(1, 1, 1) });
  p2_2.drawText('Annual Degradation Y2-30', { x: 415, y: 730, size: 8.5, font: fontRegular2, color: rgb(1, 1, 1) });

  p2_2.drawText('Electrical Characteristics (STC: AM1.5 1000W/m2 25C)', { x: 50, y: 680, size: 13, font: fontBold2, color: rgb(0.2, 0.2, 0.2) });
  const specs3P = [
    'Module Type: AIKO-A475-MCE54Mw to AIKO-A500-MCE54Mw',
    'Max Power (Pmax): 475W - 500W',
    'Module Efficiency: 23.8% - 25.0%',
    'Open Circuit Voltage (Voc): 40.80V - 41.30V',
    'Short Circuit Current (Isc): 14.76A - 14.96A',
    'Cell Type: N-Type BC',
    'Dimensions: 1762 x 1134 x 30 mm',
    'Weight: 20.6 kg',
    'Glass: 3.2mm tempered glass',
    'Backsheet: High weather resistant backsheet',
    'Frame: Black anodized aluminum',
    'Junction Box: IP68, 3 bypass diodes',
    'Connector: PV-KST4-EVO 2A/6I'
  ];
  specs3P.forEach((spec, i) => {
    p2_2.drawText(spec, { x: 50, y: 650 - i * 22, size: 11, font: fontRegular2, color: rgb(0.3, 0.3, 0.3) });
  });

  p2_2.drawText('www.aikosolar.com  |  marketing@aikosolar.com', { x: 50, y: 50, size: 10, font: fontRegular2, color: rgb(0.5, 0.5, 0.5) });

  const pdfBytes2 = await pdfDoc2.save();

  // Save files to public/ and public/assets/datasheets/
  const paths = [
    path.join(process.cwd(), 'public', 'AIKO 470 panles.pdf'),
    path.join(process.cwd(), 'public', 'File-1759375846.pdf'),
    path.join(process.cwd(), 'public', 'assets', 'datasheets', 'AIKO 470 panles.pdf'),
    path.join(process.cwd(), 'public', 'assets', 'datasheets', 'File-1759375846.pdf'),
    path.join(process.cwd(), 'public', 'assets', 'datasheets', 'aiko-neostar-2s-datasheet.pdf'),
    path.join(process.cwd(), 'public', 'assets', 'datasheets', 'aiko-neostar-3p54-datasheet.pdf'),
  ];

  fs.writeFileSync(paths[0], pdfBytes1);
  fs.writeFileSync(paths[2], pdfBytes1);
  fs.writeFileSync(paths[4], pdfBytes1);

  fs.writeFileSync(paths[1], pdfBytes2);
  fs.writeFileSync(paths[3], pdfBytes2);
  fs.writeFileSync(paths[5], pdfBytes2);

  console.log('PDFs generated successfully!');
}

generatePDFs().catch(console.error);
