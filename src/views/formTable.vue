<template>
  <div>

    <myComponent :formData="formData" />
    
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
        this.formData = { name: '小明', age: 23 }
      }
    }
};
</script>

<style>


</style>