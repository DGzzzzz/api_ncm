document.querySelector('#btn').addEventListener('click', function(event) {
    event.preventDefault();
    let code = document.querySelector('#ncm').value;

    if(!/^\d{2,8}$/.test(code)) {
        document.querySelector('#alert .modal-body').innerHTML = 'O código deve ter entre 2 e 8 dígitos.';
        new bootstrap.Modal(document.getElementById('alert')).show();
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
            document.querySelector('#alert .modal-body').innerHTML = 'Código não encontrado.';
            new bootstrap.Modal(document.getElementById('alert')).show();
        }
    })
    .catch(function(error) {
        if (error.response && error.response.status === 404) {
            document.querySelector('#alert .modal-body').innerHTML = 'Código não encontrado.';
            new bootstrap.Modal(document.getElementById('alert')).show();
        } else {
            console.log(error);
        }
    });
});

document.querySelector('#ncm').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
});