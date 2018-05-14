<template>
  <div id="app">
    <!--<transition :name="direction" mode="out-in">
      <router-view></router-view>
    </transition>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {}
  },
  computed: { //页面切换效果
      direction () {
          let viewDir = this.$store.state.viewDirection
          let tranName = ''
          if (viewDir === 'forward') {
              tranName = 'view-out'
          } else if (viewDir === 'reverse') {
              tranName = 'view-in'
          } else {
              tranName = 'fade'
          }
          return tranName
      },
  }
}
</script>

<style>
html, body{
	margin:0;
	padding: 0;
	font-size: 16px;
}
</style>
