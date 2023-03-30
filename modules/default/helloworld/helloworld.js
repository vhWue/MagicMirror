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
        arr: ["haus", "garten"]
    },

    start: function () {
        this.arr = ["haus", "garten", "essen"];
        this.test = "das ist ein test";
    },

    getTemplate: function () {
        return "helloworld.njk";
    },

    getTemplateData: function () {
        return this.config;
    },

    getDom: function () {

        const container = document.createElement("div");
        container.id = "container";
        container.innerHTML = "Das ist ein Container";

        return container
    },


    notificationReceived(notification, payload, sender) {
        switch (notification) {
            case "DOM_OBJECTS_CREATED":
                this.config.text = "Das ist der neue text";
                this.config.arr.push("neues Item")
                setTimeout(() => {
                    this.updateDom(2000)
                }, 5000)
        }
    }

})
