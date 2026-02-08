// ====================
// INTRO SEQUENCE
// ====================

const introOverlay = document.getElementById('introOverlay');
const bgMusic = document.getElementById('bgMusic');
const targetVolume = 0.3;

let isPlaying = false; // Will be set to true when intro music plays

// Start intro sequence on page load
window.addEventListener('load', () => {
    // Hide intro overlay after 7 seconds
    setTimeout(() => {
        introOverlay.classList.add('hidden');
    }, 7000);

    // Start music fade-in after 5 seconds (during text fade-out)
    setTimeout(() => {
        startMusicFadeIn(2500); // Fade in over 2.5 seconds
        isPlaying = true; // Mark music as playing
        document.getElementById('musicBtnText').textContent = 'Pause Song';
    }, 4700);
});

// Music fade-in function with customizable duration
function startMusicFadeIn(duration = 2500) {
    bgMusic.volume = 0;
    bgMusic.play().catch(error => {
        console.error('Error playing audio:', error);
    });

    const startTime = Date.now();
    const fadeInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        bgMusic.volume = targetVolume * progress;

        if (progress === 1) {
            clearInterval(fadeInterval);
        }
    }, 50);
}

// ====================
// COUNTDOWN TIMER
// ====================

// Set the target release date: April 7, 2027 at midnight
const releaseDate = new Date('2027-04-07T00:00:00').getTime();

// Get countdown elements
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// Update countdown every second
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = releaseDate - now;

    if (timeLeft < 0) {
        daysEl.textContent = '000';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(3, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
    // Also set data-value for gradient pseudo-element rendering
    daysEl.setAttribute('data-value', String(days).padStart(3, '0'));
    hoursEl.setAttribute('data-value', String(hours).padStart(2, '0'));
    minutesEl.setAttribute('data-value', String(minutes).padStart(2, '0'));
    secondsEl.setAttribute('data-value', String(seconds).padStart(2, '0'));
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ====================
// TRAILER BUTTON
// ====================

const trailerBtn = document.getElementById('trailerBtn');
const TRAILER_URL = 'https://www.youtube.com/watch?v=DMD2uthghWE';

let musicWasPlayingBeforeTrailer = false;

trailerBtn.addEventListener('click', () => {
    // Check if music is playing
    if (isPlaying) {
        musicWasPlayingBeforeTrailer = true;
        bgMusic.pause();
    }
    window.open(TRAILER_URL, '_blank');

    // Resume music after 2 seconds if it was playing
    setTimeout(() => {
        if (musicWasPlayingBeforeTrailer) {
            bgMusic.play().catch(error => {
                console.error('Error resuming audio:', error);
            });
            musicWasPlayingBeforeTrailer = false;
        }
    }, 2000);
});

// ====================
// MUSIC PLAYER
// ====================

const musicBtn = document.getElementById('musicBtn');
const musicBtnText = document.getElementById('musicBtnText');

const fadeDuration = 2000; // 2 seconds fade-in

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicBtnText.textContent = 'Play Song';
        isPlaying = false;
    } else {
        startMusicFadeIn(fadeDuration);
        musicBtnText.textContent = 'Pause Song';
        isPlaying = true;
    }
});

bgMusic.addEventListener('ended', () => {
    isPlaying = false;
    musicBtnText.textContent = 'Play Song';
});

// ====================
// BACKGROUND SLIDES SETUP
// ====================
// Place your slide images in an `images/` folder next to index.html (e.g. images/slide1.jpg)
// This script preloads them, applies them as backgrounds to the .slide elements,
// and crossfades between slides automatically. It respects the user's
// prefers-reduced-motion setting.

(function () {
    const slidePaths = [
        './images/slide1.jpg',
        './images/slide2.jpg',
        './images/slide3.png',
        './images/slide4.jpg',
        './images/slide5.jpg',
        './images/slide6.jpg',
        './images/slide7.jpg',
        './images/slide8.jpg'
    ];

    const slides = Array.from(document.querySelectorAll('.background-slider .slide'));

    // Preload images and assign them to slides (if matching index exists)
    slidePaths.forEach((path, i) => {
        const img = new Image();
        img.src = path;
        img.onload = () => {
            if (slides[i]) slides[i].style.backgroundImage = `url('${path}')`;
        };
        img.onerror = () => {
            console.warn('Failed to load slide image:', path);
        };
    });

    // Crossfade controller
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const visibleDuration = 8000; // ms each slide stays visible (excluding transition)
    const transitionDuration = 1000; // should match CSS transition (ms)

    let current = 0;
    const max = Math.min(slidePaths.length, slides.length);

    function showSlide(idx) {
        slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    }

    if (max > 0) {
        // show the first slide
        showSlide(0);

        if (!reducedMotion) {
            setInterval(() => {
                current = (current + 1) % max;
                showSlide(current);
            }, visibleDuration);
        }
    }
})();

