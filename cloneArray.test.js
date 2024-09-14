const cloneArray = require('./cloneArray')
test('properly clone array',()=>{
    const arr = [1,2,3]
    expect(cloneArray(arr)).toEqual(arr)
    // we are checking below bcz we need to make sure we are creating a duplicate not the original array we returning
    expect(cloneArray(arr)).not.toBe(arr)
})