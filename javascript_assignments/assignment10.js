function evenNums(){
    let sumOfNums = 0
    for (i = 4; i < 72 + 1; i++){
        if (i % 2 == 0){
            sumOfNums += i
            console.log(i)
        }
    }
    console.log(`Sum = ${sumOfNums}`)
}

evenNums()