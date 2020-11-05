var map = L.map('map',{
    center: [52.7367900, 15.2287800],
    zoom: 15
    });

    L.marker([52.7367900, 15.2287800]).addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    function addCityFunction() {
        var node = document.createElement("LI");
        node.setAttribute('class','list-group-item');
        var textnode = document.createElement("Label")
        textnode.innerHTML = document.getElementById("addCityInput").value
        node.appendChild(textnode);
        document.getElementById("cityList").appendChild(node);
      }
