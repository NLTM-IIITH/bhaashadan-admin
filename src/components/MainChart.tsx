import React, {useState} from 'react';
import ReactApexChart from 'react-apexcharts';

interface SeriesData {
    name: string,
    data: number[];
}
  
interface ChartOptions {
    chart: {
        id: string;
        group: string;
        type: 'line' | 'area' | 'bar' | 'pie' | 'donut' | 'radialBar' | 'scatter' | 'bubble' | 'heatmap' | 'candlestick' | 'boxPlot' | 'radar' | 'polarArea' | 'rangeBar' | 'rangeArea' | 'treemap' | undefined;
        height?: number;
        width?: number;
    };
    colors: string[];
    xaxis: {
      categories: string[];
    };
    title: {
      text: string;
      align: string;
    }
}

// {[ "Marathi", "Oriya", "Punjabi", "Tamil", "Telugu",]}
  
interface ChartState {
    Assameseseries: SeriesData[];
    Banglaseries: SeriesData[];
    Englishseries: SeriesData[];
    Gujaratiseries: SeriesData[];
    Hindiseries: SeriesData[];
    Kannadaseries: SeriesData[];
    Malayalamseries: SeriesData[];
    Manipuriseries: SeriesData[];
    Marathiseries: SeriesData[];
    Oriyaseries: SeriesData[];
    Punjabiseries: SeriesData[];
    Tamilseries: SeriesData[];
    Teluguseries: SeriesData[];

    AssameseOptions: ChartOptions;
    BanglaOptions: ChartOptions;
    EnglishOptions: ChartOptions;
    GujaratiOptions: ChartOptions;
    HindiOptions: ChartOptions;
    KannadaOptions: ChartOptions;
    MalayalamOptions: ChartOptions;
    ManipuriOptions: ChartOptions;
    MarathiOptions: ChartOptions;
    OriyaOptions: ChartOptions;
    PunjabiOptions: ChartOptions;
    TamilOptions: ChartOptions;
    TeluguOptions: ChartOptions;
}

export const MainChart: React.FC = () => {
    {/*@ts-ignore */}
    const [chartState, setChartState] = useState<ChartState>({
        Assameseseries: [{
          name: 'sales',
          data: [10, 15, 7, 18, 20, 15, 12, 8, 16, 19, 15, 12],
        }],
        AssameseOptions: {
          chart: {
            id: 'fb',
            group: 'social',
            type: 'line',
          },
          colors: ['#FF0000'],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          title: {
            text: 'Assamese',
            align: 'center',
          },
        },

        Banglaseries: [{
          name: 'sales',
          data: [10, 15, 7, 18, 20, 15, 12, 8, 16, 19, 15, 12],
        }],
        BanglaOptions: {
          chart: {
            id: 'fb',
            group: 'social',
            type: 'line',
          },
          colors: ['#00FF00'],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          title: {
            text: 'Bangla',
            align: 'center',
          },
        },
        
        Englishseries: [{
          name: 'sales',
          data: [10, 15, 7, 18, 20, 15, 12, 8, 16, 19, 15, 12],
        }],
        EnglishOptions: {
          chart: {
            id: 'fb',
            group: 'social',
            type: 'line',
          },
          colors: ['#0000FF'],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          title: {
            text: 'English',
            align: 'center',
          },
        },

        Gujaratiseries: [{
          name: 'sales',
          data: [10, 15, 7, 18, 20, 15, 12, 8, 16, 19, 15, 12],
        }],
        GujaratiOptions: {
          chart: {
            id: 'fb',
            group: 'social',
            type: 'line',
          },
          colors: ['#00FFFF'],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          title: {
            text: 'Gujarati',
            align: 'center',
          },
        },

        Hindiseries: [{
          name: 'sales',
          data: [10, 15, 7, 18, 20, 15, 12, 8, 16, 19, 15, 12],
        }],
        HindiOptions: {
          chart: {
            id: 'fb',
            group: 'social',
            type: 'line',
          },
          colors: ['#FF00FF'],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          title: {
            text: 'Hindi',
            align: 'center',
          },
        },

        Kannadaseries: [{
          name: 'sales',
          data: [10, 15, 7, 18, 20, 15, 12, 8, 16, 19, 15, 12],
        }],
        KannadaOptions: {
          chart: {
            id: 'fb',
            group: 'social',
            type: 'line',
          },
          colors: ['#FFA500'],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          title: {
            text: 'Kannada',
            align: 'center',
          },
        },

        Malayalamseries: [{
          name: 'sales',
          data: [10, 15, 7, 18, 20, 15, 12, 8, 16, 19, 15, 12],
        }],
        MalayalamOptions: {
          chart: {
            id: 'fb',
            group: 'social',
            type: 'line',
          },
          colors: ['#800080'],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          title: {
            text: 'Malayalam',
            align: 'center',
          },
        },
      
        Manipuriseries: [{
            name: 'sales',
            data: [10, 15, 7, 18, 20, 15, 12, 8, 16, 19, 15, 12],
          }],
        ManipuriOptions: {
          chart: {
            id: 'tw',
            group: 'social',
            type: 'line',
          },
          colors: ['#FFC0CB'],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          title: {
            text: 'Manipuri',
            align: 'center',
          },
        },

        Marathiseries: [{
            name: 'sales',
            data: [10, 15, 7, 18, 20, 15, 12, 8, 16, 19, 15, 12],
          }],
        MarathiOptions: {
          chart: {
            id: 'tw',
            group: 'social',
            type: 'line',
          },
          colors: ['#008080'],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          title: {
            text: 'Marathi',
            align: 'center',
          },
        },

        Oriyaseries: [{
            name: 'sales',
            data: [10, 15, 7, 18, 20, 15, 12, 8, 16, 19, 15, 12],
          }],
        OriyaOptions: {
          chart: {
            id: 'tw',
            group: 'social',
            type: 'line',
          },
          colors: ['#FFD700'],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          title: {
            text: 'Oriya',
            align: 'center',
          },
        },

        Punjabiseries: [{
            name: 'sales',
            data: [10, 15, 7, 18, 20, 15, 12, 8, 16, 19, 15, 12],
          }],
        PunjabiOptions: {
          chart: {
            id: 'tw',
            group: 'social',
            type: 'line',
          },
          colors: ['#B7B7B7'],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          title: {
            text: 'Punjabi',
            align: 'center',
          },
        },

        Tamilseries: [{
            name: 'sales',
            data: [10, 15, 7, 18, 20, 15, 12, 8, 16, 19, 15, 12],
          }],
        TamilOptions: {
          chart: {
            id: 'tw',
            group: 'social',
            type: 'line',
          },
          colors: ['#c7e063'],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          title: {
            text: 'Tamil',
            align: 'center',
          },
        },

        Teluguseries: [{
            name: 'sales',
            data: [10, 15, 7, 18, 20, 15, 12, 8, 16, 19, 15, 12],
          }],
        TeluguOptions: {
          chart: {
            id: 'tw',
            group: 'social',
            type: 'line',
          },
          colors: ['#880010'],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          title: {
            text: 'Telugu',
            align: 'center',
          },
        },


    });  

      return (
        <div>
          <div id="wrapper" className="flex">

            <div id="col1" className="flex flex-col">
              <div id="chart-Assamese">
                <ReactApexChart options={chartState.AssameseOptions} series={chartState.Assameseseries} type="line" height={150} width={620}/>
              </div>
              <div id="chart-Bangla">
                <ReactApexChart options={chartState.BanglaOptions} series={chartState.Banglaseries} type="line" height={150} width={620}/>
              </div>
              <div id="chart-English">
                <ReactApexChart options={chartState.EnglishOptions} series={chartState.Englishseries} type="line" height={150} width={620}/>
              </div>
              <div id="chart-Gujarati">
                <ReactApexChart options={chartState.GujaratiOptions} series={chartState.Gujaratiseries} type="line" height={150} width={620}/>
              </div>
              <div id="chart-Hindi">
                <ReactApexChart options={chartState.HindiOptions} series={chartState.Hindiseries} type="line" height={150} width={620}/>
              </div>
              <div id="chart-Kannada">
                <ReactApexChart options={chartState.KannadaOptions} series={chartState.Kannadaseries} type="line" height={150} width={620}/>
              </div>
              <div id="chart-Malayalam">
                <ReactApexChart options={chartState.MalayalamOptions} series={chartState.Malayalamseries} type="line" height={150} width={620}/>
              </div>
            </div>

            <div id="col2">
              <div id="chart-Manipuri">
                <ReactApexChart options={chartState.ManipuriOptions} series={chartState.Manipuriseries} type="line" height={150} width={620}/>
              </div>
              <div id="chart-Marathi">
                <ReactApexChart options={chartState.MarathiOptions} series={chartState.Marathiseries} type="line" height={150} width={620}/>
              </div>
              <div id="chart-Oriya">
                <ReactApexChart options={chartState.OriyaOptions} series={chartState.Oriyaseries} type="line" height={150} width={620}/>
              </div>
              <div id="chart-Punjabi">
                <ReactApexChart options={chartState.PunjabiOptions} series={chartState.Punjabiseries} type="line" height={150} width={620}/>
              </div>
              <div id="chart-Tamil">
                <ReactApexChart options={chartState.TamilOptions} series={chartState.Tamilseries} type="line" height={150} width={620}/>
              </div>
              <div id="chart-Telugu">
                <ReactApexChart options={chartState.TeluguOptions} series={chartState.Teluguseries} type="line" height={150} width={620}/>
              </div>  
            </div>
                   
          </div>
        </div>
      );
    };