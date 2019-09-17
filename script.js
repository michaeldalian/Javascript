const main = () => {
  // document.getElementById("nbAle").value = "00";

  let _monNombre;
  let _monText;
  let _found = false;
  const stateTable = [1, "Trouvé", 2, "Plus petit", 3, "plus grand"];

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
};

main();
