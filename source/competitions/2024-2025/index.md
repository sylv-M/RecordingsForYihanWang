---
title: 2024–2025 赛季比赛合集
date: 2026-10-04 12:00:00
type: page
comments: false
top_img: false
---

<style>
.back-btn { 
  display: inline-flex; 
  align-items: center; 
  gap: 6px; 
  padding: 8px 20px; 
  border-radius: 9999px; 
  background: #c084fc;   
  color: #ffffff !important; 
  font-size: 0.95rem; 
  font-weight: 600; 
  text-decoration: none !important; 
  border: 2px solid #ffffff; 
  box-shadow: 0 4px 12px rgba(192, 132, 252, 0.35); 
  transition: all 0.3s ease; 
  margin-bottom: 20px; 
}

.back-btn:hover { 
  background: #a855f7;   
  color: #ffffff !important; 
  border-color: #ffffff; 
  transform: translateY(-2px); 
  box-shadow: 0 6px 18px rgba(168, 85, 247, 0.45); 
  text-decoration: none !important; 
}

.comp-station-title { 
  font-size: 1.3rem; 
  font-weight: 700; 
  margin: 25px 0 15px 0; 
  color: var(--anzhiyu-fontcolor, #333); 
  display: block !important;
  height: auto !important; 
  min-height: 0 !important; 
  max-height: none !important;
  line-height: 1.4 !important; 
  padding: 0 !important;
}

/* 电脑端 & iPad：锁定一行两个 */
.program-grid { 
  display: grid !important; 
  grid-template-columns: repeat(2, 1fr) !important; 
  gap: 20px !important; 
  margin-bottom: 30px !important; 
}

.program-grid > p:empty,
.program-grid > br {
  display: none !important;
}

/* 手机端：单列竖排 */
@media screen and (max-width: 768px) {
  .comp-station-title {
    margin: 20px 0 10px 0 !important;
  }
  .program-grid { 
    display: flex !important; 
    flex-direction: column !important; 
    gap: 16px !important; 
    margin-bottom: 25px !important; 
  }
}

.comp-card { background: var(--anzhiyu-card-bg, #fff); border: 1px solid var(--anzhiyu-card-border, #e3e8f7); border-radius: 14px; padding: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
.video-wrapper { position: relative; width: 100%; padding-bottom: 56.25%; height: 0; border-radius: 10px; overflow: hidden; background: #000; }
.video-wrapper video { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain; }
.comp-title { font-size: 1.05rem; font-weight: 600; margin-top: 12px; }
.comp-link-row { margin-top: 6px; font-size: 0.9rem; color: #666; }
.comp-link-row a { color: #fb7299 !important; font-weight: 600; text-decoration: none; }

/* 标题里的图片链接，用 span 绕过主题的 a 样式 */
.comp-gallery-link {
  display: inline !important;
  font-size: 0.82rem !important;
  font-weight: normal !important;
  color: #fb7299 !important;
  text-decoration: underline !important;
  margin-left: 10px !important;
  padding: 0 !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  line-height: inherit !important;
  vertical-align: baseline !important;
  position: static !important;
  width: auto !important;
  height: auto !important;
  min-height: 0 !important;
  max-height: none !important;
  cursor: pointer !important;
}
.comp-gallery-link::before,
.comp-gallery-link::after {
  display: none !important;
  content: none !important;
}
</style>

<a class="back-btn" href="/RecordingsForYihanWang/competitions/">←返回赛季列表</a>

<!-- 1. 世界青少年花样滑冰锦标赛 (世青赛) -->
<div class="comp-station-title">2025世界青少年花样滑冰锦标赛 (世青赛) <span class="comp-gallery-link" onclick="window.location.href='/RecordingsForYihanWang/gallery/25WJC/'">查看该场比赛图片</span></div>
<div class="program-grid">
  <!-- 短节目 (SP) -->
  <div class="comp-card">
    <div class="video-wrapper">
      <iframe 
        src="//player.bilibili.com/player.html?bvid=BV1Lq9KYnEbP&page=1&high_quality=1&danmaku=0&autoplay=0" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        allowfullscreen="true" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
      </iframe>
    </div>
    <div class="comp-title">短节目 (SP) 63.44分</div>
    <div class="comp-link-row">
      查看高清版请点击：<a href="https://www.bilibili.com/video/BV1Lq9KYnEbP/" target="_blank" rel="noopener noreferrer">原视频</a>
    </div>
  </div>

  <!-- 自由滑 (FS) - 本地仓库视频 -->
  <div class="comp-card">
    <div class="video-wrapper">
      <video 
        controls 
        preload="metadata" 
        playsinline 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain; background: #000;">
        <source src="/RecordingsForYihanWang/competitions/2024-2025/25世青赛自由滑.mp4" type="video/mp4">
      </video>
    </div>
    <div class="comp-title">自由滑 (FS) 112.07分</div>
    <div class="comp-link-row">
      查看高清版请点击：<a href="https://video.weibo.com/show?fid=1034:5139516181381226" target="_blank" rel="noopener noreferrer">原视频</a>
    </div>
  </div>
</div>

<!-- 2. 青少年大奖赛总决赛 (JGPF) -->
<div class="comp-station-title">青少年大奖赛总决赛 (JGPF) <span class="comp-gallery-link" onclick="window.location.href='/RecordingsForYihanWang/gallery/24JGPF/'">查看该场比赛图片</span></div>
<div class="program-grid">
  <!-- 短节目 (SP) -->
  <div class="comp-card">
    <div class="video-wrapper">
      <iframe 
        src="//player.bilibili.com/player.html?bvid=BV1p5ifYNETf&page=1&high_quality=1&danmaku=0&autoplay=0" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        allowfullscreen="true" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
      </iframe>
    </div>
    <div class="comp-title">短节目 (SP) 64.52分</div>
    <div class="comp-link-row">
      查看高清版请点击：<a href="https://www.bilibili.com/video/BV1p5ifYNETf/" target="_blank" rel="noopener noreferrer">原视频</a>
    </div>
  </div>

  <!-- 自由滑 (FS) -->
  <div class="comp-card">
    <div class="video-wrapper">
      <iframe 
        src="//player.bilibili.com/player.html?bvid=BV1VZizYPEqS&page=1&high_quality=1&danmaku=0&autoplay=0" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        allowfullscreen="true" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
      </iframe>
    </div>
    <div class="comp-title">自由滑 (FS) 123.38分</div>
    <div class="comp-link-row">
      查看高清版请点击：<a href="https://www.bilibili.com/video/BV1VZizYPEqS/" target="_blank" rel="noopener noreferrer">原视频</a>
    </div>
  </div>
</div>

<!-- 3. JGP 无锡站 -->
<div class="comp-station-title">JGP 无锡站 <span class="comp-gallery-link" onclick="window.location.href='/RecordingsForYihanWang/gallery/24Wuxi/'">查看该场比赛图片</span></div>
<div class="program-grid">
  <!-- 短节目 (SP) -->
  <div class="comp-card">
    <div class="video-wrapper">
      <iframe 
        src="//player.bilibili.com/player.html?bvid=BV1SP2mYBE75&page=1&high_quality=1&danmaku=0&autoplay=0" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        allowfullscreen="true" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
      </iframe>
    </div>
    <div class="comp-title">短节目 (SP) 63.15分</div>
    <div class="comp-link-row">
      查看高清版请点击：<a href="https://www.bilibili.com/video/BV1SP2mYBE75/" target="_blank" rel="noopener noreferrer">原视频</a>
    </div>
  </div>

  <!-- 自由滑 (FS) -->
  <div class="comp-card">
    <div class="video-wrapper">
      <iframe 
        src="//player.bilibili.com/player.html?bvid=BV1JV28YzEg6&page=1&high_quality=1&danmaku=0&autoplay=0" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        allowfullscreen="true" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
      </iframe>
    </div>
    <div class="comp-title">自由滑 (FS) 128.96分</div>
    <div class="comp-link-row">
      查看高清版请点击：<a href="https://www.bilibili.com/video/BV1JV28YzEg6/" target="_blank" rel="noopener noreferrer">原视频</a>
    </div>
  </div>

  <!-- 颁奖典礼 (自动与短节目对齐) -->
  <div class="comp-card">
    <div class="video-wrapper">
      <iframe 
        src="//player.bilibili.com/player.html?bvid=BV1wu28YVE5w&page=1&high_quality=1&danmaku=0&autoplay=0" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        allowfullscreen="true" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
      </iframe>
    </div>
    <div class="comp-title">颁奖仪式</div>
    <div class="comp-link-row">
      查看高清版请点击：<a href="https://www.bilibili.com/video/BV1wu28YVE5w/" target="_blank" rel="noopener noreferrer">原视频</a>
    </div>
  </div>
</div>

<!-- 4. JGP 泰国站 (曼谷) -->
<div class="comp-station-title">JGP 泰国站 (曼谷) <span class="comp-gallery-link" onclick="window.location.href='/RecordingsForYihanWang/gallery/24Bangkok/'">查看该场比赛图片</span></div>
<div class="program-grid">
  <!-- 短节目 (SP) -->
  <div class="comp-card">
    <div class="video-wrapper">
      <iframe 
        src="//player.bilibili.com/player.html?bvid=BV1F14pedEDq&page=1&high_quality=1&danmaku=0&autoplay=0" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        allowfullscreen="true" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
      </iframe>
    </div>
    <div class="comp-title">短节目 (SP) 65.39分</div>
    <div class="comp-link-row">
      查看高清版请点击：<a href="https://www.bilibili.com/video/BV1F14pedEDq/" target="_blank" rel="noopener noreferrer">原视频</a>
    </div>
  </div>

  <!-- 自由滑 (FS) -->
  <div class="comp-card">
    <div class="video-wrapper">
      <iframe 
        src="//player.bilibili.com/player.html?bvid=BV1QdSMY3EYK&page=1&high_quality=1&danmaku=0&autoplay=0" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        allowfullscreen="true" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
      </iframe>
    </div>
    <div class="comp-title">自由滑 (FS) 129.32分</div>
    <div class="comp-link-row">
      查看高清版请点击：<a href="https://www.bilibili.com/video/BV1QdSMY3EYK/" target="_blank" rel="noopener noreferrer">原视频</a>
    </div>
  </div>

  <!-- 颁奖典礼 -->
  <div class="comp-card">
    <div class="video-wrapper">
      <iframe 
        src="//player.bilibili.com/player.html?bvid=BV1w4tFeYEom&page=1&high_quality=1&danmaku=0&autoplay=0" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        allowfullscreen="true" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
      </iframe>
    </div>
    <div class="comp-title">颁奖仪式</div>
    <div class="comp-link-row">
      查看高清版请点击：<a href="https://www.bilibili.com/video/BV1w4tFeYEom/" target="_blank" rel="noopener noreferrer">原视频</a>
    </div>
  </div>

  <!-- 赛后采访 (第二行右侧，与自由滑对齐) -->
  <div class="comp-card">
    <div class="video-wrapper">
      <iframe 
        src="//player.bilibili.com/player.html?bvid=BV1XatAedEeL&page=1&high_quality=1&danmaku=0&autoplay=0" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        allowfullscreen="true" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
      </iframe>
    </div>
    <div class="comp-title">赛后采访</div>
    <div class="comp-link-row">
      查看高清版请点击：<a href="https://www.bilibili.com/video/BV1XatAedEeL/" target="_blank" rel="noopener noreferrer">原视频</a>
    </div>
  </div>
</div>
