const Course = require("./Course");
const Pilote = require("./Pilote");
const Voiture = require("./Voiture");
//3 voiture
const v1 = new Voiture("BMW");
const v2 = new Voiture("Renault");
const v3 = new Voiture("Golf");
const v4 = new Voiture("Renault");
//3 pilotes
const p1 = new Pilote("Hocine")
const p2 = new Pilote("Tina")
const p3 = new Pilote("Ouma")
const p4 = new Pilote("Samir")
//3 courses;
const c1 = new Course(v1, p1, 300, 100, 10, 2);
const c2 = new Course(v2, p2, 300, 100, 10, 2);
const c3 = new Course(v3, p3, 300, 100, 10, 2);
const c4 = new Course(v4, p4, 300, 100, 10, 2);
//afficher 
//[0,1[
let c = [c1, c2, c3, c4]//,[2,5,6,1]


for (let i = 0; i < c.length; i++) {
    //   a.afficherCourse();
    c[i]
}


let m = [2, 5, 6, 1]
m.sort()
console.table(c)
console.log("*********************************")
console.log("le modele est: " + c[0].vitesse);