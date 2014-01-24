javascript: (function () { /* By quiris: http://blog.blaut.biz (CC BY 3.0) */
    thisCookie = document.cookie.split(';');
    for (i = 0; i < thisCookie.length; i++) {
        if (thisCookie[i].match(/session-id=/) == "session-id=") {
            var sid = thisCookie[i].replace(/\ssession-id=(.+)/, "$1");
        }
    }
    var znalElems = document.getElementsByClassName('a-relative');
    var targElems = document.getElementsByClassName('KindlePDoc');
    for (var i = 0; i < znalElems.length; i++) {
    	var par1 = document.createElement("p");
        var asin =  znalElems[i].getAttribute('name').replace(/.+_(.+)/,"$1");
        par1.innerHTML = "<iframe name='iframe"+ asin +"' id='iframe"+ asin +"' style='display:none;' onload='if (document.getElementById(\"iframe"+ asin +"\").contentWindow.document.body.innerText.substring(9,10) == \"1\")  {alert(\"The furthest page read has been reset.\");}'></iframe><form action='https://www.amazon.com/gp/digital/fiona/du/reset-lpr.html/ref=kinw_myk_lpr_reset' method='post' name='fionaResetLpr' target='iframe"+ asin +"'><input type='hidden' name='asin' value='"+ asin +"' /><input name='sid' type='hidden' value="+ sid +" /><p style='text-align:center;'><input type='submit' value='ClearFPR!' /></p></form>";
        targElems[i].appendChild(par1);
    }
})();