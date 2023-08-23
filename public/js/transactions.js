const myModal = new bootstrap.Modal("transactions-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

let data = {
  transactios: []
};

document.getElementById("button-logout").addEventListener("click", logout);


//ADICIONAR LANÇAMENTO
document.getElementById("transactions-form").addEventListener("submit", function (e){
    e.preventDefault(); 
    
    const value = parseFloat(document.getElementById("value-input").value);
    const descprition = document.getElementById("description-input").value;
    const date = document.getElementById("date-input").value;
    const type=document.querySelector('input(name="type-input):checked').value;
      
  data.transactios.unshift({
   value: value, type: type, descprition: descprition, date: date
     });
    
    saveData(data);
    e.target.reset();
    myModal.hide();
    getTransactions();

    alert("Lançamento adicionado com sucesso.")

 });  

 CheckLogged();

function CheckLogged() {
    if(session) {
        sessionStorage.setItem("logged", session);
        logged=session;
    }

     if(logged){
                   
         window.location.href="index.html";
         return;
   }
     
const dataUser = localStorage.getItem(logged);
if(dataUser) {
    data = JSON.parse(dataUser);
}

   
}
function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href = "index.html"
}
function getTransactions() {
    const transactions = data.transactios;
    let transactionsHtml = ``;
}
    if(transactions.length) 
    transactions.forEach ("item") 
      let type = "Entrada";
    if (item.type  ==="2") {
         type = "Saída";
    }
    
            transactionsHtml += 
            <td>
            <th scope="row">$(item.date)</th> 
            <td> ${item.value.toFixed(2)} </td>
            <td> $(type) </td>
            <td> ${item.descprition}</td>
          </td> 
             
            

          document.getElementById(transactions-list).innerHTML = transactionsHtml;

          function saveData(data) {
            localStorage.setItem(data.login, JSON.stringify(data));

            
          }
      