let min_num = 1;
let max_num = 10;
let num = 0;
for (let i = min_num; i <= max_num; i++) {

    for (j = 1; j <= i; j++) {
        if (i % j == 0) {
            num++
        }
    }
    if (num > 1) {
        console.log(i)
        num = 0
    }
}