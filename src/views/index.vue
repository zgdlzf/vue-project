<template>
    <!-- 网站主体 -->
    <div class="content">
        <!-- 焦点图 -->
        <div class="slider swipe">
            <ul class="swipe-wrap">
                <li>
                    <img src="./uploads/slide_1.jpg">
                    <span>XIU主题演示</span>
                </li>
                <li>
                    <img src="./uploads/slide_2.jpg">
                    <span>XIU主题演示</span>
                </li>
                <li>
                    <img src="./uploads/slide_1.jpg">
                    <span>XIU主题演示</span>
                </li>
                <li>
                    <img src="./uploads/slide_2.jpg">
                    <span>XIU主题演示</span>
                </li>
            </ul>
            <!-- 游标 -->
            <p class="cursor">
                <span class="active"></span>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <!-- 上一下/下一个 -->
            <a href="javascript:;" class="arrow prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a href="javascript:;" class="arrow next">
                <span class="glyphicon glyphicon-chevron-right"></span>
            </a>
        </div>
        <!-- 热门资讯 -->
        <div class="focus">
            <ul>
                <li class="large">
                    <img src="./uploads/hots_1.jpg" alt="">
                    <span>XIU主题演示</span>
                </li>
                <li>
                    <img src="./uploads/hots_2.jpg" alt="">
                    <span>星球大战:原力觉醒视频演示 电影票68</span>
                </li>
                <li>
                    <img src="./uploads/hots_3.jpg" alt="">
                    <span>你敢骑吗？全球第一辆全功能3D打印摩托车亮相</span>
                </li>
                <li>
                    <img src="./uploads/hots_4.jpg" alt="">
                    <span>又现酒窝夹笔盖新技能 城里人是不让人活了！</span>
                </li>
                <li>
                    <img src="./uploads/hots_5.jpg" alt="">
                    <span>实在太邪恶！照亮妹纸绝对领域与私处</span>
                </li>
            </ul>
        </div>
        <!-- 一周热门排行 -->
        <div class="panel top">
            <div class="title">
                <h3>一周热门排行</h3>
            </div>
            <dl>
                <dd>
                    <i>1</i>
                    <a href="javascript:;">你敢骑吗？全球第一辆全功能3D打印摩托车亮相</a>
                    <a href="javascript:;" class="like">赞(964)</a>
                    <span>阅读 (18206)</span>
                </dd>
                <dd>
                    <i>2</i>
                    <a href="javascript:;">又现酒窝夹笔盖新技能 城里人是不让人活了！</a>
                    <a href="javascript:;" class="like">赞(964)</a>
                    <span class="">阅读 (18206)</span>
                </dd>
                <dd>
                    <i>3</i>
                    <a href="javascript:;">实在太邪恶！照亮妹纸绝对领域与私处</a>
                    <a href="javascript:;" class="like">赞(964)</a>
                    <span>阅读 (18206)</span>
                </dd>
                <dd>
                    <i>4</i>
                    <a href="javascript:;">没有任何防护措施的摄影师在水下拍到了这些画面</a>
                    <a href="javascript:;" class="like">赞(964)</a>
                    <span>阅读 (18206)</span>
                </dd>
                <dd>
                    <i>5</i>
                    <a href="javascript:;">废灯泡的14种玩法 妹子见了都会心动</a>
                    <a href="javascript:;" class="like">赞(964)</a>
                    <span>阅读 (18206)</span>
                </dd>
            </dl>
        </div>
        <!-- 热门推荐 -->
        <div class="panel hots">
            <div class="title">
                <h3>热门推荐</h3>
            </div>
            <dl>
                <dd>
                    <a href="javascript:;">
                        <img src="./uploads/hots_2.jpg" alt="">
                        <span>星球大战:原力觉醒视频演示 电影票68</span>
                    </a>
                    <a href="javascript:;">
                        <img src="./uploads/hots_3.jpg" alt="">
                        <span>你敢骑吗？全球第一辆全功能3D打印摩托车亮相</span>
                    </a>
                    <a href="javascript:;">
                        <img src="./uploads/hots_4.jpg" alt="">
                        <span>又现酒窝夹笔盖新技能 城里人是不让人活了！</span>
                    </a>
                    <a href="javascript:;">
                        <img src="./uploads/hots_5.jpg" alt="">
                        <span>实在太邪恶！照亮妹纸绝对领域与私处</span>
                    </a>
                </dd>
            </dl>
        </div>
        <!-- 最新发布 -->
        <div class="panel new">
            <div class="title">
                <h3>最新发布</h3>
            </div>
            <dl class="single">
                <dt>
                    <span class="sort">会生活</span>
                    <a href="javascript:;">星球大战：原力觉醒视频演示 电影票68</a>
                </dt>
                <!-- 单图 -->
                <dd>
                    <p class="info">admin 发表于 2015-06-29</p>
                    <p class="brief">星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯</p>
                    <p class="extra">
                        <span class="reading">阅读(3406)</span>
                        <span class="comment">评论(0)</span>
                        <a href="javascript:;" class="like">
                            <i class="glyphicon glyphicon-thumbs-up"></i>
                            <span>赞(167)</span>
                        </a>
                        <a href="javascript:;" class="tags">
                            标签：<span>星球大战</span>
                        </a>
                    </p>
                    <a href="javascript:;" class="thumb">
                        <img src="./uploads/hots_2.jpg" alt="">
                    </a>
                </dd>
            </dl>
            <dl class="multi">
                <dt>
                    <span class="sort">潮科技</span>
                    <a href="javascript:;">你敢骑吗？全球第一辆全功能3D打印摩托车亮相</a>
                </dt>
                <!-- 单图 -->
                <dd>
                    <p class="info">admin 发表于 2015-06-29</p>
                    <p class="thumb">
                        <a href="javascript:;">
								<span>
									<img src="./uploads/new_1.jpg" alt="">
								</span>
								<span>
									<img src="./uploads/new_2.jpg" alt="">
								</span>
								<span>
									<img src="./uploads/new_3.jpg" alt="">
								</span>
								<span>
									<img src="./uploads/new_4.jpg" alt="">
								</span>
                        </a>
                    </p>
                    <p class="brief">RAPID 2015将在加州长滩开幕，据悉，在今年的展会上将会出现全球首辆全功能的3D打印摩托车。除了发动机、各种电子器件、传送带、制动系统及一些螺栓之外，这辆摩托车的其它部分全部都是用ABS塑料打印而成的，而且它可以承载两位成人骑手的重量。 “在3D打印汽车Strati出现之前...</p>
                    <p class="extra">
                        <span class="reading">阅读(3406)</span>
                        <span class="comment">评论(0)</span>
                        <a href="javascript:;" class="like">
                            <i class="glyphicon glyphicon-thumbs-up"></i>
                            <span>赞(167)</span>
                        </a>
                        <a href="javascript:;" class="tags">
                            标签：<span>星球大战</span>
                        </a>
                    </p>
                </dd>
            </dl>
            <dl class="multi">
                <dt>
                    <span class="sort">奇趣事</span>
                    <a href="javascript:;">又现酒窝夹笔盖新技能 城里人是不让人活了！</a>
                </dt>
                <!-- 单图 -->
                <dd>
                    <p class="info">admin 发表于 2015-06-29</p>
                    <p class="thumb">
                        <a href="javascript:;">
								<span>
									<img src="./uploads/new_5.jpg" alt="">
								</span>
								<span>
									<img src="./uploads/new_6.jpg" alt="">
								</span>
								<span>
									<img src="./uploads/new_7.jpg" alt="">
								</span>
								<span>
									<img src="./uploads/new_8.jpg" alt="">
								</span>
                        </a>
                    </p>
                    <p class="brief">继炫腹，炫锁骨以后，城里人又现新技能:酒窝夹笔盖！ 你们城里人活儿真好，又是反手摸肚脐炫腹，锁骨放硬币秀胸的，现在又来酒窝夹笔盖晒脸！别以为我不知道你们在想什么！！哼还让不让人活了 一大波美女晒颜值拼活介个真心赞啊，肤白貌美颜值高，酒窝笔盖夹得好。 小梨涡夹笔盖也是毫不费力呢！...</p>
                    <p class="extra">
                        <span class="reading">阅读(3406)</span>
                        <span class="comment">评论(0)</span>
                        <a href="javascript:;" class="like">
                            <i class="glyphicon glyphicon-thumbs-up"></i>
                            <span>赞(167)</span>
                        </a>
                        <a href="javascript:;" class="tags">
                            标签：<span>炫富</span> /
                            <span>酒窝</span>
                        </a>
                    </p>
                </dd>
            </dl>
            <dl class="single">
                <dt>
                    <span class="sort">奇趣事</span>
                    <a href="javascript:;">实在太邪恶！照亮妹纸绝对领域与私处</a>
                </dt>
                <!-- 单图 -->
                <dd>
                    <p class="info">admin 发表于 2015-06-29</p>
                    <p class="brief">众所周知，岛国是一个比较“变态的国度”。尤其是宅男已经把邪恶发挥到了极致。之前我们就知道大胸器鼠标和裸女造型可乐都是来自于岛国的发明。而如今，这些宅男又有了新的点子，那就是瞄准了女性的短裙。近日，岛国推出了一款会发光的裙子，只因为要照亮妹纸的绝对领域，凸显出妹纸的私处。这画面着实...</p>
                    <p class="extra">
                        <span class="reading">阅读(3406)</span>
                        <span class="comment">评论(0)</span>
                        <a href="javascript:;" class="like">
                            <i class="glyphicon glyphicon-thumbs-up"></i>
                            <span>赞(167)</span>
                        </a>
                        <a href="javascript:;" class="tags">
                            标签：<span>岛国</span> /
                            <span>裙子</span>
                        </a>
                    </p>
                    <a href="javascript:;" class="thumb">
                        <img src="./uploads/new_9.jpg" alt="">
                    </a>
                </dd>
            </dl>
            <dl class="multi">
                <dt>
                    <span class="sort">会生活</span>
                    <a href="javascript:;">水果不止能生着吃 煮着吃更有奇效哟！</a>
                </dt>
                <!-- 单图 -->
                <dd>
                    <p class="info">admin 发表于 2015-06-29</p>
                    <p class="thumb">
                        <a href="javascript:;">
								<span>
									<img src="./uploads/new_10.jpg" alt="">
								</span>
								<span>
									<img src="./uploads/new_11.jpg" alt="">
								</span>
								<span>
									<img src="./uploads/new_12.jpg" alt="">
								</span>
								<span>
									<img src="./uploads/new_13.jpg" alt="">
								</span>
                        </a>
                    </p>
                    <p class="brief">平时吃水果人们都喜欢新鲜的，但是有许多水果煮着吃有神奇的功效哟！比如蒸橙子对治疗咳嗽有很好的效果，痛经的妹子们可以试试红酒煮苹果，秋天干燥可以多喝冰糖雪梨润肺，等等，快来看看这些营养又美味的水果是怎样煮出来的吧！ 白木耳雪梨汤功效：枇杷是止咳润肺的好食材，用白木耳和梨子清热解毒...</p>
                    <p class="extra">
                        <span class="reading">阅读(3406)</span>
                        <span class="comment">评论(0)</span>
                        <a href="javascript:;" class="like">
                            <i class="glyphicon glyphicon-thumbs-up"></i>
                            <span>赞(167)</span>
                        </a>
                        <a href="javascript:;" class="tags">
                            标签：<span>水果</span>
                        </a>
                    </p>
                </dd>
            </dl>
            <dl class="multi">
                <dt>
                    <span class="sort">会生活</span>
                    <a href="javascript:;">沙丁鱼迁徙途中与天敌展开“海底之战”</a>
                </dt>
                <!-- 单图 -->
                <dd>
                    <p class="info">admin 发表于 2015-06-29</p>
                    <p class="thumb">
                        <a href="javascript:;">
								<span>
									<img src="./uploads/new_14.jpg" alt="">
								</span>
								<span>
									<img src="./uploads/new_15.jpg" alt="">
								</span>
								<span>
									<img src="./uploads/new_16.jpg" alt="">
								</span>
								<span>
									<img src="./uploads/new_17.jpg" alt="">
								</span>
                        </a>
                    </p>
                    <p class="brief">据英国《每日邮报》6月28日报道，沙丁鱼迁徙被称作大自然最为壮观的奇景之一。每年，数以亿计的沙丁鱼从南非好望角附近的冷水域沿着东部海岸，一路向北，进入印度洋。期间，海豚、鲸鱼、鲨鱼和海鸟们纷纷赶来饱餐一顿。37岁的法国水下摄影师格雷格·勒克尔(Greg Lecoeur)特地到此，...</p>
                    <p class="extra">
                        <span class="reading">阅读(3406)</span>
                        <span class="comment">评论(0)</span>
                        <a href="javascript:;" class="like">
                            <i class="glyphicon glyphicon-thumbs-up"></i>
                            <span>赞(167)</span>
                        </a>
                        <a href="javascript:;" class="tags">
                            标签：<span>沙丁鱼</span>
                            <span>迁徒</span>
                        </a>
                    </p>
                </dd>
            </dl>
        </div>
    </div>
</template>
<style>
    .swipe {
        overflow: hidden;
        visibility: hidden;
        position: relative;
    }
    .swipe-wrap {
        overflow: hidden;
        position: relative;
    }
    .swipe-wrap > li {
        float:left;
        width:100%;
        position: relative;
    }
    /*主体内容*/
    .content {
        padding: 20px 25px 0;
        margin: 0 300px 0 190px;
    }

    /*焦点图*/
    .content .slider {
        width: 100%;
        margin-bottom: 20px;
        overflow: hidden;
        position: relative;
    }

    .content .slider ul {
        position: relative;
    }

    .content .slider li {
        overflow: hidden;
        position: relative;
    }

    .content .slider li span {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 40px;
        line-height: 20px;
        padding: 10px;
        box-sizing: border-box;
        font-size: 16px;
        color: #FFF;
        background-color: rgba(0, 0, 0, 0.7);
    }

    .content .cursor {
        position: absolute;
        right: 0;
        bottom: 15px;
        width: 200px;
        height: 10px;
        text-align: right;
        margin-right: 10px;
        font-size: 0;
    }

    .content .cursor span {
        display: inline-block;
        width: 9px;
        height: 9px;
        margin: 0 3px;
        box-sizing: border-box;
        border: 1px solid #FFF;
        border-radius: 9px;
        cursor: pointer;
    }

    .content .cursor .active {
        background-color: #FFF;
    }

    .content .arrow {
        position: absolute;
        top: 50%;
        width: 50px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        margin-top: -30px;
        color: #FFF;
        background-color: #000;
        opacity: 0.35;
        font-size: 20px;
        display: none;
    }

    .content .slider:hover .arrow {
        display: block;
    }

    .content .next {
        right: 0;
    }

    .content .arrow:hover {
        opacity: 0.7;
    }

    /*热门*/
    .focus {
        margin-bottom: 10px;
    }

    .focus ul {
        padding-left: 50%;
        overflow: hidden;
    }

    .focus li.large {
        width: 100%;
        height: 266px;
        padding-left: 0;
        margin-left: -100%;
    }

    .focus li {
        width: 50%;
        height: 128px;
        padding-left: 10px;
        margin-bottom: 10px;
        box-sizing: border-box;
        overflow: hidden;
        float: left;
        position: relative;
    }

    .focus li span {
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 40px;
        padding: 4px 10px 0;
        font-size: 12px;
        line-height: 16px;
        color: #FFF;
        background-color: rgba(0, 0, 0, 0.7);
        box-sizing: border-box;
        transition: all linear 0.5s;
    }

    .focus li:hover span {
        background-color: #FF5E52;
    }

    .focus li.large span {
        font-size: 16px;
        line-height: 32px;
    }

    .focus li.large:hover span {
        background-color: rgba(0, 0, 0, 0);
    }

    .focus li img {
        height: 100%;
    }
</style>
<script>

</script>