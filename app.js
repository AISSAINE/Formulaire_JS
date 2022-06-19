//saisie via le clavier virtuel
const clickCV = document.querySelectorAll('.cel');

for (const vide of clickCV) {
    vide.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        let valInp = e.target.textContent

        document.getElementById('monMp').value += valInp;
    })
}

//Générateur de nombre aléatoire sans doubles 
function inArray(arr, el) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i] == el) return true;
    return false;
}
function getRandomIntNoDuplicates(min, max, clickCV) {
    var RandomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    if (clickCV.length * Math.random() / 0.57 > (max - min)) return "";  //break endless recursion
    if (!inArray(clickCV, RandomInt)) {
        clickCV.push(RandomInt);
        return RandomInt;
    }
    return getRandomIntNoDuplicates(min, max, clickCV); //recurse
}

//remplissage de la grille 
var duplicates = [];
for (const attribuerNombre of clickCV) {
    attribuerNombre.textContent = getRandomIntNoDuplicates(0, 9, duplicates);
}

// affichage résultat de l'authentification et validité des champs à saisir

const btn = document.getElementById('btn');
const monEmail = document.getElementById('monInputEmail');
const monMp = document.getElementById('monMp');

//console.log(monEmail.validity.valid);//console.log(monMp.validity.valid);
const result = document.querySelector('.result');
let nb = 2

btn.addEventListener("click", function (event) {


    if (monEmail.validity.valid && monMp.validity.valid) {
        result.textContent = 'Vous êtes désormais connecté !';
        result.style.backgroundColor = '#ffffe0';
        monEmail.style.border = "1px solid green";
        monMp.style.border = "1px solid green";
        window.alert('identification réussie');
    }
    else {
        result.textContent = `L'authentification a échoué !`;
        result.style.backgroundColor = '#ffffe0';
        monEmail.style.border = "1px solid red";
        monMp.style.border = "1px solid red";
        window.alert('identification non réussie');
    }

    monEmail.value =""
    monMp.value=""
    
}, false);


