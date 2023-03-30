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
        arr: ["haus", "garten", "essen"],
        position: 0
    },

    getTemplate: function () {
        return "helloworld.njk";
    },

    getTemplateData: function () {
        return this.config;
    },

    notificationReceived: function (notification, payload, sender) {
        if (notification === "DOM_OBJECTS_CREATED") {

            setInterval(() => {
                this.updateDom();
                console.log(this.config.position++);
                this.config.position++
            }, 1000);




        }


    }
})
