var apiKey = "";
window.onload = function () {
    var inpCity = document.querySelector("#inpCity");
    var tblCityData = document.querySelector("#cityData");
    var modalData = document.querySelector("#myModal .modal-body");

    document.querySelector("#btnGetCityData").addEventListener("click", function () {
        var cityName = inpCity.value.trim();
        if (cityName.length < 3) {
            console.error("NAME IS TOO SHORT SER");
            return;
        }
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=10&appid=${apiKey}`)
            .then(function (resp) {
                return resp.json();
            })
            .then(function (data) {
                if (data.length <= 0) return;
                tblCityData.innerHTML = ""; //CLEARS ALL DATA
                var headerRow = document.createElement("tr");
                headerRow.innerHTML = "<th>Sr.No</th><th>NAME</th><th>STATE</th><th>COUNTRY</th><th>LATITUDE</th><th>LONGITUDE</th>"
                tblCityData.appendChild(headerRow);
                data.forEach(function (city, idx) {
                    var row = document.createElement("tr");
                    row.innerHTML = `<td>${idx + 1}</td>
                                    <td class="city"></td>
                                    <td>${city.state}</td>
                                    <td>${city.country}</td>
                                    <td>${city.lat}</td>
                                    <td>${city.lon}</td>`;

                    var cityDiv = row.querySelector(".city");
                    var link = document.createElement("a");
                    link.setAttribute("data-bs-toggle", "modal");
                    link.setAttribute("data-bs-target", "#myModal");
                    link.setAttribute("href", "#");
                    link.innerText = city.name;
                    link.addEventListener("click", function () {
                        var lat = this.parentElement.parentElement.children.item(4).innerText;
                        var lon = this.parentElement.parentElement.children.item(5).innerText;
                        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
                            .then(function (resp) {
                                return resp.json();
                            })
                            .then(function (data) {
                                modalData.innerHTML = "";
                                var list = `<ul>
                                                <li>MAX TEMP : ${data.main.temp_max}</li>
                                                <li>MIN TEMP : ${data.main.temp_min}</li>
                                                <li>TEMP : ${data.main.temp}</li>
                                                <li>HUMIDITY : ${data.main.humidity}</li>
                                            </ul>`
                                modalData.innerHTML = list;
                            })
                            .catch(function (err) {
                                console.log(err);
                            })
                    });
                    cityDiv.appendChild(link);
                    tblCityData.appendChild(row);
                });
            })
            .catch(function (err) {
                console.log(err);
            });
    });

};