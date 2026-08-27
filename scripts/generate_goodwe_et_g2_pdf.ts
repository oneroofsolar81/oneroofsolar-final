import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';

async function generateGoodWeETG2PDF() {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const darkNavy = rgb(0.05, 0.08, 0.12); // #0D151E
  const goodweRed = rgb(0.88, 0.12, 0.14); // #E01E24
  const emeraldGreen = rgb(0.24, 0.70, 0.44); // #3DB270
  const textDark = rgb(0.12, 0.15, 0.18);
  const textGray = rgb(0.38, 0.43, 0.48);
  const bgLight = rgb(0.96, 0.97, 0.98);
  const borderGray = rgb(0.84, 0.87, 0.90);
  const tableHeaderBg = rgb(0.90, 0.93, 0.96);

  // ==================== PAGE 1: OVERVIEW & HIGHLIGHTS ====================
  const page1 = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page1.getSize();

  // Top Header Bar
  page1.drawRectangle({
    x: 0,
    y: height - 80,
    width: width,
    height: 80,
    color: darkNavy,
  });

  page1.drawText('GOODWE', {
    x: 40,
    y: height - 46,
    size: 22,
    font: fontBold,
    color: goodweRed,
  });

  page1.drawText('Smart Energy Innovator', {
    x: 40,
    y: height - 63,
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
  page1.drawText('ET G2 Series 6-15kW', {
    x: 40,
    y: height - 120,
    size: 24,
    font: fontBold,
    color: darkNavy,
  });

  page1.drawText('Three Phase | 2/3 MPPTs | High-Voltage Hybrid Solar Inverter (HV)', {
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

  page1.drawText('PRODUCT INTRODUCTION & ARCHITECTURE', {
    x: 52,
    y: height - 173,
    size: 10.5,
    font: fontBold,
    color: darkNavy,
  });

  // Intro Paragraph Box
  page1.drawRectangle({
    x: 40,
    y: height - 265,
    width: width - 80,
    height: 75,
    color: rgb(1, 1, 1),
    borderColor: borderGray,
    borderWidth: 1,
  });

  page1.drawText('The ET G2 Series is the latest iteration of GoodWe three-phase high-voltage hybrid inverters, engineered to', {
    x: 52,
    y: height - 204,
    size: 9,
    font: fontRegular,
    color: textDark,
  });
  page1.drawText('accommodate high household & commercial electricity demands with 12kW and 15kW higher capacity additions.', {
    x: 52,
    y: height - 220,
    size: 9,
    font: fontRegular,
    color: textDark,
  });
  page1.drawText('It supports up to 4 units in parallel connection for scalable power expansion, delivering up to 160% (200% AU)', {
    x: 52,
    y: height - 236,
    size: 9,
    font: fontRegular,
    color: textDark,
  });
  page1.drawText('PV oversizing and 150% unbalanced three-phase AC output for optimal solar energy harvesting in tropical NT.', {
    x: 52,
    y: height - 252,
    size: 9,
    font: fontBold,
    color: goodweRed,
  });

  // 4 Feature Boxes
  const features = [
    {
      title: 'FLEXIBLE & ADAPTABLE APPLICATIONS',
      items: [
        '- Integrated dry contact for smart external loads',
        '- Backup with UPS-level switching (< 10 ms)',
        '- Fast load response & seamless generator support',
        '- Plug & Play installation with compact chassis',
      ],
    },
    {
      title: 'SUPERB SAFETY & RELIABILITY',
      items: [
        '- AI-driven AFCI 3.0 arc-fault protection',
        '- IP66 ingress protection rating for tropical NT',
        '- Type II SPD protection on both DC & AC sides',
        '- Non-isolated topology with natural cooling',
      ],
    },
    {
      title: 'HIGHER POWER GENERATION',
      items: [
        '- Unbalanced output up to 150% on phase loads',
        '- Up to 160% PV input oversizing (200% in Australia)',
        '- Parallel connection capability (up to 4 units)',
        '- Max 98.2% inverter efficiency / 99.5% MPPT',
      ],
    },
    {
      title: 'INTELLIGENT HV BATTERY INTEGRATION',
      items: [
        '- Wide HV battery voltage range: 150V - 720V',
        '- Max continuous charge/discharge current up to 40A',
        '- Compatible with leading high-voltage LFP batteries',
        '- SEMS+ App & Web monitoring via WiFi/LAN/BLE',
      ],
    },
  ];

  const boxY = height - 280;
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
      y: yPos + boxHeight - 20,
      size: 8.5,
      font: fontBold,
      color: darkNavy,
    });

    feat.items.forEach((item, itemIdx) => {
      page1.drawText(item, {
        x: xPos + 12,
        y: yPos + boxHeight - 38 - itemIdx * 18,
        size: 8,
        font: fontRegular,
        color: textDark,
      });
    });
  });

  // Australian Compliance Highlight Box
  const auBoxY = height - 540;
  page1.drawRectangle({
    x: 40,
    y: auBoxY - 110,
    width: width - 80,
    height: 110,
    color: bgLight,
    borderColor: borderGray,
    borderWidth: 1,
  });

  page1.drawText('AUSTRALIAN & NT INSTALLATION HIGHLIGHTS', {
    x: 55,
    y: auBoxY - 18,
    size: 10,
    font: fontBold,
    color: darkNavy,
  });

  page1.drawText('- Grid Standard Compliance: AS/NZS 4777.2:2020 (Australia A, B, C & New Zealand Region presets).', {
    x: 55,
    y: auBoxY - 38,
    size: 8.5,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('- Peak Backup Overload: Supports 200% nominal output power for 60 seconds during off-grid cold start.', {
    x: 55,
    y: auBoxY - 56,
    size: 8.5,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('- Natural Convection Cooling: Fanless design produces silent operation (<= 35dB) and withstands humid ambient air.', {
    x: 55,
    y: auBoxY - 74,
    size: 8.5,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('Fully certified to Australian Standards for installation across Darwin, Palmerston and Regional Northern Territory.', {
    x: 55,
    y: auBoxY - 94,
    size: 8.5,
    font: fontBold,
    color: emeraldGreen,
  });

  // Footer Page 1
  page1.drawText('Oneroof Solar - Authorized GoodWe Commercial Partner | GoodWe ET G2 Series Datasheet | Page 1 of 2', {
    x: 40,
    y: 30,
    size: 8,
    font: fontRegular,
    color: textGray,
  });

  // ==================== PAGE 2: TECHNICAL SPECIFICATIONS ====================
  const page2 = pdfDoc.addPage([595.28, 841.89]);

  page2.drawRectangle({
    x: 0,
    y: height - 45,
    width: width,
    height: 45,
    color: darkNavy,
  });

  page2.drawText('GOODWE ET G2 SERIES THREE PHASE HYBRID INVERTER TECHNICAL DATA', {
    x: 40,
    y: height - 28,
    size: 10,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  const tableData = [
    { section: 'Battery Input Data (High Voltage)' },
    { name: 'Battery Type', v1: 'Li-Ion / LFP', v2: 'Li-Ion / LFP', v3: 'Li-Ion / LFP', v4: 'Li-Ion / LFP', v5: 'Li-Ion / LFP' },
    { name: 'Nominal Battery Voltage', v1: '500 V', v2: '500 V', v3: '500 V', v4: '500 V', v5: '500 V' },
    { name: 'Battery Voltage Range', v1: '150 - 720 V', v2: '150 - 720 V', v3: '150 - 720 V', v4: '150 - 720 V', v5: '150 - 720 V' },
    { name: 'Max. Continuous Charge Current', v1: '30 A', v2: '30 A', v3: '40 A', v4: '40 A', v5: '40 A' },
    { name: 'Max. Continuous Discharge Current', v1: '30 A', v2: '30 A', v3: '40 A', v4: '40 A', v5: '40 A' },
    { name: 'Max. Charging Power (W)', v1: '9,000 W', v2: '12,000 W', v3: '15,000 W', v4: '18,000 W', v5: '24,000 W' },
    { name: 'Max. Discharging Power (W)', v1: '6,600 W', v2: '8,800 W', v3: '11,000 W', v4: '13,200 W', v5: '16,500 W' },

    { section: 'PV String Input Data (DC)' },
    { name: 'Max. Recommended PV Power (W)', v1: '9,600 W (12kW AU)', v2: '12,800 W (16kW AU)', v3: '16,000 W (20kW AU)', v4: '19,200 W (24kW AU)', v5: '24,000 W (30kW AU)' },
    { name: 'Max. Input Voltage / Start-up', v1: '1000 V / 150 V', v2: '1000 V / 150 V', v3: '1000 V / 150 V', v4: '1000 V / 150 V', v5: '1000 V / 150 V' },
    { name: 'MPPT Operating Voltage Range', v1: '120 - 850 V', v2: '120 - 850 V', v3: '120 - 850 V', v4: '120 - 850 V', v5: '120 - 850 V' },
    { name: 'Max. Input Current per MPPT', v1: '16 A', v2: '16 A', v3: '16 A', v4: '16 A', v5: '16 A' },
    { name: 'Max. Short Circuit Current / MPPT', v1: '24 A', v2: '24 A', v3: '24 A', v4: '24 A', v5: '24 A' },
    { name: 'Number of MPP Trackers (Strings)', v1: '2 (1/1)', v2: '2 (1/1)', v3: '3 (1/1/1)', v4: '3 (1/1/1)', v5: '3 (1/1/1)' },

    { section: 'AC Output Data (On-Grid)' },
    { name: 'Nominal Output Power (W)', v1: '6,000 W', v2: '8,000 W', v3: '10,000 W', v4: '12,000 W', v5: '15,000 W' },
    { name: 'Nominal Apparent Power to Grid (VA)', v1: '6,000 VA', v2: '8,000 VA', v3: '10,000 VA', v4: '12,000 VA', v5: '15,000 VA' },
    { name: 'Max. Apparent Power from Grid (VA)', v1: '12,000 VA', v2: '16,000 VA', v3: '20,000 VA', v4: '20,000 VA', v5: '20,000 VA' },
    { name: 'Nominal Voltage / Frequency', v1: '400/380V (3L/N/PE)', v2: '400/380V (3L/N/PE)', v3: '400/380V (3L/N/PE)', v4: '400/380V (3L/N/PE)', v5: '400/380V (3L/N/PE)' },
    { name: 'Max. AC Output Current (A)', v1: '8.7 A', v2: '11.6 A', v3: '14.5 A', v4: '17.4 A', v5: '21.7 A' },
    { name: 'Max. Total Harmonic Distortion', v1: '< 3%', v2: '< 3%', v3: '< 3%', v4: '< 3%', v5: '< 3%' },

    { section: 'AC Output Data (Back-Up Side)' },
    { name: 'Back-Up Nominal Power (VA)', v1: '6,000 VA', v2: '8,000 VA', v3: '10,000 VA', v4: '12,000 VA', v5: '15,000 VA' },
    { name: 'Peak Output Power without Grid (60s)', v1: '12,000 VA (60s)', v2: '16,000 VA (60s)', v3: '18,000 VA (60s)', v4: '18,000 VA (60s)', v5: '18,000 VA (60s)' },
    { name: 'Switching Time / Output THDv', v1: '< 10ms / < 3%', v2: '< 10ms / < 3%', v3: '< 10ms / < 3%', v4: '< 10ms / < 3%', v5: '< 10ms / < 3%' },

    { section: 'Efficiency & Protection' },
    { name: 'Max. Efficiency / Euro Efficiency', v1: '98.0% / 97.2%', v2: '98.0% / 97.2%', v3: '98.2% / 97.5%', v4: '98.2% / 97.5%', v5: '98.2% / 97.5%' },
    { name: 'Max. Battery to AC Efficiency', v1: '97.2%', v2: '97.5%', v3: '97.5%', v4: '97.5%', v5: '97.5%' },
    { name: 'AFCI 3.0 / Anti-Islanding', v1: 'Integrated / Yes', v2: 'Integrated / Yes', v3: 'Integrated / Yes', v4: 'Integrated / Yes', v5: 'Integrated / Yes' },
    { name: 'DC & AC Surge Protection', v1: 'Type II / Type II', v2: 'Type II / Type II', v3: 'Type II / Type II', v4: 'Type II / Type II', v5: 'Type II / Type II' },

    { section: 'General Data' },
    { name: 'Dimensions (W * H * D mm)', v1: '496*460*221', v2: '496*460*221', v3: '496*460*221', v4: '496*460*221', v5: '496*460*221' },
    { name: 'Weight (kg) / Cooling Method', v1: '23 kg / Natural', v2: '23 kg / Natural', v3: '25 kg / Natural', v4: '25 kg / Natural', v5: '25 kg / Natural' },
    { name: 'Operating Temp / Ingress Protection', v1: '-35~60 C / IP66', v2: '-35~60 C / IP66', v3: '-35~60 C / IP66', v4: '-35~60 C / IP66', v5: '-35~60 C / IP66' },
    { name: 'Communication Interfaces', v1: 'RS485/CAN/WiFi/BLE', v2: 'RS485/CAN/WiFi/BLE', v3: 'RS485/CAN/WiFi/BLE', v4: 'RS485/CAN/WiFi/BLE', v5: 'RS485/CAN/WiFi/BLE' },
  ];

  let tY = height - 55;
  const colW1 = 165;
  const colWVal = 70;
  const rowH = 15.5;

  // Header row
  page2.drawRectangle({
    x: 40,
    y: tY - rowH,
    width: width - 80,
    height: rowH,
    color: tableHeaderBg,
    borderColor: borderGray,
    borderWidth: 1,
  });

  page2.drawText('SPECIFICATION', { x: 45, y: tY - 11, size: 7.5, font: fontBold, color: darkNavy });
  page2.drawText('GW6000-ET', { x: 40 + colW1 + 5, y: tY - 11, size: 7.5, font: fontBold, color: darkNavy });
  page2.drawText('GW8000-ET', { x: 40 + colW1 + colWVal * 1 + 5, y: tY - 11, size: 7.5, font: fontBold, color: darkNavy });
  page2.drawText('GW10K-ET', { x: 40 + colW1 + colWVal * 2 + 5, y: tY - 11, size: 7.5, font: fontBold, color: darkNavy });
  page2.drawText('GW12K-ET', { x: 40 + colW1 + colWVal * 3 + 5, y: tY - 11, size: 7.5, font: fontBold, color: darkNavy });
  page2.drawText('GW15K-ET', { x: 40 + colW1 + colWVal * 4 + 5, y: tY - 11, size: 7.5, font: fontBold, color: darkNavy });

  tY -= rowH;

  tableData.forEach((row) => {
    if (row.section) {
      page2.drawRectangle({
        x: 40,
        y: tY - rowH,
        width: width - 80,
        height: rowH,
        color: rgb(0.92, 0.95, 0.98),
      });
      page2.drawText(row.section, { x: 45, y: tY - 11, size: 8, font: fontBold, color: goodweRed });
    } else {
      page2.drawRectangle({
        x: 40,
        y: tY - rowH,
        width: width - 80,
        height: rowH,
        color: rgb(1, 1, 1),
        borderColor: borderGray,
        borderWidth: 0.5,
      });
      page2.drawText(row.name || '', { x: 45, y: tY - 11, size: 6.8, font: fontRegular, color: textDark });
      page2.drawText(row.v1 || '', { x: 40 + colW1 + 5, y: tY - 11, size: 6.8, font: fontBold, color: textDark });
      page2.drawText(row.v2 || '', { x: 40 + colW1 + colWVal * 1 + 5, y: tY - 11, size: 6.8, font: fontBold, color: textDark });
      page2.drawText(row.v3 || '', { x: 40 + colW1 + colWVal * 2 + 5, y: tY - 11, size: 6.8, font: fontBold, color: textDark });
      page2.drawText(row.v4 || '', { x: 40 + colW1 + colWVal * 3 + 5, y: tY - 11, size: 6.8, font: fontBold, color: textDark });
      page2.drawText(row.v5 || '', { x: 40 + colW1 + colWVal * 4 + 5, y: tY - 11, size: 6.8, font: fontBold, color: textDark });
    }
    tY -= rowH;
  });

  page2.drawText('Oneroof Solar - Authorized GoodWe Commercial Partner | GoodWe ET G2 Series Datasheet | Page 2 of 2', {
    x: 40,
    y: 25,
    size: 8,
    font: fontRegular,
    color: textGray,
  });

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(process.cwd(), 'public', 'downloads', 'GoodWe ET G2 Three Phase Hybrid Inverter 6-15Kw.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log('PDF generated successfully at:', filePath);
}

generateGoodWeETG2PDF().catch(console.error);
