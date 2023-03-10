var klik = document.getElementById("tombol");
klik.onclick = function(){
    alert(`Selamat datang di permainan tebak angka!!! Silahkan masukan angka dari 1-3, tidak boleh kurang dari angka 1 atau lebih dari angka 3 ya :) Permainan ini hanya berjumlah 5 rounde saja. Silahkan di coba!!! Semoga Beruntung :)`
    );
    var skorPemain1 = 0;
    var skorPemain2 = 0;
    var ronde = 1;
    var mulai = true;

    while(mulai){
        alert("Kalian memasuki ronde "+ ronde)
        var p1 = parseInt(prompt("Pemain 1 anda harus memasukan angka 1-3"));
        var p2 = parseInt(prompt("Pemain 2 anda harus memasukan angka 1-3"));
        // perseInt = mengubah String menjadi Integer atau mengubah kebilangan bulat
        function falidasi(pemain1,pemain2){
            if(pemain1 === pemain2){
                alert("tidak boleh memasukan angka yang sama");
                return false;
            }else if(pemain1 < 1 || pemain2 < 1){
                alert("tidak boleh memasukan angka lebih kecil dari 1");
                return false;
            } else if(pemain1 > 3 || pemain2 > 3){
                alert("tidak boleh memasukan angka lebih dari 3");
                return false;
            } else if(isNaN(pemain1)  || isNaN(pemain2)){
                alert("tidak boleh mengosongkan");
                return false;
            } else{
                return true
            };
        }
        var acak = Math.floor(Math.random()*3)+1;
        var cek = falidasi(p1,p2);

        if (cek === false) { //jika kodisi tidak sesuai dengan validasi yang ada
            mulai = window.confirm("lanjut ronde berikutnya?")
          }else if(p1 !== acak && p2 !== acak){
            alert("sorry, tebakannya tidak ada yang benar :)");
            alert(`Nilai tebakannya adalah : ${acak}
            - Pemain 1 skornya = ${skorPemain1}
            - Pemain 2 skornya = ${skorPemain2}`);
          }else {
            if(p1 === acak){
                alert("Pemain 1 Menang, Anda hebat :)");
                skorPemain1++;
            }
            if(p2 === acak){
                alert("Pemain 2 Menang, Anda hebat :)");
                skorPemain2++;
            }
            alert(`Nilai tebakannya adalah : ${acak}
            - Pemain 1 skornya = ${skorPemain1}
            - Pemain 2 skornya = ${skorPemain2}`);
        }
        ronde++;
        if(ronde <=5){
            mulai = window.confirm("Lanjut ?");
        } else{
            if(skorPemain1 > skorPemain2){
                alert("Selamat Pemain 1 Menang");
                mulai = false;
            }
            if(skorPemain2 > skorPemain1){
                alert("selamat pemain 2 Menang");
                mulai = false;
            }else{
                alert("pemain 1 dan pemain 2 imbang");
                mulai = false;
            }
        }
    }
}