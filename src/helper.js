// export const isEmptyObjParams = (obj) => {
//     return !Object.keys(obj).every(key => obj[key] !== null && obj[key] !== '');
// }
//
// export const isObject = (val) => {
//     return typeof val === 'object' && !Array.isArray(val);
// }

export const isBetween = (x, min, max) => {
    return x >= min && x <= max;
}