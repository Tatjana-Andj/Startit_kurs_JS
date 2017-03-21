var str = "anna";
var str1 = "karenjina";

str.toLowerCase();

function palindrom(str) {
    
    for ( var i = 0; i < Math.floor(str.length/2); i++ ) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrom(str));
console.log(palindrom(str1));