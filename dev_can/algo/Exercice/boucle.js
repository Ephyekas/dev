// console.log("bonjour");

// 1
// for (let i = 0; i < 50 ; i++)
// {
//     console.log("bonjour");
// }


// 2
// for (let i = 0; i < 5  ; i++)
// {
//     console.log("A");
//     console.log("B");
// }


// 3
// for (let i = 0; i < 3 ; i++)
// {
//     for(let j = 0; j < 5 ; j++)
//     {
//         console.log("A");
//     }
//     console.log("B");
// }


// 4
// let result=0;

// for (let i = 0; i < 10 ; i++)
// {
//     console.log(result++)
// }


// // 5

// let result=3;

// for (let i = 3; i < 11 ; i++)
// {
//     console.log(result++);
// }


// 6


for (let i = 0; i < 10 ; i++)
{
    console.log(i%4);
}

// 7



// for(let i = 0; i < 10 ; i++)
// {
//     if (i>4 && i<8)
//     {
//         console.log("A");
//     }

//     else {
//         console.log(i);
//     }

// }

// 8

// for (let i = 0; i < 10 ; i++)
// {
//     if (i%3 == 0)
//     {
//         console.log(i+100);
//     }

//     else 
//     {
//         console.log(i);
//     }
// }

// // 9
// for (let i = 0; i < 10 ; i++)
// {
//     if (i%3 == 1)
//     {
//         console.log(i+100);
//     }

//     else if (i%3 == 2)
//     {  
//         console.log(i+200);
//     }

//     else 
//     {
//         console.log(i);
//     }
// }

// 10
//

// for (let i = 1; i < 7 ; )
// {
//     for (let j = 1 ; j < 6 ; j++)
//     {
//         console.log(i, j);
//     }
// }

//11

// for (let i = 1; i < 7 ; i++)
// {
//     for (let j = i ; j < 6 ; j++)
//     {
//         console.log(i, j);
//     }
// }

//12 

// for (let i = 1; i < 21 ; i++)
// {
//     for (let j = i ; j < 20 ; j++)
//     {
//         console.log(i, j);
//     }
// }


//13
// for (let i = 1; i < 2 ; i++)
// {
//     for (let j = i ; j < 10 ; j++)
//     {
//         console.log(i, 'x', j, '=', j);
//     }
// }

//14
// for (let i = 2 ; i < 3 ; i++)
// {
//     for (let j=i ; j < 10 ; j++)
//     {
//         console.log(i, 'x', j, '=', i*j);
//     }
// }

//15
// for (let i = 1 ; i < 10 ; i++)
// {
//     for (let j=i ; j < 10 ; j++)
//     {
//         console.log(i, 'x', j, '=', i*j);
//     }
// }


//16 

// let a = 0 ;

// for  (let i = 1 ; i < 101 ; i++)
// {
//     a+=i
// }
// console.log(a);

// 17

// let a=0;
// let i=0;

// while(a < 302253)
// {
//     i++
//     a+=i
// }
// console.log(i, a==302253)


//18
// function fibonacci(nbr) {
//     if(nbr < 2){
//       return nbr;
//     }
//     return fibonacci(nbr - 1) + fibonacci(nbr - 2);
//   }
//    console.log(fibonacci(10));