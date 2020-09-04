<template>
    <header>
        <span>选择城市</span>
        <i class="iconfont" @click="toHome">&#xe62a;</i>
    </header>
</template>
<script>
export default {
    methods:{
        toHome(){
            this.$router.push({
                path:"/"
            })
        }
    }
}
</script>
<style scoped>
    header{
        background-color: #fed101;
        text-align: center;
        height: 1.173rem;
        line-height: 1.173rem;
        color: #333;
        font-size: .48rem;
        font-weight: 600;
        position: relative;
    }
    header i{
        position: absolute;
        right: .3rem;
        font-size: .6rem;
    }
</style>