---
title: 比赛合集
date: 2026-10-04 12:00:00
type: page
comments: false
top_img: false
---

<style>
/* 当前页面专属：库洛米4贴纸 */
.page-title::after {
  content: "" !important;
  display: inline-block !important;
  width: 2.5em !important;  
  height: 2.5em !important; 
  margin-left: 8px !important;
  vertical-align: -0.15em !important;  
  background-image: url('/RecordingsForYihanWang/img/kuromi4.png') !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}

.season-portal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.season-portal-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 20px;
  border-radius: 16px;
  text-decoration: none !important;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
}

.season-portal-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.season-portal-title {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #3b4252 !important;  /* 文字颜色 */
  text-shadow: none !important;
}


/* 26-27赛季 */
.card-s2627 { 
  background: linear-gradient(135deg, #e8ddfc 0%, #dcd3fc 100%) !important; 
  box-shadow: 0 6px 18px rgba(190, 175, 230, 0.25) !important;
}

/* 25-26赛季 */
.card-s2526 { 
  background: linear-gradient(135deg, #dcf0fb 0%, #cce7fc 100%) !important; 
  box-shadow: 0 6px 18px rgba(170, 205, 235, 0.25) !important;
}

/* 24-25赛季 */
.card-s2425 { 
  background: linear-gradient(135deg, #ffdfe7 0%, #fbd5df 100%) !important; 
  box-shadow: 0 6px 18px rgba(240, 185, 200, 0.25) !important;
}

/* 23-24赛季 */
.card-s2324 { 
  background: linear-gradient(135deg, #fef2c5 0%, #fde6aa 100%) !important; 
  box-shadow: 0 6px 18px rgba(235, 210, 150, 0.25) !important;
}
</style>

<div class="season-portal-grid">
  <a class="season-portal-card card-s2627" href="/RecordingsForYihanWang/competitions/2026-2027/">
    <div class="season-portal-title">2026–2027 赛季</div>
  </a>

  <a class="season-portal-card card-s2526" href="/RecordingsForYihanWang/competitions/2025-2026/">
    <div class="season-portal-title">2025–2026 赛季</div>
  </a>

  <a class="season-portal-card card-s2425" href="/RecordingsForYihanWang/competitions/2024-2025/">
    <div class="season-portal-title">2024–2025 赛季</div>
  </a>

  <a class="season-portal-card card-s2324" href="/RecordingsForYihanWang/competitions/2023-2024/">
    <div class="season-portal-title">2023–2024 赛季</div>
  </a>
</div>
