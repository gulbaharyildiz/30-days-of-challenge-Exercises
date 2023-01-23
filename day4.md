## 💻 Egzersizler

### Egzersiz: Seviye 1

1. prompt(“Enter your age:”) ile kullanıcı girdisi alın. Kullanıcı 18 veya daha büyükse, geri bildirimde bulunun:'Sürecek kadar yaşlısınız', ancak 18 değilse, 18 yaşına girmesi gereken yıl sayısını beklemeye başlayarak başka bir geri bildirim verin.

   ```sh
   Enter your age: 30
   You are old enough to drive.

   Enter your age:15
   You are left with 3 years to drive.
   ```

1. if… else kullanarak myAge ve yourAge değerlerini karşılaştırın. Karşılaştırmaya dayanarak ve sonucu kimin daha yaşlı olduğunu (ben veya siz) belirterek konsola kaydedin. Yaşı girdi olarak almak için komut prompt(“Enter your age:”) kullanın.

   ```sh
   Enter your age: 30
   You are 5 years older than me.
   ```

1. a, b'den büyükse, 'a b'den büyüktür', aksi takdirde 'a, b'den küçüktür' döndürür. şekilde uygulamaya çalışın

    - using if else
    - ternary operator.

    ```js
      let a = 4
      let b = 3
    ```

    ```sh
      4 is greater than 3
    ```

1. Çift sayılar 2'ye tam bölünür kalan sıfırdır. Bir sayının çift olup olmadığını veya JavaScript kullanıp kullanmadığını nasıl kontrol edersiniz?

    ```sh
    Enter a number: 2
    2 is an even number

    Enter a number: 9
    9 is is an odd number.
    ```

### Egzersiz: Seviye 2

1. Öğrencilere puanlarına göre not verebilecek bir kod yazın:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F
1. Mevsimin Sonbahar, Kış, İlkbahar veya Yaz olup olmadığını kontrol edin.
  Değerler :
    - Eylül, Ekim veya Kasım, mevsim sonbahardır.
    - Aralık, Ocak veya Şubat, mevsim kıştır.
    - Mart, Nisan veya Mayıs mevsimi bahardır
    - Haziran, Temmuz veya Ağustos, mevsim yazdır
    
1. Bir günün hafta sonu mu yoksa iş günü mü olduğunu kontrol edin. Komut dosyanız girdi olarak gün alacaktır.

```sh
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
  ```

### Egzersiz: Seviye 3

1. Bir aydaki gün sayısını söyleyen bir program yazın.

  ```sh
    Enter a month: January
    January has 31 days.

    Enter a month: JANUARY
    January has 31 day

    Enter a month: February
    February has 28 days.

    Enter a month: FEbruary
    February has 28 days.
  ```

1. Bir aydaki gün sayısını söyleyen bir program yazın, şimdi artık yılı düşünün.

