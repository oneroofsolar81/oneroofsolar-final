import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';

async function generateSungrowPDF() {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Page 1
  const page1 = pdfDoc.addPage([595.28, 841.89]); // A4 dimensions
  const { width, height } = page1.getSize();

  // Color Palette
  const darkNavy = rgb(0.04, 0.07, 0.10); // #0A1118
  const brightGreen = rgb(0.36, 0.79, 0.30); // #5BC94D
  const textDark = rgb(0.1, 0.12, 0.15);
  const textGray = rgb(0.35, 0.40, 0.45);
  const bgLight = rgb(0.96, 0.97, 0.98);
  const borderGray = rgb(0.85, 0.88, 0.90);

  // Top Banner
  page1.drawRectangle({
    x: 0,
    y: height - 80,
    width: width,
    height: 80,
    color: darkNavy,
  });

  page1.drawText('SUNGROW', {
    x: 40,
    y: height - 45,
    size: 22,
    font: fontBold,
    color: brightGreen,
  });

  page1.drawText('Clean power for all', {
    x: 40,
    y: height - 62,
    size: 9,
    font: fontRegular,
    color: rgb(0.8, 0.8, 0.8),
  });

  page1.drawText('TECHNICAL DATASHEET', {
    x: width - 180,
    y: height - 50,
    size: 10,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  // Title Block
  page1.drawText('SH5.0RS / SH6.0RS', {
    x: 40,
    y: height - 120,
    size: 24,
    font: fontBold,
    color: darkNavy,
  });

  page1.drawText('Residential Hybrid Single Phase Inverter (5.0kW / 6.0kW)', {
    x: 40,
    y: height - 140,
    size: 13,
    font: fontBold,
    color: textGray,
  });

  // Key Features Section Header
  page1.drawRectangle({
    x: 40,
    y: height - 175,
    width: width - 80,
    height: 25,
    color: bgLight,
    borderColor: borderGray,
    borderWidth: 1,
  });

  page1.drawText('KEY FEATURES & HIGHLIGHTS', {
    x: 50,
    y: height - 168,
    size: 11,
    font: fontBold,
    color: darkNavy,
  });

  // 4 Feature Boxes
  const features = [
    {
      title: 'EASY INSTALLATION',
      items: [
        '• Plug & Play installation',
        '• Quiet operation (silent convection cooling)',
        '• Compact design (integrated level, push-in brackets)',
      ]
    },
    {
      title: 'FLEXIBLE APPLICATION',
      items: [
        '• 150 - 600V wide battery voltage range',
        '• Supports parallel connection with full control',
        '• Provides 100% unbalance in backup mode',
      ]
    },
    {
      title: 'SAFE AND DURABLE',
      items: [
        '• Built-in smart PID recovery function',
        '• Integrated arc fault circuit interrupter (AFCI)',
        '• Built-in Type II DC & AC surge protection (SPD)',
      ]
    },
    {
      title: 'SMART MANAGEMENT',
      items: [
        '• Real-time monitoring (24/7 data update)',
        '• Online monitoring & remote firmware updates',
        '• Energy flow customization and management',
      ]
    }
  ];

  let boxY = height - 195;
  const boxWidth = (width - 90) / 2;
  const boxHeight = 115;

  features.forEach((feat, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const xPos = 40 + col * (boxWidth + 10);
    const yPos = boxY - row * (boxHeight + 10) - boxHeight;

    page1.drawRectangle({
      x: xPos,
      y: yPos,
      width: boxWidth,
      height: boxHeight,
      color: rgb(1, 1, 1),
      borderColor: borderGray,
      borderWidth: 1,
    });

    page1.drawText(feat.title, {
      x: xPos + 12,
      y: yPos + boxHeight - 22,
      size: 10,
      font: fontBold,
      color: darkNavy,
    });

    feat.items.forEach((item, itemIdx) => {
      page1.drawText(item, {
        x: xPos + 12,
        y: yPos + boxHeight - 42 - itemIdx * 20,
        size: 9,
        font: fontRegular,
        color: textDark,
      });
    });
  });

  // Circuit & Architecture Overview Section
  const diagramY = height - 460;
  page1.drawRectangle({
    x: 40,
    y: diagramY,
    width: width - 80,
    height: 180,
    color: bgLight,
    borderColor: borderGray,
    borderWidth: 1,
  });

  page1.drawText('SYSTEM CIRCUIT ARCHITECTURE', {
    x: 55,
    y: diagramY + 155,
    size: 11,
    font: fontBold,
    color: darkNavy,
  });

  page1.drawText('DC Input (PV 1 & PV 2)  -->  DC Switch  -->  MPPT 1 & MPPT 2  -->  Inverter Bridge', {
    x: 55,
    y: diagramY + 125,
    size: 9,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('Battery (150-600V)  -->  Bi-directional DC/DC Converter  -->  DC Bus', {
    x: 55,
    y: diagramY + 100,
    size: 9,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('Inverter Bridge  -->  AC Filter  -->  AC Relay  -->  Grid & Essential Backup Load', {
    x: 55,
    y: diagramY + 75,
    size: 9,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('Key Highlight Metrics:', {
    x: 55,
    y: diagramY + 45,
    size: 9,
    font: fontBold,
    color: darkNavy,
  });

  page1.drawText('Max Efficiency: 97.7%   |   Backup Switch Time: < 10 ms   |   Protection Rating: IP65', {
    x: 55,
    y: diagramY + 25,
    size: 9,
    font: fontRegular,
    color: brightGreen,
  });

  // Footer Page 1
  page1.drawText('Oneroof Solar — Authorized Sungrow Installer | Page 1 of 2', {
    x: 40,
    y: 30,
    size: 8,
    font: fontRegular,
    color: textGray,
  });

  // PAGE 2: TECHNICAL SPECIFICATIONS
  const page2 = pdfDoc.addPage([595.28, 841.89]);

  // Page 2 Banner
  page2.drawRectangle({
    x: 0,
    y: height - 50,
    width: width,
    height: 50,
    color: darkNavy,
  });

  page2.drawText('SUNGROW SH5.0RS / SH6.0RS TECHNICAL SPECIFICATIONS', {
    x: 40,
    y: height - 32,
    size: 12,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  const tableData = [
    { section: 'Input (DC)' },
    { name: 'Max. PV input voltage', v1: '600 V', v2: '600 V' },
    { name: 'Min. PV input voltage / Startup voltage', v1: '40 V / 50 V', v2: '40 V / 50 V' },
    { name: 'Nominal PV input voltage', v1: '360 V', v2: '360 V' },
    { name: 'MPP voltage range', v1: '40 V – 560 V', v2: '40 V – 560 V' },
    { name: 'No. of independent MPP inputs', v1: '2', v2: '2' },
    { name: 'Max. number of PV strings per MPPT', v1: '1 / 1', v2: '1 / 1' },
    { name: 'Max. PV input current', v1: '32 A (16 A / 16 A)', v2: '32 A (16 A / 16 A)' },
    { name: 'Max. DC short-circuit current', v1: '40 A (20 A / 20 A)', v2: '40 A (20 A / 20 A)' },
    { name: 'Max. PV array power', v1: '10000 Wp', v2: '12000 Wp' },

    { section: 'Battery Data' },
    { name: 'Battery type', v1: 'Li-ion battery', v2: 'Li-ion battery' },
    { name: 'Battery voltage', v1: '150 V – 600 V', v2: '150 V – 600 V' },
    { name: 'Max charge / discharge current', v1: '30 A / 30 A', v2: '30 A / 30 A' },
    { name: 'Max charge / discharge power', v1: '6600 W', v2: '6600 W' },

    { section: 'AC Output (Grid)' },
    { name: 'Rated AC output power', v1: '5000 W', v2: '6000 W' },
    { name: 'Max. AC output power', v1: '5000 VA', v2: '6000 VA' },
    { name: 'Max. AC output current', v1: '22.8 A', v2: '27.3 A' },
    { name: 'Nominal AC voltage', v1: '220/230/240 V', v2: '220/230/240 V' },
    { name: 'Nominal grid frequency', v1: '50 Hz / 60 Hz', v2: '50 Hz / 60 Hz' },
    { name: 'THD', v1: '< 3% (at rated power)', v2: '< 3% (at rated power)' },
    { name: 'Power factor', v1: '> 0.99 / 0.8L to 0.8L', v2: '> 0.99 / 0.8L to 0.8L' },

    { section: 'AC Output (Backup)' },
    { name: 'Rated voltage', v1: '220/230/240 V', v2: '220/230/240 V' },
    { name: 'Peak output power', v1: '8400 VA (10s)', v2: '8400 VA (10s)' },
    { name: 'Switching time', v1: '< 10 ms', v2: '< 10 ms' },

    { section: 'Efficiency' },
    { name: 'Max. efficiency', v1: '97.7%', v2: '97.7%' },
    { name: 'European efficiency', v1: '97.2%', v2: '97.3%' },

    { section: 'Protection & General' },
    { name: 'Arc Fault Circuit Interrupter (AFCI)', v1: 'Integrated', v2: 'Integrated' },
    { name: 'Surge Protection', v1: 'Type II DC & AC', v2: 'Type II DC & AC' },
    { name: 'Protection Degree', v1: 'IP65', v2: 'IP65' },
    { name: 'Dimensions (W*H*D) / Weight', v1: '490*340*170 mm / 18.5 kg', v2: '490*340*170 mm / 18.5 kg' },
    { name: 'Operating Temperature', v1: '-25°C to 60°C', v2: '-25°C to 60°C' },
  ];

  let tableY = height - 75;
  const col1X = 40;
  const col2X = 310;
  const col3X = 450;
  const rowHeight = 16;

  // Table Header
  page2.drawRectangle({
    x: 40,
    y: tableY - rowHeight,
    width: width - 80,
    height: rowHeight,
    color: bgLight,
    borderColor: borderGray,
    borderWidth: 1,
  });

  page2.drawText('SPECIFICATION PARAMETER', { x: col1X + 8, y: tableY - 12, size: 9, font: fontBold, color: darkNavy });
  page2.drawText('SH5.0RS', { x: col2X + 8, y: tableY - 12, size: 9, font: fontBold, color: darkNavy });
  page2.drawText('SH6.0RS', { x: col3X + 8, y: tableY - 12, size: 9, font: fontBold, color: darkNavy });

  tableY -= rowHeight;

  tableData.forEach((row) => {
    if (row.section) {
      page2.drawRectangle({
        x: 40,
        y: tableY - rowHeight,
        width: width - 80,
        height: rowHeight,
        color: rgb(0.92, 0.95, 0.98),
      });
      page2.drawText(row.section, { x: col1X + 8, y: tableY - 12, size: 9, font: fontBold, color: darkNavy });
    } else {
      page2.drawRectangle({
        x: 40,
        y: tableY - rowHeight,
        width: width - 80,
        height: rowHeight,
        color: rgb(1, 1, 1),
        borderColor: borderGray,
        borderWidth: 0.5,
      });
      page2.drawText(row.name || '', { x: col1X + 8, y: tableY - 12, size: 8, font: fontRegular, color: textDark });
      page2.drawText(row.v1 || '', { x: col2X + 8, y: tableY - 12, size: 8, font: fontBold, color: textDark });
      page2.drawText(row.v2 || '', { x: col3X + 8, y: tableY - 12, size: 8, font: fontBold, color: textDark });
    }
    tableY -= rowHeight;
  });

  page2.drawText('Oneroof Solar — Authorized Sungrow Installer | Page 2 of 2', {
    x: 40,
    y: 25,
    size: 8,
    font: fontRegular,
    color: textGray,
  });

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(process.cwd(), 'public', 'downloads', 'Sungrow Single phase hybrid inverter 5-6Kw.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log('PDF generated successfully at:', filePath);
}

generateSungrowPDF().catch(console.error);
