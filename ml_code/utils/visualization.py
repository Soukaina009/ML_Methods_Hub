"""
Visualization utilities for ML projects
========================================
Reusable plotting functions
"""

import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np


def plot_variance_explained(variance_ratio, cumsum_variance, title="Variance Explained"):
    """Plot individual and cumulative variance explained."""
    fig, axes = plt.subplots(1, 2, figsize=(12, 4))
    
    # Individual
    axes[0].bar(range(len(variance_ratio)), variance_ratio * 100)
    axes[0].set_xlabel('Component')
    axes[0].set_ylabel('Variance (%)')
    axes[0].set_title(f'{title} - Individual')
    
    # Cumulative
    axes[1].plot(range(len(cumsum_variance)), cumsum_variance * 100, 'o-')
    axes[1].axhline(y=90, color='r', linestyle='--', label='90%')
    axes[1].set_xlabel('Number of Components')
    axes[1].set_ylabel('Cumulative Variance (%)')
    axes[1].set_title(f'{title} - Cumulative')
    axes[1].legend()
    axes[1].grid(True, alpha=0.3)
    
    plt.tight_layout()
    return fig


def plot_confusion_matrix(cm, class_names=None):
    """Plot confusion matrix heatmap."""
    fig, ax = plt.subplots(figsize=(8, 6))
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', ax=ax)
    ax.set_xlabel('Predicted')
    ax.set_ylabel('True')
    if class_names:
        ax.set_xticklabels(class_names)
        ax.set_yticklabels(class_names)
    return fig
