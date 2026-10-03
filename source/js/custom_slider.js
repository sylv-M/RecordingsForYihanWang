document.addEventListener('DOMContentLoaded', () => {
    initCustomGalleryCard();
});
// 适配 Anzhiyu 主题的 PJAX 无刷新加载
document.addEventListener('pjax:complete', () => {
    initCustomGalleryCard();
});

function initCustomGalleryCard() {
    // 1. 修正了容器的选择器，匹配 Anzhiyu 的实际类名 .topGroup
    const rightContainer = document.querySelector('.topGroup, #recent-post-top, #swiper_container_blog');
    
    // 如果找不到容器，或者已经初始化过了，就退出
    if (!rightContainer || document.querySelector('#custom-gallery-card')) return;

    // 2. 轮播照片（根据你的截图，路径应该是这个）
    const photos = [
        '/RecordingsForYihanWang/img/image_surface.jpg',
        '/RecordingsForYihanWang/img/gettyimages-2296699948-594x594.jpg',
        '/RecordingsForYihanWang/img/gettyimages-2233180446-594x594.jpg',
    ];

    const targetUrl = '/RecordingsForYihanWang/gallery/';

    // 3. 替换内部结构，清空原来的 404 卡片
    rightContainer.innerHTML = `
        <a id="custom-gallery-card" href="${targetUrl}">
            <div class="gallery-slide-bg active" style="background-image: url('${photos[0]}');"></div>
            <div class="gallery-slide-bg" style="background-image: url('${photos[1]}');"></div>
            <div class="gallery-slide-bg" style="background-image: url('${photos[2]}');"></div>
            <div class="gallery-mask"></div>
            <div class="gallery-info">
                <span class="gallery-title">图集</span>
                <span class="gallery-arrow">→</span>
            </div>
        </a>
    `;

    // 4. 自动轮播逻辑 (使用 CSS 类名切换透明度，性能更好)
    if (photos.length > 1) {
        let currentIndex = 0;
        const slides = rightContainer.querySelectorAll('.gallery-slide-bg');
        
        setInterval(() => {
            // 移除当前图片的 active 类（透明）
            slides[currentIndex].classList.remove('active');
            
            // 计算下一张图片
            currentIndex = (currentIndex + 1) % photos.length;
            
            // 给下一张图片加上 active 类（显示）
            slides[currentIndex].classList.add('active');
        }, 3500); // 3.5秒换一张
    }
}
