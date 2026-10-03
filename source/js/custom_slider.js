document.addEventListener('DOMContentLoaded', () => {
    initCustomGalleryCard();
});
document.addEventListener('pjax:complete', () => {
    initCustomGalleryCard();
});

function initCustomGalleryCard() {
    // 寻找右侧卡片容器
    const rightContainer = document.querySelector('#swiper_container_blog, #swiper_container, #recent-post-top, .top_group');
    if (!rightContainer) return;

    // 1. 这里填入你想轮播的所有选手照片（后续有新照片直接往数组里加）
    const photos = [
        '/RecordingsForYihanWang/img/gettyimages-2296699948-594x594.jpg',
        // 后续上传新图直接加在这里：'/RecordingsForYihanWang/img/第二张照片.jpg',
    ];

    // 图集跳转的目标网址
    const targetUrl = '/RecordingsForYihanWang/gallery/';

    // 2. 彻底替换右侧结构为纯净的图集轮播卡片
    rightContainer.innerHTML = `
        <a id="custom-gallery-card" href="${targetUrl}">
            <div class="gallery-slide-bg" style="background-image: url('${photos[0]}');"></div>
            <div class="gallery-mask"></div>
            <div class="gallery-info">
                <span class="gallery-title">图集</span>
                <span class="gallery-arrow">→</span>
            </div>
        </a>
    `;

    // 3. 多张图片时自动轮播渐变
    if (photos.length > 1) {
        let currentIndex = 0;
        const bgElem = rightContainer.querySelector('.gallery-slide-bg');
        setInterval(() => {
            currentIndex = (currentIndex + 1) % photos.length;
            bgElem.style.opacity = '0';
            setTimeout(() => {
                bgElem.style.backgroundImage = `url('${photos[currentIndex]}')`;
                bgElem.style.opacity = '1';
            }, 500);
        }, 3500); // 3.5秒换一张
    }
}
