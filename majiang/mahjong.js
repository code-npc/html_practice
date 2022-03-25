/**
 * 麻将：（1~9）筒*4、（1~9）条*4、（1~9）万*4、东*4、南*4、西*4、北*4、中*4、发*4、白*4
 * 共：136张
 * 
 */ 
class Mahjong{
    constructor(){
        this.mahjongArr = [
            11,11,11,11,
            12,12,12,12,
            13,13,13,13,
            14,14,14,14,
            15,15,15,15,
            16,16,16,16,
            17,17,17,17,
            18,18,18,18,
            19,19,19,19,
            21,21,21,21,
            22,22,22,22,
            23,23,23,23,
            24,24,24,24,
            25,25,25,25,
            26,26,26,26,
            27,27,27,27,
            28,28,28,28,
            29,29,29,29,
            31,31,31,31,
            32,32,32,32,
            33,33,33,33,
            34,34,34,34,
            35,35,35,35,
            36,36,36,36,
            37,37,37,37,
            38,38,38,38,
            39,39,39,39,
            40,40,40,40,
            50,50,50,50,
            60,60,60,60,
            70,70,70,70,
            80,80,80,80,
            90,90,90,90,
            100,100,100,100
        ]
    }

    randArr(arr) {
        for (let i = 0; i < arr.length; i++) {
            var iRand = parseInt(arr.length * Math.random());
            var temp = arr[i];
            arr[i] = arr[iRand];
            arr[iRand] = temp;
        }
        return arr;
    }
}

class Player{
    constructor(handnum){
        this.handnum = 13;
        this.handcards = [];
    }

    get_Mahjong(arr){
        return arr.pop()
    }
    push_Mahjong(){

    }
}
/* var arr = [
    11,11,11,11,
    12,12,12,12,
    13,13,13,13,
    14,14,14,14,
    15,15,15,15,
    16,16,16,16,
    17,17,17,17,
    18,18,18,18,
    19,19,19,19,
    21,21,21,21,
    22,22,22,22,
    23,23,23,23,
    24,24,24,24,
    25,25,25,25,
    26,26,26,26,
    27,27,27,27,
    28,28,28,28,
    29,29,29,29,
    31,31,31,31,
    32,32,32,32,
    33,33,33,33,
    34,34,34,34,
    35,35,35,35,
    36,36,36,36,
    37,37,37,37,
    38,38,38,38,
    39,39,39,39,
    40,40,40,40,
    50,50,50,50,
    60,60,60,60,
    70,70,70,70,
    80,80,80,80,
    90,90,90,90,
    100,100,100,100
]; */
var mahjong = new Mahjong();

var M_mahjong = new Map();
function creatMap(){
    M_mahjong.set(11,'一筒')
    M_mahjong.set(12,'二筒')
    M_mahjong.set(13,'三筒')
    M_mahjong.set(14,'四筒')
    M_mahjong.set(15,'五筒')
    M_mahjong.set(16,'六筒')
    M_mahjong.set(17,'七筒')
    M_mahjong.set(18,'八筒')
    M_mahjong.set(19,'九筒')

    M_mahjong.set(21,'一条')
    M_mahjong.set(22,'二条')
    M_mahjong.set(23,'三条')
    M_mahjong.set(24,'四条')
    M_mahjong.set(25,'五条')
    M_mahjong.set(26,'六条')
    M_mahjong.set(27,'七条')
    M_mahjong.set(28,'八条')
    M_mahjong.set(29,'九条')
    
    M_mahjong.set(31,'一万')
    M_mahjong.set(32,'二万')
    M_mahjong.set(33,'三万')
    M_mahjong.set(34,'四万')
    M_mahjong.set(35,'五万')
    M_mahjong.set(36,'六万')
    M_mahjong.set(37,'七万')
    M_mahjong.set(38,'八万')
    M_mahjong.set(39,'九万')
    
    M_mahjong.set(40,'东')
    M_mahjong.set(50,'南')
    M_mahjong.set(60,'西')
    M_mahjong.set(70,'北')
    M_mahjong.set(80,'中')
    M_mahjong.set(90,'發')
    M_mahjong.set(100,'白')
}
creatMap()

var randMahjong = mahjong.randArr(mahjong.mahjongArr);

var player1 = new Player();
var player2 = new Player();
var player3 = new Player();
var player4 = new Player();
    for(let i = 0;i<13; i++){
        player1.handcards[i] = randMahjong.pop()
    }
    for(let i = 0;i<13; i++){
        player2.handcards[i] = randMahjong.pop()
    }
    for(let i = 0;i<13; i++){
        player3.handcards[i] = randMahjong.pop()
    }
    for(let i = 0;i<13; i++){
        player4.handcards[i] = randMahjong.pop()
    }
    


/* 出牌（pop）前，要先拿牌（push） */
player1.handcards[13]  = randMahjong.pop()

var p = player1.handcards.sort();
while(randMahjong.length > 0){
    player1.handcards[13]  = randMahjong.pop()
    var a1 = player1.handcards.pop()
    console.log('a1:'+a1)

    player2.handcards[13]  = randMahjong.pop()
    var a2 = player2.handcards.pop()
    console.log('a2:'+a2)

    player3.handcards[13]  = randMahjong.pop()
    var a3 = player3.handcards.pop()
    console.log('a3:'+a3)

    player4.handcards[13]  = randMahjong.pop()
    var a4 = player4.handcards.pop()
    console.log('a4:'+a4)
}

