<template>
  <div style="margin-left: auto;margin-right: auto">
    <div v-for='data in courseData'>
      <a-card :title=data.title style="width: 50%;height:150px;margin-left: auto;margin-right: auto">
        <router-link slot="extra" :to="{name:'Details' +''}">发表</router-link>
        <router-link slot="extra" :to="{name:'Editor' +''}">{{ data.state }}</router-link>
        <p>{{ data.author }}</p>
        <p>card content</p>
      </a-card>
      <br />
    </div>
    <a-pagination
        :page-size-options="pageSizeOptions"
        :total="total"
        show-size-changer
        :page-size="pageSize"
        @showSizeChange="onShowSizeChange"
        @change="changePage"
        style="text-align: center"
    >
      <template slot="buildOptionText" slot-scope="props">
        <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
        <span v-if="props.value === '50'">全部</span>
      </template>
    </a-pagination>
  </div>
</template>

<script>
//总数据，let为局部变量
let courseDatas=[
  {title:"新生杯",author:"程序设计基础协会",time:"2021-1-5",state:"开始"},
];
export default {
  data(){
    return {
      courseData:[],
      pageSizeOptions: ['5','10', '20', '30', '40', '50'],
      current: 1,
      pageSize: 5,
      total: 0,
    };
  },
  created() {
    this.total = courseDatas.length;
    this.changePage(this.current,this.pageSize);
  },
  methods: {
    /**
     *  重新设置每页条数时，触发此方法
     *  内容：
     *      更新当前的页码，每页条数
     *      需要重新调用跳转页面的功能，否则会出现空白页面
     *          场景重现：删除this.changePage(this.current, this.pageSize);
     *                  数据多条时，点击最后一页，再把每页条数调大，会出现空白页面。
     *                  原因：current已更新为最新的，但分页组件中的current还停留在更新前的
     * @param current 页码
     * @param pageSize 每页的页数
     */
    onShowSizeChange(current, pageSize) {
      console.log("om");
      this.pageSize = pageSize;
      this.current = current;
      this.changePage(this.current, this.pageSize);
    },

    /**
     * 翻页时更新数据
     * courseDatas为总的数据，this.courseData为页面中的数据 ---------可以做优化_ZRK
     * 内容：
     *    设置显示的数据的边界
     *    将this.courseData的数据更新，页面会自动渲染-----爽
     * @param page  页码
     * @param pageSize  每页页数
     */
    changePage(page, pageSize){
      let start = (page-1)*pageSize;
      let end = Math.min(page*pageSize,this.total);
      this.courseData=[];
      for( ;start<end;start++){
        this.courseData.push(courseDatas[start]);
      }
    }
  },
};
</script>

<style scoped>

</style>