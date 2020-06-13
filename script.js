let doorImage1 =document.getElementById('door1');
let doorImage2 =document.getElementById('door2');
let doorImage3 =document.getElementById('door3');
let numCloseDoors = 3;
let openDoor1;
let  openDoor2;
let openDoor3;
let currentlyPlaying = true;
let startButton = document.getElementById('start');
const closedDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const playDoor = (door) => {
  numCloseDoors--;
  console.log('numCloseDoors: '+numCloseDoors);
  if(numCloseDoors === 0){
    console.log( 'before game over');
    console.log('befotr game over with win');
    gameOver('Win');
  }else if(isBot(door)){
    console.log('befotr game over with no');
    gameOver('no');
  }
};

const randomChoreDoorGenetator = () => {
   let choreDoor = Math.floor(Math.random()*numCloseDoors);
  if(choreDoor===0){
   openDoor1= botDoorPath;
   openDoor2 = beachDoorPath;
   openDoor3 = spaceDoorPath;
  }else if(choreDoor===1){
   openDoor2 = botDoorPath;
   openDoor1 = beachDoorPath;
   openDoor3 = spaceDoorPath;
  }else if(choreDoor===2){
   openDoor3 =botDoorPath;
   openDoor2 = beachDoorPath;
   openDoor1 = spaceDoorPath;
  }

};
const isBot = door =>{
 if(door.src === botDoorPath){
   return true;
   console.log('bot door');
 }else{
   return false;
   console.log(' not bot door');
 }
};
const isClicked = door => {
  if(door.src=== closedDoorPath){
    return false;
  }else{
  return true;
  }
 };
doorImage1.onclick=()=>{
  if(!isClicked(doorImage1)&& currentlyPlaying){
 doorImage1.src=openDoor1;
 console.log('door1');
 playDoor(doorImage1);
  }
};
doorImage2.onclick=() =>{
  if(!isClicked(doorImage2) && currentlyPlaying){
 doorImage2.src=openDoor2;
 console.log('door2');
 playDoor(doorImage2);
  }
};
doorImage3.onclick=()=>{
  if(!isClicked(doorImage3)&& currentlyPlaying){
doorImage3.src = openDoor3;
console.log('door3');
playDoor(doorImage3);
  }
};
const startRound=()=>{
numCloseDoors=3;
doorImage1.src = closedDoorPath;
doorImage2.src = closedDoorPath;
doorImage3.src = closedDoorPath;
startButton.innerHTML = 'Good luck!';
currentlyPlaying = true;
randomChoreDoorGenetator();
};


startButton.onclick=()=>{
  if(currentlyPlaying === false){
 startRound();
  }
};
const gameOver = (status) => {
console.log('in game over');
 if(status === 'Win'){
   startButton.innerHTML = 'You win! Play again?';
   console.log(startButton.innerHTML);
 }else{
   startButton.innerHTML = 'Game Over! play again?';
   console.log(startButton.innerHTML);
 }
 currentlyPlaying = false;
}; 

startRound();
console.log('hello');