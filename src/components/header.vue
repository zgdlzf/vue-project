<template>
    <!-- πÃ∂®µº∫Ω -->
    <div class="header">
        <!-- Õ¯’æLogo -->
        <h1 class="logo">
            <a href="./index.html">∞¢¿Ô∞Ÿ–„</a>
        </h1>
        <!-- Õ¯’æµº∫Ω -->
        <ul class="nav">
            <li>
                <a href="javascript:;">
                    <span class="glyphicon glyphicon-glass"></span>∆Ê»§ ¬
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="glyphicon glyphicon-phone"></span>≥±ø∆ºº
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="glyphicon glyphicon-fire"></span>ª·…˙ªÓ
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="glyphicon glyphicon-gift"></span>√¿∆Êº£
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span class="glyphicon glyphicon-th-list"></span>∂¿¡¢“≥√Ê
                </a>
            </li>
        </ul>
        <!-- Õ¯’æÀ—À˜ -->
        <div class="search">
            <form action="">
                <input type="text" class="keys" placeholder=" ‰»Îπÿº¸◊÷">
                <input type="submit" class="btn" value="À—À˜">
            </form>
        </div>
        <!-- RSS -->
        <div class="feeds">
            <a href="javascript:;">
                <i></i>
                RSS∂©‘ƒ
            </a>
        </div>
        <!-- ”—«È¡¥Ω” -->
        <div class="slink">
            <a href="javascript:;">¡¥Ω”01</a> |
            <a href="javascript:;">¡¥Ω”02</a>
        </div>
    </div>
</template>
<style>
    /*πÃ∂®µº∫Ω*/
    .header {
        width: 190px;
        height: 100%;
        background-color: #FFF;
        position: fixed;
    }

    /*Õ¯’æLogo*/
    .header .logo {
        width: 100%;
        height: 120px;
        text-indent: -2000px;
        background: #FF5E52 url(../images/logo.png);
    }
    .header .logo a {
        display: block;
        height: 100%;
    }
    /*Õ¯’æµº∫Ω*/
    .header .nav {
        font-size: 16px;
        border-bottom: 1px solid #EEE;
    }

    .header .nav a {
        display: block;
        padding: 12px 25px;
        color: #666;
    }

    .header .nav a:focus,
    .header .nav a:hover {
        color: #444;
    }

    .header .nav a.active {
        color: #FF5E52;
    }

    .header .nav .glyphicon {
        width: 16px;
        height: 16px;
        margin-right: 12px;
    }

    .header .search {
        padding: 30px 15px 0;
    }

    .header .search form {
        overflow: hidden;
    }

    .header .search input {
        display: block;
        float: left;
        box-sizing: border-box;
    }

    .header .search .keys {
        width: 112px;
        height: 34px;
        color: #666;
        border: 1px solid #DDD;
        border-right: 0 none;
        padding: 5px 5px 5px 10px;
    }

    .header .search .keys:focus {
        outline: none;
        border-color: #CCC;
    }

    .header .search .btn {
        width: 48px;
        height: 34px;
        border: 0 none;
        color: #FFF;
        background-color: #FF5E52;
        opacity: .85;
    }

    .header .search .btn:hover {
        opacity: 1;
    }

    .header .feeds {
        line-height: 28px;
        padding: 15px 0 15px 15px;
        margin-bottom: 10px;
        border-bottom: 1px solid #EEE;
        background-color: #F9F9F9;
    }

    .header .feeds i {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 3px;
        background-color: #F1B305;
        position: relative;
        top: 1px;
    }

    .header .feeds a {
        display: inline-block;
        font-size: 12px;
        color: #666;
    }

    .header .feeds a:hover {
        opacity: 1;
        color: #F1B305;
    }

    .header .slink {
        text-align: center;
        font-size: 12px;
    }

    .header .slink a {
        color: #999;
        text-decoration: none;
    }

    .header .slink a:hover {
        color: #666;
    }
</style>
<script>

</script>