import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle2, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTE_PATHS, cn } from "@/lib/index";
import { useLanguage } from "@/contexts/LanguageContext";
import { services, projects, insights, methodologySteps } from "@/data/index";
import { ServiceCard, ProjectCard, InsightCard } from "@/components/Cards";
import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { getImagePath } from "@/utils/paths";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { t, tr } = useLanguage();
  // 최근 프로젝트 3개와 인사이트 3개만 메인에 노출
  const featuredProjects = projects.slice(0, 3);
  const recentInsights = insights.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={getImagePath("images/hero-background.jpg")}
            alt="YDCT Business Analytics" 
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 backdrop-blur-sm border border-primary/20 text-primary text-sm font-semibold mb-8"
            >
              <Zap className="w-4 h-4" />
              Leading Digital & AI Transformation
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-tight"
            >
              <span className="text-foreground">{t("데이터로 증명하는", "Data-Driven")}</span>
              <br />
              <span className="text-primary bg-clip-text">{t("비즈니스 혁신", "Business Innovation")}</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed max-w-3xl font-light"
            >
              {t(
                <>YDCT는 <span className="font-semibold text-foreground">22년의 전문성</span>과 최신 <span className="font-semibold text-primary">AI 기술</span>을 바탕으로<br className="hidden md:block" />기업의 비즈니스 가치를 극대화하는 데이터 기반 컨설팅을 제공합니다.</>,
                <>YDCT provides data-driven consulting based on <span className="font-semibold text-foreground">22 years of expertise</span> and cutting-edge <span className="font-semibold text-primary">AI technology</span><br className="hidden md:block" />to maximize business value for enterprises.</>
              )}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                asChild 
                className="rounded-full px-10 h-16 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
              >
                <Link to={ROUTE_PATHS.CONTACT} className="flex items-center gap-2">
                  {t("무료 상담 신청하기", "Free Consultation")} 
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="rounded-full px-10 h-16 text-lg font-bold bg-background/50 backdrop-blur-sm border-2 hover:bg-background/80 transition-all"
              >
                <Link to={ROUTE_PATHS.BUSINESS}>{t("서비스 살펴보기", "Explore Services")}</Link>
              </Button>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-16 flex flex-wrap gap-8 md:gap-12"
            >
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-bold text-primary mb-1">22+</span>
                <span className="text-sm text-muted-foreground font-medium">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-bold text-primary mb-1">31+</span>
                <span className="text-sm text-muted-foreground font-medium">Projects Delivered</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-bold text-primary mb-1">100%</span>
                <span className="text-sm text-muted-foreground font-medium">Client Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground/60"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-current rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Core Business Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{tr('home.coreBusiness.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {tr('home.coreBusiness.description')}
            </p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{tr('home.methodology.title')}</h2>
              <p className="text-sm text-primary/80 font-medium mb-6 italic">{tr('home.methodology.subtitle')}</p>
              <p className="text-muted-foreground mb-8 text-lg">
                {tr('home.methodology.description')}
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{tr('home.methodology.feature1Title')}</h4>
                    <p className="text-sm text-muted-foreground">{tr('home.methodology.feature1Desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{tr('home.methodology.feature2Title')}</h4>
                    <p className="text-sm text-muted-foreground">{tr('home.methodology.feature2Desc')}</p>
                  </div>
                </div>
              </div>
              <Button variant="link" asChild className="mt-8 p-0 text-primary">
                <Link to={ROUTE_PATHS.ABOUT} className="flex items-center group font-semibold">
                  YDCT의 철학 더 알아보기 <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-1 gap-4">
                {methodologySteps.map((step) => (
                  <motion.div
                    key={step.step}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 p-4 bg-background border border-border rounded-xl shadow-sm transition-all"
                  >
                    <div className="text-3xl font-mono font-bold text-primary/30 w-12 shrink-0">
                      {String(step.step).padStart(2, '0')}
                    </div>
                    <div>
                      <h5 className="font-bold text-lg">
                        {t(step.title, step.titleEn || step.title)}
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {t(step.description, step.descriptionEn || step.description)}
                      </p>
                    </div>
                    <div className="ml-auto hidden sm:block">
                      <CheckCircle2 className="h-5 w-5 text-primary/20" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{tr('home.projects.title')}</h2>
              <p className="text-muted-foreground">{tr('home.projects.description')}</p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex rounded-full">
              <Link to={ROUTE_PATHS.INSIGHTS}>{tr('home.projects.viewAll')}</Link>
            </Button>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          <div className="mt-10 md:hidden text-center">
            <Button variant="outline" asChild className="w-full rounded-full">
              <Link to={ROUTE_PATHS.INSIGHTS}>모든 사례 보기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
            <div className="absolute inset-0 opacity-10">
              <img src={IMAGES.TEAM_WORK_2} alt="CTA Background" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{tr('home.cta.title')}</h2>
              <p className="text-primary-foreground/80 mb-10 text-lg leading-relaxed">
                {tr('home.cta.description')}
              </p>
              <Button size="lg" variant="secondary" asChild className="rounded-full px-10 h-14 text-lg font-bold text-primary">
                <Link to={ROUTE_PATHS.CONTACT}>{tr('home.cta.button')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-24 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{tr('home.insights.title')}</h2>
            <p className="text-muted-foreground">{tr('home.insights.description')}</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {recentInsights.map((insight, index) => (
              <InsightCard key={insight.id} insight={insight} index={index} />
            ))}
          </motion.div>

          <div className="text-center">
            <Button variant="ghost" asChild className="text-primary font-semibold group">
              <Link to={ROUTE_PATHS.INSIGHTS}>
                {tr('home.insights.viewAll')} <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
