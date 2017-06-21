# example-2017_2
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>割り勘電卓</title>
  <style>
    body{
     front-size: 16px;
     text-align: center;
     font-family: Arial,sans-serif;
    }
    h1{
     font-size: 24px;
    }
    input[type="text"]{
    pading: 7px;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 10px;
    font-size:18px;
    text-align: right;
    }
    #btn{
      margin: 30px auto;
      width: 180px;
      border-radius: 5px;
      bx-shadow: 0 4px 0 #e91b0c;
      background: #f44336;
      color: #fff;
      cursor: pointer;
      padding: 7px;
      }
      #btn:hover{
       opacity:0.8;
      }
    </style>
</head>
<doby>
  <h1>割り勘電卓</h1>
  <p>金額　<input type="text" id="price" value="0"></p>
  <p>人数　<input type="text" id="num" value="0"></p>
  <div id="btn">計算する</div>
  <p id="result"></p>
  <script>
  (fuction(){
  `use strict`;
  
  var priceForm = document.getElementById(`price`);
  var numForm = document.getElementById(`num`);
  var btn = document.getElementById(`btn`);
  var result = document.getElementById(`result`);
  
  priceForm.addEventListener(`click`,function(){
    this.select();
  });
  numForm.addEventListener(`click`,function(){
    this.select();
  });
  btn.addEventListener(`click`,function(){
    var price = priceForm.value;
    var num = numForm.value;
    var x1, x2, y1, y2;
    var unit =100;
    
    
    if(price.match(/^[1-9][0-9]*$/) && num.match(/^[1-9][0-9]*$/)){
      //ok
    //reslt.innerHTML = `OK!`;
    if(price % num === 0){
      reslt.innerHTML ='一人　' +(price / num)+ ' 円ちょうどです！';
        
      }else{
        //result.innerHTML = 'something';
        x1 =math.floor(price / num ? unit) * unit;
        y2 =price -(x1 * num);
        x1 =math.ceil(price / num ? unit) * unit;
        y2 =price -(x2 * num);
        
        result.innerHTML = 
        '一人 ' + x1 + '円だと'+ y1 +'円足りません。<br>'+
        '一人 ' + x2 + '円だと'+ y2 +'円余ります。';
      }
    }else{
      //error
      reslt.innerHTML = `入力された値に誤りがあります。`;
    }
  });
  
  })();
  </script>
</doby>
</html>