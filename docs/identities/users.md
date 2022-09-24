---
sidebar_position: 2
---

# Users

Les utilisateurs d'OwlGrid peuvent être soit des utilisateurs **physiques** (humains), soit des **machines**. Ils peuvent effectuer des actions en leur nom propre, ou bien au nom d'un autre utilisateur (cf. délégation d'identité).

## Types d'identités

:::note

La ressource de gestion des identités ne s'applique qu'à OwlGrid. Elle n'est pas utilisée par les applications. Les applications doivent utiliser leur propre système de gestion des utilisateurs. Pour plus d'informations, consulter la section [Users templates](/docs/templates/users).

:::

### Utilisateurs physiques

Les utilisateurs physiques représentent des humains. 

## Caractéristiques des identités

### Identifiant

Tous les utilisateurs possèdent un identifiant unique. Cet identifiant est au format OwlGrid ID (actuellement un UUID v4).

### Facteur d'authentification

Le facteur d'authentification permet de s'assurer qu'une l'utilisateur d'une identité est bien le propriétaire de cette identité.

#### Utilisateurs physiques

La méthode d'authentification des utilisateurs physiques par défaut est l'association adresse email et mot de passe. Toutefois, cette méthode peut être corrompue facilement. C'est pourquoi, nous proposons des méthodes d'authentification externe:
- SSO ?
- Email ?
- TODO

2FA ?

#### Utilisateurs machine

La méthode d'authentification des utilisateurs machine est le mot de passe / certificat ? TODO

### Données d'identification

Les données d'identification sont des informations complémentaires sur un utilisateur. Ces données peuvent être ajoutées librement par les administrateurs d'OwlGrid. Par exemple, on peut ajouter les données "nom", "prénom", "date de dernière connexion" aux utilisateurs.

### Droits

Veuillez consulter la section [Droits](/docs/administrate/rights) pour plus d'informations.

### Groupes

Veuillez vous référer à la section [Groupes](/docs/identities/groups) pour plus d'informations.

## Provisionnement des identités

### Création d'une identité

### Mise à jour d'une identité

### Suppression d'une identité
