import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import { ScrollShadow, Select, SelectItem } from '@nextui-org/react';

interface Submission{
  id: number; // pic id
  image: string;
  language: string;
  upload_date: string; // user uploaded it on
  user_id: number;
  username: string;
}

interface Paragraph{
  id: number; // para id
  language: string;
  upload_date: string; // date created
  submissions: Submission[];
}

const Analytics: React.FC = () => {
  const [paragraphs, setParagraphs] = useState<Paragraph[]>([]);

  useEffect(()=> {
    const fetchData = async() => {
      const data = await fetch("http://bhasha.iiit.ac.in/crowd/api/paragraphs/");
      const response = await data.json();
      setParagraphs(response);
    };
    fetchData();
  }, []);

  useEffect(() => {

    const fetchAll = () => {
      const submissions = paragraphs.map(para => para.submissions.length);
      let pending = 0;
      let submitted = 0;
      submissions.forEach(sub => {
        if(sub > 0) submitted++;
        else pending++;
      });
      return {submitted, pending};
    }

    const fetchLanguageData = (language: string) => {
      const submissions = paragraphs.filter(para => para.language === language).map(para => para.submissions.length);
      let pending = 0;
      let submitted = 0;
      submissions.forEach(sub => {
        if(sub > 0) submitted++;
        else pending++;
      });
      return {submitted, pending};
    }

    console.log(fetchLanguageData("telugu"));
    console.log(fetchAll());

    const optionsx1: ApexCharts.ApexOptions = {
      series: [
        {
          name: "Assamese",
          data: [28, 29, 33, 36, 32, 32, 33, 36, 32, 32, 33, 29]
        },
        {
          name: "Bangla",
          data: [12, 11, 14, 18, 17, 13, 13, 13, 13, 11, 12, 12]
        },
        {
          name: "English",
          data: [32, 33, 31, 33, 34, 31, 32, 33, 32, 33, 31, 32]
        },
        {
          name: "Gujarati",
          data: [22, 23, 24, 24, 23, 24, 25, 26, 24, 23, 22, 23]
        },
        {
          name: "Hindi",
          data: [11, 13, 14, 18, 17, 13, 13, 13, 13, 11, 12, 12]
        },
        {
          name: "Kannada",
          data: [22, 23, 24, 24, 23, 24, 25, 26, 24, 23, 22, 23]
        },
        {
          name: "Malayalam",
          data: [16, 17, 19, 20, 18, 17, 18, 19, 18, 17, 16, 17]
        },
        {
          name: "Manipuri",
          data: [4, 5, 6, 8, 7, 6, 6, 6, 6, 5, 5, 5]
        },
        {
          name: "Oriya",
          data: [11, 12, 13, 15, 14, 13, 13, 13, 13, 12, 12, 12]
        },
        {
          name: "Punjabi",
          data: [13, 14, 16, 17, 15, 14, 15, 16, 15, 14, 13, 14]
        },
        {
          name: "Tamil",
          data: [32, 33, 31, 33, 34, 31, 32, 33, 32, 33, 31, 32]
        },
        {
          name: "Telugu",
          data: [42, 43, 44, 44, 43, 44, 45, 46, 44, 43, 42, 43]
        },
      ],
      chart: {
        height: 500,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      colors: ['#FF0000', '#00FF00', '#0000FF', '#00FFFF', '#FF00FF', '#FFA500', '#800080', '#FFC0CB', '#008080', '#FFD700', '#B7B7B7', '#4B0082'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'], 
          opacity: 0.5
        },
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        title: {
          text: 'Month'
        }
      },
      yaxis: {
        title: {
          text: 'Temperature'
        },
        min: 0,
        max: 50
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    }

    const chartx1 = new ApexCharts(document.querySelector("#chartx1") as HTMLElement, optionsx1);
    chartx1.render();


    const options2: ApexCharts.ApexOptions = {
      series: [{
        name: 'Submitted',
        data: [fetchAll().submitted,
          fetchLanguageData("assamese").submitted,
          fetchLanguageData("bangla").submitted,
          fetchLanguageData("english").submitted,
          fetchLanguageData("gujarati").submitted,
          fetchLanguageData("hindi").submitted,
          fetchLanguageData("kannada").submitted,
          fetchLanguageData("malayalam").submitted,
          fetchLanguageData("manipuri").submitted,
          fetchLanguageData("marathi").submitted,
          fetchLanguageData("oriya").submitted,
          fetchLanguageData("punjabi").submitted,
          fetchLanguageData("tamil").submitted,
          fetchLanguageData("telugu").submitted,
        ]
      }, {
        name: 'Pending',
        data: [fetchAll().pending,
          fetchLanguageData("assamese").pending,
          fetchLanguageData("bangla").pending,
          fetchLanguageData("english").pending,
          fetchLanguageData("gujarati").pending,
          fetchLanguageData("hindi").pending,
          fetchLanguageData("kannada").pending,
          fetchLanguageData("malayalam").pending,
          fetchLanguageData("manipuri").pending,
          fetchLanguageData("marathi").pending,
          fetchLanguageData("oriya").pending,
          fetchLanguageData("punjabi").pending,
          fetchLanguageData("tamil").pending,
          fetchLanguageData("telugu").pending,
        ]
      },],
        chart: {
        type: 'bar',
        height: 650,
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
        text: 'Submissions vs Pending by Each Language'
      },
      xaxis: {
        categories: ["All", "Assamese", "Bangla", "English", "Gujarati", "Hindi", "Kanaada", "Malayalam", "Manipuri", "Marathi", "Oriya", "Punjabi", "Tamil", "Telugu",],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + ""
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
      chartx1.destroy();
      chart2.destroy();
      chart4.destroy();
    };
  }, []);

  return (
    <ScrollShadow className="px-4">
      <h1 className="flex justify-start font-bold text-5xl p-6">Analytics</h1>

      <div>
        <div className="flex">
          <h1 className='w-4/5 p-4 px-8 text-xl'>Total Submissions</h1>
          <div className="w-1/5">
            <Select
              label="View"
              className="w-lg"
              defaultSelectedKeys={["date"]}
            >
              <SelectItem key="date">Weekly</SelectItem>
              <SelectItem key="uploads">Monthly</SelectItem>
              <SelectItem key="pending">Yearly</SelectItem>
            </Select>
          </div>
        </div>
        <div id="chartx1" className="w-[40rem]"></div>
      </div>

      <div className="flex justify-center py-4">
        <div id="chart1" className="w-[800px]"></div>
      </div>
    
        <div>
          <h1>Submissions by each language</h1>
          <div id="chart3" className="w-[400px]"></div>
        </div>

    </ScrollShadow>
  );
};

export default Analytics;
