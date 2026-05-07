function getchoixUser(choix) {
    switch (choix) {
        case 1:
            return ("Thé  5€");
            console.log("hello")
            break;
        case 2:
            console.log("Café  1.5€");
            break;
        case 3:
            console.log("Café au lait  5€");
            break;
        default:
            console.log("Quitter");
            break;
    }
}

//1 , 4 ==> 4-1+1
let random = Math.floor(Math.random() * 4) + 1
getchoixUser(random)