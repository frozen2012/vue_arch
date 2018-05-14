<template>
  <div>
      <h1>child子组件部分</h1>
      <a>written by {{author}}</a>
      <button @click="sendMsgToParent">向父组件传值</button>
  </div>
</template>
<script>
export default {
  props:["author"],
  methods:{
    sendMsgToParent(){
      this.$emit("listenToChild", "this  message is from child");
    }
  }
}
</script>
<style>

</style>
