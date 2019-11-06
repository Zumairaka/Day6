// var promise1 = new Promise((resolve,reject)=>
// {
//     const x = 10;
//     const y = 10;
//     if (x === y)
//     {
//         resolve();
//     }
//     else 
//     {
//         reject();
//     }
// });

// promise1.
//     then(()=>
//     {
//         console.log("Equal");
//     },
//     ()=>
//     {
//         console.log("Not Equal");
//     });

//Promise with parameter passing

// var promise1 = new Promise((resolve,reject)=>
// {
//     const x = 10;
//     const y = 10;
//     if (x === y)
//     {
//         resolve("Success"); //only one parameter is allowed. if more than one parameter is
//     }                       //there then store all the element as an object and pass the object
//     else            // var obj = {a:x,msg:"Success"} now pass resolve(obj)
//     {
//         reject("Success");
//     }
// });

// promise1.
//     then((msg)=>
//     {
//         console.log(msg);
//     }).
//     catch((msg)=>       //if error it goes to catch..error means reject here.
//     {
//         console.log(msg);
//     });

//Async and Await

// async function f()
// {
//     let promise = new Promise((resolve,reject)=>
//     {
//         var x = 4;
//         var y = 5;
//         setTimeout(()=>
//         {
//             if(x == y)
//             {
//                 resolve("Done!");
//             }
//             else
//             {
//                 reject("Rejected!");
//             }
//         },2000);
//     });
//     await promise.
//     then(function(msg)
//     {
//         console.log(msg);
//     }).
//     catch(function(err)
//     {
//         console.log(err)
//     });
// }
// f();

//