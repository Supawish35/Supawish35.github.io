import { Language, NavItem, PortfolioData } from "../types";

export interface TranslationContent {
  navItems: NavItem[];
  portfolioData: PortfolioData;
  ui: {
    hero: {
      interestsLabel: string;
      viewProjects: string;
      contact: string;
    };
    capabilities: {
      eyebrow: string;
      sectionTitle: string;
      sectionSubtitle: string;
    };
    skills: {
      sectionTitle: string;
      sectionSubtitle: string;
    };
    projects: {
      eyebrow: string;
      sectionTitle: string;
      sectionSubtitle: string;
      sourceCode: string;
      liveDemo: string;
    };
    education: {
      sectionTitle: string;
      sectionSubtitle: string;
    };
    certificates: {
      sectionTitle: string;
      sectionSubtitle: string;
      viewFull: string;
      close: string;
    };
    contact: {
      eyebrow: string;
      sectionTitle: string;
      sectionSubtitle: string;
      sendEmail: string;
      copyEmail: string;
      copied: string;
      openGithub: string;
      sendMessage: string;
    };
    footer: {
      rights: string;
      backToTop: string;
    };
    navbar: {
      switchLanguage: string;
      toggleTheme: string;
      toggleMenu: string;
    };
  };
}

export const translations: Record<Language, TranslationContent> = {
  th: {
    navItems: [
      { label: "เกี่ยวกับผม", href: "#about" },
      { label: "ผลงาน", href: "#projects" },
      { label: "สิ่งที่ทำได้", href: "#capabilities" },
      { label: "ทักษะและการศึกษา", href: "#skills" },
      { label: "ติดต่อ", href: "#contact" },
    ],
    portfolioData: {
      name: "นายศุภวิชญ์ หาญมนตรี",
      role: "วิทยาการคอมพิวเตอร์ ปี 3 · ม.ราชภัฏอุดรธานี",
      headline: "เว็บแอปและระบบหลังบ้านที่ใช้งานได้จริง",
      summary:
        "ผมเขียนด้วย TypeScript, Python และ WebSockets ตั้งแต่เว็บเรียลไทม์ไปจนถึงเครื่องมือคำนวณและตรวจสอบข้อมูล ทุกโปรเจกต์เปิดให้ลองและอ่านโค้ดได้",
      facts: ["3 โปรเจกต์ออนไลน์", "English B2", "TS · Python · SQL"],
      interests: [
        "Software Engineering",
        "Full-Stack Web",
        "Backend Development",
        "AI",
        "Data Science",
      ],
      avatar: "asset/profile.webp",
      about: {
        eyebrow: "ABOUT ME",
        title: "ชอบลงมือสร้างให้ใช้งานได้จริง",
        lead: "ผมชื่อศุภวิชญ์ หาญมนตรี นักศึกษาชั้นปีที่ 3 สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏอุดรธานี เวลาเจอโจทย์หรือปัญหาที่น่าสนใจ ผมชอบแปลงมันให้เป็นเว็บหรือเครื่องมือที่เปิดใช้งานได้จริงทันที",
        body: "ที่ผ่านมาผมสร้างทั้งเว็บโต้ตอบแบบเรียลไทม์อย่าง Pop-siam ด้วย WebSockets เครื่องมือคำนวณสิทธิ Thai-Help-Thai และเว็บตรวจสอบผู้ติดตาม Instagram ด้วย TypeScript, Python และ SQL ผมสนใจงานสาย Software Engineering ทั้ง Full-Stack, Backend, AI และ Data Science รวมถึงสภาพแวดล้อมที่เปิดโอกาสให้คิดและทำงานได้อย่างอิสระ",
        details: [
          { label: "การศึกษา", value: "วิทยาการคอมพิวเตอร์ ปี 3 · ม.ราชภัฏอุดรธานี" },
          { label: "ภาษาและเครื่องมือหลัก", value: "TypeScript · Python · C# · SQL · WebSockets" },
          { label: "ภาษาอังกฤษ", value: "ระดับ B2 Upper-Intermediate (UDRU-ET)" },
          { label: "สายงานที่สนใจ", value: "Software Engineering ที่ทำงานได้อย่างอิสระ" },
        ],
      },
      capabilities: [
        {
          number: "01",
          title: "Full-Stack Web Apps",
          description:
            "พัฒนาหน้าเว็บที่ใช้งานได้จริงทั้งโหมดสว่างและมืด เชื่อมต่อลอจิกและระบบหลังบ้านอย่างเป็นระบบ",
          stack: ["TypeScript", "JavaScript", "HTML/CSS", "PHP"],
        },
        {
          number: "02",
          title: "Real-Time & Backend",
          description:
            "สร้างการสื่อสารแบบเรียลไทม์ด้วย WebSockets พร้อมจัดการข้อมูลด้วย SQL สำหรับผู้ใช้งานพร้อมกัน",
          stack: ["WebSockets", "Python", "C#", "SQL"],
        },
        {
          number: "03",
          title: "Data & Utility Tools",
          description:
            "แปลงเงื่อนไขและชุดข้อมูลที่ซับซ้อนให้เป็นเว็บเครื่องมือคำนวณและตรวจสอบที่ใช้งานได้ทันที",
          stack: ["Python", "Data Parsing", "Azure", "Git"],
        },
      ],
      skills: [
        {
          title: "Programming language",
          icon: "braces",
          skills: [
            "Python, C, PHP",
            "HTML/CSS, JavaScript",
            "C#, TypeScript",
          ],
        },
        {
          title: "Tools & Data",
          icon: "tools",
          skills: ["Git", "VS Code", "JetBrains IDE", "Azure", "SQL"],
        },
        {
          title: "Soft Skills",
          icon: "users",
          skills: ["การสื่อสาร", "การทำงานเป็นทีม", "การแก้ปัญหา"],
        },
      ],
      projects: [
        {
          title: "Pop-siam",
          description:
            "เว็บแอปพลิเคชันโต้ตอบแบบเรียลไทม์ที่สร้างขึ้นเพื่อศึกษาการใช้งาน WebSockets ในการซิงค์สถานะระหว่างผู้ใช้งาน",
          tags: ["WebSockets", "Real-Time", "Web App"],
          image: "asset/pop-siam.webp",
          githubUrl: "https://github.com/Supawish35/Pop-siam",
          demoUrl: "https://pop-siam.onrender.com",
        },
        {
          title: "Thai-Help-Thai Calculator",
          description:
            "เว็บเครื่องมือคำนวณสิทธิและยอดเงินสำหรับโครงการรัฐไทยช่วยไทยพลัส ช่วยให้ตรวจสอบผลลัพธ์ได้รวดเร็ว",
          tags: ["Calculator", "Web App", "Logic"],
          image: "asset/image.png",
          githubUrl: "https://github.com/Supawish35/thai_help_thai",
          demoUrl: "https://thai-help-thai.onrender.com/",
        },
        {
          title: "Instagram Follow Back Detector",
          description:
            "เครื่องมือตรวจสอบบัญชี Instagram ที่ไม่ได้ติดตามกลับจากข้อมูลการติดตาม รองรับทั้งโหมดสว่างและมืด",
          tags: ["Data Tool", "Web App", "Light / Dark UI"],
          image: "asset/followback-detector-light.png",
          imageDark: "asset/followback-detector-dark.png",
          githubUrl: "https://github.com/Supawish35/follow_back_detector",
          demoUrl: "https://followbackdetector.vercel.app/",
        },
      ],
      education: [
        {
          degree: "ปริญญาตรี วิทยาการคอมพิวเตอร์ (กำลังศึกษาชั้นปีที่ 3)",
          institution: "คณะวิทยาศาสตร์, มหาวิทยาลัยราชภัฏอุดรธานี",
          years: "2567 - ปัจจุบัน",
        },
        {
          degree: "ระดับมัธยมศึกษา",
          institution: "โรงเรียนพรเจริญวิทยา",
          years: "2560 - 2567",
        },
      ],
      certificates: [
        {
          title: "B2 English Certificate (UDRU-ET)",
          image: "asset/UDRU-ET_B2_Set1.png",
        },
      ],
      contacts: [
        {
          name: "Email",
          url: "mailto:supawish35@gmail.com",
          type: "email",
        },
        {
          name: "GitHub",
          url: "https://github.com/Supawish35",
          type: "github",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/supawish.hanmontree/",
          type: "facebook",
        },
      ],
      careerInterest:
        "ฉันมีความต้องการในการทำงานสาย Software Engineering และต้องการความอิสระ",
    },
    ui: {
      hero: {
        interestsLabel: "โฟกัส:",
        viewProjects: "ดูผลงาน",
        contact: "ติดต่อ",
      },
      capabilities: {
        eyebrow: "What I Build",
        sectionTitle: "สามอย่างที่ผมสร้าง",
        sectionSubtitle: "ทักษะหลักที่ฝึกฝนและใช้งานจริงในโปรเจกต์",
      },
      skills: {
        sectionTitle: "เครื่องมือที่ใช้",
        sectionSubtitle: "ภาษาโปรแกรมมิ่ง เครื่องมือ และทักษะการทำงาน",
      },
      projects: {
        eyebrow: "Selected Work",
        sectionTitle: "ผลงานที่ใช้งานได้จริง",
        sectionSubtitle: "ทุกโปรเจกต์มี Live Demo และซอร์สโค้ดบน GitHub",
        sourceCode: "Source Code",
        liveDemo: "Live Demo",
      },
      education: {
        sectionTitle: "การศึกษา",
        sectionSubtitle: "ประวัติการศึกษา",
      },
      certificates: {
        sectionTitle: "ใบรับรอง",
        sectionSubtitle: "ผลการทดสอบความสามารถ",
        viewFull: "ดูภาพเต็ม",
        close: "ปิด",
      },
      contact: {
        eyebrow: "Contact",
        sectionTitle: "ติดต่อพูดคุยหรือร่วมงาน",
        sectionSubtitle: "ส่งอีเมล ดูโค้ดบน GitHub หรือทักข้อความมาได้โดยตรง",
        sendEmail: "ส่งอีเมล",
        copyEmail: "คัดลอกอีเมล",
        copied: "คัดลอกแล้ว!",
        openGithub: "เปิดดู GitHub",
        sendMessage: "ส่งข้อความ",
      },
      footer: {
        rights: "สงวนลิขสิทธิ์",
        backToTop: "กลับขึ้นด้านบน",
      },
      navbar: {
        switchLanguage: "เปลี่ยนภาษา",
        toggleTheme: "เปลี่ยนธีม",
        toggleMenu: "เมนู",
      },
    },
  },
  en: {
    navItems: [
      { label: "About Me", href: "#about" },
      { label: "Work", href: "#projects" },
      { label: "What I build", href: "#capabilities" },
      { label: "Stack & Education", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    portfolioData: {
      name: "Supphawit Hanmontree",
      role: "Computer Science, year 3 · Udon Thani Rajabhat University",
      headline: "Web apps and backends that run live.",
      summary:
        "I write TypeScript, Python and SQL: real-time WebSocket apps, calculators and data tools. Every project is online, with its code on GitHub.",
      facts: ["3 live projects", "English B2", "TS · Python · SQL"],
      interests: [
        "Software Engineering",
        "Full-Stack Web",
        "Backend Development",
        "AI",
        "Data Science",
      ],
      avatar: "asset/profile.webp",
      about: {
        eyebrow: "ABOUT ME",
        title: "I learn by shipping tools people can use.",
        lead: "I'm Supphawit Hanmontree, a third-year Computer Science student at Udon Thani Rajabhat University. Rather than stopping at class exercises, I like turning everyday problems and ideas into live web apps anyone can open and test.",
        body: "Across projects like Pop-siam (real-time WebSocket state sync), Thai-Help-Thai Calculator, and Instagram Follow Back Detector, I build with TypeScript, Python, C#, and SQL. I focus on Software Engineering—spanning Full-Stack Web, Backend, AI, and Data Science—and want to work with the freedom to build independently.",
        details: [
          { label: "Education", value: "B.Sc. Computer Science (Year 3) · UDRU" },
          { label: "Core Stack", value: "TypeScript · Python · C# · SQL · WebSockets" },
          { label: "English", value: "B2 Upper-Intermediate (UDRU-ET)" },
          { label: "Direction", value: "Software Engineering with independence to build" },
        ],
      },
      capabilities: [
        {
          number: "01",
          title: "Full-Stack Web Apps",
          description:
            "Responsive web interfaces with light and dark themes, clean state handling, and working backend routes.",
          stack: ["TypeScript", "JavaScript", "HTML/CSS", "PHP"],
        },
        {
          number: "02",
          title: "Real-Time & Backend",
          description:
            "WebSocket communication for live state sync between users, backed by structured SQL queries.",
          stack: ["WebSockets", "Python", "C#", "SQL"],
        },
        {
          number: "03",
          title: "Data & Utility Tools",
          description:
            "Turning messy rules and exported account lists into fast browser tools anyone can run.",
          stack: ["Python", "Data Parsing", "Azure", "Git"],
        },
      ],
      skills: [
        {
          title: "Programming language",
          icon: "braces",
          skills: [
            "Python, C, PHP",
            "HTML/CSS, JavaScript",
            "C#, TypeScript",
          ],
        },
        {
          title: "Tools & Data",
          icon: "tools",
          skills: ["Git", "VS Code", "JetBrains IDE", "Azure", "SQL"],
        },
        {
          title: "Soft Skills",
          icon: "users",
          skills: ["Communication", "Teamwork", "Problem Solving"],
        },
      ],
      projects: [
        {
          title: "Pop-siam",
          description:
            "Real-time interactive web app built with WebSockets to sync live state across connected users.",
          tags: ["WebSockets", "Real-Time", "Web App"],
          image: "asset/pop-siam.webp",
          githubUrl: "https://github.com/Supawish35/Pop-siam",
          demoUrl: "https://pop-siam.onrender.com",
        },
        {
          title: "Thai-Help-Thai Calculator",
          description:
            "Web calculator for the Thai Help Thai Plus program that turns eligibility rules into instant results.",
          tags: ["Calculator", "Web App", "Logic"],
          image: "asset/image.png",
          githubUrl: "https://github.com/Supawish35/thai_help_thai",
          demoUrl: "https://thai-help-thai.onrender.com/",
        },
        {
          title: "Instagram Follow Back Detector",
          description:
            "Browser utility that compares Instagram follower lists to find accounts that do not follow back, with light and dark modes.",
          tags: ["Data Tool", "Web App", "Light / Dark UI"],
          image: "asset/followback-detector-light.png",
          imageDark: "asset/followback-detector-dark.png",
          githubUrl: "https://github.com/Supawish35/follow_back_detector",
          demoUrl: "https://followbackdetector.vercel.app/",
        },
      ],
      education: [
        {
          degree: "B.Sc. in Computer Science (3rd Year)",
          institution: "Faculty of Science, Udon Thani Rajabhat University",
          years: "2024 - Present",
        },
        {
          degree: "High School Diploma",
          institution: "Phon Charoen Wittaya School",
          years: "2017 - 2024",
        },
      ],
      certificates: [
        {
          title: "B2 English Certificate (UDRU-ET)",
          image: "asset/UDRU-ET_B2_Set1.png",
        },
      ],
      contacts: [
        {
          name: "Email",
          url: "mailto:supawish35@gmail.com",
          type: "email",
        },
        {
          name: "GitHub",
          url: "https://github.com/Supawish35",
          type: "github",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/supawish.hanmontree/",
          type: "facebook",
        },
      ],
      careerInterest:
        "I want to work in software engineering, with the freedom to work independently.",
    },
    ui: {
      hero: {
        interestsLabel: "Focus:",
        viewProjects: "View projects",
        contact: "Contact",
      },
      capabilities: {
        eyebrow: "What I Build",
        sectionTitle: "Three things I build",
        sectionSubtitle: "Core areas backed by shipped projects and coursework",
      },
      skills: {
        sectionTitle: "Technical Stack",
        sectionSubtitle: "Languages, tools, and engineering practices",
      },
      projects: {
        eyebrow: "Selected Work",
        sectionTitle: "Work that runs",
        sectionSubtitle: "Live applications with full source code on GitHub",
        sourceCode: "Source Code",
        liveDemo: "Live Demo",
      },
      education: {
        sectionTitle: "Education",
        sectionSubtitle: "Academic background",
      },
      certificates: {
        sectionTitle: "Certificates",
        sectionSubtitle: "Verified language proficiency",
        viewFull: "View Full",
        close: "Close",
      },
      contact: {
        eyebrow: "Contact",
        sectionTitle: "Get in touch.",
        sectionSubtitle: "Email me directly, read my code on GitHub, or send a message.",
        sendEmail: "Send Email",
        copyEmail: "Copy Email",
        copied: "Copied!",
        openGithub: "View GitHub",
        sendMessage: "Send Message",
      },
      footer: {
        rights: "All rights reserved.",
        backToTop: "Back to top",
      },
      navbar: {
        switchLanguage: "Switch Language",
        toggleTheme: "Toggle Theme",
        toggleMenu: "Toggle Menu",
      },
    },
  },
};
