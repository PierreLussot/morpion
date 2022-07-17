const cellules = document.querySelectorAll("[data-cell]");

const statuDuJeu = document.getElementById("statuDuJeu");
const finDuJeuStatu = document.getElementById("finDuJeuStatu");

const joueur1 = "X";
const joueur2 = "O";

let tourJoueur = joueur1;

const vainqueurPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cellules.forEach((cellule) => {
  cellule.addEventListener("click", jouerAuJeu, { once: true }); //once: true declanche 1 seul fois chaque cellule au click
});

function jouerAuJeu(e) {
  e.target.innerHTML = tourJoueur;

  if (vainqueur(tourJoueur)) {
    majStatuDuJeu("Win" + tourJoueur);
    return finDuJEu();
  } else if (egaliter()) {
    majStatuDuJeu("egaliter");
    return finDuJEu();
  }

  majStatuDuJeu(tourJoueur);
  if (tourJoueur == joueur1) {
    tourJoueur = joueur2;
  } else {
    tourJoueur = joueur1;
  }
}

function vainqueur(tourJoueur) {
  return vainqueurPatterns.some((combinaison) => {
    return combinaison.every((index) => {
      return cellules[index].innerHTML == tourJoueur;
    });
  });
}

function egaliter() {
  return [...cellules].every((cellule) => {
    return cellule.innerHTML == joueur1 || cellule.innerHTML == joueur2;
  });
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
      statuText = "Le joueur 2 a gagner (O)";
      break;
    case "egaliter":
      statuText = "Egaliter";
      break;
  }
  statuDuJeu.innerHTML = statuText;
  finDuJeuStatu.innerHTML = statuText;
}

function finDuJEu() {
  document.getElementById("finDuJeu").style.display = "block";
}

function rechargementJeu() {
  window.location.reload();
}

/* let text = document.getElementById("text");

text.addEventListener('click',(e)=>{

})

*/
