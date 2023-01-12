// Multiple External Scripts kullanacagımız zaman script ile html dosyamıza eklememiz gerekiyor.

// ----------Egzersiz 1 ---------------------


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


// ----------Egzersiz 2 ---------------------

// E2.1
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
`)

// E2.2
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
`)

// E2.3
let a =10
let b= "10"
console.log(a==b) //true

// E2.4
let f = parseFloat(9.8)
let i = 10
console.log(f==i) //false
console.log(Math.ceil(f)==i) // true

// E2.5`
let py = "python"
let jr = "jargon"
console.log(py.includes("on")) // treu
console.log(jr.includes("on")) // true

// E2.6 
let cümle1 ="Umarım bu kurs jargonla dolu değildir"
console.log(cümle1.includes("jargon"))

// E2.7
console.log(Math.random()*101)

// E2.8
console.log(Math.random()*(101-50)+50)

// E2.9
console.log(Math.random()*256)

// E2.10
let js = "javascript"
console.log(js.length)
console.log(js.charAt(Math.random()*11))

// E2.11
console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125")
    
// E2.12
let cümle2 = 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
 console.log(cümle2.substring(cümle2.indexOf("çünkü çünkü")))



// ----------Egzersiz 3 ---------------------

//E3.1
 let cümle3 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
 let pattern = /love/gi
 console.log(cümle3.match(pattern))

 //E3.2
 let cümle4= 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
 let str = /çünkü/gi
console.log(cümle4.match(str))

//E3.3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let del= ""
let del1 = /[$%&@#]/gi
console.log(sentence.replace(del1,del))

//E3.4
let cümle5 = 'Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor.'
let say = cümle5.match(/\d+/gi) //regEx -> \d sayıları , + birden fazla basamagı , g global aramayı sağlar.
let hesapla = parseInt(say[0])+parseInt(say[1])+parseInt(say[2]) //dizideki string degerleri int değerine çevirip topladım.
console.log(hesapla)
