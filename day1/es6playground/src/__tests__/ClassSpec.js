class Animal {
    constructor(name) {
        this.name = name
    }
    static foo() {
        console.log('Foo is static')
    }
    makeSound() {
        console.log('Sound from ' + this.name)
    }
}

class Dog extends Animal {
    constructor(){
        super('Dog')
    }
    makeSound(){
        console.log('Dog barks')
    }
}

describe('Classes', () => {
    it('calling Animal instance.', () => {
        let a = new Animal('Lion')
        a.makeSound() // Sound from Lion
        Animal.foo() // Foo is static

    })

    it('Dogs should bark', () => {
        let dog = new Dog()
        dog.makeSound()
    })
})