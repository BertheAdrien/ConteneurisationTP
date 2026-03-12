Le projet est entièrement conteneurisé. Pour le lancer, une seule commande suffit:

docker compose up --build

Une fois le build terminé :Frontend : Accessible sur http://localhost:8080.Backend (API) : 

Accessible sur http://localhost:3000/api/message.

FonctionnementLe Backend écoute sur le port 3000 et renvoie un message JSON {"message": "Hello from backend"}.
Le Frontend appelle l'API via le navigateur (localhost) et affiche dynamiquement la réponse dans la page.
Les services sont isolés dans un réseau Docker dédié.