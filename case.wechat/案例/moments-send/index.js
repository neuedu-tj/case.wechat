//ts = timeStamp  
var sys = [{
		"title": "A1",
		"ts": "1505367977866"
	},
	{
		"title": "B1",
		"ts": "1505367980247"
	},
	{
		"title": "C1",
		"ts": "1505367983232"
	},
	{
		"title": "D1",
		"ts": "1505367996704"
	},
	{
		"title": "E1",
		"ts": "1505367999421"
	}, //最后一个调换了
]
var server = [{
		"title": "A2",
		"ts": "1505368003421"
	},
	{
		"title": "B2",
		"ts": "1505368003431"
	},
	{
		"title": "C2",
		"ts": "1505368132406"
	},
	{
		"title": "D2",
		"ts": "1505368138858"
	},
	{
		"title": "E2",
		"ts": "1505368145574"
	},
]

var self = []; //
var curr = [];  //当前未显示在页面的临时数组
var storage = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];