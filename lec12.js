window.onload = function () {
    document.querySelector("#mainform").addEventListener("submit", function (ev) {
        ev.preventDefault(); //CANCELS FORM SUBMISSION
        var isValid = true;
        var allDivs = document.querySelectorAll("#mainform .form-group");
        removeOldErrors();
        allDivs.forEach(function (ele) {
            var inp = ele.querySelector("input");
            var val = inp.value.trim();
            if (inp.getAttribute("data-req")) {
                if (val.length <= 0) {
                    ele.querySelector(".errmsg").innerText = "NO DATA PROVIDED.";
                    isValid = false;
                    return;
                }
            }
            if (inp.getAttribute("data-min")) {
                var minVal = parseInt(inp.getAttribute("data-min"));
                if (!isNaN(minVal)) {
                    if (val.length < minVal) {
                        ele.querySelector(".errmsg").innerText = "DATA TOO SHORT.";
                        isValid = false;
                        return;
                    }
                }
            }
            if (inp.getAttribute("data-max")) {
                var maxVal = parseInt(inp.getAttribute("data-max"));
                if (!isNaN(maxVal)) {
                    if (val.length > maxVal) {
                        ele.querySelector(".errmsg").innerText = "DATA TOO LONG.";
                        isValid = false;
                        return;
                    }
                }
            }
            if (isValid) {
                ev.target.submit();
            }
        });
        function removeOldErrors() {
            var allErrors = document.querySelectorAll(".form-group .errmsg");
            allErrors.forEach(function (ele) {
                ele.innerText = "";
            });
        }
    });
}

