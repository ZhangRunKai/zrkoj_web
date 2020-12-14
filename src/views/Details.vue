<template>
  <div>
    <div :style="{padding: '4px 50px', minHeight: '120px' }">
      <div>
      <p style="font-weight: bold; font-size: 30px;float: left">{{headTest.title}}</p>
        <a-button type="primary" style="float: right" @click="toContest">进入</a-button>
      </div>
      <br><br><br><br>
        <h3>参与人数 : {{headTest.number}}</h3><h5>--{{headTest.author}}</h5>

    </div>
    <a-layout-content :style="{ padding: '0 50px',marginTop:'20px'}">
      <div class="markdown-body" v-html="markdownTest">
      </div>
    </a-layout-content>
  </div>
</template>

<script>
  import 'github-markdown-css/github-markdown.css';   // 然后添加样式markdown-body,用于渲染md格式
  export default {
    data(){
      return{
        headTest:{
          title:"第九届程序设计挑战杯",
          author:"计算机科技协会",
          startTime:"2020-1-1",
          endTime:"",
          number:50,
        },
        markdownTest:""
      }
    },
    created() {
      let aaa='# 你好\n' +
          '**加粗**\n' +
          '```\n' +
          '#include <stdio.h>\n' +
          'int main(){\n' +
          '\tcout<<" ";\n' +
          '\treturn 0;\n' +
          '}';
      let MarkdownIt = require('markdown-it'),
      md = new MarkdownIt();
      let result = md.render(aaa);
      this.markdownTest = result
    },
    methods:{
      toContest(){
        console.log("asas");
        this.$router.push({path:"/URGreat"})
            .catch(err => {
              console.log("首页路由跳转错误：");
              console.log(err);
            });
      }
    }
  }
</script>

<style scoped>
</style>