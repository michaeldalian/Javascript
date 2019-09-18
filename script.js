const main = () => {
  //
  //
  // A changer manuellement pour choisir son test
  const TestAEffectuer = 3;
  //
  //
  //
  switch (TestAEffectuer) {
    case 1: // Test1
      let _monNombre;
      let _monText;
      let _found = false;
      const lang = "fr";

      //   Essai localisation
      //const stateTable = { fr: ["Trouvé", "Plus petit", "plus grand"], en: [] };
      //console.log(stateTable.lang[0]);

      //compris entre 0 et1 *100 arrondi
      const _PcNombre = Math.round(Math.random() * 100);

      //   function fnPrint(t) {
      //     if (_found) {
      //       Alert(t);
      //     } else {
      //       _monNombre = window.prompt(t);
      //     }
      //   }

      function testNum(a) {
        if (a === _PcNombre) {
          _found = true;
        } else {
          _found = false;
        }
      }

      for (let i = 3; i > 1; i--) {
        if (_found) {
          _monText = `Bravo! Le nombre était ${_PcNombre}`;
          Alert(_monText);
          // Sortie de boucle
          return;
        } else {
          _monText = `Perdu! Rééssaye ( ${i} chances)`;
          _monNombre = window.prompt(_monText);
          testNum(_monNombre);
        }
      }

      // window.prompt("Devine combien j'ai de doigts", _monNombre);

      console.log(_monNombre);

    case 2: // Test2
      //beau+chaud=short
      //Pleut et chaud = parap
      //Pleut et froid=manteau

      let chkChaud = document.getElementById("chaud");
      let _chaud = chkChaud.checked;
      let _beau = false;
      let _froid = !_chaud;
      let _pluie = document.getElementById("pluie").checked;

      //si évenement coché "chaud" change valeur affichée
      chkChaud.addEventListener("click", function clicBox() {
        _chaud = chkChaud.checked;
        _froid = !_chaud;
        promptResult();
        //console.log(`Check ${_chaud}`);
      });

      //Affiche résultat
      function promptResult() {
        if (_chaud && _beau) {
          console.log("short");
        }

        if (_pluie) {
          if (_chaud) {
            console.log("parap");
          }

          if (_froid) {
            console.log("manteau");
          }
        }
      }

    case 3: // Test3 - chifumi
      // F>P>C
      // commencer par les cas spéciaux - prévoir 3 manches

      // Compteur de points ordi/utilisateur
      let tabPoints = [0, 0];

      for (let i = 0; i < 3; i++) {
        // definition de la fonction comparer
        // qui renvoie le nom de l'élément gagnant, entre les deux passés en paramètres
        function comparer(choix1, choix2) {
          if (choix1 === choix2) {
            console.log("Egalité:", tabPoints);
            return "Egalité !";
          } else if (choix1 === "pierre") {
            if (choix2 === "ciseaux") {
              tabPoints[0]++;
              console.log("=> ScoreU++:", tabPoints);
              return "pierre";
            } else if (choix2 === "feuille") {
              tabPoints[1]++;
              console.log("=> ScoreO++:", tabPoints);
              return "feuille";
            }
          } else if (choix1 === "feuille") {
            if (choix2 === "pierre") {
              tabPoints[0]++;
              console.log("=> ScoreU++", tabPoints);
              return "feuille";
            } else if (choix2 === "ciseaux") {
              tabPoints[1]++;
              console.log("=> ScoreO++:", tabPoints);
              return "ciseaux";
            }
          } else if (choix1 === "ciseaux") {
            if (choix2 === "pierre") {
              tabPoints[1]++;
              console.log("=> ScoreO++:", tabPoints);
              return "pierre";
            } else if (choix2 === "feuille") {
              tabPoints[0]++;
              console.log("=> ScoreU", tabPoints);
              return "ciseaux";
            }
          }
        }

        // Choix ordi : récup valeur tableau au hazard
        let tChoix = ["pierre", "feuille", "ciseaux"];
        function tablAzar(tab) {
          let choixOrdi = Math.round(Math.random() * tab.length);
          return tab[choixOrdi];
        }

        // début de partie
        const choixUtilisateur = prompt(
          "Choisissez-vous pierre, feuille, ou ciseaux ?"
        );

        let choixOrdi = tablAzar(tChoix);
        let resultat = comparer(choixUtilisateur, choixOrdi);
      }

      if (tabPoints[0] == tabPoints[1]) {
        resultat = "Egalité !";
      } else if (tabPoints[0] > tabPoints[1]) {
        resultat = "Vous avez gagné !";
      } else {
        resultat = "Vous avez perdu !";
      }

      // console.log("Ordinateur:");
      console.log(resultat);
    default:
  }
};

main();
