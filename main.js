const cellules = document.querySelectorAll("[data-cell]");

const statuDuJeu = document.getElementById("statuDuJeu");
const finDuJeuStatu = document.getElementById("finDuJeuStatu");

const joueur1 = "X";
const joueur2 = "O";

let tourJoueur = joueur1;

cellules.forEach((cellule) => {
  cellule.addEventListener("click", jouerAuJeu, { once: true });
});

function jouerAuJeu(e) {
  e.target.innerHTML = tourJoueur;

  if (tourJoueur == joueur1) {
    tourJoueur = joueur2;
  } else {
    tourJoueur = joueur1;
  }
}
