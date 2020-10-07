/*
let cards = {
    template: `<div class="cards">
    <img :src="myImg" title="image"></br>
    <h3> Titre de ma Photo</h3></br>
    <p>Description de l'image....rsgfohslugiuherisriufhsqeohfeueshviousdhifbsliugfhiuqehfmrdbhgiuherisriufhsqeohfeueshviousdhifbsliugfhiuqehfmrdbhgiuherqehfmrdbhgiuheroufhuerhguooerhuogfhoeqjgpinvhseoihgfodrgsr...bla blab blaaaa</p>
    </div>
    `,
    props: ['myImg'],
};

let toogle = {
    template: `<div>
        <button @click="isShow =! isShow">Toggle</button>
        <cards v-show="isShow"></cards>
            </div> `,

    data: function () {
        return ({
            isShow: false,
        })
    },
    components: { cards, }
};
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

var acceuil = {
  template: `
  <div class="d-flex flex-column align-items-center container">
  <!--Carousel-->    
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://picsum.photos/1024/480/?image=54" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/1024/480/?image=58" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/1024/480/?image=56" class="d-block w-100" alt="...">
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
  <h1 class="display-4">Digital Books!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </div>
</div>
  `
}

/***************************BOUTIQUE COMPONENTS********************************************/
var tooglecards = {
  template: `
  <div class="style">
  <div class="cards">
      <img :src="myImg" title="image"></br>
          <button @click="isShow =! isShow">Toggle</button>   
              <h3> {{myTitre}} </h3></br>
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
    <tooglecards 
    
    my-img="./assets/images/foretDesOmbres.jpg"
    my-titre="La foret des ombres"
    ></tooglecards>
    </div>
  </div>`,

  components: { tooglecards },
}
var panier = {
  template: ``,
}
var livreOr = {
  template: ``,
}




var routes = [
  { path: "/Acceuil", component: acceuil },
  { path: "/Boutique", component: boutique },
  // { path: "/Livre_d'Or", component: satisfaction },
];

const router = new VueRouter({
  routes: routes,
});

var vm = new Vue({
  el: "#app",

  data: {
    livres: [
      {
        name: "La forêt des ombres",
        id: 0,
        image: "./assets/images/foretDesOmbres.jpg",
        categorie: "thriller",
        quantite: 5,
        dateParution: "12/10/2009",
        prixHt: 12,
      }, {
        name: "La forêt des ombres",
        id: 1,
        image: "./assets/images/foretDesOmbres.jpg",
        categorie: "thriller",
        quantite: 5,
        dateParution: "12/10/2009",
        prixHt: 12,
      }]

  },

  methods: {
    suppr: function (index) {
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
  components: {

  },
  router: router,
});
