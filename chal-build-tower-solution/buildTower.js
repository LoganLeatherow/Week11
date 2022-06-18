function towerBuilder(nFloors) {
    const tower = []
    let towerString = '*'
      for(let i = 0; i<nFloors; i++){ 
        tower.push(towerString)
        towerString += "**"
        for (let j = 0; j<i; j++){
          tower[j] = " " + tower[j] + ' '
        }
      }
      return tower
    }
    
    //alternatively
    // function towerBuilder(nFloors) {
    //   var tower = [];
    //   for (var i = 0; i < nFloors; i++) {
    //     tower.push(" ".repeat(nFloors - i - 1)
    //              + "*".repeat((i * 2)+ 1)
    //              + " ".repeat(nFloors - i - 1));
    //   }
    //   return tower;
    // }
    