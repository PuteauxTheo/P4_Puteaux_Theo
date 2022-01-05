function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click",closeModal);
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}


// test du formulaire pour le prenom 

let formFirst = document.getElementById('first');

formFirst.addEventListener('change', function(){
  validateFirst(this);
});

function validateFirst(inputFirst){
  let firstRegex = new RegExp('^[a-zA-Z][^0-9]+$');

  let testFirst = firstRegex.test(inputFirst.value);
  
  //affiche dans la console si le test est reussi ou pas 
  console.log("Le test du prenom est "+testFirst);
  // indiquer error si formulaire vide 
  if(!( testFirst || (inputFirst.value == "") )){
    formFirst.parentElement.setAttribute("data-error-visible", "true");
    formFirst.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    return false;
  }else{
    return true;
  }
};

// test du formulaire pour le nom

let formLast = document.getElementById('last');

formLast.addEventListener('change', function(){
  validateLast(this);
});

function validateLast(inputLast){
  let lastRegex = new RegExp('^[a-zA-Z][^0-9]+$');

  let testLast= lastRegex.test(inputLast.value);

  //affiche dans la console si le test est reussi ou pas 
  console.log("Le test du Nom est "+testLast);

  // indiquer error si formulaire vide 
  if(!testLast || (inputLast.value == "")){
    formLast.parentElement.setAttribute("data-error-visible", "true");
    formLast.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    return false;
  }else{
    return true;
  }
};

// test du formulaire pour l'email
let formEmail = document.getElementById('email');


formEmail.addEventListener('change',function(){
  validateEmail(this);
});

function validateEmail(inputEmail){
  let emailRegex = new RegExp( 
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$'
  );

  let testEmail = emailRegex.test(inputEmail.value);
  
  //affiche dans la console si le test est reussi ou pas 
  console.log("Le test Email est "+testEmail);

  if(!testEmail){
    formEmail.parentElement.setAttribute("data-error-visible", "true");
    formEmail.parentElement.setAttribute("data-error", "L'adresse électronique est invalide.");
    return false;
  }else{
    return true;
  }
}

// (4) Pour le nombre de concours, une valeur numérique est saisie.

let formQuantity = document.getElementById('quantity');

formQuantity.addEventListener('focusout',function(){
  validateQuantity(this);  
});


function validateQuantity(inputQuantity){
  let quantityRegex = new RegExp('^[0-9]+$');

  //let testQuantity = quantityRegex.test(inputQuantity);

  //affiche dans la console si le test est reussi ou pas 
  //console.log(testQuantity);
  console.log("la valeur  du nombre de concour est "+ quantityRegex.test(inputQuantity.value));

  if(quantityRegex.test(inputQuantity.value) == ""){
    formQuantity.parentElement.setAttribute("data-error-visible", "true");
    formQuantity.parentElement.setAttribute("data-error","Veuillez entrer un chiffre");
    return false;
  }else{
    return true;
  }
}
// (5) Un bouton radio est sélectionné.

let formRadio = document.getElementsByClassName('checkbox-input')[0];

function checkedRadio(){
  console.log("je suis rentre dans checkedRadio");
  for(i = 1;i<=6;i++){
    if(!document.getElementById('location'+i).checked){
      console.log("le bouton radio est "+document.getElementById('location'+i).checked);
      if(i == 6){
        formRadio.parentElement.setAttribute("data-error-visible","true");
        formRadio.parentElement.setAttribute("data-error","Veuillez saisir une destination");

        return false;
      }
    }else{
      return true;
    }
  };
};

// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.

let formCheckBox1 = document.getElementById('checkbox1');

function validateCheckBox1(){
  console.log(" la valeur de checkbox1 est (deuxieme temps) "+formCheckBox1.value);
  if(!formCheckBox1.checked){
    formCheckBox1.parentElement.setAttribute("data-error-visible","true");
    formCheckBox1.parentElement.setAttribute("data-error","Vous devez vérifier que vous acceptez les termes et conditions.");
    return false;
  }
  return true;
}

// validation du formulaire 

/*
  (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
  (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
  (3) L'adresse électronique est valide.
  (4) Pour le nombre de concours, une valeur numérique est saisie.
  (5) Un bouton radio est sélectionné.
  (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
*/

let btnSubmit = document.getElementsByClassName("btn-submit")[0];


btnSubmit.addEventListener('click',function(){
  validateForm(this);
});


function validateForm(){
  /*console.log("console 0");
  checkedRadio();
  console.log("console 1");
  validateFirst();
  console.log("console 2");
  validateLast();
  console.log("console 3");
  validateEmail();
  console.log("console 4");
  validateQuantity();
  console.log("console 5");  
  validateCheckBox1();

  console.log("je suis avant le si ");*/
  
  if(checkedRadio()){
    let modalBody = document.getElementsByClassName('modal-body')[0];
    let btnClose = "<input class='btn-submit' type='button' class='button' value='Fermer'/> ";
    let textRegistration = "<p class='textRegistr'> Merci pour votre inscription </p>";
    
    modalBody.innerHTML = textRegistration + btnClose;
  
  };
};
