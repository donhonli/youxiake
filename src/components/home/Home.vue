<template>
    <div class="home">
        <Banner></Banner>
        <Icons></Icons>
        <Tabs></Tabs>
        <Scroll></Scroll>
        <Swiper></Swiper>
        <Spike :spikeList="spikeList"></Spike>
        <Like :likeList="likeList"></Like>
        <Footer></Footer>
    </div>
</template>
<script>
import Banner from './Banner'
import Icons from './Icons'
import Tabs from './Tabs'
import Scroll from './Scroll'
import Swiper from './Swiper'
import Spike from './Spike'
import Like from './Like'
import Footer from './Footer'
import {mapState} from 'vuex'
export default {
    components:{
        Banner,
        Icons,
        Tabs,
        Scroll,
        Swiper,
        Spike,
        Like,
        Footer

    },
    
    computed:{
        ...mapState(['cityName'])
    },
    data(){
        return{
            spikeList:[],
            likeList:[],
            lastCity:""
        }
    },
    methods:{
        http(){
            let that = this;
            that.axios.get('http://localhost:8080/api/datahome.json')
                .then((res)=>{
                   let data = res.data.data;
                   data.forEach((item)=>{
                       if(item.city == that.cityName){
                           
                            that.spikeList = item.spikeList;
                            that.likeList = item.likeList; 
                       }else{

                            that.spikeList = data[0].spikeList;
                            that.likeList = data[0].likeList; 
                       }
                   })

                //    console.log(that.cityName)
                })
        }
    },
    mounted(){
        
        this.http();
    },
    activated(){
       
        if(this.cityName !== this.lastCity){
            this.http();
            this.lastCity = this.cityName;
        }
        
    }
}
</script>
<style scoped>
    .home{
        overflow: hidden;
    }
</style>