'use client';

import React, { useState } from 'react';
import {
  Code,
  GraduationCap,
  Briefcase,
  Award,
  Terminal,
  Github,
  Mail,
  Phone,
  MapPin,
  Moon,
  Sun,
  Copy,
  CheckCircle2,
  ExternalLink,
  Cpu,
  Layers
} from 'lucide-react';

export interface ResumeData {
  basics: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    github: string;
    summary: string;
  };
  education: Array<{
    institution: string;
    degree: string;
    major: string;
    period: string;
    coursework?: string[];
  }>;
  experience: Array<{
    organization: string;
    role: string;
    period: string;
    highlights: string[];
    tags: string[];
  }>;
  skills: {
    languages: string[];
    algorithms: string[];
    tools: string[];
    productivity: string[];
  };
  achievements: Array<{
    title: string;
    issuer: string;
    year: string;
  }>;
}

export const defaultResumeData: ResumeData = {
  basics: {
    name: "Nguyen Tien Manh",
    title: "Competitive Programmer & FinTech / Data Science Student",
    location: "Ha Noi, Vietnam",
    phone: "0964564955",
    email: "k64.2513310134@ftu.edu.vn",
    github: "https://github.com/tienmanh301",
    summary: "Competitive programmer with a strong foundation in Algorithms, Data Structures (C++, Python), and AI-Assisted development. Currently pursuing Finance & Banking at Foreign Trade University (FTU) with keen interest in quantitative analysis and machine learning."
  },
  education: [
    {
      institution: "Foreign Trade University, Ha Noi",
      degree: "Bachelor's Degree (K64)",
      major: "Finance and Banking",
      period: "2026 – Present",
      coursework: [
        "Programming for Data Analysis and Scientific Computing",
        "Financial Technology (FinTech)",
        "The Application of Machine Learning to Financial Analysis"
      ]
    },
    {
      institution: "Dien Chau 4 High School, Dien Chau, Nghe An",
      degree: "High School Diploma",
      major: "Natural Sciences Specialized Class",
      period: "2022 – 2025"
    }
  ],
  experience: [
    {
      organization: "High School Gifted IT Team",
      role: "Competitive Programming Technical Assistant & Problem Setter",
      period: "2024",
      highlights: [
        "Configured and operated the Themis automated evaluation system to execute and grade complex DSA problem sets for the provincial gifted team.",
        "Engineered, validated, and stress-tested comprehensive testcases to cover edge cases and enforce strict Time and Space Complexity constraints (O(N log N), O(N)).",
        "Analyzed and debugged student code submissions, providing detailed technical feedback on optimizing DP state transitions, graph traversals, and advanced data structures (Segment Tree, Fenwick Tree)."
      ],
      tags: ["C++", "Themis", "Segment Tree", "Fenwick Tree", "Graph Theory"]
    },
    {
      organization: "VNOI & Online Judge Platforms",
      role: "Algorithm Practice & Problem Solving",
      period: "2024",
      highlights: [
        "Solved and optimized over 100 algorithmic problems across VNOI, LQDOJ, and LCOJ platforms.",
        "Specialized in Dynamic Programming, Graph Theory, Number Theory, and String Hashing.",
        "Analyzed contest editorials and refactored suboptimal solution code to eliminate Time Limit Exceeded (TLE) and Memory Limit Exceeded (MLE) bottlenecks."
      ],
      tags: ["C++", "Python", "VNOI", "LQDOJ", "Dynamic Programming"]
    }
  ],
  skills: {
    languages: ["C++", "Python", "Pascal", "C", "HTML", "SQL"],
    algorithms: [
      "Dynamic Programming",
      "Graph Theory",
      "Number Theory",
      "String Hashing",
      "Segment Tree",
      "Fenwick Tree (BIT)",
      "Disjoint Set Union (DSU)"
    ],
    tools: ["Themis", "Visual Studio Code", "Online Judge", "Git"],
    productivity: ["AI-Assisted Dev", "MS Excel", "MS Word", "MS PowerPoint"]
  },
  achievements: [
    {
      title: "3rd Place — Provincial Outstanding Student in IT",
      issuer: "Nghe An Province Department of Education",
      year: "2024"
    },
    {
      title: "Solved 100+ Advanced Algorithmic Problems",
      issuer: "VNOI, LQDOJ, and LCOJ Online Judges",
      year: "2024"
    }
  ]
};

export default function ResumePortfolio({ data = defaultResumeData }: { data?: ResumeData }) {
  const [isDark, setIsDark] = useState(true);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Navigation */}
        <header className="flex justify-between items-center pb-8 border-b border-slate-800/60 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 flex items-center justify-center font-mono font-bold text-white shadow-lg shadow-indigo-500/30">
              TM
            </div>
            <div>
              <span className="font-bold text-lg">{data.basics.name}</span>
              <span className="text-indigo-400 font-mono text-sm ml-1">.dev</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2.5 rounded-xl border transition-all ${isDark ? 'bg-slate-900 border-slate-800 hover:border-slate-700 text-yellow-400' : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'}`}
              title="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href={data.basics.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-md shadow-indigo-600/20"
            >
              <Github size={16} />
              <span>GitHub</span>
              <ExternalLink size={14} className="opacity-70" />
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className={`p-8 rounded-3xl border backdrop-blur-xl mb-8 relative overflow-hidden transition-all ${isDark ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white/80 border-slate-200 shadow-xl shadow-slate-200/50'}`}>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {data.basics.name}
              </h1>
              <p className="text-lg font-medium text-slate-400 mt-1 flex items-center gap-2">
                <span>{data.basics.title}</span>
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Open to Opportunities
            </div>
          </div>

          <p className="text-slate-400 max-w-3xl leading-relaxed text-sm sm:text-base mt-2">
            {data.basics.summary}
          </p>

          {/* Contact Bar */}
          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-slate-800/60 text-sm">
            <button
              onClick={() => handleCopy(data.basics.location, 'location')}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 text-slate-300 font-mono text-xs transition-all"
            >
              <MapPin size={14} className="text-rose-400" />
              <span>{data.basics.location}</span>
            </button>

            <a
              href={`tel:${data.basics.phone}`}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 text-slate-300 font-mono text-xs transition-all"
            >
              <Phone size={14} className="text-emerald-400" />
              <span>{data.basics.phone}</span>
            </a>

            <a
              href={`mailto:${data.basics.email}`}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 text-slate-300 font-mono text-xs transition-all"
            >
              <Mail size={14} className="text-blue-400" />
              <span>{data.basics.email}</span>
            </a>

            <a
              href={data.basics.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 text-slate-300 font-mono text-xs transition-all"
            >
              <Github size={14} className="text-purple-400" />
              <span>{data.basics.github.replace('https://', '')}</span>
            </a>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className={`p-5 rounded-2xl border flex items-center gap-4 ${isDark ? 'bg-slate-900/40 border-slate-800/70' : 'bg-white border-slate-200'}`}>
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400"><Award size={24} /></div>
            <div>
              <div className="text-2xl font-bold">3rd Place</div>
              <div className="text-xs text-slate-400">Provincial IT Contest (2024)</div>
            </div>
          </div>
          <div className={`p-5 rounded-2xl border flex items-center gap-4 ${isDark ? 'bg-slate-900/40 border-slate-800/70' : 'bg-white border-slate-200'}`}>
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400"><Terminal size={24} /></div>
            <div>
              <div className="text-2xl font-bold">100+</div>
              <div className="text-xs text-slate-400">Algorithmic Problems Solved</div>
            </div>
          </div>
          <div className={`p-5 rounded-2xl border flex items-center gap-4 ${isDark ? 'bg-slate-900/40 border-slate-800/70' : 'bg-white border-slate-200'}`}>
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400"><GraduationCap size={24} /></div>
            <div>
              <div className="text-2xl font-bold">FTU K64</div>
              <div className="text-xs text-slate-400">Finance & Banking</div>
            </div>
          </div>
        </div>

        {/* Experience & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Experience Column */}
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Briefcase size={20} className="text-indigo-400" />
              Work & Practice Experience
            </h2>

            <div className="space-y-4">
              {data.experience.map((exp, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border transition-all hover:-translate-y-1 ${isDark ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <div>
                      <h3 className="font-bold text-base">{exp.organization}</h3>
                      <p className="text-cyan-400 text-sm font-medium">{exp.role}</p>
                    </div>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700 text-slate-400">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-3 space-y-2 text-sm text-slate-400">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-1">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-800/40">
                    {exp.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-mono px-2 py-0.5 rounded-md bg-indigo-950/40 border border-indigo-800/40 text-indigo-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <GraduationCap size={20} className="text-cyan-400" />
                Education
              </h2>

              <div className="space-y-4">
                {data.education.map((edu, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <div>
                        <h3 className="font-bold text-base">{edu.institution}</h3>
                        <p className="text-indigo-400 text-sm">{edu.major}</p>
                      </div>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700 text-slate-400">
                        {edu.period}
                      </span>
                    </div>

                    {edu.coursework && (
                      <div className="mt-3 pt-3 border-t border-slate-800/40">
                        <div className="text-xs font-semibold text-slate-400 mb-1">Key Coursework:</div>
                        <ul className="text-xs text-slate-400 space-y-1">
                          {edu.coursework.map((c, cIdx) => (
                            <li key={cIdx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award size={20} className="text-amber-400" />
                Honors & Achievements
              </h2>

              <div className="space-y-3">
                {data.achievements.map((ach, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border flex items-center gap-3.5 ${isDark ? 'bg-slate-900/40 border-slate-800/80 hover:border-amber-500/40' : 'bg-white border-slate-200'}`}>
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                      <Award size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{ach.title}</h4>
                      <p className="text-xs text-slate-400">{ach.issuer} ({ach.year})</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Matrix */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Layers size={20} className="text-indigo-400" />
            Skills & Technical Strengths
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Code size={14} className="text-indigo-400" /> Languages
              </div>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.languages.map((l, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-full bg-slate-800/60 border border-slate-700 text-xs font-medium">
                    {l}
                  </span>
                ))}
              </div>
            </div>

            <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Cpu size={14} className="text-cyan-400" /> Algorithms & DSA
              </div>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.algorithms.map((a, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-medium">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Terminal size={14} className="text-purple-400" /> Tools
              </div>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.tools.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-full bg-slate-800/60 border border-slate-700 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Award size={14} className="text-emerald-400" /> AI & Productivity
              </div>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.productivity.map((p, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 text-xs font-medium">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-slate-800/60 text-xs text-slate-500">
          <p>© 2026 {data.basics.name} • Designed for High Performance & Developer Portfolio</p>
        </footer>
      </div>

      {/* Copy Toast */}
      {copied && (
        <div className="fixed bottom-6 right-6 bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg shadow-emerald-500/20">
          <CheckCircle2 size={14} />
          <span>Copied to clipboard!</span>
        </div>
      )}
    </div>
  );
}
