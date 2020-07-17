// feet to mile Converter 

function feetToMile(feet){
    if(feet<0){
        return 'Invalid Input';
    }
    else{
        var mile = 0.000189394*feet;
        return mile.toFixed(8) + 'miles'  ; }
}

// test
var conversion = feetToMile(5);
console.log(conversion);

// Wood Calculator

function woodCalculator(chair,table,bed){
    if(chair <0 || table  <0 || bed <0){
        return 'Invalid Input';
    }
    else if((chair % 1 != 0) || (table % 1 != 0) || (bed % 1 != 0)){
        return 'Invalid Input';
    }
    else{
        var wood = chair + (table*3) + (bed*5);
        return wood + ' Cubic feet wood';
    }
}
// test
var woodcount = woodCalculator(1,3,5);
console.log(woodcount);

// Building Brick Calculator

function brickCalculator(numberofstories){
    var brick = 0;
    if(numberofstories<0 || numberofstories % 1 !=0){
        return 'Invalid Input';
    }
    else if(numberofstories<=10){
        brick = numberofstories * 15000;
        return brick;
    }
    else if(numberofstories<=20 && numberofstories>10){
        var afterten = (numberofstories -10)*12000;
        brick = 150000 + afterten;
        return brick + ' Bricks';
    }
    else{
        var aftertwenty = (numberofstories -20)*10000;
        brick = 150000 + 120000 + aftertwenty;
        return brick + ' Bricks';
    }
    
}

// test
var stories = brickCalculator(35);
console.log(stories);

// Tiny Friend finder

function tinyFriend(friends){
    if(friends.length === 0){
        return 'Invalid Input';
    }
    else{
        for(i=0;i<friends.length;i++){
            if(friends[i].length===0){
                return 'Invalid Input';
            }
        }
        var small = friends[0];
        for(i=0;i<friends.length;i++){
        if(small.length>friends[i].length){
        small = friends[i];
        }

    }
        return small;

    }
}

// test

friendsArray = ['zahid' , 'pusonbose' ,'iftekhar', 'tishme', 'sany', 'moinul'];
var tiny = tinyFriend(friendsArray);
console.log(tiny);