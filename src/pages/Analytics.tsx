import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import { ScrollShadow, Select, SelectItem } from '@nextui-org/react';
import {MainChart} from '../components/MainChart';

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
  const [isLoading, setIsLoading] = useState(true);
  const [year, setYear] = useState(2021);

  useEffect(()=> {
    const fetchData = async() => {
      const data = await fetch("http://bhasha.iiit.ac.in/crowd/api/paragraphs/");
      const response = await data.json();
      setParagraphs(response);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
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
          categories: ["All", "Assamese", "Bangla", "English", "Gujarati", "Hindi", "Kannada", "Malayalam", "Manipuri", "Marathi", "Oriya", "Punjabi", "Tamil", "Telugu",],
          title: {
            text: "Percentage"
          }
        },
        yaxis: {
          title: {
            text: "Languages"
          }
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
        series: [
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
        ],
        title: {
          text: 'All languages contribution by number of successful submissions'
        },
        labels:["Assamese", "Bangla", "English", "Gujarati", "Hindi", "Kannada", "Malayalam", "Manipuri", "Marathi", "Oriya", "Punjabi", "Tamil", "Telugu",],
        chart: {
          height: 650,
          type: 'donut',
        },
        colors: ['#FF0000', '#00FF00', '#0000FF', '#00FFFF', '#FF00FF', '#FFA500', '#800080', '#FFC0CB', '#008080', '#FFD700', '#B7B7B7', '#c7e063', '#880010'],
      };
  
      const chart4 = new ApexCharts(document.querySelector("#chart3") as HTMLElement, options4);
      chart4.render();
  
      return () => {
        chart2.destroy();
        chart4.destroy();
      };
    }
  }, [isLoading]);

  return (
    <ScrollShadow className="px-4">
      <h1 className="flex justify-start font-bold text-5xl p-6">Analytics</h1>

      <div>
        <div className="flex pb-8">
          <h1 className='w-3/5 p-4 px-8 text-xl'>Total Submissions in the year {year}</h1>
          <div className="w-2/5 flex gap-x-4">
            <Select
              label="Year"
              className="w-lg"
              defaultSelectedKeys={["2021"]}
              onSelectionChange={(key: Set<string>) => setYear(parseInt(Array.from(key).join('')))}
            >
              <SelectItem key="2021">2021</SelectItem>
              <SelectItem key="2022">2022</SelectItem>
              <SelectItem key="2023">2023</SelectItem>
              <SelectItem key="2024">2024</SelectItem>
            </Select>

            <Select
              label="View"
              className="w-lg"
              defaultSelectedKeys={["month"]}
            >
              <SelectItem key="week">Weekly</SelectItem>
              <SelectItem key="month">Monthly</SelectItem>
            </Select>
          </div>
        </div>
        <MainChart 
          year={year}
        />
      </div>

      <div className="flex justify-evenly">
        <div className="flex justify-center items-center py-4">
          <div id="chart1" className="w-[500px]"></div>
        </div>
    
        <div className="flex justify-center items-center py-4">
          <div id="chart3" className="w-[500px]"></div>
        </div>
      </div>


    </ScrollShadow>
  );
};

export default Analytics;
