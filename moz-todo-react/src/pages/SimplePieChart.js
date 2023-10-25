
import React, { useLayoutEffect, useRef } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


function SimplePieChart() {
    am4core.useTheme(am4themes_animated);

    const chart = useRef(null);

    useLayoutEffect(()=>{
        let x = am4core.create("chartdiv", am4charts.PieChart);

        
    },[])


    return ( 
        <div>
            <h5>AmChart</h5>
        </div>
     );
}

export default SimplePieChart;