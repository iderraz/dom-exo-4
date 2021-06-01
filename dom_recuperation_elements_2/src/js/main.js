// EXO:4 //
// ### 1. Affiche le contenu textuel du second h1
let textH1 = document.getElementsByTagName("h1")[1].textContent;
console.log(textH1);
// ### 2. Affiche le contenu textuel du dernier li
let maDiv = document.getElementsByTagName("div");
console.log(maDiv);
let lastLi = document.getElementsByTagName("li")[3].textContent;
console.log(lastLi);
// ### 3. Affiche le contenu textuel du premier p en majuscule
let firstP = document.getElementsByTagName("p")[0].textContent.toLocaleLowerCase();
console.log(firstP);
// ### 4. Avec l'aide d'un forEach affiche le contenu de chaque li, bonus : affiche chaque li en majuscule
let allLi = document.getElementsByTagName("li");
console.log(Array.from(allLi));

let tabLi = Array.from(allLi);

tabLi.forEach(element => {
   element.textContent=  element.textContent.toUpperCase();
    console.log(element.textContent);
});

// EXO:5 //





