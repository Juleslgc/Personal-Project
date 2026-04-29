# Password Generator 

## Description

Password Generator est une application web permettant de générer des mots de passe sécurisés et aléatoires. Elle combine un frontend en React et un backend en Python/Flask pour fournir une expérience simple et rapide à l’utilisateur.

L’objectif du projet est de créer un outil pratique pour améliorer la sécurité des comptes en générant des mots de passe complexes facilement.

## Utilisation

Le projet est déployé en ligne, vous pouvez l’utiliser directement :

Lien vers l’application : https://secure-password-generator1.netlify.app/

Étapes pour générer un mot de passe :

1. Ouvrez l’application dans votre navigateur.

2. Sélectionnez vos critères : longueur, inclusion de chiffres, symboles, majuscules.

3. Cliquez sur Générer.

4. Le mot de passe s’affiche et peut être copié facilement.

## Technologies utilisées

Frontend : ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)

Backend / API : ![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white) avec ![Flask](https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white)

Déploiement : Frontend sur ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white), Backend sur ![Render](https://img.shields.io/badge/Render-46E3B7?logo=render&logoColor=white)

Langues disponibles : Français et Anglais

## Sécurité côté backend

Le backend Flask inclut plusieurs protections pour éviter les attaques courantes et garantir des mots de passe sécurisés :

**1. Validation des paramètres**

    - La longueur du mot de passe est limitée entre 8 et 64 caractères pour éviter les abus.

    - Le serveur vérifie que au moins un type de caractère est sélectionné (chiffre, majuscule, symbole).

    - Les valeurs passées en URL sont converties en booléens de manière sécurisée avec la fonction str_to_bool.

**2. Mots de passe sécurisés**

    - Les mots de passe sont générés de manière aléatoire et contiennent au moins un caractère de chaque type sélectionné.

    - Les caractères restants sont choisis aléatoirement et mélangés (random.shuffle) pour éviter des motifs prévisibles.

**3. Protection contre les injections / attaques côté serveur**

    - Aucune donnée utilisateur n’est stockée ni transmise ailleurs.

    - Seules des requêtes GET simples sont acceptées avec des paramètres limités.

    - Le CORS est configuré pour limiter l’accès aux requêtes venant du frontend officiel.

**4. Limitation des attaques de type Java / script malveillant**

    - Le serveur n’exécute aucun code utilisateur et ne fait pas d’opérations sur le système.

    - Toutes les entrées sont traitées comme des données et jamais comme du code.

Ces pratiques assurent que même si quelqu’un essaie de manipuler l’API via une URL ou un script externe, le serveur reste sécurisé et ne génère que des mots de passe valides.

## Difficultés rencontrées

**1. Déploiement frontend sur Netlify**

    Gestion des dépendances et compatibilité avec certaines librairies React.

**2. Déploiement backend sur Render**

    Configuration de Flask et activation du CORS pour permettre la communication avec le frontend.

**3. Multilingue (FR / EN)**

    Mise en place de la traduction pour rendre l’application accessible à tous.

Ces défis ont permis de mieux comprendre le déploiement full-stack et la communication entre frontend et backend.

## Objectifs du projet

- Générer des mots de passe sécurisés et aléatoires.

- Expérimenter le déploiement d’une application full-stack.

- Rendre l’application accessible en plusieurs langues.

- Garantir la sécurité et la confidentialité des utilisateurs.

## Auteur 

**Jules Ventura**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/jules-ventura-2948b8306)

## Licence

Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT) © Jules Ventura