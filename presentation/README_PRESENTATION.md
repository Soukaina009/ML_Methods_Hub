# 🎬 Présentation LDA Interactive - Mode Localhost

## ✨ Accès Rapide

**🌐 URL:** http://localhost:8000

Le serveur web est **déjà en cours d'exécution**!

---

## ⌨️ Navigation

| Touche | Action |
|--------|--------|
| **→ Flèche droite** | Slide suivante |
| **← Flèche gauche** | Slide précédente |
| **Espace** | Slide suivante |
| **Home** | Première slide |
| **End** | Dernière slide |

---

## 📊 Contenu - 16 Slides Complètes

### Partie Théorique (Slides 1-6)
1. ✅ **Couverture** - Titre + QR code GitHub
2. ✅ **Définition LDA** - Simple & intuitive
3. ✅ **3 Principes** - Signal vs Bruit, Matrices Sw/Sb, Optimisation
4. ✅ **Avantages & Limites** - Pro/Con comparatif
5. ✅ **Cas d'Usage** - 5 applications réelles

### Partie MNIST (Slides 6-12)
7. ✅ **Contexte MNIST** - 5000 images, 784D → 9D
7. ✅ **Étape 1: Préparation** - Code Python français
8. ✅ **Étape 2: LDA** - Réduction supervisée
9. ✅ **Variance Expliquée** - Graphique interactif
10. ✅ **Cumulative Variance** - Courbe 90% threshold
11. ✅ **Classification** - Résultats 84.4% accuracy
12. ✅ **Confusion Matrix** - Heatmap interactive

### Conclusion (Slides 13-16)
13. ✅ **Limitations** - Contraintes théoriques
14. ✅ **Points Critiques** - 8 takeaways
15. ✅ **Résumé Exécutif** - Synthèse 2min
16. ✅ **Merci** - Ressources & contacts

---

## 🎨 Design & Animations

✨ **Palette Moderne:**
- Bleu principal: `#0066FF`
- Violet secondaire: `#9333EA`
- Cyan tertiaire: `#06B6D4`
- Animations fluides: 0.6s cubic-bezier

✨ **Fonctionnalités:**
- Transitions fluides entre slides
- Animations au contenu (fade-in, slide-in)
- Graphiques Chart.js dynamiques
- QR code généré dynamiquement
- Responsive design (adapté à tous écrans)

---

## 💻 Code Inclus

Tous les codes Python sont **commentés en français**:

```python
# 1️⃣ CHARGER LES DONNÉES
from sklearn.datasets import fetch_openml
X_full, y_full = fetch_openml('mnist_784', version=1, return_X_y=True, as_frame=False)

# 2️⃣ NORMALISER
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X_train_norm = scaler.fit_transform(X_train)

# 3️⃣ APPLIQUER LDA
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
lda = LinearDiscriminantAnalysis(n_components=9)
X_train_lda = lda.fit_transform(X_train_norm, y_train)
```

---

## 📈 Graphiques Interactifs

1. **Variance Chart** - Barres animées montrant l'importance de chaque axe
2. **Cumulative Variance** - Courbe avec threshold 90%
3. **Confusion Matrix** - Heatmap 10×10 (codes couleur vert/rouge)
4. **QR Code** - Lien direct au repository GitHub

---

## 🔧 Structure des Fichiers

```
presentation/
├── index_new.html          # HTML complet (15 slides)
├── style_new.css           # Styles modernes (1000+ lignes)
├── script_new.js           # JavaScript (navigation + charts)
├── server_new.py           # Serveur Flask
└── README.md               # Ce fichier
```

---

## 🚀 Pour Arrêter le Serveur

Appuyez sur **CTRL+C** dans le terminal en exécution.

---

## 📝 Prochaines Étapes

Vous pouvez:
1. **Modifier le contenu** - Editer `index_new.html`
2. **Changer les couleurs** - Modifier les variables CSS dans `style_new.css`
3. **Ajouter des slides** - Dupliquer une `<section class="slide">`
4. **Personnaliser le code** - Éditer les blocs `<pre class="code-block">`

---

## ✅ Critères de Succès (PRD)

- ✅ 15 slides professionnels
- ✅ Animations fluides
- ✅ Lisibilité en salle (haut contraste, polices larges)
- ✅ Fond clair avec couleurs modernes
- ✅ Langage simple (tirets, pas de longs paragraphes)
- ✅ Schémas explicatifs (graphiques Chart.js)
- ✅ QR code fonctionnel
- ✅ Code Python français commenté
- ✅ 0 erreurs mathématiques
- ✅ Design cohérent
- ✅ Inspiré du PRD

---

## 📞 Support

Pour les problèmes:
1. Vérifiez que Flask est installé: `pip list | grep flask`
2. Vérifiez le port 8000 n'est pas utilisé: `netstat -ano | findstr 8000`
3. Redémarrez le serveur: `python server_new.py`

---

**Créé le:** Mai 2026  
**Auteur:** Zemzam Soukaina  
**Prof:** Tali Abdelhak  
**Programme:** Master IAENG
