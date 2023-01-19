var cnc_burma = 945;
var sarnel_10_uzeri = 955;
var kasli_burma = 955;
var orgu_bilezik = 960;
var sarnel_8_10 = 965;
var sarnel_5_8 = 975;

var ceyrek_yeni = 1.67;
var ceyrek_eski = 1.64;
var ceyrek_alis = 1.6;

var yarim_yeni = 3.34;
var yarim_eski = 3.28;
var yarim_alis = 3.2;


var ziynet_yeni = 6.65;
var ziynet_eski = 6.52;
var ziynet_alis = 6.4;

var ata = 6.8;
var ata_alis = 6.6;

var besli = 33.85;

var sert_22_05 = 965;
var sert_22_1 = 950;
var sert_24_1 = 1025;

var ayar_14 = 885;
var ayar_22 = 1080;

function run(){
    alis_22 = document.getElementById("22_alis").value
    satis_22 = document.getElementById("22_satis").value

    console.log("alis = " + alis_22)
    console.log("satis = " + satis_22)

    document.getElementById("cnc_burma").innerText = satis_22 * cnc_burma;
    document.getElementById("sarnel_10_uzeri").innerText = satis_22 * sarnel_10_uzeri;
    document.getElementById("kasli_burma").innerText = satis_22 * kasli_burma;
    document.getElementById("orgu_bilezik").innerText = satis_22 * orgu_bilezik;
    document.getElementById("sarnel_8_10").innerText = satis_22 * sarnel_8_10;
    document.getElementById("sarnel_5_8").innerText = satis_22 * sarnel_5_8;

    document.getElementById("ceyrek_yeni").innerText = ceyrek_yeni * satis_22;
    document.getElementById("yarim_yeni").innerText = yarim_yeni * satis_22;
    document.getElementById("ziynet_yeni").innerText = ziynet_yeni * satis_22;
    document.getElementById("ata").innerText = ata * satis_22;
    document.getElementById("besli").innerText = besli * satis_22;

    document.getElementById("ceyrek_eski").innerText = ceyrek_eski * satis_22;
    document.getElementById("yarim_eski").innerText = yarim_eski * satis_22;
    document.getElementById("ziynet_eski").innerText = ziynet_eski * satis_22;

    document.getElementById("ceyrek_alis").innerText = ceyrek_alis * alis_22;
    document.getElementById("yarim_alis").innerText = yarim_alis * alis_22;
    document.getElementById("ziynet_alis").innerText = ziynet_alis * alis_22;
    document.getElementById("ata_alis").innerText = ata_alis * alis_22;

    document.getElementById("14_ayar_iscilikli").innerText = ayar_14 * satis_22;
    document.getElementById("22_ayar_iscilikli").innerText = ayar_22 * satis_22;

    document.getElementById("22_05").innerHTML = sert_22_05 * satis_22;
    document.getElementById("22_1").innerHTML = sert_22_1 * satis_22;
    document.getElementById("24_1").innerHTML = sert_24_1 * satis_22;

}

