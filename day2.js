// Multiple External Scripts kullanacagımız zaman script ile html dosyamıza eklememiz gerekiyor.

// E1.1
let challenge = "30 Days Of JavaScript" // değişken tanımlayıp değer atama

// E1.2
console.log(challenge) // console basma işlemi

// E1.3
console.log(challenge.length) //karakter uzunluğunu bulma

// E1.4
console.log(challenge.toUpperCase()) // bütün harfleri büyük yapma

// E1.5
console.log(challenge.toLowerCase()) // bütün harfleri küçük yapma

// E1.6
console.log(challenge.substring(1)) // nereye kadar kesmek istiyorsak ondan bir değer fazla yazmalıyız.

// E1.7

console.log(challenge.substring(3)) // diziler gibi saymaya sıfırdan (0) başaladığını unutmayınız.

// E1.8
console.log(challenge.includes("Script")) //arama yapıyor

// E1.9
console.log(challenge.split("")) //array şeklinde bölüyor

// E1.10
console.log(challenge.split(" ")) // boşluklardan parçalama işlemi

// E1.11
let firma ='"Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"'
 console.log(firma.split(",")) // Virgül (,) olan yerden parçalama  

// E1.12
//console.log(challenge.replace("JavaScript","Python")) // kelime değiştirme 


// E1.13
console.log(challenge.charAt(15)) // girilen indexdeki karakteri getirme

// E1.14

console.log(challenge.charCodeAt("J")) //ascıı degerini veriyor.

// E1.15

console.log(challenge.indexOf("a")) // baştan ilk a degerinin indexi buluyor.

// E1.16
console.log(challenge.lastIndexOf("a"))// son a harfinin indexsini buluyor.

// E1.17
let cümle = 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
console.log(cümle.indexOf("çünkü"))// cümle içindeki aradığımız kelimenin ilk başladığı indexi buluyor.

// E1.18
console.log(cümle.lastIndexOf("çünkü"))

// E1.19
console.log(cümle.search("çünkü"))

// E1.20
let string ="                  30 Days Of JavaScript                    "
console.log(string.trim())

// E1.21
console.log(challenge.startsWith("30"))

// E1.22
console.log(challenge.endsWith("JavaScript"))

// E1.23
console.log(challenge.match("a"))

// E1.24
let str1= "30 Days Of"
let str2 = " JavaScript"
console.log(str1.concat(str2))

// E1.25
console.log(challenge.repeat(2))






