

// const ap = {
//     first : "chirag",
//     last :"bhardwaj"
// }


// console.log(JSON.stringify(ap));




const api = `{
    "first": "chirag",
    "last":"bhardwaj"
}`

const obj = JSON.parse(api);
console.log(obj.first);