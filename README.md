# 📊 Statistical Learning & Machine Learning Benchmarks

This repository contains a comprehensive collection of Jupyter Notebooks focusing on core **Statistical Learning** and **Machine Learning** algorithms. Most implementations are benchmarked and analyzed using the classic **MNIST handwritten digits dataset** to compare how different mathematical approaches handle high-dimensional data.

---

## 📂 Repository Structure & Notebooks

The repository is organized into the following analysis modules:

### 🧠 Dimensionality Reduction
*   **`PCA_MNIST_Analysis.ipynb`**: Implementation of Principal Component Analysis (PCA) to reduce dimensionality, visualize variance, and optimize feature space before classification.
*   **`PCA_MNIST_NOISING.ipynb`**: Advanced application of PCA dealing with noise injection, reconstruction, and data denoising techniques.

### 📐 Discriminant Analysis
*   **`LDA_MNIST_Analysis.ipynb`**: Linear Discriminant Analysis (LDA) used as both a classifier and a supervised dimensionality reduction method.
*   **`QDA_MNIST_Analysis.ipynb`**: Quadratic Discriminant Analysis (QDA) exploring non-linear quadratic decision boundaries.

### 📈 Neighborhood & Tree-Based Methods
*   **`KNN_Analysis.ipynb`**: K-Nearest Neighbors (KNN) algorithm focusing on distance metrics, local voting mechanisms, and finding the optimal K value.
*   **`Decision_Tree_MNIST_Analysis.ipynb`**: Decision Tree Classifier exploring recursive splitting (Gini/Entropy), pruning techniques, and visualizing the resulting tree structure to control overfitting.

### ⚡ Support Vector Machines (SVM)
*   **`SVM_MNIST_Analysis.ipynb`**: Support Vector Machines optimization, examining the impact of different kernels (Linear, RBF) on classification margins.
*   **`SVM_MNIST_OVSR.ipynb`**: Multi-class classification strategy using SVM with **One-vs-Rest (OvR)** configurations to handle the 10-digit MNIST classes.

---

## 🛠️ Key Topics Covered

*   **Bias-Variance Dilemma**: Practical tracking of Overfitting vs. Underfitting across multiple models using Train/Test accuracy curves.
*   **Model Evaluation**: Advanced diagnostic metrics utilizing detailed classification reports and Heatmap Confusion Matrices.
*   **Feature Scaling**: Demonstrating when data normalization (`StandardScaler`) is mathematically required (e.g., KNN, SVM) versus when it can be skipped (e.g., Decision Trees).

---

## 🚀 Setup & Requirements

These notebooks are designed to run in a Python 3 environment using the standard data science stack:

```bash
pip install numpy pandas matplotlib seaborn scikit-learn
