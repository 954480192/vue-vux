<template>
    <div class="home_head">
      <!--顶部-->
      <x-header class="x-head" :header-text-color="{color:'black'}" :left-options="{showBack: true,backText:'宝宝'}" @on-click-more="toBB">
        <i slot="right" class="fa fa-camera" style="margin-right: 5px"></i>
      </x-header>
      <!--头部-->
      <div class="baobao">
        <div class="info_img">
          <img :src="img"/>
          <div class="info">
            <div>{{name}}</div>
            <div>{{info}}</div>
          </div>
        </div>
        <!--菜单-->
        <div class="menus">
          <flexbox>
            <flexbox-item v-for="it in menus" :key="it.value">{{it.text}}</flexbox-item>
          </flexbox>
        </div>
      </div>
    </div>
</template>
<script>
  import { Flexbox, FlexboxItem, XHeader } from 'vux'
export default {
    components: {
      Flexbox, FlexboxItem, XHeader
    },
    data () {
      return {
        img: '/static/images/son.jpg',
        name: '小安安',
        info: '13月',
        headstyle: {
          'font-size': '20px'
        },
        menus: [
          {
            text: '云相册',
            value: 'xc'
          },
          {
            text: '生长记录',
            value: 'szjl'
          },
          {
            text: '大事记',
            value: 'dsj'
          },
          {
            text: '亲人',
            value: 'qr'
          }
        ],
      }
    },
    methods: {
      toBB () {
        this.$router.push('/own')
      }
    }
}
</script>
<style scoped>
  .x-head{
   background-color: #35495e00;
  }
  .vux-header-left{
    color: #000;
  }
.home_head{
  position: relative;
  height: 200px;
  background: url('/static/images/son.jpg') center center no-repeat;
  background-size: cover;
}
.baobao{
  position: absolute;
  bottom: 0;
  width: 100%;
}
.baobao img{
  height: 70px;
  border-radius: 50%;
  box-shadow: 0 0 10px 0px black;
}
.info_img{
  display: flex;
}
.info{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin: 0 0 0 20px;
}
.menus  .vux-flexbox{
  background: #e8d3658a;
}
.menus  .vux-flexbox.vux-flex-row {
  text-align: center;
}
</style>
