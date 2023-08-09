
var init = getAPi('/dedicateddudes/api/products');
var data = new Object();

var clearList = [];

function populateList(data) {
    var keys = Object.keys(data);
    var list = document.getElementById('serviceList');

    keys.forEach(key => {
        var x = document.createElement("tr");
        x.id = key;
        clearList.push(key);
        var subKeys = Object.keys(data[key])
        list.appendChild(x);

        var id = document.getElementById(key);
        var y = document.createElement("td");
        y.innerHTML = removeChar(key, '_');
        id.appendChild(y);

        subKeys.forEach(item => {

            if (item === 'base_price') {
                y = document.createElement("td");
                let pool = 0;
                let cost = data[key][item];

                if (cost === 'very_low') {
                    pool = 19.99;
                }

                if (cost === 'low') {
                    pool = 49.99;
                }

                if (cost === 'base') {
                    pool += 74.99;
                }

                if (cost === 'high') {
                    pool += 129.99;
                }

                if (cost === 'very_high') {
                    pool += 179.99;
                }

                if (cost === 'max') {
                    pool += 449.99;
                }

                if (data[key]['workers'] >= 2) {
                    pool += 50;
                }
                
                y.innerHTML = "$" + pool;
                id.appendChild(y);
            }

            if (item === 'bundle_price') {
                y = document.createElement("td");
                var dataKey = data[key][item];

                if (dataKey === 'exempt') {
                    y.innerHTML = dataKey ;
                } else {
                    let pool = 25;
                    if (data[key]['workers'] >= 2) {
                        pool += 25;
                    }
                    y.innerHTML = "Base price + $" + pool + "per";
                }
                
                id.appendChild(y);
            }

            if (item === 'hourly_price') {
                y = document.createElement("td");
                var pool = data[key][item];
                if (pool === 'exempt') {
                    y.innerHTML = pool ;
                } else {
                    y.innerHTML = "$" + pool;
                }
                
                id.appendChild(y);
            }
        })

    });
}

function clear() {
    clearList.forEach(id => {
        var element = document.getElementById(id);
        element.remove();
    })
    clearList = [];
}

function setRemoveActive(id) {
     var feilds = {
        labor: 'OJ',
        theater: 'HT',
        IT: 'IT'
    }
     var handle = document.getElementById(`handle-${feilds[id]}`);
    
     var keys = Object.keys(feilds);

    keys.forEach(key => {
        var Allhandle = `handle-${feilds[key]}`;
        var element = document.getElementById(Allhandle);
        element.classList.remove('active');
    })

    handle.classList.add('active');
}

function updateList(id) {
    clear();
    populateList(data[id]);
    setRemoveActive(id);
}



init.then(function (snapshot) {
    var id = "theater";
    setRemoveActive(id);
    data = snapshot;
    populateList(snapshot[id]);
})