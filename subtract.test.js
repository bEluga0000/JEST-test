const sub = require('./subtract')
test('properly subtracting the numbers',()=>{
    expect(sub(2,1)).toBe(1)
})