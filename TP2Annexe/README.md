# TP 2 : Orchestration de Microservices avec Docker Compose

## Description du projet
Ce projet consiste à déployer une application web simple composée d'un **Frontend** et d'un **Backend**. L'objectif est de maîtriser la conteneurisation de chaque service et leur orchestration via un seul fichier de configuration.

## Architecture
* [cite_start]**Frontend** : Serveur Nginx (image `nginx:alpine`) servant une page HTML/JS statique. [cite: 8]
* [cite_start]**Backend** : API Node.js (image `node:alpine`) renvoyant un message JSON. [cite: 8]
* **Réseau** : Les services communiquent via un réseau Docker interne.

## Lancement
Pour démarrer l'infrastructure complète, utilisez la commande suivante à la racine du projet :
```bash
docker compose up --build