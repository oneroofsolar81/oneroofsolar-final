import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const H = "/assets/images/home";
const P = "/assets/images/hosted/products";
const X = "/assets/images/hosted";

const exact = {
  // Brand / product third-party hosts
  "https://solarjuice.com.au/wp-content/uploads/2026/05/20873-600x529.png": `${P}/ja-solar.webp`,
  "https://solarjuice.com.au/wp-content/uploads/2026/05/Powerwall-and-Backup-Gateway-2-copy-1280x720-Edited-Edited-600x618.png": `${H}/home-battery-nightcliff.webp`,
  "https://solarjuice.com.au/wp-content/uploads/2026/05/ECS.1-406.png": `${P}/alpha-ess.webp`,
  "https://www.goodwe.com.au/Public/Uploads/uploadfile4/images/20251014/ESA3-10KAll-in-oneSystem-1-495.png": `${P}/alpha-ess.webp`,
  "https://www.solarquotes.com.au/wp-content/uploads/2023/10/byd-fronius-backboard.jpg": `${P}/fronius.webp`,
  "https://aussiesolartech.com.au/wp-content/uploads/2025/11/sigenergy-ev-charger.png": `${P}/ev-charger.webp`,
  "https://images.squarespace-cdn.com/content/v1/66f20e04857fd124e6454b08/6c7f45e9-1a80-45fe-844a-76f755cabe39/Myenergi+Zappi+smart+EV+charger+7kW+Single+phase+-+white+with+type+2%2C+6.5m+cable.png?format=1500w": `${P}/ev-charger.webp`,
  "https://orangesolarsystems.co.uk/wp-content/uploads/2024/11/Tesla-Powerwall-2-installation-Haslemere-1-1024x768.jpg": `${H}/home-battery-nightcliff.webp`,
  "https://official-oversears-file.sungrowpower.com/news-images/b8828e46-8516-42e9-be65-a0216ecb2d82.png": `${P}/inverter-hero.webp`,
  "https://solarshop.pk/wp-content/uploads/2021/01/goodwe-25KW-on-grid-smt.png": `${P}/inverter-hero.webp`,
  "https://solarsme.com/wp-content/uploads/2022/04/4-1.webp": `${H}/home-hero-bayview.webp`,
  "https://esaenergy.com.pk/wp-content/uploads/2025/05/Why-Solar-Panels-Are-a-Smart-Investment-for-Small-Businesses-1024x683.jpg": `${X}/about-team.webp`,
  "https://igrowattinverter.com/wp-content/uploads/2024/05/What-is-a-micro-inverter-and-how-does-it-work.webp": `${P}/inverter-hero.webp`,
  "https://www.sunrayspower.com.au/wp-content/uploads/2021/12/New-Blog-2.jpg": `${H}/home-hero-bayview.webp`,
  "https://www.hachettebookgroup.com/wp-content/uploads/2023/02/WEB-121_cHesh_InstallYourOwnSolarPanels.jpg": `${H}/home-about-stuart-park.webp`,
  "https://oneroofsolar.com.au/wp-content/uploads/2026/03/dji_fly_20230817_185322_707_1692349964125_photo-scaled.jpg": `${H}/home-premium-aerial.webp`,
  "https://5.imimg.com/data5/SELLER/Default/2025/10/554370004/FM/TJ/DL/23068426/grid-tied-solar-system.jpeg": `${H}/home-hero-bayview.webp`,
  "https://a-us.storyblok.com/f/1006159/810x471/2ddba951c6/string-inverters.jpg/m/1000x0/filters:quality(60):format(webp)": `${P}/inverter-hero.webp`,
  "https://a-us.storyblok.com/f/1006159/810x471/62865d0b80/des-1116-csm.jpg/m/1000x0/filters:quality(60):format(webp)": `${X}/aerial.webp`,
  "https://www.digi.com/getattachment/ece175a2-6f34-43e4-8f54-1f9b07df9b06/gettyimages-1387159408-1280x720.jpg?lang=en-us&width=1280&height=720&ext=.jpg": `${P}/ev-charger.webp`,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYjFUKNKyOMySm6lkKfTkODY4oKkYzGvdgw&s": `${P}/ev-charger.webp`,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExfMGgoZJ0SC5uObr6P1AIzCA5Qme1j8pLA&s": `${H}/home-about-stuart-park.webp`,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgRHafd0ihpxUFttIlyiGDhBI3sNiTixrMLg&s": `${H}/home-packages-house.webp`,
};

const unsplashMap = [
  [/https:\/\/(?:images|plus)\.unsplash\.com\/[^"'`\s)]*1508514177221-188b1cf16e9d[^"'`\s)]*/g, `${H}/home-hero-bayview.webp`],
  [/https:\/\/(?:images|plus)\.unsplash\.com\/[^"'`\s)]*1613665813446-82a78c468a1d[^"'`\s)]*/g, `${H}/home-premium-aerial.webp`],
  [/https:\/\/(?:images|plus)\.unsplash\.com\/[^"'`\s)]*1509391366360-2e959784a276[^"'`\s)]*/g, `${H}/home-project-bayview.webp`],
  [/https:\/\/(?:images|plus)\.unsplash\.com\/[^"'`\s)]*1497435334941-8c899ee9e8e9[^"'`\s)]*/g, `${X}/aerial.webp`],
  [/https:\/\/(?:images|plus)\.unsplash\.com\/[^"'`\s)]*1593941707882-a5bba14938c7[^"'`\s)]*/g, `${H}/home-battery-nightcliff.webp`],
  [/https:\/\/(?:images|plus)\.unsplash\.com\/[^"'`\s)]*1660601931649-14eb02330f8d[^"'`\s)]*/g, `${P}/sigen-battery.webp`],
  [/https:\/\/(?:images|plus)\.unsplash\.com\/[^"'`\s)]*1559302504-64aae6ca6b6f[^"'`\s)]*/g, `${H}/home-packages-house.webp`],
  [/https:\/\/(?:images|plus)\.unsplash\.com\/[^"'`\s)]*1620027133796-039cfa6b009f[^"'`\s)]*/g, `${P}/ja-solar.webp`],
  [/https:\/\/(?:images|plus)\.unsplash\.com\/[^"'`\s)]*1682145358254-56e9ab8049ca[^"'`\s)]*/g, `${H}/home-about-stuart-park.webp`],
  [/https:\/\/(?:images|plus)\.unsplash\.com\/[^"'`\s)]*1534528741775-53994a69daeb[^"'`\s)]*/g, `${X}/about-team.webp`],
  [/https:\/\/(?:images|plus)\.unsplash\.com\/[^"'`\s)]*1507003211169-0a1dd7228f2d[^"'`\s)]*/g, `${X}/about-team.webp`],
  [/https:\/\/(?:images|plus)\.unsplash\.com\/[^"'`\s)]*1494790108377-be9c29b29330[^"'`\s)]*/g, `${X}/about-team.webp`],
];

function walk(d, files = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory() && !["node_modules", "dist", ".git"].includes(e.name)) walk(p, files);
    else if (e.isFile() && /\.(tsx?|jsx?)$/.test(e.name)) files.push(p);
  }
  return files;
}

const files = walk(path.join(ROOT, "src"));
let total = 0;
for (const file of files) {
  let text = fs.readFileSync(file, "utf8");
  let n = 0;
  for (const [from, to] of Object.entries(exact)) {
    if (!text.includes(from)) continue;
    const c = text.split(from).length - 1;
    text = text.split(from).join(to);
    n += c;
  }
  for (const [re, to] of unsplashMap) {
    const matches = text.match(re);
    if (!matches) continue;
    text = text.replace(re, to);
    n += matches.length;
  }
  if (n) {
    fs.writeFileSync(file, text);
    total += n;
    console.log(`${path.relative(ROOT, file)}: ${n}`);
  }
}
console.log("total", total);
