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
} from "lucide-react";
import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PRIMARY_PHONE, PRIMARY_PHONE_RAW } from "../lib/constants";
import { mainNavConfig, filterNavItems, NavItem } from "../config/navigation";

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

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  // Mobile Drill-Down Navigation Stack
  const [mobileStack, setMobileStack] = useState<NavItem[]>([]);
  const [slideDirection, setSlideDirection] = useState<"forward" | "backward">("forward");

  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter navigation items to ensure only valid URLs/children are rendered
  const navItems = useMemo(() => filterNavItems(mainNavConfig), []);

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
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
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
  const isSolidHeader =
    scrolled ||
    isOpen ||
    isDesktopMenuOpen ||
    (location.pathname !== "/" && !location.pathname.startsWith("/services"));
  const isDarkHeader = isDesktopMenuOpen || isOpen;

  return (
    <>
      <nav
        ref={navRef}
        onMouseLeave={handleMouseLeave}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isDesktopMenuOpen ? "is-menu-open" : ""
        } ${
          isDarkHeader
            ? "bg-[#0A1118]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            : isSolidHeader
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-sm"
            : "bg-transparent py-4 lg:py-6"
        }`}
      >
        <div className="mx-auto max-w-[1536px] px-4 sm:px-6 xl:px-8">
          <div
            className={`relative flex items-center justify-between transition-all duration-300 ${
              isSolidHeader ? "py-3" : "px-2 py-2"
            }`}
          >
            {/* Left Section: Logo & Desktop Navigation with consistent gap across all desktop sizes */}
            <div className="flex items-center gap-6 xl:gap-8 2xl:gap-10">
              {/* Logo */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <Link to="/" className="flex items-center gap-2 relative z-50">
                  <img
                    referrerPolicy="no-referrer"
                    src={
                      isDarkHeader
                        ? "https://i.postimg.cc/vZdTgLm9/oneroof.png"
                        : isSolidHeader
                        ? "https://i.postimg.cc/44Dzn7Hk/oneroof-solar-classic.png"
                        : "https://i.postimg.cc/vZdTgLm9/oneroof.png"
                    }
                    alt="Oneroof Solar Logo"
                    className={`${
                      scrolled ? "h-[42px] sm:h-[50px] md:h-[58px]" : "h-[50px] sm:h-[58px] md:h-[74px]"
                    } w-auto transition-all duration-300`}
                    fetchPriority="high"
                    loading="eager"
                  />
                </Link>
              </div>

              {/* Desktop Navigation Menu */}
              <div className="hidden lg:flex items-center">
                <div
                  className={`flex items-center gap-1 rounded-full p-1 transition-colors ${
                    isDarkHeader
                      ? "bg-white/5 border border-white/10"
                      : isSolidHeader
                      ? "bg-slate-100/80 border border-slate-200/60"
                      : "bg-black/5 backdrop-blur-sm border border-black/5"
                  }`}
                >
                  {navItems.map((item) => {
                    const isDirect = item.type === "direct" || !item.children || item.children.length === 0;
                    const itemHref = formatHref(item.href);
                    const isItemActive = activeMegaMenu === item.label;

                    if (!isDirect) {
                      return (
                        <button
                          key={item.label}
                          onMouseEnter={() => handleMouseEnter(item)}
                          onClick={() => setActiveMegaMenu(isItemActive ? null : item.label)}
                          aria-expanded={isItemActive}
                          aria-haspopup="true"
                          aria-controls={`desktop-menu-${item.label}`}
                          className={`desktop-nav-link nav-link-item text-[15px] font-semibold leading-[1.2] tracking-normal px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                            isItemActive
                              ? "is-active bg-[#8cc63f] text-[#19281D] shadow-[0_0_18px_rgba(140,198,63,0.35)]"
                              : isDarkHeader
                              ? "text-white hover:bg-white/10 hover:text-[#8cc63f]"
                              : isSolidHeader
                              ? "text-slate-800 hover:bg-white/60 hover:text-brand-600"
                              : "text-white hover:bg-white/10 hover:text-brand-300"
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                              isItemActive
                                ? "rotate-180 text-[#19281D]"
                                : isDarkHeader
                                ? "text-white/80"
                                : isSolidHeader
                                ? "text-slate-800"
                                : "text-white/80"
                            }`}
                          />
                        </button>
                      );
                    }

                    return (
                      <Link
                        key={item.label}
                        to={itemHref}
                        onMouseEnter={() => handleMouseEnter(item)}
                        className={`desktop-nav-link nav-link-item text-[15px] font-semibold leading-[1.2] tracking-normal px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                          location.pathname === itemHref
                            ? isDarkHeader
                              ? "bg-[#8cc63f] text-[#19281D] shadow-[0_0_18px_rgba(140,198,63,0.35)]"
                              : "bg-white text-brand-600 shadow-sm"
                            : isDarkHeader
                            ? "text-white hover:bg-white/10 hover:text-[#8cc63f]"
                            : isSolidHeader
                            ? "text-slate-800 hover:bg-white/60 hover:text-brand-600"
                            : "text-white hover:bg-white/10 hover:text-brand-300"
                        }`}
                      >
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Section: Call Action for Desktop */}
            <div className="hidden lg:flex items-center">
              <a href={`tel:${PRIMARY_PHONE_RAW}`} className="flex items-center gap-2.5 group">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform ${isDarkHeader ? "bg-[#8cc63f]/15" : "bg-brand-100"}`}>
                  <div className="w-7 h-7 rounded-full bg-[#8cc63f] flex items-center justify-center">
                    <Phone className={`w-3.5 h-3.5 fill-current ${isDarkHeader ? "text-[#19281D]" : "text-white"}`} />
                  </div>
                </div>
                <div className="flex flex-col -space-y-1">
                  <span
                    className={`text-[13px] font-medium transition-colors ${
                      isDarkHeader ? "text-slate-300" : isSolidHeader ? "text-slate-600" : "text-white/90"
                    }`}
                  >
                    Give Us a Call
                  </span>
                  <span
                    className={`text-[18px] font-extrabold tracking-tight transition-colors ${
                      isDarkHeader ? "text-white" : isSolidHeader ? "text-slate-900" : "text-white"
                    }`}
                  >
                    {PRIMARY_PHONE}
                  </span>
                </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden relative z-50">
              <button
                onClick={() => {
                  if (isOpen) {
                    handleMobileClose();
                  } else {
                    setIsOpen(true);
                  }
                }}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open main menu"}
                className={`focus:outline-none p-2.5 rounded-full transition-colors ${
                  isDarkHeader || (!scrolled && !isOpen && (location.pathname === "/" || location.pathname.startsWith("/services")))
                    ? "text-white bg-white/10 hover:bg-white/20"
                    : "text-slate-800 bg-slate-100 hover:bg-slate-200"
                }`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

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
              className="hidden lg:block absolute left-0 right-0 top-full pt-2 z-50 pointer-events-auto"
            >
              <div className="mx-auto max-w-[1536px] px-4 sm:px-6 xl:px-8">
                {/* 1. SOLAR SYSTEM - COMPACT DROPDOWN (460px) */}
                {activeDesktopItem.label === "Solar System" && (
                  <div className="flex justify-start pl-[280px]">
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
                  <div className="flex justify-start pl-[620px]">
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
                  <div className="mx-auto max-w-[1140px]">
                    <div className="bg-[#0A1118]/95 border border-white/10 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_40px_rgba(140,198,63,0.1)] p-7 sm:p-8 backdrop-blur-xl relative overflow-hidden">
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8cc63f]/50 to-transparent" />
                      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[180px] bg-[#8cc63f]/10 blur-[90px] rounded-full" />
                      {/* Top Product Cards Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-7 relative z-10">
                        {productCategoryItems.map((prod) => (
                          <div
                            key={prod.label}
                            className="group flex flex-col justify-between p-5 rounded-xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 hover:border-[#8cc63f]/40 hover:shadow-[0_0_24px_rgba(140,198,63,0.14)] transition-all duration-200 h-full"
                          >
                            <div>
                              <div className="w-11 h-11 rounded-xl bg-[#8cc63f]/10 border border-[#8cc63f]/20 text-[#8cc63f] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#8cc63f] group-hover:text-[#19281D] group-hover:shadow-[0_0_16px_rgba(140,198,63,0.45)] transition-all">
                                {renderMenuIcon(prod.iconName, "w-5 h-5")}
                              </div>
                              <Link
                                to={formatHref(prod.href)}
                                onClick={() => setActiveMegaMenu(null)}
                                className="text-[17px] font-bold text-white hover:text-[#8cc63f] transition-colors block"
                              >
                                {prod.label}
                              </Link>
                              {prod.description && (
                                <p className="text-[13px] text-slate-400 mt-1.5 leading-relaxed">
                                  {prod.description}
                                </p>
                              )}

                              {prod.children && prod.children.length > 0 && (
                                <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-col space-y-1">
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
                            </div>
                            <div className="flex items-center gap-1.5 text-[13px] font-bold text-[#8cc63f] mt-4 pt-3 border-t border-white/10">
                              <Link
                                to={formatHref(prod.href)}
                                onClick={() => setActiveMegaMenu(null)}
                                className="flex items-center gap-1.5 hover:text-brand-300 transition-colors"
                              >
                                <span>Explore Solution</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Solar Panel Brands Grid */}
                      {productBrandsItem && (
                        <div className="bg-slate-900/40 rounded-xl p-5 border border-white/10 relative z-10">
                          <div className="flex items-center justify-between mb-3.5 gap-3">
                            <div className="flex items-center gap-2">
                              <Sun className="w-4 h-4 text-[#8cc63f]" />
                              <h4 className="text-[15px] font-bold text-white">
                                Solar Panel Brands
                              </h4>
                            </div>
                            <Link
                              to={formatHref(productBrandsItem.href)}
                              onClick={() => setActiveMegaMenu(null)}
                              className="text-[13px] font-semibold text-[#8cc63f] hover:text-brand-300 hover:underline whitespace-nowrap"
                            >
                              View All Brands →
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
                    <div className="bg-[#0A1118]/95 border border-white/10 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_40px_rgba(140,198,63,0.1)] p-7 sm:p-8 backdrop-blur-xl relative overflow-hidden">
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
      </nav>

      {/* DESKTOP BACKDROP OVERLAY WHEN VALID DROPDOWN/MEGA MENU IS ACTIVE */}
      <AnimatePresence>
        {isBackdropActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:block fixed inset-0 top-[76px] bg-[#0A1118]/50 backdrop-blur-[3px] z-40 pointer-events-auto"
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
                  src="https://i.postimg.cc/vZdTgLm9/oneroof.png"
                  alt="Oneroof Solar Logo"
                  className="h-[46px] sm:h-[54px] w-auto"
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
                        <h2 className="text-[24px] font-extrabold text-white tracking-tight">
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
                            location.pathname === itemHref
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
                  <div className="mt-auto pt-8 pb-4">
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
