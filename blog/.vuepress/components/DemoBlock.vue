<template>
  <div class="example">
    <div class="example-case">
      <slot name="source"></slot>
    </div>
    <div class="example-code">
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
      <div class="example-code-more" @click="changeCode">
        <Icon type="ios-arrow-down" v-show="!showCode"></Icon>
        <Icon type="ios-arrow-up" v-show="showCode"></Icon>
        <span>{{showCode?'隐藏':'显示'}}代码</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      showCode: false,
      lsHeight: 0,
      ready: false
    }
  },
  computed: {
    codeHeight () {
      let style = {
        height: `${this.lsHeight}px`
      }
      return style;
    }
  },
  mounted () {
    let vm = this
    vm.$nextTick(() => {
      let highlight = this.$el.getElementsByClassName('highlight')[0]
      if (vm.showCode) {
        highlight.style.height = 'auto'
      } else {
        highlight.style.height = 0
      }
    })
  },
  methods: {
    changeCode () {
      let vm = this
      vm.showCode = !vm.showCode
      let highlight = this.$el.getElementsByClassName('highlight')[0]
      if (vm.showCode) {
        highlight.style.height = 'auto'
      } else {
        highlight.style.height = 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
.example {
  border: 1px solid #eee;
  border-radius: 6px;
  margin-bottom: 20px;
  transition: all 0.2s ease-in-out;
  &-case {
    padding: 10px;
  }

  &-code {
    .highlight {
      padding: 10px;
      overflow: hidden;
    }
    &-more {
      color: #409eff;
      background-color: #f9fafc;
      height: 44px;
      line-height: 44px;
      font-size: 14px;
      border-top: 1px solid #eee;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>