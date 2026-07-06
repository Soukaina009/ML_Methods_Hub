/* ============================================================================
   PILOTAGE DE LA NAVIGATION INTERACTIVE (COMPTEUR RÉPARÉ)
   ============================================================================ */
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updatePresentation() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        if (index === currentSlideIndex) {
            slide.classList.add('active');
        } else if (index < currentSlideIndex) {
            slide.classList.add('prev');
        }
    });

    // Mise à jour textuelle dynamique du compteur en bas de page
    const currentEl = document.getElementById('current-slide');
    const totalEl = document.getElementById('total-slides');
    
    if (currentEl && totalEl) {
        currentEl.textContent = currentSlideIndex + 1;
        totalEl.textContent = totalSlides;
    }

    // Gestion de la barre de progression linéaire
    const progressFill = document.getElementById('progress');
    if (progressFill) {
        const progressPercent = (currentSlideIndex / (totalSlides - 1)) * 100;
        progressFill.style.width = `${progressPercent}%`;
    }
}

function nextSlide() {
    if (currentSlideIndex < totalSlides - 1) {
        currentSlideIndex++;
        updatePresentation();
    }
}

function previousSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updatePresentation();
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
    if (e.key === 'ArrowLeft') previousSlide();
});

/* ============================================================================
   SIMULATEUR INTERACTIF SVM LINEAIRE (SLIDE 4)
   ============================================================================ */
function initSVMSimulator() {
    const container = document.getElementById('svm-simulation-container');
    if (!container) return;

    container.innerHTML = `
        <h4 style="margin-bottom: 16px; color: var(--primary-color); font-weight:700;">Démonstration de la Marge Maximale</h4>
        <div class="svm-plot-area" style="position: relative; width: 100%; height: 260px; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
            <div style="position: absolute; width: 150%; height: 3px; background: var(--text-primary); transform: rotate(-25deg); top: 130px; left: -25%; z-index: 5;"></div>
            <div style="position: absolute; width: 150%; height: 1px; border-top: 2px dashed #94a3b8; transform: rotate(-25deg); top: 85px; left: -25%; z-index: 4;"></div>
            <div style="position: absolute; width: 150%; height: 1px; border-top: 2px dashed #94a3b8; transform: rotate(-25deg); top: 175px; left: -25%; z-index: 4;"></div>
        </div>
    `;

    const plotArea = container.querySelector('.svm-plot-area');
    const points = [
        { x: 25, y: 35, color: 'var(--color-0)', isSupport: false },
        { x: 45, y: 25, color: 'var(--color-0)', isSupport: false },
        { x: 38, y: 54, color: 'var(--color-0)', isSupport: true },  
        { x: 68, y: 68, color: 'var(--color-0)', isSupport: true },  
        { x: 20, y: 82, color: 'var(--color-3)', isSupport: false },
        { x: 75, y: 88, color: 'var(--color-3)', isSupport: false },
        { x: 52, y: 92, color: 'var(--color-3)', isSupport: true }
    ];

    points.forEach(p => {
        const pointEl = document.createElement('div');
        pointEl.style.position = 'absolute';
        pointEl.style.left = `${p.x}%`;
        pointEl.style.top = `${p.y}%`;
        pointEl.style.width = '12px';
        pointEl.style.height = '12px';
        pointEl.style.borderRadius = '50%';
        pointEl.style.backgroundColor = p.color;
        pointEl.style.transform = 'translate(-50%, -50%)';
        pointEl.style.zIndex = '6';

        if (p.isSupport) {
            pointEl.style.border = '2px solid #0f172a';
            pointEl.style.boxShadow = '0 0 8px rgba(0,0,0,0.3)';
            pointEl.style.animation = 'pulseSupport 1.8s infinite ease-in-out';
        }
        plotArea.appendChild(pointEl);
    });
}

/* ============================================================================
   SIMULATEUR DE CARTOGRAPHIE DES FRONTIÈRES 2D RBF (SLIDE 13)
   ============================================================================ */
function initDecisionMap2D() {
    const container = document.getElementById('svm-contour-container');
    if (!container) return;

    // Création d'une grille de fond colorée pour simuler les contours de décision RBF
    container.innerHTML = `
        <h4 style="margin-bottom: 16px; color: var(--primary-color); font-weight:700;">Espace de Décision Non-Linéaire (RBF)</h4>
        <div class="contour-plot" style="position: relative; width: 100%; height: 260px; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: inset 0 2px 5px rgba(0,0,0,0.05);">
            
            <div style="position: absolute; top: 15%; left: 15%; width: 140px; height: 140px; background: rgba(59, 130, 246, 0.15); border-radius: 50%; filter: blur(20px); z-index: 1;"></div>
            
            <div style="position: absolute; bottom: 10%; right: 15%; width: 160px; height: 160px; background: rgba(239, 68, 68, 0.15); border-radius: 50%; filter: blur(25px); z-index: 1;"></div>
            
            <svg style="position: absolute; top:0; left:0; width:100%; height:100%; z-index:2; pointer-events:none;">
                <path d="M -20,180 Q 120,130 200,90 T 450,40" fill="none" stroke="#0f172a" stroke-width="2.5" stroke-dasharray="4,4"/>
            </svg>
        </div>
    `;

    const plotArea = container.querySelector('.contour-plot');

    // Génération de quelques clusters de points non-linéaires imbriqués
    const cloudPoints = [
        // Groupe Bleu
        { x: 25, y: 25, color: 'var(--color-0)' },
        { x: 32, y: 40, color: 'var(--color-0)' },
        { x: 45, y: 30, color: 'var(--color-0)' },
        { x: 20, y: 50, color: 'var(--color-0)' },
        
        // Groupe Rouge
        { x: 70, y: 75, color: 'var(--color-3)' },
        { x: 82, y: 60, color: 'var(--color-3)' },
        { x: 60, y: 80, color: 'var(--color-3)' },
        { x: 85, y: 82, color: 'var(--color-3)' }
    ];

    cloudPoints.forEach(p => {
        const pt = document.createElement('div');
        pt.style.position = 'absolute';
        pt.style.left = `${p.x}%`;
        pt.style.top = `${p.y}%`;
        pt.style.width = '10px';
        pt.style.height = '10px';
        pt.style.borderRadius = '50%';
        pt.style.backgroundColor = p.color;
        pt.style.transform = 'translate(-50%, -50%)';
        pt.style.zIndex = '3';
        plotArea.appendChild(pt);
    });
}

// Injection des styles d'animation CSS
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes pulseSupport {
    0% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.3); }
    100% { transform: translate(-50%, -50%) scale(1); }
}`;
document.head.appendChild(styleSheet);

// Lancement au chargement complet du DOM
window.addEventListener('DOMContentLoaded', () => {
    updatePresentation();
    initSVMSimulator();
    initDecisionMap2D();
});