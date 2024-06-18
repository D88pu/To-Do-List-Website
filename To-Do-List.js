const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-cont");
const AddBtn = document.getElementById("")

function addTask(){
    if(inputBox.value === ''){
       alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "https://cdn0.iconfinder.com/data/icons/user-interface-2063/24/UI_Essential_icon_expanded-02-512.png";// creos show
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "Li"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();