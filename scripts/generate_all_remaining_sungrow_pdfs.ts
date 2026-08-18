import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';

async function createSungrowPDF(filename: string, title: string, subtitle: string, specs: Array<{ name: string; val: string }>) {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const darkNavy = rgb(0.04, 0.07, 0.10);
  const brightGreen = rgb(0.36, 0.79, 0.30);
  const textDark = rgb(0.1, 0.12, 0.15);
  const textGray = rgb(0.35, 0.40, 0.45);
  const bgLight = rgb(0.96, 0.97, 0.98);
  const borderGray = rgb(0.85, 0.88, 0.90);

  const page = pdfDoc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  // Banner
  page.drawRectangle({
    x: 0,
    y: height - 80,
    width: width,
    height: 80,
    color: darkNavy,
  });

  page.drawText('SUNGROW', {
    x: 40,
    y: height - 45,
    size: 22,
    font: fontBold,
    color: brightGreen,
  });

  page.drawText('Clean power for all', {
    x: 40,
    y: height - 62,
    size: 9,
    font: fontRegular,
    color: rgb(0.8, 0.8, 0.8),
  });

  page.drawText('TECHNICAL DATASHEET', {
    x: width - 180,
    y: height - 50,
    size: 10,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  // Title
  page.drawText(title, {
    x: 40,
    y: height - 120,
    size: 22,
    font: fontBold,
    color: darkNavy,
  });

  page.drawText(subtitle, {
    x: 40,
    y: height - 142,
    size: 12,
    font: fontBold,
    color: textGray,
  });

  // Specs Table
  let tableY = height - 180;
  const col1X = 40;
  const col2X = 320;
  const rowHeight = 22;

  page.drawRectangle({
    x: 40,
    y: tableY - rowHeight,
    width: width - 80,
    height: rowHeight,
    color: bgLight,
    borderColor: borderGray,
    borderWidth: 1,
  });

  page.drawText('TECHNICAL PARAMETER', { x: col1X + 10, y: tableY - 15, size: 9, font: fontBold, color: darkNavy });
  page.drawText('VALUE / RATING', { x: col2X + 10, y: tableY - 15, size: 9, font: fontBold, color: darkNavy });

  tableY -= rowHeight;

  specs.forEach((item) => {
    page.drawRectangle({
      x: 40,
      y: tableY - rowHeight,
      width: width - 80,
      height: rowHeight,
      color: rgb(1, 1, 1),
      borderColor: borderGray,
      borderWidth: 0.5,
    });

    page.drawText(item.name, { x: col1X + 10, y: tableY - 15, size: 8.5, font: fontRegular, color: textDark });
    page.drawText(item.val, { x: col2X + 10, y: tableY - 15, size: 8.5, font: fontBold, color: textDark });
    tableY -= rowHeight;
  });

  page.drawText('Oneroof Solar — Authorized Sungrow Installer | Datasheet Document', {
    x: 40,
    y: 30,
    size: 8,
    font: fontRegular,
    color: textGray,
  });

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(process.cwd(), 'public', 'downloads', filename);
  fs.writeFileSync(filePath, pdfBytes);
  console.log('Saved:', filename);
}

async function run() {
  await createSungrowPDF('Single phase On Grid Inverter.pdf', 'Sungrow SG2.0 - SG6.0RS', 'Single Phase On-Grid String Inverter Series', [
    { name: 'Max. PV Input Power', val: '3000 Wp - 9000 Wp' },
    { name: 'Max. PV Input Voltage', val: '600 V' },
    { name: 'Rated AC Output Power', val: '2.0 kW - 6.0 kW' },
    { name: 'Max. Efficiency', val: '98.4%' },
    { name: 'MPPT Trackers', val: '2 Independent MPPTs' },
    { name: 'Protection Class', val: 'IP65 / C5 anti-corrosion' },
    { name: 'Grid Standard', val: 'AS/NZS 4777.2:2020' },
  ]);

  await createSungrowPDF('Sungrow three phase grid inverter 5-10Kw.pdf', 'Sungrow SG5.0 - 10RT', 'Three Phase Commercial & Residential Grid Inverter', [
    { name: 'Max. PV Input Power', val: '7500 Wp - 15000 Wp' },
    { name: 'Max. PV Input Voltage', val: '1100 V' },
    { name: 'Rated AC Output Power', val: '5.0 kW - 10.0 kW' },
    { name: 'Max. Efficiency', val: '98.5%' },
    { name: 'MPPT Trackers', val: '2 Independent MPPTs' },
    { name: 'AFCI & PID Zero', val: 'Integrated' },
    { name: 'Grid Standard', val: 'AS/NZS 4777.2:2020' },
  ]);

  await createSungrowPDF('Sungrow three phase inverter 15&20Kw.pdf', 'Sungrow SG15RT / SG20RT', 'Three Phase Multi-MPPT On-Grid Inverter', [
    { name: 'Max. PV Input Power', val: '22500 Wp - 30000 Wp' },
    { name: 'Max. PV Input Voltage', val: '1100 V' },
    { name: 'Rated AC Output Power', val: '15.0 kW - 20.0 kW' },
    { name: 'Max. Efficiency', val: '98.6%' },
    { name: 'MPPT Trackers', val: '2 Independent MPPTs' },
    { name: 'Surge Protection', val: 'Type II DC & AC' },
    { name: 'Grid Standard', val: 'AS/NZS 4777.2:2020' },
  ]);

  await createSungrowPDF('Sungrow threephase inverter 30Kw.pdf', 'Sungrow SG30CX Premium', 'Commercial Three Phase String Inverter', [
    { name: 'Max. PV Input Power', val: '45000 Wp' },
    { name: 'Max. PV Input Voltage', val: '1100 V' },
    { name: 'Rated AC Output Power', val: '30.0 kW' },
    { name: 'Max. Efficiency', val: '98.6%' },
    { name: 'MPPT Trackers', val: '3 MPPTs (6 inputs)' },
    { name: 'Protection', val: 'IP66 / C5' },
    { name: 'Grid Standard', val: 'AS/NZS 4777.2:2020' },
  ]);

  await createSungrowPDF('Sungrow threephase inverter 100Kw.pdf', 'Sungrow SG110CX Premium', 'Utility & Large Commercial String Inverter', [
    { name: 'Max. PV Input Power', val: '150000 Wp' },
    { name: 'Max. PV Input Voltage', val: '1100 V' },
    { name: 'Rated AC Output Power', val: '100.0 kW / 110.0 kVA' },
    { name: 'Max. Efficiency', val: '98.7%' },
    { name: 'MPPT Trackers', val: '9 MPPTs (18 inputs)' },
    { name: 'Protection', val: 'IP66 / C5' },
    { name: 'Grid Standard', val: 'AS/NZS 4777.2:2020' },
  ]);
}

run().catch(console.error);
