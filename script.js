
var screenDiv = document.getElementsByClassName('screen')[0]
// var display = document.getElementsByClassName('display')[0]
var display = document.getElementById("display");
var backBtn = document.getElementById("backbtn");
// backBtn.value= "ss";
console.log(backBtn)
function getValue(value){
    switch(value){
        case '=':
            if(display.value==="")
            {
                alert('Please Enter Some Value...')
                break;
            }
            else{
            var res = eval(display.value);
            display.value = res;
            break;
        }
        case '':
            display.value = "";
            break; 
        case 'back':
            display.value = display.value.slice(0,display.value.length-1);
                break;
        default:
            display.value += value;
  
    }

}

// var num = 100;
// console.log(`the result is: ${num+100} and the 
// an
// a

// `) //template literals

// // var btn = `<button><i>submit</i></button>`
// // console.log(btn);
// // screenDiv.innerHTML = btn;



// var array = [0,1,2,3,4]
// var array2 = [0,1,2,3,4]
// var array3 = [...array, ...array2] //spread operators
//  array3 = [100, ...array3]


// console.log(array3);