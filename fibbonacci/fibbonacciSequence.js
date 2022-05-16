
function fibbonacci(){
    var f = [0,1]

    var counter = f.length
    while (counter < 1000){
        counter++

        var n = f[f.length - 1] + f[f.length - 2]
        f.push(n)
    }
    console.log(f)
}
fibbonacci()


//
//
//
// var  cars = ["Toyota","Mazda","volvo","AstonMartin"]
//
// console.log(cars)