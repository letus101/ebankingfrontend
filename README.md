# Documentation Frontend Digital Banking - Groupe 2

## Aperçu
Interface utilisateur Angular pour le système de banque numérique, offrant une expérience utilisateur moderne et intuitive pour la gestion des comptes bancaires.

## Fonctionnalités

### Authentification
- Connexion sécurisée avec JWT
- Gestion des rôles (Admin, User)
- Protection des routes

### Gestion des Clients
- Liste des clients avec pagination
- Recherche de clients
- Ajout de nouveaux clients
- Modification des informations clients
- Suppression de clients

### Gestion des Comptes
- Création de comptes (Courant et Épargne)
- Consultation des soldes
- Historique des opérations
- Opérations bancaires:
  - Débit
  - Crédit
  - Virement

### Interface Administrateur
- Tableau de bord
- Gestion complète des clients
- Supervision des comptes
- Suivi des opérations

## Technologies Utilisées
- Angular 17
- TypeScript
- Bootstrap 5
- SweetAlert2
- RxJS
- JWT pour l'authentification

## Prérequis
- Node.js (version 18 ou supérieure)
- npm (version 9 ou supérieure)
- Angular CLI (version 17)

## Installation

1. Cloner le projet
```bash
git clone [url-du-projet]
```

2. Installer les dépendances
```bash
cd ebankingfrontend
npm install
```

3. Lancer l'application
```bash
ng serve
```
L'application sera accessible à l'adresse `http://localhost:4200`

## Structure du Projet
```
src/
├── app/
│   ├── components/         # Composants de l'application
│   ├── services/          # Services pour la logique métier
│   ├── models/            # Interfaces et modèles
│   ├── guards/            # Guards pour la protection des routes
│   └── interceptors/      # Intercepteurs HTTP
├── assets/               # Ressources statiques
└── environments/         # Configuration des environnements
```

## Configuration
Le fichier `environment.ts` contient les configurations nécessaires:
- URL de l'API backend
- Paramètres de sécurité
- Autres configurations spécifiques

## Sécurité
- Authentification JWT
- Interception des requêtes HTTP
- Protection des routes avec Guards
- Gestion des tokens
- Validation des formulaires

## Équipe - Groupe 2
- KETAJ Youssef
- MIME Abdelhakim
- TAKI Oussama
- FARID Oussama
- REZOUK Walid

## Licence
Ce projet est sous licence MIT
