list_of_nums = [19,19,5,5,5]

function numTracker(list){
    let num_of_19s = 0
    let num_of_5s = 0

    for (let i = 0; i < list.length; i++){
        if (list[i] == 19){
            num_of_19s += 1
        }
        if (list[i] == 5){
            num_of_5s += 1
        }
    }
    if (num_of_19s == 2 && num_of_5s <= 3){
        console.log(true)
    } else{
        console.log(false)
    }
}

numTracker(list_of_nums)