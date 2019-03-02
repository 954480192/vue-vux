<template>
  <div>
    <div> {{msg}}</div>
  </div>
</template>
<script>
export default {
  components: {
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.prepath = from.path
    })
  },
  data () {
    return {
      msg: '个人',
      prepath: '',
      headstyle: {
        background: '#d2d6d2',
        'font-size': '20px'
      }
    }
  }
}
</script>
<style scoped>

</style>
