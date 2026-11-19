import { Language, NavItem, PortfolioData } from '../types';

export interface TranslationContent {
  meta: {
    title: string;
    description: string;
  };
  navItems: NavItem[];
  portfolioData: PortfolioData;
  ui: {
    hero: {
      badgeLeft: string;
      eyebrow: string;
      interestsLabel: string;
      viewProjects: string;
      contact: string;
    };
    capabilities: {
      eyebrow: string;
      sectionTitle: string;
      sectionSubtitle: string;
      viewProof: string;
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
      caseStudy: string;
      liveBadge: string;
      moreWorkEyebrow: string;
      moreWorkTitle: string;
      moreWorkSubtitle: string;
      viewRepo: string;
      modal: {
        role: string;
        problem: string;
        architecture: string;
        highlights: string;
        stack: string;
        close: string;
      };
    };
    education: {
      sectionTitle: string;
      sectionSubtitle: string;
    };
    certificates: {
      sectionTitle: string;
      sectionSubtitle: string;
      viewFull: string;
      openOriginal: string;
      close: string;
    };
    contact: {
      eyebrow: string;
      sectionTitle: string;
      sectionSubtitle: string;
      internshipCta: string;
      internshipSubject: string;
      internshipBody: string;
      freelanceCta: string;
      freelanceSubject: string;
      freelanceBody: string;
      copyEmail: string;
      copied: string;
      openGithub: string;
    };
    footer: {
      rights: string;
      backToTop: string;
    };
    navbar: {
      switchLanguage: string;
      toggleMenu: string;
    };
  };
}

export const translations: Record<Language, TranslationContent> = {
  th: {
    meta: {
      title: 'ศุภวิชญ์ หาญมนตรี | พัฒนาเว็บแอป ระบบหลังบ้านเรียลไทม์ และเครื่องมือใช้งานจริง',
      description:
        'นักศึกษาวิทยาการคอมพิวเตอร์ ปี 3 พัฒนาเว็บแอป ระบบหลังบ้าน และเครื่องมือด้วย TypeScript, Python, WebSockets, C# และ SQL เปิดรับฝึกงานและงานฟรีแลนซ์',
    },
    navItems: [
      { label: 'เกี่ยวกับผม', href: '#about' },
      { label: 'สิ่งที่ทำได้', href: '#capabilities' },
      { label: 'ผลงาน', href: '#projects' },
      { label: 'ทักษะและการศึกษา', href: '#skills' },
      { label: 'ติดต่อ', href: '#contact' },
    ],
    portfolioData: {
      name: 'ศุภวิชญ์ หาญมนตรี',
      role: 'วิทยาการคอมพิวเตอร์ ปี 3 · ม.ราชภัฏอุดรธานี',
      availability: 'เปิดรับฝึกงาน & งานฟรีแลนซ์',
      headline: 'พัฒนาเว็บแอป ระบบหลังบ้านเรียลไทม์ และเครื่องมือที่ใช้งานได้จริง',
      summary:
        'ผมเขียนด้วย TypeScript, Python, WebSockets, C# และ SQL ตั้งแต่เซิร์ฟเวอร์ซิงค์สถานะเรียลไทม์ เว็บเครื่องมือคำนวณ และตัววิเคราะห์ข้อมูลบนเบราว์เซอร์ ไปจนถึงส่วนขยายเดสก์ท็อป Linux ทุกชิ้นเปิดให้ลองใช้งานและอ่านซอร์สโค้ดได้บน GitHub',
      coreStack: ['TypeScript', 'Python', 'WebSockets', 'C#', 'SQL'],
      facts: ['3 โปรเจกต์ออนไลน์', 'English B2', 'TS · Python · SQL'],
      interests: [
        'Software Engineering',
        'Full-Stack Web',
        'Backend Development',
        'AI & Machine Learning',
        'Data Tools',
      ],
      avatar: 'asset/profile.webp',
      about: {
        eyebrow: 'ABOUT ME',
        title: 'รับผิดชอบงานจนจบ พร้อมใช้จริงตั้งแต่วันแรก',
        lead: 'ผมชื่อศุภวิชญ์ หาญมนตรี นักศึกษาชั้นปีที่ 3 สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏอุดรธานี เวลาเจอโจทย์จริงหรือปัญหาที่น่าสนใจ ผมชอบลงมือออกแบบและสร้างให้เป็นเว็บหรือเครื่องมือที่เปิดใช้งานได้ทันที',
        body: 'จากการสร้างระบบซิงค์แบบเรียลไทม์ด้วย Python aiohttp และ WebSockets ใน Pop-siam เครื่องมือคำนวณสิทธิ Thai-Help-Thai ตัววิเคราะห์ผู้ติดตาม Instagram ที่ประมวลผลในเบราว์เซอร์ทั้งหมด ไปจนถึงระบบ POS ด้วย C# และ SQL Server รวมถึงส่วนขยาย GNOME Shell บน Linux ผมสามารถรับผิดชอบงานตั้งแต่ต้นจนจบด้วยตัวเอง (High Ownership) หรือทำงานร่วมกับทีมได้อย่างคล่องตัว ทั้งรูปแบบ Remote และ Hybrid',
        details: [
          { label: 'การศึกษา', value: 'วิทยาการคอมพิวเตอร์ ปี 3 · ม.ราชภัฏอุดรธานี' },
          { label: 'ภาษาและเครื่องมือหลัก', value: 'TypeScript · Python · C# · SQL · WebSockets' },
          { label: 'ภาษาอังกฤษ', value: 'ระดับ B2 Upper-Intermediate (UDRU-ET)' },
          { label: 'ความพร้อมร่วมงาน', value: 'ฝึกงาน Software Engineering (Remote / Hybrid) & งานฟรีแลนซ์เว็บแอป' },
        ],
      },
      capabilities: [
        {
          number: '01',
          title: 'Full-Stack Web Apps',
          description:
            'พัฒนาเว็บแอปที่ใช้งานลื่นไหลทั้งบนมือถือและเดสก์ท็อป รองรับ Light/Dark UI จัดการ State ฝั่งไคลเอนต์อย่างเป็นระบบ พร้อมดีพลอยจริงบน Vercel และ Render',
          stack: ['TypeScript', 'React', 'JavaScript', 'HTML/CSS', 'Tailwind'],
          href: '#project-follow-back-detector',
        },
        {
          number: '02',
          title: 'Real-Time & Backend Systems',
          description:
            'สร้างบริการหลังบ้านแบบ Asynchronous ด้วย Python WebSockets สำหรับซิงค์ผู้ใช้งานพร้อมกัน พร้อมเชื่อมต่อฐานข้อมูล SQL Server และวางโครงสร้าง C#/.NET',
          stack: ['Python', 'aiohttp', 'WebSockets', 'C#', 'SQL'],
          href: '#project-pop-siam',
        },
        {
          number: '03',
          title: 'Data, Utility & Systems Tools',
          description:
            'แปลงเงื่อนไขที่ซับซ้อนและข้อมูลดิบ (JSON/CSV) ให้เป็นเครื่องมือเว็บที่ประมวลผลทันทีฝั่งผู้ใช้ รวมถึงสร้างส่วนขยายเดสก์ท็อป Linux และไปป์ไลน์ทดลองโมเดล ML',
          stack: ['Python', 'Data Parsing', 'GNOME Shell', 'Git', 'Azure'],
          href: '#more-work',
        },
      ],
      skills: [
        {
          title: 'Programming language',
          icon: 'braces',
          skills: [
            'Python, C, PHP',
            'HTML/CSS, JavaScript',
            'C#, TypeScript',
          ],
        },
        {
          title: 'Tools & Data',
          icon: 'tools',
          skills: ['Git', 'VS Code', 'JetBrains IDE', 'Azure', 'SQL'],
        },
        {
          title: 'Soft Skills',
          icon: 'users',
          skills: ['การสื่อสาร', 'การทำงานเป็นทีม', 'การแก้ปัญหาอย่างเป็นระบบ'],
        },
      ],
      projects: [
        {
          id: 'pop-siam',
          title: 'Pop-siam',
          tagline: 'เซิร์ฟเวอร์โต้ตอบเรียลไทม์ด้วย WebSockets',
          description:
            'เว็บแอปพลิเคชันโต้ตอบพร้อมกันแบบเรียลไทม์ ขับเคลื่อนด้วยเซิร์ฟเวอร์ Python aiohttp เพื่อซิงค์จำนวนคลิกและสถานะข้ามเบราว์เซอร์ทั้งหมดทันที',
          stack: ['Python', 'aiohttp', 'WebSockets', 'asyncio', 'JavaScript'],
          image: 'asset/pop-siam.webp',
          displayUrl: 'pop-siam.onrender.com',
          githubUrl: 'https://github.com/Supawish35/Pop-siam',
          demoUrl: 'https://pop-siam.onrender.com',
          caseStudy: {
            role: 'ผู้พัฒนา Full-Stack & Backend (Python + Frontend)',
            problem:
              'การอัปเดตตัวนับกลางเมื่อมีผู้ใช้กดโต้ตอบพร้อมกันหลายเครื่องจำเป็นต้องลดความหน่วงในการสื่อสารและป้องกันข้อมูลคลาดเคลื่อนจากการอัปเดตพร้อมกัน (Race Condition)',
            architecture:
              'ใช้เว็บเซิร์ฟเวอร์แบบ Asynchronous ด้วย Python aiohttp คู่กับ WebSocketResponse โดยเก็บรายการการเชื่อมต่อใน peers set ใช้ asyncio.Lock() ควบคุมการอัปเดตยอดรวม และบันทึกค่าถาวรลงไฟล์ (total.txt) ก่อนกระจายข้อมูลไปยังไคลเอนต์ทุกเครื่องที่ออนไลน์อยู่',
            highlights: [
              'สื่อสารสองทางแบบเต็มรูปแบบ (Full-duplex) ผ่าน WebSockets ลด Overhead จากการ Poll HTTP ซ้ำๆ',
              'ใช้ asyncio.Lock() จัดคิวการแก้ไขสถานะร่วมกันใน AppState ป้องกันการเขียนทับข้อมูล',
              'อ่านและบันทึกยอดรวมลงไฟล์อัตโนมัติเพื่อให้ค่าคงอยู่แม้รีสตาร์ทเซิร์ฟเวอร์บน Render',
            ],
          },
        },
        {
          id: 'thai-help-thai',
          title: 'Thai-Help-Thai Calculator',
          tagline: 'เครื่องมือคำนวณสิทธิ 60/40 แบบย้อนกลับได้ทุกช่อง',
          description:
            'เว็บเครื่องมือคำนวณส่วนลดและยอดร่วมจ่ายโครงการรัฐไทยช่วยไทยพลัส แปลงเงื่อนไขเพดานรายวัน 200 บาทให้คำนวณได้จากทั้งยอดรัฐ ยอดจ่ายเอง หรือยอดรวม',
          stack: ['JavaScript', 'OOP Rule Engine', 'HTML/CSS', 'Render'],
          image: 'asset/image.png',
          displayUrl: 'thai-help-thai.onrender.com',
          githubUrl: 'https://github.com/Supawish35/thai_help_thai',
          demoUrl: 'https://thai-help-thai.onrender.com/',
          caseStudy: {
            role: 'ผู้พัฒนา Frontend & ลอจิกการคำนวณ',
            problem:
              'ผู้ใช้และร้านค้ามักสับสนเวลาคำนวณสัดส่วนร่วมจ่าย 60/40 ภายใต้เพดานรัฐช่วยสูงสุด 200 บาทต่อวัน โดยเฉพาะเมื่อทราบแค่ยอดใดยอดหนึ่ง (เช่น รู้แค่ยอดจ่ายเองหรือรู้แค่ยอดบิลรวม)',
            architecture:
              'รวบรวมเงื่อนไขทางธุรกิจไว้ในคลาส calculate_each_half ของ JavaScript พร้อมค่าคงที่ MAX_GOVERNMENT = 200 และเมธอดคำนวณแยกตามตัวแปรตั้งต้น เพื่อให้ UI แสดงผลลัพธ์ได้ทันทีแบบไม่ต้องรอเซิร์ฟเวอร์',
            highlights: [
              'รองรับการคำนวณแบบหลายทิศทาง (Bidirectional): กรอกได้ทั้งยอดรัฐช่วย ยอดจ่ายเอง หรือยอดรวมบิล',
              'จำกัดเพดาน MAX_GOVERNMENT = 200 บาทอัตโนมัติในทุกกรณีป้องกันตัวเลขเกินสิทธิ',
              'โครงสร้างโค้ดแบบ OOP แยกคลาสคำนวณออกจาก DOM ทำให้ตรวจสอบและดูแลต่อได้ง่าย',
            ],
          },
        },
        {
          id: 'follow-back-detector',
          title: 'Instagram Follow Back Detector',
          tagline: 'ตัววิเคราะห์ไฟล์ Export ข้อมูล Instagram 100% บนเบราว์เซอร์',
          description:
            'เครื่องมือตรวจสอบบัญชีที่ไม่ติดตามกลับ แฟนคลับ และผู้ติดตามร่วมจากไฟล์ JSON ทางการของ Instagram ทำงานในเครื่องผู้ใช้ทั้งหมด ไม่ต้องล็อกอิน',
          stack: ['JavaScript', 'JSON Parser', 'localStorage', 'CSV Export', 'Light/Dark UI'],
          image: 'asset/followback-detector-light.png',
          imageDark: 'asset/followback-detector-dark.png',
          displayUrl: 'followbackdetector.vercel.app',
          githubUrl: 'https://github.com/Supawish35/follow_back_detector',
          demoUrl: 'https://followbackdetector.vercel.app/',
          caseStudy: {
            role: 'ผู้พัฒนาและออกแบบผลิตภัณฑ์ (Client-Side Web App)',
            problem:
              'แอปเช็กผู้ติดตามภายนอกส่วนใหญ่ขอรหัสผ่าน Instagram ซึ่งเสี่ยงต่อการโดนแบนบัญชีหรือข้อมูลรั่วไหล ผู้ใช้ต้องการเครื่องมือที่ปลอดภัยและแยกกลุ่มบัญชีได้ชัดเจน',
            architecture:
              'ออกแบบเป็นเว็บแอปที่ประมวลผลฝั่งไคลเอนต์ 100% โดยอ่านไฟล์ JSON (followers และ following) จาก Instagram Export อย่างเป็นทางการบนเบราว์เซอร์โดยตรง ไม่ส่งข้อมูลออกไปยังเซิร์ฟเวอร์ใดๆ และเก็บรายชื่อยกเว้น (Whitelist) ไว้ใน localStorage',
            highlights: [
              'ความเป็นส่วนตัว 100%: ไม่ต้องกรอกรหัสผ่าน ไม่ใช้ API ภายนอก ข้อมูลไม่เคยออกจากเครื่อง',
              'แยกหมวดหมู่ชัดเจน: Not Following Back, Mutuals และ Fans พร้อมระบบ Whitelist ติดดาวบัญชีสำคัญ',
              'คัดลอกรายชื่อหรือดาวน์โหลดเป็นไฟล์ CSV ได้ในคลิกเดียว พร้อมอินเทอร์เฟซ Light/Dark Mode',
            ],
          },
        },
      ],
      moreWork: [
        {
          id: 'toggle-top-bar',
          title: 'Toggle Top Bar (GNOME Shell)',
          badge: 'โอเพ่นซอร์ส · Linux',
          badgeTone: 'accent',
          summary:
            'ส่วนขยาย GNOME Shell (รองรับเวอร์ชัน 45–51) สำหรับเปิด-ปิดแถบด้านบนด้วยคีย์ลัด พร้อมขยายหน้าต่าง Pop-Shell Tiling ให้เต็มความสูงหน้าจอ และหน้าตั้งค่า GSettings',
          stack: ['JavaScript', 'GNOME Shell', 'GSettings', 'Linux'],
          githubUrl: 'https://github.com/Supawish35/toggle-top-bar',
        },
        {
          id: 'ai-subject-lab',
          title: 'AI & ML Lab Benchmarks',
          badge: 'งานวิชาการในชั้นเรียน',
          badgeTone: 'coursework',
          summary:
            'ชุดแล็บ Machine Learning 8 บท ด้วย Python เปรียบเทียบ ANN (MLP), Decision Tree, Naive Bayes, K-NN และ PCA/K-Means (Split 70/30) พร้อมรายงาน HTML และเว็บจำลองผล',
          stack: ['Python', 'ANN / ML', 'PCA & Clustering', 'HTML Reports'],
          githubUrl: 'https://github.com/Supawish35/AI_Subject_lab',
        },
        {
          id: 'minimart',
          title: 'Minimart POS & Inventory',
          badge: 'แอปเดสก์ท็อป · C#',
          badgeTone: 'neutral',
          summary:
            'ระบบขายหน้าร้านและคลังสินค้าหลายหน้าต่างด้วย C# .NET WinForms เชื่อมต่อฐานข้อมูล SQL Server ครอบคลุมระบบล็อกอิน POS จัดการสินค้า/หมวดหมู่/พนักงาน และรายงานยอดขาย',
          stack: ['C#', '.NET WinForms', 'SQL Server', 'CRUD / POS'],
          githubUrl: 'https://github.com/Supawish35/Minimart',
        },
      ],
      education: [
        {
          degree: 'ปริญญาตรี วิทยาการคอมพิวเตอร์ (กำลังศึกษาชั้นปีที่ 3)',
          institution: 'คณะวิทยาศาสตร์, มหาวิทยาลัยราชภัฏอุดรธานี',
          years: '2567 - ปัจจุบัน',
        },
        {
          degree: 'ระดับมัธยมศึกษา',
          institution: 'โรงเรียนพรเจริญวิทยา',
          years: '2560 - 2567',
        },
      ],
      certificates: [
        {
          title: 'B2 English Certificate (UDRU-ET)',
          image: 'asset/UDRU-ET_B2_Set1.png',
        },
      ],
      contacts: [
        {
          name: 'Email',
          url: 'mailto:supawish35@gmail.com',
          type: 'email',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/Supawish35',
          type: 'github',
        },
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/supawish.hanmontree/',
          type: 'facebook',
        },
      ],
      careerInterest:
        'เปิดรับโอกาสฝึกงาน Software Engineering (สหกิจศึกษา / ฝึกงาน) และงานพัฒนาเว็บแอปฟรีแลนซ์',
    },
    ui: {
      hero: {
        badgeLeft: 'มรภ.อุดรธานี · วิทย์-คอม ปี 3',
        eyebrow: 'Full-Stack · Backend · Systems',
        interestsLabel: 'โฟกัส:',
        viewProjects: 'ดูผลงานที่ใช้งานจริง',
        contact: 'ติดต่อร่วมงาน / จ้างงาน',
      },
      capabilities: {
        eyebrow: 'What I Build',
        sectionTitle: 'สิ่งที่ผมสร้างได้จริง',
        sectionSubtitle: 'ความสามารถหลักสำหรับทั้งทีมวิศวกรรมซอฟต์แวร์และลูกค้าฟรีแลนซ์ พร้อมผลงานอ้างอิงทุกหัวข้อ',
        viewProof: 'ดูผลงานจริง',
      },
      skills: {
        sectionTitle: 'เครื่องมือที่ใช้',
        sectionSubtitle: 'ภาษาโปรแกรมมิ่ง เครื่องมือ และทักษะการทำงาน',
      },
      projects: {
        eyebrow: 'Selected Work',
        sectionTitle: 'ผลงานที่ใช้งานได้จริง',
        sectionSubtitle: 'ทุกโปรเจกต์ออนไลน์และเปิดอ่านซอร์สโค้ดได้ กดดู Case Study เพื่อดูสถาปัตยกรรมและแนวคิดเบื้องหลัง',
        sourceCode: 'Source Code',
        liveDemo: 'Live Demo',
        caseStudy: 'Case Study',
        liveBadge: 'LIVE',
        moreWorkEyebrow: 'More Engineering & Coursework',
        moreWorkTitle: 'งานวิศวกรรมอื่นๆ และแล็บในชั้นเรียน',
        moreWorkSubtitle:
          'คลังโค้ดบน GitHub ที่แสดงทักษะนอกเหนือจากเว็บเบราว์เซอร์ ทั้งส่วนขยาย Linux Desktop งานทดลองโมเดล AI ในชั้นเรียน และระบบจัดการร้านค้า C# + SQL Server',
        viewRepo: 'ดูซอร์สโค้ดบน GitHub',
        modal: {
          role: 'บทบาท',
          problem: 'โจทย์และปัญหาที่แก้',
          architecture: 'สถาปัตยกรรมและแนวทางแก้ไข',
          highlights: 'จุดเด่นทางวิศวกรรม',
          stack: 'เทคโนโลยีที่ใช้',
          close: 'ปิดหน้าต่าง',
        },
      },
      education: {
        sectionTitle: 'การศึกษา',
        sectionSubtitle: 'ประวัติการศึกษา',
      },
      certificates: {
        sectionTitle: 'ใบรับรอง',
        sectionSubtitle: 'ผลการทดสอบความสามารถ',
        viewFull: 'ขยายดูภาพเต็ม',
        openOriginal: 'เปิดไฟล์ต้นฉบับ',
        close: 'ปิด',
      },
      contact: {
        eyebrow: 'Contact',
        sectionTitle: 'พร้อมร่วมทีมหรือสร้างโปรเจกต์ของคุณ',
        sectionSubtitle: 'เลือกหัวข้อเพื่อเปิดอีเมลพร้อมข้อความเริ่มต้น หรือคัดลอกอีเมลและดูโค้ดบน GitHub ได้ทันที',
        internshipCta: 'ติดต่อเรื่องฝึกงาน / สมัครงาน',
        internshipSubject: '[Internship / SWE Role] ติดต่อสอบถามการร่วมงานกับคุณศุภวิชญ์',
        internshipBody:
          'สวัสดีครับ/ค่ะ คุณศุภวิชญ์\n\nทางทีมได้ดูผลงานจากพอร์ตโฟลิโอแล้ว และสนใจพูดคุยเกี่ยวกับตำแหน่งฝึกงาน / Junior Developer:\n- บริษัท / ทีม:\n- รูปแบบงาน (Remote / Hybrid / Onsite):\n- ช่วงเวลาที่สะดวกนัดสัมภาษณ์:',
        freelanceCta: 'จ้างทำโปรเจกต์ฟรีแลนซ์',
        freelanceSubject: '[Freelance Project] สอบถามรายละเอียดงานพัฒนาเว็บ / เครื่องมือ',
        freelanceBody:
          'สวัสดีครับ/ค่ะ คุณศุภวิชญ์\n\nสนใจปรึกษาและจ้างทำโปรเจกต์:\n- ลักษณะงาน / ฟีเจอร์ที่ต้องการ:\n- ระยะเวลาที่ต้องการใช้งาน:\n- งบประมาณโดยประมาณ:',
        copyEmail: 'คัดลอกอีเมล',
        copied: 'คัดลอกแล้ว!',
        openGithub: 'เปิดดู GitHub',
      },
      footer: {
        rights: 'สงวนลิขสิทธิ์',
        backToTop: 'กลับขึ้นด้านบน',
      },
      navbar: {
        switchLanguage: 'เปลี่ยนภาษา',
        toggleMenu: 'เมนู',
      },
    },
  },
  en: {
    meta: {
      title: 'Supphawit Hanmontree | Full-Stack Web, Real-Time Backends & Tools',
      description:
        'Third-year Computer Science student building full-stack web apps, async WebSocket backends, and developer tools in TypeScript, Python, C#, and SQL. Open for SWE internships and freelance work.',
    },
    navItems: [
      { label: 'About Me', href: '#about' },
      { label: 'What I Build', href: '#capabilities' },
      { label: 'Work', href: '#projects' },
      { label: 'Stack & Education', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
    portfolioData: {
      name: 'Supphawit Hanmontree',
      role: 'Computer Science, Year 3 · Udon Thani Rajabhat University',
      availability: 'Open for Internships & Freelance',
      headline: 'Full-stack web apps, real-time backends, and practical tools that ship live.',
      summary:
        'I build with TypeScript, Python, WebSockets, C#, and SQL—from async state-sync servers and client-side data utilities to Linux GNOME extensions. Every project is backed by public source code on GitHub.',
      coreStack: ['TypeScript', 'Python', 'WebSockets', 'C#', 'SQL'],
      facts: ['3 live projects', 'English B2', 'TS · Python · SQL'],
      interests: [
        'Software Engineering',
        'Full-Stack Web',
        'Backend Development',
        'AI & Machine Learning',
        'Data Tools',
      ],
      avatar: 'asset/profile.webp',
      about: {
        eyebrow: 'ABOUT ME',
        title: 'High ownership from architecture to live deployment.',
        lead: "I'm Supphawit Hanmontree, a third-year Computer Science student at Udon Thani Rajabhat University. Rather than leaving code inside class folders, I turn real problems into tools anyone can open, test, and inspect.",
        body: 'From an async Python aiohttp WebSocket server (Pop-siam) and a 100% browser-based Instagram data analyzer to a C#/.NET SQL Server POS application and a GNOME Shell desktop extension, I enjoy owning features end-to-end—and collaborating cleanly within engineering teams across remote or hybrid setups.',
        details: [
          { label: 'Education', value: 'B.Sc. Computer Science (Year 3) · UDRU' },
          { label: 'Core Stack', value: 'TypeScript · Python · C# · SQL · WebSockets' },
          { label: 'English', value: 'B2 Upper-Intermediate (UDRU-ET)' },
          { label: 'Availability', value: 'SWE Internships (Remote / Hybrid) & Freelance Web Projects' },
        ],
      },
      capabilities: [
        {
          number: '01',
          title: 'Full-Stack Web Apps',
          description:
            'Responsive web interfaces with Light/Dark themes, clean client state management, and production deployments on Vercel and Render.',
          stack: ['TypeScript', 'React', 'JavaScript', 'HTML/CSS', 'Tailwind'],
          href: '#project-follow-back-detector',
        },
        {
          number: '02',
          title: 'Real-Time & Backend Systems',
          description:
            'Asynchronous Python WebSocket services for concurrent multi-user sync, paired with structured SQL Server data layers and C#/.NET logic.',
          stack: ['Python', 'aiohttp', 'WebSockets', 'C#', 'SQL'],
          href: '#project-pop-siam',
        },
        {
          number: '03',
          title: 'Data, Utility & Systems Tools',
          description:
            'Client-side JSON/CSV parsers, rule-based calculators, Linux GNOME Shell desktop extensions, and reproducible Python ML evaluation pipelines.',
          stack: ['Python', 'Data Parsing', 'GNOME Shell', 'Git', 'Azure'],
          href: '#more-work',
        },
      ],
      skills: [
        {
          title: 'Programming language',
          icon: 'braces',
          skills: [
            'Python, C, PHP',
            'HTML/CSS, JavaScript',
            'C#, TypeScript',
          ],
        },
        {
          title: 'Tools & Data',
          icon: 'tools',
          skills: ['Git', 'VS Code', 'JetBrains IDE', 'Azure', 'SQL'],
        },
        {
          title: 'Soft Skills',
          icon: 'users',
          skills: ['Communication', 'Teamwork', 'Problem Solving'],
        },
      ],
      projects: [
        {
          id: 'pop-siam',
          title: 'Pop-siam',
          tagline: 'Real-time WebSocket sync server in async Python',
          description:
            'Live multi-user interactive web app backed by an asynchronous Python aiohttp WebSocket server that synchronizes state across connected browsers.',
          stack: ['Python', 'aiohttp', 'WebSockets', 'asyncio', 'JavaScript'],
          image: 'asset/pop-siam.webp',
          displayUrl: 'pop-siam.onrender.com',
          githubUrl: 'https://github.com/Supawish35/Pop-siam',
          demoUrl: 'https://pop-siam.onrender.com',
          caseStudy: {
            role: 'Full-Stack & Backend Developer (Python + Frontend)',
            problem:
              'Keeping a shared global click counter accurate across concurrent browser sessions without polling lag or write race conditions.',
            architecture:
              'Built on Python aiohttp WebSocketResponse endpoints managing active clients in a peers set, protecting shared counter updates via asyncio.Lock(), persisting totals to disk (total.txt), and broadcasting deltas to all connected sessions.',
            highlights: [
              'Full-duplex WebSocket messaging eliminates repetitive HTTP polling overhead.',
              'Serialized state mutations with asyncio.Lock() keep concurrent increments consistent.',
              'File-backed persistence preserves total count across Render service restarts.',
            ],
          },
        },
        {
          id: 'thai-help-thai',
          title: 'Thai-Help-Thai Calculator',
          tagline: 'Bidirectional 60/40 subsidy rule solver',
          description:
            'Instant web calculator for the Thai Help Thai Plus co-pay program, encoding the 60/40 split and 200 THB daily government cap into a multi-input solver.',
          stack: ['JavaScript', 'OOP Rule Engine', 'HTML/CSS', 'Render'],
          image: 'asset/image.png',
          displayUrl: 'thai-help-thai.onrender.com',
          githubUrl: 'https://github.com/Supawish35/thai_help_thai',
          demoUrl: 'https://thai-help-thai.onrender.com/',
          caseStudy: {
            role: 'Frontend & Logic Developer',
            problem:
              'Shoppers and merchants frequently miscalculate the 60/40 government co-pay split once purchases approach or cross the 200 THB daily subsidy cap.',
            architecture:
              'Encapsulated all program constraints inside a pure JavaScript calculate_each_half class enforcing MAX_GOVERNMENT = 200, supporting instant calculation whether the user inputs government subsidy, personal spend, or total receipt amount.',
            highlights: [
              'Bidirectional solver computes missing values from any single entered field.',
              'Enforces the 200 THB daily cap across every calculation branch to prevent invalid outputs.',
              'Pure OOP domain class cleanly decoupled from UI DOM handlers.',
            ],
          },
        },
        {
          id: 'follow-back-detector',
          title: 'Instagram Follow Back Detector',
          tagline: 'Privacy-first client-side Instagram export analyzer',
          description:
            'Browser utility that parses official Instagram JSON data exports locally to detect non-followers, mutuals, and fans—zero logins, zero server uploads.',
          stack: ['JavaScript', 'JSON Parser', 'localStorage', 'CSV Export', 'Light/Dark UI'],
          image: 'asset/followback-detector-light.png',
          imageDark: 'asset/followback-detector-dark.png',
          displayUrl: 'followbackdetector.vercel.app',
          githubUrl: 'https://github.com/Supawish35/follow_back_detector',
          demoUrl: 'https://followbackdetector.vercel.app/',
          caseStudy: {
            role: 'Creator & Frontend Developer',
            problem:
              'Third-party Instagram tracker apps ask for account credentials or scrape sessions, putting accounts at risk of lockouts or privacy leaks.',
            architecture:
              'Runs 100% client-side in the browser: users drop their official Instagram JSON export folder, JavaScript diffs followers vs. following sets locally, persists starred Whitelist accounts in localStorage, and generates clipboard/CSV exports.',
            highlights: [
              'Zero-trust-risk architecture: no login, no password, no data ever leaves the browser.',
              'Categorizes Not Following Back, Mutuals, and Fans with persistent localStorage whitelisting.',
              'One-click clipboard copy, downloadable CSV export, and full Light/Dark theme support.',
            ],
          },
        },
      ],
      moreWork: [
        {
          id: 'toggle-top-bar',
          title: 'Toggle Top Bar (GNOME Shell)',
          badge: 'Open Source · Linux',
          badgeTone: 'accent',
          summary:
            'GNOME Shell extension (versions 45–51) that toggles the top panel via keyboard shortcut, expanding pop-shell tiled windows to full screen height with GSettings preferences.',
          stack: ['JavaScript', 'GNOME Shell', 'GSettings', 'Linux'],
          githubUrl: 'https://github.com/Supawish35/toggle-top-bar',
        },
        {
          id: 'ai-subject-lab',
          title: 'AI & ML Lab Benchmarks',
          badge: 'University Coursework',
          badgeTone: 'coursework',
          summary:
            '8-lab Python machine learning series comparing ANN (MLP), CART Decision Trees, Naive Bayes, K-NN, and PCA/K-Means clustering on 70/30 stratified splits with HTML reports & web simulator.',
          stack: ['Python', 'ANN / ML', 'PCA & Clustering', 'HTML Reports'],
          githubUrl: 'https://github.com/Supawish35/AI_Subject_lab',
        },
        {
          id: 'minimart',
          title: 'Minimart POS & Inventory',
          badge: 'Desktop App · C#',
          badgeTone: 'neutral',
          summary:
            'Multi-form C# .NET WinForms point-of-sale and inventory desktop app connected to SQL Server (Microsoft.Data.SqlClient) with login, POS billing, CRUD management, and sales reports.',
          stack: ['C#', '.NET WinForms', 'SQL Server', 'CRUD / POS'],
          githubUrl: 'https://github.com/Supawish35/Minimart',
        },
      ],
      education: [
        {
          degree: 'B.Sc. in Computer Science (3rd Year)',
          institution: 'Faculty of Science, Udon Thani Rajabhat University',
          years: '2024 - Present',
        },
        {
          degree: 'High School Diploma',
          institution: 'Phon Charoen Wittaya School',
          years: '2017 - 2024',
        },
      ],
      certificates: [
        {
          title: 'B2 English Certificate (UDRU-ET)',
          image: 'asset/UDRU-ET_B2_Set1.png',
        },
      ],
      contacts: [
        {
          name: 'Email',
          url: 'mailto:supawish35@gmail.com',
          type: 'email',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/Supawish35',
          type: 'github',
        },
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/supawish.hanmontree/',
          type: 'facebook',
        },
      ],
      careerInterest:
        'Open for Software Engineering internships and freelance web application builds.',
    },
    ui: {
      hero: {
        badgeLeft: 'UDRU · CS YEAR 3',
        eyebrow: 'Full-Stack · Backend · Systems',
        interestsLabel: 'Focus:',
        viewProjects: 'View projects',
        contact: 'Contact / Hire',
      },
      capabilities: {
        eyebrow: 'What I Build',
        sectionTitle: 'Three areas I deliver',
        sectionSubtitle: 'Core engineering capabilities for hiring teams and freelance clients—each backed by shipped code.',
        viewProof: 'View proof',
      },
      skills: {
        sectionTitle: 'Technical Stack',
        sectionSubtitle: 'Languages, tools, and engineering practices',
      },
      projects: {
        eyebrow: 'Selected Work',
        sectionTitle: 'Work that runs live',
        sectionSubtitle: 'Every featured app runs live online with public source code. Open any Case Study for problem framing and architecture.',
        sourceCode: 'Source Code',
        liveDemo: 'Live Demo',
        caseStudy: 'Case Study',
        liveBadge: 'LIVE',
        moreWorkEyebrow: 'More Engineering & Coursework',
        moreWorkTitle: 'Systems tooling, ML coursework & desktop apps',
        moreWorkSubtitle:
          'Additional public GitHub repositories demonstrating Linux desktop engineering, academic machine learning benchmarks, and C#/.NET SQL Server apps.',
        viewRepo: 'View on GitHub',
        modal: {
          role: 'Role',
          problem: 'The Problem',
          architecture: 'Architecture & Approach',
          highlights: 'Engineering Highlights',
          stack: 'Tech Stack',
          close: 'Close modal',
        },
      },
      education: {
        sectionTitle: 'Education',
        sectionSubtitle: 'Academic background',
      },
      certificates: {
        sectionTitle: 'Certificates',
        sectionSubtitle: 'Verified language proficiency',
        viewFull: 'View Full',
        openOriginal: 'Open Original',
        close: 'Close',
      },
      contact: {
        eyebrow: 'Contact',
        sectionTitle: "Let's build or work together.",
        sectionSubtitle: 'Pick an inquiry type to launch a pre-filled email, copy my address, or inspect my repositories on GitHub.',
        internshipCta: 'Internship / Job Inquiry',
        internshipSubject: '[Internship / SWE Role] Reaching out from your portfolio',
        internshipBody:
          'Hi Supphawit,\n\nWe reviewed your portfolio and would like to discuss an internship or junior developer opportunity:\n- Company / Team:\n- Work setup (Remote / Hybrid / Onsite):\n- Preferred interview window:',
        freelanceCta: 'Freelance Project',
        freelanceSubject: '[Freelance Project] Web app / tool inquiry',
        freelanceBody:
          'Hi Supphawit,\n\nI would like to discuss a freelance web project:\n- Project goal / features:\n- Target timeline:\n- Estimated budget:',
        copyEmail: 'Copy Email',
        copied: 'Copied!',
        openGithub: 'View GitHub',
      },
      footer: {
        rights: 'All rights reserved.',
        backToTop: 'Back to top',
      },
      navbar: {
        switchLanguage: 'Switch Language',
        toggleMenu: 'Toggle Menu',
      },
    },
  },
};
