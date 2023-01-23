// ----------Egzersiz 1 ---------------------

//E1.1
console.log("--------------1.etkinlik---------------")  

let firstName = "Bahar",
    lastName = "Yıldız"
    country = "Türkiye",
    city = "Yozgat",
    age = 25,
    isMarried = false,
    year = 2023

console.log(typeof(firstName),
            typeof(lastName),
            typeof( country),
            typeof( city),
            typeof(age),
            typeof(isMarried),
            typeof( year)
            ) 

//E1.2  
console.log("--------------2.etkinlik---------------")  

let num = 10
let str ="10"
console.log(str==num)

//E1.3
console.log("--------------3.etkinlik---------------")  

//console.log(parseInt("9.8")==10)
let sayi = "9.8"
let say= 10

console.log(parseInt(sayi)==say)

//1.4
console.log("--------------4. etkinlik---------------")  

    //1.4.1
    console.log(5==5)
    console.log(true==1)
    console.log(false==0)
    //1.4.2
    console.log(4==5)
    console.log("ad"=="isim")
    console.log(4=="dört")
 
 
//1.5  
console.log("--------------5.etkinlik---------------")  
console.log(4 > 3) //true
console.log(4 >= 3) //true
console.log(4 < 3) //false
console.log(4 <= 3) //false
console.log(4 == 4) //true
console.log(4 === 4) //true
console.log(4 != 4) //false
console.log(4 !== 4) //false
console.log(4 != '4') //false
console.log(4 == '4') //true
console.log(4 === '4') //false
let py = "python"
let jr = "jargon"
console.log(py.length !== jr.length)

//1.6
console.log("--------------6.etkinlik---------------")  

console.log(
4 > 3 && 10 < 12,//true
4 > 3 && 10 > 12, //false
4 > 3 || 10 < 12, //true
4 > 3 || 10 > 12, //true
!(4 > 3), // false
!(4 < 3), //true
!(false), //true
!(4 > 3 && 10 < 12), //false
!(4 > 3 && 10 > 12), //true
!(4 === '4') //true
            )
 let dr = "dragon"   
 let pyt ="python "
 console.log(dr.includes("on")!==pyt.includes("on"))
 
 //E1.7
 console.log("--------------7.etkinlik---------------")  

    //1.7.1
    let now = new Date()
    console.log(now.getFullYear())
    
    //1.7.2
    console.log(now.getMonth()) 

    //1.7.3
    console.log(now)

    //1.7.4
    console.log(now.getDay())

    //1.7.5
    console.log(`Saat =${now.getHours()}.${now.getMinutes()}.${now.getSeconds()}`)

    //1.7.6
    console.log(now.getMinutes())

    //1.7.7
    console.log(now.getTime())

// ----------Egzersiz 2 ---------------------

//E2.1
