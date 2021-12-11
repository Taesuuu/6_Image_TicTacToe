
var gms = new GameManager();

// var dataset = {
//     name1 : "hi"
// };

var gamemessage = {
    template : '<b id="massages">{{getmassage}}</b>',

    // data : {
    //     dataset : () => {
    //         return dataset;
    //     }
    // },

    computed : {
        getmassage : () => {
        gms.Update();
        if(gms.GameState === 0){
            return  "게임오버! - 무승부";
         }
        else if(gms.GameState === 1){
            return  "게임오버! - O 승리";
        }
        else if(gms.GameState === 2){
            return  "게임오버! - X 승리";
        }
        else if(gms.GameState === 3){
            return  "O 턴";
        }
        else if(gms.GameState === 4){
            return  "X 턴";
        }
        else if(gms.GameState === 6){
            return "O 를 이동하세요";
        }
        else if(gms.GameState === 7){
            return "X 를 이동하세요";
        }
        
        // console.log(gms.GameMap[0].value ,gms.GameMap[1].value ,gms.GameMap[2].value);
        // console.log(gms.GameMap[3].value ,gms.GameMap[4].value ,gms.GameMap[5].value);
        // console.log(gms.GameMap[6].value ,gms.GameMap[7].value ,gms.GameMap[8].value);
        }
    }
}

var gameWinner = {
    template : '<b> {{gamewinnerview}} </b>',

    computed : {
        gamewinnerview : function(){
            gms.Update();
            if(gms.GameState === 0){
                return  "게임오버! - 무승부";
            } 
            else if(gms.GameState === 1){
                return gms.player1.name + "님의 승리입니다.";
            }
            else if(gms.GameState === 2){
                return gms.player2.name + "님의 승리입니다.";
            }
        }
       
    }
}

// var gamemap1 = {
//     template : '<div v-for = "(maptile, i) in GameMap" @click = "oxinput" class="game-map"> {{maptile.value}} </div>',
                
//     methods : {
//         oxinput : function(event){
//             // console.log(event);
//             // console.log(event.target);
//             // console.log(event.target.parentElement.children);
//             // console.log([].indexOf.call(event.target.parentElement.children, event.target));

                        
//             gms.input([].indexOf.call(event.target.parentElement.children, event.target));
                        
//             console.log(gms.GameMap[0].value ,gms.GameMap[1].value ,gms.GameMap[2].value);
//             console.log(gms.GameMap[3].value ,gms.GameMap[4].value ,gms.GameMap[5].value);
//             console.log(gms.GameMap[6].value ,gms.GameMap[7].value ,gms.GameMap[8].value);
//         }
//     }
// }



var player1view = {
    template : '<p>{{showplayer1name}} : {{showplayer1wincount}} / {{showplayer1lostcount}} / {{showplayer1drowcount}}</p>',

    computed : {
        showplayer1name : function(){
            return gms.player1.name;
        },
        showplayer1wincount : function () {
            return gms.player1.winCount;
        },
        showplayer1lostcount : function () {
            return gms.player1.lostCount;
        },
        showplayer1drowcount : function () {
            return gms.player1.drawCount;
        }
    }
}
var player2view = {
    template : '<p>{{showplayer2name}} : {{showplayer2wincount}} / {{showplayer2lostcount}} / {{showplayer2drowcount}}</p>',

    computed : {
        showplayer2name : function(){
            return gms.player2.name;
        },
        showplayer2wincount : function () {
            return gms.player2.winCount;
        },
        showplayer2lostcount : function () {
            return gms.player2.lostCount;
        },
        showplayer2drowcount : function () {
            return gms.player2.drawCount;
        }
    }
}

var rankview = {
    template : '<center><div @click = "showrank" id="gamerankview" ><p>랭킹</p></div></center>',

    // data : {

    // },

    methods : {
        showrank : function () {
            console.log("랭킹");
            document.querySelector(".background").className = "background show";
            // document.getElementsByClassName("popup").innerHTML = "<game-player1></game-player1><game-player2></game-player2>";
            // alert("랭킹 확인 \n" 
            //        + gms.player1.name + " : " + gms.player1.winCount + "/" + gms.player1.lostCount + "/" + gms.player1.drawCount + "\n" 
            //        + gms.player2.name + " : " + gms.player2.winCount + "/" + gms.player2.lostCount + "/" + gms.player2.drawCount + "\n");
        }
    }
}

var app = new Vue({

    el : "#gameApp",
    data : gms,
            
    components : {
        
        'game-winner' : gameWinner,
        'game-message' : gamemessage,
        // 'game-board' : gamemap1,
        'game-rank' : rankview,
        'game-player1' : player1view,
        'game-player2' : player2view
    },

    computed: {
        massage : function(){
            gms.Update();
            if(gms.GameState === 0){
                return  "게임오버! - 무승부";
            }
            else if(gms.GameState === 1){
                return  "게임오버! - O 승리";
            }
            else if(gms.GameState === 2){
                return  "게임오버! - X 승리";
            }
            else if(gms.GameState === 3){
                return  "O 턴";
            }
            else if(gms.GameState === 4){
                return  "X 턴";
            }
            else if(gms.GameState === 6){
                return "O 를 이동하세요";
            }
            else if(gms.GameState === 7){
                return "X 를 이동하세요";
            }
            // console.log(gms.GameMap[0].value ,gms.GameMap[1].value ,gms.GameMap[2].value);
            // console.log(gms.GameMap[3].value ,gms.GameMap[4].value ,gms.GameMap[5].value);
            // console.log(gms.GameMap[6].value ,gms.GameMap[7].value ,gms.GameMap[8].value);
            
        }
    },
    methods : {
        oxinput : function(event){
            // console.log(event);
            // console.log(event.target);
            // console.log(event.target.parentElement.children);
            // console.log([].indexOf.call(event.target.parentElement.children, event.target));

            console.log(event.target.id);
            console.log(event.target.parentElement.parentElement);
            if(event.target.className === "game-map"){
                gms.input([].indexOf.call(event.target.parentElement.children, event.target));
            }
            else {
                gms.input([].indexOf.call(event.target.parentElement.parentElement.children, event.target.parentElement));
            }
             
            // if(event.target.id === "game-map1" || event.target.id === "game-map2" || event.target.id === "game-map3"){
            //     console.log("부모");
            //     gms.input(event.target);
            // } 
            // else if(event.target.className === "game-map"){
            //     console.log("자식");
            //     gms.input(event.target.parentElement);
            // }
            // else {
            //     // img view를 눌렀을 경우에는 그 부모의 부모를 호출
            //     console.log("이상한놈");
            //     gms.input(event.target.parentElement.parentElement);
            // }
            
                        
            // console.log(gms.GameMap[0].value ,gms.GameMap[1].value ,gms.GameMap[2].value);
            // console.log(gms.GameMap[3].value ,gms.GameMap[4].value ,gms.GameMap[5].value);
            // console.log(gms.GameMap[6].value ,gms.GameMap[7].value ,gms.GameMap[8].value);
            
        },
        isgameview : function () {
            return gms.gameview;
        },
        closepopup : function() {
            document.querySelector(".background").className = "background";
        },
        closepopup1 : function() {
            console.log("종료시켜줘");
            document.querySelector(".background1").className = "background1";
        },
        isgameover : function(){
            if(gms.GameOver == false){
                document.querySelector(".background1").className = "background1 show1";
            }
            return gms.GameOver;
        },
        GameClear : function(){
            if(gms.GameState < 3){
                return false;
            }
            else if(gms.GameState >= 3){
                return true;
            }
        }
    },

    BeforeCreate : function(){
        console.log("게임 객체 생성 중");
    },

    created : function(){
        console.log("GameState " + gms.GameState);
        console.log("게임 객체 생성완료");
        // console.log(gms.GameMap[0].value ,gms.GameMap[1].value ,gms.GameMap[2].value);
        // console.log(gms.GameMap[3].value ,gms.GameMap[4].value ,gms.GameMap[5].value);
        // console.log(gms.GameMap[6].value ,gms.GameMap[7].value ,gms.GameMap[8].value);   
                
                    
    },

    mounted : function(){
        // this.massage = "대기중... 맵을 조작해봅시다"

    },

    updated : function(){

            
    }
})

var app2 = new Vue({
    el : "#gamemain",
    data : {
        name : "hi",
        texttest1 : null,
        texttest2 : null,
        isname : false
    },
    methods : {
        inputtext : function () {
            if(this.texttest1 != null && this.texttest2 != null){
                console.log("내용입력 완료");
                this.isname = true;
                console.log(this.isname);
                gms.player1.name = this.texttest1;
                gms.player2.name = this.texttest2;
                console.log(gms.player1.name);
                console.log(gms.player2.name);
                gms.gameview = true;
            } else if(this.texttest1 == null || this.texttest2 == null){
                console.log("아직 ㄴㄴ");
                alert("닉네임을 입력해주세요");
                
            }
        },
        getGameState : function(){
            return gms.GameState;
        },
        reNickNames : function(){
            if(gms.count === 0){
                this.isname = false;
                gms.gameview = false;
            }
            else {
                
                alert("게임 중에는 닉네임을 변경 할 수 없습니다.");
            }
            
        },
        rePlayer : function(){
            if(gms.count === 0){
                alert("전적이 초기화 되었습니다.");
                gms.player1.winCount = 0;
                gms.player1.lostCount = 0;
                gms.player1.drawCount = 0;
                gms.player2.winCount = 0;
                gms.player2.lostCount = 0;
                gms.player2.drawCount = 0;
            }
            else {
                alert("게임 중에는 초기화 할 수 없습니다.");
            }
        }
    }
})