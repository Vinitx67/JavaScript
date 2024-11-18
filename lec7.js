function changeType() {
    var selValue = document.querySelector("#selType").value;
    if (selValue == undefined || selValue == null) {
        selValue = "disc";
    }

    // set attribute
    document.querySelector("#mylist").setAttribute("type", selValue);
    document.querySelector("#mytext").innerText = document.querySelector("#mylist").getAttribute("type")
}