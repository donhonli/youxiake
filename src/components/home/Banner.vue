<template>
    <div class="banner">
        <transition 
            enter-active-class='fadeIn'
            leave-active-class='fadeOut'
        >
            <div class="banner-left animated" v-show="toshow"></div>
        </transition>
         
        <div class="banner-header">
            <div class="banner-top">
                <div class="top-left" @click="toCity">
                    {{cityName}}
                    <i class="iconfont">&#xe6aa;</i>
                </div>
                <div class="top-search">
                    <i class="iconfont">&#xe60c;</i>
                    泰国
                </div>
                <div class="top-right">
                    <i class="iconfont" @click="toShow">&#xeaa0;</i>
                </div>
            </div>
            <div class="banner-swiper">
                    <swiper id="parent" ref="mySwiper" :options="swiperOptions">
                        <swiper-slide>
                            <img src="@/assets/img/banner1.png" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/banner2.png" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/banner3.png" alt="">
                        </swiper-slide>

                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            toshow:false,
            swiperOptions:{
              loop:true,
              pagination: '.swiper-pagination'
              
            
          }  
        }
        
    },
    computed:{
      ...mapState(['cityName'])  
    },
    methods:{
        toShow(){
            this.toshow = !this.toshow;
        },
        toCity(){
            this.$router.push({path:"/city"})
        }
    }
    // computed: {
    //   swiper() {
    //     return this.$refs.mySwiper.$swiper
    //   }
    // },
    // mounted() {
    //   console.log('Current Swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 6000, false)
    // }
}
</script>
<style scoped>
    /* #parent /deep/ .swiper-pagination-bullet{
        background-color: 'red';
    } */
    .banner-left{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 999;
        background-color: #000;
        height: 100%;
        width: 6.666666rem;
    }
    .banner-header{
        background-color: #f5f5f5;
        width: 100%;
        height: 5.6rem;
        position: relative;
    }
    .banner-top{
        position: absolute;
        left: 0;
        top: .3rem;
        z-index: 2;
        height: .8rem;
        width: 100%;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .top-left{
        padding: .4rem;
        color: #fff;
        font-size: .4266666rem;
    }
    .top-left .iconfont{
        font-size: .4rem;
    }
    .top-search{
        flex: 1;
        color: #777;
        background-color: #fff;
        border-radius: .1rem;
        font-size: 0.5rem;
        padding: .15rem .2rem;
    }
    .top-search .iconfont{
        font-size: 0.5rem;
    }
    .top-right .iconfont{
        font-size: .6rem;
        padding: .2rem;
        color: #444;
    }
    .banner-swiper{
        width: 100%;
        height: 5.6rem;
    }
    
    .banner-swiper img{
        width: 100%;
        height: 100%;
        
    }
    .swiper-pagination >>> .swiper-pagination-bullet-active{
        background-color: orange;
    }
</style>