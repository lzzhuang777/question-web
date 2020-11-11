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
                        <span>{{test.type}}</span>
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
                        url: " http://120.27.195.211:9090/ysy/20200524/banner1.png",
                    },

                    {
                        id: "2",
                        url: " http://120.27.195.211:9090/ysy/20200524/banner1.png",
                    },
                    {
                        id: "3",
                        url: " http://120.27.195.211:9090/ysy/20200524/banner1.png",
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
</style>