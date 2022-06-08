const capitalize = (string) =>{
    return string.charAt(0).toUpperCase()+string.slice(1);
}

module.exports = capitalize;

console.log(capitalize('paul'));