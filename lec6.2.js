function calculate() {
    var n1 = parseFloat(document.querySelector("#num1").value);
    var n2 = parseFloat(document.querySelector("#num2").value);
    if (isNaN(n1) || isNaN(n2)) {
        alert("INVALID VALUESS");
    }
    var add = n1 + n2;
    var sub = n1 - n2;
    var mul = n1 * n2;
    document.querySelector("#ans").innerText = add;
    document.querySelector("#ans1").innerText = sub;
    document.querySelector("#ans2").innerText = mul;
}