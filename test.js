class Cat {
  constructor(name) {
    this.name = name ;
  }

  innerMeow = () => {
    return `inner ${this.name}`;
  }

  // this might be regarded as the equivalent of class method
  // note this can actually take arguments
  static meow() {
    console.log('I am a cat. Meow ~')
  }
}

Cat.prototype.outterMeow = function(){
  console.log(`outter ${this.name}`);
}

let c1 = new Cat('Batosh');
/*let c2 = new Cat('Padmee');
c1.innerMeow(); // inner Batosh
c1.outterMeow(); // outter Batosh
c2.innerMeow(); // inner Padmee
c2.outterMeow(); // outter Padmee
Cat.meow(); // I am a cat. Meow ~


// this is how we made "class" like stuff
// in ES5
// TODO: see how to make sub class
function Dog(name) {
  this.name = name ;
}

// seems that object.prototype.machin
// is the way to add instance method 
// in ES5 when there were no "class"
Dog.prototype.wof = function() {
  console.log( `outter ${this.name}`);
}

let d = new Dog('qiuqiu');
d.wof() */
let noise = c1.innerMeow();
//console.log(noise);
let step = 0
let disturb = setInterval(noise, 1000)

function sayHello() {
  console.log("Hello")
  step += 1

  if (step >= 10) {
      clearInterval(disturb)
  }
}

