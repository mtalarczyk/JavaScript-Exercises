document.addEventListener("DOMContentLoaded", function(){
    var li = document.querySelector('ul').children;
    
    for(var i=0; i < li.length; i++){
        li[i].addEventListener('mouseover', function(){
            var ul = this.querySelector('ul');
            if( ul != null){
               ul.style.display='block';
            }
        });
        
        li[i].addEventListener('mouseout', function(){
            var ul = this.querySelector('ul');
            if( ul != null){
               ul.style.display='none';
            }
        });
    } 
});