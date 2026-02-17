/**
 * 공지사항 데이터 관리 파일
 * 새로운 공지사항을 추가하려면 이 파일에서 notices 배열에 항목을 추가하세요.
 */

export interface Notice {
  id: number;
  title: string;
  titleEn?: string;
  date: string; // YYYY.MM.DD 형식
  category: string;
  categoryEn?: string;
  excerpt: string; // 짧은 요약
  excerptEn?: string;
  content: string; // 상세 내용 (마크다운 포맷 가능)
  contentEn?: string;
}

/**
 * 공지사항 목록
 * 최신 공지사항을 배열 상단에 추가하세요.
 */
export const notices: Notice[] = [
  {
    id: 1,
    title: "[인사이트] 협력사 리스크 관리: Agentic Workflow 혁신 시나리오",
    titleEn: "[Insight] Supplier Risk Management: Agentic Workflow Innovation Scenario",
    date: "2026.01.23",
    category: "SCM & Procurement",
    categoryEn: "SCM & Procurement",
    excerpt: "사후 대응을 넘어 선제적 회복탄력성(Proactive Resilience)을 구현하는 자율 조달(Self-Healing Procurement) 시스템 분석",
    excerptEn: "Analysis of self-healing procurement systems implementing proactive resilience beyond reactive response",
    content: `2026년의 협력사 리스크 관리(SRM)는 사후 대응(Reactive)에서 선제적 회복탄력성(Proactive Resilience)으로 패러다임이 완전히 바뀝니다.

## 핵심 에이전트 역할

**Global Sentinel**: 실시간 상시 감시 (위성 데이터, 실시간 세관 기록, 글로벌 뉴스)
**Risk Impact Analyzer**: 영향도 수치화 (BOM 추적, 매출 손실 예측)
**Alternative Sourcer**: 대체선 자동 발굴 (GEO AI 최적화 검색)
**Negotiation Agent**: 자동 협상 및 제안 (LLM 기반 이메일/API 협상)

## 기대 효과

• 대응 시간: 수일 → 수분으로 단축
• 가시성: Tier-1 → Tier-N 심층 가시화
• 비용 절감: 리스크 관리 총 비용 30% 절감

## 추천 액션

1. 공급망 지식 그래프(Knowledge Graph) 구축
2. Reverse-GEO 전략으로 우수 협력사 유치
3. 에이전트 자율권(Autonomy) 등급 설정`,
    contentEn: `Supplier Risk Management (SRM) in 2026 has completely shifted from reactive response to proactive resilience.

## Key Agent Roles

**Global Sentinel**: Real-time continuous monitoring (satellite data, real-time customs records, global news)
**Risk Impact Analyzer**: Impact quantification (BOM tracking, revenue loss prediction)
**Alternative Sourcer**: Automatic alternative discovery (GEO AI optimized search)
**Negotiation Agent**: Automated negotiation and proposals (LLM-based email/API negotiation)

## Expected Benefits

• Response time: Days → Minutes reduction
• Visibility: Tier-1 → Tier-N deep transparency
• Cost reduction: 30% reduction in total risk management costs

## Recommended Actions

1. Build supply chain knowledge graph
2. Attract excellent partners with Reverse-GEO strategy
3. Set agent autonomy levels`
  },
  {
    id: 2,
    title: "[전략] SCM 수요예측: 지능형 에이전트 연합 체제 전환",
    titleEn: "[Strategy] SCM Demand Forecasting: Intelligent Agent Federation Transition",
    date: "2026.01.23",
    category: "SCM & Procurement",
    categoryEn: "SCM & Procurement",
    excerpt: "과거 통계 모델을 넘어 실시간 외부 변수를 감지하고 판단하는 '지능형 에이전트 연합' 수요예측 체제 분석",
    excerptEn: "Analysis of intelligent agent federation demand forecasting system that detects and evaluates real-time external variables beyond traditional statistical models",
    content: `2026년 SCM 수요예측은 과거의 통계적 모델을 넘어, 다양한 외부 변수를 실시간으로 감지하고 판단하는 지능형 에이전트 연합(Multi-Agent Federation) 체제로 전환됩니다.

## 에이전트별 역할

**Signal Scanning**: 외부 변수 감지 (소셜 트렌드, 뉴스, 기상, 경쟁사 가격)
**Data Synthesis**: 인과 관계 분석 (내부 ERP 실적 + 스캐닝 데이터)
**Scenario Simulation**: 시나리오 생성 (What-if 시뮬레이션)
**Orchestrator**: 실행 및 보고 (결과 취합 및 시스템 실행 명령)

## 협업 시나리오

북미 지역 갑작스러운 한파 발생 시:
1. Signal Scanner가 한파 경보와 소셜 미디어 데이터 포착
2. Data Synthesis가 수요 35% 증가 예측
3. Scenario Simulator가 최적 대응안 제시
4. Orchestrator가 승인 후 자동 실행

## 기대 효과

• 정확도: 예측 오차율(MAPE) 20% 이상 개선
• 속도: 분석-보고-실행 주기 7일 → 4시간 이내
• 전략화: 플래너의 단순 업무 90% 제거`,
    contentEn: `SCM demand forecasting in 2026 is transitioning from traditional statistical models to an intelligent multi-agent federation system that detects and evaluates various external variables in real-time.

## Agent Roles

**Signal Scanning**: External variable detection (social trends, news, weather, competitor pricing)
**Data Synthesis**: Causal relationship analysis (internal ERP performance + scanning data)
**Scenario Simulation**: Scenario generation (What-if simulation)
**Orchestrator**: Execution and reporting (result aggregation and system execution commands)

## Collaboration Scenario

During sudden cold wave in North America:
1. Signal Scanner detects cold wave alerts and social media data
2. Data Synthesis predicts 35% demand increase
3. Scenario Simulator presents optimal response plan
4. Orchestrator executes automatically after approval

## Expected Benefits

• Accuracy: 20%+ improvement in forecast error rate (MAPE)
• Speed: Analysis-report-execution cycle from 7 days → within 4 hours
• Strategy: 90% elimination of planners' routine tasks`
  },
  {
    id: 3,
    title: "[리포트] 2026 SCM & Procurement AI 혁신 방향",
    titleEn: "[Report] 2026 SCM & Procurement AI Innovation Directions",
    date: "2026.01.23",
    category: "SCM & Procurement",
    categoryEn: "SCM & Procurement",
    excerpt: "공급망 관리와 조달 시스템이 '반응형'에서 '자율 실행형' 엔진으로 진화하는 구체적 로드맵 분석",
    excerptEn: "Analysis of the specific roadmap for supply chain management and procurement systems evolving from reactive to autonomous execution engines",
    content: `2026년 기업들은 AI를 공급망 전체의 '연결된 가치 엔진(Connected Value Engine)'으로 통합하고 있습니다.

## 핵심 혁신 방향

### Agentic Workflow

단순 반복 업무를 넘어 복잡한 시나리오 대응을 위한 에이전트 도입
• 물류 지연 시 AI 에이전트가 대체 경로 자동 탐색 및 예약
• 대시보드 표시를 넘어 '준비된 실행 옵션' 제안

### GEO 및 가시성

공급망 엔티티화를 통한 AI 최적화
• Tier-1을 넘어 Tier-2, 3까지 E2E 투명성 확보
• 내부 조달 엔진이 최적 협력사를 빠르게 매칭

### Multimodal Personalization

비정형 데이터 활용 초개인화
• 현장 사진 분석으로 품질 이슈 실시간 감지
• AI 생성 개인화 영상으로 의사결정 속도 40% 단축

## 추천 액션

• 데이터 파이프라인: 미션 크리티컬한 '신호' 처리 표준화
• 시스템 아키텍처: 에이전트 협업용 '중간 조정 레이어' 설계
• 조직 역량: Scenario Design 교육 및 직무 재설계
• 리스크 관리: AI 환각(Hallucination) 모니터링 가드레일 구축`,
    contentEn: `In 2026, companies are integrating AI as a Connected Value Engine across the entire supply chain.

## Key Innovation Directions

### Agentic Workflow

Introducing agents to handle complex scenarios beyond repetitive tasks
• AI agents automatically search and book alternative routes during logistics delays
• Propose 'ready execution options' beyond dashboard displays

### GEO and Visibility

AI optimization through supply chain entity transformation
• E2E transparency beyond Tier-1 to Tier-2 and 3
• Internal procurement engine rapidly matches optimal partners

### Multimodal Personalization

Hyper-personalization using unstructured data
• Real-time quality issue detection through on-site photo analysis
• 40% faster decision-making with AI-generated personalized videos

## Recommended Actions

• Data pipeline: Standardize mission-critical 'signal' processing
• System architecture: Design 'intermediate coordination layer' for agent collaboration
• Organizational capability: Scenario Design training and job redesign
• Risk management: Build AI hallucination monitoring guardrails`
  },
  {
    id: 4,
    title: "[보고서] 2026 AI 전환 비즈니스 모델 분석",
    titleEn: "[Report] 2026 AI Transformation Business Model Analysis",
    date: "2026.01.21",
    category: "AX/DX Strategy",
    categoryEn: "AX/DX Strategy",
    excerpt: "AI 비즈니스의 패러다임이 'Assist'에서 'Act'로 이동함에 따른 에이전틱 워크플로우와 GEO 전략 분석",
    excerptEn: "Analysis of agentic workflows and GEO strategies as AI business paradigm shifts from 'Assist' to 'Act'",
    content: `2026년의 AI 비즈니스는 '도움(Assist)'에서 '대행(Act)'으로 패러다임이 완전히 이동했습니다.

## 핵심 동력

### Agentic Workflows

목표를 부여받으면 스스로 하위 과제를 설계하고 실행
• Multi-Agent Orchestration: 특화된 에이전트들의 협업
• Digital Assembly Lines: G2000 기업 업무의 40%가 자율 처리
• Outcome-based 서비스: 결과 중심형 에이전트 서비스로 전환

### GEO (Generative Engine Optimization)

AI 검색 시대의 생존 전략
• Machine-Readable Content: AI가 인용하기 좋은 구조화 데이터
• Agent Intermediated Buying: B2B 구매 결정의 90%가 AI 중개
• 브랜드를 'Entity' 중심으로 재정의

### Multimodal Personalization

초개인화 인터페이스
• Continuous Perception: 0.2초 내 감정 변화 감지
• Hyper-Contextualization: 스케치를 즉시 아키텍처로 변환
• 맞춤형 페르소나 에이전트 제공

## 기대 효과

• 운영 효율: 업무 처리 시간 70% 단축
• 시장 점유: B2B 리드 획득률 2배 증가
• 고객 경험: LTV(고객 생애 가치) 향상

## 추천 액션

1. MCP(Model Context Protocol) 표준 프로토콜 도입
2. AI 친화적 지식 그래프 구축
3. 성과/사용량 기반 수익 모델 검토`,
    contentEn: `AI business in 2026 has completely shifted from 'Assist' to 'Act' paradigm.

## Core Drivers

### Agentic Workflows

Design and execute sub-tasks autonomously when given goals
• Multi-Agent Orchestration: Collaboration of specialized agents
• Digital Assembly Lines: 40% of G2000 enterprise tasks handled autonomously
• Outcome-based services: Transition to result-oriented agent services

### GEO (Generative Engine Optimization)

Survival strategy in the AI search era
• Machine-Readable Content: Structured data optimized for AI citation
• Agent Intermediated Buying: 90% of B2B purchase decisions AI-mediated
• Redefine brands around 'Entity' framework

### Multimodal Personalization

Hyper-personalized interfaces
• Continuous Perception: Detect emotional changes within 0.2 seconds
• Hyper-Contextualization: Instantly convert sketches to architecture
• Provide customized persona agents

## Expected Benefits

• Operational efficiency: 70% reduction in task processing time
• Market share: 2x increase in B2B lead acquisition rate
• Customer experience: Enhanced LTV (customer lifetime value)

## Recommended Actions

1. Adopt MCP (Model Context Protocol) standard
2. Build AI-friendly knowledge graph
3. Review performance/usage-based revenue models`
  },
];

/**
 * 공지사항 추가 가이드:
 * 
 * 1. 새 공지사항을 배열 최상단에 추가 (최신순 정렬)
 * 2. id는 기존 최대값 + 1로 설정
 * 3. date는 "YYYY.MM.DD" 형식으로 작성
 * 4. category는 기존 카테고리 사용 권장:
 *    - "SCM & Procurement"
 *    - "AX/DX Strategy"
 *    - "IT Consulting"
 *    - "Cloud & Infrastructure"
 * 5. excerpt는 1-2문장으로 핵심 요약
 * 6. content는 마크다운 형식으로 상세 내용 작성
 * 
 * 예시:
 * {
 *   id: 5,
 *   title: "[새 공지] 제목",
 *   date: "2026.02.16",
 *   category: "IT Consulting",
 *   excerpt: "짧은 요약 설명",
 *   content: `상세 내용을 여기에 작성...`
 * }
 */
