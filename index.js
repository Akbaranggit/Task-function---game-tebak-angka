document.getElementById("tombol").addEventListener("click", jalankan);
function jalankan(){
    alert(`Selamat datang di permainan tebak angka!!! Silahkan masukan angka dari 1-3, tidak boleh kurang dari angka 1 atau lebih dari angka 3 ya :) Permainan ini hanya berjumlah 5 rounde saja. Silahkan di coba!!! Semoga Beruntung :)`
    );
    var mulai = true;
    var skorPemain1 = 0;
    var skorPemain2 = 0;
    var ronde = 1;
    while(mulai){
        alert(`Kalian memasuki ronde ${ronde}`);
        var acak = Math.floor(Math.random()*3)+1;
        var input1 = parseInt(prompt("Pemain 1 tebak angka dari 1-3"));
        var input2 = parseInt(prompt("Pemain 2 tebak angka dari angka 1-3"));
        var cek = falidasi(input1, input2); 
        function falidasi(p1,p2){
            if(p1 > 3 || p2 > 3){
                alert("Tidak boleh memeasukan angka lebih dari 3");
                return false;
            }else{
                if(p1 < 1 || p2 < 1){
                    alert("Tidak boleh memasukan angka kurang dari 1");
                    return false;
                }else{
                    if(isNaN(p1) || isNaN(p2)){
                        alert("Tidak boleh kosong");
                        return false;
                    }else{
                        if(p1 === p2){
                            alert(`Pemain 1 dan Pemain 2 tidak oleh sama`)
                            return false;
                        }else{
                            return true;
                        }
                    }
                }
            }
        }
        if(!cek){
            jalankan();
        }else{
            if(input1 != acak && input2 != acak){
                alert("sorry, tebakannya tidak ada yang benar :)");
                alert(`Nilai tebakannya adalah : ${acak}
                - Pemain 1 skornya = ${skorPemain1}
                - Pemain 2 skornya = ${skorPemain2}`);
            }else {
                if(input1 === acak){
                    alert("Pemain 1 Menang, Anda hebat :)");
                    skorPemain1++;
                    alert(`Hasil
                    Skor pemain 1 : ${skorPemain1}
                    Skor pemain 2 : ${skorPemain2}`);
                }else{
                    alert("Pemain 2 Menang, Anda hebat :)");
                    skorPemain2++;
                    alert(`Hasil
                    Skor pemain 1 : ${skorPemain1}
                    Skor pemain 2 : ${skorPemain2}`);
                }
            } 
        }
        ronde++;
        if(ronde <= 5){
            mulai = true;
        } else{
                if( skorPemain1 > skorPemain2){
                    alert(`Selamat Pemain 1 Menang`);
                    alert(`Hasil
                    Skor pemain 1 : ${skorPemain1}
                    Skor pemain 2 : ${skorPemain2}`);
                    return mulai = false;    
                }else if(skorPemain2 > skorPemain1){
                    alert(`Selamat Pemain 2 Menang`);
                    alert(`Hasil
                    Skor pemain 1 : ${skorPemain1}
                    Skor pemain 2 : ${skorPemain2}`);
                    return mulai = false;
                }else{
                    alert(`Kedua Pemain imbang`);
                    alert(`Hasil
                    Skor pemain 1 : ${skorPemain1}
                    Skor pemain 2 : ${skorPemain2}`);
                    return mulai = false;
                }
            }
    }
}
