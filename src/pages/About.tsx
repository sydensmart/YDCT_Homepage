import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Award, CheckCircle2, Quote } from "lucide-react";
import { cn, ROUTE_PATHS } from "@/lib/index";
import { companyInfo, teamMembers } from "@/data/index";
import { TeamCard } from "@/components/Cards";
import { IMAGES } from "@/assets/images";
import { useLanguage } from "@/contexts/LanguageContext";
import { getImagePath } from "@/utils/paths";

export default function About() {
  const { tr, language } = useLanguage();
  const ceo = teamMembers[0];

  const visionValues = [
    {
      icon: Target,
      titleKo: "전략적 통찰",
      titleEn: "Strategic Insight",
      description: "단순한 기술 도입을 넘어 비즈니스의 본질적 가치를 창출하는 전략을 제시합니다.",
      descriptionEn: "We propose strategies that create essential business value beyond simple technology adoption.",
    },
    {
      icon: Lightbulb,
      titleKo: "기술 혁신",
      titleEn: "Tech Innovation",
      description: "AI와 클라우드 등 최신 기술 트렌드를 선도하며 기업의 디지털 경쟁력을 강화합니다.",
      descriptionEn: "We lead the latest technology trends such as AI and cloud, strengthening corporate digital competitiveness.",
    },
    {
      icon: Users,
      titleKo: "고객 성공",
      titleEn: "Client Success",
      description: "22년 이상의 풍부한 경험을 바탕으로 고객사의 지속 가능한 성장을 함께합니다.",
      descriptionEn: "Based on over 22 years of rich experience, we accompany clients' sustainable growth.",
    },
    {
      icon: Award,
      titleKo: "전문성",
      titleEn: "Professionalism",
      description: "각 분야 최고의 전문가들이 모여 타협하지 않는 최상의 컨설팅 품질을 보장합니다.",
      descriptionEn: "Top experts in each field come together to ensure uncompromising best consulting quality.",
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center bg-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={IMAGES.CORPORATE_7} 
            alt="YDCT Office"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          >
            {tr('about.hero.title').split(' ')[0]} <span className="text-primary">{tr('about.hero.title').split(' ')[1]}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white max-w-2xl mx-auto font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            {tr('about.hero.description')}
          </motion.p>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                <Quote className="w-3.5 h-3.5" /> {tr('about.ceo.badge')}
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                "{tr('about.ceo.quote')}"
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                <p>{tr('about.ceo.message1')}</p>
                <p>{tr('about.ceo.message2')}</p>
                <p>{tr('about.ceo.message3')}</p>
                <p>{tr('about.ceo.message4')}</p>
              </div>
              <div className="pt-2">
                <img src={getImagePath("images/signature.svg")} alt="서영득 서명" className="h-10 opacity-80" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{tr('about.vision.title')}</h2>
            <p className="text-muted-foreground">{tr('about.vision.description')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionValues.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background p-8 rounded-2xl border border-border hover:border-primary/30 transition-all group text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors mx-auto">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-1">{language === "en" ? item.titleEn : item.titleKo}</h3>
                <p className="text-sm text-primary/70 font-medium mb-4">{language === "en" ? item.titleKo : item.titleEn}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {language === "en" ? item.descriptionEn : item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Detailed Profile */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{tr('about.profile.title')}</h2>
              <p className="text-muted-foreground text-lg">{tr('about.hero.description')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <div className="sticky top-24 space-y-8">
                  <TeamCard member={ceo} />
                </div>
              </div>

              <div className="md:col-span-2 space-y-12">
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-border pb-3">
                    <Award className="w-5 h-5 text-primary" /> {tr('about.profile.career')}
                  </h3>
                  <ul className="space-y-4">
                    {(language === "en" && ceo.careerEn ? ceo.careerEn : ceo.career).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium group-hover:text-primary transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-border pb-3">
                    <Award className="w-5 h-5 text-primary" /> {tr('about.profile.education')}
                  </h3>
                  <ul className="space-y-4">
                    {(language === "en" && ceo.educationEn ? ceo.educationEn : ceo.education).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2.5 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-border pb-3">
                    <Award className="w-5 h-5 text-primary" /> {tr('about.profile.specialties')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(language === "en" && ceo.specialtiesEn ? ceo.specialtiesEn : ceo.specialties).map((item, idx) => (
                      <span 
                        key={idx} 
                        className="px-4 py-2 bg-muted rounded-lg text-sm font-medium border border-border hover:bg-primary/5 hover:border-primary/20 transition-all"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Footer Section */}
      <section className="py-20 bg-slate-50 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">{tr('about.contact.title')}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {tr('about.contact.description')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-white rounded-xl shadow-sm border border-border hover:border-primary/30 transition-all">
                <p className="text-xs text-primary uppercase tracking-wider mb-3 font-semibold">{tr('about.contact.email')}</p>
                <p className="font-medium text-lg">{companyInfo.email}</p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-border hover:border-primary/30 transition-all">
                <p className="text-xs text-primary uppercase tracking-wider mb-3 font-semibold">{tr('about.contact.office')}</p>
                <p className="font-medium text-lg">{language === "en" && companyInfo.addressEn ? companyInfo.addressEn : companyInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              {tr('about.cta.title')}
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              {tr('about.cta.description')}
            </p>
            <div className="pt-4">
              <motion.a
                href={ROUTE_PATHS.CONTACT}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-full shadow-lg hover:bg-slate-100 transition-colors"
              >
                {tr('about.cta.button')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
