document.addEventListener('submit',event => {
    event.preventDefault();
    let form = document.querySelector('#productoForm');
    let data = new FormData(form);
    fetch('http://localhost:8080/api/productos',{
        method: 'POST',
        body: data
    }).then(response => {
        return response.json();
    }).then(result => {
        console.log(result);
    });
})