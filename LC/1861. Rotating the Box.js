/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
    let res = rotate([...box])
    for (let i = res.length - 1; i>= 0; i--) {
        for (let j = 0; j < res[0].length; j++) {
            if (i + 1 < res.length) {
                if (res[i][j] == "#"&&res[i+1][j]==".") {
                    res[i][j]="."
                    drop(i, j, res)
                }
            }
        }
    }
    return res
};

function drop(r, c, a) {
    while(r<a.length-1 &&a[r+1][c] =="."){
        r++
    }
    a[r][c]="#"
    return
}



function rotate(m) {
    let res = Array(m[0].length).fill().map(x => Array(m.length).fill(0))
    for (let r = 0; r < m.length; r++) {
        for (let c = 0; c < m[0].length; c++) {
            res[c][r] = m[r][c]
        }
    }
    for (let i = 0; i < res.length; i++) {
        res[i].reverse();
    }
    return res
}

// 1861. Rotating the Box