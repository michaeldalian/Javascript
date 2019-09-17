const main = () => {
  // document.getElementById("nbAle").value = "00";

  let _monNombre;

  //compris entre 0 et1 *100 arrondi
  const _PcNombre = Math.round(Math.random() * 100);

  function myfunc() {
    _monNombre = window.prompt("Devine combien j'ai de doigts");
  }

  for (let i = 0; i < 2; i++) {
    myfunc();
    // Sortie de boucle
    return;
  }

  // window.prompt("Devine combien j'ai de doigts", _monNombre);

  console.log(_monNombre);
};

main();
