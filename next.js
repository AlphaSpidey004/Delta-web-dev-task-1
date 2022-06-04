const btn1 = document.querySelector('.cbtn1');
const change1 = document.querySelector('.btn1');
var bcount1;
var l1 = [];

var k1=0;

    
    document.body.addEventListener('mouseenter', function () {
        
        var tenDigit, idSelector,row1,row2,row3,row4,row5,row6;
        if(k1<=14 && l1.length<=15){
            tenDigit = Math.floor(Math.random() * (6) + 1)
            if (tenDigit == 1) {
                idSelector = Math.floor(Math.random() * (3) + 11);
                row1 = document.getElementById(idSelector.toString());
                row1.classList.add('changer');
                setTimeout(function(){
                    row1.classList.remove('changer')
                },1000)
                
                k1=k1+1;
                bcount1 = l1.push(String(idSelector));
    
    
            }
            if (tenDigit == 2) {
                idSelector = '2' + String(Math.floor(Math.random() * 3 + 1));
                row2 = document.getElementById(idSelector);
                row2.classList.add('changer');
                setTimeout(function(){
                    row2.classList.remove('changer')
                },1000)
                
                k1=k1+1;
                bcount1 = l1.push(String(idSelector));
    
    
            }
            if (tenDigit == 3) {
                idSelector = Math.floor(Math.random() * (3) + 31);
                row3 = document.getElementById(idSelector.toString());
                row3.classList.add('changer');
                setTimeout(function(){
                    row3.classList.remove('changer')
                },1000)
                k1=k1+1;
                bcount1 = l1.push(String(idSelector));
                
            }
            if (tenDigit == 4) {
                idSelector = Math.floor(Math.random() * (3) + 41);
                row4 = document.getElementById(idSelector.toString())
                row4.classList.add('changer');
                setTimeout(function(){
                    row4.classList.remove('changer')
                },1000)
                k1=k1+1;
                bcount1 = l1.push(String(idSelector));
            }
            if (tenDigit == 5) {
                idSelector = Math.floor(Math.random() * (3) + 51);
                row5 = document.getElementById(idSelector.toString())
                row5.classList.add('changer');
                setTimeout(function(){
                    row5.classList.remove('changer')
                },1000)
                k=k+1;
                bcount1 = l1.push(String(idSelector));
            }
            if (tenDigit == 6) {
                idSelector = Math.floor(Math.random() * (3) + 61);
                row6 = document.getElementById(idSelector.toString())
                row6.classList.add('changer');
                setTimeout(function(){
                    row6.classList.remove('changer')
                },1000)
                k1=k1+1;
                bcount1 = l1.push(String(idSelector));
            }
        }
        
    })


var list1 = []
var count1 = 0;
var result1=[];
var points = document.getElementsByClassName('points');

function reply_click(clicked_id){
    
    if(list1.length<=15 && count<=14){
        list1.push(clicked_id);
        count1=count1+1;
    }
    function comparing(a,b){
        if (a.length!=b.length){
            return false;
        }
        else{
            for(let m=0;m<l1.length;m++){
                if(a[m] == b[m]){
                    scores=scores+1;
                    console.log(scores);
                }
                if (a[m]!=b[m]){
                    scores=scores+0;
                    

                }
            
            }
        
            }
    }
    
    comparing(l1,list1);
    result1.push(scores);
    if(12<=result1.length<=15){
        alert("Score is = "+String(result1[14]));
    }
    
}