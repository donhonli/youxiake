<template>
    <div class="swiper">
        <swiper id="parent" ref="mySwiper" :options="swiperOptions">
                        <swiper-slide>
                            <img src="@/assets/img/swiper1.png" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/swiper2.png" alt="">
                        </swiper-slide>
                        <!-- <swiper-slide>
                            <img src="@/assets/img/swiper3.png" alt="">
                        </swiper-slide> -->

                        <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    data(){
        return{
            swiperOptions:{
                loop:true,
                pagination: '.swiper-pagination'
            }
        }
    }
}
</script>
<style scoped>
    .swiper{
        background-color: #fff9db;
        width: 100%;
        height: 3.2rem;
    }
    
    .swiper img{
        width: 100%;
        height: 3.2rem;
    }
    .swiper-pagination>>>.swiper-pagination-bullet-active{
        background-color: orange;
    }
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: 5px;
    }
</style>