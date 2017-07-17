describe('Function parameters', () => {
    it('can have default values', () => {
        let foo = (a, b = 10) => a + b;
        console.log(foo(20, 10))
        console.log(foo(20))
    })

    it('the rest of parameters', () => {
        let sayHello = (...names) => {
            names.forEach(name => console.log('Hello ' + name))
        }
        sayHello('Hari', 'Nagu')

        console.log(...[1,2,3]) //spread
    })
})