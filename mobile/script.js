document.addEventListener('DOMContentLoaded', function() {
    // 获取当前页面路径
    const currentPath = window.location.pathname;
    const pageName = currentPath.split('/').pop();
    
    // 设置导航栏高亮
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (pageName === href || (pageName === '' && href === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // 按钮事件监听
    const likeBtn = document.querySelector('.like-btn');
    if (likeBtn) {
        likeBtn.addEventListener('click', function() {
            alert('Thank you for your like!');
        });
    }
    
    const collectBtn = document.querySelector('.collect-btn');
    if (collectBtn) {
        collectBtn.addEventListener('click', function() {
            alert('Successfully collected!');
        });
    }
});