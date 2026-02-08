/* Clean stylesheet: background slider, title gradient, glass countdown, buttons, responsive */
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0
}

:root {
    --primary-gold: #d4af37;
    --text-light: #fff;
    --text-dim: rgba(255, 255, 255, 0.75);
    --glass-bg: rgba(255, 255, 255, 0.06);
    --glass-border: rgba(255, 255, 255, 0.12)
}

body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: var(--text-light);
    background: #000;
    min-height: 100vh
}

/* Intro Overlay */
.intro-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeOutOverlay 1s ease-out 6s forwards
}

.intro-overlay.hidden {
    display: none;
    pointer-events: none
}

.intro-content {
    text-align: center
}

.shloka-text {
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 700;
    font-family: 'Trajan Pro', 'Trajan', 'Cinzel', serif;
    letter-spacing: 0.08em;
    margin-bottom: 1.5rem;
    background-image: linear-gradient(135deg, var(--primary-gold) 0%, #fff 50%, var(--primary-gold) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    animation: fadeInText 2s ease-out forwards, fadeOutText 1.5s ease-out 5s forwards
}

.shloka-translation {
    font-size: clamp(1.2rem, 2.5vw, 1.8rem);
    font-weight: 700;
    font-family: 'Trajan Pro', 'Trajan', 'Cinzel', serif;
    background-image: linear-gradient(135deg, var(--primary-gold) 0%, #fff 50%, var(--primary-gold) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    letter-spacing: 0.05em;
    animation: fadeInText 2s ease-out 0.3s forwards, fadeOutText 1.5s ease-out 5.3s forwards
}

@keyframes fadeInText {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeOutText {
    from {
        opacity: 1;
        transform: translateY(0);
    }

    to {
        opacity: 0;
        transform: translateY(-20px);
    }
}

@keyframes fadeOutOverlay {
    from {
        opacity: 1;
        pointer-events: auto;
    }

    to {
        opacity: 0;
        pointer-events: none;
        display: none;
    }
}

/* Sliding Banner */
.sliding-banner {
    position: relative;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.04);
    border-bottom: 1px solid var(--glass-border);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    padding: 1.5rem 1rem;
    overflow: hidden;
    z-index: 100;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.02)
}

.banner-content {
    display: flex;
    white-space: nowrap;
    animation: slide 18s linear infinite;
    will-change: transform;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform: translateZ(0);
    -webkit-transform: translateZ(0)
}

.banner-content span {
    font-size: clamp(0.75rem, 1.8vw, 1rem);
    font-weight: 700;
    letter-spacing: 0.15em;
    padding: 0 4rem;
    text-transform: uppercase;
    font-family: 'Trajan Pro', 'Trajan', 'Cinzel', serif;
    background-image: linear-gradient(135deg, var(--primary-gold) 0%, #fff 50%, var(--primary-gold) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent
}

@keyframes slide {
    0% {
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(-50%, 0, 0);
    }
}

/* Background slider */
.background-container {
    position: fixed;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    transform: translate3d(0, 0, 0)
}

.background-container::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="noise"><feTurbulence baseFrequency="0.5" numOctaves="2" seed="2" type="fractalNoise"/></filter><rect width="200" height="200" fill="rgba(255,255,255,0.015)" filter="url(%23noise)"/></svg>');
    opacity: 0.3;
    pointer-events: none;
    z-index: 5;
    mix-blend-mode: overlay;
    will-change: opacity;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.background-slider {
    position: absolute;
    inset: 0;
    pointer-events: none;
    will-change: opacity;
    transform: translate3d(0, 0, 0)
}

.slide {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: opacity;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden
}

.slide.active {
    opacity: 1
}

.overlay {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 15% -20%, rgba(212, 175, 55, 0.15) 0%, transparent 30%),
        radial-gradient(circle at 85% -20%, rgba(255, 255, 255, 0.1) 0%, transparent 35%),
        radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
    z-index: 1
}

.stamp {
    position: absolute;
    top: 5rem;
    right: 1.5rem;
    width: clamp(120px, 18vw, 250px);
    height: auto;
    z-index: 3;
    opacity: 0.95;
    filter: drop-shadow(0 4px 8px rgb(255, 255, 255))
}

.content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
    text-align: center
}

.title-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0rem;
    margin-top: 4rem;
    margin-bottom: 0rem;
}

.director-credit {
    font-size: clamp(0.9rem, 2vw, 1.3rem);
    font-weight: 800;
    font-family: 'Trajan Pro', 'Trajan', 'Cinzel', serif;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    background: linear-gradient(135deg, var(--primary-gold) 0%, #fff 50%, var(--primary-gold) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    margin: 0;
    padding: 0
}

.movie-title {
    font-size: clamp(3.5rem, 10vw, 7.5rem);
    font-weight: 900;
    font-family: 'Trajan Pro', 'Trajan', 'Cinzel', serif;
    letter-spacing: .2em;
    margin: 0;
    text-transform: uppercase;
    background: linear-gradient(135deg, var(--primary-gold) 0%, #fff 50%, var(--primary-gold) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: none;
    transform: none
}

.countdown-container {
    display: flex;
    gap: clamp(1rem, 3vw, 2.5rem);
    margin: 1rem 0;
    flex-wrap: wrap;
    justify-content: center
}

.countdown-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    text-align: center;
    min-width: clamp(70px, 15vw, 120px)
}

.countdown-value {
    width: clamp(70px, 15vw, 120px);
    height: clamp(70px, 15vw, 120px);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: transparent;
    font-size: clamp(1.6rem, 4.5vw, 3rem);
    font-weight: 700;
    background-color: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.02);
    font-family: 'Trajan Pro', 'Trajan', 'Cinzel', serif
}

.countdown-value::before {
    content: attr(data-value);
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(135deg, var(--primary-gold) 0%, #fff 50%, var(--primary-gold) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: inherit;
    font-weight: inherit;
    text-shadow: 0 0 24px rgba(212, 175, 55, 0.45)
}

.countdown-label {
    font-size: clamp(.65rem, 1.8vw, .95rem);
    text-transform: uppercase;
    letter-spacing: .18em;
    color: var(--text-dim);
    margin-top: .25rem
}

.release-date {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    color: var(--text-dim);
    letter-spacing: .1em;
    margin-bottom: 2rem;
    font-family: 'Trajan Pro', 'Trajan', 'Cinzel', serif
}

.hashtags {
    font-size: clamp(.85rem, 2vw, 1rem);
    color: var(--text-dim);
    letter-spacing: .1em;
    margin-bottom: 2rem;
    font-weight: 500;
    font-family: 'Trajan Pro', 'Trajan', 'Cinzel', serif
}

.button-container {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center
}

.glass-button {
    display: flex;
    align-items: center;
    gap: .75rem;
    padding: 1rem 2.5rem;
    font-size: clamp(.9rem, 2vw, 1.1rem);
    font-weight: 600;
    letter-spacing: .05em;
    text-transform: uppercase;
    color: var(--text-light);
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 50px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    cursor: pointer;
    transition: all .3s ease;
    position: relative;
    overflow: hidden;
    font-family: 'Trajan Pro', 'Trajan', 'Cinzel', serif
}

.glass-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    transform: translate(-50%, -50%);
    transition: width .6s, height .6s
}

.glass-button:hover::before {
    width: 300px;
    height: 300px
}

.glass-button:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: var(--primary-gold);
    box-shadow: 0 8px 32px rgba(212, 175, 55, 0.3);
    transform: translateY(-2px)
}

@media (max-width:768px) {
    .content {
        padding: 1.5rem
    }

    .movie-title {
        margin-bottom: 1.5rem
    }

    .countdown-container {
        gap: 1rem;
        margin: 2rem 0
    }

    .button-container {
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        max-width: 300px
    }

    .glass-button {
        width: 100%;
        justify-content: center;
        padding: 1rem 2rem
    }
}

@media (max-width:480px) {
    .countdown-item {
        min-width: 60px
    }

    .movie-title {
        letter-spacing: .1em
    }
}

@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important
    }
}
