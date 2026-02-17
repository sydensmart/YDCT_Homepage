import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Lightbulb, Search, Layers, Rocket, TrendingUp, Monitor, Cpu, Cloud, Database } from "lucide-react";
import { services, methodologySteps } from "@/data/index";
import { ServiceCard } from "@/components/Cards";
import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
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

export default function Business() {
  const { tr } = useLanguage();
  
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/business-hero.jpg`}
            alt="Business Hero" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 mb-4 text-xs font-mono font-medium tracking-wider text-primary bg-primary/10 rounded-full uppercase">
              {tr('business.hero.badge')}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
              {tr('business.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {tr('business.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">{tr('business.services.title')}</h2>
            <p className="text-muted-foreground">{tr('business.services.description')}</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <div key={service.id} className="group">
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Break Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-border"
            >
              <img src={IMAGES.AI_DATA_7} alt="AI Technology" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-bold text-xl drop-shadow-md">Agentic AI & GenAI</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-border"
            >
              <img src={IMAGES.CLOUD_TECH_4} alt="Cloud Infrastructure" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-bold text-xl drop-shadow-md">Cloud Native Architecture</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">{tr('business.methodology.mainTitle')}</h2>
            <p className="text-muted-foreground mb-8 whitespace-pre-line">
              {tr('business.methodology.mainDesc')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">{tr('business.methodology.badge1')}</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">{tr('business.methodology.badge2')}</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">{tr('business.methodology.badge3')}</span>
            </div>
          </div>

          {/* ITI 7-Step Methodology */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold mb-4">{tr('business.methodology.itiTitle')}</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto whitespace-pre-line">
                {tr('business.methodology.itiDesc')}
              </p>
            </div>

            {/* 3 Phases Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-background rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  1
                </div>
                <h4 className="font-bold mb-2">{tr('business.methodology.phase1Title')}</h4>
                <p className="text-sm text-muted-foreground">{tr('business.methodology.phase1Subtitle')}</p>
                <p className="text-xs text-muted-foreground mt-2">{tr('business.methodology.phase1Desc')}</p>
              </div>
              <div className="text-center p-6 bg-background rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  2
                </div>
                <h4 className="font-bold mb-2">{tr('business.methodology.phase2Title')}</h4>
                <p className="text-sm text-muted-foreground">{tr('business.methodology.phase2Subtitle')}</p>
                <p className="text-xs text-muted-foreground mt-2">{tr('business.methodology.phase2Desc')}</p>
              </div>
              <div className="text-center p-6 bg-background rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  3
                </div>
                <h4 className="font-bold mb-2">{tr('business.methodology.phase3Title')}</h4>
                <p className="text-sm text-muted-foreground">{tr('business.methodology.phase3Subtitle')}</p>
                <p className="text-xs text-muted-foreground mt-2">{tr('business.methodology.phase3Desc')}</p>
              </div>
            </div>

            {/* 7 Steps Detail */}
            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 z-0" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
                {methodologySteps.map((step, index) => {
                  const phaseColors = {
                    "Foundation": "bg-blue-500/10 text-blue-600 group-hover:bg-blue-500",
                    "Creation": "bg-green-500/10 text-green-600 group-hover:bg-green-500",
                    "Execution": "bg-purple-500/10 text-purple-600 group-hover:bg-purple-500"
                  };
                  const colorClass = phaseColors[step.phase as keyof typeof phaseColors] || "bg-primary/10 text-primary group-hover:bg-primary";
                  
                  return (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center text-center bg-background border border-border p-6 rounded-xl shadow-sm hover:border-primary/50 transition-colors group relative"
                    >
                      <div className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center font-mono font-bold mb-4 group-hover:text-white transition-colors`}>
                        {step.step}
                      </div>
                      <h3 className="font-bold mb-1 text-sm md:text-base">
                        {step.title.split(' (')[0]}
                      </h3>
                      <p className="text-xs text-muted-foreground font-medium mb-3">
                        ({tr(`business.methodology.step${step.step}`)})
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                        {tr(`business.methodology.step${step.step}Desc`)}
                      </p>
                      {step.keyPoint && (
                        <div className="mt-auto">
                          <span className="inline-block px-2 py-1 bg-accent/50 text-accent-foreground rounded text-xs font-medium">
                            {tr(`business.methodology.step${step.step}Key`)}
                          </span>
                        </div>
                      )}
                      {step.output && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
                            {tr(`business.methodology.step${step.step}Output`)}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Blue Ocean Strategy */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">{tr('business.methodology.blueOceanTitle')}</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto whitespace-pre-line">
                {tr('business.methodology.blueOceanDesc')}
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-8">
                <div>
                  <div className="bg-background p-8 rounded-2xl border border-border h-full flex flex-col">
                    <h4 className="font-bold mb-6 text-lg">{tr('business.methodology.errcTitle')}</h4>
                    <div className="space-y-5 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-600 flex items-center justify-center font-bold text-sm shrink-0">
                          E
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm">{tr('business.methodology.errcE')}</h5>
                          <p className="text-xs text-muted-foreground">{tr('business.methodology.errcEDesc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center font-bold text-sm shrink-0">
                          R
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm">{tr('business.methodology.errcR')}</h5>
                          <p className="text-xs text-muted-foreground">{tr('business.methodology.errcRDesc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                          R
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm">{tr('business.methodology.errcR2')}</h5>
                          <p className="text-xs text-muted-foreground">{tr('business.methodology.errcR2Desc')}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-600 flex items-center justify-center font-bold text-sm shrink-0">
                          C
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm">{tr('business.methodology.errcC')}</h5>
                          <p className="text-xs text-muted-foreground">{tr('business.methodology.errcCDesc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20 h-full flex flex-col">
                    <h4 className="font-bold mb-6 text-lg">{tr('business.methodology.sixPathsTitle')}</h4>
                    <div className="space-y-5 flex-1">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm">{tr('business.methodology.sixPath1')}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm">{tr('business.methodology.sixPath2')}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm">{tr('business.methodology.sixPath3')}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm">{tr('business.methodology.sixPath4')}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm">{tr('business.methodology.sixPath5')}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm">{tr('business.methodology.sixPath6')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Cases - Centered Below */}
              <div className="flex justify-center">
                <div className="max-w-4xl w-full p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
                  <p className="text-base font-bold text-primary mb-3 text-center">{tr('business.methodology.successCaseTitle')}</p>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {tr('business.methodology.successCaseDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ISP/PI Methodology */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">{tr('business.methodology.isppiTitle')}</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto whitespace-pre-line">
                {tr('business.methodology.isppiDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                {
                  step: "1",
                  color: "bg-blue-500/10 text-blue-600"
                },
                {
                  step: "2",
                  color: "bg-orange-500/10 text-orange-600"
                },
                {
                  step: "3",
                  color: "bg-green-500/10 text-green-600"
                },
                {
                  step: "4",
                  color: "bg-purple-500/10 text-purple-600"
                },
                {
                  step: "5",
                  color: "bg-pink-500/10 text-pink-600"
                }
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background border border-border p-6 rounded-xl hover:border-primary/50 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-full ${phase.color} flex items-center justify-center font-bold mb-4`}>
                    {phase.step}
                  </div>
                  <h4 className="font-bold mb-1 text-sm">{tr(`business.methodology.isppiStep${phase.step}Title`)}</h4>
                  <p className="text-xs text-primary font-medium mb-3">{tr(`business.methodology.isppiStep${phase.step}Subtitle`)}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {tr(`business.methodology.isppiStep${phase.step}Desc`)}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-br from-accent/30 to-accent/10 p-8 rounded-2xl border border-border">
              <h4 className="font-bold text-lg mb-6 text-center">{tr('business.methodology.isppiComparisonTitle')}</h4>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-4 px-4 font-bold text-sm">{tr('business.methodology.isppiTableCategory')}</th>
                      <th className="text-left py-4 px-4 font-bold text-sm">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          {tr('business.methodology.isppiTableISP')}
                        </div>
                      </th>
                      <th className="text-left py-4 px-4 font-bold text-sm">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          {tr('business.methodology.isppiTablePI')}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border hover:bg-background/50 transition-colors">
                      <td className="py-4 px-4 font-medium text-sm text-muted-foreground">{tr('business.methodology.isppiTableFocus')}</td>
                      <td className="py-4 px-4 text-sm">
                        <span className="font-medium">{tr('business.methodology.isppiISPFocus')}</span>
                        <p className="text-xs text-muted-foreground mt-1">{tr('business.methodology.isppiISPFocusDesc')}</p>
                      </td>
                      <td className="py-4 px-4 text-sm">
                        <span className="font-medium">{tr('business.methodology.isppiPIFocus')}</span>
                        <p className="text-xs text-muted-foreground mt-1">{tr('business.methodology.isppiPIFocusDesc')}</p>
                      </td>
                    </tr>
                    <tr className="border-b border-border hover:bg-background/50 transition-colors">
                      <td className="py-4 px-4 font-medium text-sm text-muted-foreground">{tr('business.methodology.isppiTableDeliverables')}</td>
                      <td className="py-4 px-4 text-sm">{tr('business.methodology.isppiISPDeliverables')}</td>
                      <td className="py-4 px-4 text-sm">{tr('business.methodology.isppiPIDeliverables')}</td>
                    </tr>
                    <tr className="hover:bg-background/50 transition-colors">
                      <td className="py-4 px-4 font-medium text-sm text-muted-foreground">{tr('business.methodology.isppiTableKeyQuestion')}</td>
                      <td className="py-4 px-4 text-sm italic">{tr('business.methodology.isppiISPQuestion')}</td>
                      <td className="py-4 px-4 text-sm italic">{tr('business.methodology.isppiPIQuestion')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-bold mb-4 text-center">{tr('business.methodology.isppiApplicationTitle')}</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">{tr('business.methodology.isppiApp1')}</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">{tr('business.methodology.isppiApp2')}</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">{tr('business.methodology.isppiApp3')}</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">{tr('business.methodology.isppiApp4')}</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">{tr('business.methodology.isppiApp5')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Summary */}
      <section className="py-24 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">{tr('business.methodology.whyYDCTTitle')}</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{tr('business.methodology.whyYDCT1Title')}</h4>
                    <p className="text-sm text-muted-foreground">{tr('business.methodology.whyYDCT1Desc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{tr('business.methodology.whyYDCT2Title')}</h4>
                    <p className="text-sm text-muted-foreground">{tr('business.methodology.whyYDCT2Desc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{tr('business.methodology.whyYDCT3Title')}</h4>
                    <p className="text-sm text-muted-foreground">{tr('business.methodology.whyYDCT3Desc')}</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Button asChild size="lg" className="rounded-full">
                  <Link to={ROUTE_PATHS.INSIGHTS}>
                    {tr('business.methodology.whyYDCTButton')} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-accent/30 p-8 md:p-12 rounded-3xl">
              <div className="space-y-8">
                <div className="text-center">
                  <p className="text-primary font-mono font-bold text-5xl mb-2">31+</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest">{tr('business.methodology.statsCompletedProjects')}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background p-4 rounded-xl border border-border text-center">
                    <p className="text-2xl font-bold">15+</p>
                    <p className="text-xs text-muted-foreground">{tr('business.methodology.statsGlobalClients')}</p>
                  </div>
                  <div className="bg-background p-4 rounded-xl border border-border text-center">
                    <p className="text-2xl font-bold">22Y</p>
                    <p className="text-xs text-muted-foreground">{tr('business.methodology.statsExpertise')}</p>
                  </div>
                  <div className="bg-background p-4 rounded-xl border border-border text-center">
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-xs text-muted-foreground">{tr('business.methodology.statsSuccessRate')}</p>
                  </div>
                  <div className="bg-background p-4 rounded-xl border border-border text-center">
                    <p className="text-2xl font-bold">AI/DX</p>
                    <p className="text-xs text-muted-foreground">{tr('business.methodology.statsCoreFocus')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
              {tr('business.cta.title')}
            </h2>
            <p className="text-primary-foreground/80 mb-10 text-lg">
              {tr('business.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="rounded-full font-bold">
                <Link to={ROUTE_PATHS.CONTACT}>{tr('business.cta.button')}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-white/30 text-white hover:bg-white/10">
                <a href="/documents/YDCT_ITI-7-step-methodology.pdf" download="YDCT_ITI 7 step 컨설팅 방법론.pdf">{tr('business.cta.download')}</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
