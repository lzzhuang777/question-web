<template>
    <div class="bg">
        <Head/>
        <div class="content">
        <div class="top">
            <el-row >
                <el-col :span="12">
                    <h3 style="text-align: left">{{question.testName}}</h3>
                </el-col>
                <el-col :span="12">
                    <div style="float: right;display: flex;height: 80px;
                    align-items: center;
                    justify-content: center; ">
                        <Timer/>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="question">
            <span class="el-icon-s-grid"></span><span style="color: #606266">{{count + "/" + total}}</span>
            <div style="margin-top: 30px;">
                <div style="margin-bottom: 20px;color: #606266">{{question.title}}</div>
                <el-radio-group v-model="question.memberAnswer" class="radio_group">
                    <el-radio class="radio" :label="ans.answerHead" border v-for="ans in question.answerList" :key="ans.id">
                        {{ans.answerHead + ":  "+ ans.answer}}
                    </el-radio>
                </el-radio-group>
            </div>
        </div>

        <div class="function">
            <el-row :gutter="20">
                <el-col :span="16">
                    <span style="color: #F56C6C;margin-left: 30px;cursor:pointer; ">
                        <el-button  size="medium" type="danger" icon="el-icon-star-off" circle></el-button> 收藏一下
                    </span>
                </el-col>
                <el-col :span="4" >
                    <el-button style="float: right" size="medium"  type="primary" plain>提前交卷</el-button>
                </el-col>
                <el-col :span="4">
                    <el-button size="medium"  type="success" icon="el-icon-arrow-right" plain>下一题</el-button>
                </el-col>
            </el-row>
        </div>
        <el-pagination
                background
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
                :page-size="listQuery.pageSize"
                :current-page.sync="listQuery.pageNum"
                :total="total">
        </el-pagination>
        </div>
    </div>

</template>

<script>
    import timer from "@/components/timer";
    import header from "@/components/Head";
    import {smsMemberTest} from "@/api/test"
    const defaultListQuery = {
        pageNum: 1,
        pageSize: 1,
    };
    export default {
        name: "testDetail",
        data() {
            return{
                listQuery: Object.assign({}, defaultListQuery),
                total: 10,
                testName:'',
                question:{},
                quesList:[],
                count:1,
            }
        },
        components:{
            Head: header,
            Timer: timer,
        },
        created(){
           this.getQuestionList();
        },
        methods:{
            handleCurrentChange(val){
                this.count = val;
                this.listQuery.pageNum = val;
                this.getQuestionList();
            },
            getQuestionList(){
                //this.$route.query.id,
                smsMemberTest(1,this.listQuery).then(response =>{
                    this.question = response.data.list[0];
                    this.total = response.data.total;
                })
            },
        }
    }
</script>

<style scoped>

    .bg {
        width: 1200px;
        margin: auto;

    }
    .content {
        background-color: #fff;
        padding: 0 50px 30px 50px;
        margin-top: 10px;

    }
    .top {
        margin-top: 20px;
    }
    .question {
        margin: 30px auto;
    }
    .radio {
        display:block;
        margin-bottom: 20px;
        margin-left: 10px;
    }
    .function {
        margin: 10px 0 30px 0;
    }
</style>