import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';

async function generateSungrowSH8_10RSPDF() {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const darkNavy = rgb(0.04, 0.07, 0.10); // #0A1118
  const brightGreen = rgb(0.36, 0.79, 0.30); // #5BC94D
  const textDark = rgb(0.1, 0.12, 0.15);
  const textGray = rgb(0.35, 0.40, 0.45);
  const bgLight = rgb(0.96, 0.97, 0.98);
  const borderGray = rgb(0.85, 0.88, 0.90);

  // ==================== PAGE 1 ====================
  const page1 = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page1.getSize();

  // Header Banner
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
  page1.drawText('SH8.0 - 10RS', {
    x: 40,
    y: height - 120,
    size: 26,
    font: fontBold,
    color: darkNavy,
  });

  page1.drawText('Residential Hybrid Single Phase Inverter (8.0kW / 10.0kW)', {
    x: 40,
    y: height - 142,
    size: 13,
    font: fontBold,
    color: textGray,
  });

  // Section Header
  page1.drawRectangle({
    x: 40,
    y: height - 180,
    width: width - 80,
    height: 26,
    color: bgLight,
    borderColor: borderGray,
    borderWidth: 1,
  });

  page1.drawText('KEY FEATURES & HIGHLIGHTS', {
    x: 52,
    y: height - 173,
    size: 11,
    font: fontBold,
    color: darkNavy,
  });

  // 4 Feature Boxes
  const features = [
    {
      title: 'FLEXIBLE APPLICATION',
      items: [
        '• 200% DC/AC PV input (16A * 4 MPPTs)',
        '• Ideal for both new installation & retrofit scenario',
        '• Built-in smart PID recovery function',
      ],
    },
    {
      title: 'SMART MANAGEMENT',
      items: [
        '• Real-time data (10-second refresh rate)',
        '• 24/7 live monitoring online & with integrated display',
        '• Online IV curve scan and remote diagnosis',
      ],
    },
    {
      title: 'ENERGY INDEPENDENCE',
      items: [
        '• Seamless transition to backup mode (<10ms switch)',
        '• Fast charging / discharging for high self-consumption',
        '• Built-in EMS with advanced customization',
      ],
    },
    {
      title: 'USER FRIENDLY',
      items: [
        '• Plug and play quick installation',
        '• iSolarCloud monitoring on Mobile App & Web',
        '• Whole home backup functionality available',
      ],
    },
  ];

  let boxY = height - 200;
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
        y: yPos + boxHeight - 44 - itemIdx * 20,
        size: 9,
        font: fontRegular,
        color: textDark,
      });
    });
  });

  // Architecture Section
  const diagramY = height - 465;
  page1.drawRectangle({
    x: 40,
    y: diagramY,
    width: width - 80,
    height: 185,
    color: bgLight,
    borderColor: borderGray,
    borderWidth: 1,
  });

  page1.drawText('SYSTEM ARCHITECTURE & POWER FLOW', {
    x: 55,
    y: diagramY + 160,
    size: 11,
    font: fontBold,
    color: darkNavy,
  });

  page1.drawText('Solar PV Input: 4 MPPTs (16A each, 200% DC/AC ratio)  -->  Inverter Bridge', {
    x: 55,
    y: diagramY + 130,
    size: 9,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('Battery Storage: High-Voltage Li-ion (80V - 460V, 50A Charge/Discharge)  <-->  DC Bus', {
    x: 55,
    y: diagramY + 105,
    size: 9,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('AC Output: 220V/230V/240V Single-Phase Grid & Dedicated Whole Home Backup Circuit', {
    x: 55,
    y: diagramY + 80,
    size: 9,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('Core Metrics Summary:', {
    x: 55,
    y: diagramY + 50,
    size: 9,
    font: fontBold,
    color: darkNavy,
  });

  page1.drawText('Max Efficiency: 97.5%   |   Backup Switching: < 10 ms   |   IP65 Weather Rating   |   AFCI Protection', {
    x: 55,
    y: diagramY + 30,
    size: 9,
    font: fontRegular,
    color: brightGreen,
  });

  // Footer Page 1
  page1.drawText('Oneroof Solar — Authorized Sungrow Installer | SH8.0 - 10RS Datasheet | Page 1 of 2', {
    x: 40,
    y: 30,
    size: 8,
    font: fontRegular,
    color: textGray,
  });

  // ==================== PAGE 2 ====================
  const page2 = pdfDoc.addPage([595.28, 841.89]);

  page2.drawRectangle({
    x: 0,
    y: height - 45,
    width: width,
    height: 45,
    color: darkNavy,
  });

  page2.drawText('SUNGROW SH8.0RS / SH10RS TECHNICAL SPECIFICATIONS', {
    x: 40,
    y: height - 28,
    size: 11,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  const tableData = [
    { section: 'Input (DC)' },
    { name: 'Recommended max. PV input power', v1: '16000 Wp', v2: '20000 Wp' },
    { name: 'Max. PV input voltage', v1: '600 V', v2: '600 V' },
    { name: 'Min. PV input voltage / Startup input voltage', v1: '40 V / 50 V', v2: '40 V / 50 V' },
    { name: 'Rated PV input voltage', v1: '360 V', v2: '360 V' },
    { name: 'MPPT operating voltage range', v1: '40 V – 560 V', v2: '40 V – 560 V' },
    { name: 'No. of independent MPP inputs', v1: '4', v2: '4' },
    { name: 'No. of PV strings per MPPT', v1: '1 / 1 / 1 / 1', v2: '1 / 1 / 1 / 1' },
    { name: 'Max. PV input current', v1: '64 A (16A * 4)', v2: '64 A (16A * 4)' },
    { name: 'Max. DC short-circuit current', v1: '80 A (20A * 4)', v2: '80 A (20A * 4)' },

    { section: 'Battery Data' },
    { name: 'Battery type', v1: 'Li-ion battery', v2: 'Li-ion battery' },
    { name: 'Battery voltage range', v1: '80 V – 460 V', v2: '80 V – 460 V' },
    { name: 'Max charge / discharge current', v1: '50 A / 50 A', v2: '50 A / 50 A' },
    { name: 'Max charge / discharge power', v1: '10000 W', v2: '10000 W' },

    { section: 'Input and Output (AC)' },
    { name: 'Max. AC power from grid', v1: '14500 VA', v2: '14500 VA' },
    { name: 'Rated AC output power', v1: '8000 W', v2: '9999 W' },
    { name: 'Max. AC output apparent power', v1: '8000 VA', v2: '9999 VA' },
    { name: 'Max. AC output current', v1: '36.4 A', v2: '45.5 A' },
    { name: 'Rated AC voltage', v1: '1/N/PE, 220/230/240V', v2: '1/N/PE, 220/230/240V' },
    { name: 'THD', v1: '< 3% (at rated power)', v2: '< 3% (at rated power)' },

    { section: 'Backup Data (Off-Grid Mode)' },
    { name: 'Switch time to emergency mode', v1: '< 10 ms', v2: '< 10 ms' },
    { name: 'Rated output power', v1: '8000 W / 8000 VA', v2: '9999 W / 9999 VA' },
    { name: 'Peak output power', v1: '13680 VA, 10 s', v2: '13680 VA, 10 s' },

    { section: 'Efficiency & Protection' },
    { name: 'Max. efficiency / European efficiency', v1: '97.4% / 96.8%', v2: '97.5% / 97.1%' },
    { name: 'Surge Protection', v1: 'DC Type II / AC Type II', v2: 'DC Type II / AC Type II' },
    { name: 'AFCI & PID Recovery', v1: 'Integrated', v2: 'Integrated' },

    { section: 'General Data' },
    { name: 'Degree of protection', v1: 'IP65', v2: 'IP65' },
    { name: 'Dimensions (W * H * D) / Weight', v1: '605*435*181 mm / 29 kg', v2: '605*435*181 mm / 29 kg' },
    { name: 'Operating ambient temperature', v1: '-25°C to 60°C', v2: '-25°C to 60°C' },
    { name: 'Grid Compliance', v1: 'AS/NZS 4777.2:2020', v2: 'AS/NZS 4777.2:2020' },
  ];

  let tableY = height - 60;
  const col1X = 40;
  const col2X = 310;
  const col3X = 450;
  const rowHeight = 17;

  // Header
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
  page2.drawText('SH8.0RS', { x: col2X + 8, y: tableY - 12, size: 9, font: fontBold, color: darkNavy });
  page2.drawText('SH10RS', { x: col3X + 8, y: tableY - 12, size: 9, font: fontBold, color: darkNavy });

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

  page2.drawText('Oneroof Solar — Authorized Sungrow Installer | SH8.0 - 10RS Datasheet | Page 2 of 2', {
    x: 40,
    y: 25,
    size: 8,
    font: fontRegular,
    color: textGray,
  });

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(process.cwd(), 'public', 'downloads', 'Sungrow Single phase hybrid inverter 8-10Kw.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log('PDF generated successfully at:', filePath);
}

generateSungrowSH8_10RSPDF().catch(console.error);
