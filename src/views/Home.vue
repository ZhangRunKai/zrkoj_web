<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu
          id="aaa"
          theme="dark"
          mode="horizontal"
          :selectedKeys="selectMenu"
          :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1" @click="clickByHome">
          <a-icon type="mail" />首页
        </a-menu-item>
        <a-menu-item key="2" @click="clickByCourse">
          <a-icon type="mail"/>课程
        </a-menu-item>
        <a-menu-item key="3" @click="clickByContests">
          比赛
        </a-menu-item>
        <a-menu-item style="float: right">
          <a @click="showModal">
            登陆
          </a>
          <a-modal
              title="Title"
              :visible="visible"
              :confirm-loading="confirmLoading"
              @ok="handleOk"
              @cancel="handleCancel"
          >
            <p>{{ ModalText }}</p>
          </a-modal>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
        <router-view/>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      zrkoj ©2020 Created by Zhang Run Kai
    </a-layout-footer>
  </a-layout>
</template>
<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.ant_user {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 0 16px 24px;
  float: right;
  position: fixed;
  zIndex: 111;
}
</style>
<script>
export default {
  data() {
    return {
      menuMap:{
        "/":"1",
        "/course":"2",
        "/contests":"3"
      },
      selectMenu: [],
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    };
  },
  created() {
    this.selectMenu[0]=this.menuMap[this.$route.path];
  },
  methods: {
    toOtherPath(menuKey,menuPath){
      this.selectMenu[0]=menuKey;
      if(this.$route.path !== menuPath){
        this.$router.push({path:menuPath})
            .catch(err => {
              console.log("首页路由跳转错误：");
              console.log(err);
            });
      }
    },
    clickByHome(){
      this.toOtherPath("1","/");
    },
    clickByCourse(){
      this.toOtherPath("2","/course");
    },
    clickByContests(){
      this.toOtherPath("3","/contests");
    },
    showModal() {
      console.log(this.selectMenu);
      this.visible = true;
    },
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
        this.selectMenu[0]="1";
      }, 2000);
    },
    handleCancel(e) {
      console.log(this.selectMenu);
      this.selectMenu[0]="3";
      this.visible = false;
    },
  },
};
</script>