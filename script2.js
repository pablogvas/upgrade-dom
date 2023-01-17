//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement("div");
var body = document.querySelector("body");
body.appendChild(div);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div2 = document.createElement("div");
const p = document.createElement("p");
div2.appendChild(p);
body.appendChild(div2);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div3 = document.createElement("div");
for (let i = 0; i < 6; i++) {
    const newP = document.createElement("p");
    div3.appendChild(newP);
}
body.appendChild(div3);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const nuevoP = document.createElement("p");
nuevoP.textContent = "Soy dinámico!";
body.appendChild(nuevoP);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
//const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
    const li = document.createElement("li");
    li.textContent = apps[i];
    ul.appendChild(li);
}

body.appendChild(ul);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const borrar = document.querySelectorAll(".fn-remove-me");

for (let i = 0; i < borrar.length; i++) {
    borrar[i].parentNode.removeChild(borrar[i]);
}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//Recuerda que no solo puedes insertar elementos con .appendChild.
const newP = document.createElement("p");
newP.textContent = "Voy en medio!";

const divs = document.getElementsByTagName("div");
const primerDiv = divs[0];
const segundoDiv = divs[1];

primerDiv.parentNode.insertBefore(newP, segundoDiv);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
var masDivs = document.querySelectorAll('.fn-insert-here');
for (var i = 0; i < masDivs.length; i++) {
  masDivs[i].innerHTML = '<p>Voy dentro!</p>';
}
