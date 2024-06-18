document.querySelector('#btn').addEventListener('click', function(event) {
    event.preventDefault();
    let code = document.querySelector('#ncm').value;

    if(!/^\d{2,8}$/.test(code)) {
        alert('O código do NCM deve conter de 2 a 8 dígitos');
        return
    }	

    axios.get(`https://brasilapi.com.br/api/ncm/v1/${code}`)
    .then(function(response) {
        if (response.data) {
            document.querySelector('#descricao').innerHTML = response.data.descricao;
            document.querySelector('#codigo').innerHTML = response.data.codigo;
            document.querySelector('#data-inicio').innerHTML = response.data.data_inicio;
            document.querySelector('#data-fim').innerHTML = response.data.data_fim;

            document.querySelector('#ncm').value = '';

        } else {
            alert('Nenhum resultado encontrado');
        }
    })
    .catch(function(error) {
        console.log(error);
    });
});

document.querySelector('#ncm').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
});