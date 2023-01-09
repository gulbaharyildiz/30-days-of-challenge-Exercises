// E1- "Yorumlar kodu okunabilir hale getirmeye yardımcı olur" yazan tek satırlı bir yorum yazın
    
    // "Yorumlar kodu okunabilir hale getirmeye yardımcı olur"

     
// E2- "30GundeJavaScript eğitimine hoş geldiniz" yazan başka bir yorum satırı oluşturun
    
    //  "30GundeJavaScript eğitimine hoş geldiniz"




/* E3- "Yorumlar kodu okunabilir, yeniden kullanımı kolay ve bilgilendirici bir hale getirir." 
yazılı, birden çok satıra yayılmış çok satırlı bir yorum yazın
*/ 

    /* "Yorumlar kodu okunabilir,
      yeniden kullanımı kolay
       ve bilgilendirici 
       bir hale getirir."*/

/* E4- Bir degisken.js(BEN BUNUN YERİNE day1.js DOSYASINI OLUŞTURDUM!!) isimli dosya oluşturun 
ve bu .js dosyasında string, boolean, undefined ve null veri türlerinde değişkenler oluşturun
*/ 

    let name = "Bahar",     //string
        graduate = true ,   //boolean
        money,              //undefined
        age = null          //null


/* E5- Bir veriturleri.js(AYNI DOSYA İÇİNDEN DEVAM EDİYORUM.) isimli dosya oluşturun farklı veri 
türlerindeki verileri kontrol etmek için JavaScript typeof operatörünü kullanın.
*/

    let firstname = "Bahar",     //string
        _graduate = true ,   //boolean
        _money,              //undefined
        _age = null          //null 

    console.log(`
        firstname :${typeof firstname} 
        _graduate :${typeof _graduate} 
        _money :${typeof _money}
        _age :${typeof _age}`) 
                   

// E6- Herhangi bir değer ataması yapmadan dört adet değişken yazın ,Oluşturduğunuz değişkenlere değer ataması yapın
 
  //  let name
    let lastname
   // let age
    let job

    name= "bahar"
    lastname = "yıldız"
    age = 25
    job = "computer engineer"
// E7- Adınızı, soyadınızı, medeni durumunuzu, ülkenizi ve yaşınızı birden çok satırda olacak şekilde saklamak için değişkenleri ve değerlerini oluşturun

    let ad = "Bahar"
    let soyad = "Yıldız"
    let medeniDürümü = "bekar"
    let ülke = "Türkiye"
    let yas = 25
    
    console.log(ad ,
        soyad,
        medeniDürümü,
        ülke,
        yas)

// E8- Adınızı, soyadınızı, medeni durumunuzu, ülkenizi ve yaşınızı tek bir satırda olacak şekilde saklamak için değişkenleri ve değerlerini oluşturun

    // let ad = "Bahar",
    //     soyad = "Yıldız"
    //     medeniDürümü = "bekar"
    //     ülke = "Türkiye"
    //     yas = 25
        
//benimYasim ve seninYasin adlı iki değişken oluşturun ve bunlara aşağıdaki değerleri atayın. Ardından bunları tarayıcının konsolunda çalıştırın