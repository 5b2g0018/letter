/**
 * TWICE Official Lovelys Image & Data Registry
 * Updated to use real downloaded TWICE Lovely images (1.jpg ~ 9.jpg/webp)
 * Matches Image 2 downloaded assets & Image 1 8+1 layout
 */

const LOVELYS = [
    {
        id: 'navely',
        member: 'Nayeon (娜璉)',
        name: 'NAVELY',
        color: '#52C5ED', // Sky Blue
        image: 'images/1.jpg',
        quote: '今天也要充滿活力地出發！像爆米花一樣炸開所有壓力，妳是最棒的，加油！🐰💥💖',
        desc: '天真活潑的粉藍 NAVELY！'
    },
    {
        id: 'jeongvely',
        member: 'Jeongyeon (定延)',
        name: 'JEONGVELY',
        color: '#A2DC48', // Lime Green
        image: 'images/2.webp',
        quote: '累的時候別硬撐，記得好好吃飯、好好休息。有我在，隨時給妳最暖的擁抱！💚✨',
        desc: '喜愛乾淨與貼心的 JEONGVELY！'
    },
    {
        id: 'movely',
        member: 'Momo (桃)',
        name: 'MOVELY',
        color: '#FF6B9D', // Hot Pink
        image: 'images/3.jpg',
        quote: '遇到困難就先吃頓好吃的！只要不放棄、跟著自己的節奏走，妳一定可以做到！💖🍖✨',
        desc: '熱情奔放的 MOVELY！'
    },
    {
        id: 'sanavely',
        member: 'Sana (紗夏)',
        name: 'SAVELY',
        color: '#9F7AEA', // Purple
        image: 'images/4.jpg',
        quote: '今天也辛苦囉～無論發生什麼事，我都會一直在妳身邊幫妳加油！No Sana No Life！💜🫂✨',
        desc: '天真爛漫又甜美的 SAVELY！'
    },
    {
        id: 'jively',
        member: 'Jihyo (志效)',
        name: 'JIVELY',
        color: '#F6AD55', // Warm Yellow
        image: 'images/5.jpg',
        quote: '拿出 100% 的熱情向前衝吧！相信自己的力量，妳比自己想像的還要強大！☀️🧡🔥',
        desc: '充滿歌聲熱情的 JIVELY！'
    },
    {
        id: 'mively',
        member: 'Mina (南)',
        name: 'MIVELY',
        color: '#4FD1C5', // Mint Teal
        image: 'images/6.webp',
        quote: '放慢腳步也沒關係的，按照妳自己的步調往前走就好。累了隨時來我這裡休息吧…🐧💚✨',
        desc: '默默努力又溫柔的 MIVELY！'
    },
    {
        id: 'dahvely',
        member: 'Dahyun (多賢)',
        name: 'DAVELY',
        color: '#E2E8F0', // Off-White
        image: 'images/7.jpg',
        quote: '捕捉到正在努力的妳了！📸 記得隨時保持燦爛的笑容，好運很快就會降臨囉！🤍✨',
        desc: '氣氛帶動隊長 DAVELY！'
    },
    {
        id: 'chaengvely',
        member: 'Chaeyoung (彩瑛)',
        name: 'CHAENGVELY',
        color: '#E53E3E', // Crimson Red
        image: 'images/8.webp',
        quote: '勇敢去做妳想做的事吧！妳的獨一無二就是最棒的武器，畫出屬於妳的色彩！🔴🎨✨',
        desc: '藝術靈魂小草莓 CHAENGVELY！'
    },
    {
        id: 'tzuvely',
        member: 'Tzuyu (子瑜)',
        name: 'TZUVELY',
        color: '#1A56DB', // Deep Royal Blue
        image: 'images/9.jpg',
        quote: '雖然過程可能很辛苦，但只要一步一步穩定前進就好。要照顧好自己，妳一直都很棒喔！💙🐶✨',
        desc: '追求完美的 TZUVELY！'
    }
];

/**
 * Renders precision Round Head Lovely image avatar matching downloaded pictures
 */
function createLovelyHTML(lovely, options = {}) {
    const size = options.size || 50;
    const color = lovely.color || '#38BDF8';

    return `
        <div class="lovely-avatar-wrapper" style="--avatar-size: ${size}px; border-color: ${color};">
            <img src="${lovely.image}" alt="${lovely.name}" class="lovely-avatar-img" />
        </div>
    `;
}

// Fallback compatibility alias for createLovelySVG
function createLovelySVG(lovely, options = {}) {
    return createLovelyHTML(lovely, options);
}

