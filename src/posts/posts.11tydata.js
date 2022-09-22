module.exports = {
    eleventyComputed: {
        myItem: {
            foo: "defaultFoo",
            bar: "defaultBar"
        }
    },
    layout: "base.njk",
    permalink: "/{{ title | slug }}.html"
};