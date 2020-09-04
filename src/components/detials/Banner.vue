<template>
    <div class="banner">
        <div class="banner-img">
            <img :src="item.imgUrl" alt="">
        </div>
        <div class="banner-title">
            {{item.title}}
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            item:{}
        }
    },
    activated(){
        this.item = this.$route.query.item;
        if(this.item.Introduction){
            this.item.title = this.item.Introduction;
        }
    }
}
</script>
<style scoped>
    .banner{
        height: 5.64rem;
        width: 100%;

    }
    .banner img{
        width: 100%;
        height: 100%;
    }
    .banner-title{
        font-size: .4rem;
        padding: .2rem;
        line-height: .5rem;
    }
</style>