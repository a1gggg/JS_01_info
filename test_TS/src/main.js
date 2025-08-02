'use strict'
 
function makeUser() {
  return {
    name: "Іван",
    age: 30,
    ref: this,
    fun (){
      return this
    }
  };
}

let user = makeUser();
console.log(user.fun().name)