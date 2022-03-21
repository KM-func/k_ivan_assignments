var_a = 11
var_b = 89

function var_swapper(var_a, var_b){
    console.log(`${var_a}, ${var_b}`)
    temp_var = var_a
    var_a = var_b
    var_b = temp_var

    console.log(`${var_a}, ${var_b}`)
}

var_swapper(var_a, var_b)