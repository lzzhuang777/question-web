<template>

    <div class="container">
        <el-form autoComplete="on"
                 :model="loginForm"
                 :rules="loginRules"
                 ref="loginForm"
                 style="height: 900px">
            <div class="login-wrapper">
                <div class="header">
                    Login
                </div>
                <div class="form-wrapper">
                    <input type="text" name="phone" v-model="loginForm.phone" placeholder="手机号" class="input-item"></input>
                    <input type="password" name="password" v-model="loginForm.password" placeholder="密码" class="input-item"></input>
                </div>
                <div class="btn" @click="handleLogin">Login</div>
                <div class="msg">
                    Don't have account?<a href="#">Sign up</a>
                </div>
            </div>
        </el-form>
    </div>

</template>

<script>

    export default {
        name: 'login',
        data() {
            const validatePass = (rule, value, callback) => {
                if (value.length < 3) {
                    callback(new Error('密码不能小于3位'))
                } else {
                    callback()
                }
            };
            return {
                loginForm: {
                    phone: '18772103675',
                    password: '123456',
                },
                loginRules: {
                    password: [{required: true, trigger: 'blur', validator: validatePass}]
                },
                loading: false,
            }
        },
        methods: {
            handleLogin() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.loading = true;
                        console.log(this.loginForm.phone);
                        this.$store.dispatch('Login', this.loginForm).then(() => {
                            this.loading = false;
                            this.$store.dispatch('GetInfo').then(() =>{
                            });
                            this.$message({
                                type: 'success',
                                message: '登录成功!'
                            });
                            this.$router.push({path: '/'})
                        }).catch(() => {
                            this.loading = false
                        })
                    } else {
                        console.log('参数验证不合法！');
                        return false
                    }
                })
            },
        }
    }
</script>

<style scoped>

    * {
        padding: 0;
        margin: 0;
        font-family: 'Open Sans Light';
        letter-spacing: .05em;
    }

    .container {
        height: 900px;
        background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
    }

    .login-wrapper {
        background-color: #fff;
        width: 370px;
        height: 588px;
        border-radius: 15px;
        padding: 0 50px;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

    }

    .header {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        line-height: 200px;
    }

    .input-item {
        display: block;
        width: 100%;
        margin-bottom: 20px;
        border: 0;
        padding: 10px;
        border-bottom: 1px solid rgb(120, 125, 125);
        font-size: 15px;
        outline: none;
    }

    .input-item::placeholder {
        text-transform: uppercase;
    }

    .btn {
        text-align: center;
        padding: 10px;
        background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
        cursor: hand;
    }

    .msg {
        text-align: center;
        line-height: 80px;
    }

    .msg a {
        text-decoration-line: none;
        color: #a6c1ee;

    }

</style>
