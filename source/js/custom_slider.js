// ================= 自定义首页图集轮播（覆盖主题默认配置） =================
document.addEventListener('DOMContentLoaded', function() {
    overrideThemeSwiper();
});
// 适配 Anzhiyu 主题的 PJAX 无刷新加载
document.addEventListener('pjax:complete', function() {
    overrideThemeSwiper();
});

function overrideThemeSwiper() {
    // 1. 找到主题自带轮播的容器
    var swiperContainer = document.querySelector('.topGroup .swiper-container, #home_top .swiper-container');
    if (!swiperContainer) return;

    // 2. 如果 Swiper 已经初始化，先销毁它
    if (swiperContainer.swiper) {
        swiperContainer.swiper.destroy(true, true);
    }

    // 3. 重新初始化 Swiper，配置为 2 秒右滑
    var mySwiper = new Swiper(swiperContainer, {
        loop: true,                    // 无限循环
        autoplay: {
            delay: 2000,               // 2秒切换一次（你要的 2 秒）
            disableOnInteraction: false, // 用户滑动后继续自动播放
        },
        effect: 'slide',               // 右滑效果（水平滑动）
        direction: 'horizontal',       // 水平方向
        speed: 600,                    // 切换动画时长 0.6秒
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}
