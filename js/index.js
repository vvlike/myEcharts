/*
 * @Author: your name
 * @Date: 2022-01-07 15:48:06
 * @LastEditTime: 2022-01-08 22:39:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \01day\js\index.js
 */
$(function() {
    // 监控区域


    (function() {

        $('.monitor .tabs a').on('click', function() {

            $(this).addClass('active').siblings('a').removeClass('active')

            // console.log($(this).index());
            // 选取对应的索引号
            $('.monitor .content').eq($(this).index()).show().siblings('.content').hide()

        })

    })();


    //点位分布
    (function() {

        var mychart = echarts.init(document.querySelector('.pie'));
        var option = {

            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            color: ['#B483E5', '#8931E3', '#29B4C1', '#C939B4', '#121CAA', '#1A744B', '#274336', '#DBD162'],
            series: [

                {
                    name: '点位模式',
                    type: 'pie',
                    radius: [10, 65],
                    center: ['50%', '50%'],
                    roseType: 'radius',

                    itemStyle: {
                        borderRadius: 1
                    },
                    data: [
                        { value: 30, name: '程阳' },
                        { value: 25, name: '平铺' },
                        { value: 20, name: '平岩' },
                        { value: 24, name: '马鞍' },
                        { value: 30, name: '平坦' },
                        { value: 28, name: '吉昌' },
                        { value: 22, name: '董寨' },
                        { value: 16, name: '平董' }
                    ],
                    label: {
                        color: '#fff',
                        fontSize: 10,
                        fontStyle: 'normal'
                    },
                    labelLine: {

                        length: 4,
                        length2: 5
                    }
                }
            ]
        };

        mychart.setOption(option)
            //当浏览器缩放的时候 图表也等比例缩放

        window.addEventListener('resize', function() {

            mychart.resize()
        })


    })();

    //柱形图
    (function() {

        // 初始化实例对象
        var mychart = echarts.init(document.querySelector('.bar'))
            //设置配置项
        var option = {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [

                { offset: 0, color: '#3BF2B4' }, //起始颜色0
                { offset: 1, color: '#031F17' } //结束颜色1
            ]),

            tooltip: {
                trigger: 'item',
                /* axisPointer: {
                    type: 'shadow'
                } */
                borderWidth: 2,
                backgroundColor: 'pink',
                textStyle: { width: 100, height: 10 }
            },

            grid: {
                left: '0%',
                right: '3%',
                bottom: '3%',
                top: '4%',
                containLabel: true,
                show: true,
                borderColor: 'rgba(0,240,255,0.3)'
            },
            xAxis: [{
                type: 'category',
                data: ['大寨', '平铺', '平岩', '马鞍', '平坦', '吉昌', '董寨', '平董'],
                axisTick: {
                    //柱子在刻度中间
                    alignWithLabel: false,
                    //把x轴的刻度隐藏
                    show: false
                },
                axisLable: {
                    color: '#4c9bfd'
                },
                axisLine: {

                    lineStyle: {

                        color: 'rgba(0,240,255,0.3)'
                    }
                }

            }],
            yAxis: [{
                type: 'value',
                axisTick: {
                    //柱子在刻度中间
                    alignWithLabel: false,
                    //把x轴的刻度隐藏
                    show: false
                },
                axisLable: {
                    color: '#4c9bfd'
                },
                axisLine: {

                    lineStyle: {

                        color: 'rgba(0,240,255,0.3)'
                    }
                },
                splitLine: {

                    lineStyle: {
                        color: 'rgba(0,240,255,0.3)'
                    }
                }


            }],
            series: [{
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [1600, 1500, 1300, 1100, { value: 1100, name: '平坦', itemStyle: { color: 'pink' }, emphasis: { itemStyle: { color: 'pink' } }, tooltip: { extraCssText: 'opacity:0' } }, 800, 700, 500]
            }]
        };
        //实例化配置项
        mychart.setOption(option)
        window.addEventListener('resize', function() {

            mychart.resize()
        })

    })();

    //销售统计模块
    (function() {

        // (1)准备数据
        var data = {
            year: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ],
            quarter: [
                [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
                [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
            ],
            month: [
                [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
                [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
            ],
            week: [
                [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
                [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
            ]
        };
        // 1.实例花对象
        var mychart = echarts.init(document.querySelector('.line'))
            //2.设置配置项
        var option = {
            color: ['#00f2f1', '#ed3f35'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                right: '10%',
                textStyle: { color: '#4c9bfd' },
                data: ['预期销售额', '实际销售额']
            },
            grid: {
                top: "20%",
                left: '3%',
                right: '4%',
                bottom: '3%',
                show: true,
                borderColor: '#012f4a',
                containLabel: true
            },

            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                //去除刻度
                axisTick: {
                    show: false
                },
                //修饰标签颜色
                axisLabel: {
                    color: '#4c9bfd'
                },
                //去除x坐标轴的颜色
                axisLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                //去除刻度
                axisTick: {
                    show: false
                },
                //修饰标签颜色
                axisLabel: {
                    color: '#4c9bfd'
                },
                //修改y轴分割线

                splitLine: {
                    lineStyle: {
                        color: '#012f4a'
                    }
                }
            },
            series: [{
                    name: '预期销售额',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120]
                },
                {
                    name: '实际销售额',
                    type: 'line',
                    //是否让线条圆滑展示
                    smooth: true,
                    stack: 'Total',
                    data: [40, 64, 191, 234, 290, 330, 310, 213, 180, 200, 180, 79]
                }

            ]
        };
        //3.把配置的数据给实例对象
        mychart.setOption(option)

        //4.tab栏切换制作
        $('.sales .caption').on('click', 'a', function() {
            //获取的包含了h3
            index = $(this).index() - 1
                //点击当前a高亮显示
            $(this).addClass('active').siblings('a').removeClass('active')
                //拿到a的自定义属性
                // console.log(this.dataset.type);
                // console.log(data[this.dataset.type]);
            var arr = data[this.dataset.type];
            option.series[0].data = arr[0]
            option.series[1].data = arr[1]
                //重新渲染 把重新配置好的数据给实例对象
            mychart.setOption(option)
        })

        //5.tab栏自动切换1s
        var as = $('.sales .caption a');
        var index = 0;
        var timer = setInterval(function() {
                index++;
                if (index >= 4) {
                    index = 0
                }
                as.eq(index).click()

            }, 1000)
            //鼠标经过关闭定时器  经过和离开触发的
        $('.sales').hover(function() {

            clearInterval(timer)
        }, function() {
            clearInterval(timer)
            timer = setInterval(function() {
                index++;
                if (index >= 4) {
                    index = 0
                }
                as.eq(index).click()

            }, 1000)
        })

    })();

    //销售渠道雷达图
    (function() {

        //1.实例化对象
        var mychart = echarts.init(document.querySelector('.radar'))
            //2.指定配置
            // Schema:
            // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
        const dataBJ = [
            [155, 80, 156, 0.46, 88, 70, 100],

        ];

        /* 
                const lineStyle = {
                    width: 1,
                    opacity: 0.5
                }; */
        var option = {
            backgroundColor: '#161627',
            tooltip: {
                show: true
            },
            position: ['60%', '10%'],
            radar: {
                radius: '60%',
                indicator: [
                    { name: '广州', max: 150 },
                    { name: '北京', max: 140 },
                    { name: '上海', max: 180 },
                    { name: '杭州', max: 15 },
                    { name: '山东', max: 120 },
                    { name: '西安', max: 100 }
                ],
                shape: 'circle',
                splitNumber: 4,
                axisName: {
                    color: '#4c9bfd'
                },
                //分隔圆圈线条的样式
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.5)',

                    }
                },
                splitArea: {
                    show: false
                },
                //坐标轴的线
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.5)'
                    }
                }
            },
            series: [{
                    name: 'Beijing',
                    type: 'radar',
                    //填充区域的线条颜色
                    lineStyle: {
                        normal: {
                            color: '#fff',
                            width: 1,
                            opacity: 0.5
                        }
                    },
                    data: dataBJ,
                    //设置圆点大小symbolSide（）
                    symbolSize: 4,
                    //让远点展现数据
                    label: {
                        show: true,
                        fontSize: 10
                    },

                    symbol: 'circle',
                    //设置圆点样式
                    itemStyle: {
                        color: '#fff'
                    },
                    //修饰区域的背景颜色
                    areaStyle: {
                        color: 'rgba(238,197,102,0.6)'
                    }
                },

            ]
        };
        //3.把数据给对象
        mychart.setOption(option)
        window.addEventListener('resize', function() {

            mychart.resize()
        })

    })();


    //饼形图销售
    (function() {

        var mycharts = echarts.init(document.querySelector('.gauge'))

        var option = {

            series: [{
                name: '销售进度',
                type: 'pie',
                //大小
                radius: ['130%', '150%'],
                //鼠标经过不偏移
                hoverOffset: 0,
                //移动位置  水平和垂直
                center: ['48%', '80%'],
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },

                labelLine: {
                    show: false
                },
                //起始角度（注意不是旋转角度）  默认是90
                startAngle: 180,
                data: [{
                        value: 100,
                        itemStyle: {

                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [

                                { offset: 0, color: '#00c9e0' }, //起始颜色0
                                { offset: 1, color: '#005fc1' } //结束颜色1
                            ])

                        }
                    },
                    {
                        value: 100,
                        itemStyle: {

                            color: '#12274d'

                        }
                    },
                    {
                        value: 200,
                        itemStyle: {
                            color: "transparent"
                        }
                    }
                ]
            }]
        };

        mycharts.setOption(option)
        window.addEventListener('resize', function() {

            mycharts.resize()
        })

    })();


    //全国热榜
    (function() {

        // 1. 准备相关数据
        var hotData = [{
                city: "北京", // 城市
                sales: "25, 179", // 销售额
                flag: true, //  上升还是下降
                brands: [
                    //  品牌种类数据
                    { name: "可爱多", num: "9,086", flag: true },
                    { name: "娃哈哈", num: "8,341", flag: true },
                    { name: "喜之郎", num: "7,407", flag: false },
                    { name: "八喜", num: "6,080", flag: false },
                    { name: "小洋人", num: "6,724", flag: false },
                    { name: "好多鱼", num: "2,170", flag: true }
                ]
            },
            {
                city: "河北",
                sales: "23,252",
                flag: false,
                brands: [
                    { name: "可爱多", num: "3,457", flag: false },
                    { name: "娃哈哈", num: "2,124", flag: true },
                    { name: "喜之郎", num: "8,907", flag: false },
                    { name: "八喜", num: "6,080", flag: true },
                    { name: "小洋人", num: "1,724", flag: false },
                    { name: "好多鱼", num: "1,170", flag: false }
                ]
            },
            {
                city: "上海",
                sales: "20,760",
                flag: true,
                brands: [
                    { name: "可爱多", num: "2,345", flag: true },
                    { name: "娃哈哈", num: "7,109", flag: true },
                    { name: "喜之郎", num: "3,701", flag: false },
                    { name: "八喜", num: "6,080", flag: false },
                    { name: "小洋人", num: "2,724", flag: false },
                    { name: "好多鱼", num: "2,998", flag: true }
                ]
            },
            {
                city: "江苏",
                sales: "23,252",
                flag: false,
                brands: [
                    { name: "可爱多", num: "2,156", flag: false },
                    { name: "娃哈哈", num: "2,456", flag: true },
                    { name: "喜之郎", num: "9,737", flag: true },
                    { name: "八喜", num: "2,080", flag: true },
                    { name: "小洋人", num: "8,724", flag: true },
                    { name: "好多鱼", num: "1,770", flag: false }
                ]
            },
            {
                city: "山东",
                sales: "20,760",
                flag: true,
                brands: [
                    { name: "可爱多", num: "9,567", flag: true },
                    { name: "娃哈哈", num: "2,345", flag: false },
                    { name: "喜之郎", num: "9,037", flag: false },
                    { name: "八喜", num: "1,080", flag: true },
                    { name: "小洋人", num: "4,724", flag: false },
                    { name: "好多鱼", num: "9,999", flag: true }
                ]
            }
        ];
        var supHTML = '';
        //遍历数组
        $.each(hotData, function(index, item) {
            // console.log(item);
            //模板字符串
            supHTML += `<li><span>${item.city}</span><span>${item.sales}<s class=${item.flag?"icon-up":"icon-down"}></s></span></li>`

        })
        $('.sup').html(supHTML)

        //3.当鼠标经过当前的小li要高亮显示
        $('.province .sup').on("mouseenter", 'li', function() {
                index = $(this).index();
                render($(this))
            })
            //设置第一个x小li为经过状态
        var lis = $('.province .sup li');
        lis.eq(0).mouseenter()
        var index = 0
            //开启定时器
        var timer = setInterval(function() {
            index++
            if (index >= 5) {
                index = 0
            }
            render(lis.eq(index))
        }, 2000)

        //鼠标经过停止定时器 离开恢复
        $('.province .sup').hover(function() {

                clearInterval(timer)
            },
            //鼠标离开事件
            function() {
                clearInterval(timer)
                timer = setInterval(function() {
                    index++
                    if (index >= 5) {
                        index = 0
                    }
                    render(lis.eq(index))
                }, 2000)

            }
        );

        function render(that) {
            that.addClass('active').siblings('li').removeClass('active')

            //拿到当前城市的品牌对象
            // console.log($(this).index());
            // console.log(hotData[$(this).index()].brands)
            var subHTML = '';
            $.each(hotData[that.index()].brands, function(index, item) {

                // console.log(item);
                subHTML += `<li><span>${item.name}</span><span>${item.num}<s class=${item.flag?"icon-up":"icon-down"}></s></span></li>`

            })
            $('.sub').html(subHTML)

        }

    })();



})