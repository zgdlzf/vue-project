<template>
    <div class="wrapper">
        <div class="topnav">
            <ul>
                <li>
                    <a href="javascript:;">
                        <span class="glyphicon glyphicon-glass"></span> 奇趣事
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <span class="glyphicon glyphicon-phone"></span> 潮科技
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <span class="glyphicon glyphicon-fire"></span> 会生活
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <span class="glyphicon glyphicon-gift"></span> 美奇迹
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <span class="glyphicon glyphicon-th-list"></span> 独立页面
                    </a>
                </li>
            </ul>
        </div>
        <!-- 固定导航 -->
        <my-header></my-header>
        <!-- 侧边栏 -->
        <my-aside></my-aside>
        <!-- 网站主体 -->
        <!-- 底部栏 -->
    </div>
</template>
<style>


    .wrapper {
        max-width: 1440px;
        margin: 0 auto;
    }

    /*小屏幕导航*/
    .topnav {
        display: none;
        width: 100%;
        height: 50px;
        line-height: 1;
        margin-bottom: 10px;
        background-color: #FFF;
        overflow-x: auto;
        white-space: nowrap;

        -webkit-overflow-scrolling: touch;
    }

    .topnav ul {
        /*padding: 0 10px;*/
        border-bottom: 1px solid #CCC;
    }

    .topnav li {
        padding: 17px 0;
        display: inline-block;
    }

    .topnav li a {
        display: inline-block;
        padding: 0 10px 0 12px;
        color: #666;
        font-size: 14px;
        border-left: 1px solid #CCC;
    }

    .topnav li:first-child a {
        border-left: none;
    }

    .topnav li a.active {
        color: #FF5E52;
    }

</style>
<script>
//    const myHeader=require('./components/header.vue');
//    const myAside=require('./components/aside.vue');
    import myHeader from './components/header.vue';
    import myAside from './components/aside.vue';
    export default{
        components:{
            myHeader:myHeader,
            myAside:myAside
        }
    }
</script>