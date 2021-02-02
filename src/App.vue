<template>
  <div class="container mt-3">
    <h3>Carrito - Vue</h3>
    <div class="row justify-content-center mt-5">
      
      <div 
        v-for="product in products" 
        :key="product.id"
        class="col-12 col-md-4 col-lg-3 mb-4 mx-1">
        <Card :product="product" />
      </div>
      
    </div>
    <hr>
    <Carrito />
  </div>
  
</template>

<script>
import Card from './components/Card.vue'

import {useStore} from 'vuex'
import { computed, onMounted, ref } from 'vue'
import Carrito from './components/Carrito.vue'

export default {
  name: 'App',
  components: {
    Card,
    Carrito
   
  },

  setup(){

    const store = useStore()

    const products = computed(() => store.state.products)

    onMounted(() => {
      store.dispatch('fetchData')
    })

    return {
     products 
    }

  }
}
</script>

<style>

</style>
