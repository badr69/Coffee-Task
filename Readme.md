## Installation de l’environnement de travail
je dispose d'un pc qu tourne su ubuntu
1. Sur https://www.ubuntu-fr.org/ ==> downloads ==> ubuntu 24.04.3 sur un cls usb,
Puis lancer la cles usb l'insalation comence et il faut suire les instructions.
2. Pour utilise javascript il faut installer nodejs,
Dans https://snapcraft.io/store ==> node.js Runtime vrsion 22.18.0 stable inclut npm
installer avec la commande sudo snap install node --classic
version node: 22.18.0 stable
version npm: 10.9.3
3. Vscode version 1.103.1 stabl, installer avec la commande "sudo snap install code --classic"



# Coffee-Task
Nom du projet

## Description
Coffee-Task est un site front-end pour présenter des produits autour du café.  
Le projet utilise HTML, CSS, JS et Bootstrap pour la mise en page et l'interactivité.

## Structure du projet
.
├── about.html   # page about
├── contact.html # page de contact
├── css
│   ├── shop.css # Styles personnalisés pour les pages: shop.html
│   └── styles.css  # Styles personnalisés pour les pages: index, about eet contact
├── data.json  # fichier contenant les noms des cafes
├── images
│   └── coffee.jpg # image d'une tasse de caffe
├── index.html        # page principale
├── js
│   ├── contact.js # Scripts JS pour la page contact.html
│   └── shop.js # Scripts JS pour la page shop.html
├── Readme.md # fichier redme
└── shop.html # page shop
---.gitignore:  # contient les fichiers qui divent pas etre versionner


## Fonctionnalités
- Navigation responsive avec Bootstrap
- Affichage dynamique des produits de café via JavaScript
- Footer avec icônes sociales
- Design responsive et agréable sur mobile et desktop
- Envoyer un message

## Historique des versions
- features/Html : création du HTML des pages  
- features/css_responsive : ajout du CSS et responsive design  
- features/js : ajout du JavaScript pour l'interactivité

## Comment lancer le projet
Dans un terminal
1. Cloner le repository :
   git clone <https://github.com/badr69/Coffee-Task>
2. cd Coffe-Task puis ouvrire le projet dans vscode avec "code ."
3. Vous pouvez naviguer entre le pages du sites.
4. Dans data.json, ajouter un nom de cafe et avec fetch(shop.js) on je recupere le nouveau cafe et une nouvelle card est cree et injcter dans la page shop.html
5. Dans la navbar, clicker sur le lien shop, vous verrez une nouvel card ajoute     dynamiquement dans la page shop.html
6. Clickez sur le lien contact et remplir le formulaire de contact puis appuiyez sur submit,
dans inspector, ouvrez la console et taper 'localStorage' vous verrez les information stockes dans le localStorage.

