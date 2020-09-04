<template>
    <div class="like">
        <div class="like-list" v-for="item in likeList" :key="item.id">
            <div class="like-top">
                <div class="top-left">
                    <span>{{item.title}}</span>
                    
                </div>
                <div class="top-right">
                    <p>更多<i class="iconfont">&#xe62d;</i></p>
                    
                </div>
                
            </div>
            <div class="like-bottom">
                <div class="bottom-header" @click="toDetials(item)">
                    <img :src="item.imgUrl" alt="">
                    <div class="header-info">
                        
                        <span class="header-title">{{item.Introduction}}
                        </span>
                        <span class="header-price">{{item.price}}</span>
                    </div>
                    
                </div>
                <ul>
                        <li v-for="item in item.cityList" :key="item.id"
                            @click="toDetials(item)"
                        >
                            <img :src="item.imgUrl" alt="">
                            <span>{{item.title}}</span> 
                            <span>￥{{item.price}}起</span>
                        </li>
                        
                    </ul>
            </div>
        </div>
        
    </div>
</template>
<style scoped>
.like{
    border-top: 0.2rem solid #ddd;
    padding-top:0.2rem;
    font-size: .35rem;
    margin-bottom:1.46666rem;
}   
.like-list{
 margin-top:.4rem;
}
.like-top{
    display: flex;
    justify-content: space-between;
}
.top-left{
    position: relative;
}
.like-top .top-left:before{
    position:absolute;
    content: "";
    background-color: #fed101;
    width: .1rem;
    height: .4866666rem;
}
.like-top .top-left span{
    padding-left:.5rem ;
    font-size: .5rem;
}
.top-right{
    margin-top:.1rem;
    padding-right: .5rem;
    color:#999;
    font-weight: 550;
    font-size: .4rem;
}
.like-bottom{
    padding: .3rem;
    
}
.like-bottom .bottom-header{
    /* background: url('http://localhost:8080/img/like1.jpg') no-repeat; */
    width: 100%;
    height: 4.4666666rem;
    /* background-size:100% ; */
    position: relative;
}
.bottom-header img{
    width: 100%;
    height: 100%;
   
}
.like-bottom .bottom-header .header-info{
    z-index: 99;
    position: absolute;
    bottom:.2rem;
    left: .2rem;
    display: flex;
    justify-content: space-between;
}
.header-info .header-title{
  
    font-size: .4rem;
    color: #fff;
    font-weight: 600;
    width: 5.78rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.like-bottom .bottom-header .header-info span:last-child{
   
    font-size: .4rem;
    color: orange;
    
    margin-left: 1.5rem;
}
.like-bottom .bottom-header .header-info{
    
    position: absolute;
    bottom:.2rem;
    left: .2rem;
    /* display: flex; */
    /* justify-content: space-between; */
}
.like-bottom .bottom-header .header-info span:first-child{
    font-size: .4rem;
    color: #fff;
    font-weight: 600;
    width: 5.78rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.like-bottom .bottom-header .header-info span:last-child{
   
    font-size: .4rem;
    color: orange;
    
    margin-left: 1.5rem;
}
.like-bottom ul{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: .3rem;
    
}
.like-bottom ul li{
    display: block;
    width: 2.96rem;
   
    /* margin-left: .1rem; */
    /* text-align: center; */
}
.like-bottom ul li img{
    width: 2.96rem;
    height: 1.9584rem;
    display: block;
}
.like-bottom ul li span{
    font-size: .32rem;
    font-weight: 600;
    display: block;
    margin-top: .2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.like-bottom ul li span:last-child{
    display: block;
    margin-top: .2rem;
    font-size: .37rem;
    color: orange;
    font-weight: 500;
}
</style>
<script>
export default {
    props:['likeList'],
    data(){
        return{
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