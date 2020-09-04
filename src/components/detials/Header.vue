<template>
<div class="header">
    <div class="header-left" @click="toHome">
        <i class="iconfont">&#xe61c;</i>
    </div>
    <div class="header-title">
        活动详情页
    </div>
    <div class="header-right" >
        <i class="iconfont">&#xe60a;</i>
    </div>
</div>
</template>
<script>
export default {
    methods:{
        toHome(){
            this.$router.push({
                path:'/'
            });
        }
    }
}
</script>
<style scoped>
    .header{
        height: 1.2rem;
        background-color: #f7f7f7;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: .5rem;
    }
    .iconfont{
        font-size: .6rem;
    }
    .header-left{
        padding-left: .5rem;
        
    }
    .header-right{
        padding-right: .5rem;
    }
</style>