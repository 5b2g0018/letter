/**
 * TWICE Interactive Letter Application Logic
 * Customized for 映瑄 from 松鼠 🐿️
 * Pure Interactive Letter - Pre-configured Direct Sharing Version.
 */

// Global State (Pre-written Content)
const state = {
    isOpened: false,
    bgmEnabled: false,
    recipient: '映瑄',
    message: '展信快樂！這是一封特別為妳製作的專屬互動信件 ✨。\n\n祝妳每天都能像 TWICE 的歌一樣充滿能量，遇到的所有程式碼都不卡 bug，要一直保持笑口常開喔！狂熱女團魂不滅 🍭💙！',
    sender: '松鼠 🐿️',
    date: '2026.09.05',
    photoUrl: 'https://zeekmagazine.com/wp-content/uploads/2025/09/1758345362-a18c6653ff456bdab53dfefd9d513967.jpg',
    photoCaption: 'Be as ONE ✨ TWICE 💙'
};

document.addEventListener('DOMContentLoaded', () => {
    initParticleEngine();
    initBeAsOneAudio();
    parseURLParameters();
    initEnvelopeEvents();
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
   2. TWICE "Be as ONE" AUDIO PLAYER (Manual Toggle Only)
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
   3. BULLETPROOF OPEN/CLOSE ENVELOPE CONTROLLER (No Music Auto-Play)
   ========================================================================== */
function initEnvelopeEvents() {
    const wrapper = document.getElementById('envelope-wrapper');
    const seal = document.getElementById('wax-seal');

    if (wrapper) {
        wrapper.addEventListener('click', (e) => {
            openEnvelope(e);
        });
    }

    if (seal) {
        seal.addEventListener('click', (e) => {
            e.stopPropagation();
            openEnvelope(e);
        });
    }
}

function openEnvelope(e) {
    if (e) e.stopPropagation();

    const wrapper = document.getElementById('envelope-wrapper');
    const paperModal = document.getElementById('letter-paper');
    const overlay = document.getElementById('modal-overlay');

    try {
        playPopSound();
        const clickX = (e && e.clientX) ? e.clientX : window.innerWidth / 2;
        const clickY = (e && e.clientY) ? e.clientY : window.innerHeight / 2;
        spawnBurst(clickX, clickY, 25);
    } catch (err) {}

    // NOTE: Automatic music autoplay removed as requested by user.
    // Recipient can manually click top music button if desired.

    if (wrapper) wrapper.classList.add('opened');
    if (overlay) overlay.classList.add('active');
    if (paperModal) paperModal.classList.add('active');
}

function closeEnvelope() {
    const wrapper = document.getElementById('envelope-wrapper');
    const paperModal = document.getElementById('letter-paper');
    const overlay = document.getElementById('modal-overlay');

    if (paperModal) paperModal.classList.remove('active');
    if (overlay) overlay.classList.remove('active');

    setTimeout(() => {
        if (wrapper) wrapper.classList.remove('opened');
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
    if (params.has('to')) state.recipient = params.get('to');
    if (params.has('msg')) state.message = params.get('msg');
    if (params.has('from')) state.sender = params.get('from');
    if (params.has('date')) state.date = params.get('date');
    if (params.has('photo')) state.photoUrl = params.get('photo');

    updateLetterUI();
}

function updateLetterUI() {
    const coverName = document.getElementById('cover-recipient-name');
    if (coverName) coverName.textContent = state.recipient;

    const recipientText = document.getElementById('letter-recipient-text');
    if (recipientText) recipientText.textContent = state.recipient;

    const bodyText = document.getElementById('letter-body-text');
    if (bodyText) bodyText.textContent = state.message;

    const senderText = document.getElementById('letter-sender-text');
    if (senderText) senderText.textContent = state.sender;

    const dateText = document.getElementById('letter-date-text');
    if (dateText) dateText.textContent = state.date;

    const img = document.getElementById('polaroid-img');
    if (img && state.photoUrl) {
        img.src = state.photoUrl;
    }
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
