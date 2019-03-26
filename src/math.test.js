import {sum, mul, sub, div} from './math'

test('Adding 1 + 1 equals 2', ()=> {
    expect(sum(1, 1)).toBe(2)
})

test('Multiplying 2 * 2 equals 4', ()=>{
    expect(mul(2,2)).toBe(4)
})

test('Subtracting 4 - 3 equals 1', ()=>{
    expect(sub(4, 3)).toBe(1)
})

test('Dividing 6 / 2 equals 3', ()=>{
    expect(div(6,2)).toBe(3)
})
