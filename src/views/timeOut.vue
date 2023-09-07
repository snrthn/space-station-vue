<template>
  <div>

    <div v-if="status === 1">
      <div>抢购进行中！</div>
      <div>{{ timeStr }}</div>
    </div>

    <div v-if="status === 0">未开始</div>
    <div v-if="status === 2">已结束</div>
    
  </div>
</template>


<script>
export default {
    data () {
      return {
        status: 0, // 0 未开始，1 进行中， 2 已结束
        timeStr: '',
        timer: null
      }
    },
    props: {
      startTime: {
        type: String,
        default: ''
      },
      endTime: {
        type: String,
        default: ''
      }
    },
    mounted () {
      this.initFun();
    },
    methods: {
      initFun () {
        let startTime = new Date(this.startTime) *1
        let curTime = new Date() * 1
        let endTime = new Date(this.endTime) * 1

        if (curTime < startTime) {
          this.status = 0
        }

        if (curTime >= startTime && curTime <= endTime) {
          this.status = 1

          this.startFun();
        }

        if (curTime > endTime) {
          this.status = 2
        }
      },
      startFun () {

        this.timeIntervalHandle();

        this.timer = setInterval(() => {
          this.timeIntervalHandle();
        }, 1000)
        
      },

      timeIntervalHandle () {

        let startTime = new Date(this.startTime) *1
        let curTime = new Date() * 1
        let endTime = new Date(this.endTime) * 1

        let diffTime = endTime - curTime;

        if (diffTime <= 0) {
          diffTime = 0;
        }

        let days = Math.floor(diffTime / (1000 * 60 * 60 * 24))
        let hours = Math.floor(diffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        let minutes = Math.floor(diffTime % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60))
        let seconds = Math.floor(diffTime % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / 1000)

        if (days === hours && hours === minutes && minutes === seconds  && seconds === 0) {
          this.clearTimerHandle();
          this.endFun();
        }

        let strBefore = '距离活动结束还有：'

        this.timeStr = strBefore + days + '天' + hours + '小时' + minutes + '分' + seconds + '秒'
      },

      endFun () {
        this.$emit('timeoutHandel', 'timeoutHandel')
      },

      clearTimerHandle () {
        clearInterval(this.timer);
        this.timer = null;
      },
    },
    destroyed () {
      this.clearTimerHandle()
    }
};
</script>

<style>


</style>