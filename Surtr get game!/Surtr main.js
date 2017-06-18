//enchantを必ず最初に入れる//

enchant();

//window.onloadも必ず入れる ＝function以下で処理が始まる//
//⭐︎bearが今回用いるキャラクター画像の設定なので後で差し替える//

window.onload = function(){
    var core = new Core(320,320);
    core.preload('suruto.png','haikei.png');
    
   
    
    core.fps = 15;
    
    var score =0;
    
    //var timeLeft で制限時間を設けられる//
    
    var timeLeft = 10 * core.fps;
    
    core.onload = function(){
        
        //以下アイコンbearについての設定//
        
        var bear = new Sprite(50,50);
        bear.x = rand(320);
        bear.y = rand(320);
        bear.frame = 0;
        bear.image = core.assets['suruto.png'];
        
        //背景画像の設定//
        
        var background = new Sprite(320,320);
        background.x = 0;
        background.y = 0;
        background.image = core.assets['haikei.png'];
        
        
        
 
        
        
    
        
        //⬇︎アイコンをクリックした時にどのように挙動するかの設定//
        
        bear.on('touchstart',function(){
            score++;
            scoreLabel.text = 'Score: ' + score;
            this.x = rand(320);
            this.y = rand(320);
        });
        
        //以下スコアラベルの設定//
        
        var scoreLabel = new Label('Score: 0')
        scoreLabel.x = 200;
        scoreLabel.y = 5;
        
        //以下タイムラベルの設定//
        
        var timeLabel = new Label('Time: 0')
        timeLabel.x = 5;
        timeLabel.y = 5;
        
        core.on('enterframe', function(){
                timeLeft--;
            timeLabel.text = 'Time: ' + timeLeft;
            
            //以下ゲームオーバー処理//
            
            if (timeLeft<= 0){
                alert('君は'+score+'匹つかまえたぞ！');
                this.stop();
                
            }
            
            
            
            
        });
        
        //core.rootScene.addChild(なまえ);で画面に表示される　>>忘れない事<<//
        
        core.rootScene.addChild(background);
        core.rootScene.addChild(scoreLabel);
        core.rootScene.addChild(bear);
        core.rootScene.addChild(timeLabel);
        
        
    }
    core.start();
}

function rand(n) {
     return Math.floor(Math.random()*(n+1));
    
}
