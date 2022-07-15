const cellules = document.querySelectorAll("[data-cell]");

const statuDuJeu = document.getElementById("statuDuJeu");
const finDuJeuStatu = document.getElementById("finDuJeuStatu");

const joueur1 = "X";
const joueur2 = "O";

let tourJoueur = joueur1;

cellules.forEach((cellule) => {
  cellule.addEventListener("click", jouerAuJeu, { once: true }); //once: true declanche 1 seul fois chaque cellule au click 
});

function jouerAuJeu(e) {
  e.target.innerHTML = tourJoueur;
  majStatuDuJeu(tourJoueur);
  if (tourJoueur == joueur1) {
    tourJoueur = joueur2;
  } else {
    tourJoueur = joueur1;
  }
}

function majStatuDuJeu(statu) {
  let statuText;
  switch (statu) {
    case "X":
      statuText = "Au tour du joueur 2 (O)";
      break;
    case "O":
      statuText = "Au tour du joueur 1 (X)";
      break;
    case "WinX":
      statuText = "Le joueur 1 a gagner (X)";
      break;
    case "WinO":
      statuText = "Le joueur 1 a gagner (O)";
      break;
    case "egaliter":
      statuText = "Egaliter";
      break;
  }
  statuDuJeu.innerHTML = statuText;
  finDuJeuStatu.innerHTML = statuText;
}

/* let text = document.getElementById("text");

text.addEventListener('click',(e)=>{

})
 */
