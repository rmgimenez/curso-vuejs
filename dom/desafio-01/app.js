new Vue({
    el: '#desafio',
    data: {
        nome: 'Ricardo',
        idade: 33,
        imagem: 'https://s2.glbimg.com/MwoCOU9ZeSnyIAbki1CX0t39vBI=/0x0:524x280/540x304/smart/http://s2.glbimg.com/UpeLroG9Asa2OuGq5mzoeK50evQ=/0x0:524x280/524x280/s.glbimg.com/es/ge/f/original/2016/06/17/carrossel_enquete_280.jpg'
    },
    methods: {
        aleatorio: function() {
            return Math.random()
        }
    }
})