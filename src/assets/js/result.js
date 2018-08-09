function JieGuo(){
	var clientW = document.querySelector("body").clientWidth
	document.querySelector("#main").style.height = 5*100 * (clientW/ 750) + "px" 
	
	var myChart = echarts.init(document.getElementById('main'));
	var option = {
		tooltip: {},
		radar: {
			// shape: 'circle',
			indicator: [{
					name: '软件设计',
					max: 100
				},
				{
					name: '产品规划',
					max: 100
				},
				{
					name: '软件过程',
					max: 100
				},
				{
					name: '通用技能',
					max: 100
				},
				{
					name: '战略能力',
					max: 100
				}
			],
			name: {
				textStyle: {
					fontSize: 14,
					color:['#666666']
				}
			},
			splitArea: {
				areaStyle: {
					color: ['#ffffff']
				}
			},
	
		},
		series: [{
			name: '评测结果',
			type: 'radar',
			// areaStyle: {normal: {}},
			data: [{
				value: [85, 79, 90, 85, 70],
				name: '能力',
				symbol: 'circle',
				symbolSize: 15,
				itemStyle: {
					normal: {
						color: '#8dd364',
						borderColor: '#8dd364'
					}
				},
				areaStyle: {
					normal: {
						color: '#e8f6e0'
					}
				}
			}],
	
		}]
	};
	myChart.setOption(option);
	myChart.resize()
}


