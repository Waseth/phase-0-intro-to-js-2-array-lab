// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(){
    let appendedcats = [...cats,"Broom"]
    return appendedcats
}

function prependCat(){
    let prependedcats = ["Arnold", ...cats]
    return prependedcats
}

function removeLastCat(){
    let removedlastcat = cats.slice(0, cats.length -1)
    return removedlastcat
}

function removeFirstCat(){
    let removedfirstcat = cats.slice(1)
    return removedfirstcat
}

