let MnTunggal = document.getElementById("mnTunggal")
let MoTunggal = document.getElementById("moTunggal")
let iTunggal = document.getElementById("iTunggal") 
let nTunggal = document.getElementById("nTunggal")
let mnMajemuk = document.getElementById("mnMajemuk")
let moMajemuk = document.getElementById("moMajemuk")
let iMajemuk = document.getElementById("iMajemuk")
let nMajemuk = document.getElementById("nMajemuk")
let anuitas = document.getElementById("anuitas")
let anuitasMo = document.getElementById("anuitasMo")
let anuitasN = document.getElementById("anuitasN")

let rumusMatematika = document.getElementById("selection")
let bungaTunggalMn = document.getElementById("bungaTunggalMn")
let bungaTunggalMo = document.getElementById("bungaTunggalMo")
let bungaTunggalI = document.getElementById("bungaTunggalI")
let bungaTunggalN = document.getElementById("bungaTunggalN")
let bungaMajemukMn = document.getElementById("bungaMajemukMn")
let bungaMajemukMo = document.getElementById("bungaMajemukMo")
let bungaMajemukI = document.getElementById("bungaMajemukI")
let bungaMajemukN = document.getElementById("bungaMajemukN")
let Anuitas = document.getElementById("Anuitas")
let moAnuitas = document.getElementById("moAnuitas")
let nAnuitas = document.getElementById("nAnuitas")

MnTunggal.style.display = "none"
MoTunggal.style.display = "none"
iTunggal.style.display = "none"
nTunggal.style.display = "none"
mnMajemuk.style.display = "none"
moMajemuk.style.display = "none"
iMajemuk.style.display = "none"
nMajemuk.style.display = "none"
anuitas.style.display = "none"
anuitasMo.style.display = "none"
anuitasN.style.display = "none"
function pilihRumus(){
    if(rumusMatematika.value == bungaTunggalMn.value){
        MnTunggal.style.display = "block"    
        MoTunggal.style.display = "none"
        iTunggal.style.display = "none"
        nTunggal.style.display = "none"
        mnMajemuk.style.display = "none"
        moMajemuk.style.display = "none"
        iMajemuk.style.display = "none"
        nMajemuk.style.display = "none"
        anuitas.style.display = "none"
        anuitasMo.style.display = "none"
        anuitasN.style.display = "none"
    }
    else if(rumusMatematika.value == bungaTunggalMo.value){
        MnTunggal.style.display = "none"    
        MoTunggal.style.display = "block"
        iTunggal.style.display = "none"
        nTunggal.style.display = "none"
        mnMajemuk.style.display = "none"
        moMajemuk.style.display = "none"
        iMajemuk.style.display = "none"
        nMajemuk.style.display = "none"
        anuitas.style.display = "none"
        anuitasMo.style.display = "none"
        anuitasN.style.display = "none"
    }
    else if(rumusMatematika.value == bungaTunggalI.value){
        MnTunggal.style.display = "none"    
        MoTunggal.style.display = "none"
        iTunggal.style.display = "block"
        nTunggal.style.display = "none"
        mnMajemuk.style.display = "none"
        moMajemuk.style.display = "none"
        iMajemuk.style.display = "none"
        nMajemuk.style.display = "none"
        anuitas.style.display = "none"
        anuitasMo.style.display = "none"
        anuitasN.style.display = "none"
    }
    else if(rumusMatematika.value == bungaTunggalN.value){
        MnTunggal.style.display = "none"    
        MoTunggal.style.display = "none"
        iTunggal.style.display = "none"
        nTunggal.style.display = "block"
        mnMajemuk.style.display = "none"
        moMajemuk.style.display = "none"
        iMajemuk.style.display = "none"
        nMajemuk.style.display = "none"
        anuitas.style.display = "none"
        anuitasMo.style.display = "none"
        anuitasN.style.display = "none"
    }
    else if(rumusMatematika.value == bungaMajemukMn.value){
        MnTunggal.style.display = "none"    
        MoTunggal.style.display = "none"
        iTunggal.style.display = "none"
        nTunggal.style.display = "none"
        mnMajemuk.style.display = "block"
        moMajemuk.style.display = "none"
        iMajemuk.style.display = "none"
        nMajemuk.style.display = "none"
        anuitas.style.display = "none"
        anuitasMo.style.display = "none"
        anuitasN.style.display = "none"
    }
    else if(rumusMatematika.value == bungaMajemukMo.value){
        MnTunggal.style.display = "none"    
        MoTunggal.style.display = "none"
        iTunggal.style.display = "none"
        nTunggal.style.display = "none"
        mnMajemuk.style.display = "none"
        moMajemuk.style.display = "block"
        iMajemuk.style.display = "none"
        nMajemuk.style.display = "none"
        anuitas.style.display = "none"
        anuitasMo.style.display = "none"
        anuitasN.style.display = "none"
    }
    else if(rumusMatematika.value == bungaMajemukN.value){
        MnTunggal.style.display = "none"    
        MoTunggal.style.display = "none"
        iTunggal.style.display = "none"
        nTunggal.style.display = "none"
        mnMajemuk.style.display = "none"
        moMajemuk.style.display = "none"
        iMajemuk.style.display = "none"
        nMajemuk.style.display = "block"
        anuitas.style.display = "none"
        anuitasMo.style.display = "none"
        anuitasN.style.display = "none"
    }
    else if(rumusMatematika.value == bungaMajemukI.value){
        MnTunggal.style.display = "none"    
        MoTunggal.style.display = "none"
        iTunggal.style.display = "none"
        nTunggal.style.display = "none"
        mnMajemuk.style.display = "none"
        moMajemuk.style.display = "none"
        iMajemuk.style.display = "block"
        nMajemuk.style.display = "none"
        anuitas.style.display = "none"
        anuitasMo.style.display = "none"
        anuitasN.style.display = "none"
    }
    else if(rumusMatematika.value == Anuitas.value){
        MnTunggal.style.display = "none"    
        MoTunggal.style.display = "none"
        iTunggal.style.display = "none"
        nTunggal.style.display = "none"
        mnMajemuk.style.display = "none"
        moMajemuk.style.display = "none"
        iMajemuk.style.display = "none"
        nMajemuk.style.display = "none"
        anuitas.style.display = "block"
        anuitasMo.style.display = "none"
        anuitasN.style.display = "none"
    }
    else if(rumusMatematika.value == moAnuitas.value){
        MnTunggal.style.display = "none"    
        MoTunggal.style.display = "none"
        iTunggal.style.display = "none"
        nTunggal.style.display = "none"
        mnMajemuk.style.display = "none"
        moMajemuk.style.display = "none"
        iMajemuk.style.display = "none"
        nMajemuk.style.display = "none"
        anuitas.style.display = "none"
        anuitasMo.style.display = "block"
        anuitasN.style.display = "none"
    }
    else if(rumusMatematika.value == nAnuitas.value){
        MnTunggal.style.display = "none"    
        MoTunggal.style.display = "none"
        iTunggal.style.display = "none"
        nTunggal.style.display = "none"
        mnMajemuk.style.display = "none"
        moMajemuk.style.display = "none"
        iMajemuk.style.display = "none"
        nMajemuk.style.display = "none"
        anuitas.style.display = "none"
        anuitasMo.style.display = "none"
        anuitasN.style.display = "block"
    }
    return
}

//Mencari Mn Bunga Tunggal
function mnTunggal(){
    let Mo = document.getElementById("inputMo").value;
    let n = document.getElementById("inputN").value;
    let i = document.getElementById("inputI").value;
    let i1 = i / 100;
    //MN
    let hasil_1 = 1 + i1 * n;
    let hasil_5 = Math.round(Mo * hasil_1)
    document.getElementById("hasilMnTunggal").innerHTML = "HASIL = Rp." + hasil_5 + ',00' 
}

//Mencari Mo Bunga Tunggal
function moTunggal(){
    let Mn = document.getElementById("inputMn").value;
    let n = document.getElementById("inputN1").value;
    let i = document.getElementById("inputI1").value;
    let i1 = i / 100;
    //Mo
    let hasil_1 = 1 + i1 * n;
    let hasil_5 = Math.round(Mn / hasil_1)
    document.getElementById("hasilMoTunggal").innerHTML = "HASIL = Rp." + hasil_5 + ',00'
}

//Mencari I Bunga Tunggal
function tunggalI(){
    let Mn = document.getElementById("input-Mn").value;
    let n = document.getElementById("input-n").value;
    let Mo = document.getElementById("input-Mo").value;
    //Mo
    let hasil_1 = Mn / Mo;
    let hasil_2 = hasil_1 - 1;
    let hasil_4 = hasil_2 / n;
    let hasil_5 = hasil_4 * 100
    document.getElementById("hasilITunggal").innerHTML = "HASIL = " + hasil_5 + '%/bulan' 
}

function tunggalN(){
    let Mn = document.getElementById("inputMnTunggal").value;
    let i = document.getElementById("inputITunggal").value;
    let Mo = document.getElementById("inputMoTunggal").value;
    let i1 = i / 100;
    //Mo
    let hasil_1 = Mn / Mo;
    let hasil_2 = hasil_1 - 1;
    let hasil_5 = Math.round(hasil_2 / i1);
    document.getElementById("hasilNTunggal").innerHTML = "HASIL = " + hasil_5 + 'bulan' 
}

//bunga majemuk mn
function hasilMajemukMn(){
    let Mo = document.getElementById("inputBungaMajemukMo").value;
    let n = document.getElementById("inputBungaMajemukN").value;
    let i = document.getElementById("inputBungaMajemukI").value;
    let i1 = i / 100;
    //MN
    let hasil_1 = 1 + i1;
    let hasil_2 = hasil_1 ** n;
    let hasil_5 = Math.round(Mo * hasil_2)
    document.getElementById("hasilRumusBungaMajemukMn").innerHTML = "HASIL = Rp." + hasil_5 + ',00' 
}

//bunga majemuk mo
function hasilBungaMajemukMo(){
    let Mn = document.getElementById("inputBungaMajemukMn1").value;
    let n = document.getElementById("inputBungaMajemukN1").value;
    let i = document.getElementById("inputBungaMajemukI1").value;
    let i1 = i / 100;
    //Mo
    let hasil_1 = 1 + i1;
    let hasil_2 = hasil_1 ** n
    let hasil_5 = Math.round(Mn / hasil_2)
    document.getElementById("hasilRumusBungaMajemukMo").innerHTML = "HASIL = Rp." + hasil_5 + ',00' 
}

//bunga majemuk i
function hasilBungaMajemukI(){
    let Mn = document.getElementById("inputBungaMajemukMn2").value;
    let n = document.getElementById("inputBungaMajemukN2").value;
    let Mo = document.getElementById("inputBungaMajemukMo2").value;
    //Mo
    let hasil_1 = Mn / Mo;
    let hasil_2 = 1 / n;
    let hasil_3 = hasil_1 ** hasil_2;
    let hasil_4 = hasil_3 -1;
    let hasil_5 = hasil_4 * 100;
    document.getElementById("hasilRumusBungaMajemukI").innerHTML = "HASIL = " + hasil_5 + '%/bulan' 
}

//bunga Majemuk N
function hasilBungaMajemukN(){
    let Mn = document.getElementById("inputBungaMajemukMn3").value;
    let i = document.getElementById("inputBungaMajemukI3").value;
    let Mo = document.getElementById("inputBungaMajemukMo3").value;
    let i1 = i / 100;
    //Mo
    let hasil_1 = Mn / Mo;
    let hasil_2 = 1 + i1;
    let hasil_3 = Math.log(hasil_1);
    let hasil_4 = Math.log(hasil_2)
    let hasil_5 = Math.round(hasil_3 / hasil_4);
    document.getElementById("hasilRumusBungaMajemukN").innerHTML = "HASIL = " + hasil_5 + 'bulan' 
}

//anuitas
function hasilAnuitas1(){
    let Mo = document.getElementById("inputAnuitasMo1").value;
    let n = document.getElementById("inputAnuitasN1").value;
    let i = document.getElementById("inputAnuitasI1").value;
    let i1 = i / 100;
    let hasil_1 = 1 + i1;
    let hasil_2 = hasil_1 ** n;
    let hasil_3 = Mo * i1 * hasil_2;
    let hasil_4 = hasil_2 - 1;
    let hasil_5 = Math.round(hasil_3 / hasil_4)
    document.getElementById("hasilRumusAnuitas1").innerHTML = "HASIL = Rp." + hasil_5 + ',00' 
}

//anuitas mo
function hasilAnuitasMo(){
    let Mn = document.getElementById("inputAnuitas2").value;
    let n = document.getElementById("inputAnuitasN2").value;
    let i = document.getElementById("inputAnuitasI2").value;
    let i1 = i / 100;
    //Mo
    let hasil_1 = 1 + i1;
    let hasil_2 = hasil_1 ** n;
    console.log(hasil_2)
    let hasil_3 = hasil_2 - 1;
    let hasil_4 = Mn * hasil_3;
    let hasil_6 = i1 * hasil_2;
    let hasil_5 = Math.round(hasil_4 / hasil_6)
    document.getElementById("hasilRumusAnuitasMo").innerHTML = "HASIL = Rp." + hasil_5 + ',00' 
}

//anuitas n
function hasilAnuitasN(){
    let Mn = document.getElementById("inputAnuitas3").value;
    let i1 = document.getElementById("inputAnuitasI3").value;
    let Mo = document.getElementById("inputAnuitasMo3").value;
    let i = i1 / 100;
    //Mo
    let hasil_1 = 1 + i;
    let hasil_2 = Mo * i;
    let hasil_4 = Mn - hasil_2;
    let hasil_6 = Mn / hasil_4;
    let hasil_3 = Math.log(hasil_6);
    let hasil_7 = Math.log(hasil_1)
    let hasil_5 = Math.round(hasil_3 / hasil_7);
    document.getElementById("hasilRumusAnuitasN").innerHTML = "HASIL = " + hasil_5 + 'bulan' 
}

function darkMode(){
    let body = document.body

    body.classList.toggle("dark")
}