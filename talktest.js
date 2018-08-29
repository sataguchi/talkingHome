//good morning Phelps

const googlehome = require('./google-home-notifier');
function Talking(text, lang, delay){
const p = new Promise((resolve, reject)=>{
setTimeout(() => {
googlehome.device("Google-Home", lang);  //google homeのデバイス名指定
googlehome.ip("192.168.nnn.nnn", lang);  // Google homeのIPアドレス
googlehome.notify(text, function(res){
console.log(res);
});
resolve();
},delay)
});
return p;
}

Talking("alexa? ミッションインポッシブルのテーマをかけて？", 'ja', 0)
.then(() => Talking("Good morning, Mr.Phelps.", 'en', 20000))
.then(() => Talking("The man you're looking at is Alfred Blezig, director of the Socialist People's Bank in the East Zone, but secretly a fanatic who has never given up working for a supreme fascist state.", 'en-gb', 6500))
.then(() => Talking("The mission, should you decide to accept it, is to stop Belzig and prevent the over $3 million which he has appropriated from falling into the hands of his new Nazi Party.", 'en-gb', 16500))
.then(() => Talking("As always, should you or any of your IM Force be caught or killed, the secretary will disavow any knowledge of your actions.", 'en-gb', 16000))
.then(() => Talking("This record will self-destruct when it reaches the final groove.Good luck, Jim.", 'en-gb', 12000));
