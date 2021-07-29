// let nom="Lucylia";
// let age=999;
// let passion=["Conquérir", "Dormir"];
// let bvn="Hoy " + nom + " ! Tu as " + age + " aujourd'hui, c'est dingue ! Let's get the party started !";
// let id=[nom, age, passion];
// console.log(id[2][1]);

// let nom="Nicclas";
// let prenom="Lucylia";
// let phrase=[nom, prenom, nom[0]  + prenom [0]];
// console.log(phrase);

// let noteA=66;
// let noteB=54;
// let result=0

// function moyen(){
//     result=noteA+noteB;
//     return result/2;
// }
// console.log(moyen());

// let a=666;
// let b=999;

// console.log(a == b);
// console.log(a != b);

// let age=11;
// let majorite=20;

// console.log(age == majorite ? "Passe" : "Passe Pas");

// let math = 13;
// let français = 11;
// let philo = 16;
// let result = 0;

// function moyenne() {
//     result = math+français+philo;
//     return result/3;
// }
// function bac(a){
//     if(a >= 15) {
//         console.log("Très Bien");
//     }
//     else if(a >=10) {
//         console.log("Assez Bien");
//     }
//     else {
//         console.log("Refusé");
//     }
// }
// bac(moyenne());

// let mage = {
//     "puissance" : 320,
//     "portee" : 42,
//     "faiblesse" : ["vie", "def"]
// };
// mage.element = "Feu";
// delete mage.element;
// mage.allies = {
//     "heal" : "Paladin", "fufu" : "Voleur"
// };

// console.log(mage.allies.fufu);

// let i = 0;
// let pyramid =[];
// while (i<10) {
//     i++;
//     pyramid.push("#");
//     console.log(pyramid);
// }

// let pyramid =[];
// for (let i = 0 ; i < 10 ; i++) {
//     pyramid.push("#");
//     console.log(pyramid);
// }
// function moyenne (tab) {
//     let result=0;
//     for (let i=0; i<tab.length; i++){
//         result=result + tab[i];
//     }
//     return result/tab.length;
// }


// console.log(moyenne([10,12,14,16,20,8,0,30]));
// function plus(tab) {
//     for (let i = 0 ; i < tab.length ; i++) {
//         for (let j=0 ; j < tab[i].length; j++){
//             tab[i][j]++;
//         }
//     }
//     return tab;
// }

// console.log(plus([[10,10],[2,2],[3,3]]));
// let maCarte, taCarte, transfert;
// [maCarte, taCarte] = ["Arcanin", "Démolosse"];
// transfert = maCarte;
// maCarte = taCarte;
// taCarte = transfert;
// console.log(maCarte, taCarte);
// const titre = document.getElementById("monTitre");
// const txt = document.getElementsByTagName("p");
// function ajoutTxt(pseudo, Texte){
//     const newTxt = document.createElement("p");
//     newTxt.innerHTML = `<b>${pseudo}</b> ${Texte}`;
//     document.body.appendChild(newTxt);
// }
// ajoutTxt("Leroy", "JEEEENKIIIINNNNSSSSSSS");
// ajoutTxt("JOSé", "AZERTYUIOP");
// ajoutTxt("COCO", "Wejdene");
// ajoutTxt("eiffel65", "Blue Dabeudi dabeuda");
// ajoutTxt("Cristaline", "eau de source");
// ajoutTxt("EPSON", "Rétro Projecteur");
// console.log(document.body);

// const titre = document.getElementById("monTitre");
// const txt = document.getElementsByTagName("p");
// const lien = document.getElementsByTagName("a")[0];
// lien.setAttribute("href", "https://www.super.com");
// console.log(titre.getAttribute("id"));
// console.log(lien.getAttribute("href"));

// const titre = document.getElementById("monTitre");
// const txt = document.getElementsByTagName("p");

// const txtTab = Array.from(txt);
// txtTab.map(txt => txt.innerHTML="LOLOL on t'as HACKED !");
// function troll(Texte){
//     const txtTab = document.createElement("p");
//     txtTab.innerHTML = `<b>${Texte}</b>`;
//     document.body.appendChild(txtTab);
// }
// troll("LOLOL on t'as HACKED !");

// const titre = document.getElementById("monTitre");
// const txt = document.getElementsByTagName("p");

// console.log(titre.offsetHeight, titre.offsetWidth, titre.clientWidth);

// const titre = document.getElementById("monTitre");
// const txt = document.getElementsByTagName("p");
// titre.style.color=`red`;
// titre.style.fontFamily=`Impact`;
// titre.style.boxShadow=`2px 2px 20px rgb(0, 250, 0)`;

// const titre = document.querySelector("#monTitre");
// const lien = document.querySelectorAll("a");
// lien[0].addEventListener("click", change);

// function change() {
//     titre.classList.add("maCouleur");
// }

// lien[1].addEventListener("click", remove);
// function remove() {
//     titre.classList.remove("maCouleur");
// }

// lien[2].addEventListener("click", onOff);
// function onOff() {
//     titre.classList.toggle("maCouleur");
// }

// const titres = document.querySelectorAll("h1");
// function goTitre(titre) {
//     const dist= titre.offsetTop;
//     window.scrollTo(0, dist);
// }
// goTitre(titres[6]);

// document.addEventListener("keypress", function(event) {
//     console.log(event.key);
// });

// const titre = document.getElementById("monTitre");
// document.addEventListener("mouseout",function(){
//     titre.style.display = "block";
// });

// document.addEventListener("mouseenter",function(){
//     titre.style.color = "red";
// });

// const txt = document.querySelector("textarea");
// const btn = document.querySelector("button");

// txt.addEventListener("keyup", function() {
// btn.disabled= txt.value.length >= 5 ? true : false;
// });

// const lelnput = document.querySelector("input");

// document.addEventListener('focus',function(){
//         lelnput.style.backgroundColor = "red";
//     });

// document.addEventListener('blur',function(){
//         lelnput.style.backgroundColor = "white";
//     });



// const images = document.querySelectorAll("img");

// const tabImg = Array.from(images);

// tabImg.map((image, i) => {
//     image.addEventListener("load", function() {
//         console.log(i);
//     })
// })


// const bar= document.querySelector(".bar");

// addEventListener("scroll",function() {
//     console.log(document.body.scrollHeight,innerHeight,pageYOffest);
// });

// const bar= document.querySelector(".bar");

// document.addEventListener("scroll",function() {
//     let scrollMax = document.body.scrollHeight - innerHeight;
//     let onEtOu = pageYOffset / scrollMax * 100;
//     bar.style.width = onEtOu+'%';
// });

// const titre = document.querySelector("h1");

// const txt = setTimeout(function(){
//     titre.textContent = "Rouge";
//     titre.style.opacity = 1;
//     document.body.style.background ="red";
// }, 2000);

// const titre = document.querySelector("h1");

// let timer = 3;

// titre.addEventListener("click", function(){
//     let countDown = setInterval(function() {
//         if ( timer>0 )
//         {
//             titre.textContent = timer;
//         }
//         else {
//             titre.textContent = " GO GO GO";
//             clearInterval(countDown);
//         }
//         console.log(timer--);
//     }, 2000);
// });

// let blbl


// addEventListener("click", function(unEvent){
//     const monImg = document.createElement("img");
//     monImg.setAttribute('src',"https://www.chroniquedisney.fr/imgPerso/heros/1955-clochard-17.jpg");
//     monImg.style.position =" absolute";
//     monImg.style.left = unEvent.x-100+'px';
//     monImg.style.top = unEvent.y-100+'px';
//     document.body.appendChild(monImg);

// });

// const monTxt = document.querySelector("textarea");
// const rendu = document.querySelector("div");

// monTxt.addEventListener("keyup", function(){
//     rendu.innerHTML = monTxt.value;
// })


// import collection from 'easter-egg-collection'

// const monTxt = document.querySelector("textarea");
// const rendu = document.querySelector("div");

// monTxt.addEventListener("keyup", function(){
//     rendu.innerHTML = marked(monTxt.value);
// })


// const monTxt = document.querySelector("textarea");
// const rendu = document.querySelector("div");

// monTxt.value= localStorage.getItem("monSuperTexte");

// if (monTxt.value){
//     rendu.innerHTML = localStorage.getItem("monSuperTexte");
    
// };
// monTxt.addEventListener('keyup', function(){
//     localStorage.setItem("monSuperTexte", monTxt.value);
//     rendu.innerHTML = marked(monTxt.value);
// });


// const monForm = document.querySelector("form");

// monForm.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.log("ok");
//     console.log(event);
//     monForm.reset();
// });


// let  counter = document.querySelector("h2");

// const majCounter = async () => {
//     let data = await
//     fetch('https://api.countapi.xyz/hit/bleu/fefe');

//     let count = await data.json();
//     counter.innerHTML = count.value;
//     counter.style.filter ='blur(0)';
// };

// majCounter();



// let leTexte = document.querySelector("textarea");

// let txt=[];
// let voyelles = ["a","e","i","o","u","y"];

// leTexte.addEventListener("keyup", function(unEvent){
//     let uneTouche = unEvent.key;
    
//     if ( !voyelles.includes(uneTouche))
//     {
//         txt.push(uneTouche);
//     }
//     console.log(txt.join('-'));
// });


class Imc {
    constructor (nom,poids,taille) {
        this.nom = nom;
        this.poids= poids;
        this.taille = taille;
        this.imc = this.calculImc();
    }
    calculImc () {
    }


  display(){
    console.log(this.poids,this.taille);
}}



const list = [
    new Imc("Sébastien Chabal", 135, 1.89),
    new Imc("Escaladeuse Ultra Svelte", 45, 1.70),
    ];




