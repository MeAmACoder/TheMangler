var room = "Intro";
var BackgroundText = "After receiving a series of gruesome and suspicious reports regarding a speed ironer and folder at a local factory. Officer Hunton began to investigate the cause of these accidents. He enlisted the help of Mr. Jackson, one of his friends. After a lot of investigating, they discovered that due to aseries of coincidences the machine had a demon summoned into it. They prepared for an exorcism and then went to the factory to exorcise the machine, which was nicknamed theMangier by the people who worked there.";
var BackgroundTextShowing = 0;
var BackgroundTextShowingMax = 530;
var BackgroundTextFuncRunning = false;
var BackgroundPressShowing = false;
var Inside1FirstTime = true;
var Inside2FirstTime = true;
var Inside3FirstTime = true;
var PlayerMoving = false;
var PlayerMovingNum = 1;
var OutsideTextFull = "Mr. Jackson: This is the Factory where the Mangier is. I have a few more preparations to do, so I will meet you inside.";
var OutsideTextShowing = true;
var MangierVibrateNum = 0;
var Inside1StartTime = false;
var Inside1StartTime1 = true;
var InsideTextShowing = 0;
var HolyWaterShowing = false;
var MangierStage = 1;
var QTouchAllowed = true;
var MangierStageAttack = false;
var MangierTimerOff = false;
var Inside2RunText = false;
var RoomThatYouDiedIn = null;
var Inside3Attack = false;
var Inside3AttackTimer = false;
var Inside2JackUpdate = false;
var Inside3AttackNum = Math.floor(Math.random() * 10);
var Inside2RunTextDie = false;
var HouseOrder = 1;
var HouseTimeoutOn = false;
var EndOrder = 1;
var EndTimeoutOn = false;
var Inside3DeathBugFix = false;
var Inside3DeathBugFixTimer = true;
function BackgroundTextFunc() {
    BackgroundTextShowing += 1;
    setTimeout(() => {
        if (BackgroundTextShowing <= BackgroundTextShowingMax) {
            BackgroundTextFunc();
        } else {
            BackgroundPressShowing = true;
        }
    }, 50);
}

function PlayerFrontMove() {
    setTimeout(() => {
        if (PlayerMoving == "Front") {
            player.image.src = "./img/Player/PlayerFront" + PlayerMovingNum.toString() + ".png";
            PlayerMovingNum += 1;
            if (PlayerMovingNum > 4) {
                PlayerMovingNum = 1;
            }
            PlayerFrontMove();
        }
    }, 200);
}
function PlayerBackMove() {
    setTimeout(() => {
        if (PlayerMoving == "Back") {
            player.image.src = "./img/Player/PlayerBack" + PlayerMovingNum.toString() + ".png";
            PlayerMovingNum += 1;
            if (PlayerMovingNum > 4) {
                PlayerMovingNum = 1;
            }
            PlayerBackMove();
        }
    }, 200);
}
function startGame() {
    Presents = new component(600, 500, "img/Intro/Presents.png", -700, 0, "image");
    Inspired = new component(600, 500, "img/Intro/Inspired.png", 900, 0, "image");
    Title = new component(500, 500, "img/Intro/Title.png", 150, 600, "image");
    press = new component(700, 610, "Press Space To Continue", 205, 450, "text", "17", "'Press Start 2P'");
    BackgroundTextHolder = [
        new component("white", 610, "After receiving a series of gruesome and", 20, 30, "text", "17", "'Press Start 2P'"),
        new component("white", 610, "suspicious reports regarding a speed ironer", 20, 60, "text", "17", "'Press Start 2P'"),
        new component("white", 610, "and folder at a local factory. Officer Hunton", 20, 90, "text", "17", "'Press Start 2P'"),
        new component("white", 610, "began to investigate the cause of these", 20, 120, "text", "17", "'Press Start 2P'"),
        new component("white", 610, "accidents. He enlisted the help of Mr.", 20, 150, "text", "17", "'Press Start 2P'"),
        new component("white", 610, "Jackson, one of his friends. After a lot of", 20, 180, "text", "17", "'Press Start 2P'"),
        new component("white", 610, "investigating they discovered that due to a", 20, 210, "text", "17", "'Press Start 2P'"),
        new component("white", 610, "series of coincidences the machine had a", 20, 240, "text", "17", "'Press Start 2P'"),
        new component("white", 610, "demon summoned into it. They prepared for an", 20, 270, "text", "17", "'Press Start 2P'"),
        new component("white", 610, "exorcism and then went to the factory to", 20, 300, "text", "17", "'Press Start 2P'"),
        new component("white", 610, "exorcise the machine which was nicknamed The", 20, 330, "text", "17", "'Press Start 2P'"),
        new component("white", 610, "Mangier by the people who worked there.", 20, 360, "text", "17", "'Press Start 2P'"),
    ]
    Inside1Background = new component(500, 1500, "img/Inside1/Background.png", 150, -1000, "image");
    OutsideBackground = new component(500, 500, "img/outside/Background.png", 150, 0, "image");
    player = new component(60, 120, "img/Player/PlayerFront2.png", 370, 310, "image");
    Jackson = new component(60, 120, "img/Jackson/JackFront2.png", 450, 200, "image");
    OutsideText = new component(500, 70, "img/Text.png", 150, 430, "image");
    OutsideText1 = new component("black", 610, "Mr. Jackson: This is the Factory where the", 180, 450, "text", "10", "'Press Start 2P'");
    OutsideText2 = new component("black", 610, "Mangier is. I have a few more preparations", 180, 470, "text", "10", "'Press Start 2P'");
    OutsideText3 = new component("black", 610, "to do, so I will meet you inside.", 180, 490, "text", "10", "'Press Start 2P'");
    Inside2Background = new component(500, 500, "img/Inside2/Background.png", 150, 0, "image");
    Inside2Mangier = new component(240, 120, "img/TheMangier/TheMangier1.png", 282, 115, "image");
    InsideText1 = new component("black", 610, "Mr. Jackson: Go up to the Mangier and press", 180, 450, "text", "10", "'Press Start 2P'");
    InsideText2 = new component("black", 610, "Q to splash holy water on it. While you are", 180, 470, "text", "10", "'Press Start 2P'");
    InsideText3 = new component("black", 610, "doing that, I will recite the Bible to it.", 180, 490, "text", "10", "'Press Start 2P'");
    HolyWater = new component(25, 30, "img/HolyWater.png", 282, 115, "image");
    Inside2FireRL = []
    Inside2FireUD = []
    Inside3Background = new component(500, 1500, "img/Inside3/Background.png", 150, -850, "image");
    YouDied = new component("Red", 610, "You Died", 160, 230, "text", "60", "'Press Start 2P'");
    NextTime = new component("Red", 610, "Maybe next time you should try avoiding the flames", 35, 280, "text", "15", "'Press Start 2P'");
    HouseBackground = new component(500, 500, "img/House/Background.png", 150, 0, "image");
    HouseDude = new component(90, 180, "img/House/Man.png", 370, 50, "image");
    HouseText1 = new component("black", 610, "You: HELP... Mr. Jackson.. he's dead... The", 180, 450, "text", "10", "'Press Start 2P'");
    HouseText2 = new component("black", 610, "Demon is still loose. We need to contain it", 180, 470, "text", "10", "'Press Start 2P'");
    HouseText3 = new component("black", 610, "in the factory before its too late.", 180, 490, "text", "10", "'Press Start 2P'");
    HouseText4 = new component("black", 610, "CRASH", 180, 450, "text", "10", "'Press Start 2P'");
    HouseText5 = new component("black", 610, "You: Oh no... It's too late...", 180, 450, "text", "10", "'Press Start 2P'");
    Quote1 = new component("Red", 610, '"Monsters are real, and ghosts are real too. They', 35, 230, "text", "15", "'Press Start 2P'");
    Quote2 = new component("Red", 610, 'live inside us, and sometimes they win."', 35, 260, "text", "15", "'Press Start 2P'");
    Quote3 = new component("Red", 610, '                                  -Stephen King', 35, 290, "text", "15", "'Press Start 2P'");
    EndBackground = new component(800, 500, "img/End.png", 0, 0, "image");
    Game.start();
}

var Game = {
    start: function () {
        this.canvas = document.getElementById('canvas');
        this.canvas.width = 800;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        this.frameNo = 0;
        this.interval = setInterval(updateGame, 20);
        window.addEventListener('keydown', function (e) {
            e.preventDefault();
            Game.keys = (Game.keys || []);
            Game.keys[e.keyCode] = (e.type == "keydown");
            Game.key = e.keyCode;
        })
        window.addEventListener('keyup', function (e) {
            e.preventDefault();
            Game.keys[e.keyCode] = (e.type == "keydown");  
            Game.key = false;          
        })
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type, fontsize, font) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    if (type == "text") {
        this.text = color;
        this.font = fontsize + "px " + font;
    }
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = Game.context;
        if (type == "image") {
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else if (type == "text") {
            ctx.fillStyle = width;
            ctx.font = this.font;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.crashWith = function (otherobj) {
        var left = this.x;
        var right = this.x + (this.width);
        var top = this.y;
        var bottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((bottom < othertop) ||
            (top > otherbottom) ||
            (right < otherleft) ||
            (left > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGame() {
    Game.clear();
    if (room == "Intro") { //____________________________Intro
        if (Presents.x <= 900) {
            Presents.x += 4;
        } else if (Presents.x >= 900 && Inspired.x + 600 >= -100) {
            Inspired.x -= 4;
        } else if (Presents.x >= 900 && Inspired.x + 600 <= -100 && Title.y > 0) {
            Title.y -= 4;
        } else if (Presents.x >= 900 && Inspired.x + 600 <= -100 && Title.y < 0) {
            Title.y = 0;
        }

        Presents.update();
        Inspired.update();
        Title.update();
        if (Title.y == 0) {
            press.update();
            if (Game.keys && Game.keys[32]) {
                room = "Background";
            }
        }
    } else if (room == "Background") { //_______________________Background
        BackgroundTextHolder.text = BackgroundText.substr(0, BackgroundTextShowing);

        if (BackgroundTextShowing <= 41) {
            BackgroundTextHolder[0].text = BackgroundText.substr(0, BackgroundTextShowing)
        }
        if (BackgroundTextShowing <= 85) {
            BackgroundTextHolder[1].text = BackgroundText.substr(41, BackgroundTextShowing - 41)
        }
        if (BackgroundTextShowing <= 131) {
            BackgroundTextHolder[2].text = BackgroundText.substr(85, BackgroundTextShowing - 85)
        }
        if (BackgroundTextShowing <= 171) {
            BackgroundTextHolder[3].text = BackgroundText.substr(131, BackgroundTextShowing - 131)
        }
        if (BackgroundTextShowing <= 210) {
            BackgroundTextHolder[4].text = BackgroundText.substr(171, BackgroundTextShowing - 171)
        }
        if (BackgroundTextShowing <= 254) {
            BackgroundTextHolder[5].text = BackgroundText.substr(210, BackgroundTextShowing - 210)
        }
        if (BackgroundTextShowing <= 298) {
            BackgroundTextHolder[6].text = BackgroundText.substr(254, BackgroundTextShowing - 254)
        }
        if (BackgroundTextShowing <= 339) {
            BackgroundTextHolder[7].text = BackgroundText.substr(298, BackgroundTextShowing - 298)
        }
        if (BackgroundTextShowing <= 384) {
            BackgroundTextHolder[8].text = BackgroundText.substr(339, BackgroundTextShowing - 339)
        }
        if (BackgroundTextShowing <= 425) {
            BackgroundTextHolder[9].text = BackgroundText.substr(384, BackgroundTextShowing - 384)
        }
        if (BackgroundTextShowing <= 470) {
            BackgroundTextHolder[10].text = BackgroundText.substr(425, BackgroundTextShowing - 425)
        }
        if (BackgroundTextShowing <= 509) {
            BackgroundTextHolder[11].text = BackgroundText.substr(470, BackgroundTextShowing - 470)
        }


        if (BackgroundTextFuncRunning == false) {
            BackgroundTextFunc();
            BackgroundTextFuncRunning = true;
        }
        if (BackgroundPressShowing == true) {
            press.update();
            if (Game.keys && Game.keys[32]) {
                room = "Outside";
                BackgroundTextFuncRunning = false;
                BackgroundTextShowing = 0;
                BackgroundTextShowingMax = 119;
            }
        }
        for (i = 0; i < BackgroundTextHolder.length; i++) {
            BackgroundTextHolder[i].update();
        }
    } else if (room == "Outside") { //_______________________Outside

        if (Game.keys && Game.keys[87]) {//w
            player.y -= 5;
            if (PlayerMoving == false) {
                PlayerMoving = "Back";
                PlayerMovingNum = 1;
                PlayerBackMove();
            }
        } else if (Game.keys && Game.keys[83]) {//s
            player.y += 5;
            if (PlayerMoving == false) {
                PlayerMoving = "Front";
                PlayerMovingNum = 1;
                PlayerFrontMove();
            }
        } else {
            if (PlayerMoving == "Front") {
                player.image.src = "./img/Player/PlayerFront2.png";
            } else if (PlayerMoving == "Back") {
                player.image.src = "./img/Player/PlayerBack2.png";
            }
            PlayerMoving = false;
        }

        if (Game.keys && Game.keys[65]) { //a
            player.x -= 5;
        } else if (Game.keys && Game.keys[68]) { //d
            player.x += 5;
        }

        if(player.y<200){
            player.y=200;
        }else if(player.y>380){
            player.y=380;
        }

        if(player.x<160){
            player.x=160;
        }else if(player.x>640-player.width){
            player.x=640-player.width;
        }

        if(player.x>355 && player.x<390 && player.y<210){
            setTimeout(() => {
                room = "Inside1";
            }, 500);
        }
        OutsideBackground.update();
        Jackson.update();
        player.update();
        if(OutsideTextShowing == true){
            OutsideText.update();
            OutsideText1.update();
            OutsideText2.update();
            OutsideText3.update();
        }
        
    } else if (room == "Inside1") { //________________________________________Inside1
        if (Inside1FirstTime == true) {
            player.x = 360;
            player.y = 320;
            player.width = 80;
            player.height = 160;
            Inside1FirstTime = false;
        }

        if (Game.keys && Game.keys[87]) {//w
            player.y -= 5;
            if (PlayerMoving == false) {
                PlayerMoving = "Back";
                PlayerMovingNum = 1;
                PlayerBackMove();
            }
        } else if (Game.keys && Game.keys[83]) {//s
            player.y += 5;
            if (PlayerMoving == false) {
                PlayerMoving = "Front";
                PlayerMovingNum = 1;
                PlayerFrontMove();
            }
        } else {
            if (PlayerMoving == "Front") {
                player.image.src = "./img/Player/PlayerFront2.png";
            } else if (PlayerMoving == "Back") {
                player.image.src = "./img/Player/PlayerBack2.png";
            }
            PlayerMoving = false;
        }

        if (Game.keys && Game.keys[65]) { //a
            player.x -= 5;
        } else if (Game.keys && Game.keys[68]) { //d
            player.x += 5;
        }


        if (player.y > 230 && Inside1Background.y > -1000) {
            player.y = 230;
            Inside1Background.y -= 5;
        } else if (player.y > 315) {
            player.y = 315;
        }

        if (player.y < 100 && Inside1Background.y < 0) {
            player.y = 100;
            Inside1Background.y += 5;
        } else if (player.y <= 100) {
            player.y = 100;
        }

        if (player.x <= 160) {
            player.x = 160;
        } else if (player.x >= 600) {
            player.x = 600;
        }

        if (player.x >= 535 && player.y <= 110 && Inside1Background.y >= -1) {
            setTimeout(() => {
                room = "Inside2";
            }, 200);
        } else if (player.x <= 190 && player.y <= 110 && Inside1Background.y >= -1) {
            setTimeout(() => {
                room = "Inside2";
            }, 200);
        }
        Inside1Background.update();
        player.update();
    } else if (room == "Inside2") { //________________________________Inside2
        if (Inside2FirstTime == true) {
            player.x = 170;
            player.y = 120;
            player.width = 60;
            player.height = 120;
            Jackson.x = 170;
            Jackson.y = 120;
            Jackson.width = 60;
            Jackson.height = 120;
            Jackson.image.src = "./img/Jackson/JackFront2.png";
            Inside2FirstTime = false;
        }

        if (Game.keys && Game.keys[87]) {//w
            player.y -= 5;
            if (PlayerMoving == false) {
                PlayerMoving = "Back";
                PlayerMovingNum = 1;
                PlayerBackMove();
            }
        } else if (Game.keys && Game.keys[83]) {//s
            player.y += 5;
            if (PlayerMoving == false) {
                PlayerMoving = "Front";
                PlayerMovingNum = 1;
                PlayerFrontMove();
            }
        } else {
            if (PlayerMoving == "Front") {
                player.image.src = "./img/Player/PlayerFront2.png";
            } else if (PlayerMoving == "Back") {
                player.image.src = "./img/Player/PlayerBack2.png";
            }
            PlayerMoving = false;
        }

        if (Game.keys && Game.keys[65]) { //a
            player.x -= 5;
        } else if (Game.keys && Game.keys[68]) { //d
            player.x += 5;
        }

        if(Game.keys && Game.keys[81] && QTouchAllowed == true){ //q
            HolyWater.x = player.x+40;
            HolyWater.y = player.y+40;
            HolyWaterShowing = true;
            QTouchAllowed = false;
            setTimeout(() => {
                HolyWaterShowing = false;
            }, 1000);
            setTimeout(() => {
                QTouchAllowed = true;
            }, 5000);
        }

        if (player.y < 100) {
            player.y = 100;
        }else if(player.y > 500){
            player.y=500;
        }
        if (player.x <= 160) {
            player.x = 160;
        } else if (player.x >= 560) {
            player.x = 560;
        }
        
        if(MangierVibrateNum == 0){
            Inside2Mangier.x+=2;
            MangierVibrateNum = 1;
        }else if(MangierVibrateNum == 1){
            Inside2Mangier.x-=5;
            MangierVibrateNum = 2;
        }else if(MangierVibrateNum == 2){
            Inside2Mangier.x+=5;
            MangierVibrateNum = 1;
        }
        
        if(Inside1StartTime1 == true){
            Inside1StartTime1 = false;
            setTimeout(() => {
                Inside1StartTime = true;
                Inside2JackUpdate = true;
            }, 5000); // CHANGE TO 5000______________________________________________________________________
        }

        Inside2Background.update();
        
        
        if(Inside1StartTime == true){
            if(Jackson.y < 255){
                Jackson.y += 4;
            }else{
                Jackson.image.src = "./img/Jackson/JackBack2.png" 
                setTimeout(() => {
                    InsideTextShowing = 1;
                }, 10000);
            }
            if(Jackson.y>255){
                OutsideText.update();
                InsideText1.update();
                InsideText2.update();
                InsideText3.update();
            }
            if (InsideTextShowing == 1) {
                InsideText1.text = "Mr. Jackson: It is going to fight back so";
                InsideText2.text = "make sure to avoid its attacks. Hopefully we";
                InsideText3.text = "will be able to destroy it. Good Luck.";
                setTimeout(() => {
                    Jackson.y=255;
                }, 10000);
            }
            
        }

        if(HolyWaterShowing == true && HolyWater.crashWith(Inside2Mangier) && MangierStage<6){
            MangierStage += 1;
            Inside2Mangier.image.src = "./img/TheMangier/TheMangier" + MangierStage.toString() + ".png";
            HolyWaterShowing = false;
            MangierStageAttack = true;
            MangierTimerOff = false;
        }
        if(MangierStage == 2 && MangierStageAttack == true){
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 150, 218, "image"))
            for (i = 0; i < Inside2FireRL.length; i++) {
                if(Inside2FireRL[i].x<620){
                    Inside2FireRL[i].x += 5;
                }
                
            }
            if(MangierTimerOff == false){
                setTimeout(() => {
                    Inside2FireRL = [];
                    MangierStageAttack = false;
                }, 5000); 
                MangierTimerOff = true;
            }

        }else if(MangierStage == 3 && MangierStageAttack == true){
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 150, 218, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 150, 388, "image"))
            for (i = 0; i < Inside2FireRL.length; i++) {
                if(Inside2FireRL[i].x<620){
                    Inside2FireRL[i].x += 5;
                }
                
            }
            if(MangierTimerOff == false){
                setTimeout(() => {
                    Inside2FireRL = [];
                    MangierStageAttack = false;
                }, 5000); 
                MangierTimerOff = true;
            }
        }else if(MangierStage == 4 && MangierStageAttack == true){
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 150, 218, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 150, 388, "image"))
            Inside2FireUD.push(new component(30, 30, "img/FireOrbUD.png", 385, 0, "image"))
            for (i = 0; i < Inside2FireRL.length; i++) {
                if(Inside2FireRL[i].x<620){
                    Inside2FireRL[i].x += 5;
                }
            }
            for (i = 0; i < Inside2FireUD.length; i++) {
                if(Inside2FireUD[i].y<470){
                    Inside2FireUD[i].y += 5;
                }
            }
            if(MangierTimerOff == false){
                setTimeout(() => {
                    Inside2FireRL = [];
                    Inside2FireUD = [];
                    MangierStageAttack = false;
                }, 5000); 
                MangierTimerOff = true;
            }
        }else  if(MangierStage == 5 && MangierStageAttack == true){
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 150, 218, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 150, 388, "image"))
            Inside2FireUD.push(new component(30, 30, "img/FireOrbUD.png", 510, 0, "image"))
            Inside2FireUD.push(new component(30, 30, "img/FireOrbUD.png", 285, 0, "image"))
            for (i = 0; i < Inside2FireRL.length; i++) {
                if(Inside2FireRL[i].x<620){
                    Inside2FireRL[i].x += 5;
                }
            }
            for (i = 0; i < Inside2FireUD.length; i++) {
                if(Inside2FireUD[i].y<470){
                    Inside2FireUD[i].y += 5;
                }
            }
            if(MangierTimerOff == false){
                setTimeout(() => {
                    Inside2FireRL = [];
                    Inside2FireUD = [];
                    MangierStageAttack = false;
                }, 5000); 
                MangierTimerOff = true;
            }
        }else if(MangierStage == 6 && MangierStageAttack == true){
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 150, 218, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 150, 388, "image"))
            Inside2FireUD.push(new component(30, 30, "img/FireOrbUD.png", 150, 0, "image"))

            for (i = 0; i < Inside2FireRL.length; i++) {
                if(Inside2FireRL[i].x<620){
                    Inside2FireRL[i].x += 5;
                }
            }
            for (i = 0; i < Inside2FireUD.length; i++) {
                if(Inside2FireUD[i].y<470){
                    Inside2FireUD[i].y += 5;
                    Inside2FireUD[i].x += 5;
                }
            }
            if(MangierTimerOff == false){
                setTimeout(() => {
                    Inside2FireRL = [];
                    Inside2FireUD = [];
                    MangierStageAttack = false;
                }, 5000); 
                MangierTimerOff = true;
            }
        }
        if(MangierStage == 6){
            Inside2Mangier.height = 240;
            Inside2Mangier.y = 55;
            Inside2RunTextDie = true;
            setTimeout(() => {
                if(Inside2RunTextDie == true){
                    Inside2RunText = true;
                }
            }, 7000);
        }
        if(Inside2RunText == true){
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 620, 255, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 620, 285, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 620, 315, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 620, 345, "image"))
            for (i = 0; i < Inside2FireRL.length; i++) {
                if(Inside2FireRL[i].x>0){
                    Inside2FireRL[i].x -= 5;
                }
            }
            OutsideText.update();
            InsideText1.text = "Mr. Jackson: RUN! GET OUT OF HE---";
            InsideText1.update();
            if (player.x >= 535 && player.y <= 110) {
                setTimeout(() => {
                    room = "Inside3";
                    Inside2FireRL = [];
                }, 200);
            } else if (player.x <= 190 && player.y <= 110) {
                setTimeout(() => {
                    room = "Inside3";
                    Inside2FireRL = [];
                }, 200);
            }
        }
        
        Inside2Mangier.update();
        if(HolyWaterShowing == true){
            HolyWater.update();
        }
        for (i = 0; i < Inside2FireRL.length; i++) {
            if(Inside2FireRL[i].crashWith(player)){
                room = "YouDied";
                RoomThatYouDiedIn = "Inside2";
            }
            Inside2FireRL[i].update();
        }
        for (i = 0; i < Inside2FireUD.length; i++) {
            if(Inside2FireUD[i].crashWith(player)){
                room = "YouDied";
                RoomThatYouDiedIn = "Inside2";
            }
            Inside2FireUD[i].update();
        }
        if (Inside2JackUpdate == true) {
            Jackson.update();
        }
        player.update();
    } else if (room == "Inside3") {  //_______________________________Inside3
        if (Inside3FirstTime == true) {
            player.x = 162;
            player.y = 280;
            player.width = 80;
            player.height = 160;
            Inside2Mangier.height = 130;
            Inside2Mangier.width = 130;
            Inside2Mangier.x = 10;
            setTimeout(() => {
                Inside3Attack = true;
            }, 500);
            Inside3FirstTime = false;
        }

        if (Game.keys && Game.keys[87]) {//w
            player.y -= 5;
            if (PlayerMoving == false) {
                PlayerMoving = "Back";
                PlayerMovingNum = 1;
                PlayerBackMove();
            }
        } else if (Game.keys && Game.keys[83]) {//s
            player.y += 5;
            if (PlayerMoving == false) {
                PlayerMoving = "Front";
                PlayerMovingNum = 1;
                PlayerFrontMove();
            }
        } else {
            if (PlayerMoving == "Front") {
                player.image.src = "./img/Player/PlayerFront2.png";
            } else if (PlayerMoving == "Back") {
                player.image.src = "./img/Player/PlayerBack2.png";
            }
            PlayerMoving = false;
        }

        if (Game.keys && Game.keys[65]) { //a
            player.x -= 5;
        } else if (Game.keys && Game.keys[68]) { //d
            player.x += 5;
        }


        if (player.y > 230 && Inside3Background.y > -850) {
            player.y = 230;
            Inside3Background.y -= 5;
        } else if (player.y > 280) {
            player.y = 280;
        }

        if (player.y < 100 && Inside3Background.y < 230) {
            player.y = 100;
            Inside3Background.y += 5;
        } else if (player.y <= 100) {
            player.y = 100;
        }

        if (player.x <= 160) {
            player.x = 160;
        } else if (player.x >= 600) {
            player.x = 600;
        }

        if(Inside3Attack == true){
            Inside2FireUD.push(new component(30, 30, "img/FireOrbUD.png", 150 + Inside3AttackNum*50, 550, "image"));

            for (i = 0; i < Inside2FireUD.length; i++) {
                if(Inside2FireUD[i].y>-50){
                    Inside2FireUD[i].y -= 20;
                }
            }
            if(Inside3AttackTimer == false){
                setTimeout(() => {
                    Inside2FireUD = [];
                    Inside3Attack = false;
                    setTimeout(() => {
                        Inside3AttackNum = Math.floor(Math.random() * 10);
                        Inside3Attack = true;
                        Inside3AttackTimer = false;
                    }, 500);
                }, 700); 
                Inside3AttackTimer = true;
            }
        }

        if(Inside3Background.y >= 230 && player.y<=101 && player.x >= 340 && player.x <= 437){
            setTimeout(() => {
                room = "House";
            }, 300);
        }
        Inside3Background.update();
        Inside2Mangier.y = player.y;
        Inside2Mangier.update();
        for (i = 0; i < Inside2FireUD.length; i++) {
            if(Inside2FireUD[i].crashWith(player)){
                room = "YouDied";
                RoomThatYouDiedIn = "Inside3";
            }
            Inside2FireUD[i].update();
        }

        player.update();
    } else if (room == "House") {   //_______________________________House
        player.x = 345;
        player.y = 300;
        player.width = 90;
        player.height = 180;
        player.image.src = "./img/Player/PlayerBack2.png"
        Inside2Mangier.x = 150
        Inside2Mangier.y = 50
        Inside2Mangier.width = 200
        Inside2Mangier.height = 200

        HouseBackground.update();
        HouseDude.update();
        player.update();
        OutsideText.update();
        if(HouseOrder == 1){
            HouseText1.update();
            HouseText2.update();
            HouseText3.update();
            if(HouseTimeoutOn == false){
                HouseTimeoutOn = true;
                setTimeout(() => {
                    HouseOrder = 2;
                    HouseTimeoutOn = false;
                }, 7000);
            }
        }else if(HouseOrder== 2){
            HouseText4.update();
            Inside2Mangier.update();
            HouseBackground.image.src = "./img/House/Background2.png"
            if(HouseTimeoutOn == false){
                HouseTimeoutOn = true;
                setTimeout(() => {
                    HouseOrder = 3;
                    HouseTimeoutOn = false;
                }, 5000);
            }
        }else if(HouseOrder == 3){
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 2000, -15, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 2000, 15, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 2000, 45, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 2000, 75, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 2000, 105, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 2000, 135, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 2000, 165, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 2000, 195, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 2000, 225, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 2000, 255, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 2000, 285, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 2000, 315, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 2000, 345, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 2000, 375, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 2000, 405, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 2000, 435, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 2000, 465, "image"))
            Inside2FireRL.push(new component(30, 30, "img/FireOrbRL.png", 2000, 495, "image"))
            for (i = 0; i < Inside2FireRL.length; i++) {
                if(Inside2FireRL[i].x>-50){
                    Inside2FireRL[i].x -= 5;
                }
            }

            HouseText5.update();
            Inside2Mangier.update();
            if(HouseTimeoutOn == false){
                HouseTimeoutOn = true;
                setTimeout(() => {
                    room = "End";
                    HouseTimeoutOn = false;
                }, 10000);
            }
        }
        for (i = 0; i < Inside2FireRL.length; i++) {
            Inside2FireRL[i].update();
        }

    } else if (room == "End") { //________________________End
        if(EndOrder == 1){
            Quote1.update();
            Quote2.update();
            Quote3.update();
            if(EndTimeoutOn == false){
                EndTimeoutOn = true;
                setTimeout(() => {
                    EndOrder = 2;
                    EndTimeoutOn = false;
                }, 10000);
            }
        }else if (EndOrder == 2){
            EndBackground.update();
        }



    } else if (room == "YouDied"){
        if(RoomThatYouDiedIn == "Inside2"){
            Inside2FirstTime = true;
            MangierVibrateNum = 0;
            Inside2Mangier = new component(240, 120, "img/TheMangier/TheMangier1.png", 282, 115, "image");
            Inside1StartTime1 = true
            MangierStage = 1;
            Inside2FireRL = [];
            Inside2FireUD = [];
            Inside1StartTime = false;
            Inside2JackUpdate = false;
            Inside2RunText = false;
            InsideTextShowing = 0;
            Inside2RunTextDie = false;
            InsideText1 = new component("black", 610, "Mr. Jackson: Go up to the Mangier and press", 180, 450, "text", "10", "'Press Start 2P'");
            InsideText2 = new component("black", 610, "Q to splash holy water on it. While you are", 180, 470, "text", "10", "'Press Start 2P'");
            InsideText3 = new component("black", 610, "doing that I will read the Bible.", 180, 490, "text", "10", "'Press Start 2P'");
            if (Game.keys && Game.keys[32]) {
                room = "Inside2";
            }
        }
        if(RoomThatYouDiedIn == "Inside3"){
            if(Inside3DeathBugFixTimer == true){
                setTimeout(() => {
                    Inside3DeathBugFix = true;
                }, 2000);
                Inside3DeathBugFixTimer = false;
            }
            Inside3FirstTime = true;
            Inside3Attack = false;
            Inside3AttackTimer = false;
            Inside3AttackNum = Math.floor(Math.random() * 10);
            Inside3Background = new component(500, 1500, "img/Inside3/Background.png", 150, -850, "image");
            if(Inside3DeathBugFix == true){
                if (Game.keys && Game.keys[32]) {
                    room = "Inside3";
                    Inside3DeathBugFix = false;
                    Inside3DeathBugFixTimer = true;
                }
            }
            
        }
        YouDied.update();
        NextTime.update();
        press.update();
    }

}