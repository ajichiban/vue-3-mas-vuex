<template>
  <tr>
    <th scope="row">{{ item.title }}</th>
    <td>$ {{ item.precio }}</td>
    <td>{{ item.cantidad }}</td>
    <td>
      <div>
        <button 
          @click="desincrementProductAmount"
          class="btn btn-sm btn-danger ">-</button>
        <button 
          @click="incrementProductAmount"
          class="btn btn-sm btn-success ">+</button>
      </div>
    </td>
    <td>$ {{item.precio * item.cantidad  }}</td>
  </tr>
</template>

<script>
import { useStore } from 'vuex'
export default {
  props: ['item'],
  setup(props){
    const store = useStore()

    const desincrementProductAmount = () => {
      store.commit('desicrementProductCarrito', props.item)
    }

    const incrementProductAmount = () => {
      store.commit('incrementProductCarrito', props.item)
    }

    return{
      incrementProductAmount,
      desincrementProductAmount
    }
  }

}
</script>

<style>

</style>