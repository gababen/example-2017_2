(function(){
   'use strict';
    
    var btn= document.getElementById('btn');
    
    btn.addEventListener('click',function(){
      var n= Math.random();
        if(n<0.1){
            this.textContent='大吉';
        }else if(n<0.3){
            this.textContent='中吉';
        }else if(n<0.5){
            this.textContent='末吉';
        }else if(n<0.7){
            this.textContent='小吉';
        }else if(n<0.95){
            this.textContent='吉';
        }else {
            this.textContent='凶'
        }
        //  var results=['大吉','大吉','大吉','中吉','凶','末吉'];
        //var n =Math.floor(Math.random()* results.length);
        //this.textContent=results[n];
    });
       //switch(n){
           //case 0:
               //this.textContent='大吉';
              // break;
           //case 1:
               //this.textContent='中吉';
               //break;
           //case 2:
             //  this.textContent='kyou';
           // break;
              // }});
    
    
    //this.textContent=n;
    
    
    // if(n===0){
          //  this.textContent='大吉';
            
        //}else if(n===1){
          //  this.textContent='中吉';
        //}else{
          //  this.textContent='凶';
        //}
    //});
       
  btn.addEventListener('mousedown',function(){
        this.className='pushed';
    });
    btn.addEventListener('mouseup',function(){
        this.className='';
    });
    
    
})();