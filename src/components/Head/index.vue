<template>
    <div class="head">
        <el-row :gutter="20">
            <el-col :span="2">
                <el-image :fit="'fit'"
                          src="http://120.27.195.211:9090/ysy/20200524/question.png"
                          class="img"></el-image>
            </el-col>
            <el-col :span="10">
                <div style="height: 60px">
                    <span ><el-link class="title"  target="_blank">主页</el-link></span>
                    <span ><el-link class="title" target="_blank">话题</el-link></span>
                    <span ><el-link class="title" target="_blank">活动</el-link></span>
                    <span ><el-link class="title" target="_blank">个人</el-link></span>
                </div>
            </el-col>

            <el-col :span="8">
                <div class="search">
                    <el-input
                            style="margin-top: 12px"
                            size="medium"
                            placeholder="试题、卷子"
                            v-model="search">
                        <i style="margin-top: 10px" class="el-icon-search" slot="suffix" @click="">
                        </i>
                    </el-input>
                </div>
            </el-col>
            <el-col :span="4">

                <div class="t-info">
                    <template v-if="token">
                       <el-image :src="avatar" class="avatar">
                       </el-image>
                    </template>
                    <template v-else="token">
                        <router-link to="/login" class="t-login">
                            <el-button size="medium" style="margin-top: 12px" type="primary" plain>登录/注册</el-button>
                        </router-link>
                    </template>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "index.vue",
        data() {
            return {
                gIsLogin: false,
                search: '',
                 }
        },
        computed: {
            ...mapGetters([
                'avatar',
                'token'
            ])
        },
        methods:{
            login(){
                this.$router.push({path:"/login"});
            }
        }
    }
</script>

<style scoped>
    .head {
        background-color: #fff;
        box-sizing: border-box;
        border-bottom: 1px solid #dcdfe6;
    }
    .img {
        border-radius:250px;
        height: 50px;
        width: 50px;
        float: left;
        margin-left: 20px;
        margin-top: 5px;
    }

    .t-login {
        float: right;
        height: 60px;
    }
    .search {
        height: 60px;
        width: 200px;
        float: right;
    }
    .avatar{
        border-radius:250px;
        height: 50px;
        width: 50px;
        margin-top: 5px;
        margin-right: 20px;
        float: right;
    }
    .title {
        margin-left: 50px;
        line-height: 57px;
        cursor: pointer;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        font-size: 16px;
        font-weight: inherit;
        color: #71777c;
    }

</style>