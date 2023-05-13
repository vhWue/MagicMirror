/* MagicMirror²
 * Module: HelloWorld
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */
Module.register("helloworld", {
    // Default module config.
    defaults: {
        text: "Hello World!",
        input: "Das ist mein eigener Input",
        arr: ["haus", "garten"],
        country: "Deutschland"
    },

    getStyles: function () {
        return [
            this.file("styles.css"),
			"modules/default/" + this.name + "/node_modules/apexcharts/dist/apexcharts.css",
        ]
    },
    getScripts: function () {
        return [
            this.file("helperClasses.js"),
			"modules/default/" + this.name + "/node_modules/apexcharts/dist/apexcharts.js",
        ]
    },

    start: function () {
        this.eigenesArray = ["haus", "garten", "essen"];
        this.test = "das ist ein test";
    },


	getDom: function (){
		const wrapper = document.createElement("div")

		const wrapperEl = document.createElement("div")
		wrapperEl.style.width='700px'
		wrapperEl.style.height='300px'

		wrapper.appendChild(wrapperEl)
		const canvas = document.createElement("canvas")
		wrapperEl.appendChild(canvas)
		canvas.id="myChart"

		canvas.style.height="300px"





		return wrapper
	},

	notificationReceived(notification, payload, sender) {
		switch (notification){
			case "DOM_OBJECTS_CREATED":
				const options = {

					chart: {
						type: 'bar',

					},
					series: [{
						name: 'sales',
						data: [30,40,35,50,49,60,70,91,125]
					}],
					xaxis: {
						categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
					}
				}

				const chart = new ApexCharts(document.getElementById("myChart"), options);
				console.log(chart)
				chart.render();



		}
	}


})
