document.querySelector('#btn').addEventListener('click', function() {
    let code = document.querySelector('#ncm').value;
    axios.get(`https://brasilapi.com.br/api/ncm/v1?search=${code}`)
    .then(function(response) {
        if (response.data.length > 0) {
            document.querySelector('#descricao').innerHTML = response.data[0].descricao;
            document.querySelector('#codigo').innerHTML = response.data[0].codigo;
            document.querySelector('#data-inicio').innerHTML = response.data[0].data_inicio;
            document.querySelector('#data-fim').innerHTML = response.data[0].data_fim;
        } else {
            alert('Nenhum resultado encontrado');
        }
    })
    .catch(function(error) {
        console.log(error);
    });
});