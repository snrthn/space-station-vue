<template>
  <div>
    
    <!-- Tab标签 -->
    <div class="tab-lab">
      <span :class="activeId === 'formTable' ? 'act' : ''" @click="activeId = 'formTable'">表单提交</span>
      <span :class="activeId === 'timeDown' ? 'act' : ''" @click="activeId = 'timeDown'">秒杀倒计时</span>
    </div>

    <!-- 组件区 -->
    <component :is="activeId"></component>
    
  </div>
</template>


<script>
import formTable from './formTable.vue'
import timeDown from './timeDown.vue'
export default {
    components: { formTable, timeDown },
    data () {
      return {
        activeId: 'formTable'
      }
    },
    mounted () {
      
    },
    methods: {
      
    }
};
</script>

<style lang="less" scoped>

.tab-lab {
  padding: 8px;

  > span {
    cursor: pointer;
  }

  .act {
    background: #ffaa00;
  }
}

</style>