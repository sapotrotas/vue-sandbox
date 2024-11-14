export const isInteger = (val) => typeof val === 'number' && Number.isInteger(val)

export const isArrayOfIntegers = (val) => Array.isArray(val) && val.every(isInteger)