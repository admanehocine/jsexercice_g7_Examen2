class Pilote {
    constructor(nom) {
        this.nom = nom;
        //[20-69]
        this.age = Math.floor(Math.random() * 50) + 20;
    }
    presentation() {
        return "Pilot : " + this.nom + " , " + this.age + " ans"
    }

}
module.exports = Pilote; 