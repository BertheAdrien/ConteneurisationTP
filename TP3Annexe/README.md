# TP3 - Orchestration avec Kubernetes (K8s)

Ce projet consiste en la mise en place d'une architecture multi-services conteneurisée (Frontend et Backend) orchestrée par Kubernetes.

## Architecture du Projet

Le projet est divisé en trois parties principales :

* **Backend** : Une API Node.js simple servant un message au format JSON sur le port `5000`.
* **Frontend** : Une interface utilisateur utilisant Bootstrap, servie par Nginx sur le port `80`.
* **K8s** : Les manifestes Kubernetes permettant le déploiement et la mise en réseau des services.  

Kubernetes doit utiliser les images buildées localement. Exécuter les commandes suivantes à la racine :

```bash
docker build -t backend-image:v1 ./backend
docker build -t frontend-image:v1 ./frontend
```

Appliquez tous les manifestes Kubernetes :

```bash
kubectl apply -f k8s/
```

Vérifiez que les Pods sont en statut Running :

```bash
kubectl get pods
```

Frontend : Accessible sur http://localhost (via le Service de type LoadBalancer).

Backend : Pour permettre au navigateur de joindre l'API lors des tests locaux, activer le port-forwarding :

```bash
kubectl port-forward svc/backend-service 5000:5000
```
