const users = [
  {
    id: "1",
    fullName: "Mehmet Seven",
    profile_photo: "https://randomuser.me/api/portraits/men/11.jpg",
    age: 29,
  },
  {
    id: "2",
    fullName: "Ahmet Günal",
    profile_photo: "https://randomuser.me/api/portraits/men/72.jpg",
    age: 32,
  },
];

const posts = [
  {
    id: "1",
    title: "Lorem Ipsum Nedir?",
    short_description: "Lorem Ipsum, baskı ve dizgi endüstrisinin kukla metnidir. Lorem Ipsum, 1500'lü yıllarda bilinmeyen bir matbaacının bir dizgi kalıbını alıp bir dizgi örneği kitabı yapmak için karıştırmasından bu yana sektörün standart sahte metni olmuştur.",
    description: "Lorem Ipsum, baskı ve dizgi endüstrisinin kukla metnidir. Lorem Ipsum, 1500'lü yıllarda bilinmeyen bir matbaacının bir dizgi kalıbını alıp bir dizgi örneği kitabı yapmak için karıştırmasından bu yana sektörün standart sahte metni olmuştur. Sadece beş asır değil, elektronik dizgiye geçişte de esasen değişmeden kalarak hayatta kalmayı başarmıştır. 1960'larda Lorem Ipsum pasajları içeren Letraset sayfalarının piyasaya sürülmesiyle ve daha yakın zamanda Lorem Ipsum sürümlerini içeren Aldus PageMaker gibi masaüstü yayıncılık yazılımlarıyla popüler hale geldi.",
    user_id: "1",
    cover: "https://picsum.photos/id/237/2000/1500",
  },
  {
    id: "2",
    title: "Lorem Ipsum Nerden Geliyor?",
    short_description: "Lorem Ipsum sanılanın aksine rastgele bir metin değildir. Kökleri M.Ö. 45 yılına ait bir klasik Latin edebiyatı parçasına dayanmaktadır, yani 2000 yıldan daha eskidir.",
    description: "Lorem Ipsum sanılanın aksine rastgele bir metin değildir. Kökleri M.Ö. 45 yılına ait bir klasik Latin edebiyatı parçasına dayanmaktadır, yani 2000 yıldan daha eskidir. Virginia'daki Hampden-Sydney College'da Latince profesörü olan Richard McClintock, bir Lorem Ipsum pasajındaki daha belirsiz Latince kelimelerden biri olan consectetur'u araştırdı ve kelimenin klasik literatürdeki alıntılarını inceleyerek şüphe götürmez kaynağı keşfetti. Lorem Ipsum, Cicero'nun M.Ö. 45 yılında yazdığı de Finibus Bonorum et Malorum (İyi ve Kötünün Aşırılıkları) kitabının 1.10.32 ve 1.10.33 bölümlerinden gelmektedir. Bu kitap, Rönesans döneminde çok popüler olan etik teorisi üzerine bir incelemedir. Lorem Ipsum'un ilk satırı olan Lorem ipsum dolor sit amet..., bölüm 1.10.32'deki bir satırdan gelmektedir. 1500 lerden beri kullanılan standart Lorem Ipsum yığını, ilgilenenler için aşağıda yeniden üretilmiştir. Cicero'nun de Finibus Bonorum et Malorum adlı eserinden 1.10.32 ve 1.10.33 numaralı bölümler de orijinal halleriyle ve H. Rackhamın 1914 tarihli çevirisinden İngilizce versiyonlarıyla birlikte yeniden üretilmiştir.",
    user_id: "1",
    cover: "https://picsum.photos/id/400/2000/1500"
  },
  {
    id: "3",
    title: "Neden Lorem Ipsum Kullanıyoruz?",
    short_description: "Bir okuyucunun sayfanın düzenine bakarken okunabilir içeriğinden uzaklaşacağı uzun zamandır bilinen bir gerçektir.",
    description: "Bir okuyucunun sayfanın düzenine bakarken okunabilir içeriğinden uzaklaşacağı uzun zamandır bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, 'İçerik burada, içerik burada' kullanmanın aksine, harflerin az ya da çok normal bir dağılımına sahip olması ve okunabilir İngilizce gibi görünmesini sağlamasıdır. Birçok masaüstü yayıncılık paketi ve web sayfası düzenleyicisi artık Lorem Ipsum'u varsayılan model metin olarak kullanmaktadır ve 'lorem ipsum' için yapılacak bir arama, henüz emekleme aşamasında olan birçok web sitesini ortaya çıkaracaktır. Yıllar içinde bazen kazara, bazen de kasıtlı olarak (enjekte edilen mizah ve benzeri) çeşitli versiyonlar geliştirilmiştir.",
    user_id: "2",
    cover: "https://picsum.photos/id/401/2000/1500"
  },
  {
    id: "4",
    title: "Nereden Lorem Ipsum Bulabilirim?",
    short_description: "Lorem Ipsum pasajlarının birçok çeşidi mevcuttur, ancak çoğunluğu mizah enjekte edilerek veya biraz bile inandırıcı görünmeyen rastgele kelimelerle bir şekilde değişikliğe uğramıştır.",
    description: "Lorem Ipsum pasajlarının birçok çeşidi mevcuttur, ancak çoğunluğu mizah enjekte edilerek veya biraz bile inandırıcı görünmeyen rastgele kelimelerle bir şekilde değişikliğe uğramıştır. Bir Lorem Ipsum pasajı kullanacaksanız, metnin ortasına gizlenmiş utanç verici bir şey olmadığından emin olmanız gerekir. İnternetteki tüm Lorem Ipsum oluşturucuları, önceden tanımlanmış parçaları gerektiği gibi tekrarlama eğilimindedir, bu da bunu internetteki ilk gerçek oluşturucu yapar. Makul görünen Lorem Ipsum oluşturmak için bir avuç model cümle yapısıyla birlikte 200'den fazla Latince kelimeden oluşan bir sözlük kullanır. Bu nedenle üretilen Lorem Ipsum her zaman tekrarlama, enjekte edilmiş mizah veya karakteristik olmayan kelimeler vb. içermez.",
    user_id: "1",
    cover: "https://picsum.photos/id/402/2000/1500"
  },
];

const comments = [
  {
    id: "1",
    text: "Lorem ipsum bir harika",
    post_id: "1",
    user_id: "2",
  },
  {
    id: "2",
    text: "Lorem ipsum kullanıyorum ve çok memmunum",
    post_id: "1",
    user_id: "1",
  },
  {
    id: "3",
    text: "Teşekkürler bilgi için",
    post_id: "2",
    user_id: "1",
  },
  {
    id: "4",
    text: "Hey, peki nereden lorem ipsum bulabilirim?",
    post_id: "3",
    user_id: "2",
  },
];

export default {
  users,
  posts,
  comments
}