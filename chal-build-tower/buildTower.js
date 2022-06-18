const towerPower = (num) =>{
    let towerStar = '*'
    let tower = []
    for (let i = 0; i < num; i++) {
        tower.push(towerStar)
        towerStar += '**'
        for (let y = 0; y < i; y++) {
            tower[y]= ' '+ tower[y] + ' '         
        }
    }
    return tower
}

console.log(towerPower(3))

