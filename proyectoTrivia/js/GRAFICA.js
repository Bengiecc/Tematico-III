var margen = {top: 90, right: 5, bottom: 90, left: 200},
    width = 1000 - margen.left - margen.right,
    height = 600 - margen.top - margen.bottom;

var svg = d3.select("body").append("svg")
    .attr("width", width + margen.left + margen.right)
    .attr("height", height + margen.top + margen.bottom)
    .append("g")
    .attr("transform", "translate(" + margen.left + "," + margen.top + ")");

d3.csv("ACCIDENTES.csv", function(error, datos){

   /*
    var anio = [1914,1937,1938,1943,1944,1948,1949,1950,1951,1953,1956,1958,1959,1961,1962,1963,1964,1965
                ,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1990,1991,1992 
                ,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010 
                ,2011,2012,2013,2014,2015,2016];
    pack.value(function(d){
        return +d["anio" + anio[i]];
    });
   */


    var datos = datos.filter(function(d){return d.Aniodeladefuncion == '2017';});
    
    var elementos = Object.keys(datos[0])
        .filter(function(d){
            return ((d != "Aniodeladefuncion") & (d != "Descripciondeentidadderesidencia"));
        });

    var seleccion = elementos[0];

    var y = d3.scale.linear()
            .domain([0, d3.max(datos, function(d){
                return +d[seleccion];
            })])
            .range([height, 0]);

    var x = d3.scale.ordinal()
            .domain(datos.map(function(d){ return d.Descripciondeentidadderesidencia;}))
            .rangeBands([0, width]);


    var ejesx = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var ejesy = d3.svg.axis()
        .scale(y)
        .orient("left");

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(ejesx)
        .selectAll("text")
        .style("font-size", "10px")
        .style("text-anchor", "end")
        .attr("dx", "-.7em")
        .attr("dy", "-.50em")
        .attr("transform", "rotate(-80)" );


    svg.append("g")
        .attr("class", "y axis")
        .call(ejesy);

    svg.selectAll("grafica")
        .data(datos)
        .enter()
        .append("rect")
        .attr("class","grafica")
        .attr("width", width/datos.length)
        .attr("height", function(d){
            return height - y(+d[seleccion]);
        })
        .attr("x", function(d, i){
            return (width / datos.length) * i ;
        })
        .attr("y", function(d){
            return y(+d[seleccion]);
        })        
        .append("titulo")
        .text(function(d){
            return d.Descripciondeentidadderesidencia + " : " + d[seleccion];
        });

    var selector = d3.select("#despegable")
        .append("select")
        .attr("id","despe")
        .on("change", function(d){
            seleccion = document.getElementById("despe");

            y.domain([0, d3.max(datos, function(d){
                return +d[seleccion.value];})]);

            ejesy.scale(y);

    
        d3.selectAll(".grafica")
            .transition()
            .attr("height", function(d){
                    return height - y(+d[seleccion.value]);
                })
                .attr("x", function(d, i){
                    return (width / datos.length) * i ;
                })
                .attr("y", function(d){
                    return y(+d[seleccion.value]);
                })
                .ease("linear")
                .select("titulo")
                .text(function(d){
                    return d.Descripciondeentidadderesidencia + " : " + d[seleccion.value];
                });
      
            d3.selectAll("g.y.axis")
                .transition()
                .call(ejesy);

         });
    
    selector.selectAll("option")
      .data(elementos)
      .enter().append("option")
      .attr("value", function(d){
        return d;
      })
      .text(function(d){
        return d;
      })


});