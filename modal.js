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
const modalClose = document.querySelectorAll(".close");
const modalBody = document.getElementsByClassName('modal-body')[0];
const formR = document.getElementsByName('reserve');
const registrClose = document.querySelector(".btn-close");
const modalbgThank = document.querySelector(".bground-thank");

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.forEach((btn) => btn.addEventListener("click",closeModal));

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
  modalbgThank.style.display = "none"
}

function closeModal() {
  modalbg.style.display = "none";
  modalbgThank.style.display = "none"
  document.getElementById("form").reset();
}


// validateFirst permet de verifier si le prenom correspond bien a plus de 2 caracteres.

let formFirst = document.getElementById('first');

formFirst.addEventListener('change', function(){
  validateFirst(this);
});

function validateFirst(inputFirst){
  let firstRegex = new RegExp('^[a-zA-Z][^0-9]+$');

  let testFirst = firstRegex.test(inputFirst.value);

  if(!testFirst || (inputFirst.value == "")){
    formFirst.parentElement.setAttribute("data-error-visible", "true");
    formFirst.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    return false;
  }else{
    formFirst.parentElement.setAttribute("data-error-visible", "false");
    formFirst.parentElement.setAttribute("data-error", "");
    return true;
  }
}

// validateLast permet de verifier si le nom de famille correspond bien a plus de 2 caracteres.

let formLast = document.getElementById('last');

formLast.addEventListener('change', function(){
  validateLast(this);
});

function validateLast(inputLast){

  let lastRegex = new RegExp('^[a-zA-Z][^0-9]+$');

  let testLast= lastRegex.test(inputLast.value);

  if(!testLast || (inputLast.value == "")){
    formLast.parentElement.setAttribute("data-error-visible", "true");
    formLast.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    return false;
  }else{
    formLast.parentElement.setAttribute("data-error-visible", "false");
    formLast.parentElement.setAttribute("data-error", "");
    return true;
  }
};

// validateEmail permet de verifier si le champ saisie correspond bien a une adresse mail.

let formEmail = document.getElementById('email');

formEmail.addEventListener('change',function(){
  validateEmail(this);
});

function validateEmail(inputEmail){
  let emailRegex = new RegExp( 
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$'
  );

  let testEmail = emailRegex.test(inputEmail.value);

  if(!testEmail){
    formEmail.parentElement.setAttribute("data-error-visible", "true");
    formEmail.parentElement.setAttribute("data-error", "L'adresse électronique est invalide.");
    return false;
  }else{
    formEmail.parentElement.setAttribute("data-error-visible", "false");
    formEmail.parentElement.setAttribute("data-error", "");
    return true;
  }
}
// validateDate verifie que la date est pas vide.

let formDate = document.getElementById('birthdate');

function validateDate(){
  if(formDate.value == null || formDate.value ==""){
    formDate.parentElement.setAttribute("data-error-visible", "true");
    formDate.parentElement.setAttribute("data-error", "Date de naissance non saisie.");
    return false;
  }else{
    formDate.parentElement.setAttribute("data-error-visible", "false");
    formDate.parentElement.setAttribute("data-error", "");
    return true;
  };
};

// validateQuantity verifie qu'il y a bien un nombre inscrit dans le champ.

let formQuantity = document.getElementById('quantity');

formQuantity.addEventListener('focusout',function(){
  validateQuantity(this);  
});

function validateQuantity(inputQuantity){
  let quantityRegex = new RegExp('^[0-9]+$');

  if(quantityRegex.test(inputQuantity.value) == ""){
    formQuantity.parentElement.setAttribute("data-error-visible", "true");
    formQuantity.parentElement.setAttribute("data-error","Veuillez entrer un chiffre");
    return false;
  }else{
    formQuantity.parentElement.setAttribute("data-error-visible", "false");
    formQuantity.parentElement.setAttribute("data-error", "");
    return true;
  }
}

// checkedRadio nous renvoie un message d'erreur si un bouton n'est pas selectionné.

let formRadio = document.getElementsByClassName('checkbox-input')[0];

function checkedRadio(){
  for(i = 1;i<=6;i++){
    if(!document.getElementById('location'+i).checked){
      if(i == 6){
        formRadio.parentElement.setAttribute("data-error-visible","true");
        formRadio.parentElement.setAttribute("data-error","Veuillez saisir une destination");

        return false;
      }
    }else{
      formRadio.parentElement.setAttribute("data-error-visible", "false");
      formRadio.parentElement.setAttribute("data-error", "");
      return true;
    }
  };
};

// validateCheckBox1 permet de verifier si la case des conditions générales est cochée.

let formCheckBox1 = document.getElementById('checkbox1');

function validateCheckBox1(){
  if(!formCheckBox1.checked){
    formCheckBox1.parentElement.setAttribute("data-error-visible","true");
    formCheckBox1.parentElement.setAttribute("data-error","Vous devez vérifier que vous acceptez les termes et conditions.");
    return false;
  }
  formCheckBox1.parentElement.setAttribute("data-error-visible", "false");
  formCheckBox1.parentElement.setAttribute("data-error", "");
  return true;
}

let btnSubmit = document.getElementsByClassName("btn-submit")[0];


btnSubmit.addEventListener('click',function(){
  validateForm(this);
});

// validateForm verifie que chaque est correct pour envoyer le message de confirmation d'inscription


function validateForm(){
  
  if(validateDate() & checkedRadio() & validateFirst(formFirst) & validateLast(formLast) & validateEmail(formEmail) & validateQuantity(formQuantity) & validateCheckBox1(formCheckBox1)){
    
    modalbg.style.display = "none";
    modalbgThank.style.display = "block";
    document.getElementById("form").reset();
  };
};

let btnClose = document.getElementsByClassName("btn-close")[0];

btnClose.addEventListener('click',function(){
  closeThank(this);
});

function closeThank(){
  console.log("j'ecoute fermer");
  modalbgThank.style.display = "none";
}

