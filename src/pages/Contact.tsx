import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  MapPin,
  Mail,
  Send,
  ChevronRight,
  Globe,
} from "lucide-react";
import { SiLinkedin, SiYoutube } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import { companyInfo } from "@/data/index";
import { notices, Notice } from "@/data/notices";
import { IMAGES } from "@/assets/images";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "이름은 2자 이상이어야 합니다." }),
  email: z.string().email({ message: "유효한 이메일 주소를 입력해주세요." }),
  phone: z.string().min(10, { message: "연락처를 정확히 입력해주세요." }),
  subject: z.string().min(5, { message: "제목은 5자 이상이어야 합니다." }),
  message: z.string().min(10, { message: "문의 내용은 10자 이상 작성해주세요." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const faqData = [
  {
    question: "컨설팅 의뢰 절차는 어떻게 되나요?",
    answer: "문의 접수 후 24시간 이내에 담당 컨설턴트가 연락을 드립니다. 이후 1차 미팅을 통해 비즈니스 현황을 파악하고, 맞춤형 제안서와 견적을 전달해 드립니다.",
  },
  {
    question: "중소기업을 위한 DX 컨설팅도 진행하시나요?",
    answer: "네, YDCT는 대기업뿐만 아니라 디지털 전환이 필요한 중견 및 강소기업을 위한 최적화된 맞춤형 컨설팅 프로그램을 운영하고 있습니다.",
  },
  {
    question: "AI 에이전트 도입 비용은 어느 정도인가요?",
    answer: "구현하고자 하는 에이전트의 기능 범위와 연동되는 시스템의 복잡도에 따라 차이가 있습니다. 기초 진단 컨설팅을 통해 예상 비용을 산출해 드립니다.",
  },
  {
    question: "기존에 사용 중인 ERP 시스템과 클라우드 연동이 가능한가요?",
    answer: "YDCT는 SAP, Oracle 등 주요 엔터프라이즈 솔루션과의 연동 경험이 풍부합니다. 기존 인프라를 최대한 활용하면서 클라우드 효율성을 높이는 하이브리드 전략을 제시해 드립니다.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const location = useLocation();
  const { t, tr, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // URL hash로 문의하기 섹션 스크롤
  useEffect(() => {
    if (location.hash === '#contact-form') {
      const element = document.getElementById('contact-form');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);

    try {
      // EmailJS로 이메일 전송
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        to_email: 'ydct2025@gmail.com',
        reply_to: data.email,
        date: new Date().toLocaleString('ko-KR'),
      };

      // EmailJS 초기화 및 전송
      emailjs.init('elIfeldWLA1ddanM7'); // Public Key
      
      const result = await emailjs.send(
        'service_zv8tph5',  // Service ID
        'template_xxvj8qt', // Template ID
        templateParams
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "문의 접수 완료",
        description: "성공적으로 문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      
      toast({
        title: "전송 실패",
        description: "문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src={IMAGES.CORPORATE_1}
            alt="Contact Background"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t("고객지원 및 문의", "Customer Support & Contact")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t(
                "YDCT는 귀사의 디지털 미래를 함께 고민합니다. 서비스 문의, 기술 지원, 파트너십 등 궁금한 점이 있으시면 언제든 연락주세요.",
                "YDCT is committed to shaping your digital future. Please feel free to contact us for service inquiries, technical support, partnership opportunities, or any questions."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notices & FAQ Section (2 Columns) */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Notices */}
              <div className="bg-white rounded-2xl p-8 border border-border shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">{tr('contact.notices.title')}</h3>
                  <Button variant="link" className="p-0 h-auto text-primary font-semibold">
                    {tr('contact.notices.viewAll')} <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-5">
                  {notices.map((notice) => (
                    <div 
                      key={notice.id} 
                      onClick={() => setSelectedNotice(notice)}
                      className="group cursor-pointer p-4 rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <p className="text-xs text-muted-foreground mb-2">{notice.date}</p>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {language === "en" && notice.titleEn ? notice.titleEn : notice.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl p-8 border border-border shadow-md">
                <h3 className="text-2xl font-bold mb-6">{t("자주 묻는 질문", "FAQ")}</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-0">
                    <AccordionTrigger className="text-left font-semibold py-4 hover:text-primary transition-colors">
                      {tr('contact.faq.q1')}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {tr('contact.faq.a1')}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-semibold py-4 hover:text-primary transition-colors">
                      {tr('contact.faq.q2')}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {tr('contact.faq.a2')}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-semibold py-4 hover:text-primary transition-colors">
                      {tr('contact.faq.q3')}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {tr('contact.faq.a3')}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-semibold py-4 hover:text-primary transition-colors">
                      {tr('contact.faq.q4')}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {tr('contact.faq.a4')}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-12 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-border shadow-xl">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{t("문의하기", "Contact Us")}</h2>
              <p className="text-muted-foreground text-lg">{t("24시간 이내에 답변드립니다", "We'll respond within 24 hours")}</p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{tr('contact.form.name')}</FormLabel>
                        <FormControl>
                          <Input placeholder={tr('contact.form.namePlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{tr('contact.form.email')}</FormLabel>
                        <FormControl>
                          <Input placeholder={tr('contact.form.emailPlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{tr('contact.form.phone')}</FormLabel>
                        <FormControl>
                          <Input placeholder={tr('contact.form.phonePlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{tr('contact.form.subject')}</FormLabel>
                        <FormControl>
                          <Input placeholder={tr('contact.form.subjectPlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{tr('contact.form.message')}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={tr('contact.form.messagePlaceholder')}
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit" 
                    className="px-12 py-4 h-auto text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    disabled={isSubmitting}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? tr('contact.form.submitting') : tr('contact.form.submit')}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* Location with Google Maps */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{tr('contact.location.title')}</h2>
            <p className="text-muted-foreground text-lg">{tr('contact.location.subtitle')}</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl border border-border shadow-xl overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">YDCT {language === "en" ? "Seoul Headquarters" : "서울 본사"}</h3>
                    <p className="text-muted-foreground">{language === "en" && companyInfo.addressEn ? companyInfo.addressEn : companyInfo.address}</p>
                  </div>
                </div>
              </div>
              <div className="relative w-full" style={{ height: '500px' }}>
                <iframe
                  src="https://www.google.com/maps?q=서울특별시+강동구+성안로13길+45-10&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="YDCT 서울 본사 위치"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Card */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-accent/10">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">{tr('contact.info.location')}</h3>
                      <p className="text-muted-foreground leading-relaxed">{language === "en" && companyInfo.addressEn ? companyInfo.addressEn : companyInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">{tr('contact.info.email')}</h3>
                      <p className="text-muted-foreground leading-relaxed">{companyInfo.email}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="w-4 h-4" />
                    <span>{tr('contact.info.social')}</span>
                  </div>
                  <div className="flex gap-3">
                    <a href={companyInfo.social.linkedIn} className="p-3 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 hover:scale-110">
                      <SiLinkedin className="w-5 h-5" />
                    </a>
                    <a href={companyInfo.social.youtube} className="p-3 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 hover:scale-110">
                      <SiYoutube className="w-5 h-5" />
                    </a>
                    <a href={companyInfo.social.blog} className="p-3 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 hover:scale-110 font-bold text-base">
                      R
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notice Detail Dialog */}
      <Dialog open={!!selectedNotice} onOpenChange={() => setSelectedNotice(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh]">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-primary px-2 py-1 bg-primary/10 rounded">
                {selectedNotice?.category}
              </span>
              <span className="text-xs text-muted-foreground">{selectedNotice?.date}</span>
            </div>
            <DialogTitle className="text-2xl font-bold">
              {selectedNotice?.title}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground mt-2">
              {selectedNotice?.excerpt}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[50vh] pr-4">
            <div className="prose prose-sm max-w-none">
              <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                {selectedNotice?.content}
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
