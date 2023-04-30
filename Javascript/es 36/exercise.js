function repeatHello(callback){
    let hi = setInterval(callback, 1000);
    setTimeout(()=> clearInterval(hi),5000);
}

repeatHello(() => console.log("Hello"));


// - The callback function must be an arrow function, can you also explain why?

// La funzione di callback è utile perché 
// può essere passata come parametro di una funzione 
// e inoltre è indispensabile per rendere il nostro codice asincrono.
//  Si utilizza la versione arrow perché è molto più leggibile di una funzione 
// scritta in maniera "classica".