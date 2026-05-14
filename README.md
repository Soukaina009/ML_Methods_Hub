# 🚀 LDA for Efficient Image Classification (MNIST)

This project explores Linear Discriminant Analysis (LDA) as a powerful tool for dimensionality reduction and classification. By using the MNIST dataset, we demonstrate how to compress high-dimensional data into a small, highly representative "latent space" without losing significant accuracy.

## 📌 Project Overview

The goal is to move from a complex input space (784 pixels) to a simplified space where classes are linearly separable. Unlike unsupervised methods like PCA, LDA uses class labels to find the best possible projection.

**Key Features:**
* **Dimensionality Reduction:** Compressing data from 784D down to just 9D.
* **Fisher Ratio Optimization:** Maximizing the distance between classes while keeping individual groups compact.
* **Supervised Learning:** Leveraging labels to improve classification performance.

## 🔬 The Science: The Fisher Ratio

The "heart" of this project lies in maximizing the Fisher Ratio $J(w)$:

$$J(w) = \frac{w^T S_b w}{w^T S_w w}$$

* **$S_b$ (Between-class):** Pushes the centers of different classes as far apart as possible.
* **$S_w$ (Within-class):** Keeps the data points within the same class tightly grouped.
* **$w$ (The Projector):** The vector that finds the perfect angle to view and separate the data.

## 📊 Results & Performance

By applying LDA, we achieved a massive boost in efficiency compared to a "Direct Approach" (using raw pixels).

| Metric | Direct Approach | LDA Approach |
| :--- | :--- | :--- |
| **Dimensions** | 64D/784D | **9D** |
| **Accuracy** | 96.5% | **95.2%** |
| **Speedup** | 1x | **5.5x Faster** |
| **Data Reduction** | 0% | **-99% Reduction** |

**Conclusion:** We sacrificed only 2% of accuracy to gain 99% data compression and 5.5x faster processing times.

## 🛠️ Tech Stack

* **Language:** Python
* **Libraries:** Scikit-Learn (for LDA and scaling), Matplotlib/Seaborn (for visualization), NumPy.
* **Dataset:** MNIST (Handwritten digits).

## 📂 How to Run

1. Navigate to the Github Folder.
2. Open the Jupyter Notebook.
3. Follow the steps: Data Scaling $\rightarrow$ LDA Projection $\rightarrow$ Final Classification.

## 🧠 Future Work: Beyond LDA

While LDA is a great linear model, we are also exploring:
* **Non-linear visualization:** Using T-SNE or UMAP for complex data structures.
* **Predictive Coding:** Moving toward bio-inspired learning models that update weights locally rather than using standard Back-Propagation.
