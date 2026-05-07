class Voiture {
    constructor(marque) {
        this.marque = marque;
        //[2005-2024]
        this.modele = Math.floor(Math.random() * 20) + 2005;
    }
    info() {
        return "Voiture: " + this.marque + " , " + this.modele;
    }
}
module.exports = Voiture;