// welcome screen
window.addEventListener('load', () => {
// // //   // الصفحة تطلع فوق خالص أول ما تعمل ريلود
 window.scrollTo(0, 0);

const preloader = document.getElementById('preloader');
  

   setTimeout(() => {
preloader.style.opacity = '0';
 setTimeout(() => {
 preloader.style.visibility = 'hidden';
}, 400); 
 }, 800); 
});
document.addEventListener("DOMContentLoaded", function() {

//  background
  VANTA.NET({
  el: "#vanta-bg",
  mouseControls: false, // زي ما طلبت مقفولة عشان الهدوء
  touchControls: false,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  // --- التعديل هنا لتقريب اللون من الـ Gradient ---
  color: 0x6366f1,          // لون أزرق نيلي هادي يتماشى مع البداية والنهاية
  backgroundColor: 0x0b1120, // الخلفية الداكنة بتخلي الـ Gradient ينطق
  points: 8.00,             // العدد سمبل زي ما اتفقنا
  maxDistance: 25.00,
  spacing: 20.00
});
  // 3. حركة الإخفاء والظهور (Scroll Reveal)
  const reveals = document.querySelectorAll(".reveal");
  const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

  const scrollObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  reveals.forEach(reveal => {
    scrollObserver.observe(reveal);
  });

  // 4. إغلاق قائمة الموبايل عند الضغط على أي رابط
  const navLinks = document.querySelectorAll('.nav-links a');
  const menuToggle = document.getElementById('menu-toggle');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.checked = false;
    });
  });


document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const toast = document.getElementById('custom-toast');
    const progressBar = document.querySelector('.toast-progress');

    // إظهار التوست
    toast.classList.add('show');

    // تحريك الـ Progress Bar
    progressBar.style.transition = 'none';
    progressBar.style.width = '100%';
    
    setTimeout(() => {
        progressBar.style.transition = 'width 3s linear';
        progressBar.style.width = '0%';
    }, 10);

    // إخفاء التوست بعد 3 ثواني
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);

    this.reset();
});

});