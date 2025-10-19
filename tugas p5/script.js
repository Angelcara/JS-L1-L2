const btn = document.getElementById("btn");
const form = document.getElementById("itemForm");
const input = document.getElementById("itemInput");
const errorMessage = document.getElementById("errorMessage");
const list = document.getElementById("daftar");


function clicked() {
    btn.innerText = "yes i'am";
    btn.style.backgroundColor = "red";
}


form.addEventListener("submit", function(event) { 
    event.preventDefault()
    const nilaiInput = input.value.trim();

    if (nilaiInput===""){
        errorMessage.textContent ="Field tidak boleh kosong";
        input.classList.add("invalid");
        input.classList.remove("valid");
        return;
    }
    input.classList.remove("invalid");
    input.classList.add("valid"); 
    errorMessage.textContent ="";
    const newItem = document.createElement("li"); 
    newItem.textContent = nilaiInput; 
    list.append(newItem); 
    input.value="";

    newItem.addEventListener("click", function () {
    if (newItem.classList.contains("selesai")) {
    newItem.classList.remove("selesai");
    };
    newItem.classList.add("selesai");
    });   
    
    const hapus = document.createElement("button");
    hapus.textContent="hapus";
    hapus.classList.add("hapus");
    hapus.addEventListener("click", function () {
    list.removeChild(newItem);
    });

    
 });