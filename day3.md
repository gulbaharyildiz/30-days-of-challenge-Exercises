# 3. Gün Egzersizleri
--------------


### Egzersiz: Seviye 1

1. firstName, lastName, country, city, age, isMarried, year değişkenlerini oluşturun ve bunlara değer atayın. Farklı veri türlerini kontrol etmek için typeof operatörünü kullanın.
````js
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
````
2. '10' türünün 10'a eşit olup olmadığını kontrol edin
````js
let num = 10
let str ="10"
console.log(str==num)
````
3. parseInt('9.8') 10'a eşit olup olmadığını kontrol edin
````js
//console.log(parseInt("9.8")==10)
let sayi = "9.8"
let say= 10

console.log(parseInt(sayi)==say)
````
4. Boolean değeri, doğru veya yanlıştır.
   1. Doğruluk değeri sağlayan üç JavaScript ifadesi yazın.
   ````js
    console.log(5==5)
    console.log(true==1)
    console.log(false==0)
    
   ````
   2. Yanlış değer sağlayan üç JavaScript ifadesi yazın.
   ````js
   console.log(4==5)
    console.log("ad"=="isim")
    console.log(4=="dört")
   ````

5. console.log() kullanmadan önce aşağıdaki karşılaştırma ifadesinin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.
   1. 4 > 3
   2. 4 >= 3
   3. 4 < 3
   4. 4 <= 3
   5. 4 == 4
   6. 4 === 4
   7. 4 != 4
   8. 4 !== 4
   9. 4 != '4'
   10. 4 == '4'
   11. 4 === '4'
   12. Python ve jargon un uzunluğunu bulun ve yanlış bir karşılaştırma ifadesi yapın.
````js
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
    
````

6. console.log() kullanmadan önce aşağıdaki ifadelerin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.
   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(false)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')
   11. Hem dragon hem de python'da 'on' yoktur.
````js
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
````

7. Aşağıdaki etkinlikleri yapmak için Date nesnesini kullanın.
   1. Bugün yıl nedir?

   ````js
   let now = new Date()
    console.log(now.getFullYear())
   ````
   2. Bugünün ayı rakam olarak nedir?
   ````js
    console.log(now.getMonth()) 

   ````
   3. Bugünün tarihi nedir?
   ````js
   console.log(now)
   ````
   4. Bugün sayı olarak gün nedir?
   ````js
   console.log(now.getDay())
   
   ````
   5. Şimdi saat kaç?
   ````js
   console.log(`Saat =${now.getHours()}.${now.getMinutes()}.${now.getSeconds()}`)
   ````
   6. Dakika kaç şimdi?
   ````js
   console.log(now.getMinutes())
   ````
   7. 1 Ocak 1970'den bugüne kadar geçen saniye sayısını bulun.
   ````js
   console.log(now.getTime())
   ````

### Egzersiz: Seviye 2

1. Kullanıcıdan üçgenin tabanını ve yüksekliğini girmesini ve bir üçgenin alanını hesaplamasını isteyen bir komut dosyası yazın (alan = 0,5 x b x h).

   ```sh
   Enter base: 20
   Enter height: 10
   The area of the triangle is 100
   ```

2. Kullanıcıdan üçgenin a kenarını, b kenarını ve c kenarını girmesini ve üçgenin çevresini hesaplamasını isteyen bir komut dosyası yazın (çevre = a + b + c)

   ```sh
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
   ```

3. Komut istemini kullanarak uzunluk ve genişliği alın ve bir dikdörtgenin alanını hesaplayın (alan = uzunluk x genişlik ve dikdörtgenin çevresi (çevre = 2 x (uzunluk + genişlik))
4. Komut istemini kullanarak yarıçapı alın ve bir dairenin alanını (alan = pi x r x r) ve bir dairenin çevresini (c = 2 x pi x r) hesaplayın, burada pi = 3.14.
5. y = 2x -2'nin eğimini, x kesme noktasını ve y kesme noktasını hesaplayın
6. Eğim m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). (2, 2) noktası ile (6,10) noktası arasındaki eğimi bulun
7. Yukarıdaki iki sorunun eğimini karşılaştırın.
8. y'nin değerini hesaplayın (y = x<sup>2</sup> + 6x + 9). Farklı x değerleri kullanmayı deneyin ve y'nin hangi x değerinin 0 olduğunu bulun.
9. Kullanıcıdan saat ve saat başına oran girmesini isteyen bir komut dosyası yazın. Kişinin ücretini hesapla?

    ```sh
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120
    ```

10. Adınızın uzunluğu 7'den büyükse, adınız uzun, yoksa adınızın kısa olduğunu söyleyin.
11. Adınızın uzunluğunu ve soyadınızın uzunluğunu karşılaştırın ve bu çıktıyı almalısınız.

    ```js
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    ```

    ```sh
    Your first name, Asabeneh is longer than your family name, Yetayeh
    ```

12. İki değişken _myAge_ ve _yourAge_ bildirin ve bunlara başlangıç değerleri ile myAge ve yourAge atayın.

   ```js
   let myAge = 250
   let yourAge = 25
   ```

   ```sh
   I am 225 years older than you.
   ```

13. İstemi kullanarak, kullanıcının doğduğu yılı alır ve kullanıcı 18 veya daha büyükse, kullanıcıya belirli bir süre beklemesini söylemediği takdirde, kullanıcının araba kullanmasına izin verir.
    ```sh

    Enter birth year: 1995
    You are 25. You are old enough to drive

    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years.
    ```

14. Kullanıcıdan yıl sayısını girmesini isteyen bir komut dosyası yazın. Bir kişinin yaşayabileceği saniye sayısını hesaplayın. Birinin sadece yüz yıl yaşadığını varsayalım

   ```sh
   Enter number of years you live: 100
   You lived 3153600000 seconds.
   ```

15. Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun
   1. YYYY-MM-DD HH:mm
   2. DD-MM-YYYY HH:mm
   3. DD/MM/YYYY HH:mm

### Egzersiz: Seviye 3

1. Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun. Saat ve dakika her zaman iki basamaklı olmalıdır (7 saat 07 ve 5 dakika 05 olmalıdır)
   1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05