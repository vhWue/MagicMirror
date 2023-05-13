Module.register("MMM-Grid",{

	getStyles: function () {
		return [this.file("styles.css"),
		]
	},

	getScripts: function (){
		return ["modules/"+this.name+"/node_modules/chart.js/dist/chart.umd.js",
			"modules/" + this.name + "/node_modules/apexcharts/dist/apexcharts.js",


		]
		//return []
	},

	start: function () {
this.daten = [30.68423299004213, 36.01889984297201, 34.20487061357073, 30.427450324494712, 41.693064888277166, 42.56397927432032, 33.71862159413332,
	38.26417037151577, 34.19394790525248, 40.66131893194278, 31.636931868531664, 38.34434555136196, 34.33381342234313, 39.279347072937694, 30.52492685628608, 33.829651898870965,
	42.27111553564563, 41.825447663423015, 40.36878863091511, 42.800917569677794, 31.019105393376936, 40.838032269202535, 29.561777374996094, 39.39091231723869, 38.0332480580201,
	35.03270472845015, 32.84139062517186, 37.30629970311674, 33.6104586739758, 37.710329256400266, 41.63038544640934, 35.19434307689882, 30.507710100468226, 39.80218830720712,
	32.53974090105706, 30.450494777855927, 41.0478821931898, 29.90219124358234, 36.68874742010813, 34.91253661988814, 33.14790010547597, 31.07451862150982, 32.56995731973278,
	42.018856263427, 41.74386426867228, 30.633090484797894, 35.36622761451232, 29.21152971262292, 35.3374376227518, 34.34151072059024, 37.93673797460201,
	38.98819187336235, 39.05078253022888, 31.52883885175377, 39.52633589184298, 39.6556740970801, 41.229074741699, 30.821011600931965, 42.28744889964509,
	42.431066520346315, 37.95265135907935, 37.52243477905119, 30.55619822133893, 35.32651219181992, 40.946291739161185, 33.17467632274405, 42.022222414325874,
	30.85822648040998, 33.86711716603425, 31.082844137032443, 41.434734949249784, 39.28120275486949, 42.96221015428261, 40.93302929106208, 29.58061135067937, 38.03116500577668, 32.062695604586655,
	34.14704699864603, 41.503979029389235, 32.972337841988555, 29.447077522479896, 30.06770257302025, 37.410624068]
	},

	getTemplate: function (){
		return "grid.njk";
	},

	getTemplateData: function () {
		return {
			test:"test"
		};
	},

	notificationReceived(notification, payload, sender) {
		switch (notification){
			case "MODULE_DOM_CREATED":



				const ctx = document.getElementById('myChart');
				const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
				gradient.addColorStop(0, 'rgba(6,122,212,0.65)');
				gradient.addColorStop(1, 'rgba(39,51,61,0.38)');


				const totalDuration = 4000;
				const delayBetweenPoints = totalDuration / this.daten.length;
				const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
				const animation = {
					x: {
						type: 'number',
						easing: 'linear',
						duration: delayBetweenPoints,
						from: NaN, // the point is initially skipped
						delay(ctx) {
							if (ctx.type !== 'data' || ctx.xStarted) {
								return 0;
							}
							ctx.xStarted = true;
							return ctx.index * delayBetweenPoints;
						}
					},
					y: {
						type: 'number',
						easing: 'linear',
						duration: delayBetweenPoints,
						from: previousY,
						delay(ctx) {
							if (ctx.type !== 'data' || ctx.yStarted) {
								return 0;
							}
							ctx.yStarted = true;
							return ctx.index * delayBetweenPoints;
						}
					}
				};

				ctx.style.maxHeight="400px"
				this.chart = new Chart(ctx,{
					type: 'line',
					data: {
						labels: [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
						,
						datasets: [{
							label: '# of Votes',

							data:this.daten,
							borderWidth: 2,
							borderColor:'#0091ff',
							fill:true,
							backgroundColor:gradient,
							tension:0.6,
							//borderRadius:10
							pointRadius:0
						}]
					},
					options: {
						animation,
						interaction: {
							intersect: false
						},
						scales: {
							y: {
								suggestedMin: 25.00,
								//display:false,
								grid:{
									color: 'rgba(16,20,23,0.27)',
									tickLength:0,
									//display:false
								},
								ticks:{
									maxTicksLimit:5,
									color:'#868b88',
									align:'end',
									padding:20,
									//display:false,
									font:{
										size:11,
										weight:200,

									},

									callback:(value,index,values)=>{
										return new Intl.NumberFormat('de-DE',{
											style:'currency',
											currency:'EUR',
											maximumSignificantDigits:5
										}).format(value);
									}
								}
							},
							x:{
								//display:false,
								grid:{
									display:false
								}
							}

						},

						plugins:{
							legend:{
								display: false
							}
						}
					}
				})




		}
	}
})
