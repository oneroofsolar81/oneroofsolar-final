import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Home,
  Building2,
  Zap,
  Cpu,
  BatteryCharging,
  Battery,
  Sun,
  MapPin,
  Sparkles,
  ShieldCheck,
  BadgeCheck,
  Wind,
} from "lucide-react";
import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";
import { mainNavConfig, filterNavItems, NavItem } from "../config/navigation";
import { isBlogPath } from "../data/blogPosts";

function formatHref(href?: string): string {
  if (!href) return "";
  try {
    if (href.startsWith("http://") || href.startsWith("https://")) {
      const url = new URL(href);
      return url.pathname;
    }
  } catch (e) {
    // fallback
  }
  return href;
}

// Helper to render icon for navigation items
function renderMenuIcon(name?: string, className = "w-5 h-5") {
  switch (name) {
    case "Home":
      return <Home className={className} />;
    case "Building2":
      return <Building2 className={className} />;
    case "Zap":
      return <Zap className={className} />;
    case "Cpu":
      return <Cpu className={className} />;
    case "BatteryCharging":
      return <BatteryCharging className={className} />;
    case "Battery":
      return <Battery className={className} />;
    case "Sun":
      return <Sun className={className} />;
    case "MapPin":
      return <MapPin className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}

const slideVariants = {
  enter: (direction: "forward" | "backward") => ({
    x: direction === "forward" ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: "forward" | "backward") => ({
    x: direction === "forward" ? "-100%" : "100%",
    opacity: 0,
  }),
};

const ANNOUNCEMENT_ITEMS = [
  { icon: ShieldCheck, text: "NT Licensed Electricians" },
  { icon: Home, text: "Darwin owned and operated" },
  { icon: Sparkles, text: "$0 deposit solar plans" },
  { icon: Wind, text: "Cyclone-rated racking" },
  { icon: BadgeCheck, text: "STC rebates applied upfront" },
  { icon: BatteryCharging, text: "Battery backup for wet season blackouts" },
  { icon: MapPin, text: "Darwin, Palmerston and Alice Springs" },
  { icon: Sun, text: "Zone 1 federal solar rebate" },
  { icon: Phone, text: `Free quotes. Call ${PRIMARY_PHONE}` },
  { icon: BadgeCheck, text: "10 year workmanship warranty" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  // Mobile Drill-Down Navigation Stack
  const [mobileStack, setMobileStack] = useState<NavItem[]>([]);
  const [slideDirection, setSlideDirection] = useState<"forward" | "backward">("forward");

  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [headerHeight, setHeaderHeight] = useState(108);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () => setHeaderHeight(Math.round(el.getBoundingClientRect().height));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Filter navigation items to ensure only valid URLs/children are rendered
  const navItems = useMemo(() => filterNavItems(mainNavConfig), []);
  const categoryItems = useMemo(
    () => navItems.filter((item) => ["Solar System", "Products", "Services", "Locations"].includes(item.label)),
    [navItems]
  );
  const utilityItems = useMemo(
    () => navItems.filter((item) => !["Solar System", "Products", "Services", "Locations"].includes(item.label)),
    [navItems]
  );

  // Close menus on route change
  useEffect(() => {
    setActiveMegaMenu(null);
    setIsOpen(false);
    setMobileStack([]);
  }, [location.pathname]);

  // Handle Escape key to close navigation menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMegaMenu(null);
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle Click Outside desktop navigation
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Hover handlers for Desktop
  const handleMouseEnter = (item: NavItem) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);

    // If item is direct or has no children, close open menus immediately
    if (item.type === "direct" || !item.children || item.children.length === 0) {
      setActiveMegaMenu(null);
      return;
    }

    setActiveMegaMenu(item.label);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 180);
  };

  // Mobile Drill-Down handlers
  const handleMobileNext = (item: NavItem) => {
    setSlideDirection("forward");
    setMobileStack((prev) => [...prev, item]);
  };

  const handleMobileBack = () => {
    setSlideDirection("backward");
    setMobileStack((prev) => prev.slice(0, -1));
  };

  const handleMobileClose = () => {
    setIsOpen(false);
    setMobileStack([]);
  };

  // Current active level in mobile drill-down stack
  const currentMobileItem = mobileStack.length > 0 ? mobileStack[mobileStack.length - 1] : null;
  const currentMobileList = currentMobileItem
    ? currentMobileItem.children || []
    : navItems;

  const backLabel =
    mobileStack.length === 1
      ? "Main Menu"
      : mobileStack.length > 1
      ? mobileStack[mobileStack.length - 2].label
      : "";

  // Active desktop item for rendering menu panel
  const activeDesktopItem = useMemo(() => {
    if (!activeMegaMenu) return null;
    const item = navItems.find((n) => n.label === activeMegaMenu);
    if (!item || item.type === "direct" || !item.children || item.children.length === 0) {
      return null;
    }
    return item;
  }, [activeMegaMenu, navItems]);

  const isDesktopMenuOpen = Boolean(activeDesktopItem);
  const isBackdropActive = isDesktopMenuOpen;

  const renderCategoryItem = (item: NavItem) => {
    const isDirect = item.type === "direct" || !item.children || item.children.length === 0;
    const itemHref = formatHref(item.href);
    const isItemActive = activeMegaMenu === item.label;
    const isActiveLink =
      location.pathname === itemHref ||
      (itemHref === "/blogs" && isBlogPath(location.pathname));

    if (!isDirect) {
      return (
        <button
          key={item.label}
          onMouseEnter={() => handleMouseEnter(item)}
          onClick={() => setActiveMegaMenu(isItemActive ? null : item.label)}
          aria-expanded={isItemActive}
          aria-haspopup="true"
          aria-controls={`desktop-menu-${item.label}`}
          className={`desktop-nav-link nav-link-item inline-flex items-center gap-1.5 py-3 text-[13px] xl:text-[14px] font-semibold tracking-wide whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-[#8cc63f] ${
            isItemActive ? "text-[#8cc63f]" : "text-[#eef4e6] hover:text-[#8cc63f]"
          }`}
        >
          <span>{item.label}</span>
          <ChevronDown className={`h-3.5 w-3.5 shrink-0 transition-transform ${isItemActive ? "rotate-180" : ""}`} />
        </button>
      );
    }

    return (
      <Link
        key={item.label}
        to={itemHref}
        onMouseEnter={() => handleMouseEnter(item)}
        className={`desktop-nav-link nav-link-item inline-flex items-center py-3 text-[13px] xl:text-[14px] font-semibold tracking-wide whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-[#8cc63f] ${
          isActiveLink ? "text-[#8cc63f]" : "text-[#eef4e6] hover:text-[#8cc63f]"
        }`}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <>
      <header
        ref={headerRef}
        onMouseLeave={handleMouseLeave}
        className={`fixed top-0 w-full z-50 ${isDesktopMenuOpen ? "is-menu-open" : ""} ${
          scrolled ? "shadow-[0_10px_30px_rgba(0,0,0,0.28)]" : ""
        }`}
      >
        <div className="header-announcement relative bg-[#8cc63f] text-[#19281D] overflow-hidden">
          <div className="flex items-center min-h-9 sm:min-h-10">
            <div className="relative min-w-0 flex-1 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-[#8cc63f] to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-[#8cc63f] to-transparent z-10" />
              <div className="header-announcement-track">
                {[0, 1].map((copy) => (
                  <div key={copy} className="flex flex-nowrap items-center shrink-0" aria-hidden={copy === 1}>
                    {ANNOUNCEMENT_ITEMS.map((item) => (
                      <span
                        key={`${copy}-${item.text}`}
                        className="inline-flex items-center gap-2 px-5 sm:px-7 text-[12px] sm:text-[13px] font-semibold tracking-wide whitespace-nowrap"
                      >
                        <item.icon className="h-3.5 w-3.5 shrink-0" />
                        {item.text}
                        <span className="ml-5 sm:ml-7 h-1 w-1 rounded-full bg-[#19281D]/35" aria-hidden="true" />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <a
              href={`tel:${PRIMARY_PHONE_RAW}`}
              className="lg:hidden shrink-0 inline-flex items-center gap-1.5 font-extrabold text-[13px] whitespace-nowrap px-3 sm:px-4 border-l border-[#19281D]/20 bg-[#8cc63f] relative z-10"
            >
              <Phone className="h-3.5 w-3.5" />
              {PRIMARY_PHONE}
            </a>
          </div>
        </div>

        <div className="bg-[#0A1118] border-b border-white/10">
          <div className="mx-auto max-w-[1536px] px-4 sm:px-6 xl:px-8">
            <div className="flex items-center justify-between gap-4 py-3">
              <Link to="/" className="shrink-0">
                <img
                  referrerPolicy="no-referrer"
                  src="/assets/images/home/logo-oneroof.png"
                  alt="Oneroof Solar Logo"
                  className="h-[52px] sm:h-[58px] xl:h-[64px] w-auto max-w-[200px] sm:max-w-[230px] xl:max-w-[250px] object-contain object-left"
                  width={250}
                  height={64}
                  fetchPriority="high"
                  loading="eager"
                />
              </Link>

              <nav className="hidden xl:flex items-center justify-center flex-1 min-w-0" aria-label="Company">
                {utilityItems.map((item, index) => {
                  const itemHref = formatHref(item.href);
                  const isActiveLink =
                    location.pathname === itemHref ||
                    (itemHref === "/blogs" && isBlogPath(location.pathname));
                  return (
                    <span key={item.label} className="flex items-center">
                      {index > 0 ? <span className="mx-3 h-3.5 w-px bg-white/20" aria-hidden="true" /> : null}
                      <Link
                        to={itemHref}
                        onMouseEnter={() => handleMouseEnter(item)}
                        className={`text-[13px] font-medium whitespace-nowrap transition-colors ${
                          isActiveLink ? "text-[#8cc63f]" : "text-white/75 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </span>
                  );
                })}
              </nav>

              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <a
                  href={`tel:${PRIMARY_PHONE_RAW}`}
                  className="hidden lg:inline-flex items-center gap-2 text-white hover:text-[#8cc63f] transition-colors"
                >
                  <span className="h-9 w-9 rounded-full bg-[#8cc63f]/15 border border-[#8cc63f]/30 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-[#8cc63f]" />
                  </span>
                  <span className="text-[15px] font-extrabold tracking-tight whitespace-nowrap">{PRIMARY_PHONE}</span>
                </a>
                <Link
                  to="/contact"
                  className="hidden md:inline-flex items-center justify-center rounded-md bg-[#8cc63f] hover:bg-[#9ad24d] text-[#19281D] text-[13px] font-extrabold px-4 xl:px-5 py-2.5 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8cc63f]"
                >
                  Get a Quote
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    if (isOpen) {
                      handleMobileClose();
                    } else {
                      setIsOpen(true);
                    }
                  }}
                  aria-expanded={isOpen}
                  aria-label={isOpen ? "Close menu" : "Open main menu"}
                  className="lg:hidden p-2.5 rounded-md text-white bg-white/10 hover:bg-white/20 transition-colors focus:outline-none"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <nav className="hidden lg:block bg-[#152218] border-y border-[#8cc63f]/25" aria-label="Products and services">
          <div className="mx-auto max-w-[1536px] px-4 sm:px-6 xl:px-8">
            <div className="flex items-center justify-center gap-x-5 xl:gap-x-8">
              {categoryItems.map((item, index) => (
                <span key={item.label} className="flex items-center">
                  {index > 0 ? (
                    <span className="mr-5 xl:mr-8 h-4 w-px bg-[#8cc63f]/35" aria-hidden="true" />
                  ) : null}
                  {renderCategoryItem(item)}
                </span>
              ))}
            </div>
          </div>
        </nav>

        {/* ================================================== */}
        {/* DESKTOP CONTENT-BASED DROPDOWN & MEGA MENU PANELS  */}
        {/* ================================================== */}
        <AnimatePresence>
          {activeDesktopItem && (
            <motion.div
              id={`desktop-menu-${activeDesktopItem.label}`}
              role="region"
              aria-label={`${activeDesktopItem.label} menu`}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              onMouseEnter={() => handleMouseEnter(activeDesktopItem)}
              onMouseLeave={handleMouseLeave}
              className="hidden lg:block absolute left-0 right-0 top-full z-50 pointer-events-auto overflow-y-auto overscroll-contain"
              style={{ maxHeight: `calc(100dvh - ${headerHeight}px)` }}
            >
              <div className="mx-auto max-w-[1536px] px-4 sm:px-6 xl:px-8">
                {/* 1. SOLAR SYSTEM - COMPACT DROPDOWN (460px) */}
                {activeDesktopItem.label === "Solar System" && (
                  <div className="flex justify-center">
                    <div className="w-[460px] bg-[#0A1118]/95 border border-white/10 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7),0_0_32px_rgba(140,198,63,0.08)] p-3 backdrop-blur-xl relative overflow-hidden">
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8cc63f]/50 to-transparent" />
                      <div className="flex flex-col space-y-1">
                        {activeDesktopItem.children?.map((child) => (
                          <Link
                            key={child.label}
                            to={formatHref(child.href)}
                            onClick={() => setActiveMegaMenu(null)}
                            className="group flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-white/5 hover:shadow-[0_0_20px_rgba(140,198,63,0.12)] transition-all duration-150"
                          >
                            <div className="w-10 h-10 rounded-xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8cc63f] group-hover:text-[#19281D] group-hover:shadow-[0_0_16px_rgba(140,198,63,0.45)] transition-all">
                              {renderMenuIcon(child.iconName, "w-5 h-5")}
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                              <div className="flex items-center justify-between">
                                <span className="text-[15px] font-bold text-white group-hover:text-[#8cc63f] transition-colors">
                                  {child.label}
                                </span>
                                <ArrowRight className="w-4 h-4 text-slate-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#8cc63f] transition-all" />
                              </div>
                              {child.description && (
                                <p className="text-[13px] text-slate-400 line-clamp-1 mt-0.5 font-normal">
                                  {child.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. LOCATIONS - COMPACT DROPDOWN (380px) */}
                {activeDesktopItem.label === "Locations" && (
                  <div className="flex justify-center">
                    <div className="w-[380px] bg-[#0A1118]/95 border border-white/10 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7),0_0_32px_rgba(140,198,63,0.08)] p-3 backdrop-blur-xl relative overflow-hidden">
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8cc63f]/50 to-transparent" />
                      <div className="flex flex-col space-y-1">
                        {activeDesktopItem.children?.map((child) => (
                          <Link
                            key={child.label}
                            to={formatHref(child.href)}
                            onClick={() => setActiveMegaMenu(null)}
                            className="group flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-white/5 hover:shadow-[0_0_20px_rgba(140,198,63,0.12)] transition-all duration-150"
                          >
                            <div className="w-10 h-10 rounded-xl bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8cc63f] group-hover:text-[#19281D] group-hover:shadow-[0_0_16px_rgba(140,198,63,0.45)] transition-all">
                              {renderMenuIcon(child.iconName, "w-5 h-5")}
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                              <div className="flex items-center justify-between">
                                <span className="text-[15px] font-bold text-white group-hover:text-[#8cc63f] transition-colors">
                                  {child.label}
                                </span>
                                <ArrowRight className="w-4 h-4 text-slate-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#8cc63f] transition-all" />
                              </div>
                              {child.description && (
                                <p className="text-[13px] text-slate-400 line-clamp-1 mt-0.5 font-normal">
                                  {child.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. PRODUCTS - BALANCED MEGA MENU */}
                {activeDesktopItem.label === "Products" && (
                  <div className="mx-auto max-w-[1140px] py-2 pb-4">
                    <div className="bg-[#0A1118]/95 border border-white/10 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_40px_rgba(140,198,63,0.1)] p-4 sm:p-5 backdrop-blur-xl relative">
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8cc63f]/50 to-transparent" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 relative z-10">
                        {productCategoryItems.map((prod) => (
                          <div
                            key={prod.label}
                            className="group flex flex-col p-4 rounded-xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 hover:border-[#8cc63f]/40 hover:shadow-[0_0_24px_rgba(140,198,63,0.14)] transition-all duration-200"
                          >
                            <div className="w-10 h-10 rounded-xl bg-[#8cc63f]/10 border border-[#8cc63f]/20 text-[#8cc63f] flex items-center justify-center mb-3 group-hover:bg-[#8cc63f] group-hover:text-[#19281D] transition-all">
                              {renderMenuIcon(prod.iconName, "w-5 h-5")}
                            </div>
                            <Link
                              to={formatHref(prod.href)}
                              onClick={() => setActiveMegaMenu(null)}
                              className="text-[16px] font-bold text-white hover:text-[#8cc63f] transition-colors block"
                            >
                              {prod.label}
                            </Link>
                            {prod.description && (
                              <p className="text-[13px] text-slate-400 mt-1 leading-relaxed">
                                {prod.description}
                              </p>
                            )}

                            {prod.children && prod.children.length > 0 && (
                              <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-col space-y-0.5">
                                {prod.children.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    to={formatHref(sub.href)}
                                    onClick={() => setActiveMegaMenu(null)}
                                    className={`group/sub flex items-center justify-between text-[13px] font-semibold py-1 px-1.5 rounded transition-all ${
                                      location.pathname === formatHref(sub.href)
                                        ? "text-[#8cc63f] bg-[#8cc63f]/10"
                                        : "text-slate-300 hover:text-[#8cc63f] hover:bg-white/5"
                                    }`}
                                  >
                                    <span>{sub.label}</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-[#8cc63f] opacity-60 group-hover/sub:opacity-100 group-hover/sub:translate-x-0.5 transition-all" />
                                  </Link>
                                ))}
                              </div>
                            )}
                            <Link
                              to={formatHref(prod.href)}
                              onClick={() => setActiveMegaMenu(null)}
                              className="flex items-center gap-1.5 text-[13px] font-bold text-[#8cc63f] mt-auto pt-3 hover:text-brand-300 transition-colors"
                            >
                              <span>Explore Solution</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        ))}
                      </div>

                      {productBrandsItem && (
                        <div className="bg-slate-900/40 rounded-xl p-4 sm:p-5 border border-white/10 relative z-10">
                          <div className="flex items-center justify-between mb-3 gap-3">
                            <Link
                              to={formatHref(productBrandsItem.href)}
                              onClick={() => setActiveMegaMenu(null)}
                              className="flex items-center gap-2 text-white hover:text-[#8cc63f] transition-colors"
                            >
                              <Sun className="w-4 h-4 text-[#8cc63f]" />
                              <h4 className="text-[15px] font-bold normal-case">Solar Panel Brands</h4>
                            </Link>
                            <Link
                              to={formatHref(productBrandsItem.href)}
                              onClick={() => setActiveMegaMenu(null)}
                              className="text-[13px] font-semibold text-[#8cc63f] hover:text-brand-300 hover:underline whitespace-nowrap"
                            >
                              View All Brands
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                            {productBrandsItem.children?.map((brand) => (
                              <Link
                                key={brand.label}
                                to={formatHref(brand.href)}
                                onClick={() => setActiveMegaMenu(null)}
                                className="flex items-center justify-center py-2.5 px-3 rounded-lg bg-[#0A1118] border border-white/10 text-[14px] font-bold text-slate-200 hover:text-[#19281D] hover:bg-[#8cc63f] hover:border-[#8cc63f] hover:shadow-[0_0_16px_rgba(140,198,63,0.35)] transition-all text-center"
                              >
                                {brand.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 4. SERVICES - THREE-COLUMN MEGA MENU */}
                {activeDesktopItem.label === "Services" && (
                  <div className="mx-auto max-w-[1280px]">
                    <div className="bg-[#0A1118]/95 border border-white/10 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_40px_rgba(140,198,63,0.1)] p-5 sm:p-6 backdrop-blur-xl relative">
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8cc63f]/50 to-transparent" />
                      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[180px] bg-[#8cc63f]/10 blur-[90px] rounded-full" />
                      <div className="grid grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-6 relative z-10">
                        {servicesCategories.map((category) => {
                          const catHref = formatHref(category.href);
                          return (
                            <div key={category.label} className="flex flex-col space-y-3">
                              {/* Category Heading with Line Icon (Clickable Hub Heading linking to overview) */}
                              <div className="pb-3 border-b border-white/10">
                                {catHref ? (
                                  <Link
                                    to={catHref}
                                    onClick={() => setActiveMegaMenu(null)}
                                    className="flex items-center gap-2.5 group/cat"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 flex items-center justify-center flex-shrink-0 group-hover/cat:bg-[#8cc63f] group-hover/cat:text-[#19281D] group-hover/cat:shadow-[0_0_14px_rgba(140,198,63,0.45)] transition-all">
                                      {renderMenuIcon(category.iconName, "w-4 h-4")}
                                    </div>
                                    <span className="text-[18px] font-bold text-white group-hover/cat:text-[#8cc63f] transition-colors">
                                      {category.label}
                                    </span>
                                  </Link>
                                ) : (
                                  <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-lg bg-[#8cc63f]/10 text-[#8cc63f] border border-[#8cc63f]/20 flex items-center justify-center flex-shrink-0">
                                      {renderMenuIcon(category.iconName, "w-4 h-4")}
                                    </div>
                                    <span className="text-[18px] font-bold text-white">
                                      {category.label}
                                    </span>
                                  </div>
                                )}
                              </div>

                              {/* Category Links List */}
                              <div className="flex flex-col space-y-1 pt-1">
                                {/* Child Links */}
                                {category.children?.map((child) => {
                                  const childHref = formatHref(child.href);
                                  if (!childHref) return null;
                                  return (
                                    <Link
                                      key={child.label}
                                      to={childHref}
                                      onClick={() => setActiveMegaMenu(null)}
                                      className={`text-[15px] font-medium py-1.5 px-3 -mx-3 rounded-lg transition-all ${
                                        location.pathname === childHref
                                          ? "text-[#8cc63f] bg-[#8cc63f]/10 font-semibold shadow-[0_0_16px_rgba(140,198,63,0.12)]"
                                          : "text-slate-300 hover:text-[#8cc63f] hover:bg-white/5"
                                      }`}
                                    >
                                      {child.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* DESKTOP BACKDROP OVERLAY WHEN VALID DROPDOWN/MEGA MENU IS ACTIVE */}
      <AnimatePresence>
        {isBackdropActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:block fixed inset-0 bg-[#0A1118]/50 backdrop-blur-[3px] z-40 pointer-events-auto"
            style={{ top: headerHeight }}
            onClick={() => setActiveMegaMenu(null)}
          />
        )}
      </AnimatePresence>

      {/* ================================================== */}
      {/* APPLE-INSPIRED MOBILE DRILL-DOWN NAVIGATION        */}
      {/* ================================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-[#0A1118] flex flex-col lg:hidden overflow-hidden"
          >
            {/* Mobile Header Bar */}
            <div className="flex-shrink-0 flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0A1118] z-10">
              <Link to="/" onClick={handleMobileClose} className="flex items-center gap-2">
                <img
                  referrerPolicy="no-referrer"
                  src="/assets/images/home/logo-oneroof.png"
                  alt="Oneroof Solar Logo"
                  className="h-[46px] sm:h-[54px] w-auto max-w-none"
                  width={188}
                  height={54}
                />
              </Link>
              <button
                onClick={handleMobileClose}
                aria-label="Close menu"
                className="p-2.5 rounded-full text-slate-300 hover:bg-white/10 hover:text-white transition-colors focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Drill-Down Animated Stack Container */}
            <div className="flex-1 relative overflow-hidden bg-[#0A1118]">
              <AnimatePresence mode="wait" custom={slideDirection}>
                <motion.div
                  key={mobileStack.length > 0 ? mobileStack.map((s) => s.label).join("-") : "root"}
                  custom={slideDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex flex-col overflow-y-auto px-5 py-6 hide-scrollbar"
                >
                  {/* Back Navigation Bar if deep in stack */}
                  {mobileStack.length > 0 && (
                    <div className="flex items-center mb-4 pb-2 border-b border-white/10">
                      <button
                        onClick={handleMobileBack}
                        className="mobile-nav-link nav-link-item flex items-center gap-1.5 text-[#8cc63f] hover:text-brand-300 font-semibold text-[15px] leading-[1.2] tracking-normal py-2 px-1 -ml-1 transition-colors group"
                      >
                        <ChevronLeft className="w-5 h-5 shrink-0 transition-transform group-hover:-translate-x-0.5" />
                        <span>{backLabel}</span>
                      </button>
                    </div>
                  )}

                  {/* Stack Section Heading (Clickable to overview if href exists) */}
                  {currentMobileItem && (
                    <div className="mb-4">
                      {currentMobileItem.href ? (
                        <Link
                          to={formatHref(currentMobileItem.href)}
                          onClick={handleMobileClose}
                          className="text-[24px] font-extrabold text-white tracking-tight hover:text-[#8cc63f] transition-colors inline-block"
                        >
                          {currentMobileItem.label}
                        </Link>
                      ) : (
                        <h2 className="text-[24px] font-extrabold text-white tracking-tight normal-case">
                          {currentMobileItem.label}
                        </h2>
                      )}
                    </div>
                  )}

                  {/* Navigation Item Rows */}
                  <div className="flex flex-col divide-y divide-white/10">
                    {currentMobileList.map((item) => {
                      const hasChildren = item.children && item.children.length > 0;
                      const itemHref = formatHref(item.href);

                      if (hasChildren) {
                        return (
                          <button
                            key={item.label}
                            onClick={() => handleMobileNext(item)}
                            className="mobile-nav-link nav-link-item flex items-center justify-between min-h-[56px] py-3.5 text-left text-[15px] font-semibold leading-[1.2] tracking-normal text-white hover:text-[#8cc63f] transition-colors w-full group"
                          >
                            <span>{item.label}</span>
                            <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-[#8cc63f] transition-colors flex-shrink-0 ml-2" />
                          </button>
                        );
                      }

                      return (
                        <Link
                          key={item.label}
                          to={itemHref}
                          onClick={handleMobileClose}
                          className={`mobile-nav-link nav-link-item flex items-center justify-between min-h-[56px] py-3.5 text-[15px] font-semibold leading-[1.2] tracking-normal transition-colors ${
                            location.pathname === itemHref ||
                            (itemHref === "/blogs" && isBlogPath(location.pathname))
                              ? "text-[#8cc63f]"
                              : "text-slate-200 hover:text-[#8cc63f]"
                          }`}
                        >
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Mobile Call CTA at bottom */}
                  <div className="mt-auto pt-8 pb-4 space-y-3">
                    <Link
                      to="/contact"
                      onClick={handleMobileClose}
                      className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-extrabold text-[16px] transition-all active:scale-[0.98]"
                    >
                      Get a Quote
                    </Link>
                    <a
                      href={`tel:${PRIMARY_PHONE_RAW}`}
                      className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-[#8cc63f] hover:bg-brand-400 text-[#19281D] font-extrabold text-[16px] transition-all active:scale-[0.98] shadow-lg shadow-[#8cc63f]/20"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call Us: {PRIMARY_PHONE}</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Data helpers for Products & Services Mega Menus
const servicesCategories = mainNavConfig.find((n) => n.label === "Services")?.children || [];
const productsChildren = mainNavConfig.find((n) => n.label === "Products")?.children || [];
const productCategoryItems = productsChildren.filter((item) => item.label !== "Solar Panel Brands");
const productBrandsItem = productsChildren.find((item) => item.label === "Solar Panel Brands");
