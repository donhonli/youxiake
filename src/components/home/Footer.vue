<template>
    <footer>
        <a href="" >
            <img src="@/assets/img/footer1.png" alt="">
            <span>首页</span>
        </a>
       <a href="" >
            <img src="@/assets/img/footer2.png" alt="">
            <span>订单</span>
        </a>
        <a href="" >
            <img src="@/assets/img/footer3.png" alt="">
            <span>个人中心</span>
        </a>
    </footer>
</template>
<style scoped>
    footer{
        position: fixed;
        bottom: 0;
        z-index: 99999;
        background-color: #fff;
        width:100%;
        height: 1.46666rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    footer a{
        flex:1;
        display: flex;
        align-items: center;
        flex-direction: column;
        text-decoration: none;
    }
    footer a img{
        width: .72rem;
        height: .72rem;
        display: block;
    }
    footer a span{
        display: block;
        font-size: .35rem;
        margin-top: .2rem;
        font-weight: 600;
        color: #888;
    }
</style>
<script>
export default {
    data(){
        return{
            footerList:[
                {
                    id:0,
                    imgUrl:"@/assets/img/footer1.png",
                    text:"首页"
            },
            {
                    id:1,
                    imgUrl:"@/assets/img/footer2.png",
                    text:"订单"
            },
            {
                    id:2,
                    imgUrl:"@/assets/img/footer3.png",
                    text:"个人中心"
            },
            ]
           
        }
    }
}
</script>