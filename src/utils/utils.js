
const randomNum = function (minNum, maxNum) {

    switch (arguments.length) {
        case 1:
            let a = parseInt(Math.random() * minNum + 1, 10);
            return a
            break;
        case 2:
            let b = parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            return b
            break;
        default:
            return 0;
            break;
    }
};
export{
    randomNum
}