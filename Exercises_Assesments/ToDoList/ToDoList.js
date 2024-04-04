
let allTask=[];
function getTheTask()
{
  const taskElement=document.querySelector('.js-inputEle');
  let text=taskElement.value;
  
  allTask.push(`${text}`);
  printAllTask();
}


function printAllTask()
{
  allTaskHTML='';
  for(let i=0;i<allTask.length;i++)
  {
    const text=allTask[i];
    const taskHtml=`<p>${text}</p>`;

    allTaskHTML+=taskHtml;
  }
  document.querySelector('.js-taskList').innerHTML=allTaskHTML;
  

}