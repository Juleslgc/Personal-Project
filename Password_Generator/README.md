# Password Generator

## Description

Ce projet est un générateur de mots de passe sécurisés en Python.  
Il permet de créer des mots de passe aléatoires personnalisables en fonction de critères : inclusion de chiffres, majuscules, symboles, et longueur souhaitée.

---

## Pourquoi ce projet ?

Ce projet a été réalisé dans le cadre de l’apprentissage de la cybersécurité et du développement Python.  
L’objectif est de comprendre les bonnes pratiques pour générer des mots de passe robustes, tout en pratiquant la manipulation des chaînes, listes, et la gestion des options utilisateur.  
Il s’agit aussi d’un premier projet concret à mettre sur LinkedIn et GitHub pour démontrer mes compétences en programmation sécurisée.

---

## Langage et environnement

- Langage : Python 3 (testé avec Python 3.6+)
- Bibliothèques utilisées : standard (random, string)
- Environnement : fonctionne sur Linux, macOS, Windows avec Python installé

---

## Utilisation

### Cloner le dépôt

```bash
git clone https://github.com/tonpseudo/password-generator.git
cd password-generator
```

### Donner les droits d’exécution au script

```bash
chmod +x password_generator.py
```

### Lancer le générateur

```bash
./password_generator.py
```

### Exemple de sortie

```bash
Generated password: A7!g3zDf@Qw2
```

## Personnalisation

Le script accepte plusieurs options modifiables dans la fonction generator_password :

- length (int) : longueur totale du mot de passe (par défaut 12)

- digit (bool) : inclure au moins un chiffre (par défaut True)

- uppercase (bool) : inclure au moins une lettre majuscule (par défaut True)

- symbol (bool) : inclure au moins un symbole (par défaut True)

Par exemple, pour générer un mot de passe de 16 caractères avec uniquement des lettres minuscules et chiffres :

```py
generator_password(length=16, digit=True, uppercase=False, symbol=False)

```
---

## Contribution

N’hésitez pas à ouvrir une issue ou une pull request si vous avez des idées d’amélioration !

---

## Auteur

- **Jules Ventura / Juleslgc**  
- LinkedIn : [www.linkedin.com/in/jules-ventura-2948b8306](www.linkedin.com/in/jules-ventura-2948b8306)
---


## Licence

Ce projet est sous licence MIT — libre à vous de l’utiliser, modifier ou partager.
