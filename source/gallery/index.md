---
title: 图集
date: 2026-10-04 12:00:00
---

<style>
/* ================= 搜索栏区域样式 ================= */
.gallery-search-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 10px auto 30px auto;
}

.gallery-search-box {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}

.gallery-search-input {
  width: 100% !important;
  padding: 12px 90px 12px 18px !important;
  font-size: 0.95rem !important;
  border-radius: 9999px !important;
  border: 2px solid var(--anzhiyu-theme, #425AEF) !important;
  background: var(--anzhiyu-card-bg, #fff) !important;
  color: var(--font-color, #333) !important;
  outline: none !important;
  box-shadow: 0 4px 12px rgba(66, 90, 239, 0.12) !important;
  transition: all 0.3s ease !important;
  box-sizing: border-box !important;
}

.gallery-search-input:focus {
  box-shadow: 0 6px 18px rgba(66, 90, 239, 0.25) !important;
}

.gallery-search-btn {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  padding: 7px 18px;
  border-radius: 9999px;
  background: var(--anzhiyu-theme, #425AEF);
  color: #fff !important;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.gallery-search-btn:hover {
  background: #3146c8;
}

/* 下拉搜索匹配建议列表 */
.gallery-search-results {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  background: var(--anzhiyu-card-bg, #fff);
  border: 1px solid var(--anzhiyu-card-border, #e3e8f7);
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  max-height: 280px;
  overflow-y: auto;
  z-index: 1000;
  display: none;
  padding: 6px 0;
}

.gallery-search-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  color: var(--font-color, #333);
  text-decoration: none !important;
  font-size: 0.92rem;
  transition: background 0.2s ease;
  cursor: pointer;
}

.gallery-search-item:hover {
  background: #f1f5f9 !important;
  color: #333333 !important;
}

.gallery-search-item-hint {
  font-size: 0.78rem;
  color: #888;
}

/* 0. 比赛分类标题样式 */
.gallery-section-title {
  display: block !important;
  font-size: 1.4rem !important;
  font-weight: 700 !important;
  color: var(--font-color, #333) !important;
  margin: 35px 0 15px 0 !important;
  padding-left: 12px !important;
  border-left: 4px solid var(--anzhiyu-theme, #425AEF) !important;
  line-height: 1.4 !important;
}

/* 1. 消除 Markdown 自动加 p 标签的影响 */
.photo-grid p {
  margin: 0 !important;
  display: contents !important;
}

/* 2. 电脑端：默认三列网格 */
.photo-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 16px !important;
  width: 100% !important;
  margin: 15px 0 35px 0 !important;
}

/* 3. 兼容 fancybox 灯箱自动加的 a 标签包裹 */
.photo-grid a {
  display: block !important;
  width: 100% !important;
  height: 220px !important;
  border-radius: 12px !important;
  overflow: hidden !important;
}

/* 4. 图片基础样式 */
.photo-grid img {
  width: 100% !important;
  height: 220px !important;
  object-fit: cover !important;
  border-radius: 12px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease !important;
  cursor: pointer !important;
  margin: 0 !important;
  display: block !important;
}

/* 5. 手机端（768px 及以下所有手机）：强制两列并调小高度 */
@media screen and (max-width: 768px) {
  .gallery-section-title {
    font-size: 1.2rem !important;
    margin: 25px 0 12px 0 !important;
  }
  .photo-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 10px !important;
  }
  .photo-grid a,
  .photo-grid img {
    height: 150px !important;
    border-radius: 8px !important;
  }
}
</style>

<!-- 搜索栏容器 -->
<div class="gallery-search-container">
  <div class="gallery-search-box">
    <input type="text" id="gallerySearchInput" class="gallery-search-input" placeholder="输入比赛名称/关键词跳转（如：巴统、无锡、世青赛）..." autocomplete="off">
    <button type="button" class="gallery-search-btn" onclick="executeGallerySearch()">搜索</button>
  </div>
  <div id="gallerySearchResults" class="gallery-search-results"></div>
</div>

<script>
(function() {
  // 所有比赛数据库与其对应的独立页面路径（根据您仓库中的真实文件夹路径配置）
  const compList = [
    { title: "2026-2027赛季JGP格鲁吉亚站（巴统）", keywords: ["格鲁吉亚", "巴统", "2026", "2027", "jgp", "batumi"], url: "/RecordingsForYihanWang/gallery/26Batumi/" },
    { title: "2026-2027赛季JGP拉脱维亚站（里加）", keywords: ["拉脱维亚", "里加", "2026", "2027", "jgp", "riga"], url: "/RecordingsForYihanWang/gallery/26Riga/" },
    { title: "2025-2026赛季WJC塔林世青赛", keywords: ["塔林", "世青赛", "wjc", "2025", "2026", "tallinn"], url: "/RecordingsForYihanWang/gallery/26WJC/" },
    { title: "2025-2026赛季JGP阿塞拜疆站（巴库）", keywords: ["阿塞拜疆", "巴库", "2025", "2026", "jgp", "baku"], url: "/RecordingsForYihanWang/gallery/25Baku/" },
    { title: "2025-2026赛季JGP意大利站（瓦雷泽）", keywords: ["意大利", "瓦雷泽", "2025", "2026", "jgp", "varese"], url: "/RecordingsForYihanWang/gallery/25Varese/" },
    { title: "2024-2025赛季WJC德布勒森世青赛", keywords: ["德布勒森", "世青赛", "wjc", "2024", "2025", "debrecen"], url: "/RecordingsForYihanWang/gallery/25WJC/" },
    { title: "2024-2025赛季JGPF", keywords: ["jgpf", "总决赛", "大奖赛总决赛", "2024", "2025"], url: "/RecordingsForYihanWang/gallery/24JGPF/" },
    { title: "2024-2025赛季JGP中国站（无锡）", keywords: ["无锡", "中国站", "2024", "2025", "jgp", "wuxi"], url: "/RecordingsForYihanWang/gallery/24Wuxi/" },
    { title: "2024-2025赛季JGP泰国站（曼谷）", keywords: ["泰国", "曼谷", "2024", "2025", "jgp", "bangkok"], url: "/RecordingsForYihanWang/gallery/24Bangkok/" },
    { title: "2023-2024赛季JGP波兰站（格但斯克）", keywords: ["波兰", "格但斯克", "2023", "2024", "jgp", "gdansk"], url: "/RecordingsForYihanWang/gallery/23Gdansk/" },
    { title: "2023-2024赛季JGP匈牙利站（布达佩斯）", keywords: ["匈牙利", "布达佩斯", "2023", "2024", "jgp", "budapest"], url: "/RecordingsForYihanWang/gallery/23Budapest/" }
  ];

  const searchInput = document.getElementById("gallerySearchInput");
  const resultsBox = document.getElementById("gallerySearchResults");

  function filterMatches(val) {
    if (!val) return [];
    val = val.trim().toLowerCase();
    return compList.filter(item => {
      const matchTitle = item.title.toLowerCase().includes(val);
      const matchKey = item.keywords.some(k => k.toLowerCase().includes(val));
      return matchTitle || matchKey;
    });
  }

  // 实时输入展示下拉推荐
  searchInput.addEventListener("input", function() {
    const val = this.value.trim();
    const matches = filterMatches(val);

    if (val && matches.length > 0) {
      resultsBox.innerHTML = matches.map(m => `
        <a class="gallery-search-item" href="${m.url}">
          <span>${m.title}</span>
          <span class="gallery-search-item-hint">前往 ➔</span>
        </a>
      `).join("");
      resultsBox.style.display = "block";
    } else {
      resultsBox.style.display = "none";
    }
  });

  // 按回车键或点击按钮执行跳转
  window.executeGallerySearch = function() {
    const val = searchInput.value.trim();
    if (!val) return;
    const matches = filterMatches(val);
    if (matches.length > 0) {
      window.location.href = matches[0].url; // 直接跳入首选匹配比赛
    } else {
      alert("未找到与【" + val + "】相关的比赛单独图集，请尝试输入地名（如：巴统、无锡、曼谷、世青赛等）");
    }
  };

  searchInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      executeGallerySearch();
    }
  });

  // 点击外部隐藏下拉框
  document.addEventListener("click", function(e) {
    if (!e.target.closest(".gallery-search-container")) {
      resultsBox.style.display = "none";
    }
  });
})();
</script>

<h2 class="gallery-section-title">2026-2027赛季JGP格鲁吉亚站（巴统）</h2>
<div class="photo-grid">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296703911-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296703845-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296703831-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296703805-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296703731-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296703702-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296703656-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296703636-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296699971-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296699967-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296699948-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296699888-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296699882-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296699742-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296699719-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296611374-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296608639-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296267882-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296267819-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296267736-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296267728-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296267705-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2296267662-594x594.jpg">
</div>

<h2 class="gallery-section-title">2026-2027赛季JGP拉脱维亚站（里加）</h2>
<div class="photo-grid">
  <img src="/RecordingsForYihanWang/img/gettyimages-2291901131-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2291900985-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2291899506-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2291899492-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2291899446-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2291899346-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2291899300-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2291899294-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2291899211-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2291696037-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2291696017-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2291695951-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2291695705-594x594.jpg">
</div>

<h2 class="gallery-section-title">2025-2026赛季WJC塔林世青赛</h2>
<div class="photo-grid">
  <img src="/RecordingsForYihanWang/img/gettyimages-2265354947-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2265281699-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2265281698-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2265281696-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2265260434-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2265260225-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2264946366-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2264946365-594x594.jpg">
</div>

<h2 class="gallery-section-title">2025-2026赛季JGP阿塞拜疆站（巴库）</h2>
<div class="photo-grid">
  <img src="/RecordingsForYihanWang/img/gettyimages-2237171218-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2237171175-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2237171075-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2237171052-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2237170952-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2237170800-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2236738491-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2236738388-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2236738371-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2236738368-594x594.jpg">
</div>

<h2 class="gallery-section-title">2025-2026赛季JGP意大利站（瓦雷泽）</h2>
<div class="photo-grid">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233450159-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233449913-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233449887-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233449793-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233449781-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233446510-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233446500-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233446460-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233446391-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233446377-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233446371-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233446221-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233446201-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233446136-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233446099-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233180695-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233180572-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233180568-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233180488-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233180446-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233180280-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2233180276-594x594.jpg">
</div>

<h2 class="gallery-section-title">2024-2025赛季WJC德布勒森世青赛</h2>
<div class="photo-grid">
  <img src="/RecordingsForYihanWang/img/gettyimages-2202020336-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2202020225-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2202020202-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2202020181-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2201614448-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2201614431-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2201614096-594x594.jpg">
</div>

<h2 class="gallery-section-title">2024-2025赛季JGPF</h2>
<div class="photo-grid">
  <img src="/RecordingsForYihanWang/img/gettyimages-2188439659-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2188399142-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2188399141-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187969694-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187969617-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187969499-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187969431-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187969308-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187966367-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2287966258-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187966072-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187965972-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187965923-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187916646-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187916480-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187916462-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187916378-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187916355-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187914070-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187801285-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187801182-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187751621-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187751579-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187751436-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187751395-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187751360-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187751317-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187751290-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187751271-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187749520-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187749188-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2187749082-594x594.jpg">
</div>

<h2 class="gallery-section-title">2024-2025赛季JGP中国站（无锡）</h2>
<div class="photo-grid">
  <img src="/RecordingsForYihanWang/img/gettyimages-2178169285-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2178169276-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2178169267-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2178169259-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2178169255-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2178169237-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2178169213-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2178169210-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2178169205-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2178169202-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2177976398-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2177976392-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2177329888-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2177329830-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2177329727-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2177329555-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2177329512-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2177327774-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2177327705-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2177327691-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2177327479-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2177144734-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2177144627-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2177144458-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2177144442-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2176886053-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2176876679-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2176876593-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2176876301-594x594.jpg">
</div>

<h2 class="gallery-section-title">2024-2025赛季JGP泰国站（曼谷）</h2>
<div class="photo-grid">
  <img src="/RecordingsForYihanWang/img/gettyimages-2172113593-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2172104378-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2172104315-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2172104245-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2172104223-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2172104221-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171834044-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171834024-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171833999-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171833955-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171738977-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171738969-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171738966-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171737676-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171737206-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171737202-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171737198-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171737193-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171737188-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171737185-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171500655-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171500528-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171500514-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171500489-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171500466-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-2171500426-594x594.jpg">
</div>

<h2 class="gallery-section-title">2024年四大洲锦标赛表演滑</h2>
<div class="photo-grid">
  <img src="/RecordingsForYihanWang/img/gettyimages-1986227681-594x594.jpg">
</div>

<h2 class="gallery-section-title">2023-2024赛季JGP波兰站（格但斯克）</h2>
<div class="photo-grid">
  <img src="/RecordingsForYihanWang/img/gettyimages-1697759492-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-1697756871-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-1697756808-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-1697756760-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-1697756734-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-1697756682-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-1694440051-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-1694439877-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-1694439696-594x594.jpg">
</div>

<h2 class="gallery-section-title">2023-2024赛季JGP匈牙利站（布达佩斯）</h2>
<div class="photo-grid">
  <img src="/RecordingsForYihanWang/img/gettyimages-1684047005-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-1684041641-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-1684041150-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-1684041103-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-1684040876-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-1684040840-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-1684040449-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-1680299532-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-1680298917-594x594.jpg">
  <img src="/RecordingsForYihanWang/img/gettyimages-1680298879-594x594.jpg">
</div>
