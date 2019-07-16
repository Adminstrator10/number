// Javascript used to activate '숫자 세기 프로그램'.
/*

    THANKS TO PAPAGO FOR THE API!
    (C) Copyright Papago
*/
// Images By IconFinder
var num = document.getElementById('num');
var ttsvar = [
    "https://papago.naver.com/apis/tts/1.11.10_37398-37d5cefc36fa860e5c0195aa4cf2d02e-1563279334659",
    'https://papago.naver.com/apis/tts/1.11.10_45425-217d5bc92f4a1b6e1a871ca7203018ae-1563279336899',
    "https://papago.naver.com/apis/tts/1.11.10_34328-6ad2cdd0bc3b7fc2d5f9682d4d71ffcd-1563279339573",
    "https://papago.naver.com/apis/tts/1.11.10_18913-1fc31a45282a2ee4dd019bc08dabeb9c-1563279344018",
    "https://papago.naver.com/apis/tts/1.11.10_51756-806199b3951fa02c293f212cbbe934d7-1563279346300",
    "https://papago.naver.com/apis/tts/1.11.10_28757-28c3199fa3b208aafaf527dd70b1d1b7-1563279350132",
    "https://papago.naver.com/apis/tts/1.11.10_54274-eddac54a4136fb63d4f99832f22749b1-1563279352610",
    "https://papago.naver.com/apis/tts/1.11.10_1982-1acaf72bf363915836e9b38d00225084-1563279354950",
    "https://papago.naver.com/apis/tts/1.11.10_10048-6aadb6fecea26529b0878b1029ea8aab-1563279357130",
    "https://papago.naver.com/apis/tts/1.11.10_17250-1c37e6f511a831cf60ab09cf594ca2b6-1563279360537",
    "https://papago.naver.com/apis/tts/1.11.10_26886-d018a9d83017791d66f5262ecfbadb5f-1563279424030",
    "https://papago.naver.com/apis/tts/1.11.10_52-d0ec0a34239fdef7569158bafddedbe0-1563279428416",
    "https://papago.naver.com/apis/tts/1.11.10_57295-6cd40a06adbfb3d290595f2de599a1eb-1563279433422",
    "https://papago.naver.com/apis/tts/1.11.10_51554-a58d1c995d7c8541ef47f86d49ad148c-1563279438420",
    "https://papago.naver.com/apis/tts/1.11.10_39367-c66409043da8536fe92231bb0aab9ef0-1563279442124",
    "https://papago.naver.com/apis/tts/1.11.10_45636-23e5661a311be7a37c73d2572074b280-1563279446412",
    "https://papago.naver.com/apis/tts/1.11.10_41801-fa79e7e38786ec6d491bd6f10eb4504b-1563279450215",
    "https://papago.naver.com/apis/tts/1.11.10_54534-8eebc324832174f0a534ce936c51496e-1563279463843",
    "https://papago.naver.com/apis/tts/1.11.10_50344-f09deb19942f3a1d87dffd32d39e97f2-1563279469545",
    "https://papago.naver.com/apis/tts/1.11.10_58375-3f99579f46b168457760332f596fc42e-1563279473177"
]
var audio = document.getElementById('audio');
function checknum() {
    for (var i = 0; i < 20; i++) {
        if (num.textContent == i+1) {
            var a = document.createElement('audio');
            document.body.appendChild(a);
            var b = document.createElement('source');
            a.appendChild(b);
            b.src = ttsvar[i];
            a.style.display = 'none';
            a.play();
        }
    }
}
