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
        quote: '要像爆米花一樣開心每一天喔！🐰💕',
        desc: '天真活潑的粉藍 NAVELY！'
    },
    {
        id: 'jeongvely',
        member: 'Jeongyeon (定延)',
        name: 'JEONGVELY',
        color: '#A2DC48', // Lime Green
        image: 'images/2.webp',
        quote: '今天也要好好吃飯、維持乾淨好心情！💚✨',
        desc: '喜愛乾淨與貼心的 JEONGVELY！'
    },
    {
        id: 'movely',
        member: 'Momo (桃)',
        name: 'MOVELY',
        color: '#FF6B9D', // Hot Pink
        image: 'images/3.jpg',
        quote: '最喜歡跳舞了！跟著 Be as ONE 音樂一起感動吧！💖🎀',
        desc: '熱情奔放的 MOVELY！'
    },
    {
        id: 'sanavely',
        member: 'Sana (紗夏)',
        name: 'SAVELY',
        color: '#9F7AEA', // Purple
        image: 'images/4.jpg',
        quote: '天真爛漫！Shy Shy Shy~ 祝福映瑄天天開心 💜',
        desc: '天真爛漫又甜美的 SAVELY！'
    },
    {
        id: 'jively',
        member: 'Jihyo (志效)',
        name: 'JIVELY',
        color: '#F6AD55', // Warm Yellow
        image: 'images/5.jpg',
        quote: '最喜歡唱歌了！像太陽一樣自信閃耀吧！💛🎤',
        desc: '充滿歌聲熱情的 JIVELY！'
    },
    {
        id: 'mively',
        member: 'Mina (南)',
        name: 'MIVELY',
        color: '#4FD1C5', // Mint Teal
        image: 'images/6.webp',
        quote: '默默努力家～願這首 Be as ONE 帶給妳平靜與溫暖 💙 Swan',
        desc: '默默努力又溫柔的 MIVELY！'
    },
    {
        id: 'dahvely',
        member: 'Dahyun (多賢)',
        name: 'DAVELY',
        color: '#E2E8F0', // Off-White
        image: 'images/7.jpg',
        quote: '氣氛帶動隊長！找到對著鏡頭微笑的映瑄囉～🤍📸',
        desc: '氣氛帶動隊長 DAVELY！'
    },
    {
        id: 'chaengvely',
        member: 'Chaeyoung (彩瑛)',
        name: 'CHAENGVELY',
        color: '#E53E3E', // Crimson Red
        image: 'images/8.webp',
        quote: '最喜歡草莓了！保持妳的無限創意與獨一無二～❤️🍓',
        desc: '藝術靈魂小草莓 CHAENGVELY！'
    },
    {
        id: 'tzuvely',
        member: 'Tzuyu (子瑜)',
        name: 'TZUVELY',
        color: '#1A56DB', // Deep Royal Blue
        image: 'images/9.jpg',
        quote: '給映瑄最好的祝福！遇到所有 Code 都不卡 Bug，Be as ONE 💙🍞',
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

