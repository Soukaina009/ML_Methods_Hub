# LDA MNIST Analysis

A comprehensive implementation of **Linear Discriminant Analysis (LDA)** for digit classification on the MNIST dataset.

## 🎯 Quick Summary

This project demonstrates dimensionality reduction using LDA to compress MNIST data while maintaining high accuracy.

**Key Results:**
- 📉 **Reduce**: 64 dimensions → 9 dimensions (86% reduction)
- ✅ **Accuracy**: 95.2%
- ⚡ **Speed**: 5.5x faster than direct approach
- 💾 **Size**: Only 2KB model

## 📊 What You'll Find

The Jupyter notebook includes:

1. **Data Loading** - MNIST dataset preparation
2. **Normalization** - Feature scaling with StandardScaler
3. **LDA Application** - Dimensionality reduction algorithm
4. **Visualization** - Plots showing class separation
5. **Classification** - Logistic Regression on reduced features
6. **Evaluation** - Accuracy, confusion matrix, detailed metrics

## 🚀 How to Use

### Run Locally
```bash
pip install scikit-learn pandas numpy matplotlib seaborn jupyter
jupyter notebook notebooks/LDA_MNIST_Analysis.ipynb
```

### Run Online (No Installation)
[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Soukaina009/ML_Methods_Hub)

## 💡 Why LDA?

| Comparison | LDA | PCA | SVM |
|-----------|-----|-----|-----|
| **Supervised** | ✅ Yes | ❌ No | ✅ Yes |
| **Speed** | ⚡ Fast | ⚡ Fast | 🐢 Slow |
| **Interpretable** | ✅ Yes | ⚠️ Partial | ❌ No |
| **Works with small data** | ✅ Yes | ✅ Yes | ⚠️ Limited |

## 📈 Results Summary

```
Original: 64 dimensions  →  Accuracy: 96.5%
LDA:      9 dimensions   →  Accuracy: 95.2%

Loss: only 1.3% for 86% dimension reduction ✨
```

## 🔧 Requirements

- Python 3.9+
- scikit-learn, pandas, numpy, matplotlib, seaborn

## 📚 Learn More

- [LDA Explanation](https://www.youtube.com/watch?v=azXCzI57Yuc)
- [Scikit-learn Docs](https://scikit-learn.org/stable/modules/lda_qda.html)

## 📝 Next Steps

- [ ] Add PCA comparison
- [ ] SVM implementation  
- [ ] Interactive visualizations

---

**Status**: ✅ Ready to use | **Updated**: May 2026