# ML Methods Hub

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![Jupyter](https://img.shields.io/badge/Jupyter-Notebooks-orange.svg)
![Dataset](https://img.shields.io/badge/Dataset-MNIST-green.svg)

A collection of Jupyter notebooks that implement and compare core statistical learning and machine learning algorithms. Most notebooks use the MNIST handwritten digit dataset as a common test case, so you can see how each method handles the same high-dimensional data.

## Why This Project

Many tutorials explain one algorithm at a time and stop there. This repository does something different: it puts several algorithms side by side on the same dataset. This makes it easy to compare accuracy, training time, and behavior across methods, and to build intuition for when to use each one.

## What's Inside

### Dimensionality Reduction
- `PCA_MNIST_Analysis.ipynb` – Principal Component Analysis to reduce the number of features, visualize variance, and prepare data for classification.
- `PCA_MNIST_NOISING.ipynb` – PCA applied to noisy data, covering reconstruction and denoising.

### Discriminant Analysis
- `LDA_MNIST_Analysis.ipynb` – Linear Discriminant Analysis, used both as a classifier and as a supervised dimensionality reduction method.
- `QDA_MNIST_Analysis.ipynb` – Quadratic Discriminant Analysis, which allows curved (non-linear) decision boundaries.

### Neighborhood and Tree-Based Methods
- `KNN_Analysis.ipynb` – K-Nearest Neighbors, with a focus on distance metrics and finding the best value of K.
- `Decision_Tree_MNIST_Analysis.ipynb` – Decision Trees, covering splitting criteria (Gini, Entropy), pruning, and how to read the tree structure.

### Support Vector Machines
- `SVM_MNIST_Analysis.ipynb` – SVM classification, comparing linear and RBF kernels.
- `SVM_MNIST_OVSR.ipynb` – Multi-class SVM using the One-vs-Rest strategy for the 10 MNIST digit classes.

## Results

Each notebook trains on MNIST and reports its own test accuracy. Here is how the methods compare:

| Notebook | Method | Input Dimensions | Test Accuracy |
|---|---|---|---|
| `QDA_MNIST_Analysis.ipynb` | Quadratic Discriminant Analysis | 784 | 55.09% |
| `LDA_MNIST_Analysis.ipynb` | LDA (supervised reduction) + Logistic Regression | 784 → 9 | 84.40% |
| `Decision_Tree_MNIST_Analysis.ipynb` | Decision Tree (max_depth=12) | 784 | 87.60% |
| `PCA_MNIST_Analysis.ipynb` | PCA + Logistic Regression | 784 → 154 | 92.08% |
| `KNN_Analysis.ipynb` | K-Nearest Neighbors (K=5) | 784 | 93.33% |
| `SVM_MNIST_Analysis.ipynb` | PCA + SVM | 784 → reduced | **96.36%** (best overall) |
| `SVM_MNIST_OVSR.ipynb` | SVM, One-vs-Rest (binary: digit 0 vs. rest) | 784 | ~100%* |

*The One-vs-Rest notebook solves an easier binary task (is this digit a 0, or not), so its accuracy is not directly comparable to the other rows, which classify all 10 digits.

**Key finding**: LDA reduces the data from 784 to only 9 dimensions (since it can use at most one dimension per class minus one) and still reaches 84.4% accuracy. This shows how much of the classification signal sits in a small number of well-chosen directions. Adding more dimensions through PCA (154) or skipping reduction entirely and using SVM with a non-linear kernel pushes accuracy above 92%, with SVM giving the best result on the full 10-class problem.

## Key Topics Covered

- **Bias-variance tradeoff**: train and test accuracy curves show overfitting and underfitting for each model.
- **Model evaluation**: classification reports and confusion matrix heatmaps for every method.
- **Feature scaling**: notebooks show when scaling matters (KNN, SVM) and when it does not (Decision Trees).

## Tech Stack

- **Python 3.8+**
- **scikit-learn** – model implementations
- **NumPy / Pandas** – data handling
- **Matplotlib / Seaborn** – plots and confusion matrices
- **Jupyter Notebook** – interactive analysis

## Project Structure

```
ML_Methods_Hub/
├── notebooks/              # one notebook per algorithm
├── requirements.txt        # Python dependencies
└── README.md
```

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/Soukaina009/ML_Methods_Hub.git
cd ML_Methods_Hub

# 2. Install dependencies
pip install -r requirements.txt
```

## Usage

```bash
# Launch Jupyter and open any notebook
jupyter notebook notebooks/
```

Each notebook loads the MNIST dataset, trains the model, and prints:
- accuracy on the train and test sets
- a classification report (precision, recall, F1-score per digit)
- a confusion matrix heatmap

Run the notebooks in any order. Each one is self-contained and does not depend on the others.

## Author

Built by **Zemzam Soukaina**, Master's student in AI for the Digital Economy and Management.
[GitHub](https://github.com/Soukaina009) · [LinkedIn](https://www.linkedin.com/in/soukaina-zemzam-585b8a3aa/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BEMOBq%2F32RqGeLJ3s2tgDYQ%3D%3D) · [Email](zemzamsoukaina@gmail.com)
