/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

//Wersja 2

document.addEventListener("DOMContentLoaded", function(){
    
    var list = document.querySelectorAll('.gallery li');
    var body = document.querySelector('body');
    
    console.log(list);
    console.log(body);
    
    var div = document.createElement("div");
    div.classList.add('fullScreen');
    div.innerHTML = '<img><button class="close">Close</button>';   
    
    for(var i = 0; i < list.length; i++){
        list[i].addEventListener('click', function(){
            
            var src = this.firstElementChild.getAttribute("src");
            
            var img = div.querySelector('img');
            img.setAttribute('src', src);
            
            body.appendChild(div);
        });         
    }
    
    var close = div.querySelector('.close');
    close.addEventListener('click', function(){
        body.removeChild(div);            
    });
    
});


//Wersja 1
//document.addEventListener("DOMContentLoaded", function(){
//    
//    var li = document.querySelectorAll('li');
//    var body = document.querySelector('body');
//    
//    console.log(li);
//    console.log(body);
//    
//    for(var i = 0; i < li.length; i++){
//        li[i].addEventListener('click', function(){
//            console.log("Działa!");
//            console.log(this.firstElementChild.getAttribute("src"));
//            
//            var div = document.createElement("div");
//            var img = document.createElement("img");
//            var button = document.createElement("button");
//            
//            div.classList.add('fullScreen');
//            console.log(div.classList);
//            img.setAttribute("src",this.firstElementChild.getAttribute("src"));
//            button.classList.add('close');
//            button.innerText = "Close";
//            
//            div.appendChild(img);
//            div.appendChild(button);
//            body.appendChild(div);
//            
//            button.addEventListener('click', function(){
//                body.removeChild(div);            
//            });
//            
//            
//        });         
//    }  
//});
