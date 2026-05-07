let list = [10, 20, 40, 40, 20, 20]
//calculer nombre de fois que element existe dans la liste
function searchNbrElement(l, elem) {
    let nbr = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === elem) {
            //nbr = nbr + 1
            nbr++;
        }
    }
    return nbr;
}

let res = searchNbrElement(list, 40);
console.log("le resultat est: " + res)