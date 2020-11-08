<template>
    <div class="bg">
        <Head/>
        <div class="part1">
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in bannerList" :key="item">
                   <el-image :src="item.url">
                   </el-image>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="part2">
            
            <div v-for="test in testList">
                <el-card  class="box-card">
                    <div slot="header" class="clearfix">
                        <span>{{test.name}}</span>
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
    import header from "@/components/Head"
    export default {
        name: "index.vue",
        data() {
            return{
                bannerList: [
                    {
                        id: "1",
                        url: "http://localhost:9000/blog/ysy04.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20201108%2F%2Fs3%2Faws4_request&X-Amz-Date=20201108T115619Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=40b6cdea0020e3284691ebd55c81dd440df4d319d8689d3b484b8c4a895e748e",
                    },
                    {
                        id: "2",
                        url: "http://localhost:9000/blog/ysy03.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20201108%2F%2Fs3%2Faws4_request&X-Amz-Date=20201108T110459Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=cff664bbc4a488b955e2dd88b1236552dd628231a6bb663edaa9f3547617f2c5",
                    },
                    {
                        id: "3",
                        url: "http://localhost:9000/blog/ysy05.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20201108%2F%2Fs3%2Faws4_request&X-Amz-Date=20201108T115917Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=9cd60447d6a18787d3e1b18eeb1123847747309f2d8185fad99022295bd66bd7",
                    }
                ],
                testList: [],


            };
        },
        components:{
            Head: header,
        }
    }
</script>

<style scoped>
    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }
</style>