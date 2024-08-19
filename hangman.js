const kelimeler = ["JAVASCRIPT", "RUST", "PYTHON", "DART", "TYPESCRIPT", "PROGRAMLAMA", "GOIT"];
let kalanHak = 6;

const secilenKelime = kelimeler[Math.floor(Math.random() * kelimeler.length)];
let kelimeGorunumu = "_".repeat(secilenKelime.length).split("");

const kelime1 = document.getElementById("kelime");
const mesaj1 = document.getElementById("mesaj");
const tahmin1 = document.getElementById("tahmin");
const tahminButton1 = document.getElementById("tahminButton");
const hak1 = document.getElementById("hak");
const adamAsmaca1 = document.getElementById("adamAsmaca");
const hangmanImage = document.getElementById("hangmanImage");

// Resim dosyalarının yollarını içeren bir dizi
const hangmanImages = [
    "resim1.png", // 1. hata
    "resim2.png", // 2. hata
    "resim3.png", // 3. hata
    "resim4.png", // 4. hata
    "resim5.png", // 5. hata
    "resim6.png"  // 6. ve son hata
];

kelime1.textContent = kelimeGorunumu.join("  ");
hak1.textContent = kalanHak;

tahminButton1.addEventListener("click", () => {
    const tahmin = tahmin1.value.toUpperCase();
    tahmin1.value = "";
    
    if (tahmin && secilenKelime.includes(tahmin)) {
        for (let i = 0; i < secilenKelime.length; i++) {
            if (secilenKelime[i] === tahmin) {
                kelimeGorunumu[i] = tahmin;
            }
        }
    } else {
        kalanHak--;
        // Hata olduğunda doğru resmi göster
        if (kalanHak >= 0 && kalanHak < 6) {
            hangmanImage.src = hangmanImages[6 - kalanHak - 1];
        }
    }

    if (!kelimeGorunumu.includes("_")) {
        mesaj1.textContent = "TEBRIKLER KAZANDINIZ";
        tahminButton1.disabled = true;
    } else if (kalanHak === 0) {
        mesaj1.textContent = "KAYBETTİNİZ";
        tahminButton1.disabled = true;
    }

    kelime1.textContent = kelimeGorunumu.join(" ");
    hak1.textContent = kalanHak;
});
