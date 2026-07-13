// รอให้โครงสร้าง HTML โหลดเสร็จสมบูรณ์ก่อนทำงาน
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. ระบบสลับโหมดมืด/สว่าง (Dark Mode Toggle)
    // ==========================================
    const themeBtn = document.getElementById('theme-btn');
    
    // ตรวจสอบความจำเดิมใน Browser ว่าผู้ใช้เคยเปิดโหมดมืดไว้ไหม
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeBtn.textContent = '☀️ โหมดสว่าง';
    }

    themeBtn.addEventListener('click', () => {
        // สลับ Class 'dark-mode' ที่ตัว <body>
        document.body.classList.toggle('dark-mode');
        
        // เช็คสถานะปัจจุบันเพื่อเปลี่ยนข้อความบนปุ่มและบันทึกค่าลงหน่วยความจำ
        if (document.body.classList.contains('dark-mode')) {
            themeBtn.textContent = '☀️ โหมดสว่าง';
            localStorage.setItem('theme', 'dark');
        } else {
            themeBtn.textContent = '🌙 โหมดมืด';
            localStorage.setItem('theme', 'light');
        }
    });

    // ==========================================
    // 2. ปุ่มเลื่อนขึ้นด้านบน (Back to Top Button)
    // ==========================================
    const scrollTopBtn = document.getElementById('scroll-top-btn');

    // ตรวจจับการ Scroll หน้าจอ: ถ้ารูดลงมาเกิน 300px ให้โชว์ปุ่ม
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    // เมื่อกดปุ่ม ให้เลื่อนหน้าจอกลับไปด้านบนสุดแบบนุ่มนวล
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // เลื่อนแบบสมูท ไม่กระตุก
        });
    });
});