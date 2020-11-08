<template>
    <div class="head">
        <el-row>
            <el-col :span="12">
                <el-image :fit="'fit'"
                          src="http://localhost:9000/question/logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20201108%2F%2Fs3%2Faws4_request&X-Amz-Date=20201108T102245Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=37de5b1ae0b268531934e82feff7a3135c53edbaf4bbbd59bd8653b85abfa787"
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
                    <template v-if="gIsLogin">
                        <a class="t-login" @click="changeType(2)">{{ sLoginInfo.nickName }}</a>
                        <a class="t-register" href="javascript:;" @click="mLogout">
                            <el-button type="primary" plain>登录</el-button>
                        </a>
                    </template>
                    <template v-else="gIsLogin">
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
    export default {
        name: "index.vue",
        data() {
            return {
                gIsLogin: false,
                search: '',
                 }
        }
    }
</script>

<style scoped>
    .img {
        height: 60px;
        width: 100px;
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

</style>