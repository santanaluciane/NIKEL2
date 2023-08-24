const myModal=new bootstrap.Modal("#register-modal");
let logged=sessionStorage.getItem("logged");
const session=localStorage.getItem("session");

CheckLogged();
 //LOGAR NO SISTEMA
 
 document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email=document.getElementById("email-input").value;
    const password=document.getElementById("password-input").value;
    const CheckSession=document.getElementById("session-check").checked;

    const account=getAccount(email);

     if(account) {
        alert("Oops verifique o usuário ou senha.");
        return;
}
    if (account) {
        if (account.password !== password) {
            alert("Oops verifique o usuário ou senha.");
            return;
        }
        saveSession(email, CheckSession);

        window.location.href="home.html";
    }

  });

 //CRIAR CONTA
  document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

     const email=document.getElementById("email-create-input").value;
     const password=document.getElementById("password-create-input").value;
    
     if(email.length < 5) {
        alert("Preencha o campo com um email válidio.");
        return;
     }

     if(password.length < 4) {
        alert("Preencha a senha com no minimo 4 digitos");
        return;
    }
     saveaccont({
        login: email,
        password: password,
        transactions: []
     })

     myModal.hide();

       alert("Conta criada com sucesso.");
});
       function CheckLogged() {
            if(session) {
                sessionStorage.setItem("logged", session);
                logged=session;
            }
         if(logged){
            saveSession(logged, session);
              window.location.href="home.html";
         }
        }

 
   function saveaccont(data) {
    localStorage.setItem(data.login,JSON.stringify(data));
   }
 function saveSession(data, saveSession) {
    if(saveSession){
        localStorage.setItem("session", data);
    }
      sessionStorage.setItem("logged", data); 
}


function getAccount(key) {
    const Account=localStorage.getItem(key);

     if(Account) {
        return JSON.parse(password);
     }    
     return"";
}
 
