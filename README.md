# YDCT Homepage | YDCT 홈페이지

> 와이디씨티(YDCT) 공식 홈페이지 - AI/DX 컨설팅 전문 기업  
> Official website for YDCT - AI/DX Consulting Specialist

[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)](https://tailwindcss.com/)

---

## 📖 소개 | Introduction

### 한글
YDCT 홈페이지는 AI/DX 컨설팅 전문 기업의 비즈니스를 소개하고, 고객과의 소통을 위한 현대적인 웹 플랫폼입니다. 한글과 영어 다국어 지원을 통해 글로벌 고객에게 서비스를 제공합니다.

**주요 특징:**
- 🌐 **다국어 지원**: 한글/영어 실시간 전환
- 🎨 **현대적 UI/UX**: shadcn/ui 기반 세련된 디자인
- ⚡ **고성능**: Vite 기반 빠른 로딩 속도
- 📱 **반응형 디자인**: 모든 디바이스 최적화
- ♿ **접근성**: WCAG 2.1 준수

### English
YDCT Homepage is a modern web platform introducing AI/DX consulting services and facilitating customer communication. Supporting both Korean and English for global reach.

**Key Features:**
- 🌐 **Multilingual**: Real-time Korean/English switching
- 🎨 **Modern UI/UX**: Elegant design with shadcn/ui
- ⚡ **High Performance**: Fast loading with Vite
- 📱 **Responsive Design**: Optimized for all devices
- ♿ **Accessibility**: WCAG 2.1 compliant

---

## 🛠️ 기술 스택 | Tech Stack

### Frontend Core
- **React 18.3** - UI 라이브러리 | UI Library
- **TypeScript 5.6** - 타입 안정성 | Type Safety
- **Vite 6.0** - 빌드 도구 | Build Tool

### Styling
- **Tailwind CSS 3.4** - 유틸리티 CSS | Utility CSS
- **shadcn/ui** - UI 컴포넌트 | UI Components
- **Framer Motion** - 애니메이션 | Animations
- **Lucide React** - 아이콘 | Icons

### Routing & State
- **React Router DOM 7.1** - 라우팅 | Routing
- **Context API** - 다국어 상태 관리 | Language State

### Development Tools
- **ESLint** - 코드 품질 | Code Quality
- **TypeScript ESLint** - TS 린팅 | TS Linting
- **PostCSS** - CSS 처리 | CSS Processing

---

## 📁 프로젝트 구조 | Project Structure

```
YDCT_Homepage/
├── src/
│   ├── components/        # 재사용 컴포넌트 | Reusable Components
│   │   ├── ui/           # shadcn/ui 컴포넌트 | shadcn/ui Components
│   │   ├── Cards.tsx     # 카드 컴포넌트 | Card Components
│   │   └── Layout.tsx    # 레이아웃 컴포넌트 | Layout Component
│   ├── pages/            # 페이지 컴포넌트 | Page Components
│   │   ├── Home.tsx      # 홈 | Home
│   │   ├── About.tsx     # 회사소개 | About
│   │   ├── Business.tsx  # 사업영역 | Business
│   │   ├── Insights.tsx  # 인사이트 | Insights
│   │   ├── Contact.tsx   # 고객지원 | Contact
│   │   ├── Privacy.tsx   # 개인정보처리방침 | Privacy Policy
│   │   └── Sitemap.tsx   # 사이트맵 | Sitemap
│   ├── data/             # 데이터 관리 | Data Management
│   │   ├── index.ts      # 메인 데이터 | Main Data
│   │   ├── notices.ts    # 공지사항 | Notices
│   │   └── translations.ts # 번역 텍스트 | Translation Texts
│   ├── contexts/         # React Context | React Context
│   │   └── LanguageContext.tsx # 다국어 Context | Language Context
│   ├── hooks/            # Custom Hooks | Custom Hooks
│   ├── lib/              # 유틸리티 | Utilities
│   └── assets/           # 정적 파일 | Static Assets
├── public/               # 공개 파일 | Public Files
├── uploaded_files/       # 업로드 문서 | Uploaded Documents
└── supabase/            # Supabase 설정 | Supabase Config
```

---

## 🚀 시작하기 | Getting Started

### 사전 요구사항 | Prerequisites
```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### 설치 | Installation

```bash
# 저장소 클론 | Clone repository
git clone https://github.com/your-username/YDCT_Homepage.git

# 디렉토리 이동 | Navigate to directory
cd YDCT_Homepage

# 의존성 설치 | Install dependencies
npm install
```

### 개발 서버 실행 | Development

```bash
# 개발 서버 시작 (기본: http://localhost:5173)
# Start dev server (default: http://localhost:5173)
npm run dev

# 다른 포트로 실행 | Run on different port
npm run dev -- --port 8081
```

### 빌드 | Build

```bash
# 프로덕션 빌드 | Production build
npm run build

# 빌드 미리보기 | Preview build
npm run preview
```

### 코드 검사 | Linting

```bash
# ESLint 실행 | Run ESLint
npm run lint

# TypeScript 타입 체크 | TypeScript type check
npx tsc --noEmit -p tsconfig.app.json
```

---

## 🌐 다국어 지원 | Multilingual Support

### 구현 방식 | Implementation

다국어 기능은 React Context API를 통해 구현되어 있습니다.  
Multilingual functionality is implemented using React Context API.

```typescript
// 사용 예시 | Usage Example
import { useLanguage } from "@/contexts/LanguageContext";

function Component() {
  const { language, setLanguage, t, tr } = useLanguage();
  
  return (
    <div>
      {/* 번역 키 사용 | Use translation key */}
      <h1>{t("home.hero.title")}</h1>
      
      {/* 조건부 렌더링 | Conditional rendering */}
      <p>{language === "en" ? "Hello" : "안녕하세요"}</p>
    </div>
  );
}
```

### 번역 추가 방법 | Adding Translations

**src/data/translations.ts** 파일에서 번역을 추가할 수 있습니다.  
Add translations in **src/data/translations.ts** file.

```typescript
export const translations = {
  home: {
    hero: {
      title: {
        ko: "한글 제목",
        en: "English Title"
      }
    }
  }
};
```

---

## 📝 콘텐츠 관리 | Content Management

### 공지사항 추가 | Adding Notices

**src/data/notices.ts** 파일에서 공지사항을 관리합니다.  
Manage notices in **src/data/notices.ts** file.

```typescript
export const notices: Notice[] = [
  {
    id: 5, // 새 ID | New ID
    title: "공지 제목",
    titleEn: "Notice Title",
    date: "2026.02.16",
    category: "카테고리",
    categoryEn: "Category",
    excerpt: "요약",
    excerptEn: "Excerpt",
    content: "상세 내용",
    contentEn: "Detailed content"
  },
  // 기존 공지사항... | Existing notices...
];
```

### 프로젝트 데이터 수정 | Editing Project Data

**src/data/index.ts** 파일에서 회사 정보, 팀원, 프로젝트 데이터를 수정합니다.  
Edit company info, team members, and project data in **src/data/index.ts** file.

---

## 🎨 디자인 시스템 | Design System

### 테마 색상 | Theme Colors

Tailwind CSS 설정에서 브랜드 색상을 관리합니다.  
Brand colors are managed in Tailwind CSS configuration.

```css
/* src/index.css */
:root {
  --primary: 221 83% 53%;      /* 메인 색상 | Primary color */
  --secondary: 210 40% 96.1%;  /* 보조 색상 | Secondary color */
  --accent: 210 40% 96.1%;     /* 강조 색상 | Accent color */
}
```

### 컴포넌트 | Components

shadcn/ui 컴포넌트는 **src/components/ui/** 디렉토리에 있습니다.  
shadcn/ui components are located in **src/components/ui/** directory.

---

## 🔒 보안 | Security

### 환경 변수 | Environment Variables

민감한 정보는 환경 변수로 관리하세요.  
Manage sensitive information with environment variables.

```bash
# .env.local 파일 생성 | Create .env.local file
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

**.gitignore**에 다음이 포함되어 있는지 확인하세요:  
Ensure the following are in **.gitignore**:

```
.env
.env.local
.env.*.local
```

---

## 📦 배포 | Deployment

### Vercel (권장 | Recommended)

```bash
# Vercel CLI 설치 | Install Vercel CLI
npm i -g vercel

# 배포 | Deploy
vercel
```

### Netlify

```bash
# Netlify CLI 설치 | Install Netlify CLI
npm i -g netlify-cli

# 배포 | Deploy
netlify deploy --prod
```

### GitHub Pages

```bash
# gh-pages 설치 | Install gh-pages
npm install --save-dev gh-pages

# package.json에 추가 | Add to package.json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}

# 배포 | Deploy
npm run deploy
```

---

## 🤝 기여 | Contributing

기여를 환영합니다! Pull Request를 제출하기 전에:  
Contributions are welcome! Before submitting a Pull Request:

1. 코드 스타일 가이드를 준수하세요 | Follow code style guidelines
2. ESLint 검사를 통과하세요 | Pass ESLint checks
3. TypeScript 타입 에러가 없는지 확인하세요 | Ensure no TypeScript errors
4. 커밋 메시지는 명확하게 작성하세요 | Write clear commit messages

---

## 📄 라이선스 | License

이 프로젝트는 YDCT의 재산입니다.  
This project is property of YDCT.

---

## 📞 연락처 | Contact

**와이디씨티 (YDCT)**  
- 이메일 | Email: ydct2025@gmail.com
- 전화 | Phone: 010-1111-9429
- 주소 | Address: 서울특별시 강동구 성안로 13길 45-10, 402호

---

## 🙏 감사의 말 | Acknowledgments

이 프로젝트는 다음 오픈소스 프로젝트들을 사용합니다:  
This project uses the following open source projects:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

**Made with ❤️ by YDCT Team**
