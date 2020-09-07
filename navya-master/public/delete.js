var form = document.getElementById("deleteform");
const API_URL='http://localhost:3000/delete';
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const formdata = new FormData(form);
    const name = formdata.get('name');
var data ={name};
   
    console.log(data);
  fetch(API_URL,{
      method:'PUT',
      body:JSON.stringify(data),
      headers:{
          'content-type':'application/json'
      },
  }).then(response=> response.json()).then(editedres=>{
    console.log(editedres);
    form.reset();
});
 })  
