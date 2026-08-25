import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';

async function generateGoodWeESAPDF() {
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

  // ==================== PAGE 1: OVERVIEW & SYSTEM ARCHITECTURE ====================
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

  page1.drawText('SOLUTIONS MANUAL & TECHNICAL DATASHEET', {
    x: width - 260,
    y: height - 50,
    size: 9.5,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  // Title Block
  page1.drawText('ESA Series 3-10kW', {
    x: 40,
    y: height - 120,
    size: 24,
    font: fontBold,
    color: darkNavy,
  });

  page1.drawText('Residential All-In-One Energy Storage System (Inverter + Modular LFP Battery)', {
    x: 40,
    y: height - 142,
    size: 11,
    font: fontBold,
    color: textGray,
  });

  // Highlight Box: Models Included
  page1.drawRectangle({
    x: 40,
    y: height - 200,
    width: width - 80,
    height: 48,
    color: bgLight,
    borderColor: borderGray,
    borderWidth: 1,
  });

  page1.drawText('COVERED PRODUCT CONFIGURATIONS & MODELS:', {
    x: 52,
    y: height - 168,
    size: 9,
    font: fontBold,
    color: darkNavy,
  });

  page1.drawText('Hybrid Inverters: GW3K / GW3.6K / GW5K / GW6K / GW8K / GW9.999K / GW10K (EHA & BHA Series)', {
    x: 52,
    y: height - 182,
    size: 8.5,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('Battery Modules: GW5.1-BAT-D-G20/G21 (5.12kWh) | GW8.3-BAT-D-G20/G21 (8.32kWh) | GW6.0-BAT | GW9.0-BAT', {
    x: 52,
    y: height - 194,
    size: 8.5,
    font: fontRegular,
    color: goodweRed,
  });

  // 4 Feature Boxes
  const features = [
    {
      title: 'ALL-IN-ONE MODULAR DESIGN',
      items: [
        '- Integrated inverter & battery stacking system',
        '- Blind-plug stacking connection without exposed cables',
        '- Scalable storage from 5.12kWh up to 108kWh',
      ],
    },
    {
      title: 'POWERFUL BACKUP & UPS FUNCTION',
      items: [
        '- Ultra-fast UPS-level switching (< 10 ms)',
        '- Built-in 63A bypass for whole-house backup',
        '- Battery Black Start function during total blackout',
      ],
    },
    {
      title: 'SMART ENERGY MANAGEMENT',
      items: [
        '- 4 Working Modes: Self-use, Backup, TOU & Peak Shaving',
        '- Compatible with smart meters (GMK110 / GM330)',
        '- SEMS+ App / Web 24/7 intelligent cloud monitoring',
      ],
    },
    {
      title: 'MAXIMUM SAFETY & PROTECTION',
      items: [
        '- AFCI 2.0 integrated arc fault circuit interruption',
        '- Type II DC & AC surge protection devices (SPD)',
        '- IP66 weatherproofing rating & C5 anti-corrosion',
      ],
    },
  ];

  const boxY = height - 215;
  const boxWidth = (width - 90) / 2;
  const boxHeight = 100;

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
      size: 9.5,
      font: fontBold,
      color: darkNavy,
    });

    feat.items.forEach((item, itemIdx) => {
      page1.drawText(item, {
        x: xPos + 12,
        y: yPos + boxHeight - 38 - itemIdx * 18,
        size: 8.5,
        font: fontRegular,
        color: textDark,
      });
    });
  });

  // Operating Modes Section
  const modesY = height - 445;
  page1.drawRectangle({
    x: 40,
    y: modesY - 145,
    width: width - 80,
    height: 145,
    color: bgLight,
    borderColor: borderGray,
    borderWidth: 1,
  });

  page1.drawText('SYSTEM WORKING MODES & INTELLIGENT DISPATCH', {
    x: 55,
    y: modesY - 20,
    size: 10.5,
    font: fontBold,
    color: darkNavy,
  });

  page1.drawText('1. Self-Consumption Mode: Prioritises powering household loads directly from PV; excess charges battery; surplus exports to grid.', {
    x: 55,
    y: modesY - 42,
    size: 8.5,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('2. Backup Mode: Maintains battery at configured backup SOC (e.g. 60-100%). Seamlessly powers critical loads during grid outage.', {
    x: 55,
    y: modesY - 62,
    size: 8.5,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('3. Time of Use (TOU) Mode: Charges battery from grid during off-peak valley tariffs; discharges during peak rates to maximise savings.', {
    x: 55,
    y: modesY - 82,
    size: 8.5,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('4. Peak Shaving Mode: Reduces maximum grid demand by discharging battery when household load exceeds specified quota limit.', {
    x: 55,
    y: modesY - 102,
    size: 8.5,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('Compliance: AS/NZS 4777.2:2020 (Australia A, B, C, NZ Grid Codes) | IEC 62109-1/-2 | IEC 62619 | UN38.3', {
    x: 55,
    y: modesY - 128,
    size: 8.5,
    font: fontBold,
    color: emeraldGreen,
  });

  // Footer Page 1
  page1.drawText('Oneroof Solar - Authorized GoodWe Partner | GoodWe ESA 3-10kW Solutions Manual | Page 1 of 3', {
    x: 40,
    y: 30,
    size: 8,
    font: fontRegular,
    color: textGray,
  });

  // ==================== PAGE 2: INVERTER TECHNICAL SPECIFICATIONS ====================
  const page2 = pdfDoc.addPage([595.28, 841.89]);

  page2.drawRectangle({
    x: 0,
    y: height - 45,
    width: width,
    height: 45,
    color: darkNavy,
  });

  page2.drawText('GOODWE ESA HYBRID INVERTER TECHNICAL SPECIFICATIONS (EHA SERIES)', {
    x: 40,
    y: height - 28,
    size: 10,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  const inverterSpecs = [
    { section: 'Battery Side' },
    { name: 'Battery Type', v1: 'LiFePO4', v2: 'LiFePO4', v3: 'LiFePO4', v4: 'LiFePO4', v5: 'LiFePO4' },
    { name: 'Nominal Battery Voltage', v1: '380 V', v2: '380 V', v3: '380 V', v4: '380 V', v5: '380 V' },
    { name: 'Battery Voltage Range', v1: '350 - 550 V', v2: '350 - 550 V', v3: '350 - 550 V', v4: '350 - 550 V', v5: '350 - 550 V' },
    { name: 'Max. Continuous Charge Current', v1: '11.9 A', v2: '19.8 A', v3: '23.7 A', v4: '31.6 A', v5: '35.6 A' },
    { name: 'Max. Continuous Discharge Current', v1: '8.7 A', v2: '14.5 A', v3: '17.4 A', v4: '23.2 A', v5: '29.0 A' },
    { name: 'Max. Charging Power', v1: '4.5 kW', v2: '7.5 kW', v3: '9.0 kW', v4: '12.0 kW', v5: '13.5 kW' },
    { name: 'Max. Discharging Power', v1: '3.3 kW', v2: '5.5 kW', v3: '6.6 kW', v4: '8.8 kW', v5: '11.0 kW' },

    { section: 'PV String Input (DC)' },
    { name: 'Max. Recommended PV Power', v1: '6.0 kW', v2: '10.0 kW', v3: '12.0 kW', v4: '16.0 kW', v5: '20.0 kW' },
    { name: 'Max. Input Voltage', v1: '600 V', v2: '600 V', v3: '600 V', v4: '600 V', v5: '600 V' },
    { name: 'MPPT Operating Voltage Range', v1: '40 - 560 V', v2: '40 - 560 V', v3: '40 - 560 V', v4: '40 - 560 V', v5: '40 - 560 V' },
    { name: 'Number of MPPTs / Strings per MPPT', v1: '2 (1/1)', v2: '2 (1/1)', v3: '2 (1/1)', v4: '4 (1/1/1/1)', v5: '4 (1/1/1/1)' },
    { name: 'Max. MPPT Current / Short Circuit', v1: '20A / 26A', v2: '20A / 26A', v3: '20A / 26A', v4: '20A / 26A', v5: '20A / 26A' },

    { section: 'AC Output (On-Grid & Back-Up)' },
    { name: 'Nominal Power to Grid', v1: '3.0 kW', v2: '5.0 kW', v3: '6.0 kW', v4: '8.0 kW', v5: '9.999 / 10 kW' },
    { name: 'Nominal AC Voltage / Frequency', v1: '230V / 50Hz', v2: '230V / 50Hz', v3: '230V / 50Hz', v4: '230V / 50Hz', v5: '230V / 50Hz' },
    { name: 'Max. Output Apparent Power (Back-up)', v1: '3.0 kVA', v2: '5.0 kVA', v3: '6.0 kVA', v4: '8.0 kVA', v5: '10.0 kVA' },
    { name: 'Peak Back-up Output Power (10s)', v1: '6.0 kVA', v2: '10.0 kVA', v3: '12.0 kVA', v4: '16.0 kVA', v5: '20.0 kVA' },
    { name: 'Max. Bypass Passthrough Power', v1: '6.0 kVA', v2: '10.0 kVA', v3: '12.0 kVA', v4: '14.5 kVA', v5: '14.5 kVA' },
    { name: 'Automatic Switching Time', v1: '< 10 ms', v2: '< 10 ms', v3: '< 10 ms', v4: '< 10 ms', v5: '< 10 ms' },

    { section: 'Efficiency & Protection' },
    { name: 'Max. Battery to AC Efficiency', v1: '98.0%', v2: '98.0%', v3: '98.0%', v4: '97.8%', v5: '97.8%' },
    { name: 'Max. PV to AC Efficiency', v1: '97.6%', v2: '97.6%', v3: '97.6%', v4: '97.5%', v5: '97.5%' },
    { name: 'AFCI 2.0 & Anti-Islanding Protection', v1: 'Integrated', v2: 'Integrated', v3: 'Integrated', v4: 'Integrated', v5: 'Integrated' },
    { name: 'DC & AC Surge Protection', v1: 'Type II / Type II', v2: 'Type II / Type II', v3: 'Type II / Type II', v4: 'Type II / Type II', v5: 'Type II / Type II' },

    { section: 'General Data' },
    { name: 'Dimensions (W * H * D mm)', v1: '800*300*270', v2: '800*300*270', v3: '800*300*270', v4: '800*300*270', v5: '800*300*270' },
    { name: 'Weight / Cooling', v1: '24kg / Natural', v2: '24kg / Natural', v3: '24kg / Natural', v4: '26kg / Natural', v5: '26kg / Natural' },
    { name: 'Ingress Protection / Operating Temp', v1: 'IP66 / -35~60 C', v2: 'IP66 / -35~60 C', v3: 'IP66 / -35~60 C', v4: 'IP66 / -35~60 C', v5: 'IP66 / -35~60 C' },
    { name: 'Communication Interfaces', v1: 'WiFi / LAN / BLE', v2: 'WiFi / LAN / BLE', v3: 'WiFi / LAN / BLE', v4: 'WiFi / LAN / BLE', v5: 'WiFi / LAN / BLE' },
  ];

  let tY = height - 55;
  const colW1 = 175;
  const colWVal = 68;
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
  page2.drawText('GW3K-EHA', { x: 40 + colW1 + 5, y: tY - 11, size: 7.5, font: fontBold, color: darkNavy });
  page2.drawText('GW5K-EHA', { x: 40 + colW1 + colWVal * 1 + 5, y: tY - 11, size: 7.5, font: fontBold, color: darkNavy });
  page2.drawText('GW6K-EHA', { x: 40 + colW1 + colWVal * 2 + 5, y: tY - 11, size: 7.5, font: fontBold, color: darkNavy });
  page2.drawText('GW8K-EHA', { x: 40 + colW1 + colWVal * 3 + 5, y: tY - 11, size: 7.5, font: fontBold, color: darkNavy });
  page2.drawText('GW10K-EHA', { x: 40 + colW1 + colWVal * 4 + 5, y: tY - 11, size: 7.5, font: fontBold, color: darkNavy });

  tY -= rowH;

  inverterSpecs.forEach((row) => {
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
      page2.drawText(row.name || '', { x: 45, y: tY - 11, size: 7, font: fontRegular, color: textDark });
      page2.drawText(row.v1 || '', { x: 40 + colW1 + 5, y: tY - 11, size: 7, font: fontBold, color: textDark });
      page2.drawText(row.v2 || '', { x: 40 + colW1 + colWVal * 1 + 5, y: tY - 11, size: 7, font: fontBold, color: textDark });
      page2.drawText(row.v3 || '', { x: 40 + colW1 + colWVal * 2 + 5, y: tY - 11, size: 7, font: fontBold, color: textDark });
      page2.drawText(row.v4 || '', { x: 40 + colW1 + colWVal * 3 + 5, y: tY - 11, size: 7, font: fontBold, color: textDark });
      page2.drawText(row.v5 || '', { x: 40 + colW1 + colWVal * 4 + 5, y: tY - 11, size: 7, font: fontBold, color: textDark });
    }
    tY -= rowH;
  });

  page2.drawText('Oneroof Solar - Authorized GoodWe Partner | GoodWe ESA 3-10kW Solutions Manual | Page 2 of 3', {
    x: 40,
    y: 25,
    size: 8,
    font: fontRegular,
    color: textGray,
  });

  // ==================== PAGE 3: BATTERY SPECIFICATIONS & INSTALLATION ====================
  const page3 = pdfDoc.addPage([595.28, 841.89]);

  page3.drawRectangle({
    x: 0,
    y: height - 45,
    width: width,
    height: 45,
    color: darkNavy,
  });

  page3.drawText('GOODWE ESA MODULAR BATTERY TECHNICAL DATA & WIRING SCHEMATICS', {
    x: 40,
    y: height - 28,
    size: 10,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  const batterySpecs = [
    { section: 'Modular Battery Specifications' },
    { name: 'Model Name', v1: 'GW5.1-BAT-D-G20/G21', v2: 'GW8.3-BAT-D-G20/G21', v3: 'GW6.0-BAT-D-G20', v4: 'GW9.0-BAT-D-G20' },
    { name: 'Cell Chemistry', v1: 'LFP (LiFePO4)', v2: 'LFP (LiFePO4)', v3: 'LFP (LiFePO4)', v4: 'LFP (LiFePO4)' },
    { name: 'Rated / Usable Energy', v1: '5.12 kWh / 5.0 kWh', v2: '8.32 kWh / 8.0 kWh', v3: '6.0 kWh / 5.9 kWh', v4: '9.0 kWh / 8.85 kWh' },
    { name: 'Operating Voltage Range (Single Phase)', v1: '350 - 550 V', v2: '350 - 550 V', v3: '350 - 550 V', v4: '350 - 550 V' },
    { name: 'Operating Voltage Range (Three Phase)', v1: '700 - 950 V', v2: '700 - 950 V', v3: '700 - 950 V', v4: '700 - 950 V' },
    { name: 'Max. Input / Output Current (System)', v1: '12 A / 13.2 A', v2: '19 A / 21 A', v3: '7.1 A / 7.9 A', v4: '10.7 A / 11.8 A' },
    { name: 'Max. Input / Output Power (System)', v1: '5.0 kW / 5.0 kW', v2: '8.0 kW / 8.0 kW', v3: '3.0 kW / 3.0 kW', v4: '4.5 kW / 4.5 kW' },
    { name: 'Peak Output Power (10s)', v1: '7.5 kW', v2: '12.0 kW', v3: '4.5 kW', v4: '6.75 kW' },
    { name: 'Weight (kg)', v1: '57.5 kg (+/-1kg)', v2: '79.0 kg (+/-1kg)', v3: '61.0 kg (+/-1kg)', v4: '77.0 kg (+/-1kg)' },
    { name: 'Dimensions (W * H * D mm)', v1: '800 * 326 * 270', v2: '800 * 326 * 270', v3: '800 * 326 * 270', v4: '800 * 326 * 270' },
    { name: 'Scalability / Stacking Limit', v1: 'Up to 6 units / column', v2: 'Up to 6 units / column', v3: 'Up to 12 units parallel', v4: 'Up to 12 units parallel' },
    { name: 'Cycle Life', v1: '>= 6,000 cycles (90% DoD)', v2: '>= 6,000 cycles (90% DoD)', v3: '>= 6,000 cycles (90% DoD)', v4: '>= 6,000 cycles (90% DoD)' },
    { name: 'Operating Temp (Discharging)', v1: '-20C to +55C', v2: '-20C to +55C', v3: '-20C to +55C', v4: '-20C to +55C' },
    { name: 'Ingress Protection / Mounting', v1: 'IP66 / Floor & Wall', v2: 'IP66 / Floor & Wall', v3: 'IP66 / Floor & Wall', v4: 'IP66 / Floor & Wall' },
  ];

  let bY = height - 55;
  const bColW1 = 155;
  const bColWVal = 90;
  const bRowH = 16;

  // Header row
  page3.drawRectangle({
    x: 40,
    y: bY - bRowH,
    width: width - 80,
    height: bRowH,
    color: tableHeaderBg,
    borderColor: borderGray,
    borderWidth: 1,
  });

  page3.drawText('BATTERY PARAMETER', { x: 45, y: bY - 11.5, size: 7.5, font: fontBold, color: darkNavy });
  page3.drawText('GW5.1-BAT', { x: 40 + bColW1 + 5, y: bY - 11.5, size: 7.5, font: fontBold, color: darkNavy });
  page3.drawText('GW8.3-BAT', { x: 40 + bColW1 + bColWVal * 1 + 5, y: bY - 11.5, size: 7.5, font: fontBold, color: darkNavy });
  page3.drawText('GW6.0-BAT', { x: 40 + bColW1 + bColWVal * 2 + 5, y: bY - 11.5, size: 7.5, font: fontBold, color: darkNavy });
  page3.drawText('GW9.0-BAT', { x: 40 + bColW1 + bColWVal * 3 + 5, y: bY - 11.5, size: 7.5, font: fontBold, color: darkNavy });

  bY -= bRowH;

  batterySpecs.forEach((row) => {
    if (row.section) {
      page3.drawRectangle({
        x: 40,
        y: bY - bRowH,
        width: width - 80,
        height: bRowH,
        color: rgb(0.92, 0.95, 0.98),
      });
      page3.drawText(row.section, { x: 45, y: bY - 11.5, size: 8, font: fontBold, color: goodweRed });
    } else {
      page3.drawRectangle({
        x: 40,
        y: bY - bRowH,
        width: width - 80,
        height: bRowH,
        color: rgb(1, 1, 1),
        borderColor: borderGray,
        borderWidth: 0.5,
      });
      page3.drawText(row.name || '', { x: 45, y: bY - 11.5, size: 7, font: fontRegular, color: textDark });
      page3.drawText(row.v1 || '', { x: 40 + bColW1 + 5, y: bY - 11.5, size: 6.8, font: fontBold, color: textDark });
      page3.drawText(row.v2 || '', { x: 40 + bColW1 + bColWVal * 1 + 5, y: bY - 11.5, size: 6.8, font: fontBold, color: textDark });
      page3.drawText(row.v3 || '', { x: 40 + bColW1 + bColWVal * 2 + 5, y: bY - 11.5, size: 6.8, font: fontBold, color: textDark });
      page3.drawText(row.v4 || '', { x: 40 + bColW1 + bColWVal * 3 + 5, y: bY - 11.5, size: 6.8, font: fontBold, color: textDark });
    }
    bY -= bRowH;
  });

  // Installation & Wiring Highlights Box
  const installBoxY = bY - 15;
  page3.drawRectangle({
    x: 40,
    y: installBoxY - 200,
    width: width - 80,
    height: 200,
    color: bgLight,
    borderColor: borderGray,
    borderWidth: 1,
  });

  page3.drawText('INSTALLATION & AUSTRALIAN GRID CODE REQUIREMENTS (AS/NZS 4777.2:2020)', {
    x: 55,
    y: installBoxY - 22,
    size: 9.5,
    font: fontBold,
    color: darkNavy,
  });

  page3.drawText('- Neutral Integrity in Australia/NZ: Neutral lines of Grid side & Off-grid side must be connected in switchboard.', {
    x: 55,
    y: installBoxY - 45,
    size: 8,
    font: fontRegular,
    color: textDark,
  });

  page3.drawText('- Manual Transfer Switch: 1-pole manual transfer switch included in Australia shipments for single-unit backup isolation.', {
    x: 55,
    y: installBoxY - 65,
    size: 8,
    font: fontRegular,
    color: textDark,
  });

  page3.drawText('- Smart Meter & CT: GMK110 (Single Phase CT ratio 120A:40mA) or GM330 (3-Phase / Multi-unit nA:5A) supported.', {
    x: 55,
    y: installBoxY - 85,
    size: 8,
    font: fontRegular,
    color: textDark,
  });

  page3.drawText('- Communication & Dongles: WiFi/LAN Kit-20 and 4G Kit-CN-G20 with Bluetooth for instantaneous SolarGo commissioning.', {
    x: 55,
    y: installBoxY - 105,
    size: 8,
    font: fontRegular,
    color: textDark,
  });

  page3.drawText('- Australian Volt-Watt & Volt-Var Setpoints: Preconfigured Australia A (Default 207V-258V), B (205V-255V) and C regions.', {
    x: 55,
    y: installBoxY - 125,
    size: 8,
    font: fontRegular,
    color: textDark,
  });

  page3.drawText('- Emergency Black Start: Hold battery multifunction button for 2s to activate off-grid inverter discharge without PV or grid.', {
    x: 55,
    y: installBoxY - 145,
    size: 8,
    font: fontRegular,
    color: textDark,
  });

  page3.drawText('For official Darwin & NT installation, design, and warranty support, contact Oneroof Solar (0483 986 444).', {
    x: 55,
    y: installBoxY - 175,
    size: 8.5,
    font: fontBold,
    color: goodweRed,
  });

  // Footer Page 3
  page3.drawText('Oneroof Solar - Authorized GoodWe Partner | GoodWe ESA 3-10kW Solutions Manual | Page 3 of 3', {
    x: 40,
    y: 25,
    size: 8,
    font: fontRegular,
    color: textGray,
  });

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(process.cwd(), 'public', 'downloads', 'GoodWe ESA 3-10kW Residential All-In-One Energy Storage System.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log('PDF generated successfully at:', filePath);
}

generateGoodWeESAPDF().catch(console.error);
