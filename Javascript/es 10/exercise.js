function multiplyByTwo(value) {
  let number = 2;{
    function inner(){
      let multiply = value * number;
      console.log(multiply);
    }
  }  inner()
}
console.log(multiplyByTwo(4));
