import { motion } from "framer-motion";
import { ChevronRight, Calendar, Clock, User, CheckCircle2 } from "lucide-react";
import { 
  cn, 
  type Service, 
  type Project, 
  type TeamMember, 
  type Insight, 
  formatDate 
} from "@/lib/index";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = service.icon;
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group overflow-hidden">
        <CardHeader className="pb-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {language === "en" && service.titleEn ? service.titleEn : service.title}
          </h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed text-sm">
            {language === "en" && service.descriptionEn ? service.descriptionEn : service.description}
          </p>
          <ul className="space-y-2">
            {(language === "en" && service.detailsEn ? service.detailsEn : service.details).map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground/80 tracking-tight">
                <CheckCircle2 size={16} className="text-primary/60 mt-0.5 shrink-0" />
                <span className="leading-snug">{detail}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { language } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Card className="group overflow-hidden border-border/40 bg-background hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
        <div className="aspect-video w-full overflow-hidden bg-muted relative">
          {project.image ? (
            <img
              src={project.image}
              alt={language === "en" && project.titleEn ? project.titleEn : project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-accent/30 text-accent-foreground/20 font-mono text-4xl font-bold">
              YDCT
            </div>
          )}
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-md border-none font-mono text-[10px] tracking-widest uppercase">
              {language === "en" && project.categoryEn ? project.categoryEn : project.category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              {language === "en" && project.clientEn ? project.clientEn : project.client}
            </span>
            <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
          </div>
          
          {project.period && (
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{project.period}</span>
              {project.role && (
                <>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs font-medium text-accent-foreground">
                    {language === "en" && project.roleEn ? project.roleEn : project.role}
                  </span>
                </>
              )}
            </div>
          )}
          
          <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
            {language === "en" && project.titleEn ? project.titleEn : project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {language === "en" && project.descriptionEn ? project.descriptionEn : project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {(language === "en" && project.tagsEn ? project.tagsEn : project.tags).slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border/50">
                #{tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface TeamCardProps {
  member: TeamMember;
  index?: number;
}

export function TeamCard({ member, index = 0 }: TeamCardProps) {
  const { language } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="border-border/40 bg-card overflow-hidden group">
        <div className="aspect-[4/5] w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
          {member.image ? (
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <User size={64} className="text-muted-foreground/20" />
            </div>
          )}
        </div>
        <CardHeader className="p-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold tracking-tight">{member.name}</h3>
            <p className="text-sm font-medium text-primary">
              {language === "en" && member.roleEn ? member.roleEn : member.role}
            </p>
          </div>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <p className="text-base text-muted-foreground leading-relaxed line-clamp-4 italic">
            "{language === "en" && member.bioEn ? member.bioEn : member.bio}"
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface InsightCardProps {
  insight: Insight;
  index?: number;
}

export function InsightCard({ insight, index = 0 }: InsightCardProps) {
  const { language } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="flex flex-col md:flex-row border-border/40 bg-background hover:bg-accent/5 transition-colors overflow-hidden group">
        <div className="w-full md:w-1/3 aspect-video md:aspect-auto overflow-hidden bg-muted">
          {insight.image ? (
            <img 
              src={insight.image} 
              alt={language === "en" && insight.titleEn ? insight.titleEn : insight.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary/5">
              <span className="text-primary/20 font-bold text-2xl">INSIGHT</span>
            </div>
          )}
        </div>
        <div className="flex-1 p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant="outline" className="text-[10px] font-mono tracking-widest uppercase py-0">
              {language === "en" && insight.categoryEn ? insight.categoryEn : insight.category}
            </Badge>
            <div className="flex items-center gap-1 text-[11px] text-muted-foreground font-mono">
              <Calendar size={12} />
              {formatDate(insight.date)}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
            {language === "en" && insight.titleEn ? insight.titleEn : insight.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-6 leading-relaxed">
            {language === "en" && insight.excerptEn ? insight.excerptEn : insight.excerpt}
          </p>
          <CardFooter className="p-0 mt-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <User size={14} />
                {language === "en" && insight.authorEn ? insight.authorEn : insight.author}
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                <Clock size={14} />
                {insight.readTime}
              </div>
            </div>
            <button className="text-primary text-sm font-semibold flex items-center gap-1 group/btn">
              {language === "en" ? "Read More" : "더 읽기"}
              <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
}
