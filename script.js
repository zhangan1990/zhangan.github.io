// 导航栏响应式切换
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
        
        // 如果导航菜单是展开的，点击后关闭
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// 页面滚动时导航栏样式变化
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// 技能进度条动画
const skillBars = document.querySelectorAll('.skill-progress');
    
// 检查元素是否在视口中
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// 窗口滚动时检查技能部分是否在视口中
function checkSkills() {
    const skillsSection = document.querySelector('#skills');
    if (isInViewport(skillsSection)) {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
        
        // 移除滚动监听器，避免重复执行
        window.removeEventListener('scroll', checkSkills);
    }
}

// 初始检查
if (document.querySelector('#skills')) {
    window.addEventListener('scroll', checkSkills);
    checkSkills();
}

// 表单提交处理
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('感谢您的留言！我会尽快回复您。');
        this.reset();
    });
}