/*
What do you mean by a generator function?

Generator function doesn't execute things all at once, but it actually creates the things on the resume basis.You hit it once, it's going to generate one result, then you hit it again, it's going to generate the result again.Then you hit it again, it's going to generate the result again.It doesn't execute the whole thing at once.
*/


// uses a special symbol '*'
function* numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
}

// yield is used instead of the return

let gen = numberGenerator()
let genTwo = numberGenerator()

// here .next() is an iterator And this iterator keeps a track of the whole things which are available in the array. And it keeps on going on the next value until it hits out of the bound of the array.

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
// console.log(gen.next().value)

console.log(genTwo.next().value)
console.log(genTwo.next().value)