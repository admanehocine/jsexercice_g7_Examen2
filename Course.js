class Course {
    constructor(v, p, max_v, min_v, max_t, min_t) {
        this.voiture = v;
        this.pilote = p;
        this.vitesse = Math.floor(Math.random() * (max_v - min_v + 1)) + min_v;
        this.temps = Math.floor(Math.random() * (max_t - min_t + 1)) + min_t;
    }

    afficherCourse() {
        console.log(this.pilote.presentation() + "," + this.temps + " min " +
            this.vitesse + " km/h" + " catégorie " + this.categorie())
    }

    categorie() {
        if (this.vitesse >= 200) {
            return "Rapide";
        } else if (this.vitesse >= 100) {
            return "Moyen";
        } else {
            return "Lent";
        }
    }
    categorie2() {
        if (this.vitesse < 100) {
            return "Lent";
        } else if (this.vitesse < 200) {
            return "Moyen";
        } else {
            return "Rapid";
        }
    }

}
module.exports = Course;
