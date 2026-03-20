# API Blog - Projet de Gestion d'Articles

Cette API RESTful permet de gérer des articles de blog. Elle offre des fonctionnalités complètes de création, lecture, mise à jour, suppression (CRUD) ainsi qu'une recherche par mots-clés. L'API est développée avec **Node.js**, **Express** et utilise **SQLite** comme base de données.

---

##  Installation

### 1. Prérequis
- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- `npm` (installé par défaut avec Node.js)

### 2. Étapes d'installation
Ouvrez votre terminal, placez-vous à la racine du projet et installez les dépendances nécessaires :

```bash
npm install
```

---

##  Lancement du Projet

Pour démarrer le serveur, restez à la racine du projet et exécutez la commande suivante :

```bash
npm start
```

Le serveur sera alors lancé et écoutera sur le port `3000`.  
📍 **L'API est accessible à l'adresse :** `http://localhost:3000/api`

*(Note : La base de données SQLite `blog.db` ainsi que la table `articles` sont automatiquement créées lors du premier lancement du serveur).*

---

##  Documentation Interactive (Swagger)

Une interface graphique interactive est générée et embarquée directement via Swagger. Elle permet non seulement de lire la documentation exacte des formats attendus, mais aussi d'y tester visuellement les requêtes.

Une fois le serveur lancé, ouvrez votre navigateur et accédez à l'URL suivante :  
👉 **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**

---

## 📡 Endpoints de l'API

Tous les endpoints de ce projet sont préfixés par `/api`.

| Méthode | Endpoint | Description |
|---|---|---|
| `POST` | `/api/articles` | Créer un nouvel article |
| `GET` | `/api/articles` | Récupérer tous les articles (supporte les filtres `?categorie=` et `?auteur=`) |
| `GET` | `/api/articles/search` | Rechercher des articles par mots-clés (via `?query=`) |
| `GET` | `/api/articles/:id` | Récupérer un article spécifique via son identifiant |
| `PUT` | `/api/articles/:id` | Modifier entièrement un article existant via son identifiant |
| `DELETE` | `/api/articles/:id` | Supprimer un article via son identifiant |

---

## 🧪 Tests et Exemples d'Utilisation

L'API peut être testée en lançant les commandes `curl` ci-dessous dans un second terminal (ou en utilisant une interface client comme Postman / Insomnia). 

Ces exemples couvrent l'intégralité du cycle de vie de la gestion d'un article.

### 1. Ajouter un article (`POST`)
**Commande de test :**
```bash
curl -X POST http://localhost:3000/api/articles \
-H "Content-Type: application/json" \
-d '{
  "titre": "Débuter avec Node.js", 
  "contenu": "Voici un tutoriel complet pour commencer avec Node.js.", 
  "auteur": "John Doe", 
  "date": "2023-11-01", 
  "categorie": "Programmation", 
  "tags": "node, backend, js"
}'
```
**Réponse attendue (201 Created) :**
```json
{
  "message": "Article créé",
  "id": 1
}
```

### 2. Récupérer tous les articles (`GET`)
**Commande de test :**
```bash
curl -X GET http://localhost:3000/api/articles
```
*Note : Pour filtrer par catégorie, ajoutez des paramètres d'URL : `http://localhost:3000/api/articles?categorie=Programmation`*

### 3. Effectuer une recherche textuelle (`GET`)
Recherche par mots-clés contenus dans le titre ou le contenu.
**Commande de test :**
```bash
curl -X GET "http://localhost:3000/api/articles/search?query=tutoriel"
```

### 4. Lire un article par ID (`GET`)
**Commande de test :**
```bash
curl -X GET http://localhost:3000/api/articles/1
```
**Réponse attendue (200 OK) :**
Le format JSON reprenant l'ensemble des informations de l'article ayant l'ID précisé.

### 5. Mettre à jour un article (`PUT`)
**Commande de test :**
```bash
curl -X PUT http://localhost:3000/api/articles/1 \
-H "Content-Type: application/json" \
-d '{
  "titre": "Débuter avec Node.js (Mise à jour)", 
  "contenu": "Contenu enrichi pour Node.js version 20 !", 
  "auteur": "John Doe", 
  "date": "2023-11-05", 
  "categorie": "Programmation backend", 
  "tags": "node, backend, js, web"
}'
```
**Réponse attendue (200 OK) :**
```json
{
  "message": "Article modifié"
}
```

### 6. Supprimer un article (`DELETE`)
**Commande de test :**
```bash
curl -X DELETE http://localhost:3000/api/articles/1
```
**Réponse attendue (200 OK) :**
```json
{
  "message": "Article supprimé"
}
```
