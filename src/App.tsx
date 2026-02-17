import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ROUTE_PATHS } from "@/lib";
import { Layout } from "@/components/Layout";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Business from "@/pages/Business";
import Insights from "@/pages/Insights";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Sitemap from "@/pages/Sitemap";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

/**
 * 페이지 이동 시 스크롤을 최상단으로 이동시키는 컴포넌트
 */
function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * YDCT 기업 홈페이지 메인 App 컴포넌트
 * 라우터 설정 및 전역 컨텍스트(Layout, QueryClient, Tooltip, Toaster)를 구성합니다.
 */
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Router basename={import.meta.env.BASE_URL}>
            <ScrollToTop />
            <Layout>
            <Routes>
              <Route 
                path={ROUTE_PATHS.HOME} 
                element={<Home />} 
              />
              <Route 
                path={ROUTE_PATHS.ABOUT} 
                element={<About />} 
              />
              <Route 
                path={ROUTE_PATHS.BUSINESS} 
                element={<Business />} 
              />
              <Route 
                path={ROUTE_PATHS.INSIGHTS} 
                element={<Insights />} 
              />
              <Route 
                path={ROUTE_PATHS.CONTACT} 
                element={<Contact />} 
              />
              <Route 
                path={ROUTE_PATHS.PRIVACY} 
                element={<Privacy />} 
              />
              <Route 
                path={ROUTE_PATHS.SITEMAP} 
                element={<Sitemap />} 
              />
              {/* 정의되지 않은 경로는 홈으로 리다이렉트 */}
              <Route 
                path="*" 
                element={<Home />} 
              />
            </Routes>
          </Layout>
        </Router>
        <Toaster />
        </LanguageProvider>
        <Sonner position="top-right" closeButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
