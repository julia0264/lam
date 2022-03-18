//interruptor ligar
let imgInterruptor=document.createElement("img")
imgInterruptor.setAttribute("src", "./imagens/on1.png")
imgInterruptor.style.display="none"
imgInterruptor.style.marginTop="120px"
imgInterruptor.style.width="120px"
imgInterruptor.style.marginLeft="100px"

let div1=document.createElement("div");
let img1=document.createElement("img");

img1.setAttribute("src", "./imagens/off.png");
div1.append(img1);
div1.append(imgInterruptor);

div1.style.display="flex"
img1.style.display="block"
img1.style.marginTop="120px"
img1.style.width="120px"
img1.style.marginLeft="100px"

let body=document.querySelector("body")
body.append(div1)






//lamp desligada
let div2=document.createElement("div");
let img2=document.createElement("img");
let img4=document.createElement("img")

div2.style.display="flex"


img2.setAttribute("src", "./imagens/aa.png");

img2.style.display="block";
img2.style.width="300px"
img2.style.marginLeft="auto";
img2.style.marginRight="auto";
img2.style.transform="rotate(180deg)"

img4.setAttribute("src", "./imagens/li.png")


img4.style.display="none";
img4.style.width="300px"
img4.style.marginLeft="auto";
img4.style.marginRight="auto";
img4.style.transform="rotate(180deg)"

div2.append(img2);
div2.append(img4);
body.append(div2)



img1.onclick=function(){
    body.style.background="white"
    img1.style.display="none"
    img2.style.display="none"


    imgInterruptor.style.display="block"
    img4.style.display="block"
}

imgInterruptor.onclick=function(){
    body.style.background="black"

    img1.style.display="block"
    img2.style.display="block"


    imgInterruptor.style.display="none"
    img4.style.display="none"

}


