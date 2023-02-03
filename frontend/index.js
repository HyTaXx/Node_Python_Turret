btnUp = document.getElementById("up")
btnLeft = document.getElementById("left")
btnRight = document.getElementById("right")
btnDown = document.getElementById("down")
btnSTOP = document.getElementById("stop")
btnFIRE = document.getElementById("fire")

btnUp.addEventListener('click', () => {
    fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
        data: 'up'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
});


btnLeft.addEventListener('click', () => {
    fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        data: 'left'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
});

btnRight.addEventListener('click', () => {
    fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        data: 'right'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
});

btnDown.addEventListener('click', () => {
    fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        data: 'down'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
});

btnSTOP.addEventListener('click', () => {
    fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
        data: 'stop'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
});

btnFIRE.addEventListener('click', () => {
    fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
        data: 'fire'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
});



