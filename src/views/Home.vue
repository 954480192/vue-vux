<template>
  <div class="main">
    <router-view></router-view>
    <tabbar :menus="menus"></tabbar>
  </div>
</template>

<script>
  import tabbar from '../components/home/tabbar'
  import { Actionsheet, Alert } from 'vux'
  export default {
    components: {
      tabbar,
      Actionsheet,
      Alert
    },
    mounted () {
      this.$nextTick(() => {
        // console.log(document.querySelector('.main > div').clientTop)
      })
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        isShow: false,
        showCancel: true,
        menus_map: {
          menu1: 'menu1',
          menu2: 'menu2'
        },
        menus: [
          {
            selected: true,
            label: '亲宝宝',
            icon: 'fa fa-home',
            to: '/home',
            active: true
          },
          {
            label: '个人',
            icon: 'fa fa-user',
            to: '/own'
          }
        ]
      }
    },
    methods: {
      clickTest () {
        this.isShow = true
        this.$fetch('/public/static/demo_json_data/hello.json', {}).then((data) => {
          this.menus_map = data
        })
      },
      click_menu (key, item) {
        this.isShow = false
        console.log(key, item)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
</style>
