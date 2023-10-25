import React, { useLayoutEffect, useRef } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function GrapePage(props) {
    const chart = useRef(null);
    let iconPath = "M421.976,136.204h-23.409l-0.012,0.008c-0.19-20.728-1.405-41.457-3.643-61.704l-1.476-13.352H5.159L3.682,74.507 C1.239,96.601,0,119.273,0,141.895c0,65.221,7.788,126.69,22.52,177.761c7.67,26.588,17.259,50.661,28.5,71.548  c11.793,21.915,25.534,40.556,40.839,55.406l4.364,4.234h206.148l4.364-4.234c15.306-14.85,29.046-33.491,40.839-55.406  c11.241-20.888,20.829-44.96,28.5-71.548c0.325-1.127,0.643-2.266,0.961-3.404h44.94c49.639,0,90.024-40.385,90.024-90.024  C512,176.588,471.615,136.204,421.976,136.204z M421.976,256.252h-32c3.061-19.239,5.329-39.333,6.766-60.048h25.234  c16.582,0,30.024,13.442,30.024,30.024C452,242.81,438.558,256.252,421.976,256.252z";

    useLayoutEffect(() => {
      let x = am4core.create("chartdiv", am4charts.SlicedChart);
  
     
        x.hiddenState.properties.opacity = 0; // this makes initial fade in effect
        x.paddingLeft = 150;

        x.data = [{
            "name": "C",
            "value": 30
        },{
            "name": "B",
            "value": 25, 
        }, {
            "name": "A",
            "value": 45
        }];

        let series = x.series.push(new am4charts.PictorialStackedSeries());
        series.dataFields.value = "value";
        series.dataFields.category = "name";
        series.alignLabels = true;
        // this makes only A label to be visible
        series.labels.template.propertyFields.disabled = "disabled";
        series.ticks.template.propertyFields.disabled = "disabled";


        series.maskSprite.path = iconPath;
        series.ticks.template.locationX = 1;
        series.ticks.template.locationY = 0;

        series.labelsContainer.width = 100;

        x.legend = new am4charts.Legend();
        x.legend.position = "top";
        x.legend.paddingRight = 160;
        x.legend.paddingBottom = 40;
        let marker = x.legend.markers.template.children.getIndex(0);
        x.legend.markers.template.width = 40;
        x.legend.markers.template.height = 40;
        marker.cornerRadius(20,20,20,20);
  
      chart.current = x;
  
      return () => {
        x.dispose();
      };
    }, []);
    
    return ( 
        <div>
            <h5>AmChart</h5>
            <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        </div>
     );
}

export default GrapePage;