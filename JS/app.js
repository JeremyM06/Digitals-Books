/*****************************ACCEUIL*****************************/
var acceuil = {
  template: `
  <div class="d-flex flex-column align-items-center">
  <!--Carousel-->    
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="assets/images/dix-livres.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
        </div>
      </div>
      <div class="carousel-item">
        <img src="assets/images/digitalBooks1.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Bienôt en vente!!</h5>
          <p>Tu as l'angoisse de la boucle infinie, HTML CSS et JavaSccript sont des mots qui ne te refilent pas de boutons? Ce bouqin est fait pour toi</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="assets/images/digitalBooks.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a> 
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <br>
  <!--Presentation jumbotron-->
  <div class="jumbotron mjjJumbo">    
    <h1 class="display-4"><b>Digital Books!</b></h1>
    <p class="lead"><b>Un service prêt-porter</b></p>
    <hr class="my-4">
    <transition name="jumboShow">
      <div v-show="jumboShow">
        <p><b>Nous vous apportons un service prêts-à-porter avec nos livraisons dans les 48 heures!</b></p>
        <a @click="jumboShow =! jumboShow" class="btn btn-primary btn-lg" role="button">Qui sommes-nous?</a>
      </div>
    </transition>
  
    <transition name="jumboShow">
      <div v-show="!jumboShow" class="jumboShowInfo">
      <p><b>Nous sommes un start-up offrant à nos clients les meilleurs qualités de service de confiance. On vous offre un promo de livraison dès le premier achat.</b></p>
      <a @click="jumboShow =! jumboShow" class="btn btn-light btn-lg" role="button"><router-link class="nav-link active" to="/Contacts"><b>Contactez-nous</b></router-link>
      </a>
      </div>
    </transition>
    
  </div>
  </div>
  `,

  data:
    function () {
      return ({
        jumboShow: true,
      })
    },
}
/***************************BOUTIQUE COMPONENTS********************************************/

/************ CARDS *************/
var tooglecards = {
  template: `  
    <div class="cards">
        <img :src="myImg" title="image">
        <h5> {{myTitre}} </h5>
        <button @click="isShow =! isShow" class="btnCards">Résumé</button>  
              <div v-show="isShow">
                <p> {{mySynopsis}} </p>
              </div> 
              <div class="d-flex justify-content-around">
              <span> Quantité: {{myQuantite}} </span>
                <span>prixHt: {{myPrix}}€</span>
              </div>

    </div>               
  `,
  props: ["myImg", "myTitre", "myPrix", "mySynopsis", "myQuantite"],

  data:
    function () {
      return ({
        isShow: false,
      })
    },
}

/********  FORMULAIRE  *********/
var Formulaire = {
  template: `<div>
  <h1>Vous souhaitez un renseignement ?</h1>
  <p>Laissez nous vos coordonnées, nous vous recontacterons le plus rapidement possible.</p>
  <hr>
  <transition name="fondu" class="row">
  <div class="col mjjFormValid" v-show="!show">
  <h2>Vos informations ont bien été envoyées. À très vite 📚 😊 📚</h2>
  </div>
  </transition>

  <transition name="fondu">  
  <form @submit.prevent="show =! show" v-show="show">  
  <div class="form-row">
  <div class="form-group col-md-6">
<input v-model="nom" type="text" class="form-control" @keyup="createNewReferenceDe(),verifForm()" placeholder="nom" id="nom">
<p v-if="errors.nom" class="alert alert-danger">      
  {{ errors.nom }}</p>                                
</div></div>


<div class="form-row">
  <div class="form-group col-md-6">
  <input v-model="adresse" type="text" @keyup="createNewReferenceDe(),verifForm()" class="form-control" id="adresse" placeholder="Adresse">
  <p v-if="errors.adresse" class="alert alert-danger">      
  {{ errors.adresse }}</p>                              
  </div>    
</div>

<div class="form-row" @click="createNewReferenceDe(),verifForm()">
  <div class="form-group col-md-6">
  <select class="form-control" v-model="cdpostal">
    <option value="">x-- SELECTIONNER CODE POSTALE --x</option>
    <option v-for="recher in rechers" :key="recher.id">
    {{ recher.cdpostal }}
    </option>
  </select>
  <p v-if="errors.cdpostal" class="alert alert-danger">      
  {{ errors.cdpostal }}</p>                                  
  </div>
  </div>


<div class="form-row"  @click="createNewReferenceDe(),verifForm()">
<div class="form-group col-md-6">
<select class="form-control" v-model="ville">
      <option value="">x-- SELECTIONNER UNE VILLE --x</option>
      <option v-for="recher in rechers" :key="recher.id">
      {{ recher.ville }}
      </option>
  </select>
<p v-if="errors.ville" class="alert alert-danger">      
{{ errors.ville }}</p>                                  
</div>
</div>

<!--MG-D09-->
<div >                
 <button type="submit" class="btn btn-primary":disabled="isDisabled">Envoyer</button> 
</div>
<!--MG-F09-->
</form>
</transition>
</div>`,
  methods: {
    isAText: function (txt) {
      if (isNaN(txt) && txt !== "null") {

        return true;
      } else {

        return false;
      }
    },
    createNewReferenceDe() {
      //reinitialisation du tableau des erreurs
      this.errors = {};
      this.reference = "";
      this.Indout = true;   //MG 09

      //Verifier si tous les champs nécessaires sont renseignés

      if (this.nom == "") {                                   //MG 09
        this.errors.nom = "Nom: obligatoire !!";
        this.Indout = false;   //MG 11

      } else if ((!isNaN(this.nom))) {
        this.errors.nom = "Nom: Erreur de saisi !!";
        this.Indout = false;   //MG 11
      } else {
        this.nameOk = true;
      }

      if (this.adresse == "") {                                   //MG 09
        this.errors.adresse = "Adresse: obligatoire !!";
        this.Indout = false;   //MG 11
      } else if ((!isNaN(this.adresse))) {
        this.errors.adresse = "adresse: Erreur de saisi !!";
        this.Indout = false;   //MG 11
      } else {
        this.adressOk = true;
      }

      if (this.cdpostal === null) {
        this.errors.cdpostal = "code postale: obligatoire !!";
        this.Indout = false;   //MG 11

      } else if ((isNaN(this.cdpostal))) {
        this.errors.cdpostal = "code postale: Erreur de saisi !!";
        this.Indout = false;   //MG 11
      } else {
        this.postalOk = true;
      }


      if (this.ville == "") {                                   //MG 09
        this.errors.ville = "ville: obligatoire !!";
        this.Indout = false;   //MG 11

      } else if ((!isNaN(this.ville))) {
        this.errors.ville = "ville: Erreur de saisi !! !!";
        this.Indout = false;   //MG 11
      } else {
        this.villeOk = true;

      }




      console.log(this.errors);  //MG 09
      console.log(this.Indout);  //MG 09
    },
    verifForm: function () {
      if (this.nameOk && this.adressOk && this.postalOk && this.villeOk) {
        this.isDisabled = false;
        console.log(this.nameOk, this.adressOk, this.postalOk, this.villeOk)
      }
    }
  },

  data: function () {
    return {
      rechers: [
        { id: 0, ville: "Nice", cdpostal: '06000', },
        { id: 1, ville: "Cagnes sur mer", cdpostal: '06800', },
      ],
      btnOut: true,
      nameOk: false,
      adressOk: false,
      postalOk: false,
      villeOk: false,
      Indout: false,
      isDisabled: true,
      show: true,
      nom: "",
      adresse: "",
      cdpostal: null,
      ville: "",
      errors: "",
      reference: null,
    }

  }
};
/********************  BOUTIQUE  ********************/
var boutique = {
  template: `
<div class="container-fluid boutique" v-on:mousemove.once="getLsPanier(),getLsBooks(),getLsBooks2(),total()">
    <h1 class="text-center"><u>Nos livres</u></h1>
  <div class="d-flex flex-column col-3 mjjsearchBar">
    <label class="text-white " for="recherche"><b>manga - thriller - </b></label>
    <input v-model="search" placeholder="Rechercher" id="recherche">
  </div>
  <div class="row">
      <div class="col-sm text-center d-flex justify-content-center flex-wrap ">
        <div class="mjjCardsBuy"  v-for="livre in livres"
        :key="livre.id"
        :class="[livre.categorie]"
        v-if='search==livre.categorie || search=="" || search==livre.name'>
          <div>
            <tooglecards :my-img="livre.image"
            :my-titre="livre.name"
            :my-prix="livre.prixht"
            :my-synopsis="livre.mySynopsis"
            :my-quantite="livre.quantite"
            >             
            </tooglecards>
            <button @click="addPanier(livre.id)" class="btnAchat">Buy</button> 
          </div>
        </div>
      </div>
      
      
      <div v-show="show" class="col-sm-4 text-center">        
            <div >
              <h3>Mon Panier</h3>
              <div class="d-flex align-items-center justify-content-between mjjPanier" v-for="(panier,index) in paniers" :key="index">  
                  <img :src="panier.image" :title="panier.name" />    
                  <p> {{panier.name}} </p>
                  <p>Prix: {{panier.prixht}}€ H.T </p>
                  <img @click="suppr(index)" src="assets/images/kisspng.png">
              </div>
              <div class="d-flex align-items-center justify-content-between mjjPanier" id="mjjancre"  >
                  <h4>Total:</h4>
                  <span>  H.T : {{ totalht }}€ </span>
                  <span> TVA 20%: {{ tva }}€ </span>
                  <span> {{ prixttc }} € TTC </span>
              </div>
                <button class="btn btn-success" @click="commandShow =! commandShow" >🤗 Commander 🤗</button>
                <Formulaire v-show="commandShow"></Formulaire>
            </div>
      </div>
      <div class="mjjBlockPanier">
        <a href="#"><img class="iconePanier" @click="show =! show" src="./assets/images/panier.png" alt="icone panier" title="panier"/></a>
        <span class="panierLgt"> {{paniers.length}} </span>
      </div>  

  </div>
</div>`,

  components: { tooglecards, Formulaire },
  data: function () {
    return {
      livres: [
        {
          id: 0,
          name: "La forêt des ombres",
          image: "./assets/images/foretDesOmbres.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "23/08/2007",
          mySynopsis: "Paris, hiver 2006. Arthur Doffre, milliardaire énigmatique, est sur le point de réaliser un rêve vieux de vingt-cinq ans : ressusciter un tueur en série, le Bourreau 125, dans un livre. Un thriller que David Miller, embaumeur de profession et auteur d'un premier roman remarqué, a un mois pour écrire contre une forte somme d'argent. Reclus dans un chalet en pleine Forêt-Noire, accompagné de sa femme et de sa fille, de Doffre et de sa jeune compagne, David se met aussitôt au travail. Mais il est des fantômes que l'on ne doit pas rappeler, et la psychose saisit un à un tous les occupants de la ténébreuse demeure cernée par la neige...",
          prixht: 12.99,
        }, {
          id: 1,
          name: "Code Game",
          image: "./assets/images/CodeGame.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "19/02/2016",
          mySynopsis: "David Archer est de retour avec une vengeance avec son nouveau héros, Noah Wolf. Après que les fans ont déliré au sujet de sa première série, The Sam Prichard Novels, Archer est maintenant sur le point de revenir encore plus fort. Les gens jettent déjà des noms comme Mitch Rapp et Alex Cross, mais ne me croisez pas sur parole. Son nom devient connu parmis tous les habitants!",
          prixht: 11.99,
        }, {
          id: 2,
          name: "Darkest Before The Dawn",
          image: "./assets/images/DarkestBeforeDawn.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "06/10/2017",
          mySynopsis: "Michael continue de travailler pour tenir la promesse de son amour, mais le monde n'est pas comme auparavant. Maintenant, il ya une erreur qu’il a fait des siècles dans le passé en marchant autour, il a besoin de rectifier. Pour compliquer les choses, un groupe hors de l’Angleterre croit que le sang de Michael sera exactement ce dont ils ont besoin pour leur entreprise. Alors qu’ils font sortir les vampires de la rue en même temps. De plus, les efforts déployés pour rassembler les pièces de navires du Clan Sacré commencent à se rassembler. Malheureusement, personne ne souhaite aider Michael et sa nouvelle famille.",
          prixht: 12.99,
        }, {
          id: 3,
          name: "After Shocks",
          image: "./assets/images/AfterShocks.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "29/09/2020",
          mySynopsis: "Lorsqu'un tremblement de terre de magnitude 7,8 frappe la Californie, Ruby est piégée dans une laverie automatique avec Charlie, un garçon avec qui elle a eu sa première conversation quelques instants auparavant. Elle ne peut rien voir au-delà des décombres sous lesquels elle est piégée, mais elle est sûre que quelqu'un viendra bientôt les sauver.",
          prixht: 13.99,
        }, {
          id: 4,
          name: "Les Dents de la Mer",
          image: "./assets/images/Jaws.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "06/04/2016",
          mySynopsis: "Été 1975, sur l'île d'Amity, peu avant le début de la période estivale. Un soir, une jeune femme un peu éméchée abandonne son petit ami qui s'est assoupi sur la plage pour aller se baigner.Mais, après quelques brasses, elle se fait happer par un grand requin blanc venu des profondeurs. Son cadavre mutilé sera retrouvé le lendemain matin sur la grève.Début de la psychose... D'autant qu'un enfant disparaît peu de temps après, qu'un homme est dévoré vivant par le squale...Faut-il interdire l'accès à la plage ? Les autorités sont partagées. Seul consensus : il faut éliminer le monstre. Quint, le pêcheur, Brody, le chef de la police, et Hooper, le jeune océanographe expert en requins – et en femmes – vont alors engager une lutte sans merci contre le monstre mangeur d'hommes.",
          prixht: 7.99,
        }, {
          id: 5,
          name: "Hunger Games: La Balade du Serpent et de l'Oiseau Chanteur",
          image: "./assets/images/HungerGames.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "20/05/2020",
          mySynopsis: "Dévoré d'ambition, Poussé par la compétition, Il va découvrir que la soif de pouvoir a un prix, C'est le matin de la Moisson qui doit ouvrir la dixième édition annuelle des Hunger Games. Au Capitole, Coriolanus Snow, dix-huit ans, se prépare à devenir pour la première fois mentor aux Jeux. L'avenir de la maison Snow, qui a connu des jours meilleurs, est désormais suspendu aux maigres chances de Coriolanus. Il devra faire preuve de charme, d'astuce et d'inventivité pour faire gagner sa candidate. Mais le sort s'acharne. Honte suprême, on lui a confié le plus misérable des tributs : une fille du district Douze. Leurs destins sont désormais liés. Chaque décision peut les conduire à la réussite ou à l'échec, au triomphe ou à la ruine. Dans l'arène, ce sera un combat à mort.",
          prixht: 19.99,
        }, {
          id: 6,
          name: "Lone Wolf",
          image: "./assets/images/LoneWolf.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "13/07/2016",
          mySynopsis: "David Archer est de retour avec une vengeance avec son nouveau héros, Noah Wolf. Après que les fans ont déliré au sujet de sa première série, The Sam Prichard Novels, Archer est maintenant sur le point de revenir encore plus fort. Les gens jettent déjà des noms comme Mitch Rapp et Alex Cross, mais ne me croisez pas sur parole. Le nom de Archer devienra un nom familier! USA TODAY BESTSELLING SERIES Noah Wolf est l’un des assassins les plus meurtriers du monde, complètement dépourvu d’émotion et de conscience. Ces facteurs, que d’autres considéreraient comme des handicaps, lui permettent d’évaluer la situation instantanément, et d’un point de vue purement logique. Ses décisions et ses actions ne sont jamais entachées d’émotions ou de sentiments, ce qui le libère de tout risque de peur ou de culpabilité.",
          prixht: 11.99,
        }, {
          id: 7,
          name: "Rogue Avenger",
          image: "./assets/images/RogueAvenger.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "22/08/2005",
          mySynopsis: "Ils ont volé son avenir. Il a volé leur sous-marin. Maintenant, il doit faire une chose ...... et il peut se faire tuer. Quand Jake s’est réveillé à bord du sous-marin de missiles balistiques, l’USS Colorado, dans une flaque de son propre sang. La blessure était grave, mais ce n’est pas ce qui a ruiné sa carrière. L’effort de sauvetage l’a fait. Son prochain coup est peut-être le seul qui reste. Jeté aux loups pour couvrir le secret d’un officier, Jake ne sera pas leur agneau sacrificiel. Quand un marchand d’armes international le recrute pour voler le Colorado et vendre ses ogives nucléaires, le patriotisme et la vengeance s’affrontent dans le cœur de Jake. Est-ce qu’il sera d’accord ? Est-ce qu’il peut s’en sortir ? Aveuglé par la rage et incertain de son avenir, il se retrouve au centre d’un complot perfide. En qui peut-il avoir confiance ? Sa soif de vengeance le détruira-t-elle ? Vous allez adorer ce thriller militaire, parce que tout le monde aime la lutte pour la vérité.",
          prixht: 11.99,
        }, {
          id: 8,
          name: "Rogue Hunter",
          image: "./assets/images/RogueHunter.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "01/03/2016",
          mySynopsis: "UNE NATION ASSIÉGÉE... Cela fait plus de quatre ans que l’annexion de la Crimée et l’ONU a décidé de prendre des mesures militaires secrètes pour desserrer l’emprise des envahisseurs russes. Les cibles sont un pont stratégique et des pipelines sous-marins qui alimentent la péninsule occupée en gaz naturel, en électricité et en télécommunications en provenance de Russie continentale. Si ces lignes de vie critiques peuvent être coupées, les résistants ukrainiens pourraient avoir une chance de reconquérir l’indépendance. Pour que cela soit possible, l’ancien officier de marine américain Jake Slate et le marchand d’armes international Pierre Renard doivent mener une guerre clandestine contre la marine russe. Leurs ennemis sont aidés par des dauphins armés, qui connaissent l’environnement océanique bien mieux que n’importe quel humain peut. Si ce n’est pas une mission suicide, c’est assez sacrément proche...",
          prixht: 12.99,
        }, {
          id: 9,
          name: "The Bourne Identity",
          image: "./assets/images/TheBourneIdentity.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "19/06/1986",
          mySynopsis: "Un homme est retrouvé grièvement blessé au large de Marseille. Soigné par un médecin, il se révèle amnésique, mais son corps montre des traces de chirurgie esthétique. Il décide de découvrir son identité en partant des indications trouvées dans un micro-film implanté sous sa peau. Bourne découvre peu à peu ses talents: il connaît plusieurs langues étrangères, sait se battre et possède une grande capacité à se travestir et assumer des rôles. À Zurich, il se rend dans une banque où il a accès à un compte en banque très bien fourni. Poursuivi par de mystérieux tueurs à la solde de Carlos, un tueur à gages mondialement réputé, il rencontre la femme qui …",
          prixht: 4.99,
        }, {
          id: 10,
          name: "The Loop",
          image: "./assets/images/TheLoop.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "29/09/2020",
          mySynopsis: "Une petite ville nichée dans les collines du centre de l’Oregon devient l’épicentre d’une épidémie de violence lorsque les enfants adolescents de plusieurs cadres de la société de biotechnologie locale tombent malades et agressivement meurtriers. Soudain, la ville est sur le bord, et tout le monde doit faire tout ce qu’il faut juste pour survivre ...",
          prixht: 24.99,
        }, {
          id: 12,
          name: "Dragon Ball Super",
          image: "./assets/images/Dragon-Ball-Super-manga.jpg",
          categorie: "manga",
          quantite: 5,
          dateParution: "04/10/2020",
          mySynopsis: "Le criminel Moro et les évadés de la prison galactique qui sont maintenant à son service sillonnent l’univers à la recherche de planètes riches en énergie vitale !! C’est ainsi que débarquent sur Terre une bande de bandits galactiques, dont Seven-Three qui possède le pouvoir de copier les aptitudes de ses adversaires. En l’absence de Goku, Piccolo et les autres doivent y faire face ! ",
          prixht: 6.90,
        }, {
          id: 13,
          name: "My Hero Academia",
          image: "./assets/images/My-Hero-Academia-manga.jpg",
          categorie: "manga",
          quantite: 5,
          dateParution: "09/06/2016",
          mySynopsis: "Confronté au test d'aptitudes d'Eraserhead, Deku échappe de justesse au renvoi en réussissant à concentrer le One for All dans un seul doigt au moment crucial ! Dernier du classement avec une seule performance surhumaine à son actif, il compte bien...",
          prixht: 6.60,
        }, {
          id: 14,
          name: "One piece",
          image: "./assets/images/One-Piece-manga.jpg",
          categorie: "manga",
          quantite: 5,
          dateParution: "07/10/2020",
          mySynopsis: "Au cours de son périple aux côtés de Barbe Blanche, Oden fait la connaissance d’un homme que le destin semble avoir placé sur sa route : le grand Roger ! Qu’apportera donc au monde la rencontre de ces deux hommes ?! Pendant ce temps, dans le pays des Wa, Orochi profite de l’absence d’Oden pour manœuvrer en coulisses…",
          prixht: 6.90,
        }, {
          id: 15,
          name: "One Punch Man",
          image: "./assets/images/One-Punch-Man-manga.jpg",
          categorie: "manga",
          quantite: 5,
          dateParution: "10/09/2020",
          mySynopsis: "Saitama est trop puissant ; tellement puissant qu'il élimine tous les monstres les plus farouches avec un simple coup de poing. Découvrez l'histoire du plus puissant des super-héros dans ce manga qui va vous mettre K.O. !! Le combat décisif de l...",
          prixht: 6.90,
        }, {
          id: 16,
          name: "Samurai 8 - la légende de Hachimaru",
          image: "./assets/images/Samurai-8-la-legende-de-Hachimaru-manga.jpg",
          categorie: "manga",
          quantite: 5,
          dateParution: "24/09/2020",
          mySynopsis: "LE RETOUR DE MASASHI KISHIMOTO, L'AUTEUR DE NARUTO !",
          prixht: 6.85,
        }, {
          id: 17,
          name: "The Legend of Zelda - Twilight Princess",
          image: "./assets/images/The-Legend-of-Zelda-Twilight-Prince-manga.jpg",
          categorie: "manga",
          quantite: 5,
          dateParution: "14/08/2019",
          mySynopsis: "Après un an et demi passé dans le paisible village de Toal, le jeune Link peut être fier de lui : sa gentillesse, son courage et sa dévotion lui ont permis d'être totalement intégré dans cette communauté. Mais Link a peur que les villageois finissent par découvrir le terrible secret de son passé, au point qu'il n'en dort plus la nuit ! Et si ses cauchemars annonçaient le retour imminent des êtres maléfiques du monde de la pénombre ? Comment faire pour les empêcher de semer à nouveau le chaos ?",
          prixht: 7.99,
        }, {
          id: 18,
          name: "Hunter X Hunter",
          image: "./assets/images/Hunter-X-Hunter.jpg",
          categorie: "manga",
          quantite: 5,
          dateParution: "10/03/2020",
          mySynopsis: "Le départ. Gon, le héros de notre histoire, décide de quitter son village natal pour aller passer le difficile examen qui l'autorisera à devenir un hunter et à marcher sur les traces de son père. En chemin, il fait la connaissance de Léolio et Kurapika qui vont rapidement devenir ses amis et compagnons de route. Tous trois parviennent sur le lieu de la première épreuve et doivent faire leurs preuves au milieu d'une horde de participants très motivés.C'est la rencontre essentielle de Gon, Léolio et Kurapika. Gon fait...",
          prixht: 6.85,
        }, {
          id: 19,
          name: "L'Attaque des Titans",
          image: "./assets/images/L-attaque-des-titans-tome-1.jpg",
          categorie: "manga",
          quantite: 5,
          dateParution: "25/11/2020",
          mySynopsis: "Désormais détenteur du pouvoir de l’Originel, Eren décide, pour le bien de l’île du Paradis, d’exterminer tout le reste de l’humanité,  et se met en marche à la tête d’une gigantesque meute de Titans. Incapables de déterminer s’il faut les considérer comme une bénédiction ou au contraire comme une calamité, Mikasa, Armin et les autres  choisissent de faire tout leur possible pour sauver le monde...",
          prixht: 6.95,
        }, {
          id: 20,
          name: "Détective Conan",
          image: "./assets/images/Detective-Conan.jpg",
          categorie: "manga",
          quantite: 5,
          dateParution: "23/10/2020",
          mySynopsis: "Victime d'une mystérieuse organisation d'hommes en noir qui l'ont empoisonné et l'ont ainsi fait redevenir un enfant, cet adolescent se retrouve contraint de retourner à l'école primaire et, tout en veillant à ce que le secret de sa nouvelle identité soit préservé, il mène des enquêtes et résout des affaires ténébreuses et...",
          prixht: 6.85,
        }, {
          id: 21,
          name: "A La Croisée des Mondes",
          image: "./assets/images/A_la_croisee_des_mondes.jpg",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "05/12/2007",
          mySynopsis: "Rebecca, 12 ans, est une orpheline rebelle qui vit à Jordan College, un établissement de l'Université d'Oxford, dans un monde parallèle qui ressemble au nôtre mais qui a évolué de façon un peu différente. Elle a pour compagnon Pantalaimon, son dæmon, un être capable de prendre de nombreuses formes animales.",
          prixht: 24.99,
        }, {
          id: 22,
          name: "Eragon: Le Cycle de l'Héritage",
          image: "./assets/images/Eragon_Le_Cycle_de_l_heritage_tome_1.png",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "04/03/2010",
          mySynopsis: "Une petite ville nichée dans les collines du centre de l’Oregon devient l’épicentre d’une épidémie de violence lorsque les enfants adolescents de plusieurs cadres de la société de biotechnologie locale tombent malades et agressivement meurtriers. Soudain, la ville est sur le bord, et tout le monde doit faire tout ce qu’il faut juste pour survivre ...Eragon n'a que quinze ans, mais le destin de l'Empire eEragon n'a que quinze ans, mais le destin de l'Empire est désormais entre ses mains !C'est en poursuivant une biche dans la montagne que le jeune Eragon, quinze ans, tombe sur une magnifique pierre bleue, qui s'avère être... un oeuf de dragon !",
          prixht: 12.99,
        }, {
          id: 23,
          name: "Harry Potter",
          image: "./assets/images/Harry_Potter.jpg",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "07/02/2019",
          mySynopsis: "Une rentrée fracassante en voiture volante, une étrange malédiction qui s’abat sur les élèves, cette deuxième année à l’école des sorciers ne s’annonce pas de tout repos! Entre les cours de potions magiques, les matches de Quidditch et les combats de mauvais sorts, Harry et ses amis Ron et Hermione trouveront-ils le temps de percer le mystère de la Chambre des Secrets?",
          prixht: 24.99,
        }, {
          id: 24,
          name: "Twilight",
          image: "./assets/images/Twilight.jpg",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "02/11/2006",
          mySynopsis: "Rejetée par celui qu'elle aime passionnément, Bella ne s'en relève pas. Fascinée par un vampire, comment pourrait-elle retrouver goût à la pâle existence humaine ? Pourtant il faut vivre. Mais Bella n'a de goût pour rien, sinon le danger : alors elle entend la voix d'Edward, et éprouve l'illusion de sa présence. Comme s'il ne l'avait pas abandonnée, comme s'il tenait encore à elle. Bella échappera-t-elle à cette obsession amoureuse qui la hante ? A quel prix ?",
          prixht: 19.99,
        }, {
          id: 25,
          name: "L'arbre de l'été",
          image: "./assets/images/L_Arbre_de_l_ete_La_Tapisserie_de_Fionavar_tome_1.jpg",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "22/05/2006",
          mySynopsis: "Ils sont cinq, femmes et hommes, tous vivant à Toronto au Canada ; ils sont jeunes, étudiants ou déjà dans la vie active, tous rationnels. Or, les voici projetés dans Fionavar, le Grand Univers dont le nôtre n'est qu'une ombre bien pâle! Malgré la protection offerte par Mantel d'Argent le magicien, ils sont aussitôt pris dans les premières escarmouches de la guerre qui oppose les forces des Lumières à celles des Ténèbres.",
          prixht: 21.99,
        }, {
          id: 26,
          name: "L'Homme Rune: Le Cycle des Démons",
          image: "./assets/images/L_Homme_Rune_Le_Cycle_des_demons_tome_1.jpg",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "02/11/2009",
          mySynopsis: "Parfois, il existe de très bonnes raisons d'avoir peur du noir... Arlen a onze ans et vit avec ses parents dans leur petite ferme. Lorsque la nuit tombe sur le monde d'Arlen, une brume étrange s'élève du sol ; une brume qui promet la mort aux idiots qui osent affronter les ténèbres, car des démons affamés émergent de ces vapeurs pour se nourrir des vivants.",
          prixht: 18.99,
        }, {
          id: 27,
          name: "Le Codex de Paris",
          image: "./assets/images/Le_codex_de_Paris.jpg",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "10/01/2020",
          mySynopsis: "l fait profil bas pour ne pas attirer l’attention de la police ou de n’importe quel humain. Mais quand une femme en détresse vient le supplier de retrouver son époux, Germain accepte. Il ne se doute pas que cette affaire va le mettre sur la piste d’un dangereux codex et du démon qui a un jour transformé Germain en vampire.",
          prixht: 11.99,
        }, {
          id: 28,
          name: "Le Seigneur des Anneaux",
          image: "./assets/images/Le_Seigneur_des_anneaux_Integrale.jpg",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "22/11/2012",
          mySynopsis: "Une contrée paisible où vivent les Hobbits. Un anneau magique à la puissance infinie. Sauron, son créateur, prêt à dévaster le monde entier pour récupérer son bien. Frodon, jeune Hobbit, détenteur de l'Anneau malgré lui. Gandalf, le Magicien, venu avertir Frodon du danger. Et voilà déjà les Cavaliers Noirs qui approchent...",
          prixht: 17.99,
        }, {
          id: 29,
          name: "Le Monde de Narnia",
          image: "./assets/images/Le_Monde_de_Narnia.jpg",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "09/11/2010",
          mySynopsis: "C'est une histoire qui s'est passée il y a très longtemps, à l'époque où votre grand-père était un petit garçon. Une histoire très importante, car c'est elle qui permet de comprendre comment les échanges entre notre monde et le pays de Narnia ont commencé. A cette époque, Sherlock Holmes vivait encore à Baker Street.",
          prixht: 24.99,
        }, {
          id: 30,
          name: "Le Prisme Noir Le Porteur de Lumière",
          image: "./assets/images/Le_Prisme_noir_Le_Porteur_de_lumiere_tome_1.jpg",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "21/10/2011",
          mySynopsis: "Plus la lumière est vive, plus l'ombre est profonde. Gavin Guile est le Prisme, l'homme le plus puissant du monde. Empereur et magicien, il est le gardien d'une paix bien fragile. Et d'un terrible secret. Les Prismes ne vivent jamais vieux, et Gavin sait exactement combien de temps il lui reste : cinq ans... et cinq missions impossibles à accomplir.",
          prixht: 25.00,
        }],
      livres2: [
        {
          id: 0,
          name: "Baisers de sirène",
          image: "./assets/images/arrBoutique/mangaxbaisersdesirene.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "23/08/2007",
          prixht: 27.40,
        }, {
          id: 1,
          name: "Quand un ange s'invite",
          image: "./assets/images/arrBoutique/mangax03_39295.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 11.99,
        }, {
          id: 2,
          name: "Nami S.O.S.!",
          image: "./assets/images/arrBoutique/mangax05_77372.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 17.45,
        }, {
          id: 3,
          name: "Le baiser du diable",
          image: "./assets/images/arrBoutique/mangax06_47802.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 15.60,
        }, {
          id: 4,
          name: "Lunes et petites cerises",
          image: "./assets/images/arrBoutique/mangaxlunesetpetitescerises.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 23.00,
        }, {
          id: 5,
          name: "La Vie Ordinaire de Nagi-Chan",
          image: "./assets/images/arrBoutique/mangaxlavieordinairedenagichan.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 12.90,
        }, {
          id: 6,
          name: "Le coffret de Jade",
          image: "./assets/images/arrBoutique/mangax05_77372.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 45.00,
        }, {
          id: 7,
          name: "Essayez-moi",
          image: "./assets/images/arrBoutique/mangax10_47801.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 23.00,
        }, {
          id: 8,
          name: "Kiss me kiss you",
          image: "./assets/images/arrBoutique/mangax11_42687.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 23.00,
        }, {
          id: 9,
          name: "Les copines du club de natation",
          image: "./assets/images/arrBoutique/mangax14_47799.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 52.00,
        }, {
          id: 10,
          name: "Dark Wirbel : Conflit",
          image: "./assets/images/arrBoutique/mangax15_47798.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 12.50,
        }],

      nameTempo: "",
      search: "",
      couleur: "",
      couleur1: "",
      prixttc: 0,
      tva: 0,
      totalht: 0,
      show: false,
      commandShow: false,
      paniers: [],

    }
  },
  methods: {
    addPanier: function (index) {
      this.livres[index].quantite--;
      this.paniers.push(this.livres[index]);
      console.log(this.paniers);
      this.total();
      this.saveLsPanier();
      this.saveLsBooks();
    },

    suppr: function (index) {
      this.nameTempo = this.paniers[index].name;
      this.livres.forEach(element => {
        if (element.name == this.nameTempo) {
          element.quantite++;
        }
      });
      this.livres2.forEach(element => {
        if (element.name == this.nameTempo) {
          element.quantite++;
        }
      });

      console.log(this.nameTempo);
      this.paniers.splice(index, 1);
      this.total();
      this.saveLsPanier();
      this.saveLsBooks();

    },
    total: function () {
      this.prixttc = 0;
      this.totalht = 0;
      this.paniers.forEach(element => {
        Math.round((this.totalht += element.prixht) * 100) / 100;
      });
      this.prixttc = Number(Math.round((this.totalht * 1.2) * 100) / 100);
      this.tva = Number(Math.round((this.prixttc - this.totalht) * 100) / 100);
    },
    /**Recupere en local storage */
    getLsPanier: function () {
      if (!window.localStorage.paniers) {
        window.localStorage.setItem("paniers", "");
      } else {
        this.paniers = JSON.parse(window.localStorage.getItem('paniers'));
      }
    },
    /**Enregistre en local storage */
    saveLsPanier: function () {
      window.localStorage.setItem('paniers', JSON.stringify(this.paniers));
    },
    /**Recupere livres local storage */
    getLsBooks: function () {
      if (!window.localStorage.livres) {
        window.localStorage.setItem("livres", "");
      } else {
        this.livres = JSON.parse(window.localStorage.getItem('livres'));
      }
    },
    /**Recupere livres2 local storage */
    getLsBooks2: function () {
      if (!window.localStorage.livres2) {
        window.localStorage.setItem("livres2", "");
      } else {
        this.livres2 = JSON.parse(window.localStorage.getItem('livres2'));
      }
    },

    /**Enregistre livres et livres2 en local storage */
    saveLsBooks: function () {
      window.localStorage.setItem('livres', JSON.stringify(this.livres));
      window.localStorage.setItem('livres2', JSON.stringify(this.livres2));
    },


  },
};

/****************************************PAGE CONTACT**************************************/
var contacts = {
  template: `<div class="container-fluid contacts">
    <h1 id="fun">Vous souhaitez un renseignement ?</h1>
    <p>Laissez nous vos coordonnées, nous vous recontacterons le plus rapidement possible.</p>
    <hr>
    <transition name="fondu" class="row">    
    <div class="col-md-8 offset-sm-2 mjjFormValid" v-show="!show">
      <h2>Vos informations ont bien été envoyées.<br> À très vite<br> 📚 😊 📚</h2>
      <button @click="show =! show"  type="button" class="btn btn-primary" >Retour</button>

    </div>
    </transition>

    <transition name="fondu" class="row">

    <form class ="offset-sm-4" @submit.prevent="show =! show, clear()" v-show="show">
    <div class="form-row">
    <div class="form-group col-md-6">
    <label for="name">Nom</label>
    <input v-model="name" @keyup="isAName(name)" type="text" class="form-control" :class="{mjjalertform : nameShow}" id="name" placeholder="Dupond">
    <span class="textFormAlert" v-show="nameShow">Le nom n'est pas conforme</span>
    </div>    
    </div>
    
    <div class="form-row">
    <div class="form-group col-md-6">
    <label for="firstName">Prénom</label>
    <input v-model="firstName" @keyup="isAFirstName(firstName)" type="text" class="form-control" :class="{mjjalertform :firstNameShow}" placeholder="Michel" id="firsName">
    <span class="textFormAlert" v-show="firstNameShow">Le prénom n'est pas conforme</span>
    </div>
    </div>

  <div class="form-row" >
    <div class="form-group col-md-6" >
    <label for="email">Email address</label>
    <input v-model="mail"  type="text" @keyup="isAMail(mail)" class="form-control" :class="{mjjalertform : mailShow}" id="email" placeholder="lecteur...@mail.com">
    <span class="textFormAlert" v-show="mailShow">Le mail n'est pas conforme</span>
    </div>
    </div>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="tel">Telephone</label>
      <input v-model="tel" type="text" @keyup="isATel(tel)" placeholder="tel" class="form-control" :class="{mjjalertform : telShow}" id="tel">
      <span class="textFormAlert" v-show="telShow">Le téléphone n'est pas conforme</span>

      </div>
  </div>
  <button  type="submit" class="btn btn-primary" :disabled="isDisabled">Envoyer</button>
</form>
</transition>
  </div>`,

  methods: {
    clear: function () {
      this.name = "";
      this.firstName = "";
      this.mail = "";
      this.tel = "";
    },
    isAName: function (txt) {
      if (isNaN(txt) && txt !== "null") {
        this.nameShow = false;
        this.nameOk = true;
      } else {
        this.nameShow = true;
        this.nameOk = false;
      }
      this.verifForm();
    },
    isAFirstName: function (txt) {
      if (isNaN(txt) && txt !== "null") {
        this.firstNameShow = false;
        this.firstNameOk = true;
      } else {
        this.firstNameShow = true;
        this.firstNameOk = false;
      }
      this.verifForm();

    },
    isAMail: function (mail) {
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail) && mail != "") {
        this.mailShow = false;
        this.mailOk = true;
      } else {
        this.mailShow = true;
        this.mailOk = false;
      }
      this.verifForm();

    },
    isATel: function (tel) {

      if (/^(\+33|0|0033)[1-9]\d{8}$/.test(tel) && tel != "") {
        this.telShow = false;
        this.telOk = true;

      } else {
        this.telShow = true;
        this.telOk = false;

      }
      this.verifForm();

    },
    verifForm: function () {
      if (this.nameOk && this.firstNameOk && this.mailOk && this.telOk) {
        console.log("retour ok");
        this.isDisabled = false;
      } else {
        console.log("retour nul");
        this.isDisabled = true;
      }
    },
  },

  data:
    function () {
      return ({
        isDisabled: true,
        mailShow: false,
        nameShow: false,
        firstNameShow: false,
        telShow: false,
        show: true,
        name: "",
        firstName: "",
        mail: "",
        tel: "",
        nameOk: false,
        firstNameOk: false,
        mailOk: false,
        telOk: false,

      })
    },

}
/**************************LIVRE D'OR***************************/
var livreOr = {
  template: `
  <div class="container mjj-livreOr">
    <div class="text-center">
    <h1>Le Livre d'Or</h1><br>
    </div>
    <br>
    <transition class="row" name="fondu">
    <div class="col-sm mjjFormValid" v-show="!show">
    <h2>Merci pour votre feedback! À très vite 😉</h2>
    </div>
    </transition>

    <transition class="row" name="fondu">
    <form class="offset-lg-3 col-sm" @submit.prevent="show =! show" v-show="show">
    
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="name"><b>Nom</b></label>
        <input v-model="name" type="text" class="form-control" @keyup="isAName(name)" :class="{mjjalertform : nameShow}" placeholder="Dupond" id="name">
      </div>    
    </div>
    
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="firstName"><b>Prénom</b></label>
        <input v-model="firstName" type="text" class="form-control" @keyup="isAFirstName(firstName)" :class="{mjjalertform : firstNameShow}" placeholder="Michel" id="firsName">
      </div>
    </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="email"><b>Email address</b> (facultatif)</label>
      <input v-model="mail" @keyup="isAMail(mail)" :class="{mjjalertform : mailShow}" class="form-control" id="email" placeholder="lecteur...@mail.com">
    </div>
  </div>
  <br>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="exampleFormControlTextarea1"><b>Message</b></label>
      <textarea v-model="text" class="form-control" @keyup="isAText(text)" :class="{mjjalertform : textShow}" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
  </div>
  <br>
  <button  type="submit" class="btn btn-lg col-2 btn-outline-secondary btn-block" :disabled="isDisabled"><b><b>Envoyer</b></b></button>
</form>
</transition>
</div>`,

  methods: {
    clear: function () {
      this.name = "";
      this.firstName = "";
      this.mail = "";
      this.text = "";
    },
    isAText(txt) {
      if (isNaN(txt) && txt !== "null") {
        this.textShow = false;
        this.textOk = true;

      } else {
        this.textShow = true;
        this.textOk = false;
      }
      this.verifForm();

    },

    isAName: function (txt) {
      if (isNaN(txt) && txt !== "null") {
        this.nameShow = false;
        this.nameOk = true;
      } else {
        this.nameShow = true;
        this.nameOk = false;
      }
      this.verifForm();
    },
    isAFirstName: function (txt) {
      if (isNaN(txt) && txt !== "null") {
        this.firstNameShow = false;
        this.firstNameOk = true;
      } else {
        this.firstNameShow = true;
        this.firstNameOk = false;
      }
      this.verifForm();

    },
    isAMail: function (mail) {
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail) && mail != "") {
        this.mailShow = false;
        this.mailOk = true;
      } else {
        this.mailShow = true;
        this.mailOk = false;
      }
      this.verifForm();

    },
    isATel: function (tel) {

      if (/^(\+33|0|0033)[1-9]\d{8}$/.test(tel) && tel != "") {
        this.telShow = false;
        this.telOk = true;

      } else {
        this.telShow = true;
        this.telOk = false;

      }
      this.verifForm();

    },
    verifForm: function () {
      if (this.nameOk && this.firstNameOk && this.textOk) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
  },

  data:
    function () {
      return ({
        isDisabled: true,
        mailShow: false,
        nameShow: false,
        firstNameShow: false,
        textShow: false,
        show: true,
        name: "",
        firstName: "",
        mail: "",
        nameOk: false,
        firstNameOk: false,
        mailOk: false,
        textOk: false,
      })
    },
}
/************ CARDS2 *************/
var tooglecards2 = {
  template: `  
    <div class="cards">
        <img :src="myImg" title="image">
        <h5> {{myTitre}} </h5>
        <div class="d-flex justify-content-around">
        <span> Quantité: {{myQuantite}} </span>
          <span>prixHt: {{myPrix}}€</span>
        </div>

</div>               
`,
  props: ["myImg", "myTitre", "myPrix", "mySynopsis", "myQuantite"],

  data:
    function () {
      return ({
        isShow: false,
      })
    },
}
/******************ANNEXE***********************/
var annexe = {
  template: `
<div class="container-fluid boutique" v-on:mousemove.once="getLsPanier(),getLsBooks(),getLsBooks2(),total()">
  <h1 class="text-center"><u>Nous n'avons rien vu...</u></h1><br>
  <div class="row">
      <div class="col-sm text-center d-flex justify-content-center flex-wrap ">
        <div class="mjjCardsBuy"  v-for="livre in livres2"
        :key="livre.id"
        :class="[livre.categorie]"
        >
          <div>
            <tooglecards2 :my-img="livre.image"
            :my-titre="livre.name"
            :my-prix="livre.prixht"
            :my-quantite="livre.quantite"
            >             
            </tooglecards2>
            <button @click="addPanier(livre.id)" class="btnAchat">Buy</button> 
          </div>
        </div>
      </div>
      
      
      <div v-show="show" class="col-sm-4 text-center">        
            <div >
              <h3>Mon Panier</h3>
              <div class="d-flex align-items-center justify-content-between mjjPanier" v-for="(panier,index) in paniers" :key="index">  
                  <img :src="panier.image" :title="panier.name" />    
                  <p> {{panier.name}} </p>
                  <p>Prix: {{panier.prixht}}€ H.T </p>
                  <button @click="suppr(index)">Suppr</button>
              </div>
              <div class="d-flex align-items-center justify-content-between mjjPanier" id="mjjancre"  >
                  <h4>Total:</h4>
                  <span>  H.T : {{ totalht }}€ </span>
                  <span> TVA 20%: {{ tva }}€ </span>
                  <span> {{ prixttc }} € TTC </span>
              </div>
                <button class="btn btn-success" @click="commandShow =! commandShow" >🤗 Commander 🤗</button>
                <Formulaire v-show="commandShow"></Formulaire>
            </div>
      </div>
      <div class="mjjBlockPanier">
        <a href="#"><img class="iconePanier" @click="show =! show" src="./assets/images/panier.png" alt="icone panier" title="panier"/></a>
        <span class="panierLgt"> {{paniers.length}} </span>
      </div>  

  </div>
</div>`,

  components: { tooglecards2, Formulaire },
  data: function () {
    return {
      livres: [
        {
          id: 0,
          name: "La forêt des ombres",
          image: "./assets/images/foretDesOmbres.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "23/08/2007",
          mySynopsis: "Paris, hiver 2006. Arthur Doffre, milliardaire énigmatique, est sur le point de réaliser un rêve vieux de vingt-cinq ans : ressusciter un tueur en série, le Bourreau 125, dans un livre. Un thriller que David Miller, embaumeur de profession et auteur d'un premier roman remarqué, a un mois pour écrire contre une forte somme d'argent. Reclus dans un chalet en pleine Forêt-Noire, accompagné de sa femme et de sa fille, de Doffre et de sa jeune compagne, David se met aussitôt au travail. Mais il est des fantômes que l'on ne doit pas rappeler, et la psychose saisit un à un tous les occupants de la ténébreuse demeure cernée par la neige...",
          prixht: 12.99,
        }, {
          id: 1,
          name: "Code Game",
          image: "./assets/images/CodeGame.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "19/02/2016",
          mySynopsis: "David Archer est de retour avec une vengeance avec son nouveau héros, Noah Wolf. Après que les fans ont déliré au sujet de sa première série, The Sam Prichard Novels, Archer est maintenant sur le point de revenir encore plus fort. Les gens jettent déjà des noms comme Mitch Rapp et Alex Cross, mais ne me croisez pas sur parole. Son nom devient connu parmis tous les habitants!",
          prixht: 11.99,
        }, {
          id: 2,
          name: "Darkest Before The Dawn",
          image: "./assets/images/DarkestBeforeDawn.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "06/10/2017",
          mySynopsis: "Michael continue de travailler pour tenir la promesse de son amour, mais le monde n'est pas comme auparavant. Maintenant, il ya une erreur qu’il a fait des siècles dans le passé en marchant autour, il a besoin de rectifier. Pour compliquer les choses, un groupe hors de l’Angleterre croit que le sang de Michael sera exactement ce dont ils ont besoin pour leur entreprise. Alors qu’ils font sortir les vampires de la rue en même temps. De plus, les efforts déployés pour rassembler les pièces de navires du Clan Sacré commencent à se rassembler. Malheureusement, personne ne souhaite aider Michael et sa nouvelle famille.",
          prixht: 12.99,
        }, {
          id: 3,
          name: "After Shocks",
          image: "./assets/images/AfterShocks.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "29/09/2020",
          mySynopsis: "Lorsqu'un tremblement de terre de magnitude 7,8 frappe la Californie, Ruby est piégée dans une laverie automatique avec Charlie, un garçon avec qui elle a eu sa première conversation quelques instants auparavant. Elle ne peut rien voir au-delà des décombres sous lesquels elle est piégée, mais elle est sûre que quelqu'un viendra bientôt les sauver.",
          prixht: 13.99,
        }, {
          id: 4,
          name: "Les Dents de la Mer",
          image: "./assets/images/Jaws.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "06/04/2016",
          mySynopsis: "Été 1975, sur l'île d'Amity, peu avant le début de la période estivale. Un soir, une jeune femme un peu éméchée abandonne son petit ami qui s'est assoupi sur la plage pour aller se baigner.Mais, après quelques brasses, elle se fait happer par un grand requin blanc venu des profondeurs. Son cadavre mutilé sera retrouvé le lendemain matin sur la grève.Début de la psychose... D'autant qu'un enfant disparaît peu de temps après, qu'un homme est dévoré vivant par le squale...Faut-il interdire l'accès à la plage ? Les autorités sont partagées. Seul consensus : il faut éliminer le monstre. Quint, le pêcheur, Brody, le chef de la police, et Hooper, le jeune océanographe expert en requins – et en femmes – vont alors engager une lutte sans merci contre le monstre mangeur d'hommes.",
          prixht: 7.99,
        }, {
          id: 5,
          name: "Hunger Games: La Balade du Serpent et de l'Oiseau Chanteur",
          image: "./assets/images/HungerGames.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "20/05/2020",
          mySynopsis: "Dévoré d'ambition, Poussé par la compétition, Il va découvrir que la soif de pouvoir a un prix, C'est le matin de la Moisson qui doit ouvrir la dixième édition annuelle des Hunger Games. Au Capitole, Coriolanus Snow, dix-huit ans, se prépare à devenir pour la première fois mentor aux Jeux. L'avenir de la maison Snow, qui a connu des jours meilleurs, est désormais suspendu aux maigres chances de Coriolanus. Il devra faire preuve de charme, d'astuce et d'inventivité pour faire gagner sa candidate. Mais le sort s'acharne. Honte suprême, on lui a confié le plus misérable des tributs : une fille du district Douze. Leurs destins sont désormais liés. Chaque décision peut les conduire à la réussite ou à l'échec, au triomphe ou à la ruine. Dans l'arène, ce sera un combat à mort.",
          prixht: 19.99,
        }, {
          id: 6,
          name: "Lone Wolf",
          image: "./assets/images/LoneWolf.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "13/07/2016",
          mySynopsis: "David Archer est de retour avec une vengeance avec son nouveau héros, Noah Wolf. Après que les fans ont déliré au sujet de sa première série, The Sam Prichard Novels, Archer est maintenant sur le point de revenir encore plus fort. Les gens jettent déjà des noms comme Mitch Rapp et Alex Cross, mais ne me croisez pas sur parole. Le nom de Archer devienra un nom familier! USA TODAY BESTSELLING SERIES Noah Wolf est l’un des assassins les plus meurtriers du monde, complètement dépourvu d’émotion et de conscience. Ces facteurs, que d’autres considéreraient comme des handicaps, lui permettent d’évaluer la situation instantanément, et d’un point de vue purement logique. Ses décisions et ses actions ne sont jamais entachées d’émotions ou de sentiments, ce qui le libère de tout risque de peur ou de culpabilité.",
          prixht: 11.99,
        }, {
          id: 7,
          name: "Rogue Avenger",
          image: "./assets/images/RogueAvenger.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "22/08/2005",
          mySynopsis: "Ils ont volé son avenir. Il a volé leur sous-marin. Maintenant, il doit faire une chose ...... et il peut se faire tuer. Quand Jake s’est réveillé à bord du sous-marin de missiles balistiques, l’USS Colorado, dans une flaque de son propre sang. La blessure était grave, mais ce n’est pas ce qui a ruiné sa carrière. L’effort de sauvetage l’a fait. Son prochain coup est peut-être le seul qui reste. Jeté aux loups pour couvrir le secret d’un officier, Jake ne sera pas leur agneau sacrificiel. Quand un marchand d’armes international le recrute pour voler le Colorado et vendre ses ogives nucléaires, le patriotisme et la vengeance s’affrontent dans le cœur de Jake. Est-ce qu’il sera d’accord ? Est-ce qu’il peut s’en sortir ? Aveuglé par la rage et incertain de son avenir, il se retrouve au centre d’un complot perfide. En qui peut-il avoir confiance ? Sa soif de vengeance le détruira-t-elle ? Vous allez adorer ce thriller militaire, parce que tout le monde aime la lutte pour la vérité.",
          prixht: 11.99,
        }, {
          id: 8,
          name: "Rogue Hunter",
          image: "./assets/images/RogueHunter.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "01/03/2016",
          mySynopsis: "UNE NATION ASSIÉGÉE... Cela fait plus de quatre ans que l’annexion de la Crimée et l’ONU a décidé de prendre des mesures militaires secrètes pour desserrer l’emprise des envahisseurs russes. Les cibles sont un pont stratégique et des pipelines sous-marins qui alimentent la péninsule occupée en gaz naturel, en électricité et en télécommunications en provenance de Russie continentale. Si ces lignes de vie critiques peuvent être coupées, les résistants ukrainiens pourraient avoir une chance de reconquérir l’indépendance. Pour que cela soit possible, l’ancien officier de marine américain Jake Slate et le marchand d’armes international Pierre Renard doivent mener une guerre clandestine contre la marine russe. Leurs ennemis sont aidés par des dauphins armés, qui connaissent l’environnement océanique bien mieux que n’importe quel humain peut. Si ce n’est pas une mission suicide, c’est assez sacrément proche...",
          prixht: 12.99,
        }, {
          id: 9,
          name: "The Bourne Identity",
          image: "./assets/images/TheBourneIdentity.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "19/06/1986",
          mySynopsis: "Un homme est retrouvé grièvement blessé au large de Marseille. Soigné par un médecin, il se révèle amnésique, mais son corps montre des traces de chirurgie esthétique. Il décide de découvrir son identité en partant des indications trouvées dans un micro-film implanté sous sa peau. Bourne découvre peu à peu ses talents: il connaît plusieurs langues étrangères, sait se battre et possède une grande capacité à se travestir et assumer des rôles. À Zurich, il se rend dans une banque où il a accès à un compte en banque très bien fourni. Poursuivi par de mystérieux tueurs à la solde de Carlos, un tueur à gages mondialement réputé, il rencontre la femme qui …",
          prixht: 4.99,
        }, {
          id: 10,
          name: "The Loop",
          image: "./assets/images/TheLoop.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "29/09/2020",
          mySynopsis: "Une petite ville nichée dans les collines du centre de l’Oregon devient l’épicentre d’une épidémie de violence lorsque les enfants adolescents de plusieurs cadres de la société de biotechnologie locale tombent malades et agressivement meurtriers. Soudain, la ville est sur le bord, et tout le monde doit faire tout ce qu’il faut juste pour survivre ...",
          prixht: 24.99,
        }, {
          id: 12,
          name: "Dragon Ball Super",
          image: "./assets/images/Dragon-Ball-Super-manga.jpg",
          categorie: "manga",
          quantite: 5,
          dateParution: "04/10/2020",
          mySynopsis: "Le criminel Moro et les évadés de la prison galactique qui sont maintenant à son service sillonnent l’univers à la recherche de planètes riches en énergie vitale !! C’est ainsi que débarquent sur Terre une bande de bandits galactiques, dont Seven-Three qui possède le pouvoir de copier les aptitudes de ses adversaires. En l’absence de Goku, Piccolo et les autres doivent y faire face ! ",
          prixht: 6.90,
        }, {
          id: 13,
          name: "My Hero Academia",
          image: "./assets/images/My-Hero-Academia-manga.jpg",
          categorie: "manga",
          quantite: 5,
          dateParution: "09/06/2016",
          mySynopsis: "Confronté au test d'aptitudes d'Eraserhead, Deku échappe de justesse au renvoi en réussissant à concentrer le One for All dans un seul doigt au moment crucial ! Dernier du classement avec une seule performance surhumaine à son actif, il compte bien...",
          prixht: 6.60,
        }, {
          id: 14,
          name: "One piece",
          image: "./assets/images/One-Piece-manga.jpg",
          categorie: "manga",
          quantite: 5,
          dateParution: "07/10/2020",
          mySynopsis: "Au cours de son périple aux côtés de Barbe Blanche, Oden fait la connaissance d’un homme que le destin semble avoir placé sur sa route : le grand Roger ! Qu’apportera donc au monde la rencontre de ces deux hommes ?! Pendant ce temps, dans le pays des Wa, Orochi profite de l’absence d’Oden pour manœuvrer en coulisses…",
          prixht: 6.90,
        }, {
          id: 15,
          name: "One Punch Man",
          image: "./assets/images/One-Punch-Man-manga.jpg",
          categorie: "manga",
          quantite: 5,
          dateParution: "10/09/2020",
          mySynopsis: "Saitama est trop puissant ; tellement puissant qu'il élimine tous les monstres les plus farouches avec un simple coup de poing. Découvrez l'histoire du plus puissant des super-héros dans ce manga qui va vous mettre K.O. !! Le combat décisif de l...",
          prixht: 6.90,
        }, {
          id: 16,
          name: "Samurai 8 - la légende de Hachimaru",
          image: "./assets/images/Samurai-8-la-legende-de-Hachimaru-manga.jpg",
          categorie: "manga",
          quantite: 5,
          dateParution: "24/09/2020",
          mySynopsis: "LE RETOUR DE MASASHI KISHIMOTO, L'AUTEUR DE NARUTO !",
          prixht: 6.85,
        }, {
          id: 17,
          name: "The Legend of Zelda - Twilight Princess",
          image: "./assets/images/The-Legend-of-Zelda-Twilight-Prince-manga.jpg",
          categorie: "manga",
          quantite: 5,
          dateParution: "14/08/2019",
          mySynopsis: "Après un an et demi passé dans le paisible village de Toal, le jeune Link peut être fier de lui : sa gentillesse, son courage et sa dévotion lui ont permis d'être totalement intégré dans cette communauté. Mais Link a peur que les villageois finissent par découvrir le terrible secret de son passé, au point qu'il n'en dort plus la nuit ! Et si ses cauchemars annonçaient le retour imminent des êtres maléfiques du monde de la pénombre ? Comment faire pour les empêcher de semer à nouveau le chaos ?",
          prixht: 7.99,
        }, {
          id: 18,
          name: "Hunter X Hunter",
          image: "./assets/images/Hunter-X-Hunter.jpg",
          categorie: "manga",
          quantite: 5,
          dateParution: "10/03/2020",
          mySynopsis: "Le départ. Gon, le héros de notre histoire, décide de quitter son village natal pour aller passer le difficile examen qui l'autorisera à devenir un hunter et à marcher sur les traces de son père. En chemin, il fait la connaissance de Léolio et Kurapika qui vont rapidement devenir ses amis et compagnons de route. Tous trois parviennent sur le lieu de la première épreuve et doivent faire leurs preuves au milieu d'une horde de participants très motivés.C'est la rencontre essentielle de Gon, Léolio et Kurapika. Gon fait...",
          prixht: 6.85,
        }, {
          id: 19,
          name: "L'Attaque des Titans",
          image: "./assets/images/L-attaque-des-titans-tome-1.jpg",
          categorie: "manga",
          quantite: 5,
          dateParution: "25/11/2020",
          mySynopsis: "Désormais détenteur du pouvoir de l’Originel, Eren décide, pour le bien de l’île du Paradis, d’exterminer tout le reste de l’humanité,  et se met en marche à la tête d’une gigantesque meute de Titans. Incapables de déterminer s’il faut les considérer comme une bénédiction ou au contraire comme une calamité, Mikasa, Armin et les autres  choisissent de faire tout leur possible pour sauver le monde...",
          prixht: 6.95,
        }, {
          id: 20,
          name: "Détective Conan",
          image: "./assets/images/Detective-Conan.jpg",
          categorie: "manga",
          quantite: 5,
          dateParution: "23/10/2020",
          mySynopsis: "Victime d'une mystérieuse organisation d'hommes en noir qui l'ont empoisonné et l'ont ainsi fait redevenir un enfant, cet adolescent se retrouve contraint de retourner à l'école primaire et, tout en veillant à ce que le secret de sa nouvelle identité soit préservé, il mène des enquêtes et résout des affaires ténébreuses et...",
          prixht: 6.85,
        }, {
          id: 21,
          name: "A La Croisée des Mondes",
          image: "./assets/images/A_la_croisee_des_mondes.jpg",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "05/12/2007",
          mySynopsis: "Rebecca, 12 ans, est une orpheline rebelle qui vit à Jordan College, un établissement de l'Université d'Oxford, dans un monde parallèle qui ressemble au nôtre mais qui a évolué de façon un peu différente. Elle a pour compagnon Pantalaimon, son dæmon, un être capable de prendre de nombreuses formes animales.",
          prixht: 24.99,
        }, {
          id: 22,
          name: "Eragon: Le Cycle de l'Héritage",
          image: "./assets/images/Eragon_Le_Cycle_de_l_heritage_tome_1.png",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "04/03/2010",
          mySynopsis: "Une petite ville nichée dans les collines du centre de l’Oregon devient l’épicentre d’une épidémie de violence lorsque les enfants adolescents de plusieurs cadres de la société de biotechnologie locale tombent malades et agressivement meurtriers. Soudain, la ville est sur le bord, et tout le monde doit faire tout ce qu’il faut juste pour survivre ...Eragon n'a que quinze ans, mais le destin de l'Empire eEragon n'a que quinze ans, mais le destin de l'Empire est désormais entre ses mains !C'est en poursuivant une biche dans la montagne que le jeune Eragon, quinze ans, tombe sur une magnifique pierre bleue, qui s'avère être... un oeuf de dragon !",
          prixht: 12.99,
        }, {
          id: 23,
          name: "Harry Potter",
          image: "./assets/images/Harry_Potter.jpg",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "07/02/2019",
          mySynopsis: "Une rentrée fracassante en voiture volante, une étrange malédiction qui s’abat sur les élèves, cette deuxième année à l’école des sorciers ne s’annonce pas de tout repos! Entre les cours de potions magiques, les matches de Quidditch et les combats de mauvais sorts, Harry et ses amis Ron et Hermione trouveront-ils le temps de percer le mystère de la Chambre des Secrets?",
          prixht: 24.99,
        }, {
          id: 24,
          name: "Twilight",
          image: "./assets/images/Twilight.jpg",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "02/11/2006",
          mySynopsis: "Rejetée par celui qu'elle aime passionnément, Bella ne s'en relève pas. Fascinée par un vampire, comment pourrait-elle retrouver goût à la pâle existence humaine ? Pourtant il faut vivre. Mais Bella n'a de goût pour rien, sinon le danger : alors elle entend la voix d'Edward, et éprouve l'illusion de sa présence. Comme s'il ne l'avait pas abandonnée, comme s'il tenait encore à elle. Bella échappera-t-elle à cette obsession amoureuse qui la hante ? A quel prix ?",
          prixht: 19.99,
        }, {
          id: 25,
          name: "L'arbre de l'été",
          image: "./assets/images/L_Arbre_de_l_ete_La_Tapisserie_de_Fionavar_tome_1.jpg",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "22/05/2006",
          mySynopsis: "Ils sont cinq, femmes et hommes, tous vivant à Toronto au Canada ; ils sont jeunes, étudiants ou déjà dans la vie active, tous rationnels. Or, les voici projetés dans Fionavar, le Grand Univers dont le nôtre n'est qu'une ombre bien pâle! Malgré la protection offerte par Mantel d'Argent le magicien, ils sont aussitôt pris dans les premières escarmouches de la guerre qui oppose les forces des Lumières à celles des Ténèbres.",
          prixht: 21.99,
        }, {
          id: 26,
          name: "L'Homme Rune: Le Cycle des Démons",
          image: "./assets/images/L_Homme_Rune_Le_Cycle_des_demons_tome_1.jpg",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "02/11/2009",
          mySynopsis: "Parfois, il existe de très bonnes raisons d'avoir peur du noir... Arlen a onze ans et vit avec ses parents dans leur petite ferme. Lorsque la nuit tombe sur le monde d'Arlen, une brume étrange s'élève du sol ; une brume qui promet la mort aux idiots qui osent affronter les ténèbres, car des démons affamés émergent de ces vapeurs pour se nourrir des vivants.",
          prixht: 18.99,
        }, {
          id: 27,
          name: "Le Codex de Paris",
          image: "./assets/images/Le_codex_de_Paris.jpg",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "10/01/2020",
          mySynopsis: "l fait profil bas pour ne pas attirer l’attention de la police ou de n’importe quel humain. Mais quand une femme en détresse vient le supplier de retrouver son époux, Germain accepte. Il ne se doute pas que cette affaire va le mettre sur la piste d’un dangereux codex et du démon qui a un jour transformé Germain en vampire.",
          prixht: 11.99,
        }, {
          id: 28,
          name: "Le Seigneur des Anneaux",
          image: "./assets/images/Le_Seigneur_des_anneaux_Integrale.jpg",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "22/11/2012",
          mySynopsis: "Une contrée paisible où vivent les Hobbits. Un anneau magique à la puissance infinie. Sauron, son créateur, prêt à dévaster le monde entier pour récupérer son bien. Frodon, jeune Hobbit, détenteur de l'Anneau malgré lui. Gandalf, le Magicien, venu avertir Frodon du danger. Et voilà déjà les Cavaliers Noirs qui approchent...",
          prixht: 17.99,
        }, {
          id: 29,
          name: "Le Monde de Narnia",
          image: "./assets/images/Le_Monde_de_Narnia.jpg",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "09/11/2010",
          mySynopsis: "C'est une histoire qui s'est passée il y a très longtemps, à l'époque où votre grand-père était un petit garçon. Une histoire très importante, car c'est elle qui permet de comprendre comment les échanges entre notre monde et le pays de Narnia ont commencé. A cette époque, Sherlock Holmes vivait encore à Baker Street.",
          prixht: 24.99,
        }, {
          id: 30,
          name: "Le Prisme Noir Le Porteur de Lumière",
          image: "./assets/images/Le_Prisme_noir_Le_Porteur_de_lumiere_tome_1.jpg",
          categorie: "fantastique",
          quantite: 5,
          dateParution: "21/10/2011",
          mySynopsis: "Plus la lumière est vive, plus l'ombre est profonde. Gavin Guile est le Prisme, l'homme le plus puissant du monde. Empereur et magicien, il est le gardien d'une paix bien fragile. Et d'un terrible secret. Les Prismes ne vivent jamais vieux, et Gavin sait exactement combien de temps il lui reste : cinq ans... et cinq missions impossibles à accomplir.",
          prixht: 25.00,
        }],

      livres2: [
        {
          id: 0,
          name: "Baisers de sirène",
          image: "./assets/images/arrBoutique/mangaxbaisersdesirene.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "23/08/2007",
          prixht: 27.40,
        }, {
          id: 1,
          name: "Quand un ange s'invite",
          image: "./assets/images/arrBoutique/mangax03_39295.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 11.99,
        }, {
          id: 2,
          name: "Nami S.O.S.!",
          image: "./assets/images/arrBoutique/mangax05_77372.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 17.45,
        }, {
          id: 3,
          name: "Le baiser du diable",
          image: "./assets/images/arrBoutique/mangax06_47802.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 15.60,
        }, {
          id: 4,
          name: "Lunes et petites cerises",
          image: "./assets/images/arrBoutique/mangaxlunesetpetitescerises.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 23.00,
        }, {
          id: 5,
          name: "La Vie Ordinaire de Nagi-Chan",
          image: "./assets/images/arrBoutique/mangaxlavieordinairedenagichan.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 12.90,
        }, {
          id: 6,
          name: "Le coffret de Jade",
          image: "./assets/images/arrBoutique/mangax05_77372.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 45.00,
        }, {
          id: 7,
          name: "Essayez-moi",
          image: "./assets/images/arrBoutique/mangax10_47801.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 23.00,
        }, {
          id: 8,
          name: "Kiss me kiss you",
          image: "./assets/images/arrBoutique/mangax11_42687.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 23.00,
        }, {
          id: 9,
          name: "Les copines du club de natation",
          image: "./assets/images/arrBoutique/mangax14_47799.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 52.00,
        }, {
          id: 10,
          name: "Dark Wirbel : Conflit",
          image: "./assets/images/arrBoutique/mangax15_47798.jpg",
          categorie: "mangaX",
          quantite: 5,
          dateParution: "19/02/2016",
          prixht: 12.50,
        },],
      nameTempo: "",
      couleur: "",
      couleur1: "",
      prixttc: 0,
      tva: 0,
      totalht: 0,
      show: false,
      commandShow: false,
      paniers: [],


    }
  },
  methods: {
    addPanier: function (index) {
      this.livres2[index].quantite--;
      this.paniers.push(this.livres2[index]);
      console.log(this.paniers);
      this.total();
      this.saveLsPanier();
      this.saveLsBooks();
    },

    suppr: function (index) {
      this.nameTempo = this.paniers[index].name;
      this.livres.forEach(element => {
        if (element.name == this.nameTempo) {
          element.quantite++;
        }
      });
      this.livres2.forEach(element => {
        if (element.name == this.nameTempo) {
          element.quantite++;
        }
      });

      console.log(this.nameTempo);
      this.paniers.splice(index, 1);
      this.total();
      this.saveLsPanier();
      this.saveLsBooks();

    },
    total: function () {
      this.prixttc = 0;
      this.totalht = 0;
      this.paniers.forEach(element => {
        Math.round((this.totalht += element.prixht) * 100) / 100;
      });
      this.prixttc = Number(Math.round((this.totalht * 1.2) * 100) / 100);
      this.tva = Number(Math.round((this.prixttc - this.totalht) * 100) / 100);
    },
    /**Recupere panier en local storage */
    getLsPanier: function () {
      if (!window.localStorage.paniers) {
        window.localStorage.setItem("paniers", "");
      } else {
        this.paniers = JSON.parse(window.localStorage.getItem('paniers'));
      }
    },
    /**Enregistre panier en local storage */
    saveLsPanier: function () {
      window.localStorage.setItem('paniers', JSON.stringify(this.paniers));
    },
    /**Recupere livres local storage */
    getLsBooks: function () {
      if (!window.localStorage.livres2) {
        window.localStorage.setItem("livres", "");
      } else {
        this.livres = JSON.parse(window.localStorage.getItem('livres'));
      }
    },
    /**Recupere livres2 local storage */
    getLsBooks2: function () {
      if (!window.localStorage.livres2) {
        window.localStorage.setItem("livres2", "");
      } else {
        this.livres2 = JSON.parse(window.localStorage.getItem('livres2'));
      }
    },

    /**Enregistre livres et livres2 en local storage */
    saveLsBooks: function () {
      window.localStorage.setItem('livres', JSON.stringify(this.livres));
      window.localStorage.setItem('livres2', JSON.stringify(this.livres2));
    },


  },
};

/******************ROUTES*******************/
var routes = [
  { path: "/Acceuil", component: acceuil },
  { path: "/Boutique", component: boutique },
  { path: "/Contacts", component: contacts },
  { path: "/LivreOr", component: livreOr },
  { path: "/ArrBoutique", component: annexe },
];
const router = new VueRouter({
  routes: routes,
});
/***************************OBJET VUE*******************************************/
var vm = new Vue({
  el: "#app",

  data: {
    validShow: true,
    darkBoutique: false,
  },

  router: router,
});
