
function pageReady() {
    document.getElementById("bt").onclick=function(){
        var c=0;
        var t=document.getElementById("1");
        if(t.checked == true)
        {
            c+=1;
        }
        var t=document.getElementById("2");
        if(t.checked == true)
        {
            c+=1;
        }
        var t=document.getElementById("3");
        if(t.checked == true)
        {
            c+=1;
        }
        var t=document.getElementById("4");
        if(t.checked == true)
        {
            c+=1;
        }
        var t=document.getElementById("5");
        if(t.checked == true)
        {
            c+=1;
        }
        var t=document.getElementById("6");
        if(t.checked == true)
        {
            c+=1;
        }
        var t=document.getElementById("7");
        if(t.checked == true)
        {
            c+=1;
        }

        console.log("c", c);
    
        var x=0;
        var y=0;
        var z=0;
        if(c>=4){
            x=1;
        }
        if (document.getElementById("8").checked == true)
        {
            y=1;
        }
        if (document.getElementById("9").checked == true)
        {
            z=1;
        }
        if(x+y+z==0)
        {
            document.getElementById("dialouge").innerHTML="<p>You are totally fine.<br><a href=\"#haha\" onclick=\"window.location.reload(true);\">Okay.</a></p>"
        }
        if(x+y+z==1)
        {
            document.getElementById("dialouge").innerHTML="<p>Maintain social distancing.<br><a href=\"#haha\" onclick=\"window.location.reload(true);\">Okay.</a></p>"
        }
        if(x+y+z==2)
        {
            document.getElementById("dialouge").innerHTML="<p>You should go on quarantine.<br><a href=\"#haha\" onclick=\"window.location.reload(true);\">Okay.</a></p>"
        }
        if(x+y+z==3)
        {
            document.getElementById("dialouge").innerHTML="<p>Contant to doctor as soon as possible.<br><a href=\"#haha\" onclick=\"window.location.reload(true);\">Okay.</a></p>"
        }
    }
}