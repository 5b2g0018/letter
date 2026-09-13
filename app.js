/**
 * TWICE Interactive Letter Application Logic - 3 Chapters Edition
 * Customized for 巧克力 from 松鼠 🐿️
 */

let currentChapter = 1;

const CHAPTERS = {
    1: {
        id: 1,
        badge: '🌸 FIRST ENCOUNTER',
        recipient: '巧克力',
        stamps: [LOVELYS[0], LOVELYS[1]],
        message: `四個月前，我們第一次在群組裡相遇。當時我們對彼此完全不熟悉，我其實也不太敢在群裡開口說話\n\n直到某次群組通話，不知道我哪來的勇氣，竟然就這樣加了妳的哀居！不過當時加了之後，我們也沒有因此變得比較熟（哈哈哈\n\n後來無意間在脆上刷到妳的貼文，大概是梁靜茹給了我勇氣吧，我第一次在脆上留言就是回妳！當時我說：「妳看起來好高冷、感覺應該滿難聊的。」結果妳竟然回我：「還不快來跟我聊天。」\n\n於是我又又又不知道哪來的勇氣，竟然真的跑去私訊妳了！從那之後，我們好像就變得越來越熟悉彼此\n\n真的很高興能認識妳，巧克力！🍫✨`,
        photoUrl: 'images/九宮格.jpg',
        photoCaption: '初次相遇 ✨ 故事的開端 🌸',
        date: '2026.09.05',
        sender: '松鼠 🐿️',
        showLovelys: false
    },
    2: {
        id: 2,
        badge: '💫 FAMILIARITY',
        recipient: '巧克力',
        stamps: [LOVELYS[2], LOVELYS[6]],
        message: `九兔讓我們相遇，或許從我把薯條的文打成你的文那一刻開始，就已經注定了我們會認識。

這幾個月最開心的事情之一，就是能夠認識你們、認識妳。其實以前的我，是一個從來不太會在網路上跟別人社交的人，也很少主動去認識陌生人。可是也不知道為什麼，遇到你們之後，好像就慢慢變得不一樣了。

從一開始不太敢在群組裡說話，到後來會一起聊天、一起開玩笑，再到現在可以把很多心裡的話告訴彼此。回頭想想，真的覺得這一切很不可思議。

明明我們原本只是網路上完全不認識的陌生人，生活也在不同的地方，甚至到現在都還沒有真正見過面，卻能在短短幾個月裡，慢慢走進彼此的生活，也慢慢變成我很珍惜、很在乎的人。

而在認識妳之後，我也發現了一件滿有趣的事情。

跟妳聊天真的很像在跟同齡的人聊天。雖然妳比我小，但跟妳相處的時候，我完全不會覺得我們之間有什麼年齡上的差距。很多話題都可以很自然地聊，什麼都能講，也不用特別去想要怎麼跟妳相處。

反而有時候跟妳聊一聊，我會覺得好像我是那個年紀比較小、比較幼稚的人哈哈哈。明明我才是年紀大的那位，結果有些時候卻覺得妳比我還成熟。很多事情妳都有自己的想法，也會去在意別人的感受。

有時候我甚至會忘記妳其實比我小，會突然想到「欸對，妳才17」的時候，才會覺得真的滿不可思議的哈哈哈。

但我覺得這也是我很喜歡跟妳聊天的原因之一。因為跟妳聊天不用刻意裝成熟，也不用一直顧慮什麼，想講什麼就講什麼。妳可以很成熟，也可以偶爾很幼稚、很可愛，而我可能才是那個常常幼稚到需要被照顧的人🤣

也是在一次次聊天、一次次了解妳之後，我才慢慢發現，妳真的不只是我認識的一個網友，而是已經變成一個我很很在乎的人。

所以我一直覺得，能遇見你們真的很幸運。`,
        photoUrl: 'images/2.jpg',
        photoCaption: '珍貴回憶 ✨ 點點滴滴的溫暖 💫',
        date: '2026.09.05',
        sender: '松鼠 🐿️',
        showLovelys: false
    },
    3: {
        id: 3,
        badge: '🎂 BIRTHDAY CARDS',
        recipient: '유진（YUZHEN）',
        stamps: [LOVELYS[0], LOVELYS[8]],
        message: `哥（松鼠、蛋黃哥）先恭喜你又長大一歲啦～🎂
解鎖17歲的人生！希望你在今年的每一天都可以開開心心的，也要記得好好照顧自己。

雖然我們從來沒有見過面，也沒有真正出現在彼此的現實生活裡，但不知道從什麼時候開始，哥真的已經把你當成自己的妹妹了。知道你在家裡經歷過的一些事情，也因為發現我們其實有很多地方都很像，所以有時候真的會特別希望你可以好好的。

其實開學之後，我們真的變得比較少聊天了，基本上有時候一天可能就只有一個話題，聊個幾句就又各自去忙自己的事情了。
有時候回頭想想，會覺得「欸，我們以前好像不是這樣的」，以前可以一聊就聊滿久的，現在卻好像一天也說不了幾句話。

但哥知道你現在也有自己的生活和事情要忙，所以我其實也沒有覺得怎麼樣，只是偶爾還是會有一點想念以前跟你聊天的感覺。

不過就算我們現在沒有像以前那麼常聊天，也不代表哥就不在乎你了。你有自己的生活，哥也有自己的事情，偶爾忙到沒辦法聊天很正常。只是希望你知道，不管我們隔多久沒聊天，你哪天突然想找哥的時候，還是可以直接來找我。

如果有些事情真的讓你覺得很煩、很躁，甚至難過到想哭、想找個地方發洩情緒，但又不知道可以跟誰說的時候，都可以來找哥。

你可以傳訊息給哥，也可以直接打電話，想說什麼都可以。你的訊息哥都會看，你也知道哥基本上都是秒回的哈哈哈
所以不用怕打擾哥，也不用覺得不好意思，有什麼事情就直接跟哥說就好。

知道你上了高二之後，事情變得更多了，學業也比以前更重，可能有時候會覺得很累、壓力很大。雖然哥不一定能幫你解決所有事情，但至少你累的時候，可以有一個人聽你說。

17歲啦～希望你不要給自己太大的壓力，該開心的時候就好好開心，累的時候就好好休息。希望你今年可以遇到很多值得開心的事情，也希望不管發生什麼事，你都要記得照顧好自己。

然後，這個網站是專門為你寫的。
裡面的信，是從我們認識到現在，哥一直想對你說的一些話。

我沒有辦法給你親筆信，就算真的寫了，也沒辦法親手交到你手上（你離我太遠了哈哈哈，所以最後就想說，那我乾脆自己寫一個網站送給你。

這個網站是屬於你的，我也不會把它刪掉，你隨時都可以打開來看看。或許以後過了一段時間，你再回來看的時候，會發現裡面有一些以前的回憶，也可以重新想起我們從認識到現在的一些事情。

不過這也是哥第一次自己寫網站送人，可能做得沒有很好，所以別太嫌棄它🤣
希望你會喜歡

最後再跟你說一次——
生日快樂巧克力、유진（YUZHEN）、軍師妹妹～～～🎂🎉
你身分真的好多喔哈哈哈

17歲要好好的，要開心，要照顧好自己。

松鼠真的超級愛妳喔 💙❤️`,
        photoUrl: 'https://zeekmagazine.com/wp-content/uploads/2025/09/1758345362-a18c6653ff456bdab53dfefd9d513967.jpg',
        photoCaption: 'Be your happy self. ✨ TWICE 💙',
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
    initPolaroidLightbox();
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
    } catch (err) { }
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

    // Try auto-play immediately
    attemptAutoPlayBgm();

    // Fallback: auto-start audio on first user click or touch anywhere
    const startOnInteraction = () => {
        if (!isBgmPlaying) {
            attemptAutoPlayBgm();
        }
        window.removeEventListener('click', startOnInteraction);
        window.removeEventListener('touchstart', startOnInteraction);
        window.removeEventListener('pointerdown', startOnInteraction);
    };

    window.addEventListener('click', startOnInteraction);
    window.addEventListener('touchstart', startOnInteraction);
    window.addEventListener('pointerdown', startOnInteraction);
}

function attemptAutoPlayBgm() {
    try {
        const audio = document.getElementById('be-as-one-audio');
        const bgmIcon = document.getElementById('bgm-icon');
        const bgmText = document.getElementById('bgm-text');

        if (!audio || isBgmPlaying) return;

        audio.play().then(() => {
            isBgmPlaying = true;
            if (bgmIcon) bgmIcon.textContent = '🎶';
            if (bgmText) bgmText.textContent = 'Be as ONE: ON';
        }).catch(() => {
            // Autoplay blocked by browser until user gesture
        });
    } catch (err) { }
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
    } catch (err) { }
}

/* Image Zoom Lightbox Functions */
function initPolaroidLightbox() {
    const frame = document.getElementById('polaroid-frame');
    if (frame) {
        frame.addEventListener('click', (e) => {
            e.stopPropagation();
            const img = document.getElementById('polaroid-img');
            const caption = document.getElementById('polaroid-caption');
            if (img) {
                openImageLightbox(img.src, caption ? caption.textContent : '');
            }
        });
    }
}

function openImageLightbox(src, caption) {
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = src;
    if (lightboxCaption) lightboxCaption.textContent = caption || '';

    lightbox.classList.add('active');
    playPopSound();
}

function closeImageLightbox() {
    const lightbox = document.getElementById('image-lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
    }
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
    } catch (e) { }
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
    } catch (err) { }

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

    // Update Stamps (Top Right of Letter)
    updateLetterStamps(data.stamps);

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

function updateLetterStamps(stampList) {
    const stamps = document.getElementById('letter-stamps');
    if (!stamps || typeof LOVELYS === 'undefined') return;

    stamps.innerHTML = '';
    const listToRender = stampList || [LOVELYS[0], LOVELYS[1]];
    listToRender.forEach(lovely => {
        const stamp = document.createElement('div');
        stamp.className = 'mini-lovely-stamp';
        stamp.innerHTML = createLovelyHTML(lovely, { size: 36 });
        stamps.appendChild(stamp);
    });
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
    const data = CHAPTERS[currentChapter] || CHAPTERS[1];
    updateLetterStamps(data ? data.stamps : null);

    const innerList = document.getElementById('inner-lovelys-list');

    if (typeof LOVELYS === 'undefined') return;

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

