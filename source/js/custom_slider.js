document.addEventListener('DOMContentLoaded', () => {
    initCustomGalleryCard();
});
// 适配 Anzhiyu 主题的 PJAX 无刷新加载
document.addEventListener('pjax:complete', () => {
    initCustomGalleryCard();
});

function initCustomGalleryCard() {
    // 寻找右侧卡片容器
    const rightContainer = document.querySelector('.topGroup, #recent-post-top, #swiper_container_blog');
    
    // 如果找不到容器，或者已经初始化过了，就退出
    if (!rightContainer || document.querySelector('#custom-gallery-card')) return;

    // 1. 你想轮播的封面图
    const photos = [
        '/RecordingsForYihanWang/img/image_surface.jpg',
        '/RecordingsForYihanWang/img/gettyimages-2296699948-594x594.jpg',
        '/RecordingsForYihanWang/img/gettyimages-2233180446-594x594.jpg',
    ];

    const targetUrl = '/RecordingsForYihanWang/gallery/';

    // 2. 替换内部结构，清空原来的 404 卡片
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

    // 3. 自动轮播逻辑
    if (photos.length > 1) {
        let currentIndex = 0;
        const slides = rightContainer.querySelectorAll('.gallery-slide-bg');
        
        setInterval(() => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % photos.length;
            slides[currentIndex].classList.add('active');
        }, 3000);
    }
}

function changeRandomToCompetition() {
  const selectors = [
    '.todayCard',
    '#todayCard',
    '.topGroup .recent-post-item a[onclick*="toRandomPost"]',
    '.topGroup .recent-post-item.todayCard'
  ];
  
  selectors.forEach(sel => {
    const el = document.querySelector(sel);
    if (el) {
      el.removeAttribute('onclick');
      el.setAttribute('href', '/RecordingsForYihanWang/competitions/');
      el.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof pjax !== 'undefined' && pjax.loadUrl) {
          pjax.loadUrl('/RecordingsForYihanWang/competitions/');
        } else {
          window.location.href = '/RecordingsForYihanWang/competitions/';
        }
      };
    }
  });
}

document.addEventListener('DOMContentLoaded', changeRandomToCompetition);
document.addEventListener('pjax:complete', changeRandomToCompetition);
