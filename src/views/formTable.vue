<template>
  <div>

    <myComponent :formData="formData" />
    
    {{ formData }}
    
  </div>
</template>


<script>
import myComponent from './myComponent.vue'
export default {
    components: { myComponent },
    data () {
      return {
        isLoaded: false,
        formData: {}
      }
    },
    mounted () {
      setTimeout(() => {
        // this.isLoaded = true;
        this.fetchData()
      }, 1000)
    },
    methods: {
      fetchData () {
        this.formData = { a: 2, b:3, c: 4 }
      }
    }
};
</script>

<style>


</style>