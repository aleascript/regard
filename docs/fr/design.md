---
id: design
title: 6. Faire varier et concevoir Regard
sidebar_position: 7
---

La configuration standard suffit pour jouer.

Mais Regard a été conçu pour une autre possibilité : lorsqu’un monde possède une logique suffisamment forte, **la mécanique peut cesser d’être générique et commencer à l’exprimer**.

## Invariants et choix de design

Les éléments suivants constituent le geste de Regard :

- partir d’une Intention fictionnelle ;
- définir un Focus et son Zoom ;
- faire porter la résolution sur ce qui reste réellement incertain ;
- rendre visibles les conséquences importantes lorsque le contrat de table le demande ;
- sélectionner ce qui compte et dans quel sens cela compte ;
- éviter les redondances à l’échelle choisie ;
- confronter les Mises à une forme d’incertitude ;
- produire une forme de résultat exploitable par la fiction ;
- interpréter ce résultat à partir de la fiction mise en jeu ;
- repartir du monde transformé.

D’autres éléments appartiennent à la configuration standard et peuvent être transformés :

- utiliser des D6 ;
- associer une Mise à un dé ;
- lire les nombres pairs comme des Réussites ;
- former deux pools à partir des deux orientations du Focus ;
- utiliser la même représentation physique pour toutes les Mises ;
- employer l’échelle standard de résultats ;
- employer la surenchère ;
- utiliser la Jauge de Destin.

La variation n’est pas un ajout extérieur au framework.

**Elle fait partie de sa conception.**

## Une chaîne standard de responsabilités

Dans la configuration standard — et dans les implémentations qui comparent deux orientations — on peut séparer les opérations ainsi :

> **Mises orientées → support d’incertitude → Prisme → signaux mécaniques → agrégation par orientation → échelle de résultat → interprétation → fiction transformée**

Dans la configuration standard :

> **Mises orientées → D6 → pair / impair → Réussites → comparaison → interprétation par les Mises**

Cette séparation évite de demander à une seule mécanique de tout faire.

Le **Prisme** transforme l’incertitude en signaux mécaniques.

Lorsque plusieurs contributions appartiennent à une même orientation, elles doivent pouvoir être réunies avant la comparaison.

L’**échelle de résultat** transforme ensuite la comparaison en une forme de résultat.

L’**interprétation** transforme enfin cette forme de résultat en fiction à partir des Mises et de la situation.

Cette chaîne est une architecture de référence, pas une obligation universelle. Une implémentation légère peut employer un Prisme dont le résultat est directement exploitable sans passer par une opposition entre deux pools.

## Les Prismes : comment une perspective transforme l’incertitude

Vous utilisez pourtant déjà un Prisme depuis le début : le **Prisme standard**. Les pairs et les impairs ne sont pas la réalité cachée de Regard. Ils constituaient simplement la réponse par défaut dont nous avions besoin pour apprendre la boucle de résolution sans introduire trop tôt son espace de variation.

Le moment est maintenant venu de rendre ce choix visible.

Le Prisme standard n’a pas plus d’importance conceptuelle qu’un autre Prisme. Il n’est ni la norme du réel ni le moteur auquel les autres Prismes ajouteraient des exceptions. C’est un **point zéro de design** : une lecture volontairement discrète de l’incertitude lorsque le jeu ne souhaite pas faire de la perspective un enjeu mécanique particulier.

Regard appelle **Prisme** :

> **la logique par laquelle une perspective sur le monde transforme l’incertitude en un résultat mécaniquement exploitable par le jeu.**

Un Prisme ne consiste pas simplement à « compter les dés autrement » pour produire une variation esthétique.

Il peut modifier :

- les résultats qui comptent ;
- les motifs qui deviennent significatifs ;
- les dés qui peuvent être relancés ou transformés ;
- les résultats qui s’annulent ;
- les coûts attachés à certains résultats ;
- les relations entre plusieurs pools ;
- les supports utilisés ;
- la forme même du résultat.

Le mécanisme concret est l’expression d’une question plus fondamentale :

> **Que signifie l’incertitude depuis cette manière d’habiter le monde ?**

### Le Prisme standard

Nous l’avons déjà utilisé pour apprendre à jouer.

Le **Prisme standard** traite chaque D6 de manière identique : pair, il produit une Réussite ; impair, il n’en produit pas.

Il ne prétend pas représenter la « vraie » structure du hasard.

Il fournit simplement une lecture discrète lorsque le jeu ne souhaite pas faire de la perspective un enjeu mécanique particulier.

C’est un **point zéro de design**, pas une norme à laquelle les autres Prismes devraient ressembler.

Il constitue également le comportement par défaut d’une adversité sans perspective propre lorsque ni le monde ni le design ne justifient un autre traitement.

### Orientation et Prisme répondent à deux questions différentes

Deux décisions ne doivent pas être confondues :

1. **Dans quel pool cette Mise entre-t-elle ?**  
   Cela dépend de son orientation relativement au Focus et à l’Intention.
2. **Comment cette Mise devient-elle mécaniquement lisible ?**  
   Cela dépend du Prisme de la perspective qui la porte, ou du Prisme que le jeu attribue à son actualisation.

> **L’orientation détermine de quel côté une vérité pèse. Le Prisme détermine comment cette vérité traverse l’incertitude pour devenir mécaniquement lisible.**

Un pool est donc d’abord un regroupement de Mises orientées dans le même sens. Il n’a pas besoin d’être homogène du point de vue des Prismes.

### Un camp collectif peut réunir plusieurs Prismes

> **Partager une Intention ne signifie pas partager une perspective.**

Si plusieurs protagonistes contribuent à la même Intention avec des perspectives différentes, leurs Mises restent réunies par leur orientation commune, mais elles sont traitées selon leurs Prismes respectifs.

Dans ce cas :

1. les Mises restent regroupées par orientation ;
2. elles sont traitées par sous-ensembles cohérents selon les Prismes des perspectives qui les portent ;
3. les sorties comparables sont réunies au niveau de l’orientation.

> **Le camp détermine quelles contributions sont réunies. Le Prisme détermine comment chacune devient une contribution mécaniquement comparable.**

Cette règle évite d’imposer artificiellement le Prisme d’un leader, le Prisme majoritaire ou un mélange mécanique sans sens fictionnel.

Si la fiction établit qu’une perspective domine réellement l’action collective, un jeu peut naturellement le représenter. Ce devient alors une propriété de la situation, pas une règle générale de départage.

### Des sorties comparables pour des perspectives différentes

Dans l’état actuel de Regard, plusieurs Prismes peuvent contribuer à une même résolution parce qu’ils peuvent produire un format de sortie commun : les **Réussites**.

Il faut cependant distinguer cette solution actuelle du principe architectural plus général.

> **Lorsque plusieurs Prismes contribuent à une même résolution, leurs sorties doivent pouvoir devenir mécaniquement comparables au moment de leur agrégation. Regard utilise actuellement les Réussites pour assurer cette comparabilité. D’autres contrats d’interopérabilité sont concevables, mais le framework ne les formalise pas encore.**

La Réussite ne doit donc pas être transformée prématurément en sortie universelle obligatoire pour toute implémentation future de Regard.

Un jeu dont les Prismes ne produisent pas de sorties directement comparables doit définir lui-même comment plusieurs perspectives peuvent coopérer dans une même orientation.

### Adversité sans perspective propre

Une orientation adverse peut être composée de vérités comme :

- *paroi verticale* ;
- *froid extrême* ;
- *terrain instable* ;
- *vent violent* ;
- *fatigue accumulée* ;
- *distance à parcourir*.

Ces vérités produisent bien une opposition, mais elles ne possèdent pas nécessairement une perspective sur le monde.

Regard recommande de les lire dans cet ordre.

#### 1. L’adversité possède sa propre logique

Avant de la considérer comme neutre, demander si le monde, le lieu, l’entité ou la situation lui donne déjà une logique mécaniquement opérante.

Si oui, elle utilise le Prisme correspondant.

> **Avant de considérer une adversité comme neutre, demandez si le monde lui donne déjà une logique capable de devenir mécaniquement opérante.**

Une montagne sacrée, un monde spirituel, une institution magique ou une réalité cosmologique peuvent ainsi imposer leur propre manière d’actualiser l’incertitude.

#### 2. Mode Miroir

Le **Mode Miroir** est un mécanisme canonique de Regard.

Ce n’est **pas un Prisme**. C’est une règle d’attribution : une adversité sans perspective propre est résolue avec le Prisme de la perspective depuis laquelle l’épreuve est vécue.

> **Le Miroir ne donne pas une vision du monde à l’obstacle. Il fait de la vision du protagoniste la manière dont l’ensemble de l’épreuve devient lisible.**

Le dépassement de soi constitue un exemple fort d’usage, mais ne définit pas universellement le Miroir.

Le choix des scènes ou situations où le Mode Miroir s’active relève du **game design de l’implémentation**. Regard fournit le mécanisme et son sens ; chaque jeu décide de sa politique d’activation.

Avec plusieurs protagonistes :

- **Focus individuel** : chaque protagoniste peut rencontrer un Miroir correspondant à son propre Prisme ;
- **Focus collectif, Prisme partagé** : l’adversité peut refléter ce Prisme commun ;
- **Focus collectif, plusieurs Prismes** : il n’existe plus de perspective unique à refléter ; les protagonistes utilisent leurs Prismes respectifs et l’adversité abstraite utilise le **Prisme standard**.

> **Un miroir ne peut refléter une perspective unique que s’il existe une perspective unique à refléter.**

Une logique propre au monde ou à l’adversité reste prioritaire sur cette règle par défaut.

#### 3. Prisme standard

Lorsque l’adversité ne possède pas de perspective propre et qu’aucun choix de design ne justifie le Mode Miroir, elle utilise le **Prisme standard**.

Dans la configuration standard :

- D6 ;
- pair = Réussite ;
- impair = aucune Réussite ;
- aucun effet supplémentaire.

Le Prisme standard constitue ici un **point zéro de lecture**, non une philosophie artificiellement attribuée à l’obstacle.

## Quand créer un autre Prisme ?

Un Prisme particulier devient pertinent lorsque modifier la résolution permet au joueur de ressentir quelque chose qu’une description seule transmettrait moins bien.

Un jeu pourrait vouloir que :

- la faveur divine transforme certains échecs ;
- les esprits rendent des motifs ou des répétitions significatifs ;
- une discipline logique agrège les résultats plutôt qu’elle ne les compte ;
- une voie mystique puisse annuler une réussite apparemment acquise ;
- une pensée cyclique fasse émerger des formes plutôt que des succès indépendants.

La bonne question n’est pas :

> *Quelle mécanique originale puis-je inventer ?*

mais :

> **Quelle relation au monde mérite réellement de transformer la manière dont l’incertitude est vécue ?**

## Concevoir un Prisme

### 1. Partir d’une relation au monde

Avant de choisir une mécanique, identifiez la logique que le jeu veut rendre sensible : accumulation, transcendance, intervention, équilibre, sacrifice, contamination, réciprocité, prédiction, symbiose, déterminisme, hasard ou autre.

> **Quelle logique du réel doit devenir perceptible quand le joueur résout une incertitude ?**

### 2. Demander ce que le joueur doit ressentir ou remarquer

Un bon Prisme ne représente pas seulement une idée.

Il influence ce que le joueur espère, craint, surveille ou recherche au moment du tirage.

> **Est-ce que jouer ce Prisme pousse le joueur à regarder le monde comme son personnage ?**

### 3. Traduire cette relation en opération mécanique

Choisissez ensuite ce qui peut rendre cette logique sensible :

- pairs ou impairs ;
- sommes ;
- motifs ;
- annulations ;
- relances ;
- tailles de dés ;
- cartes, couleurs ou symboles ;
- interactions entre pools ;
- modifications de l’adversité ;
- autre support d’incertitude.

Le support vient après le sens qu’il doit produire.

### 4. Décider quelle forme de résultat produire

Si plusieurs Prismes doivent participer à une même opposition, leurs sorties doivent pouvoir devenir comparables au moment de leur agrégation. Regard utilise actuellement les Réussites pour ce rôle.

Mais un jeu léger peut employer un résultat autonome si cela sert mieux l’expérience recherchée.

### 5. Vérifier que la mécanique n’est pas seulement décorée par le lore

Un Prisme n’est pas « les 6 explosent parce que c’est amusant ».

Les 6 explosent si cette propriété exprime quelque chose de la réalité vécue par le personnage et produit l’expérience recherchée à la table.

Un test utile consiste à retirer mentalement le thème : si la mécanique pourrait être reskinnée arbitrairement sans rien perdre de sa sensation, le lien entre Prisme et fiction mérite probablement d’être renforcé.

> **La mécanique n’est pas décorée par le lore : elle en devient une opération.**

### 6. Vérifier son coût cognitif

Un Prisme peut être étrange sans devenir opaque.

L’objectif n’est pas de déplacer l’attention depuis des modificateurs complexes vers une autre forme de manipulation technique tout aussi envahissante.

Le Prisme devrait idéalement rendre sa perspective plus sensible qu’il ne rend sa procédure encombrante.

## Les supports peuvent eux aussi résonner

Une Mise n’a pas besoin d’être représentée par un D6 identique aux autres.

Un jeu peut utiliser :

- des dés de tailles différentes ;
- des couleurs ayant une signification fictionnelle ;
- des cartes ;
- des jetons ;
- des pièces ;
- des pierres ou des perles ;
- des objets particuliers ;
- tout autre support dont la manipulation sert l’expérience recherchée.

Changer de support n’est pas intéressant en soi.

Le support devient pertinent lorsqu’il prolonge quelque chose que le personnage ou le monde fait déjà ressentir.

L’objectif reste le même :

> **réduire la distance entre ce que le joueur manipule et ce que son personnage vit.**

### Matérialiser les Réussites

Regard ne fixe pas de procédure universelle pour matérialiser physiquement les Réussites.

Dés mis de côté, objets, jetons, compteur numérique ou zone particulière de table peuvent être utiles selon les implémentations, mais cela relève de l’ergonomie et du support choisi.

Le besoin générique est plus simple : tant qu’un Prisme ou une interaction mécanique a encore besoin du tirage complet, celui-ci doit rester lisible.

Une Réussite n’a pas besoin d’être physiquement attribuée à la Mise qui l’aurait produite. La résolution reste globale.

## Quand le dispositif de table entre en résonance

Regard permet d’aller plus loin que le choix d’un support : **le dispositif réel de la table peut parfois entrer en résonance avec une propriété de la fiction.**

Cette possibilité est une ouverture avancée du framework, pas son nouveau centre. Elle ne doit pas devenir un catalogue de gestes immersifs, d’accessoires ou de gimmicks.

La question reste la même : est-ce que cette correspondance rend quelque chose du monde plus perceptible dans le geste de jeu ?

### Les Mises incarnées

Les **Mises incarnées** sont un outil canonique **optionnel** de design diégétique. Elles ne font pas partie de la configuration standard obligatoire de Regard.

Un jeu Regard peut décider de les intégrer. Lorsqu’un jeu ne tranche pas lui-même, une table peut également choisir de les employer ou non dans son contrat de table.

> **On ne gagne pas une Mise en jouant mieux. On donne corps à une Mise qui comptait déjà.**

Lorsqu’une table utilise cette règle :

1. la Mise doit d’abord être pertinente et non redondante pour le Focus ;
2. son incarnation doit rendre immédiatement intelligible la vérité fictionnelle qu’elle exprime ;
3. **la Mise reste dans son pool** et est traitée normalement par son Prisme ;
4. son incarnation apporte **1 Réussite supplémentaire** à son orientation ;
5. au maximum **une Mise incarnée par orientation et par résolution** ;
6. le meneur peut incarner une Mise de l’adversité selon les mêmes règles.

> **L’incarnation ajoute une Réussite sans modifier la manière dont le Prisme traite le pool.**

Cette formulation est importante. Retirer le dé d’une Mise incarnée pourrait modifier artificiellement le comportement d’un Prisme fondé sur une somme, des doubles, des motifs, des explosions ou d’autres relations internes au tirage.

La résolution reste globale : on ne cherche pas à établir après coup quelle Mise précise « a réussi » dans le tirage.

Si les deux orientations recherchent systématiquement une incarnation, les Réussites supplémentaires peuvent tendre à se neutraliser et le geste devenir un automatisme.

Ce n’est pas nécessairement un défaut pour un jeu qui cherche précisément une pratique rituelle, performative ou fortement incarnée. Mais Regard n’impose pas cette esthétique à toutes les implémentations.

### Synchroniser le temps de table et le temps fictionnel

Le temps de réflexion des joueurs reste sans conséquence par défaut.

Le temps accumulé ne devient fictionnel que si quelque chose dans la scène **attend, évolue ou réagit réellement** pendant la délibération.

> **On ne sanctionne pas la délibération. On laisse le monde continuer lorsqu’il avait une raison de continuer.**

Le lien peut parfois être imposé ou autorisé par un **Facteur Cadre**, mais il n’est pas réductible à lui : un personnage qui s’impatiente, une menace qui approche ou une situation qui se dégrade peuvent émerger directement de l’évolution de la scène.

> **Quand le temps compte dans le monde, le temps de la table peut entrer en résonance avec lui.**

Lorsque cette évolution n’est pas déjà évidente, son effet devrait normalement devenir perceptible dans la fiction avant de devenir mécanique.

Le temps peut alors :

- faire apparaître une nouvelle Mise ;
- transformer une Mise existante ;
- changer le Cadre ;
- ou, si la situation change qualitativement, **transformer le Focus**.

Le principe n’est donc pas « réfléchir trop longtemps donne un malus ».

Il est que le monde peut continuer à exister pendant que la table délibère lorsque la fiction avait déjà une raison de ne pas attendre.

## Concevoir la pertinence

Les Prismes ne sont qu’un des points de design de Regard.

Un jeu doit également décider quelles familles de vérités fictionnelles il souhaite rendre visibles et naturellement disponibles à l’attention de la table.

Cette **grammaire de pertinence** peut s’organiser à partir :

- des cultures du monde ;
- de la magie ;
- des relations sociales ;
- des institutions ;
- des états du personnage ;
- des motifs du genre ;
- des tropes ;
- des conséquences accumulées dans la fiction.

La grammaire ressemble moins à une liste fermée qu’à une **cartographie sémantique**.

Deux jeux peuvent utiliser exactement le même Prisme et produire des expériences très différentes parce qu’ils n’apprennent pas à la table à regarder les mêmes choses.

La conception d’un jeu Regard ne consiste donc pas seulement à écrire une procédure aléatoire.

**Elle consiste à décider ce que le jeu apprend aux joueurs à remarquer.**

## Trope et pertinence

Un jeu peut produire un genre non seulement en donnant une structure mécanique à certaines actions, mais aussi en donnant une importance particulière aux **raisons** qui peuvent peser dans la fiction.

Les jeux Powered by the Apocalypse constituent un point de comparaison utile.

De nombreux PbtA font émerger leur genre en donnant une structure mécanique privilégiée à certains déclencheurs fictionnels, conséquences, Playbooks ou archétypes.

Regard peut agir à un autre niveau : laisser l’espace des actions largement ouvert tout en orientant les familles de vérités que le jeu apprend à considérer comme significatives.

Le trope peut alors émerger parce que le jeu apprend au joueur **quoi regarder, quelles relations reconnaître et quelles raisons laisser peser** dans ses propres actions.

Cette différence n’implique pas que Regard soit « plus libre » qu’un PbtA en toute circonstance. Elle montre un levier de design différent :

> **orienter ce qui compte sans nécessairement prescrire ce que le personnage doit tenter.**

## Concevoir l’évolution du personnage

Puisque l’évolution passe par les vérités persistantes, concevoir la progression d’un jeu Regard ne consiste pas à dessiner une courbe de niveaux.

Le game designer doit plutôt décider :

- quelles familles de vérités peuvent apparaître sur la feuille ;
- comment une expérience peut en créer une nouvelle ;
- quand une vérité peut être reformulée, remplacée ou supprimée ;
- qui possède l’autorité pour écrire ces transformations ;
- quels changements nécessitent une résolution et lesquels relèvent simplement d’un événement fictionnel établi ;
- comment le jeu rend visibles les transformations importantes.

> **La grammaire de pertinence définit le langage possible de l’évolution.**  
> **L’histoire du personnage écrit progressivement son espace de pertinence dans ce langage.**

Deux personnages ayant commencé avec des feuilles similaires peuvent ainsi diverger fortement sans qu’aucun soit « de niveau supérieur » à l’autre.

## Trois niveaux à ne pas confondre

### Regard

Le framework.

Il fournit la grammaire générale de résolution, ses concepts et ses points de variation.

### La configuration standard

Une implémentation de référence entièrement jouable.

Elle permet d’utiliser Regard immédiatement sans travail préalable de game design.

### Un jeu conçu avec Regard

Une implémentation qui choisit ce qu’elle conserve et ce qu’elle transforme pour produire une expérience propre à son univers.

Elle peut définir notamment :

- sa grammaire de pertinence ;
- la forme de ses feuilles et de ses mémoires fictionnelles ;
- ses Prismes ;
- ses Facteurs Cadres ;
- ses supports ;
- ses économies de jeu ;
- sa manière de faire évoluer les personnages ;
- ses outils de cohérence ou de régulation ;
- ses manières d’interpréter les conséquences ;
- sa politique d’activation du Mode Miroir ;
- les éventuelles formes de résonance entre le dispositif de table et la fiction.

## Une grille de conception

Pour concevoir un jeu avec Regard, demandez notamment :

1. **Qu’est-ce que ce monde ou ce genre apprend aux joueurs à remarquer ?**
2. **Quelles familles de vérités doivent être particulièrement visibles ?**
3. **Comment la feuille, le lore ou d’autres supports rendent-ils ces vérités mémorables sans les transformer en bonus automatiques ?**
4. **Qu’est-ce qui rend deux Mises distinctes ou redondantes ?**
5. **Quels Facteurs Cadres ferment réellement certaines possibilités ?**
6. **Le Focus porte-t-il sur une véritable incertitude, ou demande-t-il aux dés de décider quelque chose que la fiction a déjà établi ?**
7. **Si une vérité est déjà fixée, quelle question reste réellement ouverte autour d’elle ?**
8. **Le Zoom choisi correspond-il aux différences que la fiction souhaite encore distinguer ?**
9. **Quelles vérités poussent dans le sens de l’Intention et lesquelles poussent contre elle pour ce Focus précis ?**
10. **Plusieurs perspectives ou Prismes contribuent-ils à la même orientation ? Si oui, leurs sorties peuvent-elles devenir interopérables ?**
11. **L’orientation adverse possède-t-elle une perspective ou une logique propre qui mérite un Prisme particulier ?**
12. **Si elle n’en possède pas, faut-il employer le Mode Miroir ou le Prisme standard, et pourquoi ?**
13. **Si un Miroir est envisagé pour une résolution collective, existe-t-il réellement une perspective unique à refléter ?**
14. **Quelles conséquences doivent être explicites avant qu’un joueur s’y expose ?**
15. **La configuration standard suffit-elle à exprimer ce monde ?**
16. **Si non, quelle perspective mérite un Prisme particulier et que doit-il faire ressentir plutôt que simplement simuler ?**
17. **Le jeu a-t-il besoin de pools opposés, et plusieurs Prismes doivent-ils partager un format de sortie commun ?**
18. **Un autre support que le D6 rendrait-il cette expérience plus directe ?**
19. **Une correspondance entre le dispositif réel de table et la fiction rend-elle quelque chose du monde réellement perceptible, ou ajoute-t-elle seulement un gimmick ?**
20. **Quelles conséquences doivent retourner durablement dans la fiction ou sur la feuille ?**
21. **Comment les vérités du personnage peuvent-elles apparaître, se transformer et disparaître ?**
22. **Quels mécanismes maintiennent la cohérence lorsque la table interprète librement la pertinence ?**
23. **Quels garde-fous empêchent la recherche de Mises ou d’incarnations de redevenir une optimisation mécanique vide de sens fictionnel ?**

Chaque variation devrait pouvoir répondre à une question simple :

> **Qu’est-ce que cette règle permet au joueur de percevoir, de comprendre ou de ressentir du monde ?**