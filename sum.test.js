const sum = require('./sum')
// 1+2 =3
// test('what we are doing in this test',()=>{func which is going to be called while testing})
// expect(we going to tell what we expect from this function).toBe(what is going to be the answer)
test('properly adds two numbers',()=>{
    expect(sum(1,2)).toBe(3)
})