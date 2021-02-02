import { createStore } from "vuex";

export default createStore({
	state: {
    products: [],
    carrito : []
  },
  
  getters:{
    getCarrito(state){
      return state.carrito
    },

    getTotalAmount(state){
      return state.carrito.length > 0 
        ? state.carrito.reduce((acc,{cantidad}) =>  acc + cantidad , 0)
        : 0
    },

    getTotalPerPay(state){
      return state.carrito.length > 0
        ? state.carrito.reduce((acc, {cantidad, precio}) => acc + (cantidad * precio), 0)
        : 0
    }
  },

	mutations: {
		setProducts(state, payload) {
			state.products = payload;
    },

    removeProductsAll(state){
      state.carrito = []
    },
    
    addProductForCarrito(state,product){
      if(state.carrito.filter(p => p.id == product.id).length > 0){
        state.carrito = state.carrito.map((p) => {
          if (p.id == product.id) {
            p.cantidad ++
          }

          return p
        })
      }else{
        product.cantidad = 1
        state.carrito.push(product)
      }
    },

    desicrementProductCarrito(state, product){
      let carritoProduct = state.carrito.filter(p => p.id == product.id)

      if (carritoProduct[0].cantidad > 1) {
        state.carrito = state.carrito.map((p) => {
          if (p.id == product.id) {
            p.cantidad --
          }
          return p
        })
      }else{
        state.carrito = state.carrito.filter(p => p.id != product.id)
      }
    },

    incrementProductCarrito(state, product){
      state.carrito = state.carrito.map((p) => {
        if (p.id == product.id) {
          p.cantidad ++
        }

        return p
      }) 
    }
	},

	actions: {
		async fetchData({ commit }) {
			try {
				const res = await fetch("api.json");
				const data = await res.json();

				commit("setProducts", data);
			} catch (error) {
				console.log(error);
			}
		},
	},

	modules: {},
});
