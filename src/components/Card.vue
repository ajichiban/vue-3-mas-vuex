<template>
	<div class="card" style="width: 15rem">
		<img 
      :src="product.thumbnailUrl" 
      class="card-img-top custom-card__image" alt="..." />
		<div class="card-body">
			<h5 class="card-title">{{ product.title }}</h5>

			<a 
        @click.prevent="addProduct"
        href="#" 
        class="btn btn-dark">$ {{ product.precio }}</a>
		</div>
	</div>
</template>

<script>
import {useStore} from 'vuex'
export default {
  props:['product'],

  setup(props){
    const store = useStore()

    const addProduct = () => {
      store.commit('addProductForCarrito', props.product )
    }

    return{addProduct}
  }
};
</script>

<style lang="scss" scoped>
  .custom-card{
    height: 10rem;

    &__image{
      width: 15rem;
      height: 10rem;
      object-fit: cove;
      object-position: center;
    }
  }
</style>