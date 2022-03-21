let max_num = 50

function even(max_num){
    for (i = 0; i < max_num + 1; i++){
        if (i % 2 == 0 || i % 3 == 0){
            console.log(i)
        }
    }
}

even(max_num)