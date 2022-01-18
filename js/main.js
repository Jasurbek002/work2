var nInput = document.getElementById('numberInput')
var form = document.getElementById('form')
var resBtn = document.getElementById('showResult')
var resultDiv = document.getElementById('result')





form.addEventListener('submit',event=>{
    event.preventDefault()
    findN3(arr2)
console.log(arr3);
console.log(arr2);
resultDiv.textContent =`1-katta son ${arr3[0]} \n |  2-katta son ${arr3[1]}  | \n 3-katta son ${arr3[2]}`
console.log(transfer);

})

var arr2 = [3,5, 6,7]
var arr3=[]

function findN1(arr2=[]){
    let n=0    
        for(let i=0; i<arr2.length; i++){
            let item = arr2[i]
            if(n<item){
                n=item
            }            
    }arr3.push(n)
    let index = arr2.indexOf(n);
    arr2.splice(index, 1);
                    
}
function findN2(arr2=[]){
    findN1(arr2)
    let n=0    
        for(let i=0; i<arr2.length; i++){
            let item = arr2[i]
            if(n<item){
                n=item
            }            
    }arr3.push(n)
    let index = arr2.indexOf(n);
    arr2.splice(index, 1);
                    
}
function findN3(arr2=[]){
    findN2(arr2)
    let n=0    
        for(let i=0; i<arr2.length; i++){
            let item = arr2[i]
            if(n<item){
                n=item
            }            
    }arr3.push(n)
    let index = arr2.indexOf(n);
    arr2.splice(index, 1);
}
