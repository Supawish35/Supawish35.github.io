window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let currentSectionId = '';

    // วนลูปเช็คว่าตอนนี้เราอยู่ที่ section ไหน
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // -75 เพื่อให้ไฮไลท์ทำงานก่อนถึง section จริงเล็กน้อย (เผื่อความสูง navbar)
        if (pageYOffset >= sectionTop - 75) {
            currentSectionId = section.getAttribute('id');
        }
    });

    // วนลูปเพื่อเพิ่ม/ลบ คลาส 'active'
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSectionId) {
            link.classList.add('active');
        }
    });
});