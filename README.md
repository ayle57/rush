# Rush Ecole 42
Bienvenue sur notre depot pour le rush final de la piscine discovery de 42 angouleme. Vous trouverez ici tout le contenu du dossier `~/discovery_piscine/rush` qui represente la Cellule4.0 intitulee "Rush".

## Pour commencer
### Prerequis
Veillez a avoir une version de ``node`` suffisante. Pour cela:
```shell
node -v
=> 22.16.0
```
Afin que le projet compile correctement la version de ``node`` doit etre au minimum en ``22.16.0``.
De meme ``npm`` sera mis-a-jour.

### Lancer le projet
Pour demarrer le projet, vous pouvez:
1. Cloner le depot github
```shell
git clone git@github.com:ayle57/rush.git
```
ou
```shell
git clone https://github.com/ayle57/rush.git
```
2. Installer les dependances
```shell
cd rush
npm install
```
(par defaut nous utilisons ``npm``)
3. Lancer le projet
```shell
npm run dev
```

## Organisation
Ce projet a ete cree avec ``vitejs``, ``javascript``, ``html`` et ``css``. Nous avons garde la structure de base et nous l'avons agrementee a savoir :
- .idea
- node_modules | dossier contenant les dependances
- public | dossier contenant les images
  - icons
  - screens
- src | dossier contenant les sources javascript, css et html
  - ajakopin | CV d'Allistair
    - index.html | point d'entre
    - main.js
    - index.css
    - components | dossier contenant tous les composants du site (javascript, css) 
  - shared | dossier contenant les fichiers css partages
  - tchreti | CV de Timeo
    - index.html | point d'entre
    - script.js
    - style.css


## Projets
### ajakopin
CV d'Allistair Jakopina.
### tchreti
CV de Clement Morel.

## Auteurs
- ajakopin (CV Allistair JAKOPINA)
- tchreti (CV Clement Morel)

## Outillage
- vitejs
- typeit.js
- makefile
- git
- npm
