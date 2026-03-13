## README pour le TP 3 (Kubernetes)
**À placer dans :** `/conteneurisation/TP3/README.md`

```markdown
# TP 3 : Orchestration avec Kubernetes

## Description du projet
Ce TP simule un environnement de production en déployant deux microservices métier (`service-user` et `service-order`) sur un cluster Kubernetes (Docker Desktop / Minikube). [cite: 1, 3, 8]

## Architecture
L'architecture repose sur des objets Kubernetes standards :
* **Deployments** : Gèrent le cycle de vie des Pods pour `service-user` (port 5001) et `service-order` (port 5002). [cite: 10, 11, 29, 31, 48]
* **Services** : Un service de type `LoadBalancer` expose le `service-order` sur le port 80 pour le monde extérieur. [cite: 49, 51, 53, 59, 61]
* **Pods** : Un seul réplica par service pour ce TP. [cite: 16, 35]

## Lancement
Appliquez les configurations au cluster Kubernetes dans l'ordre suivant : [cite: 7, 62]

```bash
# 1. Déploiement des microservices
kubectl apply -f Deployment.yaml

# 2. Exposition du service de commande
kubectl apply -f Service.yaml