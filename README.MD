# Template de bot Discord en TypeScript 🤖

Ce projet est une template de bot Discord en TypeScript compatible avec DiscordJS v.14. Il est facilement installable en suivant les étapes ci-dessous.

## Installation

Cloner le repo: `git clone https://github.com/refaltor77/template_discord_typescript`
Installer les dépendances: `npm install`
Remplir le fichier config.json dans le dossier resources
Démarrer le bot: `npm start`

> Assurez-vous d'avoir Node.js et npm installés sur votre machine

## Configuration

Le fichier `.env` dans le dossier racine doit être rempli avec les informations de votre bot. Voici un exemple de configuration:
````ENV
# USER
TOKEN=
CLIENT_ID=



# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://postgres:postgres@127.0.0.1:5432/test?schema=public"
````

## Utilisation
Ce template de bot Discord est prêt à l'emploi et peut être personnalisé en ajoutant des fonctionnalités et des commandes. Consultez la documentation de DiscordJS pour plus d'informations sur la création de bots Discord en TypeScript.

## Licence
Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus d'informations.
