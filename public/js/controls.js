function routeTo(route) {
    window.location.replace(route)
}

async function getAPi(route) {

    var url = "http://" + window.location.host + route

    console.log(url);
    
    var response = await fetch(url, {
        method: "GET",
    })

    if (!response.ok) {
        throw new Error('Network response was not OK');
    }
    
    var data = await response.json();

    return data
}

function removeChar(str, char) {
    try {
        var pool = '';
        var x = str.split('');

        x.forEach((el, i) => {
            if(i === 0) {
                if(el !== char) {
                    pool += el.toUpperCase();
                }
            } else {
                if(el !== char) {
                    pool += el;
                }

                if(el === char) {
                    pool += ' ';
                }
            }
        });

        return pool

    } catch (error) {
        return 'Error: RomoveChar function detected no string'
    }
}

function getId() {
    var location = window.location.search;
    location = location.replace('?id=', '');
    return location
}