const isLogged = true;

function firstPromise(isTrue) {
    return new Promise((resolve, reject) => {
        let rand = Math.random();
        if (isTrue) {
            resolve(rand);
        } else {
            reject(new Error("Ops"));
        }
    })
};

function secondPromise(rand) {
    return new Promise((resolve, reject) => {
        if (rand > 0.5) {
            resolve(console.log(`{name: "John", age: 24}`));
        } else {
            reject(new Error("second Promise has gone wrong"));
        }
    })
}


firstPromise(isLogged)
.then(secondPromise)
.catch((err) => (console.log(new Error(err))))
.finally(()=>console.log("finally!"))
