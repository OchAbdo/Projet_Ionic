# CinShare – Application de gestion des films (Ionic + Firebase)

## Description du projet

**CinShare** est une application mobile développée avec **Ionic** (Angular), permettant aux utilisateurs de :
- s’inscrire avec leurs informations personnelles et une **photo prise via la caméra du téléphone**,  
- s’authentifier via Firebase Authentication,  
- gérer leur **playlist personnelle** de films favoris,  
- découvrir les utilisateurs ayant des goûts similaires grâce à une **fonctionnalité de matching** basée sur les listes de favoris.

L’administrateur dispose d’un espace lui permettant :
- d’**ajouter de nouveaux films** à la base de départ (issue de l’API **Creer par Nestjs **),  
- et de **désactiver des utilisateurs** (sans les supprimer).

Les données sont stockées dans **Firebase Firestore**.

---

## Fonctionnalités principales

### Côté utilisateur
- **Inscription** avec nom, prénom, âge et photo (via la caméra du téléphone)
- **Authentification** (email + mot de passe)
- **Gestion de playlist** : ajout / suppression de films favoris
- **Matching entre utilisateurs** :
  - Compare la liste de favoris de l’utilisateur avec celles des autres
  - Affiche les liste de utilisateurs ayant **≥ 75% de films correspondance**

### Côté administrateur
- **Ajout** dans la base de départ
- **Désactivation d’un utilisateur**
- **Consultation de la liste des utilisateurs**
