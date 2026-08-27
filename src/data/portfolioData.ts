import { PortfolioData, NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'แนะนำตัว', href: '#profile' },
  { label: 'ทักษะ', href: '#skills' },
  { label: 'ผลงาน', href: '#projects' },
  { label: 'การศึกษา', href: '#education' },
  { label: 'กิจกรรม', href: '#activities' },
  { label: 'ติดต่อ', href: '#contact' },
  { label: 'เป้าหมาย', href: '#goals' },
];

export const portfolioData: PortfolioData = {
  name: 'นายศุภวิชญ์ หาญมนตรี',
  role: 'นักศึกษาปีที่ 2 | วิทยาการคอมพิวเตอร์ | มหาวิทยาลัยราชภัฏอุดรธานี',
  interests: ['AI', 'Web Development', 'Data Science', 'Backend Development'],
  avatar: 'asset/profile.jpeg',
  skills: [
    {
      title: 'Programming',
      icon: 'braces',
      skills: ['Python, C, PHP', 'HTML/CSS, JavaScript'],
    },
    {
      title: 'AI & Data',
      icon: 'cpu',
      skills: ['SQL'],
    },
    {
      title: 'Tools',
      icon: 'tools',
      skills: ['Git, VS Code', 'Jetbrains IDE, Azure'],
    },
    {
      title: 'Soft Skills',
      icon: 'users',
      skills: ['การสื่อสาร, การทำงานเป็นทีม', 'การแก้ปัญหา'],
    },
  ],
  projects: [
    {
      title: 'Pop-siam',
      description: 'โปรเจ็คสันทนาการที่สร้างขึ้นเพื่อศึกษาการใช้งาน Web Sockets',
      image: 'asset/pop-siam.png',
      githubUrl: 'https://github.com/Supawish35/Pop-siam',
      demoUrl: 'https://pop-siam.onrender.com',
    },
  ],
  education: [
    {
      degree: 'ปริญญาตรี',
      institution: 'คณะวิทยาศาสตร์, ม.ราชภัฏอุดรธานี',
      years: '2567-ปัจจุบัน',
    },
    {
      degree: 'ระดับมัธยมศึกษา',
      institution: 'โรงเรียนพรเจริญวิทยา',
      years: '2560-2567',
    },
    {
      degree: 'ระดับชั้นประถมศึกษา',
      institution: 'โรงเรียนบ้านดงเสียด',
      years: '2554-2560',
    },
  ],
  certificates: [
    {
      title: 'B2 English Certificate',
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
  careerInterest: 'ฉันมีความมุ่งมั่นที่จะเป็น Data Scientist ที่สามารถนำข้อมูลมาสร้างประโยชน์ได้',
};

