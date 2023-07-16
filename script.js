var area = document.getElementById('textArea');

function voice() {
  var recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-GB';
  recognition.onresult = function(event) {
    console.log(event);
    area.value = event.results[0][0].transcript;
  };
  recognition.start();
}

function copyInputField() {
    area.select();
    document.execCommand("copy");
    alert("Text copied: " + area.value);
}