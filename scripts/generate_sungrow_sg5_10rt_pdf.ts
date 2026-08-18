import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';

async function generateSungrowSG5_10RTPDF() {
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
  page1.drawText('SG5.0 / 7.0 / 8.0 / 10RT', {
    x: 40,
    y: height - 120,
    size: 24,
    font: fontBold,
    color: darkNavy,
  });

  page1.drawText('Multi-MPPT String Inverter for 1000 Vdc System (5.0kW - 10.0kW)', {
    x: 40,
    y: height - 142,
    size: 12,
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
      title: 'HIGH YIELD',
      items: [
        '• Lower startup & wider MPPT voltage range',
        '• Compatible with bifacial high-power PV modules',
        '• Built-in smart PID recovery function',
      ],
    },
    {
      title: 'SMART MANAGEMENT',
      items: [
        '• Smart IV curve scanning & diagnosis',
        '• 24/7 Live monitoring on iSolarCloud',
        '• Remote firmware updates & configuration',
      ],
    },
    {
      title: 'SAFE AND DURABLE',
      items: [
        '• Quick Arc Fault Circuit Interrupter (AFCI)',
        '• Built-in Type II DC & AC Surge Protection (SPD)',
        '• High anti-corrosion rating C5 & IP65 rating',
      ],
    },
    {
      title: 'EASY AND USER FRIENDLY',
      items: [
        '• 18 kg ultra-compact lightweight design',
        '• Unique push-in DC connectors for fast wiring',
        '• Fast and easy commissioning via Mobile App',
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

  // Circuit & Architecture
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

  page1.drawText('SYSTEM CIRCUIT & ARCHITECTURE OVERVIEW', {
    x: 55,
    y: diagramY + 160,
    size: 11,
    font: fontBold,
    color: darkNavy,
  });

  page1.drawText('Solar Input: Dual MPPTs (up to 1100 Vdc)  -->  DC Switch  -->  DC SPD & EMI Filter', {
    x: 55,
    y: diagramY + 130,
    size: 9,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('Inverter Core: High Efficiency DC/AC Bridge  -->  AC Filter  -->  AC Relays & AC SPD', {
    x: 55,
    y: diagramY + 105,
    size: 9,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('AC Grid Output: 3/N/PE, 230V / 400V Three Phase Commercial / Residential Connection', {
    x: 55,
    y: diagramY + 80,
    size: 9,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('Key Highlight Performance Metrics:', {
    x: 55,
    y: diagramY + 50,
    size: 9,
    font: fontBold,
    color: darkNavy,
  });

  page1.drawText('Max Efficiency: 98.5%   |   Night Self-Consumption: < 1 W   |   Weight: 18 kg   |   AS/NZS 4777.2:2020 Compliant', {
    x: 55,
    y: diagramY + 30,
    size: 9,
    font: fontRegular,
    color: brightGreen,
  });

  // Footer Page 1
  page1.drawText('Oneroof Solar — Authorized Sungrow Installer | SG5.0-10RT Datasheet | Page 1 of 2', {
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

  page2.drawText('SUNGROW SG5.0RT / SG7.0RT / SG8.0RT / SG10RT SPECIFICATIONS', {
    x: 40,
    y: height - 28,
    size: 11,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  const tableData = [
    { section: 'Input (DC)' },
    { name: 'Recommended max. PV power', v1: '7.5 kWp', v2: '10.5 kWp', v3: '12 kWp', v4: '15 kWp' },
    { name: 'Max. PV input voltage', v1: '1100 V', v2: '1100 V', v3: '1100 V', v4: '1100 V' },
    { name: 'Min. voltage / Start-up voltage', v1: '180 V / 180 V', v2: '180 V / 180 V', v3: '180 V / 180 V', v4: '180 V / 180 V' },
    { name: 'MPPT operating voltage range', v1: '160 V – 1000 V', v2: '160 V – 1000 V', v3: '160 V – 1000 V', v4: '160 V – 1000 V' },
    { name: 'No. of independent MPP inputs', v1: '2', v2: '2', v3: '2', v4: '2' },
    { name: 'No. of PV strings per MPPT', v1: '1 / 1', v2: '2 / 1', v3: '2 / 1', v4: '2 / 1' },
    { name: 'Max. PV input current', v1: '32 A (16/16A)', v2: '48 A (32/16A)', v3: '48 A (32/16A)', v4: '48 A (32/16A)' },

    { section: 'Output (AC)' },
    { name: 'Rated AC output power', v1: '5000 W', v2: '6999 W', v3: '8000 W', v4: '9999 W' },
    { name: 'Max. AC output apparent power', v1: '5000 VA', v2: '6999 VA', v3: '8000 VA', v4: '9999 VA' },
    { name: 'Max. AC output current', v1: '7.6 A', v2: '10.6 A', v3: '12.1 A', v4: '15.2 A' },
    { name: 'Rated AC voltage', v1: '3/N/PE 230/400V', v2: '3/N/PE 230/400V', v3: '3/N/PE 230/400V', v4: '3/N/PE 230/400V' },
    { name: 'Rated grid frequency', v1: '50 Hz / 60 Hz', v2: '50 Hz / 60 Hz', v3: '50 Hz / 60 Hz', v4: '50 Hz / 60 Hz' },

    { section: 'Efficiency' },
    { name: 'Max. efficiency', v1: '98.4%', v2: '98.4%', v3: '98.5%', v4: '98.5%' },
    { name: 'European efficiency', v1: '97.4%', v2: '97.7%', v3: '97.8%', v4: '97.9%' },

    { section: 'Protection & Function' },
    { name: 'Surge protection', v1: 'DC Type II / AC Type II', v2: 'Type II', v3: 'Type II', v4: 'Type II' },
    { name: 'AFCI & PID recovery', v1: 'Integrated', v2: 'Integrated', v3: 'Integrated', v4: 'Integrated' },
    { name: 'DC Switch & Grid Monitoring', v1: 'Yes', v2: 'Yes', v3: 'Yes', v4: 'Yes' },

    { section: 'General Data' },
    { name: 'Dimensions (W * H * D)', v1: '370*480*195 mm', v2: '370*480*195 mm', v3: '370*480*195 mm', v4: '370*480*195 mm' },
    { name: 'Weight', v1: '18 kg', v2: '18 kg', v3: '18 kg', v4: '18 kg' },
    { name: 'Degree of protection / Corrosion', v1: 'IP65 / C5', v2: 'IP65 / C5', v3: 'IP65 / C5', v4: 'IP65 / C5' },
    { name: 'Compliance', v1: 'AS/NZS 4777.2:2020', v2: 'AS/NZS 4777.2:2020', v3: 'AS/NZS 4777.2:2020', v4: 'AS/NZS 4777.2:2020' },
  ];

  let tableY = height - 60;
  const col1X = 40;
  const col2X = 230;
  const col3X = 310;
  const col4X = 390;
  const col5X = 470;
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

  page2.drawText('PARAMETER', { x: col1X + 5, y: tableY - 12, size: 8, font: fontBold, color: darkNavy });
  page2.drawText('SG5.0RT', { x: col2X + 5, y: tableY - 12, size: 8, font: fontBold, color: darkNavy });
  page2.drawText('SG7.0RT', { x: col3X + 5, y: tableY - 12, size: 8, font: fontBold, color: darkNavy });
  page2.drawText('SG8.0RT', { x: col4X + 5, y: tableY - 12, size: 8, font: fontBold, color: darkNavy });
  page2.drawText('SG10RT', { x: col5X + 5, y: tableY - 12, size: 8, font: fontBold, color: darkNavy });

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
      page2.drawText(row.section, { x: col1X + 5, y: tableY - 12, size: 8.5, font: fontBold, color: darkNavy });
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
      page2.drawText(row.name || '', { x: col1X + 5, y: tableY - 12, size: 7.5, font: fontRegular, color: textDark });
      page2.drawText(row.v1 || '', { x: col2X + 5, y: tableY - 12, size: 7.5, font: fontBold, color: textDark });
      page2.drawText(row.v2 || '', { x: col3X + 5, y: tableY - 12, size: 7.5, font: fontBold, color: textDark });
      page2.drawText(row.v3 || '', { x: col4X + 5, y: tableY - 12, size: 7.5, font: fontBold, color: textDark });
      page2.drawText(row.v4 || '', { x: col5X + 5, y: tableY - 12, size: 7.5, font: fontBold, color: textDark });
    }
    tableY -= rowHeight;
  });

  page2.drawText('Oneroof Solar — Authorized Sungrow Installer | SG5.0-10RT Datasheet | Page 2 of 2', {
    x: 40,
    y: 25,
    size: 8,
    font: fontRegular,
    color: textGray,
  });

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(process.cwd(), 'public', 'downloads', 'Sungrow three phase grid inverter 5-10Kw.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log('PDF generated successfully at:', filePath);
}

generateSungrowSG5_10RTPDF().catch(console.error);
