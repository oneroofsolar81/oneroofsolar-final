/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Lenis from "@studio-freight/lenis";
import { Layout } from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";
import { NotificationProvider } from "./context/NotificationContext";
import ScrollToTop from "./components/ScrollToTop";
import { ErrorBoundary } from "./components/ErrorBoundary";

/**
 * Route-level code splitting. Each page is lazy-loaded so the initial bundle
 * only ships the app shell + the page the visitor actually landed on, instead
 * of all ~35 pages at once. Named exports are mapped to a default for React.lazy.
 * No routes or behaviour change — only how the code is delivered.
 */
const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail").then(m => ({ default: m.ServiceDetail })));
const About = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const Contact = lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })));
const Projects = lazy(() => import("./pages/Projects"));
const Terms = lazy(() => import("./pages/Terms").then(m => ({ default: m.Terms })));
const Privacy = lazy(() => import("./pages/Privacy").then(m => ({ default: m.Privacy })));
const SolarPanelsBrands = lazy(() => import("./pages/SolarPanelsBrands").then(m => ({ default: m.SolarPanelsBrands })));
const AikoSolarPanels = lazy(() => import("./pages/AikoSolarPanels").then(m => ({ default: m.AikoSolarPanels })));
const JaSolarPanels = lazy(() => import("./pages/JaSolarPanels").then(m => ({ default: m.JaSolarPanels })));
const JinkoSolarPanels = lazy(() => import("./pages/JinkoSolarPanels").then(m => ({ default: m.JinkoSolarPanels })));
const LongiSolarPanels = lazy(() => import("./pages/LongiSolarPanels").then(m => ({ default: m.LongiSolarPanels })));
const RecSolarPanels = lazy(() => import("./pages/RecSolarPanels").then(m => ({ default: m.RecSolarPanels })));
const SolarAliceSprings = lazy(() => import("./pages/SolarAliceSprings").then(m => ({ default: m.SolarAliceSprings })));
const DarwinCity = lazy(() => import("./pages/DarwinCity").then(m => ({ default: m.DarwinCity })));
const NorthernDarwin = lazy(() => import("./pages/NorthernDarwin").then(m => ({ default: m.NorthernDarwin })));
const Palmerston = lazy(() => import("./pages/Palmerston").then(m => ({ default: m.Palmerston })));
const DarwinRural = lazy(() => import("./pages/DarwinRural").then(m => ({ default: m.DarwinRural })));
const SigenergyBatteryPage = lazy(() => import("./pages/SigenergyBatteryPage").then(m => ({ default: m.SigenergyBatteryPage })));
const GoodWeBatteryPage = lazy(() => import("./pages/GoodWeBatteryPage").then(m => ({ default: m.GoodWeBatteryPage })));
const SolarBatteryBrands = lazy(() => import("./pages/SolarBatteryBrands").then(m => ({ default: m.SolarBatteryBrands })));
const EvChargerInstallation = lazy(() => import("./pages/EvChargerInstallation").then(m => ({ default: m.EvChargerInstallation })));
const EvChargerRepair = lazy(() => import("./pages/EvChargerRepair").then(m => ({ default: m.EvChargerRepair })));
const SolarInverters = lazy(() => import("./pages/SolarInverters").then(m => ({ default: m.SolarInverters })));
const SolarInverterInstallation = lazy(() => import("./pages/SolarInverterInstallation").then(m => ({ default: m.SolarInverterInstallation })));
const SolarInverterRepair = lazy(() => import("./pages/SolarInverterRepair").then(m => ({ default: m.SolarInverterRepair })));
const SolarInvertersProductPage = lazy(() => import("./pages/SolarInvertersProductPage").then(m => ({ default: m.SolarInvertersProductPage })));
const SolarBatteryInstallation = lazy(() => import("./pages/SolarBatteryInstallation").then(m => ({ default: m.SolarBatteryInstallation })));
const SungrowInvertersPage = lazy(() => import("./pages/SungrowInvertersPage").then(m => ({ default: m.SungrowInvertersPage })));
const GoodWeInvertersPage = lazy(() => import("./pages/GoodWeInvertersPage").then(m => ({ default: m.GoodWeInvertersPage })));
const SigenergyInvertersPage = lazy(() => import("./pages/SigenergyInvertersPage").then(m => ({ default: m.SigenergyInvertersPage })));
const FoxEssInvertersPage = lazy(() => import("./pages/FoxEssInvertersPage").then(m => ({ default: m.FoxEssInvertersPage })));
const AlphaEssInvertersPage = lazy(() => import("./pages/AlphaEssInvertersPage").then(m => ({ default: m.AlphaEssInvertersPage })));
const AdminLayout = lazy(() => import("./pages/admin/AdminLayout").then(m => ({ default: m.AdminLayout })));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin").then(m => ({ default: m.AdminLogin })));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard").then(m => ({ default: m.AdminDashboard })));
const AdminPageEditor = lazy(() => import("./pages/admin/AdminPageEditor").then(m => ({ default: m.AdminPageEditor })));
const AdminListEditor = lazy(() => import("./pages/admin/AdminListEditor").then(m => ({ default: m.AdminListEditor })));
const AdminItemEditor = lazy(() => import("./pages/admin/AdminItemEditor").then(m => ({ default: m.AdminItemEditor })));

/** Lightweight route fallback — a minimal branded splash while a page chunk loads. */
function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" aria-busy="true" aria-live="polite">
      <div className="h-10 w-10 rounded-full border-2 border-brand-500/30 border-t-brand-500 animate-spin" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}

function MainLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });
    // @ts-ignore
    window.lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      // @ts-ignore
      delete window.lenis;
    };
  }, []);

  return (
    <ErrorBoundary>
      <NotificationProvider>
        <AuthProvider>
          <Router>
            <ScrollToTop />
            <Suspense fallback={<RouteFallback />}>
            <Routes>
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="pages/:pageId" element={<AdminPageEditor />} />
                <Route path="collections/:collectionId" element={<AdminListEditor />} />
                <Route path="collections/:collectionId/edit/:itemId" element={<AdminItemEditor />} />
              </Route>
    
              {/* Public Routes */}
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/services/repairs-and-maintenance" element={<Navigate to="/solar-panels-darwin" replace />} />
                <Route path="/services/solar-panel" element={<Navigate to="/solar-panels-darwin" replace />} />
                <Route path="/solar-panels-darwin" element={<ServiceDetail slugOverride="solar-panel" />} />
                <Route path="/solar-panel-installation-darwin" element={<ServiceDetail slugOverride="solar-panel-installation" />} />
                <Route path="/solar-panel-installation-darwin/" element={<ServiceDetail slugOverride="solar-panel-installation" />} />
                
                {/* Solar Systems Canonical Routes & Redirects */}
                {/* 1. Residential Solar System */}
                <Route path="/solar-systems/residential-solar-system" element={<ServiceDetail slugOverride="residential-solar-system" />} />
                <Route path="/solar-systems/residential-solar-system/" element={<ServiceDetail slugOverride="residential-solar-system" />} />
                <Route path="/residential-solar-system" element={<Navigate to="/solar-systems/residential-solar-system" replace />} />
                <Route path="/residential-solar-system/" element={<Navigate to="/solar-systems/residential-solar-system" replace />} />
                <Route path="/services/residential-solar-system" element={<Navigate to="/solar-systems/residential-solar-system" replace />} />
                <Route path="/services/residential-solar-system/" element={<Navigate to="/solar-systems/residential-solar-system" replace />} />
                <Route path="/residential-solar" element={<Navigate to="/solar-systems/residential-solar-system" replace />} />
                <Route path="/systems/residential" element={<Navigate to="/solar-systems/residential-solar-system" replace />} />
                
                {/* 2. Commercial Solar System */}
                <Route path="/solar-systems/commercial-solar-system" element={<ServiceDetail slugOverride="commercial-solar-system" />} />
                <Route path="/solar-systems/commercial-solar-system/" element={<ServiceDetail slugOverride="commercial-solar-system" />} />
                <Route path="/services/commercial-solar-system" element={<Navigate to="/solar-systems/commercial-solar-system" replace />} />
                <Route path="/services/commercial-solar-system/" element={<Navigate to="/solar-systems/commercial-solar-system" replace />} />
                <Route path="/commercial-solar-system" element={<Navigate to="/solar-systems/commercial-solar-system" replace />} />
                <Route path="/commercial-solar-system/" element={<Navigate to="/solar-systems/commercial-solar-system" replace />} />
                <Route path="/commercial-solar" element={<Navigate to="/solar-systems/commercial-solar-system" replace />} />
                <Route path="/commercial-solar/" element={<Navigate to="/solar-systems/commercial-solar-system" replace />} />
                <Route path="/services/commercial-solar" element={<Navigate to="/solar-systems/commercial-solar-system" replace />} />
                <Route path="/services/commercial-solar/" element={<Navigate to="/solar-systems/commercial-solar-system" replace />} />

                {/* 3. Off-Grid Solar System */}
                <Route path="/solar-systems/off-grid-solar-system" element={<ServiceDetail slugOverride="off-grid-solar-system" />} />
                <Route path="/solar-systems/off-grid-solar-system/" element={<ServiceDetail slugOverride="off-grid-solar-system" />} />
                <Route path="/services/off-grid-solar-system" element={<Navigate to="/solar-systems/off-grid-solar-system" replace />} />
                <Route path="/services/off-grid-solar-system/" element={<Navigate to="/solar-systems/off-grid-solar-system" replace />} />
                <Route path="/off-grid-solar-system" element={<Navigate to="/solar-systems/off-grid-solar-system" replace />} />
                <Route path="/off-grid-solar-system/" element={<Navigate to="/solar-systems/off-grid-solar-system" replace />} />
                <Route path="/off-grid-solar" element={<Navigate to="/solar-systems/off-grid-solar-system" replace />} />
                <Route path="/off-grid-solar/" element={<Navigate to="/solar-systems/off-grid-solar-system" replace />} />
                <Route path="/services/off-grid-solar" element={<Navigate to="/solar-systems/off-grid-solar-system" replace />} />
                <Route path="/services/off-grid-solar/" element={<Navigate to="/solar-systems/off-grid-solar-system" replace />} />

                {/* Additional SEO Redirects for internal links */}
                <Route path="/repairs-and-maintenance" element={<Navigate to="/solar-panels-darwin" replace />} />
                <Route path="/repairs-and-maintenance/" element={<Navigate to="/solar-panels-darwin" replace />} />
                {/* Solar Battery Installation Page */}
                <Route path="/services/solar-battery-installation" element={<SolarBatteryInstallation />} />
                <Route path="/services/solar-battery-installation/" element={<SolarBatteryInstallation />} />
                
                {/* Solar Inverters Service Hub Page */}
                <Route path="/services/solar-inverters" element={<SolarInverters />} />
                <Route path="/services/solar-inverters/" element={<SolarInverters />} />

                {/* Solar Inverters Product Landing Page & 301 Redirects */}
                <Route path="/products/solar-inverters" element={<SolarInvertersProductPage />} />
                <Route path="/products/solar-inverters/" element={<SolarInvertersProductPage />} />
                <Route path="/products/solar-inverters/sungrow-inverters" element={<SungrowInvertersPage />} />
                <Route path="/products/solar-inverters/sungrow-inverters/" element={<SungrowInvertersPage />} />
                <Route path="/products/solar-inverters/goodwe" element={<GoodWeInvertersPage />} />
                <Route path="/products/solar-inverters/goodwe/" element={<GoodWeInvertersPage />} />
                <Route path="/products/solar-inverters/sigenergy" element={<SigenergyInvertersPage />} />
                <Route path="/products/solar-inverters/sigenergy/" element={<SigenergyInvertersPage />} />
                <Route path="/products/solar-inverters/fox-ess" element={<FoxEssInvertersPage />} />
                <Route path="/products/solar-inverters/fox-ess/" element={<FoxEssInvertersPage />} />
                <Route path="/products/solar-inverters/foxess" element={<Navigate to="/products/solar-inverters/fox-ess" replace />} />
                <Route path="/products/solar-inverters/foxess/" element={<Navigate to="/products/solar-inverters/fox-ess" replace />} />
                <Route path="/products/solar-inverters/alpha-ess" element={<AlphaEssInvertersPage />} />
                <Route path="/products/solar-inverters/alpha-ess/" element={<AlphaEssInvertersPage />} />
                <Route path="/products/solar-inverters/alphaess" element={<Navigate to="/products/solar-inverters/alpha-ess" replace />} />
                <Route path="/products/solar-inverters/alphaess/" element={<Navigate to="/products/solar-inverters/alpha-ess" replace />} />
                <Route path="/solar-inverters" element={<Navigate to="/products/solar-inverters" replace />} />
                <Route path="/solar-inverters/" element={<Navigate to="/products/solar-inverters" replace />} />

                {/* Solar Inverter Installation Child Page & 301 Redirects */}
                <Route path="/services/solar-inverters/installation" element={<SolarInverterInstallation />} />
                <Route path="/services/solar-inverters/installation/" element={<SolarInverterInstallation />} />
                <Route path="/services/solar-inverter-installation" element={<Navigate to="/services/solar-inverters/installation" replace />} />
                <Route path="/services/solar-inverter-installation/" element={<Navigate to="/services/solar-inverters/installation" replace />} />
                <Route path="/solar-inverter-installation" element={<Navigate to="/services/solar-inverters/installation" replace />} />
                <Route path="/solar-inverter-installation/" element={<Navigate to="/services/solar-inverters/installation" replace />} />
                <Route path="/category/solar-inverter-installation" element={<Navigate to="/services/solar-inverters/installation" replace />} />
                <Route path="/category/solar-inverter-installation/" element={<Navigate to="/services/solar-inverters/installation" replace />} />

                {/* Solar Inverter Repair Child Page & 301 Redirects */}
                <Route path="/services/solar-inverters/repair" element={<SolarInverterRepair />} />
                <Route path="/services/solar-inverters/repair/" element={<SolarInverterRepair />} />
                <Route path="/category/solar-inverter-repair" element={<Navigate to="/services/solar-inverters/repair" replace />} />
                <Route path="/category/solar-inverter-repair/" element={<Navigate to="/services/solar-inverters/repair" replace />} />
                <Route path="/services/solar-inverter-repair" element={<Navigate to="/services/solar-inverters/repair" replace />} />
                <Route path="/services/solar-inverter-repair/" element={<Navigate to="/services/solar-inverters/repair" replace />} />

                {/* EV Charger Installation + Repair, then 301s from the old products URL */}
                <Route path="/services/ev-chargers/installation" element={<EvChargerInstallation />} />
                <Route path="/services/ev-chargers/installation/" element={<EvChargerInstallation />} />
                <Route path="/services/ev-chargers/repair" element={<EvChargerRepair />} />
                <Route path="/services/ev-chargers/repair/" element={<EvChargerRepair />} />
                <Route path="/services/ev-chargers" element={<Navigate to="/services/ev-chargers/installation" replace />} />
                <Route path="/services/ev-chargers/" element={<Navigate to="/services/ev-chargers/installation" replace />} />
                <Route path="/ev-charger" element={<Navigate to="/services/ev-chargers/installation" replace />} />
                <Route path="/ev-charger/" element={<Navigate to="/services/ev-chargers/installation" replace />} />
                <Route path="/ev-chargers" element={<Navigate to="/services/ev-chargers/installation" replace />} />
                <Route path="/ev-chargers/" element={<Navigate to="/services/ev-chargers/installation" replace />} />

                {/* Battery brands hub + 301 redirects from the live battery-storage page */}
                <Route path="/services/battery-storage" element={<Navigate to="/products/solar-battery-brands/" replace />} />
                <Route path="/services/battery-storage/" element={<Navigate to="/products/solar-battery-brands/" replace />} />
                <Route path="/battery-storage" element={<Navigate to="/products/solar-battery-brands/" replace />} />
                <Route path="/battery-storage/" element={<Navigate to="/products/solar-battery-brands/" replace />} />
                <Route path="/solar-battery" element={<Navigate to="/products/solar-battery-brands/" replace />} />
                <Route path="/solar-battery/" element={<Navigate to="/products/solar-battery-brands/" replace />} />

                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/product/solar-panels-brands" element={<SolarPanelsBrands />} />
                
                {/* AIKO Solar Brand Landing Page */}
                <Route path="/solar-panels-brands/aiko" element={<AikoSolarPanels />} />
                <Route path="/solar-panels-brands/aiko/" element={<AikoSolarPanels />} />
                
                {/* JA Solar Brand Landing Page */}
                <Route path="/products/ja-solar-panels" element={<JaSolarPanels />} />
                <Route path="/products/ja-solar-panels/" element={<JaSolarPanels />} />
                <Route path="/product/solar-panels-brands/ja-solar-panels-nt" element={<JaSolarPanels />} />
                <Route path="/product/solar-panels-brands/ja-solar-panels-nt/" element={<JaSolarPanels />} />
                <Route path="/product/ja-solar" element={<Navigate to="/product/solar-panels-brands/ja-solar-panels-nt" replace />} />
                <Route path="/product/ja-solar/" element={<Navigate to="/product/solar-panels-brands/ja-solar-panels-nt" replace />} />
                <Route path="/solar-panels-brands/ja-solar" element={<Navigate to="/product/solar-panels-brands/ja-solar-panels-nt" replace />} />
                <Route path="/solar-panels-brands/ja-solar/" element={<Navigate to="/product/solar-panels-brands/ja-solar-panels-nt" replace />} />
                
                {/* Jinko Solar Brand Landing Page */}
                <Route path="/solar-panels-brands/jinko" element={<JinkoSolarPanels />} />
                <Route path="/solar-panels-brands/jinko/" element={<JinkoSolarPanels />} />
                <Route path="/solar-panels/jinko" element={<JinkoSolarPanels />} />
                <Route path="/solar-panels/jinko/" element={<JinkoSolarPanels />} />
                
                {/* LONGi Solar Brand Landing Page */}
                <Route path="/solar-panels-brands/longi" element={<LongiSolarPanels />} />
                <Route path="/solar-panels-brands/longi/" element={<LongiSolarPanels />} />
                <Route path="/product/longi-solar" element={<Navigate to="/solar-panels-brands/longi/" replace />} />
                <Route path="/product/longi-solar/" element={<Navigate to="/solar-panels-brands/longi/" replace />} />
                <Route path="/solar-panels/longi" element={<Navigate to="/solar-panels-brands/longi/" replace />} />
                <Route path="/solar-panels/longi/" element={<Navigate to="/solar-panels-brands/longi/" replace />} />
                
                {/* REC Solar Brand Landing Page */}
                <Route path="/solar-panels-brands/rec" element={<RecSolarPanels />} />
                <Route path="/solar-panels-brands/rec/" element={<RecSolarPanels />} />
                
                {/* Alice Springs Hub Landing Page */}
                <Route path="/solar-alice-springs" element={<SolarAliceSprings />} />
                <Route path="/solar-alice-springs/" element={<SolarAliceSprings />} />
                
                {/* Legacy Alice Springs redirects */}
                <Route path="/alice-springs" element={<Navigate to="/solar-alice-springs/" replace />} />
                <Route path="/alice-springs/" element={<Navigate to="/solar-alice-springs/" replace />} />
                <Route path="/solar-power-alice-springs-nt" element={<Navigate to="/solar-alice-springs/" replace />} />
                <Route path="/solar-power-alice-springs-nt/" element={<Navigate to="/solar-alice-springs/" replace />} />

                {/* Location Hub Landing Pages */}
                <Route path="/locations/darwin-city" element={<DarwinCity />} />
                <Route path="/locations/darwin-city/" element={<DarwinCity />} />
                <Route path="/locations/northern-darwin" element={<NorthernDarwin />} />
                <Route path="/locations/northern-darwin/" element={<NorthernDarwin />} />
                <Route path="/locations/palmerston" element={<Palmerston />} />
                <Route path="/locations/palmerston/" element={<Palmerston />} />
                <Route path="/locations/darwin-rural" element={<DarwinRural />} />
                <Route path="/locations/darwin-rural/" element={<DarwinRural />} />

                {/* Solar Battery Brand Pages */}
                <Route path="/products/solar-battery-brands" element={<SolarBatteryBrands />} />
                <Route path="/products/solar-battery-brands/" element={<SolarBatteryBrands />} />
                <Route path="/products/solar-battery-brands/sigenergy" element={<SigenergyBatteryPage />} />
                <Route path="/products/solar-battery-brands/sigenergy/" element={<SigenergyBatteryPage />} />
                <Route path="/products/solar-battery-brands/goodwe" element={<GoodWeBatteryPage />} />
                <Route path="/products/solar-battery-brands/goodwe/" element={<GoodWeBatteryPage />} />

                {/* External SEO Redirects mapping */}
                <Route path="/solar-panels/rec" element={<Navigate to="/solar-panels-brands/rec/" replace />} />
                <Route path="/solar-panels/rec/" element={<Navigate to="/solar-panels-brands/rec/" replace />} />
                <Route path="/solar-panels" element={<Navigate to="/product/solar-panels-brands" replace />} />
                <Route path="/solar-panels/" element={<Navigate to="/product/solar-panels-brands" replace />} />
                <Route path="/solar-panel-installation" element={<Navigate to="/services/solar-panel-installation" replace />} />
                <Route path="/solar-panel-installation/" element={<Navigate to="/services/solar-panel-installation" replace />} />
                <Route path="/solar-battery-storage" element={<Navigate to="/products/solar-battery-brands/" replace />} />
                <Route path="/solar-battery-storage/" element={<Navigate to="/products/solar-battery-brands/" replace />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/" element={<Projects />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<div className="min-h-screen flex items-center justify-center pt-24"><div className="text-center"><h1 className="hero-heading text-slate-900 mb-4 break-words normal-case">404</h1><p className="text-xl text-slate-600 mb-8">The page you are looking for does not exist.</p><Link to="/" className="text-brand-600 font-bold hover:underline">Go back home</Link></div></div>} />
              </Route>
            </Routes>
            </Suspense>
          </Router>
        </AuthProvider>
      </NotificationProvider>
    </ErrorBoundary>
  );
}

