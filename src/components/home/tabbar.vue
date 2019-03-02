<template>
  <Tabbar  @on-index-change="changedVal">
    <TabbarItem v-for="item of menus" link="" :selected="item.active" :key="item.label" :badge="item.badge" @on-item-click="tabitemClick(item.to)">
      <i slot="icon" :class="item.icon"></i>
      <div slot="label">{{item.label}}</div>
    </TabbarItem>
  </Tabbar>

</template>
<script>
  import { Tabbar, TabbarItem } from 'vux'

  export default {
    props: ['menus'],
    components: {
      Tabbar,
      TabbarItem
    },
    created () {
      this.$root.eventHub.$on('item-active', this.itemActive)
    },
    data () {
      return {

      }
    },
    watch: {
      menus () {
        console.log('111')
      }
    },
    methods: {
      changedVal () {

      },
      tabitemClick (to) {
        this.$router.push(to)
        this.itemActive(to)
      },
      itemActive (path) {
        this.menus.forEach((item, i) => {
          item.to === path ? item.active = true : item.active = false
        })
      }
    },
    beforeDestroy () {
      this.$root.eventHub.$off('item-active', this.itemActive)
    }
  }
</script>
<style scope>

</style>
