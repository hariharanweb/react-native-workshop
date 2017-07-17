describe('Arrow Functions', () => {
    it('are simple', () => {
        let items = [1, 2, 3, 4, 5]
        let mappedItems = items.map(item => item * 2)

        expect(mappedItems).toEqual([2, 4, 6, 8, 10])
    })

    it('auto returns', () => {
        let helloDate = () => 'Hello ' + new Date()
        console.log(helloDate())
    })
})