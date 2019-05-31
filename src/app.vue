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
        <!-- 侧边栏 -->
        <!-- 网站主体 -->
        <!-- 底部栏 -->
    </div>
</template>
<style>
    a, input {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    body {
        color: #444;
        font-size: 14px;
        font-family: "Microsoft Yahei", "Helvetica Neue", Helvetica, Arial, sans-serif;
        background-color: #EEE;
        overflow-x: hidden;
    }

    /*reset*/
    ul, dl, dt, dd, h1, h2, h3, h4, h5, h6, p {
        padding: 0;
        margin: 0;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img {
        display: block;
        width: 100%;
        max-width: 100%;
        max-height: 100%;
    }

    .clearfix:before,
    .clearfix:after {
        content: ' ';
        display: table;
    }

    .clearfix:after {
        clear: both;
    }

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

</script>