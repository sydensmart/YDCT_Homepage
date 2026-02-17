import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Home,
  Building2,
  Briefcase,
  Lightbulb,
  Mail,
  ShieldCheck,
  ChevronRight,
  MapIcon,
} from "lucide-react";
import { ROUTE_PATHS } from "@/lib/index";
import { Card, CardContent } from "@/components/ui/card";
import { IMAGES } from "@/assets/images";

interface SitemapSection {
  title: string;
  titleEn: string;
  path: string;
  icon: React.ReactNode;
  subsections?: {
    title: string;
    titleEn: string;
    anchor?: string;
  }[];
}

const sitemapData: SitemapSection[] = [
  {
    title: "홈",
    titleEn: "Home",
    path: ROUTE_PATHS.HOME,
    icon: <Home className="w-6 h-6" />,
    subsections: [
      { title: "메인 비주얼", titleEn: "Main Visual" },
      { title: "핵심 가치", titleEn: "Core Values" },
      { title: "주요 서비스", titleEn: "Key Services" },
      { title: "프로젝트 실적", titleEn: "Project Portfolio" },
      { title: "최신 기술 인사이트", titleEn: "Latest Tech Insights" },
    ],
  },
  {
    title: "회사소개",
    titleEn: "About",
    path: ROUTE_PATHS.ABOUT,
    icon: <Building2 className="w-6 h-6" />,
    subsections: [
      { title: "회사 소개", titleEn: "Company Overview" },
      { title: "비전 및 미션", titleEn: "Vision & Mission" },
      { title: "CEO 메시지", titleEn: "CEO Message" },
      { title: "핵심 가치", titleEn: "Core Values" },
      { title: "연혁", titleEn: "History" },
      { title: "오시는 길", titleEn: "Location" },
    ],
  },
  {
    title: "사업영역",
    titleEn: "Business",
    path: ROUTE_PATHS.BUSINESS,
    icon: <Briefcase className="w-6 h-6" />,
    subsections: [
      { title: "IT 컨설팅", titleEn: "IT Consulting" },
      { title: "AI 에이전트 개발", titleEn: "AI Agent Development" },
      { title: "클라우드 전환", titleEn: "Cloud Transformation" },
      { title: "엔터프라이즈 솔루션", titleEn: "Enterprise Solutions" },
      { title: "프로젝트 수행 실적", titleEn: "Project Portfolio" },
      { title: "컨설팅 방법론", titleEn: "Consulting Methodology" },
    ],
  },
  {
    title: "인사이트",
    titleEn: "Insights",
    path: ROUTE_PATHS.INSIGHTS,
    icon: <Lightbulb className="w-6 h-6" />,
    subsections: [
      { title: "기술 트렌드", titleEn: "Technology Trends" },
      { title: "산업 분석", titleEn: "Industry Analysis" },
      { title: "케이스 스터디", titleEn: "Case Studies" },
      { title: "최신 소식", titleEn: "Latest News" },
    ],
  },
  {
    title: "고객지원",
    titleEn: "Contact",
    path: ROUTE_PATHS.CONTACT,
    icon: <Mail className="w-6 h-6" />,
    subsections: [
      { title: "공지사항", titleEn: "Notices" },
      { title: "자주 묻는 질문", titleEn: "FAQ" },
      { title: "문의하기", titleEn: "Contact Form", anchor: "#contact-form" },
      { title: "찾아오시는 길", titleEn: "Location" },
      { title: "연락처 정보", titleEn: "Contact Information" },
    ],
  },
  {
    title: "개인정보처리방침",
    titleEn: "Privacy Policy",
    path: ROUTE_PATHS.PRIVACY,
    icon: <ShieldCheck className="w-6 h-6" />,
    subsections: [
      { title: "개인정보 수집 및 이용", titleEn: "Personal Information Collection & Use" },
      { title: "개인정보 보유 및 파기", titleEn: "Data Retention & Destruction" },
      { title: "개인정보 처리 위탁", titleEn: "Data Processing Outsourcing" },
      { title: "정보주체의 권리", titleEn: "Data Subject Rights" },
    ],
  },
];

export default function Sitemap() {
  const { t, language } = useLanguage();
  
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src={IMAGES.CORPORATE_1}
            alt="Sitemap Background"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <MapIcon className="w-12 h-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {t("사이트맵", "Sitemap")}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t(
                "YDCT 홈페이지의 전체 구조를 한눈에 확인하실 수 있습니다. 원하시는 페이지로 빠르게 이동하세요.",
                "View YDCT website structure at a glance. Navigate quickly to your desired page."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sitemapData.map((section, index) => (
              <motion.div
                key={section.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                  <CardContent className="p-8">
                    {/* Section Header */}
                    <Link
                      to={section.path}
                      className="flex items-center gap-4 mb-6 group"
                    >
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {section.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {language === "en" ? section.titleEn : section.title}
                        </h2>
                      </div>
                      <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>

                    {/* Subsections */}
                    {section.subsections && section.subsections.length > 0 && (
                      <div className="space-y-3 pl-4 border-l-2 border-border">
                        {section.subsections.map((subsection, subIndex) => (
                          <Link
                            key={subIndex}
                            to={section.path + (subsection.anchor || "")}
                            className="block group"
                          >
                            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-2">
                              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
                              <span className="text-sm font-medium">
                                {language === "en" ? subsection.titleEn : subsection.title}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl border border-border"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">{t("빠른 링크", "Quick Links")}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to={ROUTE_PATHS.CONTACT + "#contact-form"}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                <Mail className="w-8 h-8 text-primary group-hover:text-white" />
                <span className="text-sm font-semibold text-center">{t("문의하기", "Contact")}</span>
              </Link>
              <Link
                to={ROUTE_PATHS.BUSINESS}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                <Briefcase className="w-8 h-8 text-primary group-hover:text-white" />
                <span className="text-sm font-semibold text-center">{t("사업영역", "Business")}</span>
              </Link>
              <Link
                to={ROUTE_PATHS.INSIGHTS}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                <Lightbulb className="w-8 h-8 text-primary group-hover:text-white" />
                <span className="text-sm font-semibold text-center">{t("인사이트", "Insights")}</span>
              </Link>
              <Link
                to={ROUTE_PATHS.ABOUT}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                <Building2 className="w-8 h-8 text-primary group-hover:text-white" />
                <span className="text-sm font-semibold text-center">{t("회사소개", "About")}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
