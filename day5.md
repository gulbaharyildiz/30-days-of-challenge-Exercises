## 💻 Egzersizler

  

### Egzersiz: Seviye 1

  

```js

const  countries = [

'Albania',

'Bolivia',

'Canada',

'Denmark',

'Ethiopia',

'Finland',

'Germany',

'Hungary',

'Ireland',

'Japan',

'Kenya'

]

  

const  webTechs = [

'HTML',

'CSS',

'JavaScript',

'React',

'Redux',

'Node',

'MongoDB'

]

```

  

1. _boş_ bir dizi yaratın;

2. Eleman sayısı 5'ten fazla olan bir dizi yaratın.

3. Yarattığınız dizinin uzunluğunu bulun ( length ).

4. Dizinizdeki ilk elemanı, ortadaki elemanı ve sondaki elemanı bulun.

5.  _mixedDataTypes_ adında bir dizi yaratın,dizinin içine farklı veri tiplerinde elemanlar koyun ve bu dizinin uzunluğunu bulun. Dizinin uzunluğu 5'ten büyük olmalıdır.

6. ItCompanies adlı bir dizi değişkeni oluşturun ve Facebook, Google, Microsoft, Apple, IBM, Oracle ve Amazon'a başlangıç değerleri atayın.

7. _console.log()_ kullanarak dizinizi yazdırın.

8. Dizinin içindeki şirketlerin sayısın yazdırın.

9. Dizinin içindeki ilk, ortadaki ve son elemanı yazdırın.

10. Dizideki her şirketi yazdırın.

11. Her bir şirketin adını tek tek büyük harfleri ile değişterin ( ör: facebook -> FACEBOOK) ve her birini yazdırın.

12. Diziyi bir cümle gibi yazdırın: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

13. itCompanies dizisinde belirli bir şirketin olup olmadığını kontrol edin.  Varsa şirketi geri döndürün, aksi takdirde _not found_ geri döndürün.

14. Birden fazla 'o' harfi içeren şirketleri filter metodunu kullanmadan filtreleyin.

15.  _sort()_ metodunu kullanarak diziyi sıralayın.

16.  _reverse()_ metodunu kullanarak diziyi tersine çevirin.

17. Diziden ilk 3 şirketi dilimleyin ( Slice edin ).

18. Diziden son 3 şirketi dilimleyin ( Slice edin ).

19. Ortadaki IT şirketini ya da şirketlerini diziden dilimleyin ( Slice edin ).

20. İlk IT şirketini diziden kaldırın.

21. Ortadaki IT şirketini ya da şirketlerini diziden kaldırın.

22. Sondaki IT şirketini diziden kaldırın.

23. Bütün IT şirketlerini kaldırın.

  

### Egzersiz: Seviye 2

  

1.Ayrı bir country.js dosyası oluşturun ve country dizisini bu dosyaya kaydedin, ayrı bir web_techs.js dosyası oluşturun ve webTechs dizisini bu dosyaya kaydedin. Daha sonra Main.js dosyasından her iki dosyaya da erişim sağlayın.

1. Önce bütün noktalama işaretlerini kaldırın ve ve string ifadeyi dizi olarak değiştirin ve dizideki kelime sayısını sayın.
  

```js

let  text =

'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

console.log(words)

console.log(words.length)

```

  

```sh

["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13

```

  

1. Aşşağıdaki alışveriş sepetindeki elemanları ekleyin, silin , düzenleyin. 

  

```js

const  shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

```

  

- Eğer alışveriş sepetine zaten 'Meat' eklenmemişse en başa ekleyin.  

- Eğer alışveriş sepetine zaten 'Sugar' eklenmemişse en sona ekleyin.  

- Eğer bala alerjiniz varsa 'Honey' elemanını diziden silin.

- 'Tea' elemanını 'Green Tea' olarak güncelleyin.

1. countries dizisinde 'Ethiopia' olup olmadığını kontrol edin. Eğer varsa  'ETHIOPIA' yazdırın. eğer yoksa bunu countries dizisine ekleyin.

2. webTechs dizisinde Sass olup olmadığını kontrol edin eğer varsa 'Sass is a CSS preprocess' yazdırın.  Eğer yoksa diziye Sass elemanını ekleyip diziyi yazdırın

4. Aşağıdaki iki değişkeni birleştirin ve bir fullStack değişkeninde atayın.

  

```js

const  frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']

const  backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)

```

  

```sh

["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

```

  

### Egzersiz: Seviye 3

  

1. Aşağıdaki dizide 10 öğrencinin yaşı vardır:

  

```js

const  ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

```

  

- Diziyi sıralayın ve en küçük ve en büyük yaşı bulun

- Medyan yaşı bulun(dizinin ortasındaki eleman ama ortada iki eleman varsa  elemanlar ikiye bölünür)

- Ortalama yaşı bulun(tüm elemanlar eleman sayısına bölünür)

- Yaş aralığını bulun (maks - min)

- _abs()_ metodunu kullanarak (min - ortalama) ve (maks - ortalama) değerlerini karşılaştırın, 

1. [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) dizisinden ilk 10 ülkeyi dilimleyin ( Slice edin )

1.  [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) dizisinden ortadaki ülkeleri bulun.

2. countries dizisini çift ise iki eşit diziye bölün. countries dizisi çift değilse, ilk yarı için bir ülke fazla olarak bölün