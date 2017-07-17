describe('Destructuring', () => {
    it('gets a small list from a big object', () => {
        let customer = {
            name: 'Hari',
            office: 'BLR',
            role: 'Developer'
        }
        let {name,role} = customer
        console.log(name)
        console.log(role)
    })
})