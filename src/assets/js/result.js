function JieGuo(){
	var clientW = document.querySelector("body").clientWidth
	document.querySelector("#main").style.height = 4.8*100 * (clientW/ 750) + "px" 
	
	var myChart = echarts.init(document.getElementById('main'));
	var option = {
		tooltip: {},
		radar: {
			// shape: 'circle',
			indicator: [{
					name: '影响力',
					max: 100
				},
				{
					name: '号召力',
					max: 100
				},
				{
					name: '领导能力',
					max: 100
				},
				{
					name: '基础知识',
					max: 100
				},
				{
					name: '谈判能力',
					max: 100
				},
				{
					name: '销售能力',
					max: 100
				},
				{
					name: '应变能力',
					max: 100
				},
				{
					name: '交流能力',
					max: 100
				}
			],
			name: {
				textStyle: {
					fontSize: 12,
					color:['#666666']
				}
			},
			splitArea: {
				areaStyle: {
					color: ['#ffffff']
				}
			},
			splitLine : {
                            show : true,
                            lineStyle : {
                                width : 1,
                                color : '#ca91db' // 图表背景网格线的颜色
                            }
                        }
		},
		series: [{
			name: '评测结果',
			type: 'radar',
			// areaStyle: {normal: {}},
			data: [{
				value: [85, 79, 90, 85, 70,30,50,90,35],
				name: '能力',
				symbol: 'circle',
				symbolSize: 13,
				itemStyle: {
					
					normal: {
						opacity:0,
						color: '#55ffdb',
						borderWidth: 0,
					}
				},
				lineStyle: {
                                    color:"#ffffff" // 图表中各个图区域的边框线颜色
                                },
				areaStyle: {
					normal: {
						color: '#ca91db'
					}
				},
				
				
			}],
	
		}]
	};
	myChart.setOption(option);
	myChart.resize()
}


