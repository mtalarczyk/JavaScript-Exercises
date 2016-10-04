/*
 <span class="tooltipText">Text tooltipa</span>
 */

document.addEventListener("DOMContentLoaded", function(){
    
    var tooltip = document.querySelectorAll('.tooltip');
    console.log(tooltip);
    
    for(var i=0; i < tooltip.length; i++){
        tooltip[i].addEventListener('mouseover', function(){
            var tip = document.createElement('span');
            tip.classList.add('tooltipText');
            tip.innerText = this.getAttribute('data-text');
            this.appendChild(tip);
        });
        
        tooltip[i].addEventListener('mouseout', function(){
            var tip = this.querySelector('.tooltipText');
            this.removeChild(tip);
        });
    }
    
});