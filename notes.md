# a11y technespresso
## Pourquoi cette présentation vous intéresse ?
- J’en vois la valeur
	- comme mettre des rampes d’accès dans tous les bâtiments de services publics
- J’en vois la valeur mais ça ne s’applique pas à mon projet
	- les parcs d’attraction ont des files prioritaires pour les personnes enceintes
	- on ne peut pas présumer de la situation d’une personne
- J’en vois la valeur mais c’est lourd à mettre en place
	- s’y connaitre mieux permet aussi de proposer des solutions d’implémentation alternatives à ce que recommande votre auditeur d’accessibilité dans les cas où sa solution s’applique mal à votre code

Je vais utiliser le terme “handicapé” ou “handicap” mais il faut comprendre qu’une différente capacité n’est pas nécessairement handicapante, c’est le fait d’être dans une situation non adaptée à nos capacités qui nous rend “handicapé.e.s”. C’est pour ça que le terme approprié est “personne en situation de handicap”. 

Ex: Une personne paraplégique n’est pas “handicapée” quand elle regarde Netflix, mais elle est “handicapée” quand elle doit monter des escaliers.

# Pour qui est-ce qu’on fait ce travail ?
- les “handicaps” auxquels on pense en général
	- paraplégie
	- cécité

Pour ces personnes, le web leur permet d’accéder à des services auxquels ils pourraient ne pas avoir accès du tout en physique. Ne pas rendre les sites accessibles c’est les couper complètement de ces services.

- les autres “handicaps” qui impactent fortement l’accès au web
	- surdité
	- sénéscence (vieillissement)

- les “handicaps” moins évident
	- épillepsie
	- dyschromatopsie (daltonisme)
	- cinétose (motion sickness)
	- déficience cognitive

- il y a aussi des cas de personnes qui font face à un handicap situationnel ou temporaire
	- bras cassé
	- lunettes perdues
	- écran en plein soleil
	- environnement bruyant
	- device atypique (montre, petit smartphone, TV)

“En France, 12 millions de personnes sont touchées par un handicap soit 24% de la population active et 18% de la population totale (source INSEE).”

Si le chiffre varie en fonction des sources et des années, et qu’il inclut certains handicaps reconnus qui n’impactent pas l’accès au web, c’est quand même ce nombre qui motive beaucoup d’institutions publiques à rechercher un niveau d’accessibilité supérieur au “minimum requis” (ex: Opéra de Paris). 

## Comment savoir quoi implémenter ?
En fonction des situations détaillées précédemment, afin de rendre le site accessible, on va devoir faire des ajustements :
- visuels, pour permettre une utilisation “normale” (sans outil d’assistance technique), par exemple, s’assurer d’un contraste suffisant entre les textes et leurs backgrounds ;
- sémantique / programmatiques, pour permettre aux différents types d’outils d’assistance technique de parcourir / décrire / utiliser le site
	- lecteurs d’écran
	- input au joystick
	- …

- W3C est l’org de standardisation du web
- WAI est une branche de W3C qui travaille sur l’a11y
- WCAG est l’ensemble des recommandations de WAI
	- WCAG 2.1 : version actuelle
	- WCAG 2.2 : presque terminé
	- WCAG 3.0 : en cours de rédaction

- Standards locaux indépendants de W3C 
	- France: RGAA
	- États-Unis: ADA

### Qu’est-ce que recommande le WCAG ?
- catégories de reco
	- perceivable (perceptible) : équivalents textuels / contenus adaptables / distinguable
	- operable (utilisable) : accessibles au clavier / suffisament de temps / navigation claire
	- understandable (compréhensible) : lisible / prévisible / explication des erreurs
	- robust (robuste) : responsive / pas de perte de contenu / adapté aux technologies d'assistance
- un niveau (A, AA, AAA) est assigné à chaque reco
	- “AAA” inclut toutes les recos, c’est + un idéal qu’une vraie cible business
	- “AA” inclut “A” et “AA”, c’est la cible la plus courante, surtout pour les grosses institutions et les institutions publiques
	- “A” est le minimum acceptable (internationalement, c’est le minimum pour ne pas être sujet à des poursuites judiciaires)

- RGAA (France) : la dernière version (4.1 du 18 février 2021) ne reconnait plus le niveau “A” et rend obligatoire le niveau “AA”.
- ADA (États-Unis) : en lisant des comptes rendus de procès, on peut trouver que la jurisprudence américaine considère le niveau “AA” (WCAG 2.0) comme obligatoire.

## Qu’est-ce qu’implique le niveau “A” ?
Selon WCAG 2.1 (version courante, du 5 Juin 2018), il y a seulement 27 points (la plupart ne s’appliquant que rarement à votre site) :

- Non-text Content: les contenus purement visuels sont accompagnés de descriptions textuelles (ex: bouton picto)
- Audio-only and Video-only: les médias proposent une manière alternative de présenter leurs contenus
	- Transcript
	- Captions
	- Audio Description or Media Alternative
- Info and Relationships: HTML sémantique
- Meaningful Sequence: l'ordre de lecture (ordre dans le DOM) est cohérent sans la présentation visuelle
- Sensory Characteristics: voir "non-text content"
- Use of Color: "non-text content"
- Audio Control: les médias peuvent être mis en pause
- Keyboard: tout le site est utilisable seulement au clavier
- No Keyboard Trap: ne pas bloquer le focus sans possibilité de le débloquer
- Character Key Shortcuts: les inputs clavier sans "modifier" (ctrl/alt...) ne provoquent pas d'action
- Timing Adjustable: attention aux limites de temps (ex: un formulaire qu'on n'a que 2 minutes pour remplir doit pouvoir être renouvelé dans perte d'information)
- Pause, Stop, Hide: le contenu qui bouge / s'actualise automatiquement peut être mis en pause
- Three Flashes or Below Threshold: rien ne flash plus de 3x / seconde
- Bypass Blocks: on peut skipper le contenu répété sur de multiples pages (ex: header)
- Page Titled: les pages ont un titre
- Focus Order: l'ordre du focus au TAB est cohérent
- Link Purpose (In Context): on comprend où vont les liens dans le contexte dans lequel ils sont présentés
- Pointer Gestures: si on utilise du multi-pointer (touch), il existe un moyen de réaliser la même action avec un seul pointer (ex: zoom au pinch, zoom au click sur bouton “+”)
- Pointer Cancellation: on peut interrompre ou revert toute action faite au pointer (ex: zoom / dé-zoom)
- Label in Name: on comprend le lien entre le nom du composant (ex: input) et le label textuel
- Motion Actuation: éviter de modifier la page en fonction du mouvement (du device ou de l'utilisateur)
- Language of Page: la langue de la page est indiquée dans le code
- On Focus: le contexte ne change pas au focus (navigation, déplacement de focus, changement significatif du contenu)
- On Input: changer un setting ne change pas le contexte (navigation, focus, contenu)
- Error Identification: si une erreur d'input est détectée, elle est signalée dans le texte et l'input responsable est identifié
- Labels or Instructions: les champs input ont des labels associés
- Parsing: le HTML est correct
- Name, Role, Value: les composant ont un “role” (implicite avec HTML sémantique, ou explicite avec ARIA)

### Comment implémenter des comportements complexes ?

Dans certaines situations, il n’existe pas d’élément HTML qui ait exactement la sémantique appropriée (et donc les comportements associés). C’est pour ces cas là qu’on utilise la norme ARIA.

- ARIA fait partie de WCAG, sont un ensemble de propriétés qu’implémentent les navigateurs pour aider à rendre un site accessible
	- version en cours : WAI-ARIA 1.1 (2017)
	- specs utilisables dès aujourd’hui : 1.2
	- en cours de rédaction : 2.0

- Exemple de bouton “expanded”

## À quoi ressemble un site accessible ?
- Exemple de site complexe très accessible: [SNCF – Horaire, Train, Info Trafic, Services et Groupe International | SNCF](https://www.sncf.com/fr)
    - "AA" (rgaa 3.0) à 100%, mars 2019
- Exemple de site simple très peu accessible: [Achetez des Timbres, Envoyez Courrier, Colis - La Poste](https://www.laposte.fr/)
    - "AA" à 53%, décembre 2020
- Demo voice over macOS

## Quels sont les astuces les plus courantes à connaître ? 
- Divergence de conception (en fonction des experts, des utilisateurs, des situations, des sites)
	- “Roving” : l’intégralité du site est accessible au TAB
		- gestion des `tabindex`
		- le focus est souvent natif, mais parfois gestion programmatique
	- “Widgets” : le site est découpé en macro-composants accessibles au TAB, la navigation à l’intérieur d’un composant se fait avec d’autres modalités (en général les flèches)
		- gestion des attributs `aria-activedescendant`
		- implémentation des comportements clavier (non natifs)

- Niveaux de titre
	- on incrémente sans sauter de chiffre
	- on décrémente d’autant qu’on veut
	- un seul h1 par page
	- les titres sont compréhensibles en isolation (liste de tous les titres, mais pas d’autre contenu)

- Liens
	- On sait ce que fait un lien sans son contexte (juste l’objet <a>, son contenu, et ses propriétés) (Niveau “AAA” mais très souvent appliqué)

- Contrastes text / background
	- le texte est considéré “large” s’il est `bold > 18px*`  ou  `regular > 24px`
	- Niveau “AA”
		- ratio requis de 4.5:1 pour du texte normal
		- ratio requis de 3:1 pour du texte large
		- ratio requis de 3:1 pour le reste de l’UI (par exemple la border d’un input contre le background)
	- Niveau “AAA”
		- ratio requis de 7:1 pour du texte normal
		- ratio requis de 4.5:1 pour du texte large

- Différencier le contenu pour les screen readers
	- du contenu exclusivement disponible pour les lecteurs d’écran: classe `.sr-only`
	- du contenu ignoré par les lecteurs d’écran: attribut `aria-hidden="true"`

- prefers-reduced-motion

- Canvas / WebGL: ça dépend de l’application
WCAG rajoute souvent la mention “sauf si c’est essentiel”. Les recommandations sont libres à interprétation. En général :
	- juste pour des transitions entre images => utiliser `aria-live` pour décrire l’état statique en dehors des transitions
	- pour un jeu / site experientiel
		- on n’attend pas qu’un jeu 3D soit accessible à une personne aveugle
		- mais on attend que les interactions souris soient faisables au clavier

- ARIA roles
	- awesome list: [Accessible Rich Internet Applications (WAI-ARIA) 1.3](https://w3c.github.io/aria/#namefromauthor)
	- simple list: [WAI-ARIA Roles - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
	- well organized list: [Using ARIA: Roles, states, and properties - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

- Des exemples d’implémentations qui suivent les recommandations de Temesis (entreprise d’audit et consulting d’accessibilité employée par Mazarine) [Components | a11y-examples](https://sheraff.github.io/a11y-examples/)


## Quels outils utiliser pour vérifier mon site ?
- chrome lighthouse audit
- color picker + contrast checker
- WAVE [https://wave.webaim.org](https://wave.webaim.org/)  
- chrome rendering emulation
- chrome accessibility tree
- zoom navigateur
- * { font-size: 40px }
- voice over macOS / iOS

* axe DevTools - Web Accessibility Testing : extension Chrome ( [lien de téléchargement](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) ). Version payante disponible avec plus d’options 
* Outil de test des contrastes :  [https://developer.paciellogroup.com/resources/contrastanalyser/](https://developer.paciellogroup.com/resources/contrastanalyser/)  ou version sketch pour les créas :  [https://sketchapp.rocks/plugins/color-contrast-analyser/](https://sketchapp.rocks/plugins/color-contrast-analyser/)  
- Document officiel pour la norme WCAG 2.1 :  [https://www.w3.org/TR/WCAG21/](https://www.w3.org/TR/WCAG21/)  
- Notice accessibilité orientée fonctionnelle et graphique ( norme WCAG 2.1 et RGAA 4):  [lien de téléchargement PDF](https://www.accede-web.com/wp-content/uploads/notice-accessibilite-fonctionnelle-graphique.pdf)  
- Notice accessibilité orientée HTML et CSS ( norme WCAG 2.1 et RGAA 4):  [lien de téléchargement PDF](https://www.accede-web.com/wp-content/uploads/notice-accessibilite-html-css.pdf) 




## requests
- des choses qu’on aurait pas idées qui sont mega importante pour une personne en situation de handicape ? je sais pas, qui nous parait normal alors que ca l’est pas du tout ^^

- Peut être des extensions sympas aussi ?
- et pourquoi pas même, une vraie navigation avec un screen reader sur 2 sites choisis:
	- un vraiment pas access friendly
	- un autre au top des best practices

- l’accessibilité sur les forms

- Exemples de sites bien foutus en accessibilité , meme des trucs complexes . Pour ne pas dire “ l’acessibilité c’est bloquant”





