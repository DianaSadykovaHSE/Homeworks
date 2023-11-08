function Verify (){
    console.log ("a,b,c,d")
    let a = parseFloat(elementA.value);
    let b = parseFloat(elementB.value);
    let c = parseFloat(elementC.value);
    let d = parseFloat(elementD.value);
    console.log(a,b,c,d)
    
    let high_1, low_1;
    if (a > b) {
    high_1 = a;
    low_1 = b;
    }
    else {
    high_1 = b;
    low_1 = a;
    }
    
    let high_2, low_2
    if (c > d) {
    high_2 = c;
    low_2 = d;
    }
    
    else {
    high_2 = d;
    low_2 = c;
    }
    
    if (high_1 <= high_2 && low_1 <=low_2) {
    Result = 'может';
    document.getElementById('Result').innerText=Result;
    document.getElementsByName('Result')[0].value = Result;
    check = true;
    }
    else {
    Result = "не может";
    document.getElementById('Result').innerText=Result;
    document.getElementsByName('Result')[0].value = Result;
    check = false;
    }
    }
    
    function Send_to_server() {
        if (check) {
            let textCondition = document.getElementsByTagName('p')[0].innerText
            document.getElementsByName('Formulation')[0].value = textCondition;
            document.getElementsByName('Result')[0].value = Result;
            document.getElementById("UserEnter").submit();
        } else {
            alert("Есть недостатки. Повторите ввод")
        }
    }
    
    function verify_send() {
        verify();
        send();
    }
    let result;
    let check;
    
    const elementA = document.getElementById("a");
    elementA.addEventListener('input', Verify);
    
    const elementB = document.getElementById("b");
    elementB.addEventListener('input', Verify);
    
    const elementC = document.getElementById("c");
    elementC.addEventListener('input', Verify);
    
    const elementD = document.getElementById("d");
    elementC.addEventListener('input', Verify);
    
    const elementVerify = document.getElementById("Verify");
    elementVerify.addEventListener('click', Verify);
    
    const elementSend = document.getElementById("Send");
    elementSend.addEventListener('click', Send_to_server);