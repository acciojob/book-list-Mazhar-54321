//your JS code here. If required.
let initialData = [];
function onSubmit(){
let title=document.getElementById("title").value;
let author=document.getElementById("author").value;
let isbn=document.getElementById("isbn").value;
if(title.trim().length && author.trim().length && isbn.trim().length){
  const tbody = document.getElementById("book-list");
  const tr = document.createElement("tr");
  const cell1 = document.createElement("td");
  cell1.textContent = title;
  
  const cell2 = document.createElement("td");
  cell2.textContent = author
  const cell3 = document.createElement("td");
  cell3.textContent = isbn
  const cell4 = document.createElement("td");
  const button = document.createElement("button");
  button.className="delete";
  button.textContent="Delete";
  cell4.appendChild(button)
  tr.appendChild(cell1);
  tr.appendChild(cell2)
  tr.appendChild(cell3)
  tr.appendChild(cell4);
  tbody.appendChild(tr);
  button.addEventListener("click",()=>{
   console.log(tr);
   tbody.removeChild(tr)
  })
}
}