import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Search, 
  Filter, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Trophy,
  TrendingUp,
  Users
} from "lucide-react";
import { cn, Project, ROUTE_PATHS } from "@/lib/index";
import { insights, projects, majorClients } from "@/data/index";
import { InsightCard, ProjectCard } from "@/components/Cards";
import { IMAGES } from "@/assets/images";
import { springPresets, fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";
import { useLanguage } from "@/contexts/LanguageContext";

const CATEGORIES = ["All", "IT Consulting", "AI Solution", "Cloud", "Enterprise"] as const;
type CategoryType = (typeof CATEGORIES)[number];

export default function Insights() {
  const { tr, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.TEAM_WORK_3} 
            alt="Team Collaboration" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block px-3 py-1 mb-6 text-xs font-mono font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full"
            >
              {tr('insights.hero.badge')}
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
            >
              {tr('insights.hero.title')}
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              {tr('insights.hero.description')}
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springPresets.gentle, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[ 
              { label: tr('insights.hero.statsProjects'), value: "31+", icon: Trophy },
              { label: tr('insights.hero.statsPartners'), value: "15+", icon: Users },
              { label: tr('insights.hero.statsSuccess'), value: "100%", icon: CheckCircle2 },
              { label: tr('insights.hero.statsGrowth'), value: "140%", icon: TrendingUp }
            ].map((stat, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm border border-border p-6 rounded-2xl shadow-sm">
                <stat.icon className="w-6 h-6 text-primary mb-4" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight mb-4">{tr('insights.latest.title')}</h2>
              <p className="text-muted-foreground">
                {tr('insights.latest.description')}
              </p>
            </div>
            <button className="flex items-center gap-2 text-primary font-medium hover:underline">
              {tr('insights.latest.viewAll')} <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {insights.map((insight, index) => (
              <motion.div key={insight.id} variants={staggerItem}>
                <InsightCard insight={insight} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Major Clients Reference Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">{tr('insights.clients.title')}</h2>
            <p className="text-muted-foreground">
              {tr('insights.clients.description')}
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {majorClients.map((client, index) => (
              <motion.div
                key={client.name}
                variants={staggerItem}
              >
                <a 
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group bg-white border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-full h-28 bg-slate-50 rounded-xl flex items-center justify-center mb-4 p-4 group-hover:bg-primary/5 transition-colors overflow-hidden">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} 로고`}
                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                        style={{ width: 'auto', height: 'auto' }}
                        onError={(e) => {
                          // 로고 이미지 로드 실패 시 첫 글자로 대체
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const fallback = document.createElement('div');
                            fallback.className = 'flex items-center justify-center text-3xl font-bold text-slate-600 group-hover:text-primary transition-colors';
                            fallback.textContent = client.name.charAt(0);
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {language === "en" && client.nameEn ? client.nameEn : client.name}
                    </h3>
                    <p className="text-xs text-primary font-medium mb-2">
                      {language === "en" && client.categoryEn ? client.categoryEn : client.category}
                    </p>
                    <p className="text-xs text-muted-foreground text-center leading-relaxed mb-3 flex-1">
                      {language === "en" && client.descriptionEn ? client.descriptionEn : client.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                      {client.projects}{language === "en" ? " Projects" : "건 수행"}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary/5 rounded-full">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">
                {language === "en" ? (
                  <>Total of <span className="text-primary font-bold">31</span> projects completed</>
                ) : (
                  <>총 <span className="text-primary font-bold">31건</span>의 프로젝트 수행 실적 보유</>
                )}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Portfolio Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">{tr('insights.projects.title')}</h2>
            <p className="text-muted-foreground">
              {tr('insights.projects.description')}
            </p>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all border",
                    activeCategory === cat 
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-white text-muted-foreground border-border hover:border-primary/50"
                  )}
                >
                  {cat === "All" ? tr('insights.categories.all') : 
                   cat === "IT Consulting" ? tr('insights.categories.itConsulting') :
                   cat === "AI Solution" ? tr('insights.categories.aiSolution') :
                   cat === "Cloud" ? tr('insights.categories.cloud') : 
                   tr('insights.categories.enterprise')}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text"
                placeholder={tr('insights.projects.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Project Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ ...springPresets.snappy, delay: index * 0.05 }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-muted-foreground">{tr('insights.projects.noResults')}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden bg-primary rounded-[2rem] p-12 md:p-20 text-center">
            <div className="absolute inset-0 opacity-20">
              <img 
                src={IMAGES.AI_DATA_1} 
                alt="Tech Background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {tr('insights.cta.title')}
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-10">
                {tr('insights.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to={ROUTE_PATHS.CONTACT}
                  className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-slate-50 transition-colors shadow-lg shadow-black/10"
                >
                  {tr('insights.cta.button')}
                </Link>
                <a 
                  href="/documents/syd-portfolio.pdf" 
                  download="YDCT_포트폴리오.pdf"
                  className="px-8 py-4 bg-primary-foreground/10 text-white font-bold rounded-full border border-white/20 hover:bg-primary-foreground/20 transition-colors"
                >
                  {tr('insights.cta.download')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
