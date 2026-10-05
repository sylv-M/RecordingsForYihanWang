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

document.addEventListener('DOMContentLoaded', function () {
  initCompVideoCard();
});
// 兼容 anzhiyu 的 PJAX 无刷新跳转
document.addEventListener('pjax:complete', function () {
  initCompVideoCard();
});

function initCompVideoCard() {
  // 精准定位到首页的“比赛合集”卡片链接
  const compCard = document.querySelector('a[href*="competitions"], a[title*="比赛合集"]');
  if (!compCard) return;

  // 避免 PJAX 切换后重复插入
  if (compCard.querySelector('.card-bg-video')) return;

  // 创建视频元素
  const video = document.createElement('video');
  video.className = 'card-bg-video';
  video.src = '/RecordingsForYihanWang/videos/comp-preview.mp4'; // 换成你的视频路径
  video.autoplay = true;
  video.loop = true;
  video.muted = true;             // 必须静音，浏览器才允许自动播放
  video.playsInline = true;       // 保证 iOS / Safari 手机端不全屏跳出
  video.setAttribute('webkit-playsinline', 'true');
  video.setAttribute('x5-playsinline', 'true');

  // 将视频插入到卡片内部最底层
  compCard.style.position = 'relative';
  compCard.style.overflow = 'hidden';
  compCard.insertBefore(video, compCard.firstChild);
}
