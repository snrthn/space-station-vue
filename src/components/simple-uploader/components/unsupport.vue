<template>
  <div class="uploader-unsupport" v-show="!support">
    <slot>
      <p>
        很遗憾，您的浏览器不支持该上传组件。 该库需要支持 <a href="https://www.w3school.com.cn/tags/tag_input.asp">HTML5文件API以及</a> 以及 <a href="https://www.w3school.com.cn/tags/html_ref_eventattributes.asp">文件切片</a>。
      </p>
    </slot>
  </div>
</template>

<script>
  import { uploaderMixin, supportMixin } from '../common/mixins'

  const COMPONENT_NAME = 'uploader-unsupport'

  export default {
    name: COMPONENT_NAME,
    mixins: [uploaderMixin, supportMixin]
  }
</script>

<style>
  .uploader-unsupport {
    position: relative;
    z-index: 10;
    overflow: hidden;
  }
</style>
