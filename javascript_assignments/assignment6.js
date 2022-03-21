let fruits_array = ['Apple', 'Orange', 'Mango', 'Guyabano']

function fruitsArrayPrinter(arr){
    for (i = 0; i < arr.length; i++){
        console.log(`${i+1}: ${arr[i]}`)
    }
}

fruitsArrayPrinter(fruits_array)