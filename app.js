/**
 * TWICE Interactive Letter Application Logic - 3 Chapters Edition
 * Customized for 映瑄 from 松鼠 🐿️
 */

let currentChapter = 1;

const CHAPTERS = {
    1: {
        id: 1,
        badge: '🌸 CHAPTER 1: FIRST ENCOUNTER',
        recipient: '映瑄',
        message: `還記得我們第一次認識與對話的時候，感覺就像在播放 TWICE 的旋律一樣特別與美好 ✨。\n\n那時的第一印象，就覺得妳是一個非常好相處又充滿能量的女孩！這第一封信記錄著我們故事的起點，很高興能與妳相遇 🌸💙。`,
        photoUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop',
        photoCaption: '初次相遇 ✨ 故事的開端 🌸',
        date: '2026.09.05',
        sender: '松鼠 🐿️',
        showLovelys: false
    },
    2: {
        id: 2,
        badge: '💫 CHAPTER 2: PRECIOUS MEMORIES',
        recipient: '映瑄',
        message: `時間過得真快，回想起來我們一起聊過的許多話題、一起分享的生活點滴，每一刻都非常珍貴 ✨。\n\n不管是聊 TWICE 的音樂、日常生活中的趣事，還是互相分享心事與加油打氣，這些回憶都讓日子變得更加溫暖且充滿動力 🎶🌟！`,
        photoUrl: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=800&auto=format&fit=crop',
        photoCaption: '珍貴回憶 ✨ 點點滴滴的溫暖 💫',
        date: '2026.09.05',
        sender: '松鼠 🐿️',
        showLovelys: false
    },
    3: {
        id: 3,
        badge: '💙 CHAPTER 3: SPECIAL LETTER',
        recipient: '映瑄',
        message: `展信快樂！這是一封特別為妳製作的專屬互動信件 ✨。\n\n祝妳每天都能像 TWICE 的歌一樣充滿能量，遇到的所有程式碼都不卡 bug，要一直保持笑口常開喔！狂熱女團魂不滅 🍭💙！`,
        photoUrl: 'https://zeekmagazine.com/wp-content/uploads/2025/09/1758345362-a18c6653ff456bdab53dfefd9d513967.jpg',
        photoCaption: 'Be as ONE ✨ TWICE 💙',
        date: '2026.09.05',
        sender: '松鼠 🐿️',
        showLovelys: true
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initParticleEngine();
    initBeAsOneAudio();
    parseURLParameters();
    initInnerLetterDecorations();
});

/* ==========================================================================
   1. ULTRA-LIGHTWEIGHT PARTICLE CANVAS ENGINE (60 FPS)
   ========================================================================== */
let particleCtx, particlesArray = [];

function initParticleEngine() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    particleCtx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    for (let i = 0; i < 14; i++) {
        particlesArray.push(createAmbientParticle());
    }

    requestAnimationFrame(animateParticles);
}

function resizeCanvas() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createAmbientParticle() {
    const symbols = ['✨', '💙', '🌸', '⭐', '💎', '💖'];
    return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        size: Math.floor(Math.random() * 12 + 12),
        speedY: - (Math.random() * 0.5 + 0.2),
        speedX: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.3
    };
}

function spawnBurst(x, y, count = 25) {
    try {
        const symbols = ['💙', '✨', '🌟', '💖', '🌸', '🎉', '💎'];
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 8 + 3;
            particlesArray.push({
                x: x || window.innerWidth / 2,
                y: y || window.innerHeight / 2,
                symbol: symbols[Math.floor(Math.random() * symbols.length)],
                size: Math.floor(Math.random() * 16 + 14),
                speedX: Math.cos(angle) * velocity,
                speedY: Math.sin(angle) * velocity - 2,
                gravity: 0.2,
                opacity: 1,
                fadeSpeed: Math.random() * 0.025 + 0.02,
                isBurst: true
            });
        }
    } catch (err) {}
}

let lastTime = 0;
function animateParticles(timestamp) {
    if (!particleCtx) return;

    if (timestamp - lastTime > 16) {
        lastTime = timestamp;
        particleCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        for (let i = particlesArray.length - 1; i >= 0; i--) {
            const p = particlesArray[i];

            if (p.isBurst) {
                p.x += p.speedX;
                p.y += p.speedY;
                p.speedY += p.gravity;
                p.opacity -= p.fadeSpeed;

                if (p.opacity <= 0) {
                    particlesArray.splice(i, 1);
                    continue;
                }
            } else {
                p.y += p.speedY;
                p.x += p.speedX;

                if (p.y < -20) {
                    p.y = window.innerHeight + 20;
                    p.x = Math.random() * window.innerWidth;
                }
            }

            particleCtx.save();
            particleCtx.globalAlpha = Math.max(0, p.opacity);
            particleCtx.font = `${p.size}px Arial`;
            particleCtx.fillText(p.symbol, p.x, p.y);
            particleCtx.restore();
        }
    }

    requestAnimationFrame(animateParticles);
}

/* ==========================================================================
   2. TWICE "Be as ONE" AUDIO PLAYER
   ========================================================================== */
let isBgmPlaying = false;

function initBeAsOneAudio() {
    const bgmBtn = document.getElementById('bgm-toggle-btn');
    if (bgmBtn) {
        bgmBtn.addEventListener('click', toggleBeAsOneAudio);
    }
}

function toggleBeAsOneAudio() {
    try {
        const audio = document.getElementById('be-as-one-audio');
        const bgmIcon = document.getElementById('bgm-icon');
        const bgmText = document.getElementById('bgm-text');

        if (!audio) return;

        if (!isBgmPlaying) {
            audio.play().then(() => {
                isBgmPlaying = true;
                if (bgmIcon) bgmIcon.textContent = '🎶';
                if (bgmText) bgmText.textContent = 'Be as ONE: ON';
                showToast('🎵 正在播放 TWICE - Be as ONE ✨');
            }).catch(() => {
                showToast('🎵 點擊頂部按鈕即可享受 Be as ONE 音樂 ✨');
            });
        } else {
            audio.pause();
            isBgmPlaying = false;
            if (bgmIcon) bgmIcon.textContent = '🔇';
            if (bgmText) bgmText.textContent = 'Be as ONE: OFF';
            showToast('🔇 已暫停背景音樂');
        }
    } catch (err) {}
}

function playPopSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(580, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1150, ctx.currentTime + 0.12);

        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.12);
    } catch (e) {}
}

/* ==========================================================================
   3. TRILOGY ENVELOPE OPEN & CHAPTER SWITCHER CONTROLLER
   ========================================================================== */
function openChapter(chId, e) {
    if (e) e.stopPropagation();
    currentChapter = chId;

    // Toggle opened state on specific envelope wrapper
    [1, 2, 3].forEach(id => {
        const wrap = document.getElementById(`envelope-wrapper-${id}`);
        if (wrap) {
            if (id === chId) {
                wrap.classList.add('opened');
            } else {
                wrap.classList.remove('opened');
            }
        }
    });

    switchChapter(chId, false);

    const paperModal = document.getElementById('letter-paper');
    const overlay = document.getElementById('modal-overlay');

    try {
        playPopSound();
        const clickX = (e && e.clientX) ? e.clientX : window.innerWidth / 2;
        const clickY = (e && e.clientY) ? e.clientY : window.innerHeight / 2;
        spawnBurst(clickX, clickY, 25);
    } catch (err) {}

    if (overlay) overlay.classList.add('active');
    if (paperModal) paperModal.classList.add('active');
}

function switchChapter(chId, playAudio = true) {
    currentChapter = chId;
    const data = CHAPTERS[chId] || CHAPTERS[3];

    // Update Tab buttons active state
    [1, 2, 3].forEach(id => {
        const btn = document.getElementById(`tab-btn-${id}`);
        if (btn) {
            if (id === chId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        }
    });

    if (playAudio) {
        playPopSound();
        spawnBurst(window.innerWidth / 2, window.innerHeight / 3, 15);
    }

    // Update Content
    const badge = document.getElementById('badge-tag');
    if (badge) badge.textContent = data.badge;

    const recipient = document.getElementById('letter-recipient-text');
    if (recipient) recipient.textContent = data.recipient;

    const body = document.getElementById('letter-body-text');
    if (body) body.textContent = data.message;

    const img = document.getElementById('polaroid-img');
    if (img) img.src = data.photoUrl;

    const caption = document.getElementById('polaroid-caption');
    if (caption) caption.textContent = data.photoCaption;

    const date = document.getElementById('letter-date-text');
    if (date) date.textContent = data.date;

    const sender = document.getElementById('letter-sender-text');
    if (sender) sender.textContent = data.sender;

    // Toggle Lovelys bar (Shown on Chapter 3)
    const lovelysBar = document.getElementById('lovelys-footer-bar');
    if (lovelysBar) {
        if (data.showLovelys) {
            lovelysBar.style.display = 'flex';
        } else {
            lovelysBar.style.display = 'none';
        }
    }
}

function openEnvelope(e) {
    openChapter(3, e);
}

function closeEnvelope() {
    const paperModal = document.getElementById('letter-paper');
    const overlay = document.getElementById('modal-overlay');

    if (paperModal) paperModal.classList.remove('active');
    if (overlay) overlay.classList.remove('active');

    setTimeout(() => {
        [1, 2, 3].forEach(id => {
            const wrap = document.getElementById(`envelope-wrapper-${id}`);
            if (wrap) wrap.classList.remove('opened');
        });
    }, 250);
}

/* ==========================================================================
   4. INNER LETTER DECORATIONS & STAMPS
   ========================================================================== */
function initInnerLetterDecorations() {
    const stamps = document.getElementById('letter-stamps');
    const innerList = document.getElementById('inner-lovelys-list');

    if (typeof LOVELYS === 'undefined') return;

    if (stamps) {
        stamps.innerHTML = '';
        [LOVELYS[8], LOVELYS[0]].forEach(lovely => {
            const stamp = document.createElement('div');
            stamp.className = 'mini-lovely-stamp';
            stamp.innerHTML = createLovelyHTML(lovely, { size: 36 });
            stamps.appendChild(stamp);
        });
    }

    if (innerList) {
        innerList.innerHTML = '';

        const topRow = document.createElement('div');
        topRow.className = 'lovelys-row-top';

        const bottomRow = document.createElement('div');
        bottomRow.className = 'lovelys-row-bottom';

        LOVELYS.slice(0, 8).forEach(lovely => {
            const icon = createLovelyClickableIcon(lovely);
            topRow.appendChild(icon);
        });

        const tzuyuIcon = createLovelyClickableIcon(LOVELYS[8]);
        bottomRow.appendChild(tzuyuIcon);

        innerList.appendChild(topRow);
        innerList.appendChild(bottomRow);
    }
}

function createLovelyClickableIcon(lovely) {
    const icon = document.createElement('div');
    icon.className = 'inner-lovely-icon';
    icon.title = `${lovely.name} - ${lovely.member}`;
    icon.innerHTML = createLovelyHTML(lovely, { size: 48 });

    icon.addEventListener('click', (e) => {
        e.stopPropagation();
        playPopSound();
        const rect = icon.getBoundingClientRect();
        spawnBurst(rect.left + rect.width / 2, rect.top, 20);
        showToast(`💙 ${lovely.name}: ${lovely.quote}`);
    });

    return icon;
}

/* ==========================================================================
   5. URL PARAMETER OVERRIDES
   ========================================================================== */
function parseURLParameters() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('to')) {
        const rec = params.get('to');
        Object.values(CHAPTERS).forEach(ch => ch.recipient = rec);
    }
    if (params.has('from')) {
        const snd = params.get('from');
        Object.values(CHAPTERS).forEach(ch => ch.sender = snd);
    }

    switchChapter(1, false);
}

/* Toast Helper */
let toastTimeout;
function showToast(message) {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

