function Init(){
    document.getElementById("iframe_redactor").contentWindow.document.designMode = "On";
}
  function doStyle(style){
    document.getElementById("iframe_redactor").contentWindow.document.execCommand(style, false, null);
}

function color() {
    let x = document.getElementById("myColor").value;
    console.log(x);
    document.getElementById("iframe_redactor").contentWindow.document.execCommand('forecolor', false, x);
}

function makeUp() {
    let myIFrame = document.getElementById("iframe_redactor");
    let str = myIFrame.contentWindow.document.body.innerHTML;
    let strString = String(str);
    console.log(strString);
    myIFrame.contentWindow.document.body.innerHTML= strString.toUpperCase();
}

function makeLow() {
    let myIFrame = document.getElementById("iframe_redactor");
    let str = myIFrame.contentWindow.document.body.innerHTML;
    let strString = String(str);
    console.log(strString);
    myIFrame.contentWindow.document.body.innerHTML= strString.toLowerCase();
}
