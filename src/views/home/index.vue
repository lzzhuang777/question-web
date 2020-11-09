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
            <div v-for="test in testList" class="cardlist">
                <el-card  class="box-card">
                    <div slot="header" class="clearfix">
                        <span>{{test.testName}}</span>
                        <el-button style="float: right; padding: 3px 0" type="text">点击练习</el-button>
                    </div>
                    <div  class="text item">
                        <el-image :src="test.pic">
                        </el-image>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
    import header from "@/components/Head";
    import {testList,bannerList} from "@/api/home";
    export default {
        name: "index.vue",
        data() {
            return{
                bannerList: [
                    {
                        id: "1",
                        url: "http://120.27.195.211:9090/ysy/20200514/733C2A3C08B504AFFDAD54A2E636A3FF.jpg",
                    },
                    {
                        id: "2",
                        url: "http://120.27.195.211:9090/ysy/20200514/733C2A3C08B504AFFDAD54A2E636A3FF.jpg",
                    },
                    {
                        id: "3",
                        url: "http://120.27.195.211:9090/ysy/20200514/733C2A3C08B504AFFDAD54A2E636A3FF.jpg",
                    }
                ],
                testList: [],


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
                testList().then(response =>{
                    this.testList = response.data;
                })
            }
        }
    }
</script>

<style scoped>
    .item {
        margin-bottom: 18px;
    }
    .box-card {
        width: 250px;
        float: right;
        margin-left: 30px;
    }
    .part2 {
        margin: 30px 20px 0 20px;
    }
    .cardlist:first-child {
        margin-left: 0;
    }
</style>