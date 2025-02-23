let userName = prompt("Enter your name: ");

let htmlUserName = document.querySelector('#hello');
htmlUserName.innerHTML = `Merhaba ${userName}! Hoşgeldin`;

let dateTime = new Date();
let hour = dateTime.getHours();
let minute = dateTime.getMinutes();
let second = dateTime.getSeconds();
let day = dateTime.getDay();
switch(day){
    case 0: day = "Pazar"; break;
    case 1: day = "Pazartesi"; break;
    case 2: day = "Salı"; break;
    case 3: day = "Çarşamba"; break;
    case 4: day = "Perşembe"; break;
    case 5: day = "Cuma"; break;
    case 6: day = "Cumartesi"; break;
    default: day = "Error"; break;
}
function updateClock() {
    let now = new Date();
    let hour = now.getHours().toString().padStart(2, '0'); // 2 haneli saat
    let minute = now.getMinutes().toString().padStart(2, '0'); // 2 haneli dakika
    let second = now.getSeconds().toString().padStart(2, '0'); // 2 haneli saniye

    document.getElementById('date').innerHTML = `${hour}:${minute}:${second}   ${day}`;
}
setInterval(updateClock, 1000); // Her 1 saniyede bir fonksiyonu çalıştır
updateClock(); 