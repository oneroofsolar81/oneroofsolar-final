import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generatePDF() {
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const brandNavy = rgb(0.05, 0.25, 0.55);
  const brandBlue = rgb(0.1, 0.45, 0.8);
  const darkText = rgb(0.15, 0.15, 0.15);
  const grayText = rgb(0.4, 0.4, 0.4);
  const lightBg = rgb(0.95, 0.97, 1.0);
  const white = rgb(1, 1, 1);
  const greenAccent = rgb(0.1, 0.65, 0.3);

  // --- PAGE 1 ---
  const page1 = pdfDoc.addPage([595.28, 841.89]); // A4 dimensions
  const { width, height } = page1.getSize();

  // Header Banner
  page1.drawRectangle({
    x: 0,
    y: height - 100,
    width: width,
    height: 100,
    color: brandNavy,
  });

  page1.drawText('JA SOLAR', {
    x: width - 150,
    y: height - 40,
    size: 24,
    font: fontBold,
    color: white,
  });

  page1.drawText('Harvest the Sunshine', {
    x: 40,
    y: height - 45,
    size: 16,
    font: fontRegular,
    color: rgb(0.8, 0.9, 1),
  });

  page1.drawText('475W', {
    x: 40,
    y: height - 85,
    size: 36,
    font: fontBold,
    color: white,
  });

  // Title section
  page1.drawText('JAM54D40 LR', {
    x: 40,
    y: height - 140,
    size: 28,
    font: fontBold,
    color: brandNavy,
  });

  page1.drawText('n-type Double Glass Monofacial Modules', {
    x: 230,
    y: height - 136,
    size: 14,
    font: fontBold,
    color: brandBlue,
  });

  // Divider line
  page1.drawLine({
    start: { x: 40, y: height - 155 },
    end: { x: width - 40, y: height - 155 },
    thickness: 1.5,
    color: brandBlue,
  });

  // Section: Premium Cells
  page1.drawText('Premium Cells', {
    x: 40,
    y: height - 185,
    size: 18,
    font: fontBold,
    color: brandNavy,
  });

  // Cell Card 1
  page1.drawRectangle({
    x: 40,
    y: height - 255,
    width: 120,
    height: 55,
    color: lightBg,
    borderColor: brandBlue,
    borderWidth: 1,
  });
  page1.drawText('n-Bycium+', { x: 55, y: height - 225, size: 12, font: fontBold, color: darkText });
  page1.drawText('16BB', { x: 75, y: height - 242, size: 11, font: fontRegular, color: grayText });
  page1.drawText('MBB Half-Cell Tech', { x: 45, y: height - 270, size: 9, font: fontRegular, color: darkText });

  // Cell Card 2
  page1.drawRectangle({
    x: 180,
    y: height - 255,
    width: 120,
    height: 55,
    color: lightBg,
    borderColor: brandBlue,
    borderWidth: 1,
  });
  page1.drawText('26%', { x: 215, y: height - 225, size: 22, font: fontBold, color: brandBlue });
  page1.drawText('Cell Conversion Efficiency', { x: 182, y: height - 270, size: 9, font: fontRegular, color: darkText });

  // Section: Premium Modules
  page1.drawText('Premium Modules Key Features', {
    x: 40,
    y: height - 300,
    size: 18,
    font: fontBold,
    color: brandNavy,
  });

  const features = [
    { title: 'Higher Power Generation & Better LCOE', desc: 'Optimized cell arrangement and lower resistance for max return' },
    { title: 'n-type Technology with Lower LID', desc: 'Zero Light Induced Degradation for superior long-term yields' },
    { title: 'Better Temperature Coefficient', desc: '-0.290%/°C ensures outstanding output in high heat conditions' },
    { title: 'Better Low Irradiance Response', desc: 'High performance during early morning, dusk, and overcast days' },
  ];

  let featY = height - 330;
  features.forEach((feat) => {
    page1.drawRectangle({
      x: 40,
      y: featY - 25,
      width: 515,
      height: 35,
      color: lightBg,
      borderColor: rgb(0.85, 0.9, 0.95),
      borderWidth: 1,
    });
    page1.drawText(`•  ${feat.title}`, { x: 50, y: featY - 8, size: 11, font: fontBold, color: brandNavy });
    page1.drawText(feat.desc, { x: 65, y: featY - 21, size: 9, font: fontRegular, color: grayText });
    featY -= 42;
  });

  // Section: Warranty & Performance
  page1.drawText('Linear Performance & Output Warranties', {
    x: 40,
    y: height - 515,
    size: 16,
    font: fontBold,
    color: brandNavy,
  });

  page1.drawRectangle({
    x: 40,
    y: height - 600,
    width: 240,
    height: 70,
    color: rgb(0.92, 0.97, 0.92),
    borderColor: greenAccent,
    borderWidth: 1,
  });
  page1.drawText('15-Year Product Warranty', { x: 55, y: height - 550, size: 14, font: fontBold, color: greenAccent });
  page1.drawText('30-Year Linear Power Output Warranty', { x: 55, y: height - 575, size: 12, font: fontBold, color: darkText });
  page1.drawText('1% 1st-year degradation | 0.4% annual degradation', { x: 55, y: height - 590, size: 8, font: fontRegular, color: grayText });

  page1.drawRectangle({
    x: 300,
    y: height - 600,
    width: 255,
    height: 70,
    color: lightBg,
    borderColor: brandBlue,
    borderWidth: 1,
  });
  page1.drawText('DEEP BLUE 4.0 Pro', { x: 315, y: height - 548, size: 14, font: fontBold, color: brandNavy });
  page1.drawText('n-type Double Glass Dual Protection', { x: 315, y: height - 568, size: 10, font: fontRegular, color: darkText });
  page1.drawText('Salt mist, ammonia & PID resistant for coastal NT weather', { x: 315, y: height - 588, size: 8, font: fontRegular, color: grayText });

  // Section: Certificates
  page1.drawText('Comprehensive Certificates', {
    x: 40,
    y: height - 625,
    size: 16,
    font: fontBold,
    color: brandNavy,
  });

  const certs = [
    '• IEC 61215, IEC 61730 International Quality Standards',
    '• ISO 9001: 2015 Quality Management Systems',
    '• ISO 14001: 2015 Environmental Management Systems',
    '• ISO 45001: 2018 Occupational Health and Safety Systems',
    '• IEC 62941: 2019 Terrestrial Photovoltaic (PV) Modules Quality System',
    '• TÜV SÜD & CE Certified Quality',
  ];

  let certY = height - 645;
  certs.forEach((cert) => {
    page1.drawText(cert, { x: 50, y: certY, size: 10, font: fontRegular, color: darkText });
    certY -= 16;
  });

  // Footer P1
  page1.drawText('JA Solar Technology Co., Ltd. | www.jasolar.com', {
    x: 40,
    y: 30,
    size: 9,
    font: fontRegular,
    color: grayText,
  });
  page1.drawText('Page 1 of 2', {
    x: width - 80,
    y: 30,
    size: 9,
    font: fontRegular,
    color: grayText,
  });


  // --- PAGE 2 ---
  const page2 = pdfDoc.addPage([595.28, 841.89]);

  // Header P2
  page2.drawRectangle({
    x: 0,
    y: height - 60,
    width: width,
    height: 60,
    color: brandNavy,
  });

  page2.drawText('JAM54D40 LR Technical Datasheet', {
    x: 40,
    y: height - 38,
    size: 18,
    font: fontBold,
    color: white,
  });

  page2.drawText('n-type Double Glass Monofacial Modules', {
    x: width - 230,
    y: height - 38,
    size: 10,
    font: fontRegular,
    color: rgb(0.8, 0.9, 1),
  });

  // Mechanical Parameters Table
  page2.drawText('Mechanical Parameters', {
    x: 40,
    y: height - 85,
    size: 14,
    font: fontBold,
    color: brandNavy,
  });

  const mechData = [
    ['Cell Type', 'Mono n-type'],
    ['Weight', '22 kg'],
    ['Dimensions (L x W x H)', '1762 mm × 1134 mm × 30 mm'],
    ['Cable Cross Section', '4mm² (IEC), 12 AWG (UL)'],
    ['Number of Cells', '108 (6 × 18)'],
    ['Junction Box', 'IP68, 3 Diodes'],
    ['Connector Options', 'Stäubli PV-KST4-EVO2A / QC Solar QC4.10-35'],
    ['Glass Thickness', '1.6mm Front / 1.6mm Back Dual Glass'],
    ['Packaging Configuration', '36 pcs / Pallet, 936 pcs / 40HQ Container'],
    ['Country of Manufacture', 'China / Vietnam'],
  ];

  let mechY = height - 105;
  mechData.forEach(([label, val], idx) => {
    const rowBg = idx % 2 === 0 ? lightBg : white;
    page2.drawRectangle({
      x: 40,
      y: mechY - 14,
      width: 515,
      height: 18,
      color: rowBg,
    });
    page2.drawText(label, { x: 45, y: mechY - 10, size: 9, font: fontBold, color: darkText });
    page2.drawText(val, { x: 220, y: mechY - 10, size: 9, font: fontRegular, color: darkText });
    mechY -= 19;
  });

  // Electrical Parameters STC Table
  page2.drawText('Electrical Parameters at STC (Standard Test Conditions)', {
    x: 40,
    y: mechY - 20,
    size: 14,
    font: fontBold,
    color: brandNavy,
  });

  const stcHeaderY = mechY - 40;
  page2.drawRectangle({
    x: 40,
    y: stcHeaderY - 16,
    width: 515,
    height: 20,
    color: brandNavy,
  });

  const colX = [45, 180, 240, 300, 360, 420, 480];
  const stcCols = ['Parameter', '450/LR', '455/LR', '460/LR', '465/LR', '470/LR', '475/LR'];
  stcCols.forEach((col, i) => {
    page2.drawText(col, { x: colX[i], y: stcHeaderY - 12, size: 8, font: fontBold, color: white });
  });

  const stcRows = [
    ['Rated Max Power (Pmax) [W]', '450', '455', '460', '465', '470', '475'],
    ['Open Circuit Voltage (Voc) [V]', '39.30', '39.50', '39.70', '40.20', '40.40', '40.55'],
    ['Max Power Voltage (Vmp) [V]', '32.82', '33.00', '33.17', '33.50', '33.84', '34.18'],
    ['Short Circuit Current (Isc) [A]', '14.48', '14.56', '14.64', '14.65', '14.66', '14.67'],
    ['Max Power Current (Imp) [A]', '13.71', '13.79', '13.87', '13.88', '13.89', '13.90'],
    ['Module Efficiency [%]', '22.5', '22.8', '23.0', '23.3', '23.5', '23.8'],
  ];

  let stcY = stcHeaderY - 20;
  stcRows.forEach((row, idx) => {
    const rowBg = idx % 2 === 0 ? lightBg : white;
    page2.drawRectangle({
      x: 40,
      y: stcY - 14,
      width: 515,
      height: 18,
      color: rowBg,
    });
    row.forEach((val, i) => {
      page2.drawText(val, {
        x: colX[i],
        y: stcY - 10,
        size: 8,
        font: i === 0 ? fontBold : fontRegular,
        color: darkText,
      });
    });
    stcY -= 19;
  });

  // Operating Conditions Section
  page2.drawText('Operating Conditions', {
    x: 40,
    y: stcY - 20,
    size: 14,
    font: fontBold,
    color: brandNavy,
  });

  const opsData = [
    ['Maximum System Voltage', '1500V DC'],
    ['Operating Temperature Range', '-40°C ~ +85°C'],
    ['Maximum Series Fuse Rating', '25 A'],
    ['Maximum Static Load (Front)', '3600 Pa (1.5 safety factor)'],
    ['Maximum Static Load (Back)', '1600 Pa (1.5 safety factor)'],
    ['NOCT (Nominal Operating Cell Temp)', '45 ± 2 °C'],
    ['Safety Class / Fire Performance', 'Class II / Class C'],
    ['Temperature Coefficient of Pmax', '-0.290% / °C'],
  ];

  let opsY = stcY - 40;
  opsData.forEach(([label, val], idx) => {
    const rowBg = idx % 2 === 0 ? lightBg : white;
    page2.drawRectangle({
      x: 40,
      y: opsY - 14,
      width: 515,
      height: 18,
      color: rowBg,
    });
    page2.drawText(label, { x: 45, y: opsY - 10, size: 8.5, font: fontBold, color: darkText });
    page2.drawText(val, { x: 260, y: opsY - 10, size: 8.5, font: fontRegular, color: darkText });
    opsY -= 19;
  });

  // Footer P2
  page2.drawText('JA Solar Technology Co., Ltd. | Specs subject to change without notice.', {
    x: 40,
    y: 30,
    size: 9,
    font: fontRegular,
    color: grayText,
  });
  page2.drawText('Page 2 of 2', {
    x: width - 80,
    y: 30,
    size: 9,
    font: fontRegular,
    color: grayText,
  });

  const pdfBytes = await pdfDoc.save();

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const pdfPath = path.join(publicDir, 'JA-Solar-JAM54D40-LR-475W-Datasheet.pdf');
  fs.writeFileSync(pdfPath, pdfBytes);
  console.log(`PDF written to ${pdfPath}`);
}

generatePDF().catch((err) => {
  console.error(err);
  process.exit(1);
});
