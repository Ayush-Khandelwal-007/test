function pageReady() {
    document.getElementById("bt").onclick=function(){
        var c=0;
        var t=document.getElementById("1");
        if(t)
        {
            c+=1;
        }
        var t=document.getElementById("2");
        if(t)
        {
            c+=1;
        }
        var t=document.getElementById("3");
        if(t)
        {
            c+=1;
        }
        var t=document.getElementById("4");
        if(t)
        {
            c+=1;
        }
        var t=document.getElementById("5");
        if(t)
        {
            c+=1;
        }
        var t=document.getElementById("6");
        if(t)
        {
            c+=1;
        }
        var t=document.getElementById("7");
        if(t)
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
        y=document.getElementById("8");
        z=document.getElementById("9");
        if(x+y+z==0)
        {
            document.getElementById("mess").innerHTML="<p>Cdfchchgtvf</p>"
        }
    }
}