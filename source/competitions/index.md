---
title: 比赛合集
date: 2026-10-04 12:00:00
type: page
comments: false
top_img: false
---

<style>
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
  color: #fff !important;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.season-portal-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
}

.season-portal-title {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 8px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.season-portal-desc {
  font-size: 0.95rem;
  opacity: 0.9;
}

/* 4个赛季专属渐变配色 */
.card-s2627 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.card-s2526 { background: linear-gradient(135deg, #2af598 0%, #009efd 100%); }
.card-s2425 { background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%); color: #444 !important; }
.card-s2425 .season-portal-title { color: #333 !important; text-shadow: none; }
.card-s2324 { background: linear-gradient(135deg, #f6d365 0%, #fda085 100%); }
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
