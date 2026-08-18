import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';

async function generateSungrowSG30CXPDF() {
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
  page1.drawText('SG30CX-P2 / SG50CX-P2', {
    x: 40,
    y: height - 120,
    size: 24,
    font: fontBold,
    color: darkNavy,
  });

  page1.drawText('Multi-MPPT Commercial String Inverter for 1000 Vdc System (30kW / 50kW)', {
    x: 40,
    y: height - 142,
    size: 11,
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
        '• Compatible with over 500W+ high-power PV modules',
        '• Dynamic shading optimization mode',
        '• Built-in PID recovery function',
      ],
    },
    {
      title: 'SMART O&M',
      items: [
        '• Key component diagnosis and protection',
        '• Smart IV Curve Diagnosis on iSolarCloud',
        '• Grid fault record function, easy remote O&M',
      ],
    },
    {
      title: 'LOWER INVESTMENT',
      items: [
        '• Easy to handle thanks to 34% weight reduction',
        '• Plug and Play design with buckle latching',
        '• Compact commercial installation footprint',
      ],
    },
    {
      title: 'PROVEN SAFETY',
      items: [
        '• IP66 protection and C5 anti-corrosion rating',
        '• DC Type I+II SPD, AC Type II SPD built-in',
        '• Support AFCI 2.0 arc fault protection',
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

  page1.drawText('Solar Input: Multi-MPPTs (30A per MPPT, up to 70 kWp)  -->  DC Switch  -->  DC Type I+II SPD', {
    x: 55,
    y: diagramY + 130,
    size: 9,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('Inverter Bridge: High Power Conversion Topology  -->  AC Filter  -->  AC Relays & AC Type II SPD', {
    x: 55,
    y: diagramY + 105,
    size: 9,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('Grid Output: 3/N/PE, 230V / 400V Commercial Three Phase Infrastructure', {
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

  page1.drawText('Max Efficiency: 98.5% (Euro 98.3%)   |   Protection: IP66 / C5   |   Weight: 38 kg - 41 kg   |   AS/NZS 4777.2:2020', {
    x: 55,
    y: diagramY + 30,
    size: 9,
    font: fontRegular,
    color: brightGreen,
  });

  // Footer Page 1
  page1.drawText('Oneroof Solar — Authorized Sungrow Commercial Installer | SG30CX-P2 Datasheet | Page 1 of 2', {
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

  page2.drawText('SUNGROW SG30CX-P2 / SG50CX-P2 TECHNICAL SPECIFICATIONS', {
    x: 40,
    y: height - 28,
    size: 11,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  const tableData = [
    { section: 'Input (DC)' },
    { name: 'Recommended max. PV power', v1: '46.2 kWp', v2: '70 kWp' },
    { name: 'Max. PV input voltage', v1: '1100 V', v2: '1100 V' },
    { name: 'Min. PV voltage / Startup voltage', v1: '160 V / 200 V', v2: '160 V / 200 V' },
    { name: 'Rated PV input voltage', v1: '600 V', v2: '600 V' },
    { name: 'MPPT operating voltage range', v1: '160 V – 1000 V', v2: '160 V – 1000 V' },
    { name: 'No. of independent MPP inputs', v1: '3', v2: '4' },
    { name: 'No. of PV strings per MPPT', v1: '2', v2: '2' },
    { name: 'Max. PV input current', v1: '30 A * 3', v2: '30 A * 4' },
    { name: 'Max. DC short-circuit current', v1: '50 A * 3', v2: '50 A * 4' },

    { section: 'Output (AC)' },
    { name: 'Rated AC output power', v1: '29.9 kW', v2: '50 kW' },
    { name: 'Max. AC output apparent power', v1: '29.9 kVA', v2: '50 kVA' },
    { name: 'Max. AC output current', v1: '48.15 A', v2: '80.5 A' },
    { name: 'Rated AC output current', v1: '43.5 A', v2: '72.5 A' },
    { name: 'Rated AC voltage', v1: '3/N/PE, 230 V / 400 V', v2: '3/N/PE, 230 V / 400 V' },
    { name: 'Harmonic (THD)', v1: '< 3% (at rated power)', v2: '< 3% (at rated power)' },

    { section: 'Efficiency' },
    { name: 'Max. efficiency', v1: '98.5%', v2: '98.5%' },
    { name: 'European efficiency', v1: '98.3%', v2: '98.3%' },

    { section: 'Protection & Function' },
    { name: 'Surge protection', v1: 'DC Type I+II / AC Type II', v2: 'DC Type I+II / AC Type II' },
    { name: 'AFCI & PID recovery', v1: 'AFCI 2.0 / Integrated', v2: 'AFCI 2.0 / Integrated' },
    { name: 'Grid monitoring & DC switch', v1: 'Yes', v2: 'Yes' },

    { section: 'General Data' },
    { name: 'Dimensions (W * H * D)', v1: '645*575*245 mm', v2: '645*575*245 mm' },
    { name: 'Weight', v1: '38 kg', v2: '41 kg' },
    { name: 'Cooling method', v1: 'Smart forced air cooling', v2: 'Smart forced air cooling' },
    { name: 'Degree of protection / Corrosion', v1: 'IP66 / C5', v2: 'IP66 / C5' },
    { name: 'Compliance', v1: 'AS/NZS 4777.2:2020, IEC 62109', v2: 'AS/NZS 4777.2:2020, IEC 62109' },
  ];

  let tableY = height - 60;
  const col1X = 40;
  const col2X = 300;
  const col3X = 440;
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

  page2.drawText('SPECIFICATION PARAMETER', { x: col1X + 8, y: tableY - 12, size: 8.5, font: fontBold, color: darkNavy });
  page2.drawText('SG30CX-P2', { x: col2X + 8, y: tableY - 12, size: 8.5, font: fontBold, color: darkNavy });
  page2.drawText('SG50CX-P2', { x: col3X + 8, y: tableY - 12, size: 8.5, font: fontBold, color: darkNavy });

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
      page2.drawText(row.section, { x: col1X + 8, y: tableY - 12, size: 8.5, font: fontBold, color: darkNavy });
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
      page2.drawText(row.name || '', { x: col1X + 8, y: tableY - 12, size: 7.5, font: fontRegular, color: textDark });
      page2.drawText(row.v1 || '', { x: col2X + 8, y: tableY - 12, size: 7.5, font: fontBold, color: textDark });
      page2.drawText(row.v2 || '', { x: col3X + 8, y: tableY - 12, size: 7.5, font: fontBold, color: textDark });
    }
    tableY -= rowHeight;
  });

  page2.drawText('Oneroof Solar — Authorized Sungrow Commercial Installer | SG30CX-P2 Datasheet | Page 2 of 2', {
    x: 40,
    y: 25,
    size: 8,
    font: fontRegular,
    color: textGray,
  });

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(process.cwd(), 'public', 'downloads', 'Sungrow threephase inverter 30Kw.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log('PDF generated successfully at:', filePath);
}

generateSungrowSG30CXPDF().catch(console.error);
