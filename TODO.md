# TODO

Voici les éléments qui pourraient être fait ou amélioré

- Utilisé une librairie de gestion de l'état (vuex)
- Optimiser les requêtes à l'api de github (voir décision de design sur le _search_)
- Paginer les repositories et les issues (serveur side)
- Implémenter le login github pour accéder aux repositories privée
  - En ce moment, l'api key de github est mon api key personelle; Ce n'est donc pas quelque chose qui devrait être conserver en production.
- Améliorer les performances
  - Faire du caching (avec _service worker_)
- Tester sur IOS
- Créer un component par défaut pour ceux qui sont similaire _SearchIssue_ et _SearchRepository_
- L'application peut-être taxante pour la bande passante.
  - Nous pourrions revoir la pertinence des outils de recherche d'issue et de repository.
  - Nous pourrions ajouter un délais avant de lancer les recherches pour réduire le nombre d'appel inutile.
- Créer une page de profil utilisateur
- Internationaliser le site
