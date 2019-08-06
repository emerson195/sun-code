var xmlHttp = new XMLHttpRequest(); 
var ret;
//取得網路上的資源
function HTTPGetData(urlStr) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", urlStr, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            ret = rawFile.responseText;
            // alert("data retrieved");
            callBack();
        }
    }
    rawFile.send();
}

//上傳 dataStr 到網路上
function HTTPPostData(urlStr, dataStr ) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("POST", urlStr, true);
  
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            ret = rawFile.responseText;
            alert(ret);
        }
    }
    rawFile.send(dataStr);
}