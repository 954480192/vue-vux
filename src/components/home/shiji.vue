<template>
    <div>
      <div class="sj">
        <div v-for="it in items">
          <div class="title">{{it.title}}</div>
          <div class="info"></div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: '事记',
  props: ['items'],
  data () {
    return {
      msg: 'vue模板页'
    }
  }
}
</script>
<style scoped>

</style>
