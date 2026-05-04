/* ============================================================================
   GESTION DES SLIDES
   ============================================================================ */

let currentSlide = 1;
const totalSlides = 17;

// Initialiser
document.addEventListener('DOMContentLoaded', () => {
    initPresentation();
    updateSlideDisplay();
    setupKeyboardControls();
    generateQRCode();
});

function initPresentation() {
    // Afficher la première slide
    const firstSlide = document.querySelector('.slide-1');
    if (firstSlide) {
        firstSlide.classList.add('active');
    }
    updateProgress();
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    
    // Validation
    if (n > totalSlides) {
        currentSlide = totalSlides;
    } else if (n < 1) {
        currentSlide = 1;
    } else {
        currentSlide = n;
    }
    
    // Masquer toutes les slides
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        
        if (index === currentSlide - 1) {
            // Slide active
            slide.classList.add('active');
        } else if (index < currentSlide - 1) {
            // Slides précédentes
            slide.classList.add('prev');
        }
    });
    
    updateSlideDisplay();
    updateProgress();
    
    // Animation des éléments de la slide
    animateSlideElements();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

function updateSlideDisplay() {
    document.getElementById('current-slide').textContent = currentSlide;
    document.getElementById('total-slides').textContent = totalSlides;
}

function updateProgress() {
    const progress = (currentSlide / totalSlides) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

function setupKeyboardControls() {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight' || event.key === ' ') {
            event.preventDefault();
            nextSlide();
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            previousSlide();
        }
    });
}

function animateSlideElements() {
    // Animer les éléments de la slide active
    const activeSlide = document.querySelector('.slide.active');
    if (!activeSlide) return;
    
    // Réinitialiser les animations génériques
    const animatedElements = activeSlide.querySelectorAll('[class*="animate"]');
    animatedElements.forEach((el) => {
        el.style.animation = 'none';
        // Trigger reflow
        void el.offsetWidth;
        el.style.animation = '';
    });
    
    // SLIDE 2: Animation spéciale pour la problématique avec cascade longue
    if (activeSlide.classList.contains('slide-2')) {
        // Réinitialiser les animations des cartes de problème
        const problemCards = activeSlide.querySelectorAll('.problem-card');
        problemCards.forEach((card) => {
            // Réinitialiser l'animation
            card.style.animation = 'none';
            void card.offsetWidth; // Trigger reflow
            card.style.animation = 'cardFadeIn 1s ease-in-out forwards';
            // Les délais sont déjà définis dans les classes CSS (.problem-1, .problem-2, .problem-3)
        });
        
        // Réinitialiser l'animation de la grille
        const problemGrid = activeSlide.querySelector('.problem-grid');
        if (problemGrid) {
            problemGrid.style.animation = 'none';
            void problemGrid.offsetWidth; // Trigger reflow
            problemGrid.style.animation = 'gridSlideIn 0.8s ease-out';
        }
        
        // Réinitialiser l'animation de la boîte solution
        const solutionBox = activeSlide.querySelector('.solution-box');
        if (solutionBox) {
            solutionBox.style.animation = 'none';
            void solutionBox.offsetWidth; // Trigger reflow
            solutionBox.style.animation = 'solutionAppear 0.8s ease-out 1.2s backwards';
        }
    }
}

/* ============================================================================
   GESTION DU PIPELINE INTERACTIF (SLIDE 4)
   ============================================================================ */

function showPipelineStep(stepNumber) {
    // Enlever la classe active de tous les nodes
    document.querySelectorAll('.pipeline-node').forEach((node) => {
        node.classList.remove('active');
    });
    
    // Masquer toutes les cards avec animation
    document.querySelectorAll('.code-style-card').forEach((card) => {
        card.style.display = 'none';
    });
    
    // Ajouter la classe active au node cliqué
    const activeNode = document.querySelector(`.pipeline-node[data-step="${stepNumber}"]`);
    if (activeNode) {
        activeNode.classList.add('active');
    }
    
    // Afficher et animer la card correspondante
    const activeCard = document.querySelector(`.code-style-card[data-step="${stepNumber}"]`);
    if (activeCard) {
        activeCard.style.display = 'block';
        activeCard.style.animation = 'none';
        void activeCard.offsetWidth; // Trigger reflow
        activeCard.style.animation = 'cardFadeInCustom 0.6s ease-out';
    }
}

// Initialiser le pipeline avec l'étape 1 par défaut
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const firstCard = document.querySelector('.code-style-card[data-step="1"]');
        const firstNode = document.querySelector('.pipeline-node[data-step="1"]');
        if (firstCard) {
            firstCard.style.display = 'block';
            firstCard.style.animation = 'cardFadeInCustom 0.6s ease-out 0.5s backwards';
        }
        if (firstNode) firstNode.classList.add('active');
    }, 500);
});

/* ============================================================================
   GESTION DES BLOCS DE CODE INTERACTIFS
   ============================================================================ */

function toggleCode(headerElement) {
    const codeContent = headerElement.nextElementSibling;
    if (codeContent && codeContent.classList.contains('code-content')) {
        const isVisible = codeContent.style.display !== 'none';
        
        // Fermer les autres codes
        document.querySelectorAll('.code-content').forEach((code) => {
            if (code !== codeContent) {
                code.style.display = 'none';
            }
        });
        
        // Toggle current avec animation fondu
        if (isVisible) {
            codeContent.style.animation = 'codeFadeOut 0.4s ease-out forwards';
            setTimeout(() => {
                codeContent.style.display = 'none';
            }, 400);
        } else {
            codeContent.style.display = 'block';
            codeContent.style.animation = 'none';
            void codeContent.offsetWidth; // Trigger reflow
            codeContent.style.animation = 'codeFadeIn 0.5s ease-out';
        }
    }
}

function toggleCodeExplanation(element) {
    const explanation = element.querySelector('.code-explanation');
    const isVisible = explanation.classList.contains('show');
    
    // Fermer les autres explications
    document.querySelectorAll('.code-explanation.show').forEach((exp) => {
        if (exp !== explanation) {
            exp.classList.remove('show');
        }
    });
    
    // Toggle current
    if (isVisible) {
        explanation.classList.remove('show');
    } else {
        explanation.classList.add('show');
    }
}

// Fermer les explications au clic en dehors
document.addEventListener('click', (e) => {
    if (!e.target.closest('.code-block')) {
        document.querySelectorAll('.code-explanation').forEach((exp) => {
            exp.classList.remove('show');
        });
    }
});

/* ============================================================================
   INTERACTIONS SOURIS
   ============================================================================ */

// Click sur les cartes de problème
document.querySelectorAll('.problem-card').forEach((card) => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
        
        // Ajouter une animation de pulse
        this.style.animation = 'cardPulse 0.6s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 600);
    });
});

// Click sur les cartes de résultats
document.querySelectorAll('.result-card').forEach((card) => {
    card.addEventListener('click', function() {
        const number = this.querySelector('.big-number');
        if (number) {
            number.style.transform = 'scale(1.1)';
            setTimeout(() => {
                number.style.transform = '';
            }, 300);
        }
        
        // Ajouter une animation de flip
        this.style.animation = 'flipCard 0.6s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 600);
    });
});

// Click sur les cartes d'avantages
document.querySelectorAll('.advantage-card').forEach((card) => {
    card.addEventListener('click', function() {
        this.style.animation = 'cardBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        setTimeout(() => {
            this.style.animation = '';
        }, 600);
    });
});

// Ajouter les animations CSS manquantes au document
const style = document.createElement('style');
style.textContent = `
    @keyframes cardPulse {
        0%, 100% { box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08); }
        50% { box-shadow: 0 15px 40px rgba(255, 127, 14, 0.3); }
    }
    
    @keyframes flipCard {
        0% { transform: rotateY(0deg); }
        50% { transform: rotateY(10deg); }
        100% { transform: rotateY(0deg); }
    }
    
    @keyframes cardBounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;
document.head.appendChild(style);

// Hover sur les barres de variance
document.querySelectorAll('.variance-bar').forEach((bar) => {
    bar.addEventListener('mouseenter', function() {
        // Mettre en avant cette barre
        document.querySelectorAll('.variance-bar').forEach((b) => {
            b.style.opacity = '0.5';
        });
        this.style.opacity = '1';
    });
    
    bar.addEventListener('mouseleave', function() {
        document.querySelectorAll('.variance-bar').forEach((b) => {
            b.style.opacity = '1';
        });
    });
});

// Afficher des infos au survol des confusion items
document.querySelectorAll('.confusion-item').forEach((item) => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.08) rotateZ(-2deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Double-click sur les éléments de key-points
document.querySelectorAll('.key-point').forEach((point) => {
    point.addEventListener('dblclick', function() {
        this.style.animation = 'spin 0.8s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 800);
    });
});

// Ajouter animation spin
const spinStyle = document.createElement('style');
spinStyle.textContent = `
    @keyframes spin {
        0% { transform: rotateZ(0deg) scale(1); }
        50% { transform: rotateZ(5deg) scale(1.02); }
        100% { transform: rotateZ(0deg) scale(1); }
    }
`;
document.head.appendChild(spinStyle);

/* ============================================================================
   ANIMATION DES ÉLÉMENTS AVEC SCROLL
   ============================================================================ */

// Observer pattern pour animer les éléments à vue
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = '';
        }
    });
}, observerOptions);

document.querySelectorAll('[class*="grid"], [class*="card"], [class*="container"]').forEach((el) => {
    observer.observe(el);
});

/* ============================================================================
   FONCTIONNALITÉS AVANCÉES
   ============================================================================ */

// Fullscreen toggle (F key)
document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'f') {
        event.preventDefault();
        toggleFullscreen();
    }
});

function toggleFullscreen() {
    const elem = document.documentElement;
    
    if (
        !document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
    ) {
        // Entrer en fullscreen
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        // Quitter le fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

/* ============================================================================
   STATS EN TEMPS RÉEL (OPTIONNEL)
   ============================================================================ */

// Compter les slides visitées
const visitedSlides = new Set();

function trackSlideView() {
    visitedSlides.add(currentSlide);
    
    // Afficher les stats
    console.log(`Slide ${currentSlide} visitée | Total visités: ${visitedSlides.size}/${totalSlides}`);
}

// Tracker chaque fois qu'on change de slide
document.addEventListener('keydown', trackSlideView);
document.addEventListener('click', trackSlideView);

/* ============================================================================
   MODE PRÉSENTATION AVANCÉ
   ============================================================================ */

// Afficher les indices de touches
console.log('%c🎯 RACCOURCIS CLAVIER:', 'color: #FF7F0E; font-size: 16px; font-weight: bold;');
console.log('%c→ Flèche droite ou ESPACE: Slide suivante', 'color: #1F77B4; font-size: 12px;');
console.log('%c← Flèche gauche: Slide précédente', 'color: #1F77B4; font-size: 12px;');
console.log('%cF: Plein écran', 'color: #1F77B4; font-size: 12px;');

/* ============================================================================
   ANIMATIONS DYNAMIQUES
   ============================================================================ */

function animateProgressFills() {
    const fills = document.querySelectorAll('.progress-fill');
    fills.forEach((fill) => {
        const parentBar = fill.parentElement;
        const finalWidth = fill.style.width;
        fill.style.width = '0%';
        
        setTimeout(() => {
            fill.style.width = finalWidth;
        }, 100);
    });
}

// Observer pour déclencher les animations
const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.querySelector('.progress-fill')) {
                animateProgressFills();
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.slide').forEach((slide) => {
    slideObserver.observe(slide);
});

/* ============================================================================
   GESTION DES CONTRÔLES TACTILES (Mobile)
   ============================================================================ */

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        // Swipe gauche → Slide suivante
        nextSlide();
    } else if (touchEndX > touchStartX + 50) {
        // Swipe droite → Slide précédente
        previousSlide();
    }
}

/* ============================================================================
   EFFETS SPÉCIAUX
   ============================================================================ */

// Créer des particules au survol des boutons
const buttons = document.querySelectorAll('.btn-prev, .btn-next');

buttons.forEach((btn) => {
    btn.addEventListener('mousemove', (event) => {
        const rect = btn.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        // Créer un petit effet de lumière
        btn.style.setProperty('--mouse-x', x + 'px');
        btn.style.setProperty('--mouse-y', y + 'px');
    });
});

/* ============================================================================
   QR CODE GÉNÉRÉ DYNAMIQUEMENT
   ============================================================================ */

function generateQRCode() {
    const qrContainer = document.getElementById('qr-code');
    if (!qrContainer) return;
    
    // URL du site (localhost)
    const url = window.location.href.split('?')[0];
    
    // Générer le QR code
    try {
        new QRCode(qrContainer, {
            text: url,
            width: 120,
            height: 120,
            colorDark: '#1A1A1A',
            colorLight: '#FFFFFF',
            correctLevel: QRCode.CorrectLevel.H
        });
    } catch (e) {
        console.log('QR code library non disponible');
    }
}

/* ============================================================================
   PIPELINE INTERACTIF - ÉTAPES CLIQUABLES
   ============================================================================ */

function highlightPipeline(stepNumber) {
    // Fermer les autres infos
    document.querySelectorAll('.info-box').forEach((box) => {
        box.style.display = 'none';
    });
    
    // Afficher l'info correspondante
    const infoBox = document.getElementById(`info-${stepNumber}`);
    if (infoBox) {
        infoBox.style.display = 'block';
        infoBox.style.animation = 'infoSlideIn 0.6s ease-out forwards';
    }
    
    // Activer le nœud
    document.querySelectorAll('.pipeline-node').forEach((node) => {
        node.classList.remove('active');
    });
    
    const nodeClass = `.node-${stepNumber}`;
    const activeNode = document.querySelector(nodeClass);
    if (activeNode) {
        activeNode.classList.add('active');
    }
}

// Auto-afficher la première étape au chargement du slide 4
setTimeout(() => {
    if (currentSlide === 4) {
        highlightPipeline(1);
    }
}, 500);

/* ============================================================================
   ANIMATIONS DE COMPTEURS - RÉSULTATS
   ============================================================================ */

function animateCounter(element, targetValue, duration = 2000) {
    if (!element) return;
    
    const isPercent = element.textContent.includes('%');
    const isMult = element.textContent.includes('x');
    const startValue = 0;
    const startTime = Date.now();
    
    function updateCounter() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(startValue + (targetValue - startValue) * progress);
        
        if (isPercent) {
            element.textContent = current + '%';
        } else if (isMult) {
            element.textContent = (current / 100) + 'x';
        } else {
            element.textContent = current;
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    updateCounter();
}

// Animer tous les compteurs quand on arrive à la slide résultats
function animateResultsCounters() {
    document.querySelectorAll('.big-number').forEach((num) => {
        const text = num.textContent.trim();
        let value = parseFloat(text);
        
        if (text.includes('%')) {
            value = parseFloat(text);
        } else if (text.includes('x')) {
            value = parseFloat(text) * 100;
        } else if (text.includes('-')) {
            value = Math.abs(parseFloat(text));
        }
        
        animateCounter(num, value, 2000);
    });
}

/* ============================================================================
   ANIMATIONS DE BARRES DE VARIANCE
   ============================================================================ */

function initVarianceBars() {
    // Données réelles de la variance
    const varianceData = [60.2, 15.8, 10.5, 4.1, 2.3, 1.5, 1.4, 1.3, 0.8];
    const maxVariance = Math.max(...varianceData);
    
    document.querySelectorAll('.variance-bar').forEach((bar, index) => {
        if (index < varianceData.length) {
            const percentage = (varianceData[index] / maxVariance) * 100;
            const colors = ['#1F77B4', '#FF7F0E', '#2CA02C', '#D62728', '#9467BD', '#8C564B', '#E377C2', '#7F7F7F', '#BCBD22'];
            bar.style.background = colors[index] || '#FF7F0E';
            bar.style.setProperty('--height', percentage + '%');
            bar.style.height = '0';  // Démarre à 0 pour l'animation
        }
    });
}

// Observer pour déclencher les animations de barres
const varianceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.classList.contains('variance-bars')) {
            // Lancer l'animation des barres
            setTimeout(() => {
                document.querySelectorAll('.variance-bar').forEach((bar, index) => {
                    const varianceData = [60.2, 15.8, 10.5, 4.1, 2.3, 1.5, 1.4, 1.3, 0.8];
                    const maxVariance = 60.2;
                    const percentage = (varianceData[index] / maxVariance) * 100;
                    bar.style.height = percentage + '%';
                });
            }, 100);
        }
    });
}, { threshold: 0.3 });

setTimeout(() => {
    const varianceBars = document.querySelector('.variance-bars');
    if (varianceBars) varianceObserver.observe(varianceBars);
}, 500);

/* ============================================================================
   SCATTER PLOT INTERACTIF
   ============================================================================ */

function setupScatterPlotFilters() {
    const filters = document.querySelectorAll('.digit-filter');
    filters.forEach((filter, index) => {
        filter.addEventListener('click', function() {
            this.classList.toggle('active');
            updateScatterPlot();
        });
    });
}

function updateScatterPlot() {
    const activeFilters = Array.from(document.querySelectorAll('.digit-filter.active'))
        .map(f => parseInt(f.dataset.digit));
    
    const scatterPoints = document.querySelectorAll('.scatter-point');
    scatterPoints.forEach((point) => {
        const digit = parseInt(point.dataset.class);
        if (activeFilters.length === 0 || activeFilters.includes(digit)) {
            point.style.opacity = '1';
            point.style.pointerEvents = 'auto';
        } else {
            point.style.opacity = '0.1';
            point.style.pointerEvents = 'none';
        }
    });
}

/* ============================================================================
   MATRICE DE CONFUSION
   ============================================================================ */

function generateConfusionMatrix() {
    // Matrice de confusion réelle (simplifié)
    const confusionData = [
        [169, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        [0, 177, 1, 0, 0, 0, 2, 0, 0, 0],
        [0, 2, 162, 0, 0, 0, 0, 2, 0, 0],
        [0, 0, 1, 171, 0, 1, 0, 0, 3, 0],
        [0, 0, 0, 0, 166, 0, 1, 0, 0, 2],
        [0, 1, 0, 1, 0, 153, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 169, 0, 0, 0],
        [1, 0, 2, 0, 0, 0, 0, 168, 1, 0],
        [3, 1, 0, 2, 0, 1, 1, 0, 158, 0],
        [0, 1, 0, 2, 2, 0, 0, 1, 0, 167]
    ];
    
    const matrixContainer = document.querySelector('.confusion-matrix');
    if (!matrixContainer) return;
    
    // Trouver la valeur max pour la normalisation des couleurs
    const maxValue = Math.max(...confusionData.flat());
    
    // Créer la matrice
    let html = '';
    
    // En-têtes colonnes
    html += '<div class="matrix-label"></div>';
    for (let i = 0; i < 10; i++) {
        html += `<div class="matrix-label">${i}</div>`;
    }
    
    // Lignes
    for (let i = 0; i < 10; i++) {
        html += `<div class="matrix-label">${i}</div>`;
        for (let j = 0; j < 10; j++) {
            const value = confusionData[i][j];
            const opacity = value / maxValue;
            const colors = ['#1F77B4', '#FF7F0E', '#2CA02C', '#D62728', '#9467BD', '#8C564B', '#E377C2', '#7F7F7F', '#BCBD22', '#17BECF'];
            const bgColor = colors[i];
            
            html += `<div class="matrix-cell" style="background: ${bgColor}; opacity: ${0.2 + opacity * 0.8};" title="${i} → ${j}: ${value} fois">${value}</div>`;
        }
    }
    
    matrixContainer.innerHTML = html;
}

/* ============================================================================
   DÉMARRAGE
   ============================================================================ */

// Initialiser les barres de variance au chargement
setTimeout(() => {
    initVarianceBars();
    generateConfusionMatrix();
    setupScatterPlotFilters();
}, 1000);

// Déclencher les animations de compteurs quand on arrive à la slide 6
const resultSlideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.classList.contains('slide-6')) {
            animateResultsCounters();
        }
    });
}, { threshold: 0.5 });

setTimeout(() => {
    const resultSlide = document.querySelector('.slide-6');
    if (resultSlide) resultSlideObserver.observe(resultSlide);
}, 500);

console.log('%c✨ Présentation LDA MNIST chargée avec succès!', 'color: #FF7F0E; font-size: 14px; font-weight: bold;');
console.log('%cAppuyez sur → pour commencer', 'color: #1F77B4; font-size: 12px;');
console.log('%c💻 Cliquez sur les blocs de code pour voir les explications!', 'color: #2CA02C; font-size: 12px;');
