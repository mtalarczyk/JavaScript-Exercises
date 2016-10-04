/**
 * Created by Jacek on 2015-12-16.
 */

//Wersja 2
document.addEventListener("DOMContentLoaded", function(){
    
    console.log("Działa!");
    
    var next = document.querySelector('#nextPicture');
    var prev = document.querySelector('#prevPicture');
    var li = document.querySelectorAll('li');
    var index = 0;
    console.log(li[index]);
    li[index].classList.add("visible");
    
    next.addEventListener('click', function(){
        console.log("Działa next!");
        
        li[index].classList.remove("visible");
        index = index+1;
        
        if(index >= li.length){
            index = 0; 
        }
        
        li[index].classList.add("visible");
    });
    
    prev.addEventListener('click', function(){
        console.log("Działa prev!");
        
        li[index].classList.remove("visible");
        index = index-1;
        
        if(index < 0){
            index = li.length-1; 
        }
        
        li[index].classList.add("visible");
    });
    
});



//Wersja 1
//document.addEventListener("DOMContentLoaded", function(){
//    
//    console.log("Działa!");
//    
//    var next = document.querySelector('#nextPicture');
//    var prev = document.querySelector('#prevPicture');
//    var list = document.querySelectorAll('li');
//    var index = 0;
//    
//    console.log(list[index]);
//    
//    list[index].classList.add("visible");
//    
//    next.addEventListener('click', function(){
//        console.log("Działa next!");
//        list[index].classList.toggle("visible");
//        index += 1;
//        console.log(index);
//        if(index > (list.length-1)){
//            index = list.length-1; // lub index = 0, żeby zapętlić; 
//            list[index].classList.toggle("visible");
//        } else {
//            list[index].classList.toggle("visible");
//        }
//    });
//    
//    prev.addEventListener('click', function(){
//        console.log("Działa prev!");
//        list[index].classList.toggle("visible");
//        index -= 1;
//        console.log(index);
//        if(index < 0){
//            index = 0; // lub index = list.length-1, żeby zapętlić; 
//            list[index].classList.toggle("visible");
//        } else {
//            list[index].classList.toggle("visible");
//        }
//    });
//    
//});