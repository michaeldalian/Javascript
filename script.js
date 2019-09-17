const main = () => {
  // A changer manuellement pour choisir son test
  const TestAEffectuer = 2;
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

    default:
  }
};

main();
