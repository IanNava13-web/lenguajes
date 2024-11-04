
console.log("Instancias")

const a = 1
const b = "1"
const c = false
const d = []
const e = {}
const f = new Set()
const g = new Map()

console.log( typeof a === 'number' )
console.log( typeof b === 'string' )
console.log( typeof c === 'boolean' )
console.log( Array.isArray(d) )
console.log( typeof e === 'object' )
console.log( f instanceof Set )
console.log( g instanceof Map )
