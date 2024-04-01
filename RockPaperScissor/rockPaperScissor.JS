let finalScore =JSON.parse(localStorage.getItem('score'));
if(finalScore===null)
{
  finalScore ={
    win:0,
    lost:0,
    ties:0,
    total:0,
  }
}
showFinalResult();

function showFinalResult()
{
  document.querySelector('.ShowScore').innerHTML=`Total Rounds : ${finalScore.total}, Winning Rounds : ${finalScore.win}, Lossing Rounds : ${finalScore.lost}, Tie Rounds : ${finalScore.ties}`;
}

function pickComputerMove()
{
  let computerMove='';
  const randNum=Math.random();
  if(randNum>0 && randNum<=1/3)
  {
    computerMove='rock'
  }
  if(randNum>1/3 && randNum<=1/2)
  {
    computerMove='paper'
  }
  if(randNum>1/2 && randNum<=1)
  {
    computerMove='scissors'
  }
  return computerMove;
}

function playGame(param)
{
  let computerMove=pickComputerMove(); 

  let result='';
  if(param==='rock')
  {
    if(computerMove===param)
    {
      result='tie';
    }
    else if(computerMove==='scissors')
    {
      result='win';
    
    }
    else{
      result='lost';
    }
  }
  if(param==='paper')
  {
    if(computerMove===param)
    {
      result='tie';
    }
    else if(computerMove==='rock')
    {
      result='win';
   
    }
    else{
      result='lost';
    }

  } 
  if(param==='scissors')
  {
    if(computerMove===param)
    {
      result='tie';
    }
    else if(computerMove==='paper')
    {
      result='win';
     
    }
    else{
      result='lost';
    }
  }


  finalScore.total++;

  if(result==='win')
  {
    finalScore.win++;
  }
  else if(result==='lost')
  {
    finalScore.lost++;
  }
  else if(result==='tie')
  {
    finalScore.ties++;
  }

  localStorage.setItem('score',JSON.stringify(finalScore));

  document.querySelector('.ShowResult').innerHTML=`This is ${result}.`;
  
  document.querySelector('.ShowMove').innerHTML=`Your move <img src="images/${param}-emoji.png" class="move-icon" >
  Computer's move <img src="images/${computerMove}-emoji.png" class="move-icon" >.`;
  showFinalResult();
}


