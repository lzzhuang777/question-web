<template>
    <div class="bg">
        <Head/>
        <div class="content">
            <div class="top">
                <el-row>
                    <el-col :span="12">
                        <h3 style="text-align: left">{{question.testName}}</h3>
                    </el-col>
                    <el-col :span="12">
                        <div style="float: right;display: flex;height: 80px;
                                    align-items: center;
                                    justify-content: center; ">
                            <span @click="clickControl" style="margin-right: 10px;font-size: 20px" v-if="timeControl"
                                  class="el-icon-video-pause"></span>
                            <span @click="clickControl" style="margin-right: 10px; font-size: 20px" v-else="timeControl"
                                  class="el-icon-video-play"></span>
                            <!--<Timer ref="time"></Timer>-->
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="question">
                <span class="el-icon-s-grid"></span><span style="color: #606266">{{count + "/" + total}}</span>
                <div style="margin-top: 30px;">
                    <div style="margin-bottom: 30px;color: #606266">{{question.title}}</div>
                    <el-radio-group v-model="radio" class="radio_group">
                        <el-radio @change="updateInfo()" class="radio" :label="ans.answerHead" border
                                  v-for="ans in question.answerList"
                                  :key="ans.id">
                            {{ans.answerHead + ": "+ ans.answer}}
                        </el-radio>
                    </el-radio-group>
                </div>
            </div>

            <div class="function">
                <el-row :gutter="20">
                    <el-col :span="16">
                         <span v-if="collect" style="color: #F56C6C;margin-left: 10px;cursor:pointer;"
                               @click="delCollection">
                            <el-button size="medium" type="danger" icon="el-icon-star-off" circle></el-button> 取消收藏
                        </span>
                        <span v-else="collect" style="color: #E6A23C;margin-left: 10px;cursor:pointer;"
                              @click="collectionQues">
                            <el-button size="medium" type="warning" icon="el-icon-star-off" circle></el-button> 收藏一下
                        </span>
                    </el-col>
                    <el-col :span="4">
                        <el-button @click="submitTest" style="float: right" size="medium" type="primary" plain>提前交卷
                        </el-button>
                    </el-col>
                    <el-col :span="4">
                        <el-button size="medium" type="success" icon="el-icon-arrow-right" plain>下一题</el-button>
                    </el-col>
                </el-row>
            </div>
            <div class="page">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        @current-change="handleCurrentChange"
                        :page-size="listQuery.pageSize"
                        :current-page.sync="listQuery.pageNum"
                        :pagerCount="11"
                        :total="total">
                </el-pagination>
            </div>
            <el-dialog
                    :title="'测验答题详情'"
                    :visible.sync="testDialogVisible"
                    width="40%"
                    class="dialogClass">
                <div>
                    <el-progress type="circle" :percentage="memberTest.score" status="success"></el-progress>
                    <p style="text-align: center">测验：{{memberTest.testName}}</p>
                </div>
                <div>
                    <el-row>
                        <el-col>
                            <span></span>
                            <span>答题时间</span>
                        </el-col>
                        <el-col>
                            <span>{{memberTest.score/10+"/10"}}</span>
                            <span>正确题目</span>
                        </el-col>
                    </el-row>
                </div>
                <div>
                    <span v-for="memberAns in memberTest.testAnswers" :class="memberAns.isCorrect ? 'active':'isActive'">
                    </span>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import timer from "@/components/timer";
    import header from "@/components/Head";
    import {
        smsMemberTest, isCollection, collectionQuestion,
        delCollection, submitQuesAnswer, submitTest
    } from "@/api/test"

    const defaultListQuery = {
        pageNum: 1,
        pageSize: 1,
    };
    export default {
        name: "testDetail",
        data() {
            return {
                listQuery: Object.assign({}, defaultListQuery),
                total: 10,
                question: {},
                count: 1,
                timeControl: true,
                radio: null,
                collect: false,
                collects: {},
                testDialogVisible: false,
                memberTest: {}
            }
        },
        components: {
            Head: header,
            Timer: timer,
        },
        watch: {},
        created() {
            this.getQuestionList();
        },
        methods: {
            handleCurrentChange(val) {
                this.count = val;
                this.listQuery.pageNum = val;
                this.getQuestionList();
            },
            getQuestionList() {
                smsMemberTest(this.$route.query.id, this.listQuery).then(response => {
                    this.question = response.data.list[0];
                    this.total = response.data.total;
                    this.radio = response.data.list[0].memberAnswer;
                    this.isCollection(response.data.list[0].quesId);
                })
            },
            clickControl() {
                this.timeControl = !this.timeControl;
                this.$nextTick().time.stop();
            },
            collectionQues() {
                let params = {
                    "quesId": this.question.quesId,
                    "quesName": this.question.title,
                    "tag": this.question.type,
                };
                collectionQuestion(params).then(response => {
                    this.isCollection(this.question.quesId);
                    if (response.code === 200) {
                        this.$message({
                            type: 'success',
                            message: '收藏试题成功!'
                        });
                    }
                })
            },
            delCollection() {
                let params = {
                    quesId: this.question.quesId,
                };
                delCollection(params).then(response => {
                    this.isCollection(this.question.quesId);
                    if (response.code === 200) {
                        this.$message({
                            type: 'success',
                            message: '取消收藏成功!'
                        });
                    }
                })
            },
            submitTest() {
                this.$confirm('是否要提前交卷?', '提示', {
                    confirmButtonText: '确定交卷',
                    cancelButtonText: '继续做题',
                    type: 'warning'
                }).then(() => {
                    submitTest(this.$route.query.id).then(response => {
                        this.memberTest = response.data;
                        this.testDialogVisible = true;
                    })
                })
            },
            updateInfo() {
                let memberAnswer = {
                    "memberTestId": this.$route.query.id,
                    "quesId": this.question.quesId,
                    "answer": this.radio,
                    "isCorrect": this.radio === this.question.answer ? 1 : 0
                };
                submitQuesAnswer(memberAnswer).then(response => {
                })
            },
            isCollection(quesId) {
                isCollection({quesId: quesId}).then(response => {
                    this.collect = response.data;
                })
            }
        }
    }
</script>

<style scoped>

    .bg {
        width: 1200px;
        margin: auto;
        height: 900px;
    }

    .content {
        background-color: #fff;
        padding: 0 50px 50px 50px;
        margin-top: 10px;

    }

    .top {
        margin-top: 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #dcdfe6;
    }

    .question {
        margin: 30px auto;
    }

    .radio {
        display: block;
        margin-bottom: 20px;
        margin-left: 10px;
    }

    .function {
        margin: 20px 0 50px 0;
    }
    .active {
        display: block;
        float: left;
        margin-left: 10px;
        background-color: #67C23A;
        width: 30px;
        height: 30px;
    }
    .isActive {
        display: block;
        float: left;
        margin-left: 10px;
        background-color: #F56C6C;
        width: 30px;
        height: 30px;
    }

    /deep/ .el-pagination.is-background .el-pager li {
        margin: 0 10px;
        min-width: 40px;
        height: 38px;
        font-size: 15px;
        line-height: 37px;
    }

    /deep/ .el-pagination.is-background .btn-next {
        margin: 0 10px;
        min-width: 40px;
        height: 38px;
        font-size: 15px;
        line-height: 37px;
    }

    /deep/ .el-pagination.is-background .btn-prev {
        margin: 0 10px;
        min-width: 40px;
        height: 38px;
        font-size: 15px;
        line-height: 37px;
    }
</style>