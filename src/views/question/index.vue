<template>
    <div>
        <Head/>
        <div class="top">
            <el-row>
                <el-col :span="12">
                    <h3 style="text-align: left">{{testName}}</h3>
                </el-col>
                <el-col :span="12">

                </el-col>
            </el-row>
        </div>
        <div class="question">
            <p>{{count / total}}</p>
            <div>
                <p>{{question.title}}</p>
                <el-radio-group v-for="ans in question.answerList" :key="ans.id">
                    <el-radio>
                        <p>{{ans.answerHead + ans.answer}}</p>
                    </el-radio>
                </el-radio-group>
            </div>
        </div>
        <el-pagination
                background
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
                :total="total">
        </el-pagination>
    </div>
</template>

<script>
    import header from "@/components/Head"
    export default {
        name: "index.vue",
        data() {
            return{
                total: 10,
                testName:'',
                question:{},
                quesList:[],
                count:0,
            }
        },
        components:{
            Head: header,
        },
        created(){

        },
        methods:{
            handleCurrentChange(val){
                this.question = this.question[val-1];
            },
            getquestionList(){

            }
        }
    }
</script>

<style scoped>
    .top {
        margin-top: 20px;
    }
</style>