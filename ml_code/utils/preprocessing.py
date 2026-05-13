"""
Preprocessing utilities for ML projects
=========================================
Reusable functions for data normalization, splitting, etc.
"""

from sklearn.preprocessing import StandardScaler, MinMaxScaler, RobustScaler
import numpy as np


def normalize_data(X_train, X_test, method='standard'):
    """
    Normalize dataset.
    
    Args:
        X_train: Training data
        X_test: Test data
        method: 'standard', 'minmax', or 'robust'
    
    Returns:
        X_train_norm, X_test_norm, scaler object
    """
    if method == 'standard':
        scaler = StandardScaler()
    elif method == 'minmax':
        scaler = MinMaxScaler()
    elif method == 'robust':
        scaler = RobustScaler()
    else:
        raise ValueError(f"Unknown method: {method}")
    
    X_train_norm = scaler.fit_transform(X_train)
    X_test_norm = scaler.transform(X_test)
    
    return X_train_norm, X_test_norm, scaler


def remove_outliers(X, y, method='iqr', threshold=1.5):
    """Remove outliers from dataset."""
    if method == 'iqr':
        Q1 = np.percentile(X, 25, axis=0)
        Q3 = np.percentile(X, 75, axis=0)
        IQR = Q3 - Q1
        
        mask = ~np.any((X < Q1 - threshold*IQR) | (X > Q3 + threshold*IQR), axis=1)
        return X[mask], y[mask]
    else:
        raise ValueError(f"Unknown method: {method}")
