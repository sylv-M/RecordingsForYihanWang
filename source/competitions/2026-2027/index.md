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

<a class="back-btn" href="/RecordingsForYihanWang/competitions/">⬅ 返回赛季列表</a>

<div class="comp-station-title">JGP 格鲁吉亚站(巴统) <span class="comp-gallery-link" onclick="window.location.href='/RecordingsForYihanWang/gallery/26Batumi/'">查看该场比赛图片</span></div>
<div class="program-grid">

  <!-- 短节目 (SP) -->
  <div class="comp-card">
    <div class="video-wrapper" style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; border-radius: 10px; overflow: hidden;">
      <iframe 
        src="//player.bilibili.com/player.html?bvid=BV1xaaT6jENj&page=1&high_quality=1&danmaku=0&autoplay=0" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        allowfullscreen="true" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
      </iframe>
    </div>
    <div class="comp-title">短节目 (SP) 73.38分</div>
    <div class="comp-link-row">
      查看高清版请点击：<a href="https://www.bilibili.com/video/BV1xaaT6jENj/" target="_blank" rel="noopener noreferrer">原视频</a>
    </div>
  </div>

  <!-- 自由滑 (FS) -->
  <div class="comp-card">
    <div class="video-wrapper" style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; border-radius: 10px; overflow: hidden;">
      <iframe 
        src="//player.bilibili.com/player.html?bvid=BV15zah6fEUL&page=1&high_quality=1&danmaku=0&autoplay=0" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        allowfullscreen="true" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
      </iframe>
    </div>
    <div class="comp-title">自由滑 (FS) 128.44分</div>
    <div class="comp-link-row">
      查看高清版请点击：<a href="https://www.bilibili.com/video/BV15zah6fEUL/" target="_blank" rel="noopener noreferrer">原视频</a>
    </div>
  </div>
  
  <!-- 颁奖典礼 -->
  <div class="comp-card">
    <div class="video-wrapper" style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; border-radius: 10px; overflow: hidden;">
      <iframe 
        src="//player.bilibili.com/player.html?bvid=BV12ehd6LEcQ&page=1&high_quality=1&danmaku=0&autoplay=0" 
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
      查看高清版请点击：<a href="https://www.bilibili.com/video/BV12ehd6LEcQ/" target="_blank" rel="noopener noreferrer">原视频</a>
    </div>
  </div>

  <!-- 赛后采访 (第二行右侧，与自由滑对齐) -->
  <div class="comp-card">
    <div class="video-wrapper" style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; border-radius: 10px; overflow: hidden;">
      <iframe 
        src="//player.bilibili.com/player.html?bvid=BV183aY6dEUM&page=1&high_quality=1&danmaku=0&autoplay=0" 
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
      查看高清版请点击：<a href="https://www.bilibili.com/video/BV183aY6dEUM/" target="_blank" rel="noopener noreferrer">原视频</a>
    </div>
  </div>

</div>

<div class="comp-station-title">JGP 拉脱维亚站（里加） <span class="comp-gallery-link" onclick="window.location.href='/RecordingsForYihanWang/gallery/26Riga/'">查看该场比赛图片</span></div>
<div class="program-grid">

  <!-- 短节目 (SP) -->
  <div class="comp-card">
    <div class="video-wrapper" style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; border-radius: 10px; overflow: hidden;">
      <iframe 
        src="//player.bilibili.com/player.html?bvid=BV1a14R65EB8&page=1&high_quality=1&danmaku=0&autoplay=0" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        allowfullscreen="true" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
      </iframe>
    </div>
    <div class="comp-title">短节目 (SP) 68.61分</div>
    <div class="comp-link-row">
      查看高清版请点击：<a href="https://www.bilibili.com/video/BV1a14R65EB8/" target="_blank" rel="noopener noreferrer">原视频</a>
    </div>
  </div>

  <!-- 自由滑 (FS) -->
  <div class="comp-card">
    <div class="video-wrapper" style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; border-radius: 10px; overflow: hidden;">
      <iframe 
        src="//player.bilibili.com/player.html?bvid=BV1b3tK6TEsF&page=1&high_quality=1&danmaku=0&autoplay=0" 
        scrolling="no" 
        border="0" 
        frameborder="no" 
        framespacing="0" 
        allowfullscreen="true" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
      </iframe>
    </div>
    <div class="comp-title">自由滑 (FS) 126.42分</div>
    <div class="comp-link-row">
      查看高清版请点击：<a href="https://www.bilibili.com/video/BV1b3tK6TEsF/" target="_blank" rel="noopener noreferrer">原视频</a>
    </div>
  </div>
  
  <!-- 颁奖典礼 (自动与短节目对齐) -->
  <div class="comp-card">
    <div class="video-wrapper" style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; border-radius: 10px; overflow: hidden;">
      <iframe 
        src="//player.bilibili.com/player.html?bvid=BV1YAtK6kEJu&page=1&high_quality=1&danmaku=0&autoplay=0" 
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
      查看高清版请点击：<a href="https://www.bilibili.com/video/BV1YAtK6kEJu/" target="_blank" rel="noopener noreferrer">原视频</a>
    </div>
  </div>

</div>
