#!/usr/bin/env python3
"""
Serveur Web Simple pour la Présentation LDA MNIST
Démarre un serveur localhost sur le port 8000
"""

import http.server
import socketserver
import os
import webbrowser
import sys
from pathlib import Path

# Configuration
HOST = '0.0.0.0'  # Écoute sur toutes les interfaces pour une meilleure compatibilité
START_PORT = 8000

# Obtenir le répertoire courant
SCRIPT_DIR = Path(__file__).parent.absolute()

# Correction des types MIME pour éviter les erreurs "nosniff" sur Windows
if not http.server.SimpleHTTPRequestHandler.extensions_map.get('.js'):
    http.server.SimpleHTTPRequestHandler.extensions_map.update({
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.svg': 'image/svg+xml',
        '.png': 'image/png'
    })

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Handler personnalisé pour servir les fichiers"""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(SCRIPT_DIR), **kwargs)
    
    def end_headers(self):
        """Ajouter les headers CORS et cache"""
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('X-Content-Type-Options', 'nosniff')
        return super().end_headers()
    
    def log_message(self, format, *args):
        """Log personnalisé"""
        if '200' in str(args):
            print(f"✅ {args}")
        elif '404' in str(args):
            print(f"❌ {args}")
        else:
            print(f"📡 {args}")

def main():
    """Démarrer le serveur"""
    os.chdir(SCRIPT_DIR)

    port = START_PORT
    while True:
        try:
            httpd = socketserver.TCPServer((HOST, port), MyHTTPRequestHandler)
            break
        except OSError:
            port += 1
    
    with httpd:
        url = f'http://localhost:{port}'

        print("\n" + "="*70)
        print("🎓 SERVEUR DE PRÉSENTATION LDA MNIST")
        print("="*70)
        if port != START_PORT:
            print(f"⚠️  Port {START_PORT} déjà utilisé, bascule sur {port}")
        print(f"✨ Serveur lancé sur: {url}")
        print(f"📂 Répertoire: {SCRIPT_DIR}")
        print("\n🎮 CONTRÔLES:")
        print("   → Flèche droite / ESPACE: Slide suivante")
        print("   ← Flèche gauche: Slide précédente")
        print("   F: Mode plein écran")
        print("\n💡 Ouvrir dans le navigateur:")
        print(f"   {url}\n")
        print("⌨️  Appuyer sur Ctrl+C pour arrêter le serveur")
        print("="*70 + "\n")

        try:
            webbrowser.open(url)
            print("🌐 Ouverture du navigateur...")
        except Exception as e:
            print(f"⚠️  Impossible d'ouvrir le navigateur: {e}")

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n🛑 Serveur arrêté.")
            sys.exit(0)

if __name__ == '__main__':
    main()
