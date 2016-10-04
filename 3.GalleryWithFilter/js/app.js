document.addEventListener("DOMContentLoaded", function(){
    
    var imgs = document.querySelectorAll('#gallery img');
    var show = document.querySelector('#showButton');
    var hide = document.querySelector('#hideButton');
    var input = document.querySelector('#tagInput');
    
    //console.log(imgs, show, hide, input);       
        
        hide.addEventListener('click', function(){
            
            var tag = input.value;
            input.value='';
        
        //Przykład działania substringa    
        //    var tmp = 'sport,rower';
        //    console.log(tmp.substring(0,5));
            
            for(var i = 0; i < imgs.length; i++){
                var tags = imgs[i].dataset.tag;
                
                for(var j=0; j < tags.length; j++){
                    if (tag == tags.substring(j,j+tag.length)){
                        //imgs[i].style.display = 'none';
                        imgs[i].classList.add("invisible");
                        break; //przerywa wykonywanie pętli
                    }
                }
            }
            
        });
    
        show.addEventListener('click', function(){
            
            var tag = input.value;
            input.value='';
            
            for(var i = 0; i < imgs.length; i++){
                var tags = imgs[i].dataset.tag;
                
                for(var j=0; j < tags.length; j++){
                    if (tag == tags.substring(j,j+tag.length)){
                        //imgs[i].style.display = 'none';
                        imgs[i].classList.remove("invisible");
                        break; //przerywa wykonywanie pętli
                    }
                }
            }
            
        });
    
    
    
});


//można zamiast subStringa zastosować indexOf, albo search