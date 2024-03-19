var set1 = [{x:10, y:8.04}, {x:8, y:6.95}, {x:13, y:7.58}, {x:9, y:8.81}, {x:11, y:8.33}, {x:14, y:9.96}, {x:6, y:7.24}, {x:4, y:4.26}, {x:12, y:10.84}, {x:7, y:4.82}, {x:5, y:5.68}];

function barChart(data, columnInUse, fillColor) {
    var svg = d3.select("#chart").append("svg").attr("width", 400).attr("height", 400);

    var yScale = d3.scaleLinear().domain([0, 20]).range([0, 300]);

    svg.append("text").text(columnInUse).attr("x", 10).attr("y", 10);

    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("y", function(d) { return 200 - yScale(d[columnInUse]); })
        .attr("width", 18)
        .attr("x", function(d, i) { return i * 20; })
        .attr("height", function(d) { return yScale(d[columnInUse]); })
        .attr("fill", fillColor)
        .on("mouseover", function() {
            d3.select(this).attr("fill", "black");
            var x = parseInt(d3.select(this).attr("x"));
            var y = parseInt(d3.select(this).attr("y"));
            svg.append("text")
                .text("The value is " + d3.select(this).data()[0][columnInUse])
                .attr("x", x)
                .attr("y", y)
                .attr("class", "tooltip")
                .attr("font-size", "24px")
                .attr("fill", "red");
        })
        .on("mouseout", function() {
            d3.select(this).attr("fill", fillColor);
            svg.selectAll(".tooltip").remove();
        });
}

barChart(set1, "y", "blue");


