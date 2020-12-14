<template>
  <div>
    <mavon-editor v-model="test"/>
    <button @click="testMethods" :ishljs = "true">测试</button>
  </div>
</template>

<script>
  export default {
    name: "Editor",
    data(){
      return {
        test:"",
      }
    },
    methods:{
      testMethods() {
        console.log(this.test);
      }
    }
  }
</script>

<style scoped>

</style>