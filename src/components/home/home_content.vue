<template>
    <div ref="home">
      <home-head></home-head>
      <!--事记-->
      <flow orientation="vertical">
        <div v-for="it in items" >
          <flow-state :title="it.title" ></flow-state>
        </div>
      </flow>
    </div>
</template>
<script>
  import homeHead from './home_head'
  import { Divider, Flexbox, FlexboxItem, Flow, FlowState, FlowLine } from 'vux'
  export default {
    components: {
      homeHead,
      Divider,
      Flexbox,
      FlexboxItem,
      Flow,
      FlowState,
      FlowLine
    },
    data () {
      return {
        items: [
          {
            title: 'title1'
          },
          {
            title: 'title1'
          },
          {
            title: 'title1'
          }
        ]
      }
    }
  }
</script>
<style scoped>

</style>
