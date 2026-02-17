import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { LucideIcon } from "lucide-react";

/**
 * Tailwind CSS 클래스 합성을 위한 유틸리티 함수
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 서비스 라우트 경로 상수
 */
export const ROUTE_PATHS = {
  HOME: "/",
  ABOUT: "/about",
  BUSINESS: "/business",
  INSIGHTS: "/insights",
  CONTACT: "/contact",
  PRIVACY: "/privacy",
  SITEMAP: "/sitemap",
} as const;

/**
 * 비즈니스 서비스 타입 정의
 */
export interface Service {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  icon: LucideIcon;
  details: string[];
  detailsEn?: string[];
  color?: string;
}

/**
 * 프로젝트 실적 타입 정의
 */
export interface Project {
  id: string;
  title: string;
  titleEn?: string;
  client: string;
  clientEn?: string;
  category: "IT Consulting" | "AI Solution" | "Cloud" | "Enterprise";
  categoryEn?: string;
  year: string;
  period?: string;
  role?: string;
  roleEn?: string;
  description: string;
  descriptionEn?: string;
  tags: string[];
  tagsEn?: string[];
  image?: string;
}

/**
 * 팀 멤버 및 전문가 프로필 타입 정의
 */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleEn?: string;
  bio: string;
  bioEn?: string;
  education: string[];
  educationEn?: string[];
  career: string[];
  careerEn?: string[];
  specialties: string[];
  specialtiesEn?: string[];
  image?: string;
}

/**
 * 인사이트 및 기술 리포트 타입 정의
 */
export interface Insight {
  id: string;
  title: string;
  titleEn?: string;
  category: "Technology" | "Business" | "Case Study" | "Report";
  categoryEn?: string;
  date: string;
  author: string;
  authorEn?: string;
  excerpt: string;
  excerptEn?: string;
  content: string;
  contentEn?: string;
  image?: string;
  readTime: string;
}

/**
 * 회사 정보 타입 정의
 */
export interface CompanyInfo {
  name: string;
  ceo: string;
  address: string;
  addressEn?: string;
  phone: string;
  email: string;
  registrationNumber: string;
  social: {
    linkedIn?: string;
    blog?: string;
    youtube?: string;
    github?: string;
  };
}

/**
 * 주요 고객사 타입 정의
 */
export interface MajorClient {
  name: string;
  nameEn?: string;
  category: string;
  categoryEn?: string;
  projects: number;
  description: string;
  descriptionEn?: string;
  logo: string;
  website: string;
}

/**
 * 컨설팅 방법론 단계 타입 정의
 */
export interface MethodologyStep {
  step: string | number;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  phase?: string;
  phaseEn?: string;
  keyPoint?: string;
  keyPointEn?: string;
  output?: string;
  outputEn?: string;
}

/**
 * 날짜 포맷팅 유틸리티
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
