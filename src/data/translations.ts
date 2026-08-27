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
      { label: "กิจกรรม", href: "#activities" },
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
      avatar: "asset/profile.jpeg",
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
          title: "AI & Data",
          icon: "cpu",
          skills: ["SQL"],
        },
        {
          title: "Tools",
          icon: "tools",
          skills: ["Git", "VS Code", "JetBrains IDE", "Azure"],
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
          image: "asset/pop-siam.png",
          githubUrl: "https://github.com/Supawish35/Pop-siam",
          demoUrl: "https://pop-siam.onrender.com",
        },
        {
          title: "Thai-Help-Thai Calculator",
          description: "เป็นโปรเจคที่ใช้ในการคำนวณโครงการรัฐไทยช่วยไทยพลัส",
          image: "public/asset/image.png",
          githubUrl: "https://github.com/Supawish35/thai_help_thai",
          demoUrl: "https://thai-help-thai.onrender.com/",
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
      { label: "Certificates", href: "#activities" },
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
      avatar: "asset/profile.jpeg",
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
          title: "AI & Data",
          icon: "cpu",
          skills: ["SQL"],
        },
        {
          title: "Tools",
          icon: "tools",
          skills: ["Git", "VS Code", "JetBrains IDE", "Azure"],
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
          description: "A recreational web project built to explore real-time WebSocket communications.",
          image: "asset/pop-siam.png",
          githubUrl: "https://github.com/Supawish35/Pop-siam",
          demoUrl: "https://pop-siam.onrender.com",
        },
        {
          title: "Thai-Help-Thai Calculator",
          description: "A specialized calculation tool for the government's Thai Help Thai Plus welfare program.",
          image: "public/asset/image.png",
          githubUrl: "https://github.com/Supawish35/thai_help_thai",
          demoUrl: "https://thai-help-thai.onrender.com/",
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
      careerInterest: "I am passionate about pursuing a Software Engineering career with autonomy, creativity, and technical growth.",
    },
    ui: {
      hero: {
        interestsLabel: "Interests:",
        viewProjects: "View Projects",
        contact: "Contact Me",
      },
      skills: {
        sectionTitle: "Skills & Expertise",
        sectionSubtitle: "Programming languages, frameworks, developer tools, and interpersonal skills",
      },
      projects: {
        sectionTitle: "Featured Projects",
        sectionSubtitle: "Showcase of applications and projects I've designed and developed",
        sourceCode: "Source Code",
        liveDemo: "Live Demo",
      },
      education: {
        sectionTitle: "Education History",
        sectionSubtitle: "Academic background and qualifications",
      },
      certificates: {
        sectionTitle: "Certificates & Achievements",
        sectionSubtitle: "Official certifications and assessment credentials",
        viewFull: "View Full",
      },
      goals: {
        sectionTitle: "Career Goals & Interests",
      },
      contact: {
        sectionTitle: "Get In Touch",
        sectionSubtitle: "Feel free to reach out for collaborations, questions, or just a chat!",
        sendEmail: "Send Email",
        copyEmail: "Copy Email",
        copied: "Copied!",
        openGithub: "View GitHub",
        sendMessage: "Send Message",
      },
      footer: {
        rights: "All rights reserved.",
      },
      navbar: {
        switchLanguage: "Switch Language",
        toggleTheme: "Toggle Theme",
        toggleMenu: "Toggle Menu",
      },
    },
  },
};
