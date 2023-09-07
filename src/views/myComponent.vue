<template>
  <div>
    <div v-for="(item, index) in form" :key="index">
    
      <div>
        
        <input v-model="item.label">
         : 
        <input v-model="item.value">

        <button @click="remove(index)">删除</button>
        
      </div>

    </div>

    <button @click="addFun()">新增</button>

    <div>是否为首次加载：{{ isInit ? '是' : '否' }}</div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
        isInit: true,
        form: []
    };
  },
  props: {
    formData: {
      type: Object,
      default: {}
    }
  },
  watch: {
    formData: {
      handler () {
        if (!this.isInit) return;

        console.log('数据加载成功')

        for (let key in this.formData) {
          this.form.push({
            label: key,
            value: this.formData[key]
          })
        }
        
        console.log('数据更新完成')

        this.isInit = false;
      },
      deep: true
    },
    form: {
      handler () {
        if (this.isInit) return;
        this.updateHandle()
      },
      deep: true
    }
  },
  mounted () {
    this.initFun();
  },
  methods: {
    initFun () {
      for (let key in this.formData) {
        this.form.push({
          label: key,
          value: this.formData[key]
        })
      }
    },

    updateHandle () {
      for (let key in this.formData) {
        Reflect.deleteProperty(this.formData, key);
      }

      this.form.forEach(item => {
        this.$set(this.formData, item.label, item.value);
      })
    },

    addFun () {
      this.form.push({
        label: '',
        value: ''
      })
    },

    remove (index) {
      this.form.splice(index, 1)
    }
  },
};
</script>

<style>


</style>