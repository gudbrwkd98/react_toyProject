
import React, { useLayoutEffect, useRef } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


function SimplePieChart() {
    am4core.useTheme(am4themes_animated);

    const chart = useRef(null);

    useLayoutEffect(()=>{
        let x = am4core.create("chartdiv", am4charts.PieChart);

        // Add data
        x.data = [ {
            "country": "Lithuania",
            "litres": 501.9
        }, {
            "country": "Czechia",
            "litres": 301.9
        }, {
            "country": "Ireland",
            "litres": 201.1
        }, {
            "country": "Germany",
            "litres": 165.8
        }, {
            "country": "Australia",
            "litres": 139.9
        }, {
            "country": "Austria",
            "litres": 128.3
        }, {
            "country": "UK",
            "litres": 99
        }, {
            "country": "Belgium",
            "litres": 60
        }, {
            "country": "The Netherlands",
            "litres": 50
        } ];
        
        // Add and configure Series
        let pieSeries = x.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;
        
        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;

        chart.current = x ;
        
        return () => {
            x.dispose();
        };
    },[])


    return ( 
        <div>
            <h5>AmChart</h5>
            <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        </div>
     );
}

export default SimplePieChart;