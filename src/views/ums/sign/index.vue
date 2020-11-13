<template>
    <div class="bg">
        <Head/>
        <div class="sign">
            <el-calendar v-model="today">
                <template
                        slot="dateCell"
                        slot-scope="{date, data}">
                    <p>
                        {{ data.day.split('-').slice(2).join('-') }} {{ dealMyDate( data.day)}}
                    </p>
                </template>
            </el-calendar>
            <div>
                <span></span>
                <el-button>点击签到</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import header from "@/components/Head";
    import {selectSignIn} from "@/api/sign";
    import {formatDate} from '@/utils/date';
    const defaultListQuery = {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,

    };
    export default {
        name: "sign",
        data () {
            return {
                date: Object.assign({}, defaultListQuery),
                signDetail:{},
                today: new Date()
            }
        },
        components: {
            Head: header
        },
        created(){
            this.selectSignIn();
        },
        mounted(){
            this.$nextTick(() => {
                // 点击前一个月
                let prevBtn = document.querySelector(
                    '.el-calendar__button-group .el-button-group>button:nth-child(1)');
                prevBtn.addEventListener('click', () => {
                    let day = formatDate(this.today, 'yyyy-MM-dd');
                    this.date.year =  parseInt(day.split('-')[0]);
                    this.date.month =  parseInt(day.split('-')[1]);
                    this.selectSignIn();
                })
            });
            this.$nextTick(() => {
                // 点击后一个月
                let prevBtn = document.querySelector(
                    '.el-calendar__button-group .el-button-group>button:last-child');
                prevBtn.addEventListener('click', () => {
                    let day = formatDate(this.today, 'yyyy-MM-dd');
                    this.date.year =  parseInt(day.split('-')[0]);
                    this.date.month =  parseInt(day.split('-')[1]);
                    this.selectSignIn();
                })
            })
        },
        methods:{
            dealMyDate(day){
                let i = day.split('-').slice(2).join('-');
                if(this.date.month === parseInt(day.split('-')[1])) {
                    if (this.signDetail.signList[i-1].isSign === 1) {
                        return '✔️';
                    }
                }
                return '';
            },
            selectSignIn (){
                selectSignIn(this.date).then(response =>{
                    this.signDetail = response.data;
                })
            }
        },
    }
</script>

<style scoped>
    .is-selected {
        color: #1989FA;
    }
    .bg {
        width: 1200px;
        margin: auto;
        height: 900px;
    }
    .sign {
        padding: 0 50px 50px 50px;
        margin-top: 10px;
    }
</style>