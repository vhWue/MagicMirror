const createElement = function (type, id) {
    const element = document.createElement(String(type));
    element.id = id;

    return element;
}