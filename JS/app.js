

/*

let children = {
    template: `<p> OO Je suis un enfant component de text component OO</p>`,
};

let textcomponent = {
    template: `<div>
    Je suis un Component parent <children></children>
    </div>`,
    components: {
        children,
    }
};*/
/*********************************ACCEUIL********************************************/
var acceuil = {
  template: `
  <div class="d-flex flex-column align-items-center">
  <!--Carousel-->    
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="assets/images/digitalLibrary.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="assets/images/digitalBooks1.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
    <h1 class="display-4"><b>Digital Books!<b></h1>
    <p class="lead"><b>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.<b></p>
    <hr class="my-4">
    <transition name="jumboShow">
      <div v-show="jumboShow">
        <p><b>It uses utility classes for typography and spacing to space content out within the larger container.<b></p>
        <a @click="jumboShow =! jumboShow" class="btn btn-primary btn-lg" role="button">Qui sommes-nous?</a>
      </div>
    </transition>
  
    <transition name="jumboShow">
      <div v-show="!jumboShow" class="jumboShowInfo">
      <p><b>Nous sommes <b></p>
      <a @click="jumboShow =! jumboShow" class="btn btn-light btn-lg" role="button"><router-link class="nav-link active" to="/Contacts"><b>Contactez-nous<b></router-link>
      </a>
      </div>
    </transition>
    
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


var tooglecards = {
  template: `
  <div class="style">
    <div class="cards ">
        <img :src="myImg" title="image">
                <h3> {{myTitre}} </h3>
                <button @click="isShow =! isShow">Résumé</button>   

              <div v-show="isShow">
                <p>Description de l'image....rsgfohslugueshviousdhifbsliugfhiuqehfmrdbhgiuherqehfmrdbhgiuheroufhuerhguooerhuogfhoeqjgpinvhseoihgfodrgsr...bla blab blaaaa</p>
              </div> 
    </div>               
  </div>`,
  props: ["myImg", "myTitre"],

  data:
    function () {
      return ({
        isShow: false,
      })
    },
}

var boutique = {
  template: `
  <div class="container">
  <h1>Nos livres</h1>
    <div>
    <tooglecards v-for="livre in livres"
    :key="livre.id" :my-img="livre.image"
    :my-titre="livre.name"
    ></tooglecards>
    </div>
  </div>`,

  components: { tooglecards },
  data: function () {
    return {
      livres: [
        {
          id: 0,
          name: "La forêt des ombres",
          image: "./assets/images/foretDesOmbres.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "12/10/2009",
          prixHt: 12,
        }, {
          id: 1,
          name: "Titre test",
          image: "./assets/images/foretDesOmbres.jpg",
          categorie: "thriller",
          quantite: 5,
          dateParution: "12/10/2009",
          prixHt: 12,
        },]
    }
  }

};

/**************************PAGE CONTACT***************************/
var contacts = {
  template: `<div class="container">
    <h1>Vous souhaitez un renseignement ?</h1>
    <p>Laissez nous vos coordonnées, nous vous recontacterons le plus rapidement possible.</p>
    <hr>
    <transition name="fondu">
    <div class="mjjFormValid" v-show="!show">
    <h2>Vos informations ont bien été envoyées. À très vite 📚 😊 📚</h2>
    </div>
    </transition>
    <transition name="fondu">

    <form @submit.prevent="show =! show" v-show="show">
    <div class="form-row">
    <div class="form-group col-md-6">
  <label for="firstName">Nom</label>
  <input v-model="firstName" type="text" class="form-control" placeholder="Dupond" id="firsName">
  </div></div>

  <div class="form-row">
    <div class="form-group col-md-6">
    <label for="name">Prénom</label>
    <input v-model="name" type="text" class="form-control" id="name" placeholder="Michel">
    </div>    
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
    <label for="email">Email address</label>
    <input v-model="mail" type="email" class="form-control" id="email" placeholder="lecteur...@mail.com">
    </div>
    </div>

    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="tel">Telephone</label>
      <input v-model="this.tel" type="tel" class="form-control" id="tel">
      
    </div>
  </div>
  <button  type="submit" class="btn btn-primary" >Envoyer</button>
</form>
</transition>
  </div>`,

  methods: {
    isAText(txt) {
      if (isNaN(txt) && txt !== "null") {

        return true;
      } else {

        return false;
      }
    }
  },

  data:
    function () {
      return ({
        show: true,
        name: "",
        firstName: "",
        mail: "",
        tel: "",
      })

    }
}





/**************************  PANIER  *********************************/
var panier = {
  template: ``,
}
var livreOr = {
  template: `
  <div class="container mjj-livreOr">
  <h1>Le Livre d'Or</h1>
  </div>
  `,
}

var routes = [
  { path: "/Acceuil", component: acceuil },
  { path: "/Boutique", component: boutique },
  { path: "/Contacts", component: contacts },
  { path: "/LivreOr", component: livreOr },
];

const router = new VueRouter({
  routes: routes,
});

var vm = new Vue({
  el: "#app",

  data: {

    livres: [
      {
        id: 0,
        name: "La forêt des ombres",
        image: "./assets/images/foretDesOmbres.jpg",
        categorie: "thriller",
        quantite: 5,
        dateParution: "12/10/2009",
        prixHt: 12,
      }, {
        id: 1,
        name: "Titre2",
        image: "./assets/images/foretDesOmbres.jpg",
        categorie: "thriller",
        quantite: 5,
        dateParution: "12/10/2009",
        prixHt: 12,
      }],
    panier: [],
    name: "",
    firstName: "",
    mail: "",
    tel: "",
  },

  methods: {
    suppr(index) {
      this.classe.splice(index, 1);
      this.notes.splice(index, 1);
    },
    addBook() {
      if (this.isAText(this.currentName) && this.isANumber(this.currentNote)) {
        this.classe.push({ name: this.currentName, note: this.currentNote });
        this.notes.push(this.currentNote);
      }
    },
    isAText(txt) {
      if (isNaN(txt) && txt !== "null") {
        this.plcHolderName = "Nom";
        this.bool1 = false;
        return true;
      } else {
        this.plcHolderName = "Entrez un nom valide";
        this.bool1 = true;
        return false;
      }
    },
    isANumber(nb) {
      if (!isNaN(nb) && nb >= 0 && nb <= 20 && nb !== "") {
        this.plcHolderNote = "Note";
        this.bool2 = false;
        return true;
      } else {
        this.plcHolderNote = "Entrez votre age";
        this.bool2 = true;
        return false;
      }
    },
  },

  router: router,
});
