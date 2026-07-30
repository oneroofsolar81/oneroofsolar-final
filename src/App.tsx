/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { ServiceDetail } from "./pages/ServiceDetail";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import Projects from "./pages/Projects";
import { Terms } from "./pages/Terms";
import { Privacy } from "./pages/Privacy";
import { SolarPanelsBrands } from "./pages/SolarPanelsBrands";
import { AikoSolarPanels } from "./pages/AikoSolarPanels";
import { JaSolarPanels } from "./pages/JaSolarPanels";
import { JinkoSolarPanels } from "./pages/JinkoSolarPanels";
import { LongiSolarPanels } from "./pages/LongiSolarPanels";
import { RecSolarPanels } from "./pages/RecSolarPanels";
import { SolarAliceSprings } from "./pages/SolarAliceSprings";
import { SolarInverters } from "./pages/SolarInverters";
import { SolarInverterInstallation } from "./pages/SolarInverterInstallation";
import { SolarInverterRepair } from "./pages/SolarInverterRepair";
import { AuthProvider } from "./context/AuthContext";
import { NotificationProvider } from "./context/NotificationContext";
import ScrollToTop from "./components/ScrollToTop";
import { AdminLayout } from "./pages/admin/AdminLayout";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminPageEditor } from "./pages/admin/AdminPageEditor";
import { AdminListEditor } from "./pages/admin/AdminListEditor";
import { AdminItemEditor } from "./pages/admin/AdminItemEditor";

import { ErrorBoundary } from "./components/ErrorBoundary";

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
                <Route path="/services/solar-battery-installation" element={<ServiceDetail slugOverride="battery-storage" />} />
                <Route path="/services/solar-battery-installation/" element={<ServiceDetail slugOverride="battery-storage" />} />
                
                {/* Solar Inverters Service Hub Page */}
                <Route path="/services/solar-inverters" element={<SolarInverters />} />
                <Route path="/services/solar-inverters/" element={<SolarInverters />} />

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
                
                {/* Jinko Solar Brand Landing Page */}
                <Route path="/solar-panels-brands/jinko" element={<JinkoSolarPanels />} />
                <Route path="/solar-panels-brands/jinko/" element={<JinkoSolarPanels />} />
                <Route path="/solar-panels/jinko" element={<JinkoSolarPanels />} />
                <Route path="/solar-panels/jinko/" element={<JinkoSolarPanels />} />
                
                {/* LONGi Solar Brand Landing Page */}
                <Route path="/solar-panels-brands/longi" element={<LongiSolarPanels />} />
                <Route path="/solar-panels-brands/longi/" element={<LongiSolarPanels />} />
                
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
                
                {/* External SEO Redirects mapping */}
                <Route path="/solar-panels/rec" element={<Navigate to="/product/solar-panels-brands" replace />} />
                <Route path="/solar-panels/rec/" element={<Navigate to="/product/solar-panels-brands" replace />} />
                <Route path="/solar-panels" element={<Navigate to="/product/solar-panels-brands" replace />} />
                <Route path="/solar-panels/" element={<Navigate to="/product/solar-panels-brands" replace />} />
                <Route path="/solar-panel-installation" element={<Navigate to="/services/solar-panel-installation" replace />} />
                <Route path="/solar-panel-installation/" element={<Navigate to="/services/solar-panel-installation" replace />} />
                <Route path="/solar-battery-storage" element={<Navigate to="/services/battery-storage" replace />} />
                <Route path="/solar-battery-storage/" element={<Navigate to="/services/battery-storage" replace />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/" element={<Projects />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<div className="min-h-screen flex items-center justify-center pt-24"><div className="text-center"><h1 className="text-6xl font-black text-slate-900 mb-4">404</h1><p className="text-xl text-slate-600 mb-8">The page you are looking for does not exist.</p><Link to="/" className="text-brand-600 font-bold hover:underline">Go back home</Link></div></div>} />
              </Route>
            </Routes>
          </Router>
        </AuthProvider>
      </NotificationProvider>
    </ErrorBoundary>
  );
}

