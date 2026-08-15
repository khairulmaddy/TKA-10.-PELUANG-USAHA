import { Question } from '../types';

export const QUESTIONS_DATA: Question[] = [
  {
    id: 1,
    type: 'single',
    cognitiveLevel: 'C1',
    questionFormat: 'Pilihan Ganda',
    question: 'Peluang usaha dapat diartikan sebagai...',
    options: [
      { key: 'A', text: 'Segala jenis usaha yang telah berjalan lama di suatu daerah' },
      { key: 'B', text: 'Kesempatan yang muncul pada suatu waktu dan tempat yang dapat dimanfaatkan seseorang untuk mendapatkan keuntungan melalui kegiatan usaha' },
      { key: 'C', text: 'Modal yang dimiliki seseorang untuk memulai bisnis' },
      { key: 'D', text: 'Persaingan antar pelaku usaha dalam merebut pasar' },
      { key: 'E', text: 'Risiko yang harus dihadapi oleh seorang wirausahawan' }
    ],
    correctAnswer: 'B',
    explanation: 'Peluang usaha adalah kesempatan/kondisi yang muncul yang dapat dimanfaatkan wirausahawan untuk memperoleh keuntungan bila ditangkap dan dikelola dengan tepat. Modal, persaingan, dan risiko adalah faktor terkait, bukan definisi peluang usaha itu sendiri.'
  },
  {
    id: 2,
    type: 'single',
    cognitiveLevel: 'C1',
    questionFormat: 'Pilihan Ganda',
    question: 'Berikut ini yang termasuk sumber peluang usaha yang berasal dari diri sendiri (faktor internal) adalah...',
    options: [
      { key: 'A', text: 'Perubahan kebijakan pemerintah' },
      { key: 'B', text: 'Hobi dan keterampilan yang dimiliki' },
      { key: 'C', text: 'Kemajuan teknologi digital' },
      { key: 'D', text: 'Perubahan gaya hidup masyarakat' },
      { key: 'E', text: 'Persaingan usaha sejenis' }
    ],
    correctAnswer: 'B',
    explanation: 'Sumber peluang usaha terbagi menjadi faktor internal (hobi, keahlian, pengalaman, pendidikan) dan faktor eksternal (kebijakan, teknologi, tren, persaingan). Hobi dan keterampilan termasuk faktor internal.'
  },
  {
    id: 3,
    type: 'single',
    cognitiveLevel: 'C1',
    questionFormat: 'Pilihan Ganda',
    question: 'Analisis SWOT digunakan untuk mengidentifikasi empat faktor, yaitu...',
    options: [
      { key: 'A', text: 'Sales, Wealth, Opportunity, Threat' },
      { key: 'B', text: 'Strength, Weakness, Opportunity, Threat' },
      { key: 'C', text: 'Strategy, Weakness, Objective, Target' },
      { key: 'D', text: 'Strength, Wealth, Objective, Threat' },
      { key: 'E', text: 'Sales, Weakness, Opportunity, Target' }
    ],
    correctAnswer: 'B',
    explanation: 'SWOT terdiri atas Strength (kekuatan), Weakness (kelemahan), Opportunity (peluang), dan Threat (ancaman). Strength dan Weakness merupakan faktor internal, sedangkan Opportunity dan Threat merupakan faktor eksternal.'
  },
  {
    id: 4,
    type: 'single',
    cognitiveLevel: 'C2',
    questionFormat: 'Pilihan Ganda',
    question: 'Kegiatan menilai layak atau tidaknya suatu rencana usaha dijalankan dengan mempertimbangkan berbagai aspek disebut...',
    options: [
      { key: 'A', text: 'Analisis SWOT' },
      { key: 'B', text: 'Studi kelayakan usaha' },
      { key: 'C', text: 'Business Model Canvas' },
      { key: 'D', text: 'Riset pasar' },
      { key: 'E', text: 'Perencanaan produksi' }
    ],
    correctAnswer: 'B',
    explanation: 'Studi kelayakan usaha (business feasibility study) adalah penilaian menyeluruh atas aspek pasar, teknis, manajemen, hukum, dan keuangan untuk menentukan apakah usaha layak dijalankan.'
  },
  {
    id: 5,
    type: 'single',
    cognitiveLevel: 'C2',
    questionFormat: 'Pilihan Ganda',
    question: 'Seorang siswa SMK memperhatikan bahwa di lingkungan kampusnya belum ada yang menjual perlengkapan alat tulis dengan sistem pesan-antar. Ia kemudian merancang usaha jasa antar alat tulis melalui aplikasi pesan instan. Tindakan siswa tersebut menunjukkan bahwa peluang usaha muncul dari...',
    options: [
      { key: 'A', text: 'Modal yang besar' },
      { key: 'B', text: 'Kejelian membaca kebutuhan yang belum terpenuhi di lingkungan sekitar' },
      { key: 'C', text: 'Warisan usaha keluarga' },
      { key: 'D', text: 'Kebijakan pemerintah tentang UMKM' },
      { key: 'E', text: 'Persaingan harga antar penjual' }
    ],
    correctAnswer: 'B',
    explanation: 'Peluang usaha sering muncul dari kejelian mengamati kebutuhan pasar yang belum terpenuhi (unmet needs) di lingkungan sekitar, bukan semata dari modal atau warisan usaha.'
  },
  {
    id: 6,
    type: 'single',
    cognitiveLevel: 'C2',
    questionFormat: 'Pilihan Ganda',
    question: 'Perhatikan pernyataan berikut: "Kekuatan dan kelemahan berasal dari dalam perusahaan, sedangkan peluang dan ancaman berasal dari luar perusahaan." Pernyataan tersebut menggambarkan prinsip dasar dari...',
    options: [
      { key: 'A', text: 'Business Model Canvas' },
      { key: 'B', text: 'Analisis SWOT' },
      { key: 'C', text: 'Analisis 5W1H' },
      { key: 'D', text: 'Analisis Porter\'s Five Forces' },
      { key: 'E', text: 'Studi kelayakan usaha' }
    ],
    correctAnswer: 'B',
    explanation: 'Prinsip dasar SWOT membedakan faktor internal (Strength-Weakness) dan faktor eksternal (Opportunity-Threat) sebagai dasar penyusunan strategi usaha.'
  },
  {
    id: 7,
    type: 'single',
    cognitiveLevel: 'C2',
    questionFormat: 'Pilihan Ganda',
    question: 'Ciri utama peluang usaha yang baik menurut prinsip kewirausahaan adalah...',
    options: [
      { key: 'A', text: 'Bersifat sementara dan tidak dapat diprediksi' },
      { key: 'B', text: 'Memiliki nilai jual, sesuai kemampuan, dan berjangka waktu relatif panjang' },
      { key: 'C', text: 'Hanya bisa dijalankan oleh orang yang memiliki modal besar' },
      { key: 'D', text: 'Tidak memerlukan analisis pasar' },
      { key: 'E', text: 'Selalu bebas dari risiko kegagalan' }
    ],
    correctAnswer: 'B',
    explanation: 'Peluang usaha yang baik bersifat nyata, memiliki nilai jual, sesuai kemampuan/keahlian pelaku usaha, dan memiliki jangka waktu yang cukup panjang untuk dikembangkan, meskipun tetap mengandung risiko.'
  },
  {
    id: 8,
    type: 'single',
    cognitiveLevel: 'C2',
    questionFormat: 'Pilihan Ganda',
    question: 'Dalam Business Model Canvas (BMC), elemen "Value Proposition" berfungsi untuk menjelaskan...',
    options: [
      { key: 'A', text: 'Sumber pendapatan utama perusahaan' },
      { key: 'B', text: 'Nilai atau manfaat unik yang ditawarkan produk/jasa kepada pelanggan' },
      { key: 'C', text: 'Struktur biaya yang dikeluarkan perusahaan' },
      { key: 'D', text: 'Saluran distribusi produk' },
      { key: 'E', text: 'Mitra kerja sama perusahaan' }
    ],
    correctAnswer: 'B',
    explanation: 'Value Proposition adalah nilai tambah/keunggulan yang membedakan produk atau jasa dari pesaing dan menjadi alasan pelanggan memilih produk tersebut.'
  },
  {
    id: 9,
    type: 'single',
    cognitiveLevel: 'C2',
    questionFormat: 'Pilihan Ganda',
    question: 'Mengapa analisis pasar penting dilakukan sebelum menentukan sebuah peluang usaha?',
    options: [
      { key: 'A', text: 'Agar produk yang dihasilkan pasti tidak memiliki pesaing' },
      { key: 'B', text: 'Untuk memastikan target konsumen, kebutuhan pasar, dan potensi permintaan sudah sesuai dengan produk yang ditawarkan' },
      { key: 'C', text: 'Karena diwajibkan oleh pemerintah untuk semua jenis usaha' },
      { key: 'D', text: 'Agar modal usaha dapat ditekan seminimal mungkin' },
      { key: 'E', text: 'Untuk menghindari pembayaran pajak usaha' }
    ],
    correctAnswer: 'B',
    explanation: 'Analisis pasar bertujuan memahami karakteristik, kebutuhan, dan potensi permintaan konsumen agar produk yang ditawarkan tepat sasaran dan peluang keberhasilan usaha meningkat.'
  },
  {
    id: 10,
    type: 'single',
    cognitiveLevel: 'C3',
    questionFormat: 'Pilihan Ganda',
    question: 'Faktor eksternal yang dapat memunculkan peluang usaha baru, misalnya perubahan pola konsumsi masyarakat dari belanja langsung ke belanja daring, termasuk dalam kategori...',
    options: [
      { key: 'A', text: 'Perubahan sosial-budaya dan gaya hidup' },
      { key: 'B', text: 'Kekuatan internal perusahaan' },
      { key: 'C', text: 'Kelemahan sumber daya manusia' },
      { key: 'D', text: 'Modal usaha' },
      { key: 'E', text: 'Keterampilan pribadi wirausahawan' }
    ],
    correctAnswer: 'A',
    explanation: 'Perubahan pola konsumsi/gaya hidup masyarakat merupakan faktor eksternal (sosial-budaya) yang dapat memunculkan peluang usaha baru, seperti bisnis e-commerce.'
  },
  {
    id: 11,
    type: 'single',
    cognitiveLevel: 'C3',
    questionFormat: 'Pilihan Ganda',
    question: 'Sebuah tim usaha akan membuka bisnis minuman kekinian. Mereka ingin mengetahui kekuatan produknya dibanding pesaing dan mengidentifikasi ancaman dari tren pasar yang berubah cepat. Alat analisis yang paling tepat digunakan tim tersebut adalah...',
    options: [
      { key: 'A', text: 'Analisis Break Even Point' },
      { key: 'B', text: 'Analisis SWOT' },
      { key: 'C', text: 'Analisis rasio keuangan' },
      { key: 'D', text: 'Analisis struktur organisasi' },
      { key: 'E', text: 'Analisis titik impas produksi' }
    ],
    correctAnswer: 'B',
    explanation: 'Untuk mengidentifikasi kekuatan, kelemahan, peluang, dan ancaman terhadap suatu rencana usaha, alat analisis yang tepat adalah SWOT.'
  },
  {
    id: 12,
    type: 'single',
    cognitiveLevel: 'C3',
    questionFormat: 'Pilihan Ganda',
    question: 'Seorang calon wirausahawan menghitung estimasi biaya produksi, harga jual, dan proyeksi laba sebelum memutuskan membuka usaha katering. Kegiatan tersebut termasuk penerapan aspek...',
    options: [
      { key: 'A', text: 'Aspek pasar' },
      { key: 'B', text: 'Aspek keuangan dalam studi kelayakan usaha' },
      { key: 'C', text: 'Aspek hukum' },
      { key: 'D', text: 'Aspek lingkungan' },
      { key: 'E', text: 'Aspek sosial budaya' }
    ],
    correctAnswer: 'B',
    explanation: 'Perhitungan biaya, harga jual, dan proyeksi laba/rugi termasuk dalam aspek keuangan pada studi kelayakan usaha.'
  },
  {
    id: 13,
    type: 'single',
    cognitiveLevel: 'C3',
    questionFormat: 'Pilihan Ganda',
    question: 'Rina ingin membuka usaha kerajinan tangan dari limbah plastik. Untuk memastikan idenya layak, ia melakukan survei kepada 50 calon konsumen mengenai minat dan harga yang bersedia dibayar. Langkah Rina tersebut merupakan penerapan dari...',
    options: [
      { key: 'A', text: 'Analisis SWOT' },
      { key: 'B', text: 'Riset/analisis pasar dalam menentukan peluang usaha' },
      { key: 'C', text: 'Analisis struktur modal' },
      { key: 'D', text: 'Analisis PESTEL' },
      { key: 'E', text: 'Perencanaan produksi' }
    ],
    correctAnswer: 'B',
    explanation: 'Survei kepada calon konsumen untuk mengetahui minat dan kesediaan membayar merupakan bagian dari riset/analisis pasar guna menguji validitas peluang usaha.'
  },
  {
    id: 14,
    type: 'single',
    cognitiveLevel: 'C3',
    questionFormat: 'Pilihan Ganda',
    question: 'Sebuah usaha kuliner menerapkan strategi "menu terbatas namun dengan bahan baku premium dan harga bersaing" untuk membedakan diri dari pesaing di sekitar lokasi usaha. Strategi ini merupakan penerapan konsep...',
    options: [
      { key: 'A', text: 'Struktur biaya (Cost Structure) pada BMC' },
      { key: 'B', text: 'Diferensiasi produk sebagai bagian dari Value Proposition' },
      { key: 'C', text: 'Analisis kelemahan internal' },
      { key: 'D', text: 'Segmentasi geografis semata' },
      { key: 'E', text: 'Studi kelayakan aspek hukum' }
    ],
    correctAnswer: 'B',
    explanation: 'Membedakan produk dari pesaing melalui keunikan (bahan premium, harga bersaing) merupakan penerapan diferensiasi yang menjadi bagian dari Value Proposition dalam BMC.'
  },
  {
    id: 15,
    type: 'single',
    cognitiveLevel: 'C3',
    questionFormat: 'Pilihan Ganda',
    question: 'Seorang wirausahawan memetakan pelanggannya berdasarkan usia, penghasilan, dan lokasi tempat tinggal sebelum menentukan strategi pemasaran produknya. Aktivitas tersebut termasuk penerapan dari...',
    options: [
      { key: 'A', text: 'Segmentasi pasar' },
      { key: 'B', text: 'Analisis SWOT' },
      { key: 'C', text: 'Studi kelayakan aspek teknis' },
      { key: 'D', text: 'Analisis struktur biaya' },
      { key: 'E', text: 'Perencanaan distribusi' }
    ],
    correctAnswer: 'A',
    explanation: 'Pemetaan pelanggan berdasarkan variabel demografis (usia, penghasilan) dan geografis (lokasi) merupakan penerapan segmentasi pasar.'
  },
  {
    id: 16,
    type: 'single',
    cognitiveLevel: 'C3',
    questionFormat: 'Pilihan Ganda',
    question: 'Dalam menyusun BMC untuk usaha jasa laundry kiloan, bagian yang menjelaskan "bagaimana cara pelanggan mengetahui dan mendapatkan jasa laundry tersebut, misalnya melalui media sosial dan gerai fisik" termasuk elemen...',
    options: [
      { key: 'A', text: 'Customer Segments' },
      { key: 'B', text: 'Key Resources' },
      { key: 'C', text: 'Channels' },
      { key: 'D', text: 'Key Partners' },
      { key: 'E', text: 'Cost Structure' }
    ],
    correctAnswer: 'C',
    explanation: 'Channels adalah elemen BMC yang menjelaskan saluran atau cara perusahaan menjangkau dan berkomunikasi dengan pelanggan, termasuk media promosi dan penjualan.'
  },
  {
    id: 17,
    type: 'single',
    cognitiveLevel: 'C3',
    questionFormat: 'Pilihan Ganda',
    question: 'Sebuah usaha konveksi menghadapi kenaikan harga bahan baku kain akibat kenaikan nilai tukar rupiah terhadap dolar. Faktor yang memengaruhi peluang usaha tersebut termasuk kategori...',
    options: [
      { key: 'A', text: 'Faktor internal - kekuatan' },
      { key: 'B', text: 'Faktor eksternal - ekonomi' },
      { key: 'C', text: 'Faktor internal - kelemahan' },
      { key: 'D', text: 'Faktor eksternal - sosial budaya' },
      { key: 'E', text: 'Faktor internal - sumber daya manusia' }
    ],
    correctAnswer: 'B',
    explanation: 'Kenaikan nilai tukar mata uang merupakan faktor eksternal (ekonomi/makro) yang berada di luar kendali perusahaan namun memengaruhi peluang dan risiko usaha.'
  },
  {
    id: 18,
    type: 'single',
    cognitiveLevel: 'C4',
    questionFormat: 'Pilihan Ganda (Studi Kasus)',
    question: 'Seorang pelaku usaha memutuskan untuk fokus menjual produk skincare herbal khusus remaja perempuan usia 15-20 tahun di kota besar dengan strategi promosi melalui influencer media sosial. Langkah tersebut merupakan penerapan gabungan dari...',
    options: [
      { key: 'A', text: 'Segmentasi, targeting, dan positioning (STP)' },
      { key: 'B', text: 'Studi kelayakan aspek hukum' },
      { key: 'C', text: 'Analisis struktur biaya' },
      { key: 'D', text: 'Analisis Break Even Point' },
      { key: 'E', text: 'Perencanaan produksi massal' }
    ],
    correctAnswer: 'A',
    explanation: 'Menentukan segmen (remaja perempuan 15-20 tahun), target (kota besar), dan posisi produk (skincare herbal melalui influencer) merupakan penerapan strategi STP (Segmenting, Targeting, Positioning).'
  },
  {
    id: 19,
    type: 'single',
    cognitiveLevel: 'C4',
    questionFormat: 'Pilihan Ganda (Studi Kasus)',
    question: 'Usaha "Kopi Kita" memiliki kualitas rasa baik dan lokasi strategis (kekuatan), namun modal terbatas dan SDM kurang terlatih (kelemahan). Di sisi lain, tren minum kopi meningkat pesat di kalangan anak muda (peluang), tetapi banyak kompetitor baru bermunculan dengan harga lebih murah (ancaman). Strategi yang paling tepat berdasarkan analisis SWOT tersebut adalah...',
    options: [
      { key: 'A', text: 'Menutup usaha karena ancaman terlalu besar' },
      { key: 'B', text: 'Menggunakan kekuatan (kualitas & lokasi) untuk memanfaatkan tren pasar sambil melakukan efisiensi biaya dan pelatihan SDM secara bertahap' },
      { key: 'C', text: 'Menurunkan kualitas produk agar harga bisa lebih murah dari kompetitor' },
      { key: 'D', text: 'Menambah jumlah cabang secara masif tanpa memperbaiki SDM' },
      { key: 'E', text: 'Mengabaikan tren pasar dan fokus pada kompetitor' }
    ],
    correctAnswer: 'B',
    explanation: 'Strategi SWOT yang tepat memanfaatkan kekuatan untuk menangkap peluang (S-O) sekaligus memperbaiki kelemahan agar mampu menghadapi ancaman (W-T), bukan menyerah atau mengorbankan kualitas.'
  },
  {
    id: 20,
    type: 'single',
    cognitiveLevel: 'C4',
    questionFormat: 'Pilihan Ganda (Studi Kasus)',
    question: 'Dua usaha kuliner, A dan B, berada di lokasi yang sama. Usaha A menyasar semua kalangan tanpa segmentasi jelas, sedangkan usaha B fokus pada mahasiswa dengan harga terjangkau dan porsi besar. Setelah 6 bulan, usaha B tumbuh lebih pesat. Analisis yang paling tepat menjelaskan kondisi tersebut adalah...',
    options: [
      { key: 'A', text: 'Usaha B lebih beruntung secara kebetulan' },
      { key: 'B', text: 'Usaha B lebih unggul karena memiliki segmentasi pasar yang jelas sehingga strategi pemasarannya lebih terarah dan efisien' },
      { key: 'C', text: 'Usaha A gagal karena lokasi yang buruk' },
      { key: 'D', text: 'Usaha B menang karena modal yang lebih besar' },
      { key: 'E', text: 'Segmentasi pasar tidak berpengaruh terhadap pertumbuhan usaha' }
    ],
    correctAnswer: 'B',
    explanation: 'Segmentasi pasar yang jelas memungkinkan strategi produk, harga, dan promosi lebih tepat sasaran sehingga sumber daya digunakan lebih efisien dibanding menyasar pasar yang terlalu luas tanpa fokus.'
  },
  {
    id: 21,
    type: 'single',
    cognitiveLevel: 'C4',
    questionFormat: 'Pilihan Ganda (Studi Kasus)',
    question: 'Produk lokal "Sambal Bu Tini" memiliki cita rasa khas namun kemasannya kurang menarik dan belum memiliki izin PIRT. Jika dianalisis dari studi kelayakan usaha, kondisi tersebut menunjukkan bahwa usaha tersebut lemah pada aspek...',
    options: [
      { key: 'A', text: 'Aspek pasar dan aspek keuangan' },
      { key: 'B', text: 'Aspek produk/teknis (kemasan) dan aspek hukum (perizinan)' },
      { key: 'C', text: 'Aspek sumber daya manusia semata' },
      { key: 'D', text: 'Aspek lingkungan semata' },
      { key: 'E', text: 'Aspek permodalan semata' }
    ],
    correctAnswer: 'B',
    explanation: 'Kemasan yang kurang menarik berkaitan dengan aspek teknis/produksi, sedangkan belum adanya izin PIRT berkaitan dengan aspek hukum/legalitas dalam studi kelayakan usaha.'
  },
  {
    id: 22,
    type: 'single',
    cognitiveLevel: 'C4',
    questionFormat: 'Pilihan Ganda (Studi Kasus)',
    question: 'Data menunjukkan tren pencarian kata kunci "tumbler custom" di internet terus meningkat selama 3 tahun terakhir, diiringi meningkatnya kesadaran masyarakat terhadap isu lingkungan (pengurangan sampah plastik). Berdasarkan data tersebut, peluang usaha yang paling relevan untuk dikembangkan adalah...',
    options: [
      { key: 'A', text: 'Usaha kantong plastik sekali pakai' },
      { key: 'B', text: 'Usaha tumbler custom ramah lingkungan dengan opsi personalisasi desain' },
      { key: 'C', text: 'Usaha botol air mineral kemasan sekali pakai' },
      { key: 'D', text: 'Usaha sedotan plastik warna-warni' },
      { key: 'E', text: 'Usaha kemasan styrofoam' }
    ],
    correctAnswer: 'B',
    explanation: 'Tren pencarian yang meningkat dan kesadaran lingkungan mengindikasikan peluang pada produk ramah lingkungan yang dapat dipersonalisasi; opsi lain justru bertentangan dengan tren pengurangan plastik sekali pakai.'
  },
  {
    id: 23,
    type: 'single',
    cognitiveLevel: 'C4',
    questionFormat: 'Pilihan Ganda (Studi Kasus)',
    question: 'Sebuah usaha fashion online mengalami penurunan penjualan meskipun jumlah pengikut media sosial terus bertambah. Setelah dianalisis, ternyata konten yang diunggah tidak sesuai dengan preferensi target pasar dan proses checkout di website rumit. Faktor utama penyebab masalah tersebut adalah...',
    options: [
      { key: 'A', text: 'Kurangnya kekuatan produk' },
      { key: 'B', text: 'Ketidaksesuaian strategi Channels dan Customer Relationship dalam BMC dengan kebutuhan pelanggan' },
      { key: 'C', text: 'Modal usaha yang terlalu besar' },
      { key: 'D', text: 'Banyaknya jumlah pesaing' },
      { key: 'E', text: 'Perubahan kebijakan pemerintah' }
    ],
    correctAnswer: 'B',
    explanation: 'Konten yang tidak sesuai preferensi pasar dan proses checkout yang rumit menunjukkan kelemahan pada elemen Channels dan Customer Relationship, bukan pada produk itu sendiri, karena minat (jumlah pengikut) tetap tinggi.'
  },
  {
    id: 24,
    type: 'single',
    cognitiveLevel: 'C4',
    questionFormat: 'Pilihan Ganda (Studi Kasus)',
    question: 'Perusahaan X memiliki biaya produksi tinggi karena menggunakan bahan baku impor, sementara harga jual harus bersaing dengan produk lokal yang lebih murah. Analisis yang paling tepat untuk mengatasi masalah tersebut adalah...',
    options: [
      { key: 'A', text: 'Menaikkan harga jual setinggi mungkin tanpa mempertimbangkan daya beli pasar' },
      { key: 'B', text: 'Mencari alternatif bahan baku lokal berkualitas untuk menekan struktur biaya tanpa mengorbankan kualitas' },
      { key: 'C', text: 'Menghentikan produksi secara permanen' },
      { key: 'D', text: 'Mengabaikan struktur biaya dan fokus pada promosi saja' },
      { key: 'E', text: 'Menambah volume produksi tanpa evaluasi biaya' }
    ],
    correctAnswer: 'B',
    explanation: 'Untuk menjaga daya saing harga sekaligus efisiensi, langkah paling rasional adalah mengevaluasi struktur biaya (Cost Structure) dengan mencari alternatif bahan baku lokal, bukan menaikkan harga sepihak atau berhenti berproduksi.'
  },
  {
    id: 25,
    type: 'single',
    cognitiveLevel: 'C5',
    questionFormat: 'Pilihan Ganda (Evaluasi)',
    question: 'Ketika menganalisis peluang usaha jasa antar makanan (food delivery) di suatu daerah, seorang wirausahawan menemukan bahwa layanan sejenis sudah dikuasai dua aplikasi besar. Sikap paling tepat berdasarkan analisis peluang usaha adalah...',
    options: [
      { key: 'A', text: 'Membatalkan seluruh rencana usaha karena persaingan sudah ada' },
      { key: 'B', text: 'Tetap masuk pasar dengan meniru strategi pesaing secara identik' },
      { key: 'C', text: 'Mencari celah diferensiasi, misalnya fokus pada niche tertentu (makanan sehat/UMKM lokal) yang belum optimal dilayani pesaing besar' },
      { key: 'D', text: 'Menurunkan harga jauh di bawah biaya produksi tanpa strategi jangka panjang' },
      { key: 'E', text: 'Mengabaikan analisis kompetitor sama sekali' }
    ],
    correctAnswer: 'C',
    explanation: 'Adanya pesaing besar bukan berarti peluang tertutup; wirausahawan perlu mencari celah pasar (niche) dan diferensiasi agar dapat bersaing secara sehat dan berkelanjutan.'
  },
  {
    id: 26,
    type: 'single',
    cognitiveLevel: 'C5',
    questionFormat: 'Pilihan Ganda (Evaluasi)',
    question: 'Sebuah proposal usaha menyatakan bahwa produk "Es Kepal Milo" akan sukses besar karena sedang viral di media sosial, tanpa disertai data survei konsumen, proyeksi biaya, maupun analisis pesaing. Evaluasi paling tepat terhadap proposal tersebut adalah...',
    options: [
      { key: 'A', text: 'Proposal sudah layak karena tren viral menjamin keberhasilan usaha' },
      { key: 'B', text: 'Proposal kurang layak karena hanya mengandalkan tren sesaat tanpa didukung data pasar, keuangan, dan analisis pesaing yang memadai' },
      { key: 'C', text: 'Proposal layak karena produk makanan selalu laku dijual' },
      { key: 'D', text: 'Proposal tidak perlu dievaluasi karena sudah viral' },
      { key: 'E', text: 'Proposal layak asalkan harga jual murah' }
    ],
    correctAnswer: 'B',
    explanation: 'Menentukan peluang usaha yang baik memerlukan data pendukung (riset pasar, proyeksi keuangan, analisis pesaing), bukan sekadar tren viral yang bersifat sementara dan berisiko tinggi.'
  },
  {
    id: 27,
    type: 'single',
    cognitiveLevel: 'C5',
    questionFormat: 'Pilihan Ganda (Evaluasi)',
    question: 'Dua rencana usaha diajukan: Usaha 1 menargetkan pasar sangat luas (semua kalangan) dengan modal terbatas, sedangkan Usaha 2 menargetkan segmen spesifik dengan modal yang sama namun strategi lebih fokus. Evaluasi yang paling logis terhadap potensi keberhasilan kedua usaha adalah...',
    options: [
      { key: 'A', text: 'Usaha 1 lebih unggul karena target pasarnya lebih luas' },
      { key: 'B', text: 'Usaha 2 berpotensi lebih efektif karena modal terbatas akan lebih optimal jika difokuskan pada segmen spesifik yang jelas' },
      { key: 'C', text: 'Kedua usaha memiliki peluang keberhasilan yang sama persis' },
      { key: 'D', text: 'Usaha 1 pasti berhasil karena menjangkau lebih banyak orang' },
      { key: 'E', text: 'Modal terbatas tidak berpengaruh terhadap strategi target pasar' }
    ],
    correctAnswer: 'B',
    explanation: 'Dengan modal terbatas, fokus pada segmen spesifik (niche market) memungkinkan penggunaan sumber daya lebih efisien dan strategi pemasaran lebih terarah dibanding menyasar pasar yang terlalu luas.'
  },
  {
    id: 28,
    type: 'single',
    cognitiveLevel: 'C5',
    questionFormat: 'Pilihan Ganda (Evaluasi)',
    question: 'Seorang investor mengevaluasi dua rencana usaha kuliner. Usaha A memiliki proyeksi keuntungan tinggi namun berdasarkan asumsi harga bahan baku yang tidak realistis dan belum mempertimbangkan risiko kenaikan harga. Usaha B memiliki proyeksi keuntungan lebih moderat namun disusun berdasarkan data harga pasar terkini dan mencantumkan analisis risiko. Keputusan investasi yang paling rasional adalah...',
    options: [
      { key: 'A', text: 'Memilih Usaha A karena proyeksi keuntungannya lebih tinggi' },
      { key: 'B', text: 'Memilih Usaha B karena proyeksinya lebih realistis dan telah mempertimbangkan risiko, sehingga lebih kredibel dan berkelanjutan' },
      { key: 'C', text: 'Menolak kedua usaha tanpa alasan yang jelas' },
      { key: 'D', text: 'Memilih keduanya sekaligus tanpa evaluasi lanjutan' },
      { key: 'E', text: 'Memilih Usaha A karena lebih menjanjikan secara emosional' }
    ],
    correctAnswer: 'B',
    explanation: 'Kelayakan usaha idealnya dinilai dari keakuratan data dan kesiapan menghadapi risiko, bukan semata angka proyeksi keuntungan yang tinggi tetapi tidak realistis.'
  },
  {
    id: 29,
    type: 'single',
    cognitiveLevel: 'C5',
    questionFormat: 'Pilihan Ganda (Evaluasi)',
    question: 'Sebuah usaha konveksi seragam sekolah mengalami penurunan permintaan karena kebijakan sekolah yang mengizinkan siswa memakai seragam bebas beberapa hari dalam seminggu. Evaluasi strategi terbaik bagi pemilik usaha adalah...',
    options: [
      { key: 'A', text: 'Tetap bertahan pada produk seragam sekolah saja tanpa perubahan strategi' },
      { key: 'B', text: 'Melakukan diversifikasi produk, misalnya memproduksi pakaian kasual atau seragam organisasi lain, sambil tetap mempertahankan lini bisnis seragam sekolah' },
      { key: 'C', text: 'Menutup usaha secara permanen tanpa mencoba alternatif lain' },
      { key: 'D', text: 'Menaikkan harga seragam sekolah untuk menutupi penurunan permintaan' },
      { key: 'E', text: 'Mengabaikan perubahan kebijakan tersebut' }
    ],
    correctAnswer: 'B',
    explanation: 'Ketika terjadi perubahan kebijakan yang mengurangi permintaan pada satu lini produk, strategi diversifikasi produk merupakan langkah adaptif yang rasional untuk mempertahankan keberlangsungan usaha.'
  },
  {
    id: 30,
    type: 'single',
    cognitiveLevel: 'C5',
    questionFormat: 'Pilihan Ganda (Evaluasi)',
    question: 'Sebuah tim usaha SMK merancang Business Model Canvas untuk usaha "Snack Sehat Kekinian". Pada elemen Revenue Streams, mereka hanya mencantumkan satu sumber pendapatan yaitu penjualan langsung, padahal produk memiliki potensi kerja sama reseller dan penjualan daring. Evaluasi yang tepat atas BMC tersebut adalah...',
    options: [
      { key: 'A', text: 'BMC sudah lengkap dan tidak perlu direvisi' },
      { key: 'B', text: 'BMC tersebut kurang optimal karena belum menggali seluruh potensi sumber pendapatan yang dapat memperkuat keberlanjutan usaha' },
      { key: 'C', text: 'Revenue Streams tidak penting dalam BMC' },
      { key: 'D', text: 'Reseller dan penjualan daring tidak relevan bagi usaha kecil' },
      { key: 'E', text: 'Satu sumber pendapatan sudah cukup untuk semua jenis usaha' }
    ],
    correctAnswer: 'B',
    explanation: 'BMC yang baik menggali seluruh potensi Revenue Streams agar usaha memiliki sumber pendapatan yang lebih beragam dan tangguh; hanya mengandalkan satu sumber berisiko terhadap keberlanjutan usaha.'
  },

  // PILIHAN GANDA KOMPLEKS (31 - 35)
  {
    id: 31,
    type: 'complex',
    cognitiveLevel: 'C4',
    questionFormat: 'Pilihan Ganda Kompleks',
    question: 'Perhatikan beberapa kondisi berikut. Manakah yang termasuk FAKTOR EKSTERNAL yang dapat memengaruhi munculnya peluang usaha? (Jawaban dapat lebih dari satu)',
    options: [
      { key: 'A', text: 'Perubahan kebijakan pemerintah tentang izin usaha' },
      { key: 'B', text: 'Keterampilan dan hobi pemilik usaha' },
      { key: 'C', text: 'Perkembangan teknologi digital dan media sosial' },
      { key: 'D', text: 'Pengalaman kerja pemilik usaha di bidang terkait' },
      { key: 'E', text: 'Perubahan tren dan gaya hidup masyarakat' }
    ],
    correctAnswers: ['A', 'C', 'E'],
    explanation: 'Faktor eksternal berasal dari luar diri wirausahawan, seperti kebijakan pemerintah, perkembangan teknologi, dan tren/gaya hidup masyarakat. Keterampilan, hobi, dan pengalaman kerja (B dan D) termasuk faktor internal.'
  },
  {
    id: 32,
    type: 'complex',
    cognitiveLevel: 'C4',
    questionFormat: 'Pilihan Ganda Kompleks',
    question: 'Dalam menyusun Business Model Canvas, manakah pasangan elemen berikut yang termasuk dalam kelompok elemen yang berkaitan langsung dengan SISI PENDAPATAN dan PELANGGAN (bukan sisi biaya/operasional)? (Jawaban dapat lebih dari satu)',
    options: [
      { key: 'A', text: 'Customer Segments' },
      { key: 'B', text: 'Key Resources' },
      { key: 'C', text: 'Revenue Streams' },
      { key: 'D', text: 'Key Activities' },
      { key: 'E', text: 'Customer Relationships' }
    ],
    correctAnswers: ['A', 'C', 'E'],
    explanation: 'Customer Segments, Revenue Streams, dan Customer Relationships berkaitan langsung dengan sisi pelanggan dan pendapatan. Key Resources dan Key Activities termasuk elemen sisi operasional/infrastruktur yang berkaitan dengan biaya.'
  },
  {
    id: 33,
    type: 'complex',
    cognitiveLevel: 'C5',
    questionFormat: 'Pilihan Ganda Kompleks',
    question: 'Sebuah usaha katering rumahan ingin mengevaluasi kelayakan usahanya sebelum berkembang lebih besar. Manakah langkah-langkah berikut yang TEPAT dilakukan sebagai bagian dari analisis peluang usaha yang komprehensif? (Jawaban dapat lebih dari satu)',
    options: [
      { key: 'A', text: 'Melakukan survei kepuasan dan preferensi pelanggan' },
      { key: 'B', text: 'Menghitung proyeksi biaya produksi dan harga jual' },
      { key: 'C', text: 'Mengabaikan analisis pesaing karena dianggap tidak penting' },
      { key: 'D', text: 'Menganalisis potensi risiko seperti fluktuasi harga bahan baku' },
      { key: 'E', text: 'Memastikan legalitas usaha seperti izin PIRT/halal' }
    ],
    correctAnswers: ['A', 'B', 'D', 'E'],
    explanation: 'Analisis peluang usaha yang komprehensif mencakup aspek pasar (survei pelanggan), keuangan (proyeksi biaya-harga), risiko (fluktuasi harga), dan hukum (legalitas). Mengabaikan analisis pesaing (C) merupakan langkah yang keliru.'
  },
  {
    id: 34,
    type: 'complex',
    cognitiveLevel: 'C5',
    questionFormat: 'Pilihan Ganda Kompleks',
    question: 'Manakah pernyataan berikut yang secara tepat menggambarkan CIRI peluang usaha yang potensial dan layak dikembangkan? (Jawaban dapat lebih dari satu)',
    options: [
      { key: 'A', text: 'Sesuai dengan kebutuhan atau permasalahan nyata di pasar' },
      { key: 'B', text: 'Bergantung sepenuhnya pada tren yang bersifat sesaat' },
      { key: 'C', text: 'Dapat direalisasikan dengan sumber daya dan kemampuan yang dimiliki' },
      { key: 'D', text: 'Memiliki keunggulan atau pembeda dibanding produk/jasa sejenis' },
      { key: 'E', text: 'Tidak memerlukan evaluasi ulang setelah usaha berjalan' }
    ],
    correctAnswers: ['A', 'C', 'D'],
    explanation: 'Peluang usaha yang potensial harus sesuai kebutuhan nyata pasar, dapat direalisasikan dengan sumber daya yang dimiliki, dan memiliki keunggulan pembeda. Bergantung pada tren sesaat (B) dan tidak mau dievaluasi ulang (E) justru ciri peluang usaha yang rentan gagal.'
  },
  {
    id: 35,
    type: 'complex',
    cognitiveLevel: 'C4',
    questionFormat: 'Pilihan Ganda Kompleks',
    question: 'Sebuah usaha sepatu lokal mengalami stagnasi penjualan. Setelah dianalisis, ditemukan beberapa penyebab berikut. Manakah yang termasuk permasalahan pada aspek PEMASARAN (bukan aspek produksi)? (Jawaban dapat lebih dari satu)',
    options: [
      { key: 'A', text: 'Promosi di media sosial tidak konsisten' },
      { key: 'B', text: 'Kualitas jahitan sepatu sering tidak rapi' },
      { key: 'C', text: 'Target pasar yang dituju tidak jelas' },
      { key: 'D', text: 'Bahan baku sol sepatu mudah rusak' },
      { key: 'E', text: 'Kemasan produk kurang menarik untuk dipasarkan secara daring' }
    ],
    correctAnswers: ['A', 'C', 'E'],
    explanation: 'Promosi tidak konsisten, target pasar tidak jelas, dan kemasan kurang menarik berkaitan dengan aspek pemasaran. Kualitas jahitan dan bahan baku sol berkaitan dengan aspek produksi/teknis.'
  },

  // BENAR - SALAH (36 - 38)
  {
    id: 36,
    type: 'true_false',
    cognitiveLevel: 'C4',
    questionFormat: 'Benar / Salah',
    question: 'Usaha "Roti Kita" memproduksi roti tanpa bahan pengawet dan dijual dengan harga sedikit lebih tinggi dari roti pabrik pada umumnya. Pemilik usaha menargetkan konsumen yang peduli terhadap gaya hidup sehat di kota-kota besar. Tentukan BENAR atau SALAH pada setiap pernyataan berikut!',
    statements: [
      {
        id: 1,
        text: 'Usaha ini menerapkan strategi diferensiasi produk melalui aspek kesehatan (tanpa pengawet).',
        correctAnswer: true,
        explanation: 'BENAR. Tanpa bahan pengawet menjadi nilai jual unik (Value Proposition) yang membedakan dari roti pabrik pada umumnya.'
      },
      {
        id: 2,
        text: 'Segmentasi pasar usaha ini didasarkan pada faktor psikografis (gaya hidup sehat) dan geografis (kota besar).',
        correctAnswer: true,
        explanation: 'BENAR. Gaya hidup termasuk variabel psikografis, sedangkan kota besar termasuk variabel geografis dalam segmentasi pasar.'
      },
      {
        id: 3,
        text: 'Harga yang lebih tinggi otomatis membuat usaha ini pasti gagal bersaing di pasar.',
        correctAnswer: false,
        explanation: 'SALAH. Harga lebih tinggi tidak otomatis membuat gagal jika didukung Value Proposition yang jelas dan sesuai target segmen yang bersedia membayar lebih.'
      },
      {
        id: 4,
        text: 'Usaha ini tidak perlu melakukan analisis pesaing karena produknya sudah unik.',
        correctAnswer: false,
        explanation: 'SALAH. Analisis pesaing tetap diperlukan meskipun produk unik, untuk memahami posisi pasar dan mengantisipasi pesaing yang meniru konsep serupa.'
      }
    ],
    explanation: 'Analisis konsep strategi diferensiasi, segmentasi psikografis/geografis, serta penetapan harga dan pentingnya analisis kompetitor.'
  },
  {
    id: 37,
    type: 'true_false',
    cognitiveLevel: 'C4',
    questionFormat: 'Benar / Salah',
    question: 'Sebuah tim siswa SMK merencanakan usaha jasa desain grafis untuk UMKM di sekitar sekolah. Mereka belum memiliki portofolio, namun memiliki kemampuan desain yang baik dan mengetahui bahwa banyak UMKM di sekitar sekolah belum memiliki logo/branding profesional. Tentukan BENAR atau SALAH pada setiap pernyataan berikut!',
    statements: [
      {
        id: 1,
        text: 'Peluang usaha ini muncul dari kombinasi faktor internal (kemampuan desain) dan faktor eksternal (kebutuhan UMKM akan branding).',
        correctAnswer: true,
        explanation: 'BENAR. Kemampuan tim adalah faktor internal, sedangkan kebutuhan pasar UMKM adalah faktor eksternal.'
      },
      {
        id: 2,
        text: 'Ketiadaan portofolio berarti peluang usaha ini pasti tidak layak dijalankan.',
        correctAnswer: false,
        explanation: 'SALAH. Ketiadaan portofolio adalah kelemahan (weakness) yang dapat diatasi, misalnya dengan proyek percontohan atau harga promosi awal, bukan alasan mutlak usaha tidak layak.'
      },
      {
        id: 3,
        text: 'Analisis SWOT dapat membantu tim menyusun strategi mengatasi kelemahan sekaligus memanfaatkan peluang yang ada.',
        correctAnswer: true,
        explanation: 'BENAR. SWOT tepat digunakan untuk merumuskan strategi berdasarkan kekuatan, kelemahan, peluang, dan ancaman yang teridentifikasi.'
      },
      {
        id: 4,
        text: 'Karena target pasarnya adalah UMKM sekitar sekolah, tim tidak perlu melakukan segmentasi lebih lanjut.',
        correctAnswer: false,
        explanation: 'SALAH. Segmentasi tetap diperlukan, misalnya berdasarkan jenis usaha, skala usaha, atau kebutuhan spesifik agar strategi layanan lebih tepat sasaran.'
      }
    ],
    explanation: 'Kombinasi analisis faktor internal/eksternal, strategi mengatasi kelemahan portofolio, dan penerapan analisis SWOT.'
  },
  {
    id: 38,
    type: 'true_false',
    cognitiveLevel: 'C5',
    questionFormat: 'Benar / Salah',
    question: 'Sebuah proposal usaha "Laundry Kilat 1 Jam" menyatakan target pasar adalah seluruh warga kota tanpa batasan, dengan proyeksi balik modal dalam 2 bulan tanpa disertai rincian perhitungan, dan tidak mencantumkan analisis pesaing meskipun sudah ada 5 usaha laundry sejenis di radius 1 km. Tentukan BENAR atau SALAH pada setiap pernyataan berikut!',
    statements: [
      {
        id: 1,
        text: 'Target pasar "seluruh warga kota tanpa batasan" menunjukkan segmentasi yang kurang fokus dan berisiko membuat strategi pemasaran tidak efektif.',
        correctAnswer: true,
        explanation: 'BENAR. Target pasar yang terlalu luas tanpa segmentasi jelas membuat strategi pemasaran sulit terarah dan sumber daya kurang efisien.'
      },
      {
        id: 2,
        text: 'Proyeksi balik modal 2 bulan dapat langsung dipercaya karena telah dicantumkan dalam proposal.',
        correctAnswer: false,
        explanation: 'SALAH. Proyeksi keuangan yang tidak disertai rincian perhitungan tidak dapat dipercaya begitu saja dan berisiko tidak realistis.'
      },
      {
        id: 3,
        text: 'Tidak mencantumkan analisis pesaing padahal sudah ada 5 kompetitor sejenis merupakan kelemahan serius dalam proposal tersebut.',
        correctAnswer: true,
        explanation: 'BENAR. Analisis pesaing penting terutama saat kompetisi di area tersebut sudah tinggi, agar strategi diferensiasi dan penetapan harga lebih tepat.'
      },
      {
        id: 4,
        text: 'Proposal usaha ini secara keseluruhan sudah layak untuk langsung dijalankan tanpa revisi.',
        correctAnswer: false,
        explanation: 'SALAH. Proposal ini memiliki banyak kelemahan (segmentasi tidak jelas, proyeksi tidak realistis, tanpa analisis pesaing) sehingga perlu direvisi sebelum layak dijalankan.'
      }
    ],
    explanation: 'Evaluasi kritis terhadap kelayakan proposal usaha dari segi segmentasi, proyeksi keuangan, dan analisis kompetitor.'
  },

  // MENJODOHKAN (39 - 40)
  {
    id: 39,
    type: 'matching',
    cognitiveLevel: 'C2/C3',
    questionFormat: 'Menjodohkan',
    question: 'Jodohkan istilah dalam analisis peluang usaha (Kolom A) dengan pengertian yang tepat (Kolom B)!',
    columnA: [
      { id: '1', label: '1. Strength' },
      { id: '2', label: '2. Weakness' },
      { id: '3', label: '3. Opportunity' },
      { id: '4', label: '4. Threat' },
      { id: '5', label: '5. Value Proposition' }
    ],
    columnB: [
      { id: 'a', label: 'a. Nilai unik yang ditawarkan produk/jasa kepada pelanggan' },
      { id: 'b', label: 'b. Kondisi eksternal yang dapat dimanfaatkan untuk keuntungan usaha' },
      { id: 'c', label: 'c. Kekuatan atau keunggulan internal yang dimiliki usaha' },
      { id: 'd', label: 'd. Kondisi eksternal yang dapat mengancam keberlangsungan usaha' },
      { id: 'e', label: 'e. Kekurangan atau keterbatasan internal yang dimiliki usaha' }
    ],
    correctPairs: {
      '1': 'c',
      '2': 'e',
      '3': 'b',
      '4': 'd',
      '5': 'a'
    },
    explanation: 'Strength = kekuatan internal (c); Weakness = kelemahan internal (e); Opportunity = peluang eksternal (b); Threat = ancaman eksternal (d); Value Proposition = nilai unik bagi pelanggan (a).'
  },
  {
    id: 40,
    type: 'matching',
    cognitiveLevel: 'C4',
    questionFormat: 'Menjodohkan',
    question: 'Jodohkan studi kasus usaha (Kolom A) with aspek studi kelayakan usaha yang paling relevan untuk mengevaluasi permasalahan tersebut (Kolom B)!',
    columnA: [
      { id: '1', label: '1. Usaha belum memiliki izin PIRT sehingga sulit masuk ke minimarket' },
      { id: '2', label: '2. Lokasi usaha sulit dijangkau kendaraan roda empat' },
      { id: '3', label: '3. Harga bahan baku naik signifikan sehingga margin keuntungan menipis' },
      { id: '4', label: '4. Belum diketahui apakah target konsumen benar-benar membutuhkan produk tersebut' },
      { id: '5', label: '5. Alur produksi belum efisien sehingga waktu produksi lebih lama dari target' }
    ],
    columnB: [
      { id: 'a', label: 'a. Aspek pasar' },
      { id: 'b', label: 'b. Aspek teknis/lokasi' },
      { id: 'c', label: 'c. Aspek keuangan' },
      { id: 'd', label: 'd. Aspek hukum' },
      { id: 'e', label: 'e. Aspek teknis/operasional-produksi' }
    ],
    correctPairs: {
      '1': 'd',
      '2': 'b',
      '3': 'c',
      '4': 'a',
      '5': 'e'
    },
    explanation: 'Izin PIRT berkaitan dengan aspek hukum (d); lokasi sulit dijangkau berkaitan aspek teknis/lokasi (b); kenaikan harga bahan baku memengaruhi aspek keuangan (c); kebutuhan konsumen berkaitan aspek pasar (a); efisiensi alur produksi berkaitan aspek teknis/operasional (e).'
  }
];
