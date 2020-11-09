<template>
    <div class="head">
        <el-row>
            <el-col :span="12">
                <el-image :fit="'fit'"
                          src="http://120.27.195.211:9090/ysy/20200524/head.png"
                          class="img"></el-image>
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
    .img {
        border-radius:250px;
        height: 60px;
        width: 60px;
        float: left;
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
        height: 60px;
        width: 60px;
        float: right;
    }

</style>