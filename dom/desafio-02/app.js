new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        emitirAlerta() {
            alert('Alerta')
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})