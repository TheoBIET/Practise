// Classe Personnage
class Personnage {
  constructor(pseudo, classe, sante, attaque, niveau) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = parseInt(this.getRandomHealth());
    this.attaque = parseInt(this.getRandomAttack());
    this.niveau = 1;
  }

  evoluer() {
    this.niveau++;
    console.log(this.pseudo + " passe au niveau " + this.niveau + "!");
  }

  verifierSante() {
    if (this.sante <= 0) {
      this.sante = 0;
      console.log(this.pseudo + " a perdu !");
      continuer = true;
    }
  }

  getRandomHealth() {
    return Math.floor(Math.random() * 100) + 100;
  }

  getRandomAttack() {
    return Math.floor(Math.random() * 25);
  }

  get informations() {
    return (
      this.pseudo +
      " (" +
      this.classe +
      ") a " +
      this.sante +
      " points de vie et est au niveau " +
      this.niveau +
      "."
    );
  }
}

// Classe Magicien
class Magicien extends Personnage {
  constructor(pseudo) {
    super();
    this.pseudo = pseudo;
    this.classe = "Magicien";
    this.sante = parseInt(this.getRandomHealth());
    this.attaque = parseInt(this.getRandomAttack());
  }

  attaquer(personnage) {
    this.attaque = parseInt(this.getRandomAttack());
    personnage.sante -= this.attaque;
    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        " en lançant un sort " +
        "(" +
        this.attaque +
        " dégâts)"
    );
    this.evoluer();
    personnage.verifierSante();
  }

  coupSpecial(personnage) {
    this.attaque = parseInt(this.getRandomAttack());
    personnage.sante -= this.attaque * 5;
    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        ' avec son coup spécial "Puissance des Arcanes" ' +
        "(" +
        this.attaque +
        " dégâts)"
    );
    this.evoluer();
    personnage.verifierSante();
  }
}

// Classe Guerrier
class Guerrier extends Personnage {
  constructor(pseudo) {
    super();
    this.pseudo = pseudo;
    this.classe = "Guerrier";
  }
  attaquer(personnage) {
    this.attaque = parseInt(this.getRandomAttack());
    personnage.sante -= this.attaque;
    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        " avec son épée " +
        "(" +
        this.attaque +
        " dégâts)"
    );
    this.evoluer();
    personnage.verifierSante();
  }

  coupSpecial(personnage) {
    this.attaque = parseInt(this.getRandomAttack());
    personnage.sante -= this.attaque * 5;
    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        ' avec son coup spécial "Haches de Guerre" ' +
        "(" +
        this.attaque +
        " dégâts)"
    );
    this.evoluer();
    personnage.verifierSante();
  }
}
var magicien = new Magicien("Gandalf");
var guerrier = new Guerrier("Thor");

var continuer = false;

function start() {
  var magicien = new Magicien("Gandalf");
  var guerrier = new Guerrier("Thor");
  console.log(guerrier.informations);
  console.log(magicien.informations);

  do {
    magicien.attaquer(guerrier);
    console.log(guerrier.informations);
    guerrier.attaquer(magicien);
    console.log(magicien.informations);
    magicien.coupSpecial(guerrier);
    console.log(guerrier.informations);
    guerrier.coupSpecial(magicien);
    console.log(magicien.informations);
  } while (!continuer);
}

start();
