$(document).ready(function() {
    $("#empty-list").submit(function(event) {
        event.preventDefault();
        var items = ["item1", "item2", "item3", "item4", "item5"];

        var itemsCap = items.map(function(item) {
            var inputThis = $("input#" + item).val();
            return inputThis.toUpperCase();
        });
        console.log(itemsCap)
        var sorted = itemsCap.length();

        sorted.forEach(function(sort) {
            var newList = ("<li>" + sort + "</li>");
            $("ul").append(newList);
        });

    });

});