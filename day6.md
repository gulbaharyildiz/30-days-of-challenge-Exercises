## 💻 Alıştırma - Prtik: 6. Gün

### Pratik: 1. seviye

  ```js
  const countries = [
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

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  ```

1. while ve do while kullanarak 0 dan 10'a kadar giden bir döngü kurun.
2. while ve do while kullanarak 10 dan 0'a kadar giden bir döngü kurun.
3. 0'dan n' e kadar giden bir for döngüsü kurun.
4. Console.log() kullanarak aşağıdaki çıktıyı almayı deneyin.

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```

5. Aşağıdaki çıktıyı almak için bir döngü kurun:

   ```sh
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   ```

6. Aşağıdaki çıktıyı almak için bir döngü kurun:

   ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ```

7. 0'dan 100'e kadar olan çift sayıları bir döngü yardımı ile ekrana yazdırın.
8. 0'dan 100'e kadar olan tek sayıları bir döngü yardımı ile ekrana yazdırın
9. 0'dan 100'e kadar olan asal sayıları bir döngü yardımı ile ekrana yazdırın
10. 0 ile 100 arasındaki tüm sayıların toplamını ekrana yazıdırn

    ```sh
    0 ile 100 arasındaki sayıların toplamı: 5050.
    ```

11. 0 ile 100 arasındaki tek ve çift sayıların toplamını bulun

    ```sh
    Çift sayıların toplamı 2550
    Tek sayıların toplamı 2500
    ```

### Pratik: 2. seviye

1. Herhangi bir sayıda rastgele id numarası atayan bir fonksiyon yazın

    ```sh
      fe3jo1gl124g
    ```

    ```sh
      xkqci4utda1lmbelpkm03rba
    ```

2. Rastgele hexadecimal sayı üreten bir fonksiyon yazın.

    ```sh
    '#ee33df'
    ```

3. Rastgele bir rgb renk numarası oluşturan fonksiyon yazın.

    ```sh
    rgb(240,180,80)
    ```

    ```sh
    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
    ```

4. Yukarıdaki array'i kullanarak rastgele yeni bir dizi oluşturun.

5. Yukarıdaki array'i kullanarak ülkelerin harf uzunluklarını içeren bir dizi olşturun'.

    ```sh
    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
    ```

6. Yukarıdaki diziyi kullanarak aşağıdaki diziyi oluşturun:

    ```sh
      [
      ['Albania', 'ALB', 7],
      ['Bolivia', 'BOL', 7],
      ['Canada', 'CAN', 6],
      ['Denmark', 'DEN', 7],
      ['Ethiopia', 'ETH', 8],
      ['Finland', 'FIN', 7],
      ['Germany', 'GER', 7],
      ['Hungary', 'HUN', 7],
      ['Ireland', 'IRE', 7],
      ['Iceland', 'ICE', 7],
      ['Japan', 'JAP', 5],
      ['Kenya', 'KEN', 5]
    ]
    ```

7. Yukarıdaki ülkeler dizisinde "land" sözcüğünü içeren bir ülke veya ülke olup olmadığını kontrol edin. "land" içeren ülkeler varsa bunu dizi halinde yazdırın.

    ```sh
    ['Finland','Ireland', 'Iceland']
    ```

8. Yukarıdaki ülkeler dizisinde "ia" sözcüğünü içeren bir ülke veya ülke olup olmadığını kontrol edin. "ia" içeren ülkeler varsa bunu dizi halinde yazdırın..

    ```sh
    ['Albania', 'Bolivia','Ethiopia']
    ```

9. Yukarıdaki ülkeler dizisini kullanarak en fazla karakter içeren ülkeyi bulun.

      ```sh
      Ethiopia
      ```

10. Yukarıdaki ülkeler dizisini kullanarak, yalnızca 5 karakter içeren ülkeyi bulun.

    ```sh
    ['Japan', 'Kenya']
    ```


### Pratik: 3. seviye

1. Countries dizisini kopyalayın(Avoid mutation)
2. Diziler değişebilir. Dizinin orjinalini değişirmeden bir kopyasını oluşturun. Oluşturduğunuz diziyi alfabetik olarak sıralayın ve sortedCountries dizisine atayın
3. webTechs dzisini ve mernStack dizisini sıralayın
4. [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)inden "land" sözüğü ile biten ülkeleri farklı bir diziye atayın
5. [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) inden en uzun karakterli ülkeyi bulun
6. [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) inde 4 karakterli ülkeleri yazdırın
7. [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) inde iki veya daha fazla kelime içieren ülkeleri farklı bir diziye atayın
8. [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) i ters çevirin ve ülkelerin tüm harflerini büyük hale gertirin