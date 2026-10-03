---
title: 图集
date: 2026-10-04 12:00:00
type: "gallery"
---

<div class="photo-grid">
  <!-- 下面这里开始放图片，每行一张图片的代码 -->
  <img src="/RecordingsForYihanWang/img/image_surface.jpg" alt="王一涵照片">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296699948-594x594.jpg" alt="王一涵照片">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233180446-594x594.jpg" alt="王一涵照片">
  <!-- 你有多少张照片，就复制多少行 <img> 代码 -->
  <!-- 如果你有 100 张，你就复制 100 行，改一下 src 里面的文件名即可 -->
</div>

<style>
.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 强制分成 3 列 */
  gap: 16px; /* 图片之间的间距 */
  margin-top: 20px;
}
.photo-grid img {
  width: 100%;
  height: 220px; /* 固定每张图的高度，让排版整齐 */
  object-fit: cover; /* 裁剪图片以填满框，不变形 */
  border-radius: 12px; /* 圆角 */
  box-shadow: 0 4px 12px rgba(0,0,0,0.1); /* 阴影 */
  transition: transform 0.3s ease; /* 悬停动画 */
}
.photo-grid img:hover {
  transform: scale(1.03); /* 鼠标悬停时微微放大 */
}
/* 手机端自动变成两列或一列 */
@media (max-width: 768px) {
  .photo-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .photo-grid {
    grid-template-columns: 1fr;
  }
}
</style>
