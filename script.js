 if(typeof jQuery=='undefined') {
    var headTag = document.getElementsByTagName("head")[0];
    var jqTag = document.createElement('script');
    jqTag.type = 'text/javascript';
    jqTag.src = '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';
    jqTag.onload = myJQueryCode;
    headTag.appendChild(jqTag);
} else {
     myJQueryCode();
}

function theGroupFunction(){
    $("#groupContent").load("./pages/groupTemplate.html")
    $("#name").text($("#userName").text());

}
function theFunction(events){
    if(events=='contacts'){
        $("#content").load("./pages/onlyChats.html");
        return;
    }
    
    if(events=='groups'){
        $("#content").load("./pages/chatsAndzgroups.html");
        return;
    }
    if(events=='chats'){
        $("#content").load("./pages/unReadChats.html");
        return;        
    }
    
    
    
    if(events=='profile'){
        $("#content").load("./pages/profile.html");
        return;        
    }
}
function myJQueryCode() {
    //Do stuff with jQuery
    $("#content").load("./pages/onlyChats.html");
    $("body").css("background","azure");
}

