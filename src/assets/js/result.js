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
					color: ['#f1fcf9']
				}
			},
			splitLine : {
                            show : true,
                            lineStyle : {
                                width : 1,
                                color : '#6cdab9' // 图表背景网格线的颜色
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
						color: '#55ffdb',
						borderColor: '#b8fff0',
						borderWidth: 3,
					}
				},
				lineStyle: {
                                    color:"#5eeeeb" // 图表中各个图区域的边框线颜色
                                },
				areaStyle: {
					normal: {
						color: '#8ce7cc'
					}
				},
				
				
			}],
	
		}]
	};
	myChart.setOption(option);
	myChart.resize()
}


