# 📋 PRD - Présentation Pédagogique sur la Linear Discriminant Analysis (LDA)

**Auteur**: Zemzam Soukaina  
**Superviseur**: Tali Abdelhak  
**Programme**: Master IAENG  
**Date**: Mai 2026  
**Format**: Présentation Animée (Figma/Canva/PowerPoint)  

---

## 🎯 OBJECTIF GLOBAL

Créer une présentation pédagogique sur la **Linear Discriminant Analysis (LDA)** pour:
- **Partie 1**: Fondements théoriques simples et attrayants
- **Partie 2**: Application pratique sur dataset MNIST avec code

**Contraintes clés**:
- ✅ Design moderne avec animations
- ✅ Lisibilité totale en salle (haut contraste, fond clair)
- ✅ Langage simple, direct (tirets, pas de phrases longues)
- ✅ Schémas explicatifs animés
- ✅ QR code page 1 pour accès aux collègues
- ✅ Code de qualité professionnelle avec explications simples

---

## 📐 STRUCTURE DE LA PRÉSENTATION

### **PAGE 1: COUVERTURE**
**Titre**: Linear Discriminant Analysis (LDA)  
**Sous-titre**: Réduction de dimensionalité pour la classification

**Éléments**:
- Titre principal en gros caractères (lisible de loin)
- Nom: Zemzam Soukaina
- Prof: Tali Abdelhak
- Master IAENG
- **QR Code** en bas à droite (lien vers repository GitHub/slides)
- Fond: Dégradé moderne (bleu clair → violet pastel)
- Animation: Apparition progressive du titre

---

### **PARTIE 1: THÉORIE (5-6 pages)**

#### **PAGE 2: C'EST QUOI LA LDA?**
**Objectif**: Définition simple et intuitive

**Contenu**:
- 🎯 **Définition simple**:
  - Technique de réduction de dimensionalité SUPERVISÉE
  - Transforme données haute dimension → basse dimension
  - **Maximise séparation entre classes**

- 📊 **Analogie intuitive**:
  - Schéma: "Mélanger vs Trier"
  - Avant: Points confus en 64D
  - Après: Classes séparées en 9D
  - Animation: Points se déplacent vers groupes

- 🔑 **Mot-clé**: "Superviser = avoir des labels"

**Design**:
- Fond blanc avec accent dégradé
- Icons pour chaque concept
- Animation: Transition progressive des points

---

#### **PAGE 3: LES PRINCIPES FONDAMENTAUX**
**Objectif**: Comprendre les 3 piliers

**Contenu**:

- **Pilier 1: Signal vs Bruit**
  - Signal = différences entre classes (bon!)
  - Bruit = différences dans classe (mauvais!)
  - Animation: Cercles se séparent/rapprochent

- **Pilier 2: Les Deux Matrices**
  - 📊 Sw (Intra-classe): variance DANS la classe
  - 📈 Sb (Inter-classe): distance ENTRE classes
  - Formule simple (sans détails mathématiques complexes):
    ```
    Ratio = Signal / Bruit = Sb / Sw
    ```
  - Schéma: 2 histogrammes côte à côte

- **Pilier 3: Optimisation**
  - Trouver les axes qui **MAXIMISENT ce ratio**
  - Animation: Axes tournent pour trouver meilleure orientation

**Design**:
- 3 cases distinctes avec couleurs
- Schémas animés montrant rotation des axes
- Notation mathématique minimale

---

#### **PAGE 4: AVANTAGES & LIMITES**
**Objectif**: Pros/Cons comparatif

**Contenu**:

| AVANTAGE | ILLUSTRATION |
|----------|--------------|
| ⚡ **Ultra rapide** | Temps d'apprentissage < 1 sec |
| 📉 **Énorme réduction** | 64D → 9D (86% moins!) |
| 🎯 **Supervisée = plus intelligent** | Utilise labels pour séparation |
| 💡 **Interprétable** | Comprendre ce que LDA fait |
| 📊 **Math élégante** | Optimisation Fisher's ratio |

| LIMITE | SOLUTION |
|--------|----------|
| ❌ **Linéaire uniquement** | Pour données non-linéaires → Kernel LDA |
| ⚠️ **Suppose Gaussienne** | Généralement OK pour MNIST |
| 📚 **Besoin labels** | (C'est supervisé, c'est normal!) |
| 🔢 **Max C-1 composantes** | 10 classes = max 9 dimensions |

**Design**:
- 2 colonnes animées (vert pro, orange défi)
- Icons représentant chaque point
- Animation: Apparition progressive des items

---

#### **PAGE 5: LDA vs AUTRES MÉTHODES**
**Objectif**: Positionnement technologique

**Tableau Comparatif**:

```
                  LDA      PCA      SVM       Deep Learning
─────────────────────────────────────────────────────────────
Supervisé         ✅       ❌       ✅        ✅
Rapidité          ⚡⚡⚡     ⚡⚡      🐢       🐢🐢
Interprétable     ✅       ⚠️       ❌        ❌
Petites données   ✅       ✅       ⚠️        ❌
Linéaire          ✅       ✅       ❌        ❌
```

**Quand utiliser LDA?** (décision tree animée):
```
Données classifiées?
  OUI → Besoin réduction?
          OUI → LDA ✅
          NON → Classification directe
  NON → Exploration? → PCA
```

**Design**:
- Tableau avec couleurs code (✅ vert, ⚠️ orange, ❌ rouge)
- Flowchart animé avec décisions

---

#### **PAGE 6: CAS D'USAGE RÉELS**
**Objectif**: Montrer concrètement où on l'utilise

**Exemples**:
- 📧 **Classification spam/non-spam**: Emails → 2 classes
- 🏥 **Diagnostic médical**: Patients sains vs malades
- 🔐 **Authentification biométrique**: Reconnaissance faciale
- 📝 **OCR (reconnaissance caractères)**: Comme MNIST!
- 🎮 **Reconnaissance gestes**: Input contrôleurs

**Design**:
- Icons + images miniatures pour chaque cas
- Animation: Icone se met en évidence au survol

---

### **PARTIE 2: PRATIQUE - MNIST (4-5 pages)**

#### **PAGE 7: CONTEXTE MNIST**
**Objectif**: Présenter la problématique

**Contenu**:

- 📊 **Le Dataset**:
  - 1797 images de chiffres (0-9)
  - Chaque image: 28×28 pixels = 64 features
  - 10 classes (chiffres)

- 🎯 **Le Défi**:
  - Comment classer avec 64 dimensions?
  - C'est du bruit et complexe!
  - Solution: LDA → 9 dimensions

- 📈 **Résultat Attendu**:
  - Réduction: 64D → 9D (-86%)
  - Accuracy: ~95% (bon trade-off)

**Design**:
- Grille 10×10 montrant exemples (0-9)
- Animation: Zoom sur une image
- Graphique avant/après avec dimension

---

#### **PAGE 8: ÉTAPE 1 - PRÉPARATION DES DONNÉES**
**Objectif**: Comprendre la normalisation

**Code Important** (simplifié, 15 lignes):
```python
# 1️⃣ CHARGER LES DONNÉES
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

digits = load_digits()  # 1797 images, 64 features
X, y = digits.data, digits.target

# 2️⃣ SPLIT 80/20
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# 3️⃣ NORMALISER (CRUCIAL!)
scaler = StandardScaler()
X_train_norm = scaler.fit_transform(X_train)
X_test_norm = scaler.transform(X_test)
```

**Explications simples**:
- ✅ Load dataset: Récupérer les images
- ✅ Split: 80% apprentissage, 20% test
- ⚠️ **NORMALISER EST CAPITAL**: Ramène moyenne=0, variance=1
  - Pourquoi? LDA calcule des inverses matriciels (numériquement sensible)
  - Fit sur TRAIN, applique sur TEST (pas de data leakage!)

**Visualisation**:
- Avant/Après normalisation (histogrammes)
- Animation: Distribution change

---

#### **PAGE 9: ÉTAPE 2 - APPLIQUER LA LDA**
**Objectif**: La magie de LDA

**Code Important** (simplifié):
```python
# 4️⃣ APPLIQUER LDA
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis

# Créer LDA avec 9 composantes (max = C-1 = 10-1)
lda = LinearDiscriminantAnalysis(n_components=9)

# ENTRAÎNER (fit + transform)
X_train_lda = lda.fit_transform(X_train_norm, y_train)
X_test_lda = lda.transform(X_test_norm)

# Résultat
print(f"Avant: {X_train_norm.shape}")  # (1437, 64)
print(f"Après: {X_train_lda.shape}")   # (1437, 9)
```

**Ce qui se passe**:
- `fit_transform`: Apprendre les 9 axes à partir du train
- `transform`: Projeter le test sur ces axes
- Résultat: 64 features → 9 features!

**Visualisation**:
- Schéma: Données avant/après projection
- Animation: Points projetés sur plan 2D (les 2 premiers axes)
- Chart: Réduction de dimensions (64 → 9)

---

#### **PAGE 10: ÉTAPE 3 - VARIANCE EXPLIQUÉE**
**Objectif**: Comprendre l'importance de chaque axe

**Chart Barre Animée** (variance par axe):
```
Axe 1: ████████████████ 28.96%
Axe 2: ███████████ 18.61%
Axe 3: ██████████ 16.87%
Axe 4: ██████ 11.27%
...
Cumul: 100% avec 9 axes
```

**Interprétation Simple**:
- Premier axe capture 29% de l'information discriminante
- 3 premiers axes suffisent pour 64%
- Mais on garde 9 pour 100% (on a la place)

**Code** (extraction expliquée):
```python
# Quelle variance pour chaque composante?
var_ratio = lda.explained_variance_ratio_
cumsum = np.cumsum(var_ratio)

# Afficher
for i, v in enumerate(var_ratio):
    print(f"Axe {i+1}: {v*100:.1f}%")
```

**Visualisation**:
- Graphique barres animation progressive
- Courbe cumulative (montrant 90% atteint à axe 6)

---

#### **PAGE 11: ÉTAPE 4 - CLASSIFICATION & RÉSULTATS**
**Objectif**: Performance finale

**Code Classification**:
```python
# 5️⃣ CLASSIFIER SUR FEATURES LDA
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix

# Entraîner classifier
clf = LogisticRegression(max_iter=1000)
clf.fit(X_train_lda, y_train)

# Prédire
y_pred = clf.predict(X_test_lda)

# Accuracy
acc = accuracy_score(y_test, y_pred)
print(f"Accuracy: {acc*100:.1f}%")  # ≈95.2%
```

**Résultats Comparatifs**:

| Approche | Dimensions | Accuracy | Temps |
|----------|-----------|----------|-------|
| Direct (sans LDA) | 64 | 96.5% | 1.0s |
| **LDA (notre approche)** | **9** | **95.2%** | **0.18s** |
| **Trade-off** | **-86%** | **-1.3%** | **5.5x plus rapide** |

**Conclusion Visual**:
- ✅ LDA obtient 95.2% avec 9D au lieu de 64D
- ✅ Perte de seulement 1.3% pour 86% de réduction!
- ✅ 5.5x plus rapide en inférence

**Visualisation**:
- 3 colonnes animées montrant résultats
- Gauge circulaire pour accuracy (95.2%)
- Speedometer pour vitesse (5.5x)

---

#### **PAGE 12: CONFUSION MATRIX & VISUALISATION**
**Objectif**: Voir où LDA se trompe

**Heatmap Confusion Matrix** (8×8 ou 10×10):
- Diagonale verte (prédictions correctes)
- Hors-diagonale rouge (erreurs)
- Annotation des chiffres
- Animation: Heatmap se remplit progressivement

**Points Clés**:
- La plupart des cellules sont vertes (bon!)
- Quelques confusions: 6↔9, 3↔5, 4↔9 (logique!)
- Peu de faux positifs catastrophiques

**2D LDA Visualization**:
- Scatter plot: points colorés par classe
- Points verts = bien classés
- Points rouges = erreurs
- Animation: Points apparaissent progressivement

---

#### **PAGE 13: RÉSUMÉ & CONCLUSIONS**
**Objectif**: Recap et apprentissages clés

**Les 5 Takeaways**:
1. 🎯 **LDA = Réduction supervisée** (utilise labels)
2. 📉 **Énorme réduction** (64 → 9) avec peu de perte (1.3%)
3. ⚡ **Très rapide** (5.5x plus rapide que direct)
4. 💡 **Mathématiquement élégante** (Fisher's ratio optimization)
5. 🛠️ **Pratique** (2 lignes de code sklearn!)

**Quand l'utiliser?**
- ✅ Classification avec données haute dimension
- ✅ Ressources limitées (CPU/RAM)
- ✅ Besoin d'interprétabilité
- ✅ Données labelisées

**Limitations**:
- ❌ Linéaire uniquement
- ⚠️ Suppose distribution Gaussienne
- ⚠️ Max C-1 composantes

**Prochaines étapes**:
- 🔄 Essayer Kernel LDA (non-linéaire)
- 🔀 Comparer avec PCA
- 🤖 Utiliser en pipeline avec SVM/Neural Net

**Design**:
- 5 cards animés (une par takeaway)
- Animation: Chaque card slide en depuis côté
- Symboles/icons pour chaque point

---

### **PAGE 14: MERCI & RESSOURCES**
**Objectif**: Fermeture professionnelle

**Contenu**:
- Merci pour votre attention
- Zemzam Soukaina | Master IAENG
- Prof: Tali Abdelhak
- 📎 GitHub: `Soukaina009/ML_Methods_Hub`
- 📧 Contact & Questions

**Ressources**:
- 📚 Notebook Jupyter: `LDA_MNIST_Analysis.ipynb`
- 📖 Scikit-learn docs: [link]
- 🎥 YouTube: Linear Discriminant Analysis explained

**Design**:
- Fond dégradé (inverse couverture)
- Animation: Elements apparaissent puis disparaissent
- QR code optionnel vers slides PDF

---

## 🎨 SPÉCIFICATIONS DE DESIGN

### **Palette Couleurs** (moderne, haute lisibilité):
- **Fond principal**: Blanc cassé (#F8F9FA) ou très light gradient
- **Accent primaire**: Bleu vif (#0066FF ou #1E90FF)
- **Accent secondaire**: Violet (#9333EA ou #A855F7)
- **Accent tertaire**: Cyan (#06B6D4)
- **Texte**: Gris foncé (#1F2937) ou noir (#000)
- **Éléments positifs**: Vert (#10B981)
- **Éléments négatifs**: Rouge (#EF4444)

### **Typographie**:
- **Titre**: Montserrat Bold, 48-60px
- **Sous-titre**: Montserrat SemiBold, 28-36px
- **Corps**: Inter Regular, 16-18px
- **Code**: IBM Plex Mono, 12-14px

### **Animations**:
- ✨ Fade-in progressive (0.5-1s)
- 🔄 Slide transitions (0.3-0.5s)
- 📊 Chart animations (1-2s)
- 🎯 Highlight on click (0.2s)
- ➡️ Point movements (1-2s)

### **Layout**:
- Marges: 40px (40px sides, 50px top/bottom)
- Grille: 12 colonnes
- Ratio: 16:9 (1920×1080)
- Lisibilité: Min 18px body text (visible 5m+)

---

## 📋 ASSETS À INCLURE

### **Visuels Génératifs Requis**:
1. ✅ Grille 10×10 d'exemples MNIST (0-9)
2. ✅ Schéma "Mélanger vs Trier" animé
3. ✅ Deux histogrammes (Sw vs Sb) side-by-side
4. ✅ Rotation d'axes (Signal vs Bruit)
5. ✅ Tableau comparatif (LDA vs PCA vs SVM)
6. ✅ Décision tree (quand utiliser LDA)
7. ✅ Scatter plot avant/après LDA
8. ✅ Graphique variance expliquée (barres)
9. ✅ Courbe variance cumulée
10. ✅ Heatmap confusion matrix 10×10
11. ✅ Scatter plot 2D avec erreurs (vert/rouge)
12. ✅ QR code (GitHub repo ou slides)

### **Code à Inclure**:
- Commenté en FRANÇAIS
- Annotations `# 1️⃣` à `# 5️⃣` pour steps
- Lignes clés uniquement (pas 50 lignes!)
- Sans imports complexes
- Assertions pour vérifier shapes

---

## 🎯 CRITÈRES DE SUCCÈS

✅ **Complété si**:
- [ ] 14 slides professionnels
- [ ] Animations fluides (no lag)
- [ ] Lisibilité en salle (testée à 5m)
- [ ] Fond clair avec contraste haut
- [ ] Langage simple (tirets, pas paragraphes)
- [ ] Schémas expliquent mieux que texte
- [ ] QR code fonctionnel
- [ ] Code simple et commenté (FR)
- [ ] 0 erreurs mathématiques
- [ ] Design cohérent (même style partout)
- [ ] Inspiré templates fournis (Canva/Figma style)

---

## 📞 NOTES ADDITIONNELLES

- **Format fichier**: Figma/Canva (collaborative) ou PowerPoint (.pptx)
- **Export**: PDF haute résolution (300 DPI minimum)
- **Présentation**: 10-15 minutes (speaker notes inclus)
- **Audience**: Professeurs + étudiants Master IAENG
- **Public**: Salle de classe (datashow 1920×1080+)

---

**✨ OBJECTIF FINAL**: Une présentation qui soit à la fois BELLE, PÉDAGOGIQUE et RIGOUREUSE mathematiquement, sans surcharger le cerveau de l'auditoire! 🚀
