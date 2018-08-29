//Chanson Show du Nouvel An
const googlehome = require('./google-home-notifier');
googlehome.device("Google-Home", 'ja');

function Talking(text, lang, delay){
const p = new Promise((resolve, reject)=>{
setTimeout(() => {
googlehome.ip("192.168.nnn.nnn", lang); // must set your google home IP address
googlehome.notify(text, function(res){
console.log(res);
});
resolve();
},delay)
});
return p;
}

Talking("Новогоднее шоу Шансона", 'ru', 0)
.then(() => Talking("Espectáculo de Chanson de Año Nuevo", 'es', 7000))
.then(() => Talking("Chanson Show du Nouvel An", 'fr', 7000))
.then(() => Talking("New Year's Chanson Show", 'en-gb', 7000))
.then(() => Talking("New Year's Chanson Show", 'en', 7000))
.then(() => Talking("新春シャンソンショー", 'ja', 7000));

