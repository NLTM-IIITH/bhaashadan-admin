import React, {useEffect, useState} from 'react';
import axios from "axios";
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
    Allseries: SeriesData[];

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
    AllOptions: ChartOptions;
}

interface MainChartProps {
  year: number;
}

export const MainChart: React.FC<MainChartProps> = ({year}) => {

  useEffect(() => {
    const fetchAssamese = async() => {
      try {
        const res = await axios.get(`http://localhost:3000/submissions/assamese/${year}`);
        const assameseseries: SeriesData[] = [{ name: 'submissions', data: res.data }];
        setChartState((prevState) => ({
          ...prevState,
          Assameseseries: assameseseries,
        }));
      } catch (error) {
        console.log(error);
      }
    }
    const fetchBangla = async() => {
      try {
        const res = await axios.get(`http://localhost:3000/submissions/bangla/${year}`);
        const banglaseries: SeriesData[] = [{ name: 'submissions', data: res.data }];
        setChartState((prevState) => ({
          ...prevState,
          Banglaseries: banglaseries,
        }));
      } catch (error) {
        console.log(error);
      }
    }
    const fetchEnglish = async() => {
      try {
        const res = await axios.get(`http://localhost:3000/submissions/english/${year}`);
        const englishseries: SeriesData[] = [{ name: 'submissions', data: res.data }];
        setChartState((prevState) => ({
          ...prevState,
          Englishseries: englishseries,
        }));
      } catch (error) {
        console.log(error);
      }
    }
    const fetchGujarati = async() => {
      try {
        const res = await axios.get(`http://localhost:3000/submissions/gujarati/${year}`);
        const gujaratiseries: SeriesData[] = [{ name: 'submissions', data: res.data }];
        setChartState((prevState) => ({
          ...prevState,
          Gujaratiseries: gujaratiseries,
        }));
      } catch (error) {
        console.log(error);
      }
    }
    const fetchHindi = async() => {
      try {
        const res = await axios.get(`http://localhost:3000/submissions/hindi/${year}`);
        const hindiseries: SeriesData[] = [{ name: 'submissions', data: res.data }];
        setChartState((prevState) => ({
          ...prevState,
          Hindiseries: hindiseries,
        }));
      } catch (error) {
        console.log(error);
      }
    }
    const fetchKannada = async() => {
      try {
        const res = await axios.get(`http://localhost:3000/submissions/kannada/${year}`);
        const kannadaseries: SeriesData[] = [{ name: 'submissions', data: res.data }];
        setChartState((prevState) => ({
          ...prevState,
          Kannadaseries: kannadaseries,
        }));
      } catch (error) {
        console.log(error);
      }
    }
    const fetchMalayalam = async() => {
      try {
        const res = await axios.get(`http://localhost:3000/submissions/malayalam/${year}`);
        const malayalamseries: SeriesData[] = [{ name: 'submissions', data: res.data }];
        setChartState((prevState) => ({
          ...prevState,
          Malayalamseries: malayalamseries,
        }));
      } catch (error) {
        console.log(error);
      }
    }
    const fetchManipuri = async() => {
      try {
        const res = await axios.get(`http://localhost:3000/submissions/manipuri/${year}`);
        const manipuriseries: SeriesData[] = [{ name: 'submissions', data: res.data }];
        setChartState((prevState) => ({
          ...prevState,
          Manipuriseries: manipuriseries,
        }));
      } catch (error) {
        console.log(error);
      }
    }
    const fetchMarathi = async() => {
      try {
        const res = await axios.get(`http://localhost:3000/submissions/marathi/${year}`);
        const marathiseries: SeriesData[] = [{ name: 'submissions', data: res.data }];
        setChartState((prevState) => ({
          ...prevState,
          Marathiseries: marathiseries,
        }));
      } catch (error) {
        console.log(error);
      }
    }
    const fetchOriya = async() => {
      try {
        const res = await axios.get(`http://localhost:3000/submissions/oriya/${year}`);
        const oriyaseries: SeriesData[] = [{ name: 'submissions', data: res.data }];
        setChartState((prevState) => ({
          ...prevState,
          Oriyaseries: oriyaseries,
        }));
      } catch (error) {
        console.log(error);
      }
    }
    const fetchPunjabi = async() => {
      try {
        const res = await axios.get(`http://localhost:3000/submissions/punjabi/${year}`);
        const punjabiseries: SeriesData[] = [{ name: 'submissions', data: res.data }];
        setChartState((prevState) => ({
          ...prevState,
          Punjabiseries: punjabiseries,
        }));
      } catch (error) {
        console.log(error);
      }
    }
    const fetchTamil = async() => {
      try {
        const res = await axios.get(`http://localhost:3000/submissions/tamil/${year}`);
        const tamilseries: SeriesData[] = [{ name: 'submissions', data: res.data }];
        setChartState((prevState) => ({
          ...prevState,
          Tamilseries: tamilseries,
        }));
      } catch (error) {
        console.log(error);
      }
    }
    const fetchTelugu = async() => {
      try {
        const res = await axios.get(`http://localhost:3000/submissions/telugu/${year}`);
        const teluguseries: SeriesData[] = [{ name: 'submissions', data: res.data }];
        setChartState((prevState) => ({
          ...prevState,
          Teluguseries: teluguseries,
        }));
      } catch (error) {
        console.log(error);
      }
    }
    const fetchAll = async() => {
      try {
        const res = await axios.get(`http://localhost:3000/submissions/all/${year}`);
        const allseries: SeriesData[] = [{ name: 'submissions', data: res.data }];
        setChartState((prevState) => ({
          ...prevState,
          Allseries: allseries,
        }));
      } catch (error) {
        console.log(error);
      }
    }
    fetchAssamese();
    fetchBangla();
    fetchEnglish();
    fetchGujarati();
    fetchHindi();
    fetchKannada();
    fetchMalayalam();
    fetchManipuri();
    fetchMarathi();
    fetchOriya();
    fetchPunjabi();
    fetchTamil();
    fetchTelugu();
    fetchAll();
  }, [year]);
  
    {/*@ts-ignore */}
    const [chartState, setChartState] = useState<ChartState>({
        Assameseseries: [{
          name: 'submissions',
          data: [],
        }],

        Banglaseries: [{
          name: 'submissions',
          data: [],
        }],

        Englishseries: [{
          name: 'submissions',
          data: [],
        }],

        Gujaratiseries: [{
          name: 'submissions',
          data: [],
        }],

        Hindiseries: [{
          name: 'submissions',
          data: [],
        }],

        Kannadaseries: [{
          name: 'submissions',
          data: [],
        }],
        
        Malayalamseries: [{
          name: 'submissions',
          data: [],
        }],
        
        Manipuriseries: [{
          name: 'submissions',
          data: [],
        }],

        Marathiseries: [{
            name: 'submissions',
            data: [],
        }],

        Oriyaseries: [{
          name: 'submissions',
          data: [],
        }],

        Punjabiseries: [{
          name: 'submissions',
          data: [],
        }],

        Tamilseries: [{
          name: 'submissions',
          data: [],
        }],

        Teluguseries: [{
          name: 'submissions',
          data: [],
        }],
        
        Allseries: [{
          name: 'submissions',
          data: [],
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

        AllOptions: {
          chart: {
            id: 'tw',
            group: 'social',
            type: 'line',
          },
          colors: ['#000000'],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          title: {
            text: 'All languages',
            align: 'center',
          },
        },
    });

      return (
        <div>
          <div id="wrapper" className="flex">

            <div id="col1" className="flex flex-col">
              <div id="chart-All">
                <ReactApexChart options={chartState.AllOptions} series={chartState.Allseries} type="line" height={150} width={620}/>
              </div>
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
            </div>

            <div id="col2">
              <div id="chart-Malayalam">
                <ReactApexChart options={chartState.MalayalamOptions} series={chartState.Malayalamseries} type="line" height={150} width={620}/>
              </div>
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