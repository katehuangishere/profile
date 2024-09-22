// 平滑滾動效果
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 窗口調整時更新畫布大小
window.addEventListener('resize', function() {
});

// 平滑滾動效果優化（針對所有錨點）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 顯示或隱藏 "回到 intro" 按鈕
window.addEventListener('scroll', function() {
    var scrollTopBtn = document.getElementById('scrollTopBtn');
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

// 點擊按鈕平滑滾動到 intro 區域，速度更快
document.getElementById('scrollTopBtn').addEventListener('click', function(e) {
    e.preventDefault();

    // 自定義平滑滾動
    const targetPosition = document.querySelector('#intro').offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 100;
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const scrollAmount = Math.min(progress / duration, 1) * distance;
        window.scrollTo(0, startPosition + scrollAmount);
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
});


