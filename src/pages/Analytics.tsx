import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const Analytics: React.FC = () => {
  useEffect(() => {
    const options: ApexCharts.ApexOptions = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }],
      xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    };

    const chart = new ApexCharts(document.querySelector("#chart") as HTMLElement, options);
    chart.render();

    const options2: ApexCharts.ApexOptions = {
      series: [{
        name: 'Submitted',
        data: [44, 55, 41, 37, 22, 43, 21]
      }, {
        name: 'Pending',
        data: [53, 32, 33, 52, 13, 43, 32]
      },],
        chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%'
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      title: {
        text: '100% Stacked Bar'
      },
      xaxis: {
        categories: ["Assamese", "Hindi", "English", "Telugu", "Kannada", "Tamil", "Bengali"],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "K"
          }
        }
      },
      fill: {
        opacity: 1
      
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    };

    
    const chart2 = new ApexCharts(document.querySelector("#chart1") as HTMLElement, options2);
    chart2.render();
    
    const options3: ApexCharts.ApexOptions = {
      series: [{
        name: 'Telugu',
        data: [44, 55, 41, 67, 22, 43]
      }, {
        name: 'Hindi',
        data: [13, 23, 20, 8, 13, 27]
      }, {
        name: 'English',
        data: [11, 17, 15, 15, 21, 14]
      }, {
        name: 'Bengali',
        data: [21, 7, 25, 13, 22, 8]
      }],
        chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: '13px',
                fontWeight: 900
              }
            }
          }
        },
      },
      xaxis: {
        type: 'datetime',
        categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
          '01/05/2011 GMT', '01/06/2011 GMT'
        ],
      },
      legend: {
        position: 'right',
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };
    
    const chart3 = new ApexCharts(document.querySelector("#chart2") as HTMLElement, options3);
    chart3.render();
    
    const options4: ApexCharts.ApexOptions = {
      series: [44, 55, 41, 17, 15],
      labels:["Assamese", "Hindi", "English", "Telugu", "Kannada",],
      chart: {
        type: 'donut',
      },
    };

    const chart4 = new ApexCharts(document.querySelector("#chart3") as HTMLElement, options4);
    chart4.render();

    return () => {
      chart.destroy();
      chart2.destroy();
      chart3.destroy();
      chart4.destroy();
    };
  }, []);

  return (
    <div>
      <h1 className="flex justify-center text-2xl py-4">Bhashadaaan Analytics</h1>
      <div className="grid grid-cols-2">
        <div>
          <h1>Number of submissions</h1>
          <div id="chart" className="w-[400px]"></div>
        </div>
        <div>
          <h1>Submissions by each language</h1>
          <div id="chart1" className="w-[400px]"></div>
        </div>
        <div>
          <h1>Submissions by each language</h1>
          <div id="chart2" className="w-[400px]"></div>
        </div>
        <div>
          <h1>Submissions by each language</h1>
          <div id="chart3" className="w-[400px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
