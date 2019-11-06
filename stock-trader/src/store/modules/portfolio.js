export default {
    state: {
        funds: 10000,
        stocks: []
    },
    mutations: {
        buyStock(state, {stockId, quantity, stockPrice}) {
            // verifica se já existe a ação no protfolio
            const record = state.stocks.find(element => element.id == stockId)
            if (record) {
                // se encontrou a ação irá alterar a quantidade
                record.quantity += quantity
            } else {
                // se não encontrou a ação irá inserir
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }

            state.funds -= stockPrice * quantity
        },

        sellStock(state, {stockId, quantity, stockPrice}) {
            // verifica se já existe a ação no protfolio
            const record = state.stocks.find(element => element.id == stockId)
            // verifica se possui ações suficientes no portfolio
            if (record.quantity >= quantity) {
                record.quantity -= quantity
            } else {
                // remove o elemento do array
                // se entrar aqui significa que é para vender tudo
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }

            state.funds += stockPrice * quantity
        }
    },
    actions: {
        sellStock({commit}, order) {
            commit('sellStock', order)
        }
    },
    getters: {
        stockPortfolio(state, getters) {
            return state.stocks.map(stock => {
                const record = getters.stocks.find(element => element.id == stock.id)

                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },
        funds(state) {
            return state.funds
        }
    }
}