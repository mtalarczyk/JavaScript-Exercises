document.addEventListener("DOMContentLoaded", function(){
    var addTask = document.querySelector('#addTaskButton');
    var ul = document.querySelector('#taskList');
    var taskInput = document.querySelector('#taskInput');
    var removeAll = document.querySelector('#removeFinishedTasksButton');
    var counter = document.querySelector('#counter');
    var index = 0;
    var priority = document.querySelector('#priority');
    
    //sortowanie elementów w zależności od priorytettu
    function sortByPriority(){
        var allLi = ul.querySelectorAll('li');
        
        for(var i=0; i < allLi.length; i++){
            ul.removeChild(allLi[i]);
        }
        
        for(var i=10; i >= 0; i--){
            for(var j=0; j<allLi.length; j++){
                if(allLi[j].getAttribute('data-priority') == i){
                    ul.appendChild(allLi[j]);
                }
            }
        }   
    };
                    
    addTask.addEventListener('click', function(){
        var taskValue = taskInput.value;
        
        if(taskValue.length > 5 && taskValue.length < 100 ){
            var li = document.createElement('li');
            li.setAttribute('data-priority', priority.value)
            li.innerHTML= '<h1>' + taskValue + '</h1><button>Delete</button><button>Complete</button>';
            ul.appendChild(li);

            var btn = li.querySelectorAll('button');
            var del = btn[0];
            var cmpl = btn[1];
            var h1 = li.querySelector('h1');

            cmpl.addEventListener('click', function(){
                h1.classList.toggle('done');
                if(h1.className == 'done'){
                    counter.innerText = --index;    
                } else {
                    counter.innerText = ++index;
                }
            });

            del.addEventListener('click', function(){
                this.parentElement.parentElement.removeChild(li);
                if(!h1.className == 'done'){
                    counter.innerText = --index;    
                }
            });
            
            taskInput.value = '';
            counter.innerText = ++index;
            
            sortByPriority();
        } else {
            alert("Treść zadania musi posiadać więcej niż 5, a mniej niż 100 znaków!");
        }
    });
    
    removeAll.addEventListener('click', function(){
        var task = document.querySelectorAll('h1.done');
        for(var i=0; i < task.length; i++){
            ul.removeChild(task[i].parentElement);
        }
    });
    
    
});