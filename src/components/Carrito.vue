<template>
  <div>
    <h3>Total a pagar : $ {{ totalPerPay }}</h3>
    <span>{{ totalAmount }} products</span>
    <button @click="vaciar" class="btn btn-sm btn-danger">vaciar</button>
  </div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Amount</th>
      <th scope="col">Actions</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <template v-if="carrito.length > 0">
      <Carrito-item 
        v-for="item in carrito" 
        :item="item"
        :key="item.id" />
    </template>
  </tbody>
</table>
</template>

<script>
import { computed, onMounted } from 'vue'
import {useStore} from 'vuex'
import CarritoItem from './CarritoItem.vue'
export default {
	components: { CarritoItem },
  setup(){
    const store = useStore()
    const carrito = computed(() => store.state.carrito ) 
    const totalAmount = computed(() => store.getters.getTotalAmount)
    const totalPerPay = computed(() => store.getters.getTotalPerPay)
    const vaciar = () => store.commit('removeProductsAll')
    return{
      carrito,
      totalAmount,
      totalPerPay,
      vaciar
    }
  }
}
</script>

<style>

</style>