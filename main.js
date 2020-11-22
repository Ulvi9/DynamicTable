let tableForm=document.getElementById("tableForm")
let tableWrapper=document.querySelector("#tableWrapper");
let tableEditInput=document.getElementById("table-edit-input")
let openTableElem=null;
let tableData ={
    row:0,
    column:0
}
console.log(tableForm);
tableForm.addEventListener('submit',function(ev){
     ev.preventDefault();
    let row=Number(document.querySelector("#row").value);
    let column=Number(document.querySelector("#column").value);
    if(isNaN(row)||row<1){
        return;
    }
    if(isNaN(column)||column<1){
        return;
    }
    tableData.row=row;
    tableData.column=column;
    generateTable();
   
})
function generateTable(){
 let table=document.createElement("table");
 table.classList.add("table")
 table.classList.add("table-striped")
 let thead=document.createElement("thead");
 let headTr=document.createElement("tr")
 for (let index = 0; index < tableData.column; index++) {
     let th= document.createElement("th");
     th.setAttribute("scope","col");
     th.innerText="Basliq"
     th.addEventListener("click",onInput);
     headTr.append(th);
 }
 thead.append(headTr);
 table.append(thead);

 let tbody=document.createElement("tbody");
 for (let index = 0; index < tableData.row; index++) {
   let tr=document.createElement("tr");
   for (let index = 0; index < tableData.column; index++) {
       let td=document.createElement("td");
       td.innerText=index;
       td.addEventListener("click",onInput)
       tr.append(td);
   }
   tbody.append(tr);
 }
 table.append(tbody);
 tableWrapper.innerHTML="";
 tableWrapper.append(table);
}

function onInput(){
var rect=this.getBoundingClientRect();
tableEditInput.style.left=rect.left+"px";
tableEditInput.style.top=(rect.top+5)+"px";
tableEditInput.classList.remove("d-none");
openTableElem=this;
}
tableEditInput.querySelector("#complete").addEventListener("click",completeInput);
tableEditInput.querySelector("#close").addEventListener("click",closeInput)

function closeInput(){
let editInput=tableEditInput.querySelector("#text").value="";
tableEditInput.classList.add("d-none");
}

function completeInput(){
let text=tableEditInput.querySelector("#text").value;
if(text==""){
    return;
}
openTableElem.innerText=text;

closeInput()
}