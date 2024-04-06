
let allTask=[];
//let datePicker=[];
function getTheTask()
{
  const dateTime=document.querySelector('.js-dateTimeSelector');
  const taskElement=document.querySelector('.js-inputEle');
  let task=taskElement.value;
  let date=dateTime.value;
  
  allTask.push({task:task,date:date});
 // datePicker.push(`${date}`);
  printAllTask();
}


function printAllTask()
{
  allTaskHTML='';
  for(let i=0;i<allTask.length;i++)
  {
    const allData=allTask[i];
    const text=allData.task;
    const date=allData.date;
   // const date=datePicker[i];
    const taskHtml=
    ` <div class="js-taskText">${text}</div>
      <div class="js-taskDate">${date}</div>
      <button class="js-taskDelete" onclick="
        allTask.splice(${i},1);
        printAllTask();
      ">Delete</button>
    `;

    allTaskHTML+=taskHtml;
  }
  document.querySelector('.js-taskList').innerHTML=allTaskHTML;
  

}