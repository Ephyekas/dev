// function fTest()
// {
//     console.log("Bonjour");
// }

// fTest();

// function fTest(n,name)
// {
//     for (let i = 0; i < n; i++)
//     {
//         console.log(name);
//     }
// }

// fTest(5,"pierre");



// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
// Utiliser la fonction f1 pour afficher 17 dans la console.

// function f1()
// {
//     console.log(17);
// }
// f1();


// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
// Utiliser la fonction f2 pour afficher 17 dans la console
// function f2()
// {
//     return 17;
// }
// console.log(f2());



// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
// Utiliser la fonction f3 pour écrire dans la console le double de 99.
// function f3(a) 
// {
//     console.log(a*2);
        
// }
// f3(99);


// Utiliser la fonction f4 pour écrire dans la console le double de 99.
// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
// function f4(a)
// {
//     return a*=2;
// }
// console.log(f4(99));




// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.

// function f5(a,b) 
// {
//     console.log(a+b);
// }
// f5(77,42);
// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.

// function f6(a,b)
// {
//     return a+=b;
// }
// console.log(f6(77,42));

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(a,b)
{
    if (a<b)
    {
        console.log(b);
    }

    else
    {
        console.log(a);
    }
    return
}

console.log(f7(42,78));

// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.

function f8(a,b,c)
{
    let result;

    if (a<b)
    {
        console.log(b);
        result=b;
    }

    else if (a>b)
    {
        console.log(a);
        resutl=a;
    }

    else
    {
        result=result>c
    }

    return
}

console.log(12,5,65)




// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function fTest(a,nom)
{
    for (let i = 0; i < a; i++)
    {
        console.log(nom);
    }
}

fTest(5,"fripon");