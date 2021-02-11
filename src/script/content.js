import aboutImg from '../assets/virus.jpg';
import symptomsImg from '../assets/symptoms.jpg';
import contagionImg from '../assets/contagion.png';
import preventionImg from '../assets/prevention.png';


const contentSection = [

    { 
        image : aboutImg,
        section_menu : "Tentang",
        title : "Apa itu virus corona ?",
        description : "Coronavirus merupakan keluarga besar virus yang menyebabkan penyakit pada manusia dan hewan. Pada manusia biasanya menyebabkan penyakit infeksi saluran pernapasan, mulai flu biasa hingga penyakit yang serius seperti Middle East Respiratory Syndrome (MERS) dan Sindrom Pernafasan Akut Berat/ Severe Acute Respiratory Syndrome (SARS). Coronavirus jenis baru yang ditemukan pada manusia sejak kejadian luar biasa muncul di Wuhan Cina, pada Desember 2019, kemudian diberi nama Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-COV2), dan menyebabkan penyakit Coronavirus Disease-2019 (COVID-19).",
        next_section : "Gejala"
    },
    {
        image : symptomsImg,
        section_menu : "Gejala",
        title : "Kenali gejala covid-19 ?",
        description : "Orang dengan penyakit covid-19 memiliki berbagai gejala mulai dari gejala ringan hingga penyakit parah <b>1 - 14 hari setelah terpapar virus</b>.",
        list : ["Demam","Batuk kering","Sesak napas","Sakit kepala", "Kelelahan"],
        next_section : "Penularan"
    },
    {
        image : contagionImg,
        section_menu : "Penularan",
        title : "Bagaimana covid-19 bisa menular ?",
        description : "Menurut World Health Organization (WHO), COVID-19 menular melalui orang yang telah terinfeksi virus corona.",
        list : ["Kontak langsung dengan orang yang terpapar virus", "Kontak dengan benda yang terpapar virus", "Udara yang terpapar virus"],
        next_section : "Pencegahan"
    },
    {
        image : preventionImg,
        section_menu : "Pencegahan",
        title : "Bagaimana mencegah penularan ?",
        description : "Lindungi diri Anda dan orang lain di sekitar Anda dengan mengetahui fakta-fakta terkait virus ini dan mengambil langkah pencegahan yang sesuai. Ikuti saran yang diberikan oleh otoritas kesehatan setempat.",
        list : ["Cuci tangan secara rutin","Jaga jarak dengan orang lain", "Kenakan masker saat bepergian" , "jangan keluar rumah jika tidak enak badan"],
    },
    
]

export default contentSection;

