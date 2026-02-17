import { motion } from "framer-motion";
import { Shield, Mail, Phone, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Privacy() {
  const { language } = useLanguage();
  
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Privacy Policy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === "en" ? "Privacy Policy" : "개인정보처리방침"}
            </h1>
            <p className="text-muted-foreground text-lg">
              {language === "en" ? "Effective Date: January 1, 2026" : "제정일: 2026년 01월 01일"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 개인정보보호책임자 */}
            <div className="mb-12 p-6 bg-muted/30 rounded-xl border border-border">
              <h3 className="text-lg font-bold mb-4">
                {language === "en" ? "Data Protection Officer" : "개인정보보호책임자"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium text-muted-foreground">
                    {language === "en" ? "Name" : "성명"}
                  </span>
                  <p className="font-semibold mt-1">서영득</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    {language === "en" ? "Position" : "직책"}
                  </span>
                  <p className="font-semibold mt-1">CEO</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">
                    {language === "en" ? "Contact" : "연락처"}
                  </span>
                  <p className="font-semibold mt-1">
                    <a href="mailto:ydct2025@gmail.com" className="text-primary hover:underline">
                      ydct2025@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 서문 */}
            <div className="prose prose-slate max-w-none mb-12">
              <p className="text-muted-foreground leading-relaxed">
                {language === "en" 
                  ? "YDCT (hereinafter 'the Company') complies with the Personal Information Protection Act and related laws to legally process and securely manage personal information for the protection of data subjects' freedom and rights. In accordance with Article 30 of the Personal Information Protection Act, we establish and disclose this Privacy Policy to protect customer personal information and promptly and smoothly handle related grievances."
                  : "와이디씨티(이하 '회사')은 정보주체의 자유와 권리 보호를 위해 개인정보 보호법 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 개인정보 보호법 제30조에 따라 고객의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다."}
              </p>
            </div>

            {/* 목차 */}
            <div className="mb-12 p-6 bg-background border border-border rounded-xl">
              <h3 className="text-lg font-bold mb-4">
                {language === "en" ? "Table of Contents" : "목차"}
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#section1" className="text-primary hover:underline">
                  {language === "en" 
                    ? "Article 1: Purpose of Processing, Items Collected, and Retention Period" 
                    : "제1조 개인정보의 처리목적, 수집 항목, 보유 및 이용기간"}
                </a></li>
                <li><a href="#section2" className="text-primary hover:underline">
                  {language === "en" 
                    ? "Article 2: Provision of Personal Information to Third Parties" 
                    : "제2조 개인정보의 제3자 제공에 관한 사항"}
                </a></li>
                <li><a href="#section3" className="text-primary hover:underline">
                  {language === "en" 
                    ? "Article 3: Consignment of Personal Information Processing" 
                    : "제3조 개인정보 처리의 위탁에 관한 사항"}
                </a></li>
                <li><a href="#section4" className="text-primary hover:underline">
                  {language === "en" 
                    ? "Article 4: Procedures and Methods for Destroying Personal Information" 
                    : "제4조 개인정보의 파기 절차 및 방법"}
                </a></li>
                <li><a href="#section5" className="text-primary hover:underline">
                  {language === "en" 
                    ? "Article 5: Rights and Obligations of Data Subjects and Legal Representatives" 
                    : "제5조 정보주체와 법정대리인의 권리·의무 및 행사방법에 관한 사항"}
                </a></li>
                <li><a href="#section6" className="text-primary hover:underline">
                  {language === "en" 
                    ? "Article 6: Measures to Ensure Security of Personal Information" 
                    : "제6조 개인정보의 안전성 확보조치에 관한 사항"}
                </a></li>
                <li><a href="#section7" className="text-primary hover:underline">
                  {language === "en" 
                    ? "Article 7: Data Protection Officer and Privacy Inquiry Department" 
                    : "제7조 개인정보 보호책임자 및 열람청구를 접수·처리하는 부서"}
                </a></li>
                <li><a href="#section8" className="text-primary hover:underline">
                  {language === "en" 
                    ? "Article 8: Remedies for Rights Infringement" 
                    : "제8조 권익침해 구제방법"}
                </a></li>
                <li><a href="#section9" className="text-primary hover:underline">
                  {language === "en" 
                    ? "Article 9: Changes to Privacy Policy" 
                    : "제9조 개인정보 처리방침의 변경"}
                </a></li>
              </ul>
            </div>

            {/* 제1조 */}
            <div id="section1" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-border">
                {language === "en" 
                  ? "Article 1: Purpose of Processing, Items Collected, and Retention Period" 
                  : "제1조 개인정보의 처리목적, 수집 항목, 보유 및 이용기간"}
              </h2>
              <p className="mb-6 text-muted-foreground">1. 회사는 다음과 같이 정보주체의 개인정보를 처리합니다.</p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border border-border text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border px-4 py-3 text-left font-semibold">구분</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold">처리목적</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold">수집항목</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold">보유 및 이용기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-4 py-3">서비스 이용 시</td>
                      <td className="border border-border px-4 py-3">회원가입 의사 확인, 회원자격 유지 및 관리, 서비스 제공</td>
                      <td className="border border-border px-4 py-3">
                        · 필수항목: 이름, 이메일, HP번호<br />
                        · 선택항목: 전화번호, FAX번호
                      </td>
                      <td className="border border-border px-4 py-3">서비스 해지 시까지</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-4 text-muted-foreground">2. 서비스 이용과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.</p>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-1">
                <li>접속 로그, 접속 IP 정보, 쿠키, 서비스 이용 기록 등</li>
              </ul>

              <p className="mb-4 text-muted-foreground">3. 관계법령이 규정에 의하여 보존할 필요가 있는 경우 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보유합니다.</p>
              <div className="overflow-x-auto">
                <table className="w-full border border-border text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border px-4 py-3 text-left font-semibold">구분</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold">보유근거</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold">보유 및 이용기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-4 py-3">계약 또는 청약철회 등에 관한 기록</td>
                      <td className="border border-border px-4 py-3">전자상거래 등에서의 소비자 보호에 관한 법률</td>
                      <td className="border border-border px-4 py-3">5년</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3">대금결제 및 재화 등의 공급에 관한 기록</td>
                      <td className="border border-border px-4 py-3">전자상거래 등에서의 소비자 보호에 관한 법률</td>
                      <td className="border border-border px-4 py-3">5년</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3">소비자 불만 또는 분쟁처리에 관한 기록</td>
                      <td className="border border-border px-4 py-3">전자상거래 등에서의 소비자 보호에 관한 법률</td>
                      <td className="border border-border px-4 py-3">3년</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3">표시·광고에 관한 기록</td>
                      <td className="border border-border px-4 py-3">전자상거래 등에서의 소비자 보호에 관한 법률</td>
                      <td className="border border-border px-4 py-3">6개월</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3">방문에 관한 기록</td>
                      <td className="border border-border px-4 py-3">통신비밀보호법</td>
                      <td className="border border-border px-4 py-3">3개월</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 제2조 */}
            <div id="section2" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-border">
                {language === "en" 
                  ? "Article 2: Provision of Personal Information to Third Parties" 
                  : "제2조 개인정보의 제3자 제공에 관한 사항"}
              </h2>
              <p className="mb-4 text-muted-foreground">
                1. 회사는 개인정보를 제1조(개인정보의 처리목적, 수집 항목, 보유 및 이용기간)에서 명시한 범위 내에서만 처리하며, 
                정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
              </p>
              <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
                <li>정보주체로부터 별도의 동의를 받은 경우</li>
                <li>법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우</li>
                <li>통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서 특정 개인을 알아볼 수 없는 형태로 개인정보를 제공하는 경우</li>
                <li>범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우</li>
                <li>법원의 재판업무 수행을 위하여 필요한 경우</li>
              </ul>

              <p className="mb-4 text-muted-foreground font-semibold">2. 제3자의 요청 시 대응 및 제공하는 절차</p>
              <div className="overflow-x-auto">
                <table className="w-full border border-border text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border px-4 py-3 text-left font-semibold">절차</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold">주요 내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-4 py-3 font-medium">법적근거 검토</td>
                      <td className="border border-border px-4 py-3">개인정보보호책임자 및 담당자, 업무관계 등과 목적 외 이용·제3자 제공이 가능한지 법적근거 검토 실시</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3 font-medium">동의절차 이행</td>
                      <td className="border border-border px-4 py-3">법적근거가 없는 경우에는 해당 개인정보취급자가 정보주체로부터 별도의 동의를 받음</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3 font-medium">대장 기록·관리</td>
                      <td className="border border-border px-4 py-3">개인정보 담당자는 '개인정보의 목적 외 이용 및 제3자 제공 대장'을 기록·관리</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3 font-medium">주요 내용 공개</td>
                      <td className="border border-border px-4 py-3">30일 이내에 와이디씨티 홈페이지에 게재</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3 font-medium">보호조치 요구</td>
                      <td className="border border-border px-4 py-3">제3자 제공시에는 이용목적, 이용방법, 이용기간, 이용형태 등을 제한하거나, 개인정보의 안전성 확보를 위하여 필요한 조치를 마련하도록 문서로 요청</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3 font-medium">조치결과 제출</td>
                      <td className="border border-border px-4 py-3">안전성 확보조치 요청을 받는 자는 그에 따른 조치를 취한 후 결과를 개인정보 담당자에게 문서로 전달</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 제3조 */}
            <div id="section3" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-border">
                {language === "en" 
                  ? "Article 3: Consignment of Personal Information Processing" 
                  : "제3조 개인정보 처리의 위탁에 관한 사항"}
              </h2>
              <p className="mb-4 text-muted-foreground">회사는 서비스 제공을 위해 아래와 같이 개인정보 처리 업무를 외부 업체에게 위탁하여 운영하고 있습니다.</p>
              
              <div className="p-6 bg-muted/30 rounded-xl border border-border">
                <h4 className="font-bold mb-3">[SMS 발송]</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 위탁 받는 자(수탁자): 네이버클라우드 주식회사</li>
                  <li>• 위탁하는 업무의 내용: 문자메시지(SMS/LMS/MMS) 발송</li>
                  <li>• 위탁기간: 수탁기관 수탁관리</li>
                </ul>
              </div>
            </div>

            {/* 제4조 */}
            <div id="section4" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-border">
                {language === "en" 
                  ? "Article 4: Procedures and Methods for Destroying Personal Information" 
                  : "제4조 개인정보의 파기 절차 및 방법"}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  1. 회사는 개인정보(개인위치정보 포함) 보유기간의 경과, 처리목적 달성 등 개인정보(개인위치정보 포함)가 불필요하게 되었을 때에는 
                  지체없이 해당 개인정보(개인위치정보 포함)를 파기합니다.
                </p>
                <p>
                  2. 정보주체로부터 동의 받은 개인정보(개인위치정보 포함) 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 
                  다른 법령에 따라 개인정보(개인위치정보 포함)를 계속 보존하여야 하는 경우에는, 해당 개인정보(개인위치정보 포함)를 
                  별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
                </p>
                <p>3. 개인정보(개인위치정보 포함) 파기의 절차 및 방법은 다음과 같습니다.</p>
                <ul className="list-none space-y-2 ml-4">
                  <li>
                    ① 파기절차: 회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
                  </li>
                  <li>
                    ② 파기방법: 회사는 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 사회통념상 현재의 기술 수준에서 
                    적절한 비용이 소요되는 '복원 불가능한 방법'을 적용하여 파기하며, 종이 문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.
                  </li>
                </ul>
              </div>
            </div>

            {/* 제5조 */}
            <div id="section5" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-border">
                {language === "en" 
                  ? "Article 5: Rights and Obligations of Data Subjects and Legal Representatives" 
                  : "제5조 정보주체와 법정대리인의 권리·의무 및 행사방법에 관한 사항"}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="mb-2">1. 정보주체는 회사에 대해 언제든지 다음 각호의 개인정보보호 관련 권리를 행사할 수 있습니다.</p>
                  <ul className="list-none space-y-1 ml-4">
                    <li>① 개인정보 열람 요구</li>
                    <li>② 오류 등이 있을 경우 정정 요구</li>
                    <li>③ 삭제요구</li>
                    <li>④ 처리정지 요구</li>
                  </ul>
                </div>
                <p>
                  2. 권리 행사는 회사에 대해 개인정보 보호법 시행령 제41조 제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, 
                  회사는 이에 대해 지체없이 조치하겠습니다.
                </p>
                <p>
                  3. 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수도 있습니다. 
                  이 경우 개인정보 처리 방법에 관한 고시(제2020-7호) 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
                </p>
                <p>
                  4. 개인정보 열람 및 처리정지 요구는 개인정보 보호법 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한될 수 있습니다.
                </p>
                <p>
                  5. 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
                </p>
                <p>
                  6. 회사는 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
                </p>
              </div>
            </div>

            {/* 제6조 */}
            <div id="section6" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-border">
                {language === "en" 
                  ? "Article 6: Measures to Ensure Security of Personal Information" 
                  : "제6조 개인정보의 안전성 확보조치에 관한 사항"}
              </h2>
              <p className="mb-6 text-muted-foreground">회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-2">1. 정기적인 자체 감사 실시</h4>
                  <p className="text-muted-foreground">개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">2. 개인정보 취급 직원의 최소화 및 교육</h4>
                  <p className="text-muted-foreground">개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화하여 개인정보를 관리하는 대책을 시행하고 있습니다.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">3. 내부관리계획의 수립 및 시행</h4>
                  <p className="text-muted-foreground">개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">4. 해킹 등에 대비한 기술적 대책</h4>
                  <p className="text-muted-foreground">
                    회사는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 
                    외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">5. 개인정보의 암호화</h4>
                  <p className="text-muted-foreground">
                    이용자의 개인정보는 비밀번호는 암호화되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 
                    암호화하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">6. 접속기록의 보관 및 위변조 방지</h4>
                  <p className="text-muted-foreground">
                    개인정보처리시스템에 접속한 기록을 최소 1년 이상 보관, 관리하고 있으며, 다만, 5만명 이상의 정보주체에 관하여 개인정보를 추가하거나, 
                    고유식별정보 또는 민감정보를 처리하는 경우에는 2년이상 보관, 관리하고 있습니다. 또한, 접속기록이 위변조 및 도난, 분실되지 않도록 보안기능을 사용하고 있습니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">7. 개인정보에 대한 접근 제한</h4>
                  <p className="text-muted-foreground">
                    개인정보를 처리하는 데이터베이스 시스템에 대한 접근권한의 부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 
                    침입차단 시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">8. 문서보안을 위한 잠금장치 사용</h4>
                  <p className="text-muted-foreground">개인정보가 포함된 서류, 보조저장매체 등을 잠금 장치가 있는 안전한 장소에 보관하고 있습니다.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">9. 비인가자에 대한 출입 통제</h4>
                  <p className="text-muted-foreground">개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.</p>
                </div>
              </div>
            </div>

            {/* 제7조 */}
            <div id="section7" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-border">
                {language === "en" 
                  ? "Article 7: Data Protection Officer and Privacy Inquiry Department" 
                  : "제7조 개인정보 보호책임자 및 열람청구를 접수·처리하는 부서"}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  1. 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 
                  아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <p>
                  2. 정보주체는 회사의 서비스(또는 사업)를 이용하시면서 발생한 모든 개인정보보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 
                  개인정보 보호책임자 및 담당부서로 문의할 수 있습니다. 회사는 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.
                </p>
                <p>
                  3. 정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 
                  회사는 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.
                </p>
              </div>
              
              <div className="mt-6 p-6 bg-muted/30 rounded-xl border border-border">
                <h4 className="font-bold mb-4">개인정보보호책임자</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-muted-foreground">성명</span>
                    <p className="font-semibold mt-1">서영득</p>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">직책</span>
                    <p className="font-semibold mt-1">CEO</p>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">연락처</span>
                    <p className="font-semibold mt-1">
                      <a href="mailto:ydct2025@gmail.com" className="text-primary hover:underline">
                        ydct2025@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 제8조 */}
            <div id="section8" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-border">
                {language === "en" 
                  ? "Article 8: Remedies for Rights Infringement" 
                  : "제8조 권익침해 구제방법"}
              </h2>
              <p className="mb-6 text-muted-foreground">
                정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 
                분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-border text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border px-4 py-3 text-left font-semibold">기관</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold">홈페이지</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold">전화번호</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-4 py-3">개인정보분쟁조정위원회</td>
                      <td className="border border-border px-4 py-3">
                        <a href="https://www.kopico.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          www.kopico.go.kr
                        </a>
                      </td>
                      <td className="border border-border px-4 py-3">(국번없이) 1833-6972</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3">개인정보침해신고센터</td>
                      <td className="border border-border px-4 py-3">
                        <a href="https://privacy.kisa.or.kr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          privacy.kisa.or.kr
                        </a>
                      </td>
                      <td className="border border-border px-4 py-3">(국번없이) 118</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3">대검찰청</td>
                      <td className="border border-border px-4 py-3">
                        <a href="https://www.spo.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          www.spo.go.kr
                        </a>
                      </td>
                      <td className="border border-border px-4 py-3">(국번없이) 1301</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-3">경찰청</td>
                      <td className="border border-border px-4 py-3">
                        <a href="https://ecrm.cyber.go.kr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          ecrm.cyber.go.kr
                        </a>
                      </td>
                      <td className="border border-border px-4 py-3">(국번없이) 182</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 제9조 */}
            <div id="section9" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-border">
                {language === "en" 
                  ? "Article 9: Enforcement and Changes to Privacy Policy" 
                  : "제9조 개인정보 처리방침 시행 및 변경"}
              </h2>
              <p className="text-muted-foreground">
                {language === "en" 
                  ? "This Privacy Policy is effective from January 1, 2026." 
                  : "이 개인정보 처리방침은 2026. 01. 01.부터 적용됩니다."}
              </p>
            </div>

            {/* 하단 안내 */}
            <div className="mt-16 p-8 bg-primary/5 rounded-xl border border-primary/20 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">
                {language === "en" ? "Privacy Inquiries" : "개인정보 관련 문의"}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === "en" 
                  ? "If you have any questions about our privacy policy or complaints related to personal information protection, please contact us below."
                  : "개인정보 처리방침에 대한 문의사항이나 개인정보 보호 관련 불만이 있으시면 아래로 연락 주시기 바랍니다."}
              </p>
              <div className="flex flex-col items-center gap-2">
                <a 
                  href="mailto:ydct2025@gmail.com" 
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  ydct2025@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
