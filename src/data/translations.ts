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
    skills: {
      sectionTitle: string;
      sectionSubtitle: string;
    };
    projects: {
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
    goals: {
      sectionTitle: string;
    };
    contact: {
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
      { label: "แนะนำตัว", href: "#profile" },
      { label: "ทักษะ", href: "#skills" },
      { label: "ผลงาน", href: "#projects" },
      { label: "การศึกษา", href: "#education" },
      { label: "ใบรับรอง", href: "#certificates" },
      { label: "เป้าหมาย", href: "#goals" },
      { label: "ติดต่อ", href: "#contact" },
    ],
    portfolioData: {
      name: "นายศุภวิชญ์ หาญมนตรี",
      role: "นักศึกษาปีที่ 3 วิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏอุดรธานี",
      interests: [
        "AI",
        "Web Development",
        "Data Science",
        "Backend Development",
        "Software Engineering",
      ],
      avatar: "asset/profile.webp",
      skills: [
        {
          title: "Programming",
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
          description: "โปรเจ็คสันทนาการที่สร้างขึ้นเพื่อศึกษาการใช้งาน Web Sockets",
          image: "asset/pop-siam.webp",
          githubUrl: "https://github.com/Supawish35/Pop-siam",
          demoUrl: "https://pop-siam.onrender.com",
        },
        {
          title: "Thai-Help-Thai Calculator",
          description: "เป็นโปรเจคที่ใช้ในการคำนวณโครงการรัฐไทยช่วยไทยพลัส",
          image: "asset/image.png",
          githubUrl: "https://github.com/Supawish35/thai_help_thai",
          demoUrl: "https://thai-help-thai.onrender.com/",
        },
        {
          title: "Instagram Follow Back Detector",
          description: "เครื่องมือสำหรับตรวจสอบและค้นหาผู้ใช้งาน Instagram ที่ไม่ได้ติดตามคุณกลับ",
          image: "asset/followback-detector-light.png",
          imageDark: "asset/followback-detector-dark.png",
          githubUrl: "https://github.com/Supawish35/follow_back_detector",
          demoUrl: "https://followbackdetector.vercel.app/",
        },
      ],
      education: [
        {
          degree: "ปริญญาตรี (วิทยาการคอมพิวเตอร์)",
          institution: "คณะวิทยาศาสตร์, ม.ราชภัฏอุดรธานี",
          years: "2567 - ปัจจุบัน",
        },
        {
          degree: "ระดับมัธยมศึกษา",
          institution: "โรงเรียนพรเจริญวิทยา",
          years: "2560 - 2567",
        },
        {
          degree: "ระดับชั้นประถมศึกษา",
          institution: "โรงเรียนบ้านดงเสียด",
          years: "2554 - 2560",
        },
      ],
      certificates: [
        {
          title: "B2 English Certificate",
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
      careerInterest: "ฉันมีความต้องการในการทำงานสาย Software Engineering และต้องการความอิสระ",
    },
    ui: {
      hero: {
        interestsLabel: "สนใจ:",
        viewProjects: "ดูผลงานโปรเจกต์",
        contact: "ติดต่อ",
      },
      skills: {
        sectionTitle: "ทักษะความสามารถ (Skills)",
        sectionSubtitle: "ภาษาโปรแกรมมิ่ง เครื่องมือ และทักษะที่ใช้ในการทำงาน",
      },
      projects: {
        sectionTitle: "ผลงาน (Projects)",
        sectionSubtitle: "โปรเจกต์และแอปพลิเคชันที่พัฒนาขึ้น",
        sourceCode: "Source Code",
        liveDemo: "Live Demo",
      },
      education: {
        sectionTitle: "ประวัติการศึกษา (Education)",
        sectionSubtitle: "วุฒิการศึกษาและสถาบัน",
      },
      certificates: {
        sectionTitle: "ใบรับรอง (Certificates)",
        sectionSubtitle: "ใบรับรองความสามารถและการทดสอบ",
        viewFull: "ดูภาพเต็ม",
        close: "ปิด",
      },
      goals: {
        sectionTitle: "เป้าหมายในสายอาชีพ (Career Interest)",
      },
      contact: {
        sectionTitle: "ติดต่อ (Contact)",
        sectionSubtitle: "สามารถติดต่อพูดคุย หรือส่งอีเมลมาได้ตลอดเวลา",
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
      { label: "About", href: "#profile" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "Certificates", href: "#certificates" },
      { label: "Goals", href: "#goals" },
      { label: "Contact", href: "#contact" },
    ],
    portfolioData: {
      name: "Supphawit Hanmontree",
      role: "3rd-Year Computer Science Student, Udon Thani Rajabhat University",
      interests: [
        "AI",
        "Web Development",
        "Data Science",
        "Backend Development",
        "Software Engineering",
      ],
      avatar: "asset/profile.webp",
      skills: [
        {
          title: "Programming",
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
          description: "A hobby project for learning how WebSockets work.",
          image: "asset/pop-siam.webp",
          githubUrl: "https://github.com/Supawish35/Pop-siam",
          demoUrl: "https://pop-siam.onrender.com",
        },
        {
          title: "Thai-Help-Thai Calculator",
          description: "A calculator for the government's Thai Help Thai Plus program.",
          image: "asset/image.png",
          githubUrl: "https://github.com/Supawish35/thai_help_thai",
          demoUrl: "https://thai-help-thai.onrender.com/",
        },
        {
          title: "Instagram Follow Back Detector",
          description: "Finds the Instagram accounts that don't follow you back.",
          image: "asset/followback-detector-light.png",
          imageDark: "asset/followback-detector-dark.png",
          githubUrl: "https://github.com/Supawish35/follow_back_detector",
          demoUrl: "https://followbackdetector.vercel.app/",
        },
      ],
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          institution: "Faculty of Science, Udon Thani Rajabhat University",
          years: "2024 - Present",
        },
        {
          degree: "High School Diploma",
          institution: "Phon Charoen Wittaya School",
          years: "2017 - 2024",
        },
        {
          degree: "Primary School Certificate",
          institution: "Ban Dong Siad School",
          years: "2011 - 2017",
        },
      ],
      certificates: [
        {
          title: "B2 English Certificate",
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
      careerInterest: "I want to work in software engineering, with the freedom to work independently.",
    },
    ui: {
      hero: {
        interestsLabel: "Interests:",
        viewProjects: "View Projects",
        contact: "Contact Me",
      },
      skills: {
        sectionTitle: "Skills",
        sectionSubtitle: "Languages, tools, and working skills",
      },
      projects: {
        sectionTitle: "Featured Projects",
        sectionSubtitle: "Projects I've built",
        sourceCode: "Source Code",
        liveDemo: "Live Demo",
      },
      education: {
        sectionTitle: "Education",
        sectionSubtitle: "Degrees and schools",
      },
      certificates: {
        sectionTitle: "Certificates",
        sectionSubtitle: "Certificates and test results",
        viewFull: "View Full",
        close: "Close",
      },
      goals: {
        sectionTitle: "Career Goals",
      },
      contact: {
        sectionTitle: "Get In Touch",
        sectionSubtitle: "Reach out about work, projects, or questions.",
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
