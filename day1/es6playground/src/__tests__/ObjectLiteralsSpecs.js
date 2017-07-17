describe('Object literals', () => {
    it('helps quick definition of objects', () => {
let hello = 'Hello'
let world = 'World'

let oldWay = {
    hello: hello,
    world: world
}

let newWay = {
    hello,
    world
}

expect(newWay).toEqual(oldWay)
    })
})