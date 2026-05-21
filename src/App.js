import React, { useState } from "react";


const PROFILE = {
  name: "Bolaji Adeeko",
  title: "Epic Security Analyst | Business Operations Engineer",
  email: "badeeko93@gmail.com",
  phone: "(201) 888-0950",
  location: "Lithia Springs, GA 30122",
  linkedin: "linkedin.com/in/bolaji-adeeko-696b79188",
};

const SECTIONS = [
  { id: "resume", label: "My Resumes", icon: "📄" },
  { id: "roles", label: "Target Roles", icon: "🎯" },
  { id: "cover", label: "Cover Letter", icon: "✉️" },
  { id: "interview", label: "Interview Prep", icon: "🎤" },
  { id: "outreach", label: "Outreach Templates", icon: "🔗" },
  { id: "tracker", label: "Job Tracker", icon: "📊" },
];

const RESUMES = [
  {
    id: "master",
    label: "Master Resume",
    desc: "Complete, comprehensive document. All roles, all 13 Go-Lives, full skills inventory. Use as your source of truth.",
    tag: "All Roles",
    tagColor: "#c9a84c",
    filename: "Bolaji_Adeeko_Master_Resume.docx",
    icon: "⭐",
    keywords: ["Epic Security", "IAM", "Business Operations", "ClinDoc", "Cadence", "Ambulatory", "SharePoint", "Azure"],
  },
  {
    id: "bigtech",
    label: "Variant 1 — Big Tech / Google",
    desc: "Repositioned as a Technical Program Manager / Business Operations Engineer. Language shifted to program management, operational excellence, systems integration, and Agile delivery.",
    tag: "Tech & Operations",
    tagColor: "#4a9eff",
    filename: "Bolaji_Adeeko_Resume_BigTech.docx",
    icon: "💻",
    keywords: ["Program Management", "Operational Excellence", "Systems Integration", "Agile", "Process Optimization", "Enterprise Systems", "Stakeholder Management"],
  },
  {
    id: "health",
    label: "Variant 2 — Healthcare Informatics",
    desc: "Leads with Epic certifications and clinical depth. Every bullet emphasizes clinical workflow, provider onboarding, EHR/EMR, HIPAA, and informatics. Includes full 13-site Go-Live list.",
    tag: "Healthcare IT",
    tagColor: "#10b981",
    filename: "Bolaji_Adeeko_Resume_HealthcareInformatics.docx",
    icon: "🏥",
    keywords: ["Epic", "Clinical Informatics", "EMR/EHR", "Healthcare Operations", "HIPAA", "Workflow Optimization", "Access Management"],
  },
  {
    id: "data",
    label: "Variant 3 — Data & Analytics",
    desc: "Reframes as a Data & Analytics Engineer. Leads with SQL, dashboard automation, data governance, and BI. Targets analyst/engineer roles in healthcare and enterprise.",
    tag: "Data & Analytics",
    tagColor: "#8b5cf6",
    filename: "Bolaji_Adeeko_Resume_DataAnalytics.docx",
    icon: "📊",
    keywords: ["SQL", "Dashboard Development", "Data Integrity", "BI", "Analytics", "Data Governance", "Automation", "Reporting"],
  },
];



const TARGET_ROLES = [
  {
    title: "Epic Security Analyst",
    level: "Mid–Senior",
    salary: "$95K–$130K",
    fit: "★★★★★",
    companies: ["Epic Systems", "Novant Health", "Kaiser Permanente", "Intermountain Health", "CommonSpirit Health", "Ascension"],
    boards: ["Epic UserWeb Jobs", "Health eCareers", "LinkedIn", "Indeed Healthcare IT"],
    keywords: ["Epic Security", "RBAC", "IAM", "Provisioning", "HIPAA", "Community Connect", "EHR Security"],
    notes: "Your strongest positioning. 7+ years direct experience + 13 Go-Live sites is elite for this role.",
  },
  {
    title: "IAM Engineer (Healthcare)",
    level: "Mid–Senior",
    salary: "$100K–$140K",
    fit: "★★★★☆",
    companies: ["Optum", "CVS Health", "HCA Healthcare", "Sutter Health", "Accenture Health"],
    boards: ["LinkedIn", "Dice", "Glassdoor"],
    keywords: ["Identity Access Management", "Active Directory", "Provisioning", "Role-based Access Control", "Zero Trust", "HIPAA", "SailPoint", "Okta"],
    notes: "Strong fit. Consider adding Okta/SailPoint cert to accelerate placement in this track.",
  },
  {
    title: "Epic Implementation Consultant",
    level: "Senior",
    salary: "$110K–$160K",
    fit: "★★★★☆",
    companies: ["Nordic Consulting", "Guidehouse", "Optimum Healthcare IT", "Tegria", "Leidos Health"],
    boards: ["LinkedIn", "Health eCareers", "Consulting firm career pages"],
    keywords: ["Epic Go-Live", "Activation Specialist", "ClinDoc", "Ambulatory", "Cadence", "Workflow Optimization", "EHR Implementation"],
    notes: "13 Go-Lives is premium. Consulting firms pay well — target Nordic, Guidehouse, Optimum.",
  },
  {
    title: "Business Systems Analyst – Healthcare IT",
    level: "Mid–Senior",
    salary: "$85K–$120K",
    fit: "★★★★☆",
    companies: ["UnitedHealth Group", "Cigna", "Humana", "Banner Health", "Providence Health"],
    boards: ["LinkedIn", "Indeed", "Monster"],
    keywords: ["Business Analysis", "EHR", "Workflow Optimization", "Stakeholder Management", "Data Dictionary", "SOP Development", "Epic"],
    notes: "Broader market, more openings. Strong crossover from your Novant BizOps role.",
  },
  {
    title: "SharePoint / M365 Engineer",
    level: "Mid",
    salary: "$90K–$115K",
    fit: "★★★☆☆",
    companies: ["Microsoft Partners", "Deloitte", "SAIC", "Booz Allen Hamilton"],
    boards: ["Dice", "LinkedIn", "ClearanceJobs (if open to gov)"],
    keywords: ["SharePoint", "Power Automate", "Microsoft 365", "Azure", "REST API", "PowerShell"],
    notes: "Secondary track — pursue if healthcare IT market is slow. Your 3yr Quotum experience is solid.",
  },
];

const COVER_TEMPLATES = {
  epic_security: `Dear Hiring Manager,

I am writing to express my strong interest in the Epic Security Analyst role at [Company Name]. With over seven years of hands-on experience managing Epic security, provisioning, and access governance across 40+ healthcare facilities, I am confident in my ability to deliver immediate value to your team.

In my most recent role at Novant Health Enterprises, I was responsible for the full lifecycle of provider and clinical staff access management across Community Connect environments — from role-based access configuration to Active Directory provisioning and HIPAA compliance oversight. I supported over 500 users across 40 locations while simultaneously automating data integration workflows that eliminated manual dashboard processes for stakeholders including Mental Health Programs leadership.

What sets me apart is my direct activation experience across 13 major Go-Live events — including Mount Sinai, VCU Health, and Hartford Healthcare — where I configured and validated Epic Ambulatory, Cadence, and ClinDoc environments under live operational conditions. This background means I understand not just the security architecture, but how clinical workflows drive access requirements.

I hold an Epic Security Analyst certification (#453695487) along with PMP and Scrum Master credentials. I am eager to bring my expertise to [Company Name] and contribute to your mission of delivering secure, compliant, and efficient Epic environments.

Thank you for your consideration. I look forward to discussing how my background aligns with your needs.

Sincerely,
Bolaji Adeeko
(201) 888-0950 | badeeko93@gmail.com`,

  iam: `Dear Hiring Manager,

I am applying for the IAM Engineer position at [Company Name]. My background spans seven-plus years of identity and access management work within complex healthcare and enterprise environments, with a consistent focus on provisioning, RBAC, and compliance.

At Novant Health Enterprises, I managed access governance for 500+ providers and clinical staff across 40 facilities — building Active Directory groups, enforcing least-privilege principles, and ensuring audit-ready compliance with HIPAA and organizational security policies. At Tezza Business Solutions, I served as an IAM Engineer supporting enterprise clients with identity lifecycle management, automated provisioning workflows, and access certification processes.

I am particularly drawn to [Company Name] because [ADD SPECIFIC REASON]. I believe my combination of technical depth, compliance expertise, and cross-functional collaboration experience positions me to make an immediate contribution.

I would welcome the opportunity to speak further about this role.

Best regards,
Bolaji Adeeko
(201) 888-0950 | badeeko93@gmail.com`,

  consulting: `Dear Hiring Manager,

I am excited to apply for the Epic Implementation Consultant role at [Firm Name]. Having participated in 13 Epic Go-Live activations across major health systems — including Mount Sinai, VCU Health, Hartford Healthcare, and University Hospitals — I bring the rare combination of deep technical configuration expertise and proven activation execution that consulting engagements demand.

My experience spans Epic Ambulatory, Cadence, ClinDoc, and Security modules. I have configured clinical workflows, managed provider onboarding, designed role-based access frameworks, and delivered end-user training under the high-pressure conditions of live activations. At Novant Health, I extended this capability into long-term optimization work — building SOPs, automating data workflows, and partnering with senior stakeholders to align system capabilities with organizational strategy.

[Firm Name]'s focus on [client outcome/mission] aligns directly with how I approach Epic work — as a bridge between technical systems and clinical realities. I am ready to deploy immediately on client engagements and bring a track record that speaks for itself.

I welcome the chance to connect.

Bolaji Adeeko
(201) 888-0950 | badeeko93@gmail.com`,
};

const INTERVIEW_QA = [
  {
    category: "Behavioral",
    q: "Tell me about a time you managed a complex Epic access issue under pressure.",
    star: {
      S: "During a Go-Live activation at Mount Sinai, a critical configuration error prevented 50+ providers from accessing ClinDoc at launch.",
      T: "I needed to identify the root cause, restore access, and prevent downstream clinical disruption — all within a 2-hour window.",
      A: "I audited the role templates, identified a misconfigured security class tied to provider type, corrected it in the test environment, and coordinated with the build team to push the fix. Simultaneously communicated status to clinical leads to manage expectations.",
      R: "Access was restored within 90 minutes. The incident led to a new pre-Go-Live security validation checklist I authored that was adopted for all subsequent activations.",
    },
  },
  {
    category: "Technical",
    q: "How do you approach building role-based access in Epic for a new Community Connect facility?",
    star: {
      S: "When onboarding a new Community Connect site, the access model must reflect both Epic's standard template structure and the facility's unique clinical workflows.",
      T: "My goal is to configure access that meets least-privilege requirements while enabling clinical staff to do their jobs without workarounds.",
      A: "I start with a workflow discovery session with the facility's super users and clinical leads to map role types. Then I review existing Epic security classes for best-fit templates, customize where needed, test in the training environment, and document the final access matrix in our data dictionary.",
      R: "This process reduced post-Go-Live access tickets by consistently building right the first time, and created reusable templates that accelerated onboarding for each subsequent facility.",
    },
  },
  {
    category: "Behavioral",
    q: "Describe a situation where you had to align IT and clinical stakeholders on a competing priority.",
    star: {
      S: "At Novant, the Mental Health Programs team wanted dashboard access configurations that would have required security exceptions outside our standard access model.",
      T: "I needed to satisfy their reporting needs without creating audit exposure or HIPAA risk.",
      A: "I scheduled a working session, walked through the data access requirements in detail, and proposed an alternative: building aggregated views that surfaced the insights they needed without granting direct PHI access. I also looped in compliance to document the decision.",
      R: "MHP leadership accepted the solution. It became a model for how we handle similar cross-functional access requests.",
    },
  },
  {
    category: "Technical",
    q: "How do you ensure HIPAA compliance in Epic access management?",
    star: null,
    answer: "Enforce least-privilege via role-based access tied to job function, not individual requests. Conduct quarterly access reviews and revoke dormant accounts. Maintain audit logs in Epic and Active Directory. Require dual approval for elevated access. Document all access changes in the data dictionary with business justification. Train end users on appropriate access use. Align all configurations with the organization's HIPAA security officer guidelines.",
  },
  {
    category: "Behavioral",
    q: "Tell me about a time you improved a workflow or process.",
    star: {
      S: "Onboarding new providers across 40 Community Connect locations was taking 3–5 business days and generating frequent support tickets.",
      T: "I was tasked with reducing onboarding time and improving the experience for both HR and clinical staff.",
      A: "I mapped the end-to-end process, identified 4 manual handoff points, and built a standardized intake form connected to an automated Active Directory provisioning workflow. Also created an onboarding SOP and trained the team on the new process.",
      R: "Onboarding time dropped from 3–5 days to under 24 hours. Support ticket volume related to access delays fell significantly in the following quarter.",
    },
  },
];

const OUTREACH_TEMPLATES = {
  recruiter: `Hi [Recruiter Name],

I came across your profile while researching opportunities in healthcare IT / Epic. I'm a certified Epic Security Analyst with 7+ years of experience across Epic security, IAM, and Go-Live activations (13 sites including Mount Sinai and VCU Health).

I'm currently exploring new opportunities in [Epic Security / Healthcare IT / IAM] roles and would love to connect if you work with clients in this space.

Would you be open to a quick call this week?

Best,
Bolaji Adeeko`,

  hiring_manager: `Hi [Name],

I noticed [Company]'s recent growth in [Epic/healthcare IT] and wanted to reach out directly. I'm a certified Epic Security Analyst who spent 4 years at Novant Health managing access governance for 40+ facilities and supporting 500+ providers — and I have activation experience across 13 Go-Live sites.

I'd value a conversation about how my background might align with what your team is building.

Happy to share my resume if helpful.

Bolaji Adeeko`,

  referral: `Hi [Name],

Hope you're doing well! I know you're connected at [Company] — I'm actively looking for Epic Security Analyst or Healthcare IT roles and saw an opening there that looks like a strong fit.

Would you be comfortable making an introduction or referring me? I'd really appreciate it. Happy to send over my resume.

Thanks so much,
Bolaji`,

  followup: `Hi [Name],

Just wanted to follow up on my application for the [Role] position I submitted [X days] ago. I'm very interested in this opportunity — my background in Epic security and IAM across 40+ facilities feels like a strong match for what you're building.

Please let me know if there's anything else you need from me. Happy to connect at your convenience.

Best,
Bolaji Adeeko`,
};

const INITIAL_APPLICATIONS = [
  { id: 1, company: "", role: "", status: "To Apply", date: "", notes: "" },
];

const STATUS_COLORS = {
  "To Apply": "#3b82f6",
  Applied: "#f59e0b",
  "Phone Screen": "#8b5cf6",
  Interview: "#10b981",
  Offer: "#22c55e",
  Rejected: "#ef4444",
  "No Response": "#6b7280",
};

export default function CareerHub() {
  const [active, setActive] = useState("resume");
  const [role, setRole] = useState(null);
  const [coverType, setCoverType] = useState("epic_security");
  const [interviewIdx, setInterviewIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [outreachType, setOutreachType] = useState("recruiter");
  const [apps, setApps] = useState(INITIAL_APPLICATIONS);
  const [newApp, setNewApp] = useState({ company: "", role: "", status: "To Apply", date: "", notes: "" });
  const [copied, setCopied] = useState(null);

  const copyText = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const addApp = () => {
    if (!newApp.company || !newApp.role) return;
    setApps([...apps, { ...newApp, id: Date.now() }]);
    setNewApp({ company: "", role: "", status: "To Apply", date: "", notes: "" });
  };

  const updateStatus = (id, status) => {
    setApps(apps.map(a => a.id === id ? { ...a, status } : a));
  };

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "#0f0f0f",
      minHeight: "100vh",
      color: "#e8e0d0",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        borderBottom: "2px solid #c9a84c",
        padding: "28px 32px 20px",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 4, color: "#c9a84c", textTransform: "uppercase", marginBottom: 6 }}>Career Command Center</div>
              <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700, color: "#f0e8d0", letterSpacing: 1 }}>{PROFILE.name}</h1>
              <p style={{ margin: "4px 0 0", color: "#a0a8b8", fontSize: 13, fontStyle: "italic" }}>{PROFILE.title}</p>
            </div>
            <div style={{ textAlign: "right", fontSize: 12, color: "#8090a0", lineHeight: 1.8 }}>
              <div>📍 {PROFILE.location}</div>
              <div>📞 {PROFILE.phone}</div>
              <div>✉️ {PROFILE.email}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div style={{
        background: "#141414",
        borderBottom: "1px solid #2a2a2a",
        padding: "0 32px",
        overflowX: "auto",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", gap: 0 }}>
          {SECTIONS.map(s => (
            <button key={s.id} onClick={() => setActive(s.id)} style={{
              background: "none",
              border: "none",
              borderBottom: active === s.id ? "3px solid #c9a84c" : "3px solid transparent",
              color: active === s.id ? "#c9a84c" : "#607080",
              padding: "14px 18px 11px",
              cursor: "pointer",
              fontSize: 13,
              fontFamily: "inherit",
              whiteSpace: "nowrap",
              transition: "color 0.2s",
            }}>
              {s.icon} {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "32px 24px" }}>

        {/* RESUMES */}
        {active === "resume" && (
          <div>
            <SectionHeader title="My Resumes" sub="4 versions — each optimized for a different target track" />
            <div style={{ display: "grid", gap: 20 }}>
              {RESUMES.map((r) => (
                <div key={r.id} style={{
                  background: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  borderRadius: 12,
                  padding: "24px 28px",
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                }}>
                  <div style={{
                    fontSize: 28,
                    width: 52,
                    height: 52,
                    background: "#111",
                    border: "1px solid #2a2a2a",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>{r.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                      <span style={{ fontWeight: 700, fontSize: 15, color: "#e8e0d0" }}>{r.label}</span>
                      <span style={{
                        fontSize: 10, fontWeight: 600, letterSpacing: 1,
                        background: r.tagColor + "22",
                        border: `1px solid ${r.tagColor}55`,
                        color: r.tagColor,
                        borderRadius: 20,
                        padding: "2px 10px",
                        textTransform: "uppercase",
                      }}>{r.tag}</span>
                    </div>
                    <p style={{ margin: "0 0 12px", fontSize: 13, lineHeight: 1.7, color: "#8090a0" }}>{r.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                      {r.keywords.map((k) => (
                        <span key={k} style={{
                          fontSize: 11, background: "#111", border: "1px solid #2a2a2a",
                          borderRadius: 20, padding: "2px 10px", color: "#506070",
                        }}>{k}</span>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 12, color: "#404050", fontStyle: "italic" }}>📎 {r.filename}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 28,
              padding: "16px 20px",
              background: "#0e1a0e",
              border: "1px solid #1a3a1a",
              borderRadius: 8,
              fontSize: 13,
              color: "#6a9a6a",
              lineHeight: 1.8,
            }}>
              <strong style={{ color: "#80c080" }}>💡 How to use these:</strong> Download the variant that matches the job you're applying to. Open in Word, swap in the specific company name and job title, and send. All 4 are ATS-optimized — clean formatting, no tables, standard fonts, keyword-rich bullet copy.
            </div>
          </div>
        )}

        {/* ROLES */}
        {active === "roles" && (
          <div>
            <SectionHeader title="Target Roles & Strategy" sub="Ranked by fit — click any role for full details" />
            <div style={{ display: "grid", gap: 16 }}>
              {TARGET_ROLES.map((r, i) => (
                <div key={i} onClick={() => setRole(role === i ? null : i)}
                  style={{
                    background: "#1a1a1a",
                    border: `1px solid ${role === i ? "#c9a84c" : "#2a2a2a"}`,
                    borderRadius: 10,
                    padding: "18px 22px",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: 16, color: "#e8e0d0" }}>{r.title}</span>
                      <span style={{ marginLeft: 12, fontSize: 12, color: "#607080" }}>{r.level}</span>
                    </div>
                    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                      <span style={{ fontSize: 13, color: "#10b981", fontWeight: 600 }}>{r.salary}</span>
                      <span style={{ fontSize: 16 }}>{r.fit}</span>
                      <span style={{ color: "#506070", fontSize: 12 }}>{role === i ? "▲" : "▼"}</span>
                    </div>
                  </div>
                  {role === i && (
                    <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid #2a2a2a" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                        <div>
                          <Label>Target Companies</Label>
                          <ul style={{ margin: "8px 0", padding: "0 0 0 16px", color: "#a0b0c0", fontSize: 13, lineHeight: 2 }}>
                            {r.companies.map((c, j) => <li key={j}>{c}</li>)}
                          </ul>
                        </div>
                        <div>
                          <Label>Best Job Boards</Label>
                          <ul style={{ margin: "8px 0", padding: "0 0 0 16px", color: "#a0b0c0", fontSize: 13, lineHeight: 2 }}>
                            {r.boards.map((b, j) => <li key={j}>{b}</li>)}
                          </ul>
                        </div>
                      </div>
                      <div style={{ marginTop: 16 }}>
                        <Label>ATS Keywords to Include</Label>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
                          {r.keywords.map((k, j) => (
                            <span key={j} style={{ background: "#1e2d3d", border: "1px solid #2a4a6a", borderRadius: 20, padding: "4px 12px", fontSize: 12, color: "#7ab3d3" }}>{k}</span>
                          ))}
                        </div>
                      </div>
                      <div style={{ marginTop: 16, padding: "12px 16px", background: "#1e1e0e", border: "1px solid #3a3a1a", borderRadius: 8 }}>
                        <span style={{ color: "#c9a84c", fontSize: 12, fontWeight: 600 }}>💡 STRATEGY NOTE: </span>
                        <span style={{ color: "#b0a870", fontSize: 13 }}>{r.notes}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COVER */}
        {active === "cover" && (
          <div>
            <SectionHeader title="Cover Letter Templates" sub="Tailored for each target role — customize the bracketed fields" />
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              {[
                { key: "epic_security", label: "Epic Security Analyst" },
                { key: "iam", label: "IAM Engineer" },
                { key: "consulting", label: "Epic Consultant" },
              ].map(({ key, label }) => (
                <button key={key} onClick={() => setCoverType(key)} style={{
                  padding: "8px 18px",
                  borderRadius: 20,
                  border: coverType === key ? "1px solid #c9a84c" : "1px solid #2a2a2a",
                  background: coverType === key ? "#2a2200" : "#1a1a1a",
                  color: coverType === key ? "#c9a84c" : "#607080",
                  cursor: "pointer",
                  fontSize: 13,
                  fontFamily: "inherit",
                }}>
                  {label}
                </button>
              ))}
            </div>
            <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 8, padding: 28 }}>
              <pre style={{ margin: 0, whiteSpace: "pre-wrap", fontSize: 13.5, lineHeight: 2, color: "#c8d0d8", fontFamily: "inherit" }}>
                {COVER_TEMPLATES[coverType]}
              </pre>
            </div>
            <button onClick={() => copyText(COVER_TEMPLATES[coverType], "cover")} style={{ ...btnStyle(copied === "cover"), marginTop: 16 }}>
              {copied === "cover" ? "✓ Copied" : "📋 Copy Cover Letter"}
            </button>
          </div>
        )}

        {/* INTERVIEW */}
        {active === "interview" && (
          <div>
            <SectionHeader title="Interview Preparation" sub="STAR-based answers tailored to your actual experience" />
            <div style={{ display: "flex", gap: 12, marginBottom: 24, alignItems: "center" }}>
              <button onClick={() => { setInterviewIdx(Math.max(0, interviewIdx - 1)); setShowAnswer(false); }} style={{ ...navBtn, opacity: interviewIdx === 0 ? 0.3 : 1 }}>← Prev</button>
              <span style={{ color: "#607080", fontSize: 13 }}>{interviewIdx + 1} / {INTERVIEW_QA.length}</span>
              <button onClick={() => { setInterviewIdx(Math.min(INTERVIEW_QA.length - 1, interviewIdx + 1)); setShowAnswer(false); }} style={{ ...navBtn, opacity: interviewIdx === INTERVIEW_QA.length - 1 ? 0.3 : 1 }}>Next →</button>
              <span style={{ marginLeft: 8, background: "#1e2d3d", border: "1px solid #2a4a6a", borderRadius: 20, padding: "3px 10px", fontSize: 11, color: "#7ab3d3" }}>{INTERVIEW_QA[interviewIdx].category}</span>
            </div>

            <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 10, padding: 28 }}>
              <p style={{ fontSize: 17, fontWeight: 600, color: "#e8e0d0", marginTop: 0, lineHeight: 1.6 }}>
                "{INTERVIEW_QA[interviewIdx].q}"
              </p>
              <button onClick={() => setShowAnswer(!showAnswer)} style={{ ...btnStyle(false), marginBottom: showAnswer ? 24 : 0 }}>
                {showAnswer ? "Hide Answer" : "Show STAR Answer"}
              </button>
              {showAnswer && (
                <div>
                  {INTERVIEW_QA[interviewIdx].star ? (
                    ["S", "T", "A", "R"].map((letter) => (
                      <div key={letter} style={{ display: "flex", gap: 16, marginBottom: 16, alignItems: "flex-start" }}>
                        <div style={{
                          width: 32, height: 32, borderRadius: 8,
                          background: { S: "#1e3040", T: "#1e2840", A: "#1e2030", R: "#1e3020" }[letter],
                          border: `1px solid ${{ S: "#2a5070", T: "#2a3870", A: "#2a3060", R: "#2a5030" }[letter]}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontWeight: 700, fontSize: 13,
                          color: { S: "#60a0c0", T: "#6080c0", A: "#8060c0", R: "#60a060" }[letter],
                          flexShrink: 0,
                        }}>{letter}</div>
                        <div>
                          <div style={{ fontSize: 11, color: "#506070", marginBottom: 4, textTransform: "uppercase", letterSpacing: 1 }}>
                            {{ S: "Situation", T: "Task", A: "Action", R: "Result" }[letter]}
                          </div>
                          <div style={{ fontSize: 14, lineHeight: 1.8, color: "#c0c8d0" }}>{INTERVIEW_QA[interviewIdx].star[letter]}</div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div style={{ fontSize: 14, lineHeight: 1.9, color: "#c0c8d0" }}>{INTERVIEW_QA[interviewIdx].answer}</div>
                  )}
                </div>
              )}
            </div>

            <div style={{ marginTop: 32 }}>
              <SectionHeader title="Compensation Negotiation" sub="Use when you get an offer" />
              <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 8, padding: 24 }}>
                {[
                  ["Your Market Range", "Epic Security Analyst: $95K–$130K | IAM Engineer: $100K–$140K | Consultant: $110K–$160K"],
                  ["Counter Offer Script", "\"Thank you for the offer — I'm very excited about this opportunity. Based on my 7+ years of Epic experience, 13 Go-Live activations, and active certifications, I was targeting the $[X] range. Is there flexibility there?\""],
                  ["Negotiation Levers", "Base salary, signing bonus, remote work policy, PTO, training/certification budget, title (Senior vs. Analyst)"],
                  ["Never Accept on the Spot", "Always say: \"This is exciting. Can I have 48 hours to review the full package?\""],
                ].map(([k, v]) => (
                  <div key={k} style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 11, color: "#c9a84c", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>{k}</div>
                    <div style={{ fontSize: 14, lineHeight: 1.8, color: "#c0c8d0" }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* OUTREACH */}
        {active === "outreach" && (
          <div>
            <SectionHeader title="Outreach Templates" sub="LinkedIn & email messages — ready to send" />
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              {[
                { key: "recruiter", label: "Recruiter Cold Outreach" },
                { key: "hiring_manager", label: "Hiring Manager" },
                { key: "referral", label: "Ask for Referral" },
                { key: "followup", label: "Follow-Up" },
              ].map(({ key, label }) => (
                <button key={key} onClick={() => setOutreachType(key)} style={{
                  padding: "8px 16px",
                  borderRadius: 20,
                  border: outreachType === key ? "1px solid #c9a84c" : "1px solid #2a2a2a",
                  background: outreachType === key ? "#2a2200" : "#1a1a1a",
                  color: outreachType === key ? "#c9a84c" : "#607080",
                  cursor: "pointer",
                  fontSize: 12,
                  fontFamily: "inherit",
                }}>
                  {label}
                </button>
              ))}
            </div>
            <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 8, padding: 28 }}>
              <pre style={{ margin: 0, whiteSpace: "pre-wrap", fontSize: 14, lineHeight: 2, color: "#c8d0d8", fontFamily: "inherit" }}>
                {OUTREACH_TEMPLATES[outreachType]}
              </pre>
            </div>
            <button onClick={() => copyText(OUTREACH_TEMPLATES[outreachType], "outreach")} style={{ ...btnStyle(copied === "outreach"), marginTop: 16 }}>
              {copied === "outreach" ? "✓ Copied" : "📋 Copy Message"}
            </button>

            <div style={{ marginTop: 32 }}>
              <SectionHeader title="Networking Strategy" sub="High-ROI actions to take this week" />
              <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 8, padding: 24 }}>
                {[
                  ["🎯 Epic UserWeb", "Join Epic's community portal — many health systems post jobs exclusively there before LinkedIn. Connect with other analysts."],
                  ["💼 LinkedIn Optimization", "Add 'Open to Work' (visible to recruiters only). Update your headline to: 'Certified Epic Security Analyst | IAM | 13 Go-Lives | Healthcare IT'. Add all 13 Go-Live sites to your Projects section."],
                  ["🤝 Target Recruiters", "Search LinkedIn for: 'Epic recruiter healthcare IT' + filter by your city or remote. Connect with 10/week using the Recruiter template."],
                  ["🏥 Consulting Firms", "Apply directly to Nordic Consulting, Guidehouse, and Optimum Healthcare IT — they always need Epic Security talent and pay 20–30% above standard."],
                  ["📬 Direct Company Outreach", "Identify 5 target health systems expanding Epic. Find the Epic team manager on LinkedIn and send the Hiring Manager template."],
                ].map(([title, desc]) => (
                  <div key={title} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid #1e1e1e" }}>
                    <div style={{ fontWeight: 600, color: "#e0d0b0", marginBottom: 6, fontSize: 14 }}>{title}</div>
                    <div style={{ fontSize: 13, lineHeight: 1.8, color: "#a0b0c0" }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TRACKER */}
        {active === "tracker" && (
          <div>
            <SectionHeader title="Application Tracker" sub="Track every application in one place" />

            <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 8, padding: 20, marginBottom: 24 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto auto", gap: 10, alignItems: "end" }}>
                <div>
                  <Label>Company</Label>
                  <input value={newApp.company} onChange={e => setNewApp({ ...newApp, company: e.target.value })}
                    placeholder="e.g. Novant Health" style={inputStyle} />
                </div>
                <div>
                  <Label>Role</Label>
                  <input value={newApp.role} onChange={e => setNewApp({ ...newApp, role: e.target.value })}
                    placeholder="e.g. Epic Security Analyst" style={inputStyle} />
                </div>
                <div>
                  <Label>Date</Label>
                  <input type="date" value={newApp.date} onChange={e => setNewApp({ ...newApp, date: e.target.value })} style={inputStyle} />
                </div>
                <button onClick={addApp} style={{ ...btnStyle(false), height: 38, marginTop: 20 }}>+ Add</button>
              </div>
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              {apps.filter(a => a.company).map(app => (
                <div key={app.id} style={{
                  background: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  borderLeft: `4px solid ${STATUS_COLORS[app.status]}`,
                  borderRadius: 8,
                  padding: "14px 18px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr auto",
                  gap: 12,
                  alignItems: "center",
                }}>
                  <div>
                    <div style={{ fontWeight: 600, color: "#e0d0b0", fontSize: 14 }}>{app.company}</div>
                    <div style={{ color: "#607080", fontSize: 12 }}>{app.role} {app.date && `• ${app.date}`}</div>
                  </div>
                  <select value={app.status} onChange={e => updateStatus(app.id, e.target.value)}
                    style={{ ...inputStyle, padding: "6px 10px", fontSize: 12 }}>
                    {Object.keys(STATUS_COLORS).map(s => <option key={s}>{s}</option>)}
                  </select>
                  <div style={{
                    width: 10, height: 10, borderRadius: "50%",
                    background: STATUS_COLORS[app.status],
                  }} />
                </div>
              ))}
              {apps.filter(a => a.company).length === 0 && (
                <div style={{ textAlign: "center", color: "#404050", padding: 40, fontSize: 14 }}>No applications yet — add your first one above.</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SectionHeader({ title, sub }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h2 style={{ margin: 0, fontSize: 20, color: "#e8e0d0", fontWeight: 700 }}>{title}</h2>
      {sub && <p style={{ margin: "4px 0 0", color: "#506070", fontSize: 13 }}>{sub}</p>}
    </div>
  );
}

function Label({ children }) {
  return <div style={{ fontSize: 11, color: "#607080", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>{children}</div>;
}



const btnStyle = (active) => ({
  padding: "8px 18px",
  borderRadius: 6,
  border: `1px solid ${active ? "#4a8a4a" : "#3a3010"}`,
  background: active ? "#1a3a1a" : "#2a2200",
  color: active ? "#80c080" : "#c9a84c",
  cursor: "pointer",
  fontSize: 12,
  fontFamily: "inherit",
});

const navBtn = {
  padding: "6px 14px",
  borderRadius: 6,
  border: "1px solid #2a2a2a",
  background: "#1a1a1a",
  color: "#c9a84c",
  cursor: "pointer",
  fontSize: 12,
  fontFamily: "inherit",
};

const inputStyle = {
  width: "100%",
  background: "#111",
  border: "1px solid #2a2a2a",
  borderRadius: 6,
  color: "#c8d0d8",
  padding: "8px 12px",
  fontSize: 13,
  fontFamily: "inherit",
  boxSizing: "border-box",
};
