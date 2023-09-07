<template>
  <div>
    
    <timeOut :startTime="startTime" :endTime="endTime" @timeoutHandel="timeoutHandel" />
    
  </div>
</template>


<script>
import timeOut from './timeOut.vue';
export default {
    components: { timeOut },
    data () {
      return {
        startTime: '2023-09-01 17:00',
        endTime: '2023-09-02 08:58'
      }
    },
    mounted () {
      this.sortHandle();
    },
    methods: {
      timeoutHandel () {
        console.log('计时结束')
      },

      sortHandle () {
        let arr = [2, 4, 6, 7, 32, 6, 76];

        for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            let temp = null;
            if (arr[i] > arr[j]) {
              temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
            }
          }
        }
        console.log(arr);
      }
    }
};
</script>

<style>


</style>