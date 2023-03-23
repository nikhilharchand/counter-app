// document.getElementById("count-el").innerText=5

// let count=3;
// // console.log(count)

// let myage=22+1;
// // let count=myage;
// // console.log(count);

// let total=count+myage;
// console.log(total);

// let bonuspoints=50;
// console.log(bonuspoints)
// bonuspoints=bonuspoints+50
// console.log(bonuspoints)

// function increment(){
//   console.log("The button was click")
// }
// time1=45;
// time2=5;
// time3=6;
// function timeset(){
//   console.log(time1+time2+time3);
// }
// timeset()
// let lapscompleted=0
// function incrementLap(){
//   lapscompleted=lapscompleted+1
// }
// incrementLap()
// incrementLap()
// incrementLap()
// console.log(lapscompleted)
let countEL=document.getElementById("count-el") 
let saveEL=document.getElementById("save-el") 
  let count=0
  console.log(saveEL)
  function increment(){ 
    count+=1
    countEL.textContent=count
 
  }  

  function save(){
    let countStr=count+"-"
    
    saveEL.textContent+=countStr
    console.log(count)
    countEL.textContent=0
    count=0
  }

  // let firstname="Nikhil"
  // let lastname="harchand"
  // let name=firstname + " "+lastname
  // console.log(name)

  // let point=3
  // let bpoint="4"
  // let totalpoints=point+bpoint
  // console.log(totalpoints)