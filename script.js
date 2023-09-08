//Here I'm assing all the variable in global scope so that we can  easily access these variable in any functons; 

let timeInterval;
let elem2 ;
let pause=false;
let elem1;

//The function is for setTimeInterval button as well as Resume button for setInterval;
function stater(){  
    timeInterval=setInterval(function(){
        if (elem2 >= 0) {
       let hour=Math.floor(elem2 / 3600); // In this down three lines are showing hours, miniuts, and second.And we use Math.floor() method -
          let miniuts=Math.floor((elem2 -(3600*hour))/60); // for remove the decimals points on our result.
          let second=Math.floor(elem2 - (3600*hour) - (miniuts*60));
        document.getElementById('text2').innerHTML=`${hour}h:${miniuts}m:${second}s`;
        elem2=elem2-1;
        }
          else if(elem2 < 0){
              alert('The time has been expried');
            clearInterval(timeInterval);
          }
    },1000);
}


/*Herer we call the above function (stater) in button2 (set Time Interval), means when the button is click the stater 
functio  will run */
 document.getElementById('button2').addEventListener('click',()=>{
       elem2= document.getElementById('time').value; //Here assingn the value in elem2 variable which is already decleared -
       stater();                                    //in the global scope.Means whatever we write in input field the value 
                                                    // is assign in elem2 variable.      
    })
    

// Here we apply a click event on  pause button for set time interval. Whenever the pause button is clicked the countdown will stop.
  document.getElementById("pause").addEventListener('click',()=>{
    clearInterval(timeInterval); // The clearInterval is a in built function and with the help of clearInterval we pass the
  })                             // the parameter of timeInterval means we just clear/stop the above setInterval() function.



//Here we apply a click event on  resume button for set time interval. Whenever the pause button is clicked the countdown will start.
  document.getElementById('resume').addEventListener('click',()=>{
            stater();// the funtion call help you to run the stater function again at the same value that you are pause the countdown.
  })
//on the all above lines we just do the code for set Time Interval.


//The function is for set Time Out button as well as Resume button for Resume the setTimeOut(countdown);
  function timer(){
    var timeOut=setTimeout(function(){
     if (elem1 >= 0 && pause==false) {
          let hour=Math.floor(elem1 / 3600);
          let miniuts=Math.floor((elem1 -(3600*hour))/60);
          let second=Math.floor(elem1 - (3600*hour) - (miniuts*60));
        document.getElementById('text1').innerHTML=`${hour}h:${miniuts}m:${second}s`;// Here we just assign the elem1 value in the first div at text1 field.
            elem1=elem1-1; // Here we decrease the elem1 value by 1 whenever the if() condition is run.
            timer(); // Here we used recursion method means whenever the if() condition is satisfy it call the timer() -
        }            // function for creating a loop and using this method we run the countdown.

          else if(elem1 < 0){
              alert('The time has been expried');
                       clearTimeout(timeOut); // Here we just clear the time Out means the countdown will stop.And the function is kill.
          }
    },1000);
}

/*Herer we call the above function(timer) in button2(set Time Out), means when the button is click the timer() 
functio  will run */
document.getElementById('button1').addEventListener('click',()=>{
    elem1 = document.getElementById('time').value;
   timer();                                         // In eventListener we do same process as setTimeInterval
})


/*In this line we just apply the click event on the pause1(set Time Out) button. Whenever the button is clicked the pause value is true means
the above function timer will not run and the pause vaule is not satisfied the if condition */
document.getElementById('pause1').addEventListener('click',()=>{
    pause=true;
})


//Here we apply a click event on resume button for set time Out. Whenever the pause button is clicked the countdown will start.
document.getElementById('resume1').addEventListener('click',()=>{
    pause=false;   // Here we again assign the pause value to false so that whenever the timer function is called the if() condition will satisfy
    timer();       // and run the code means resume the countdown. 
})

/*Important:- In set Time Interval we don't use recursion method because we can easily start the countDown with clearInterval() function. But
                */
























