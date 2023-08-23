const myModal = new bootstrap.Modal("transactions-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let cashIn = ("");
let cashOut = ("");
let data = {
  transactios: []
};
 
document.getElementById("button-logout").addEventListener("click", logout);
document.getElementById("transactions-buttom").addEventListener("click", function() {
    window.location.href = "transactions.html"
})

//ADICIONAR LANÇAMENTO
document.getElementById("transactions-form").addEventListener("submit", function (e){
    e.preventDefault(); 
    
    const value = parseFloat(document.getElementById("value-input").value);
    const descprition = document.getElementById("description-input").value;
    const date = document.getElementById("date-input").value;
    const type=document.querySelector('input(name="type-input):checked').value;
      
  data.transactios.unshift({
   value: value, type: type, descprition: descprition, date: date,
     });
    
    saveData(data);
    e.target.reset();
    myModal.hide();
        getCashIn();
        getCashOut();
        getTotal();
    alert("Lançamento adicionado com sucesso.");

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

   getCashIn();
   getCashOut();
   getCashTotal();

}

function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href = "index.html"
}

function getCashIn() {
    const transactions = data.transactios;

    const cashIn = transactions.filter((item) = item.type === "1");
    if(cashIn.length){
     let cashIn = '';
    let limit = 0;

}
      if(cashIn.length) {
        let cashInHtml = '';
        let limit = 0;
     
        if (cashIn.length > 5) {
          limit = 5;
        } else { 
            limit = cashIn.length;
        } 
      
       for (let index = 0; index < limit; index++) {
        console.log(index);
        console.log(cashIn(index));
        
         }
     }

}
function saveData(data) {
localStorage.setItem(data.login, JSON.stringify(data));

}