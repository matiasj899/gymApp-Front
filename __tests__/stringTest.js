let password=2
describe('probando string en jest',()=>{
    test('el dato es string',()=>{
        expect(password).not.toBeUndefined()
            })
    test('el string no esta vacio',()=>{
expect(password).not.toHaveLength(0)
    })
})
