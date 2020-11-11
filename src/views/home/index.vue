<template>
    <div class="bg">
        <Head/>
        <div class="part1">
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in bannerList" :key="item.id">
                   <el-image :src="item.url">
                   </el-image>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="part2">
            <div v-for="test in typeList" class="cardlist" :key="test.id">
                <el-card  class="box-card">
                    <div slot="header" class="clearfix">
                        <span class="type">{{test.type}}</span>
                        <el-button @click="makeTest(test.id,test.type)" style="float: right; padding: 3px 0" type="text">点击练习</el-button>
                    </div>
                    <div  class="text item">
                        <el-image style="width: 155px;height: 155px" :src="test.logoUrl">
                        </el-image>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
    import header from "@/components/Head";
    import {typeList,bannerList,makeTest} from "@/api/home";

    const defaultListQuery ={
        type: null
    };
    export default {
        name: "index.vue",
        data() {
            return{
                listQuery: Object.assign({}, defaultListQuery),
                bannerList: [
                    {
                        id: "1",
                        url: "http://120.27.195.211:9090/ysy/20200524/banner1.png",
                    },

                    {
                        id: "2",
                        url: "http://localhost:9000/question/banner3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIOSFODNN7EXAMPLE%2F20201111%2F%2Fs3%2Faws4_request&X-Amz-Date=20201111T125222Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=cbacd0609ec2420f850e3097a1ead43c1242a2862bb27568b647acdea88cac81",
                    },
                    {
                        id: "3",
                        url: "http://localhost:9000/question/banner2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIOSFODNN7EXAMPLE%2F20201111%2F%2Fs3%2Faws4_request&X-Amz-Date=20201111T125235Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=495a7ef952a8451f83f45d02d6ba68cc11d9fdbd9f3c622f7b882db528f3c1ef",
                    }
                ],
                typeList: [],
            };
        },
        components:{
            Head: header,
        },
        created(){
            this.getBannerList();
            this.getTestList();
        },
        methods:{
            getBannerList(){

            },
            getTestList(){
                typeList().then(response =>{
                    this.typeList = response.data;
                })
            },
            makeTest (typeId,typeName){
                this.listQuery.type = typeId;
                makeTest(this.listQuery).then(response =>{
                    if(response.code === 200) {
                        this.$router.push({path: '/test', query: {id: response.data,type:typeName}})
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .bg {
        width: 1200px;
        margin: auto;
        background-color: #fff;
        height: 1500px;
    }
    .item {
        margin-bottom: 18px;
    }
    .box-card {
        width: 250px;
        float: left;
        margin-left: 30px;
        margin-top: 20px;
    }
    .part2 {
        margin: 30px 20px 0 20px;
    }
    .type {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        font-weight: inherit;
        color: #71777c;
    }
</style>
