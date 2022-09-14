const string = 'javascript es maravillos, con javascript puedo crear el fututro de la web'

const replacedString =string.replace('javascript','python')
const replacedString2 =string.replaceAll('javascript','python')

console.log(replacedString2);

//private methods (#)

class Message {

    constructor(add) {
        this.add = add

    }
    #show(val){
        console.log(val);
    }

    get #add(){

    }  
    set #add(add){

    }
}

const message = new Message();
message.show('valor')


// promise any

const promise = new Promise((resolve, reject) =>reject('1'))
const promise2 = new Promise((resolve, reject) =>resolve('2'))
const promise3= new Promise((resolve, reject) =>resolve('3'))

Promise.any([promise, promise2, promise3]).then((res) =>console.log(res))

// WeakRef
class AnyClass{
    constructor(element){
        this.ref = new WeakRef(element)
    }
}

// 

let isTrue = true;
let isFalse= false;

console.log(isTrue &&=isFalse);

 isTrue = true;
 isFalse= false;

console.log(isTrue ||=isFalse);

 isTrue = undefined;
 isFalse= false;

console.log(isTrue ??=isFalse);

console.log(isTrue);