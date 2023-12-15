import React from "react";
import {
    chart1_options
  } from "variables/charts";

import ApiCallComponent from "request/ApiCallComponent"

const dataretirval = async () => {
  let response = await ApiCallComponent({'requestType':'POST','apiPath':'predKmaxRserver','body':{}});
  console.log(response);
  let timedata = response["TimeSeries"]['134']['Times']
  let DETumor_g = response["TimeSeries"]["134"]["DETumor_g"]
  // console.log([timedata,DETumor_g])
  return {timedata:timedata,DETumor_g:DETumor_g}
}

// let data = await dataretirval();
// let DETumor_g = data.DETumor_g
// let timedata = data.timedata
// console.log("222222222222222222222222222222222222222222222222222222")
// console.log([timedata,DETumor_g])
// let timedata = response["TimeSeries"]["134"]["Times"]
// let DETumor_g = response["TimeSeries"]["134"]["DETumor_g"]

// React.useContext()

let chartExample1 = {
    data1: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
        datasets: [
          {
            label: "My First dataset",
            type: "line",
            fill: false,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
            lineTension: 0.4
          },
          {
            label: "BandTop",
            type: "line",
            backgroundColor: "rgb(75, 192, 255, 0.5)",
            borderColor: "transparent",
            pointRadius: 0,
            fill: 0,
            tension: 0,
            data: [105, 75, 95, 75, 90, 65, 95, 65, 95, 85, 115, 105],
            // yAxisID: 'y',
            // xAxisID: 'x'
            lineTension: 0.4
          },
          {
            label: "BandBottom",
            type: "line",
            backgroundColor: "rgb(75, 192, 255, 0.5)",
            borderColor: "transparent",
            pointRadius: 0,
            fill: 0,
            tension: 0,
            data: [100-5, 70-5, 90-5, 70-5, 85-5, 60-5, 75-5, 60-5, 90-5, 80-5, 110-5, 100-5],
            // yAxisID: 'y',
            // xAxisID: 'x'
            lineTension: 0.4
          }
        ],
      };
    },
    data2: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
      
      return {
        labels: [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
        datasets: [
          {
            label: "DE_Tumor_g",
            // fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 0,
            data: [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
          },
        ],
      };
    },
    data3: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
        datasets: [
          {
            label: "My First dataset",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [900, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130],
          },
        ],
      };
    },
    options: chart1_options,
  };

  export default chartExample1;

  export function updateChart2(labels, data) {
    chartExample1.data2 = (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
      
      return {
        labels: labels,
        datasets: [
          {
            label: "Delivery Efficiency of Tumor",
            // fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 0,
            data: data,
          },
        ],
      };
    }
    return chartExample1;
  }