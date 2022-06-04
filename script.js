const btn = document.querySelector('.body');
const change = document.querySelector('.btn');
var bcount;
var l = [];
var list = [];
var k=0;

    
    btn.addEventListener('mouseenter', function () {
        
        var tenDigit, idSelector,row1,row2,row3,row4;
        if(k<=9 && l.length<=10){
            tenDigit = Math.floor(Math.random() * (4) + 1)
            if (tenDigit == 1) {
                idSelector = Math.floor(Math.random() * (3) + 11);
                row1 = document.getElementById(idSelector.toString());
                row1.classList.add('changer');
                setTimeout(function(){
                    row1.classList.remove('changer')
                },1000)
                
                k=k+1;
                bcount = l.push(String(idSelector));
    
    
            }
            if (tenDigit == 2) {
                idSelector = '2' + String(Math.floor(Math.random() * 3 + 1));
                row2 = document.getElementById(idSelector);
                row2.classList.add('changer');
                setTimeout(function(){
                    row2.classList.remove('changer')
                },1000)
                
                k=k+1;
                bcount = l.push(String(idSelector));
    
    
            }
            if (tenDigit == 3) {
                idSelector = Math.floor(Math.random() * (3) + 31);
                row3 = document.getElementById(idSelector.toString());
                row3.classList.add('changer');
                setTimeout(function(){
                    row3.classList.remove('changer')
                },1000)
                k=k+1;
                bcount = l.push(String(idSelector));
                
            }
            if (tenDigit == 4) {
                idSelector = Math.floor(Math.random() * (3) + 41);
                row4 = document.getElementById(idSelector.toString())
                row4.classList.add('changer');
                setTimeout(function(){
                    row4.classList.remove('changer')
                },1000)
                k=k+1;
                bcount = l.push(String(idSelector));
            }
        }
        
    })


var list = []
var count = 0;
var result=[];

function reply_click(clicked_id){
    var score=0;
    if(list.length<=10 && count<=9){
        list.push(clicked_id);
        count=count+1;
    }
    function comparing(l1,l2){
        if (l1.length!=l2.length){
            
            return false;
        }
        else{
            for(let m=0;m<l1.length;m++){
                if(l1[m] == l2[m]){
                    score=score+1;
                }
                if (l1[m]!=l2[m]){
                    score=score+0;
                }
            
            }
            if (score==10){
                alert("You have Won!!" + "\n" + "Proceed to next level??");
                location.href  = 'next.html'
            }
            }
            
    }
    
    comparing(l,list);
    result.push(score);
    if(result.length==10){
        alert("Score is = "+String(result[9]));
    }
    
}