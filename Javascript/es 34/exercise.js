function printAsyncName(callback,firstName){
    let id = setInterval(callback,1000);
    setTimeout(() => clearInterval(id), 1000);
    let newName = setInterval(firstName,2000);
    setTimeout(() => clearInterval(newName), 2000);
}

printAsyncName(() => console.log("Hello"),() => console.log("Paola"));
