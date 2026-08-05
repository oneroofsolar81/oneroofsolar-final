export type MenuType = 'direct' | 'compact-dropdown' | 'mega-menu';

export interface NavItem {
  label: string;
  href?: string;
  type?: MenuType;
  overviewLabel?: string;
  description?: string;
  iconName?: string;
  children?: NavItem[];
}

/**
 * Filter out items that do not have a valid href AND do not have valid children.
 * Strips empty children arrays so parent items without valid children render as standard links.
 */
export function filterNavItems(items: NavItem[]): NavItem[] {
  return items
    .map((item) => {
      const validChildren = item.children ? filterNavItems(item.children) : [];
      const hasValidChildren = validChildren.length > 0;

      // Check if href is a non-empty valid string
      const isValidHref = Boolean(
        item.href &&
        typeof item.href === "string" &&
        item.href.trim() !== "" &&
        item.href.trim() !== "#" &&
        !item.href.includes("ADD_THE_")
      );

      // If neither valid href nor valid children, filter out this item
      if (!isValidHref && !hasValidChildren) {
        return null;
      }

      // Determine explicit menu type
      let menuType: MenuType = item.type || (hasValidChildren ? "compact-dropdown" : "direct");
      if (!hasValidChildren && menuType !== "direct") {
        menuType = "direct";
      }

      const newItem: NavItem = {
        label: item.label,
        type: menuType,
        ...(item.description ? { description: item.description } : {}),
        ...(item.iconName ? { iconName: item.iconName } : {}),
        ...(item.overviewLabel ? { overviewLabel: item.overviewLabel } : {}),
        ...(isValidHref ? { href: item.href } : {}),
        ...(hasValidChildren ? { children: validChildren } : {}),
      };

      return newItem;
    })
    .filter((item): item is NavItem => item !== null);
}

export const servicesMenu: NavItem[] = [
  {
    label: "Solar Panels",
    href: "/solar-panels-darwin",
    overviewLabel: "Solar Panels Overview",
    iconName: "Sun",
    children: [
      {
        label: "Solar Panel Installation",
        href: "/services/solar-panel-installation",
      },
      {
        label: "Solar Panel Cleaning & Maintenance",
        href: "/services/solar-panel-maintenance-darwin",
      },
      {
        label: "Solar Panel Repair",
        href: "/services/solar-panel-repair-darwin",
      },
    ],
  },
  {
    label: "Solar Inverters",
    href: "/services/solar-inverters",
    overviewLabel: "Solar Inverters Overview",
    iconName: "Cpu",
    children: [
      {
        label: "Solar Inverter Installation",
        href: "/services/solar-inverters/installation",
      },
      {
        label: "Solar Inverter Repair",
        href: "/services/solar-inverters/repair",
      },
    ],
  },
  {
    label: "Solar Batteries",
    href: "/services/battery-storage",
    overviewLabel: "Solar Batteries Overview",
    iconName: "Battery",
    children: [
      {
        label: "Solar Battery Installation",
        href: "/services/solar-battery-installation",
      },
    ],
  },
];

export const mainNavConfig: NavItem[] = [
  {
    label: "Home",
    href: "/",
    type: "direct",
  },
  {
    label: "Solar System",
    type: "compact-dropdown",
    children: [
      {
        label: "Residential Solar Systems",
        href: "/solar-systems/residential-solar-system",
        description: "Solar solutions designed for homes.",
        iconName: "Home",
      },
      {
        label: "Commercial Solar Systems",
        href: "/solar-systems/commercial-solar-system",
        description: "Systems for businesses and commercial sites.",
        iconName: "Building2",
      },
      {
        label: "Off-Grid Solar Systems",
        href: "/solar-systems/off-grid-solar-system",
        description: "Independent solar and battery solutions.",
        iconName: "Zap",
      },
    ],
  },
  {
    label: "Products",
    type: "mega-menu",
    children: [
      {
        label: "EV Chargers",
        href: "/services/ev-chargers",
        description: "Smart EV charging solutions for home & business.",
        iconName: "Zap",
      },
      {
        label: "Solar Inverters",
        href: "/products/solar-inverters",
        description: "High-efficiency string & hybrid inverters.",
        iconName: "Cpu",
        children: [
          {
            label: "Sungrow Inverters",
            href: "/products/solar-inverters/sungrow-inverters",
          },
        ],
      },
      {
        label: "Battery Storage Solutions",
        href: "/services/battery-storage",
        description: "Store excess solar energy for day & night.",
        iconName: "BatteryCharging",
      },
      {
        label: "Solar Panel Brands",
        href: "/product/solar-panels-brands",
        children: [
          { label: "AIKO", href: "/solar-panels-brands/aiko/" },
          { label: "JA Solar", href: "/product/solar-panels-brands/ja-solar-panels-nt" },
          { label: "Jinko Solar", href: "/solar-panels-brands/jinko/" },
          { label: "LONGi Solar", href: "/solar-panels-brands/longi/" },
          { label: "REC Solar", href: "/solar-panels-brands/rec/" },
        ],
      },
    ],
  },
  {
    label: "Services",
    type: "mega-menu",
    children: servicesMenu,
  },
  {
    label: "Locations",
    type: "compact-dropdown",
    children: [
      {
        label: "Darwin & Palmerston",
        href: "/solar-panels-darwin",
        description: "Solar services across Darwin and Palmerston.",
        iconName: "MapPin",
      },
      {
        label: "Alice Springs",
        href: "/solar-alice-springs/",
        description: "Solar services across Alice Springs.",
        iconName: "MapPin",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    type: "direct",
  },
  {
    label: "Projects",
    href: "/projects",
    type: "direct",
  },
  {
    label: "Contact Us",
    href: "/contact",
    type: "direct",
  },
];

