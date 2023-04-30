const number = 15;

let newPromise = new Promise((resolve, reject) => {
    if (number > 10){
        resolve(number) ;
    }else{
        reject(number);
    }
});

newPromise
  .then((val) => console.log(val))
  .catch((err) => console.log("Error"))
