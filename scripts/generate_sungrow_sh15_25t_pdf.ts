import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';

async function generateSungrowSH15_25TPDF() {
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
  page1.drawText('SH15 / 20 / 25T', {
    x: 40,
    y: height - 120,
    size: 26,
    font: fontBold,
    color: darkNavy,
  });

  page1.drawText('Hybrid Three Phase Inverter (15kW / 20kW / 25kW)', {
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
      title: 'FULL BACKUP',
      items: [
        '• Built-in 63 A bypass for whole home backup',
        '• 10 ms seamless emergency backup switch time',
        '• Peak output up to 36,500 VA (10s) in backup mode',
      ],
    },
    {
      title: 'FLEXIBLE APPLICATION',
      items: [
        '• Support 100% unbalance output in backup & grid mode',
        '• Max. 16 A DC input current per string',
        '• 50 A fast charge / discharge current',
      ],
    },
    {
      title: 'FRIENDLY INSTALLATION',
      items: [
        '• Plug & Play quick installation connectors',
        '• Quiet operation for indoor or outdoor installation',
        '• Compact commercial & high-end residential casing',
      ],
    },
    {
      title: 'SAFE AND DURABLE',
      items: [
        '• Support precise Arc Fault Circuit Interrupter (AFCI)',
        '• IP65 / C5 anti-corrosion protection rating',
        '• Integrated Type II DC & AC surge protection (SPD)',
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

  page1.drawText('Solar PV Input: 3 MPPTs (up to 50 kWp PV array)  -->  DC Switch  -->  3-Phase Inverter Bridge', {
    x: 55,
    y: diagramY + 130,
    size: 9,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('Battery Connection: 100V - 700V HV Li-ion (50A Charge/Discharge)  <-->  Bi-directional Converter', {
    x: 55,
    y: diagramY + 105,
    size: 9,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('AC Output: 3/N/PE (380V/400V/415V Three-Phase Grid & 63A Whole Home Backup Circuit)', {
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

  page1.drawText('Max Efficiency: 98.2%   |   Backup Switching: < 10 ms   |   Protection: IP65 / C5   |   Built-in 63A Bypass', {
    x: 55,
    y: diagramY + 30,
    size: 9,
    font: fontRegular,
    color: brightGreen,
  });

  // Footer Page 1
  page1.drawText('Oneroof Solar — Authorized Sungrow Installer | SH15/20/25T Datasheet | Page 1 of 2', {
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

  page2.drawText('SUNGROW SH15T / SH20T / SH25T TECHNICAL SPECIFICATIONS', {
    x: 40,
    y: height - 28,
    size: 11,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  const tableData = [
    { section: 'Input (DC)' },
    { name: 'Max. PV input power', v1: '30000 Wp', v2: '40000 Wp', v3: '50000 Wp' },
    { name: 'Max. PV input voltage', v1: '1000 V', v2: '1000 V', v3: '1000 V' },
    { name: 'Min. PV voltage / Startup voltage', v1: '150 V / 180 V', v2: '150 V / 180 V', v3: '150 V / 180 V' },
    { name: 'MPPT operating voltage range', v1: '150 V – 950 V', v2: '150 V – 950 V', v3: '150 V – 950 V' },
    { name: 'No. of independent MPP trackers', v1: '3', v2: '3', v3: '3' },
    { name: 'No. of PV strings per MPPT', v1: '2 / 2 / 1', v2: '2 / 2 / 1', v3: '2 / 2 / 1' },
    { name: 'Max. PV input current', v1: '80 A (32/32/16A)', v2: '80 A (32/32/16A)', v3: '80 A (32/32/16A)' },

    { section: 'Battery Data' },
    { name: 'Battery type', v1: 'Li-ion battery', v2: 'Li-ion battery', v3: 'Li-ion battery' },
    { name: 'Battery voltage range', v1: '100 V – 700 V', v2: '100 V – 700 V', v3: '100 V – 700 V' },
    { name: 'Max charge / discharge current', v1: '50 A / 50 A', v2: '50 A / 50 A', v3: '50 A / 50 A' },
    { name: 'Max discharge power', v1: '15000 W', v2: '20000 W', v3: '25000 W' },

    { section: 'AC Output (Grid)' },
    { name: 'Rated AC output power', v1: '15000 W', v2: '20000 W', v3: '25000 W' },
    { name: 'Max. AC output current', v1: '22.8 A', v2: '30.4 A', v3: '37.9 A' },
    { name: 'Rated AC voltage', v1: '3/N/PE 380/400/415V', v2: '3/N/PE 380/400/415V', v3: '3/N/PE 380/400/415V' },

    { section: 'Backup Data (Off-Grid Mode)' },
    { name: 'Backup switch time', v1: '< 10 ms', v2: '< 10 ms', v3: '< 10 ms' },
    { name: 'Peak output power (10s)', v1: '25500 VA', v2: '32000 VA', v3: '36500 VA' },
    { name: 'Whole home backup bypass', v1: 'Built-in 63 A', v2: 'Built-in 63 A', v3: 'Built-in 63 A' },

    { section: 'Efficiency & Protection' },
    { name: 'Max. efficiency', v1: '98.1%', v2: '98.1%', v3: '98.2%' },
    { name: 'Surge Protection', v1: 'Type II DC & AC', v2: 'Type II DC & AC', v3: 'Type II DC & AC' },
    { name: 'AFCI & PID Zero', v1: 'Integrated', v2: 'Integrated', v3: 'Integrated' },

    { section: 'General Data' },
    { name: 'Dimensions (W * H * D)', v1: '620*480*245 mm', v2: '620*480*245 mm', v3: '620*480*245 mm' },
    { name: 'Weight', v1: '38 kg', v2: '38 kg', v3: '40 kg' },
    { name: 'Degree of protection', v1: 'IP65', v2: 'IP65', v3: 'IP65' },
    { name: 'Compliance', v1: 'AS/NZS 4777.2:2020', v2: 'AS/NZS 4777.2:2020', v3: 'AS/NZS 4777.2:2020' },
  ];

  let tableY = height - 60;
  const col1X = 40;
  const col2X = 270;
  const col3X = 370;
  const col4X = 470;
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

  page2.drawText('SPECIFICATION PARAMETER', { x: col1X + 6, y: tableY - 12, size: 8, font: fontBold, color: darkNavy });
  page2.drawText('SH15T', { x: col2X + 6, y: tableY - 12, size: 8, font: fontBold, color: darkNavy });
  page2.drawText('SH20T', { x: col3X + 6, y: tableY - 12, size: 8, font: fontBold, color: darkNavy });
  page2.drawText('SH25T', { x: col4X + 6, y: tableY - 12, size: 8, font: fontBold, color: darkNavy });

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
      page2.drawText(row.section, { x: col1X + 6, y: tableY - 12, size: 8.5, font: fontBold, color: darkNavy });
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
      page2.drawText(row.name || '', { x: col1X + 6, y: tableY - 12, size: 7.5, font: fontRegular, color: textDark });
      page2.drawText(row.v1 || '', { x: col2X + 6, y: tableY - 12, size: 7.5, font: fontBold, color: textDark });
      page2.drawText(row.v2 || '', { x: col3X + 6, y: tableY - 12, size: 7.5, font: fontBold, color: textDark });
      page2.drawText(row.v3 || '', { x: col4X + 6, y: tableY - 12, size: 7.5, font: fontBold, color: textDark });
    }
    tableY -= rowHeight;
  });

  page2.drawText('Oneroof Solar — Authorized Sungrow Installer | SH15/20/25T Datasheet | Page 2 of 2', {
    x: 40,
    y: 25,
    size: 8,
    font: fontRegular,
    color: textGray,
  });

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(process.cwd(), 'public', 'downloads', 'SH15-20-25T Hybrid Three Phase Inverter.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log('PDF generated successfully at:', filePath);
}

generateSungrowSH15_25TPDF().catch(console.error);
