<template>
  <div style="margin-left: auto;margin-right: auto">
    <div v-for='data in courseData'>
      <a-card :title=data.title style="width: 50%;height:150px;margin-left: auto;margin-right: auto">
        <a slot="extra" href="#">{{ data.state }}</a>
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
let courseDatas=[
  {title:"新生杯",author:"程序设计基础协会",time:"2021-1-5",state:"开始"},
];
// let courseDatas=[];
// let courseData=[];
// let pageSizeOptions=['10', '20', '30', '40', '50'];
// let current=1;
// let pageSize=10;
// let total=50;
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
    let start = 0;
    let end = Math.min(5,this.total);
    this.courseData=[];
    for( ;start<end;start++){
      this.courseData.push(courseDatas[start]);
    }
    console.log(this.courseData);
  },
  methods: {
    // newPage(){
    //   this.total = courseDatas.length;
    // },
    onShowSizeChange(Pcurrent, PpageSize) {
      this.pageSize = PpageSize;
      this.current = Pcurrent;
      this.changePage(this.current, this.pageSize);
    },
    changePage(Ppage, PpageSize){
      let start = (Ppage-1)*PpageSize;
      let end = Math.min(Ppage*PpageSize,this.total);
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