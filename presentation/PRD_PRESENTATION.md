# PRD - Presentation LDA sur MNIST

## 1. Objectif du document

Ce document decrit la presentation interactive sur la methode LDA appliquee au jeu de donnees MNIST. Il explique le role de chaque diapositive, le contenu attendu et l'intention pedagogique de l'ensemble du deck.

## 2. Objectif de la presentation

La presentation doit permettre de presenter simplement et visuellement :

- le probleme de classification sur MNIST,
- le principe de LDA,
- le pipeline de traitement utilise,
- les fondements mathematiques,
- les resultats obtenus,
- les limites et les points cles a retenir.

## 3. Public cible

- Enseignants / jury de soutenance
- Etudiants ou personnes decouvrant LDA
- Public technique souhaitant comprendre un exemple concret d'application de LDA

## 4. Format attendu

- Presentation  interactive en 17 diapositives
- Navigation au clavier et via les controles de page
- Style visuel moderne, clair et pedagogique
- Forte composante visuelle pour accompagner l'explication orale

## 5. Structure diapositive par diapositive

### Diapositive 1 - Couverture

Contient le titre principal de la presentation, le sous-titre,  et les credits de l'auteur / encadrant. Elle sert d'introduction visuelle et donne l'identite du projet.

### Diapositive 2 - Problematique

Presente le contexte du projet et le probleme a resoudre. Cette diapo explique pourquoi la classification sur MNIST est un bon cas d'etude et pourquoi une methode comme LDA est pertinente.

### Diapositive 3 - Code source / elements cles

Montre les principaux elements techniques du projet. Cette slide met en avant la base de code, les blocs importants et la logique generale de l'implementation.

### Diapositive 4 - Pipeline LDA - 4 etapes

Resume tout le flux de traitement sous forme de quatre etapes principales. Cette diapo donne une vue d'ensemble simple du pipeline avant d'entrer dans le detail.

### Diapositive 5 - Pipeline etapes 1-2

Detaille les deux premieres etapes du pipeline. Elle explique le passage des donnees MNIST vers un format exploitable et la normalisation / preparation des entrees.

### Diapositive 6 - Pipeline etapes 3-4

Detaille les deux dernieres etapes du pipeline. Elle explique la transformation LDA, puis la classification ou l'exploitation du resultat de projection.

### Diapositive 7 - Fondements mathematiques

Introduit les bases theoriques de LDA. Cette diapo sert a relier le pipeline pratique aux notions mathematiques qui justifient la methode.

### Diapositive 8 - Resultats obtenus

Montre les performances globales et les sorties principales du projet. Cette slide doit permettre de comprendre rapidement si la methode fonctionne bien sur MNIST.

### Diapositive 9 - Variance expliquee par classe

Presente la repartition de la variance ou de l'information conservée par classe. L'objectif est d'illustrer ce que la projection LDA garde ou reduit.

### Diapositive 10 - Matrice de confusion

Affiche les erreurs les plus importantes de classification. Cette slide sert a identifier les classes qui se confondent le plus et a discuter les cas difficiles.

### Diapositive 11 - Comparaison direct vs LDA

Compare une approche directe avec l'approche utilisant LDA. Elle sert a justifier l'interet de la methode et a montrer le gain ou le comportement observe.

### Diapositive 12 - Avantages distinctifs de LDA

Resume les points forts de la methode. Cette slide met en avant les benefices pratiques, theoriques et visuels de LDA.

### Diapositive 13 - LDA vs autres methodes

Situe LDA par rapport a d'autres approches de reduction de dimension ou de classification. Elle aide a comprendre quand LDA est un bon choix.

### Diapositive 14 - Limitations de LDA

Explique les limites de la methode. Cette slide doit montrer les hypotheses de LDA, ses contraintes et les situations ou elle devient moins adaptee.

### Diapositive 15 - 8 points critiques a retenir

Synthese des messages essentiels a retenir. Cette diapo sert de recapitulatif rapide avant la conclusion.

### Diapositive 16 - Resume executif

Propose une synthese globale du projet en quelques points cles. Elle doit permettre de retenir l'essentiel sans relire toute la presentation.

### Diapositive 17 - Merci / fin

Diapositive de cloture avec un message de remerciement et une conclusion visuelle. Elle termine la presentation de facon propre et simple.

## 6. Intentions de design

- Garder une lecture simple et rapide
- Mettre en avant la progression logique du projet
- Utiliser des elements visuels pour reduire la charge de lecture
- Donner un rendu propre pour une soutenance ou une demo orale

## 7. Definition of done

La presentation est consideree comme terminee lorsque :

- chaque diapositive a un role clair,
- le pipeline est comprehensible sans explication longue,
- les resultats et limites sont visibles,
- la navigation fonctionne correctement,
- le design reste coherent sur l'ensemble du deck.