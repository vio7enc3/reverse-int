module.exports = function reverse (n) {
    var pos = (n ** 2) ** 0.5;
    var arr = pos.toString().split('');
    var arrRev = +arr.reverse().join('');
    return arrRev;
}
