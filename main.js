const app = {
    init : async () => {
        console.log('GO !');

        const response = await fetch('http://geo.api.gouv.fr/regions');
        const regions = await response.json();
        console.log(regions);
    },

    //* Alors voila, je te file les régions de france, je voudrais que tu retraite ces infos maintenant en faisant ce qui est écrit en dessous
        //* Par contre me fous pas le bordel stp, range bien tout dans l'objet app parce que c'est une commande du gouvernement 
        //* mais j'aimerai bien la revendre à des tours opérateurs chinois sans tout recoder
    // Petit tips, 
        // quand on te demande de coder une fonction, tu peux décomposer en plusieurs fonctions si tu as besoin de destructurer
        // sur la toute dernière ligne, je n'appelle que app.init et rien d'autre, c'est à partir d'elle que tout doit fonctionner comme domino day !


    //TODO une fonction qui va créer un article qui aura h2 le nom et à l'intérieur une span avec le code
        //todo au passage, tu peux leur donner la class article que j'ai déjà codé pour toi tellement je suis sympa

    //TODO une fonction qui donne un background color bleue (rgba(146, 186, 246, 0.33)) si l'index de la région est pair, 
        //todo une background rouge si impair (rgba(241, 96, 61, 0.33))

    // Mouais par contre j'aimerai bien un truc plus accueillant ! Un petit msg qui donne envie de venir quoi !

    //TODO change le h2 Pour qu'il annonce "Venez visiter : nom_de_la_region" (avec une fonction de javascript, pas avec un ajout à la main !)
}

document.addEventListener('DOMContentLoaded', () => app.init());
