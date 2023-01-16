function potion(ingrediant, vie) {
    let nbrpotion = 0
    while (vie >= 3 && ingrediant.tenebreux >= 2 && ingrediant.fee >= 1) {
        nbrpotion++
        ingrediant.tenebreux - 2
        ingrediant.fee - 1
        vie - 3
    }
    while (vie >= 2 && ingrediant.lezard >= 3 && ingrediant.souris >= 2 && ingrediant.rose >= 1) {
        nbrpotion++
        ingrediant.lezrd - 3
        ingrediant.souris - 2
        ingrediant.rose - 1
        vie - 2
    }
    while (vie >= 1 && ingrediant.jouvence >= 3 && ingrediant.crapaud >= 1) {
        nbrpotion++
        ingrediant.jouvence - 3
        ingrediant.crapaud - 1
        vie - 1
    }
    if (vie === 0) {
        return nbrpotion
    } else {
        vie
    }
}