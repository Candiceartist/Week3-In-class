et num = -13
console.log(num)

if (num > 0) {
  console.log("Its Positive")
} else {
  console.log("Negative")
}

num = 22

if (num > 0) {
  console.log("Its Positive")
} else {
  console.log("Negative")
}
// -----------------------------
let acceptedAge = 18
let age = 16

if (age > acceptedAge) {
  console.log(age, "Welcome In User!!")
} else {
  console.log(age, "Go Home Roger.")
}
// -----------------------------

let nums = [6, 5, 0, 3, -453]

nums.forEach((item) => {

  if ( item > 0 && item > 100) {
    console.log(`${n} is Positive and Greater than 100`)
  }
  // If not This ^^ Try This vv
  else if (item > 0 && item < 100) {
    console.log(n, "is positive but less than 100")
  }
  // If not This ^^ Try This vv
  else if (n < 0) {
    console.log(n, "is negative")
  }
  // If none of this at all, then just do this vv
  else {
    console.log("I just dont know")
  }
})
// -----------------------------
// --------- Nested 
let x = 10

if (x = 10) {
  console.log('Ten')
  let myFavNum = 12
  if (myFavNum > x) {
    console.log("Something Else")
  }
}

// -----------------------------
let money = 5.00
let croissant = 2.99
let cheese = 3.99

if(money > croissant){
  console.log("Buy Croissant")
}

if(money > cheese){
    console.log("Buy Cheese")
}


if(money > croissant){
  let change = money - croissant
  if(change > cheese){
    console.log("Buy Both")
  }else{
    console.log("Not enough for both")
  }
}