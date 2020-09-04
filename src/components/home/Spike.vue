<template>
    <div class="spike">
        <swiper id="parent" ref="mySwiper" :options="swiperOptions">
                        <swiper-slide v-for="item in spikeList" :key="item.id">
                            <div class="spike-content" @click="toDetials(item)">
                                
                                <div class="spike-top">
                                    <img src="@/assets/img/spike1.png" alt="">
                                    <span>距离结束</span>
                                    <count-down 
                                    :currentTime="item.startTime" 
                                    :startTime="item.startTime"
                                    :endTime="item.endTime"
                                    :dayTxt="'天'"
                                    :hourTxt="':'"
                                    :minutesTxt="':'"
                                    :secondsTxt="''">
                                    </count-down>
                                </div>
                                <div class="spike-bottom">
                                    <img :src="item.imgUrl" alt="">
                                    <div class="bottom-title">
                                        <p>{{item.title}}</p>
                                        <div class="bottom-price">
                                            <span>
                                                ￥{{item.price}}
                                            </span>
                                            <p>剩下{{item.num}}个</p>
                                        </div>
                                
                                     </div>
                                </div>
                            </div>
                        </swiper-slide>

                       
                       

                        <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        
    </div>
</template>
<script>
import CountDown from 'vue2-countdown'
export default {
    components:{
        CountDown
    },
    props:['spikeList'],
    data(){
        return{
            
            
            swiperOptions:{
                // loop:true,
                pagination: '.swiper-pagination'
            },
           
        }
    },
    methods:{
        toDetials(item){
            this.$router.push({
                path:"/detials",
                query:{
                    item
                }
            });
            
        }
    }
    
    
    
}
</script>
<style scoped>
.spike{
    /* padding: .3rem ; */
    height: 4.37777rem;
    width: 100%;
}
.spike-content{
    /* overflow: hidden; */
    padding: .3rem;
}
.spike-top{
    width: 100%;
    height: 1.293333rem;
    display: flex;
    align-items: center;
    font-size: .35rem;
}
.spike-top img{
    height: .413333rem;
    width: 1.8933333rem;
}
.spike-top span{
    margin-left: .125rem;
}
.spike-top >div{
    margin-left: .225rem;
    
}
.spike-top >>> div span{
    margin-left: .15rem;
    color: #fff;
    border-radius: .1rem;
    background-color: #8b8b8b;
}
.spike-bottom{
    display: flex;
    justify-content: space-between;
}
.spike-bottom img{
    
    width: 3.90rem;
    height: 2.12rem;
}
.spike-bottom .bottom-title{
   margin-left: .3rem;
    width: 5.86rem;
}
.bottom-title p{
    line-height: .6rem;
    display: -webkit-box;
     color: #333;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: .38rem;
    
}
.bottom-price{
    margin-top: .5rem ;
    display: flex;
    justify-content: space-between;
    font-size: .38rem;
}
.bottom-price p{
    margin-top: -.2rem ;
    padding: 0rem .1rem;
    border:1px solid #444;
    border-radius: .1rem;
    background-color: #fed101;
}
/* .swiper-container{
    overflow: visible;
} */
    .swiper-pagination>>>.swiper-pagination-bullet-active{
        background-color: orange;
    }
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: 0rem;
    }
</style>