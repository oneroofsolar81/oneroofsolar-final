import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';

async function generateSungrowSG110CXPDF() {
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
  page1.drawText('SG110CX Premium', {
    x: 40,
    y: height - 120,
    size: 24,
    font: fontBold,
    color: darkNavy,
  });

  page1.drawText('Multi-MPPT Commercial & Utility String Inverter for 1000 Vdc System (100kW / 110kVA)', {
    x: 40,
    y: height - 142,
    size: 10.5,
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
        '• 9 MPPTs with max efficiency 98.7%',
        '• Compatible with bifacial high-power PV modules',
        '• Built-in PID recovery & anti-PID function',
      ],
    },
    {
      title: 'SMART O&M',
      items: [
        '• Smart IV Curve Diagnosis on iSolarCloud',
        '• Touch-free commissioning & remote firmware updates',
        '• Smart string current monitoring for early fault prevention',
      ],
    },
    {
      title: 'LOWER SYSTEM COST',
      items: [
        '• Compatible with Al and Cu AC cables',
        '• DC 2 in 1 connection enabled for cost savings',
        '• Power Line Communication (PLC) supported',
      ],
    },
    {
      title: 'PROVEN SAFETY',
      items: [
        '• IP66 rating & C5 anti-corrosion protection grade',
        '• Type I+II DC SPD & Type II AC SPD built-in',
        '• Q at night function for reactive power support',
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

  page1.drawText('Solar Input: 9 MPPTs / 18 Strings (26A per MPPT, up to 150 kWp PV)  -->  DC Switch  -->  DC SPD', {
    x: 55,
    y: diagramY + 130,
    size: 9,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('Inverter Core: Utility-Grade 3-Phase Inverter Bridge  -->  AC Filter  -->  AC Relays & AC SPD', {
    x: 55,
    y: diagramY + 105,
    size: 9,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('Grid Connection: 3/N/PE or 3/PE, 400Vac / 415Vac Large Commercial & Utility Grid Systems', {
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

  page1.drawText('Max Efficiency: 98.7% (Euro 98.5%)   |   Protection: IP66 / C5   |   Weight: 89 kg   |   AS/NZS 4777.2:2020', {
    x: 55,
    y: diagramY + 30,
    size: 9,
    font: fontRegular,
    color: brightGreen,
  });

  // Footer Page 1
  page1.drawText('Oneroof Solar — Authorized Sungrow Utility Installer | SG110CX Datasheet | Page 1 of 2', {
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

  page2.drawText('SUNGROW SG110CX TECHNICAL SPECIFICATIONS', {
    x: 40,
    y: height - 28,
    size: 11,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  const tableData = [
    { section: 'Input (DC)' },
    { name: 'Max. PV input power', v1: '150000 Wp' },
    { name: 'Max. PV input voltage', v1: '1100 V' },
    { name: 'Min. PV voltage / Startup voltage', v1: '200 V / 250 V' },
    { name: 'Rated PV input voltage', v1: '585 V' },
    { name: 'MPPT operating voltage range', v1: '200 V – 1000 V' },
    { name: 'No. of independent MPP inputs', v1: '9 MPPTs' },
    { name: 'No. of PV strings per MPPT', v1: '2 strings per MPPT (18 total)' },
    { name: 'Max. PV input current', v1: '234 A (26 A * 9)' },
    { name: 'Max. DC short-circuit current', v1: '360 A (40 A * 9)' },

    { section: 'Output (AC)' },
    { name: 'Rated AC output power', v1: '100.0 kW @ 45°C' },
    { name: 'Max. AC output apparent power', v1: '110.0 kVA' },
    { name: 'Max. AC output current', v1: '158.8 A' },
    { name: 'Rated AC voltage', v1: '3/N/PE or 3/PE, 230/400V, 240/415V' },
    { name: 'Rated grid frequency', v1: '50 Hz / 60 Hz' },
    { name: 'Harmonic (THD)', v1: '< 3% (at rated power)' },

    { section: 'Efficiency' },
    { name: 'Max. efficiency', v1: '98.7%' },
    { name: 'European efficiency', v1: '98.5%' },

    { section: 'Protection & Function' },
    { name: 'Surge protection', v1: 'DC Type I+II / AC Type II' },
    { name: 'AFCI & PID recovery', v1: 'Integrated / PID Zero' },
    { name: 'Grid monitoring & DC switch', v1: 'Yes' },

    { section: 'General Data' },
    { name: 'Dimensions (W * H * D)', v1: '1051 * 660 * 362 mm' },
    { name: 'Weight', v1: '89 kg' },
    { name: 'Cooling method', v1: 'Smart forced air cooling' },
    { name: 'Degree of protection / Corrosion', v1: 'IP66 / C5' },
    { name: 'Compliance', v1: 'AS/NZS 4777.2:2020, IEC 62109, IEC 61727' },
  ];

  let tableY = height - 60;
  const col1X = 40;
  const col2X = 350;
  const rowHeight = 18;

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

  page2.drawText('SPECIFICATION PARAMETER', { x: col1X + 10, y: tableY - 13, size: 9, font: fontBold, color: darkNavy });
  page2.drawText('SG110CX PREMIUM VALUE', { x: col2X + 10, y: tableY - 13, size: 9, font: fontBold, color: darkNavy });

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
      page2.drawText(row.section, { x: col1X + 10, y: tableY - 13, size: 9, font: fontBold, color: darkNavy });
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
      page2.drawText(row.name || '', { x: col1X + 10, y: tableY - 13, size: 8, font: fontRegular, color: textDark });
      page2.drawText(row.v1 || '', { x: col2X + 10, y: tableY - 13, size: 8, font: fontBold, color: textDark });
    }
    tableY -= rowHeight;
  });

  page2.drawText('Oneroof Solar — Authorized Sungrow Utility Installer | SG110CX Datasheet | Page 2 of 2', {
    x: 40,
    y: 25,
    size: 8,
    font: fontRegular,
    color: textGray,
  });

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(process.cwd(), 'public', 'downloads', 'Sungrow threephase inverter 100Kw.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log('PDF generated successfully at:', filePath);
}

generateSungrowSG110CXPDF().catch(console.error);
