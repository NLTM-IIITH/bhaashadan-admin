import { useState, useEffect } from "react";
import { Button, Input, Progress, ScrollShadow, Select, SelectItem } from "@nextui-org/react";

import SubmCardx from "../components/SubmissionCard";

interface Submission{
  id: number;
  image: string;
  language: string;
  upload_date: string;
  user_id: number;
  username: string;
}

const Submissions = () => {
    const languages = [ "All", "Assamese", "Bangla", "English", "Gujarati", "Hindi", "Kannada", "Malayalam", "Manipuri", "Marathi", "Oriya", "Punjabi", "Tamil", "Telugu", ];
    const [selectedLanguage, setSelectedLanguage] = useState("All");
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [selectedSort, setSelectedSort] = useState("dateno");
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
      const fetchData = async () => {
        setLoading(true);
        const response = await fetch("http://bhasha.iiit.ac.in/crowd/api/submissions/");
        const data = await response.json();
        setSubmissions(data);
        setLoading(false);
      };
      fetchData();
    }, []);

  let filteredSubmissions = selectedLanguage === "All" ? submissions : submissions.filter(submission => submission.language === (selectedLanguage.charAt(0).toLowerCase() + selectedLanguage.slice(1)));

  filteredSubmissions = selectedSort === "dateno" ? filteredSubmissions.sort((a, b) => new Date(b.upload_date).getTime() - new Date(a.upload_date).getTime()) : filteredSubmissions.sort((a, b) => new Date(a.upload_date).getTime() - new Date(b.upload_date).getTime()) ;

  return (
    <ScrollShadow className="px-4">
      <div className="py-4 flex justify-evenly">
        {languages.map(language => (
            <Button key={language} color="success" variant={language === selectedLanguage ? "solid" : "bordered"} radius="full" className="w-[5rem] text-sm" onClick={()=> setSelectedLanguage(language)}>
                {language}
            </Button>
        ))}
      </div>
        
      <div className="flex justify-evenly">
        <div className="w-4/5"><Input type="text" variant="underlined" label="Search ⌕" hidden /></div>
        <div className="w-1/5">
          <Select
            label="Sort by" 
            className="w-lg"
            defaultSelectedKeys={["dateno"]}
            onSelectionChange={(key: Set<string>) => setSelectedSort(Array.from(key).join(''))}
          >
            <SelectItem key="dateno">Upload Date - new to old</SelectItem>
            <SelectItem key="dateon">Upload Date - old to new</SelectItem>
          </Select>
        </div>
      </div>

      {loading ? (
        <div className="py-4">
          <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="w-4/5"
          />
        </div>
      ) :
      (
        <div className="grid grid-cols-4 gap-4 py-10">
          {filteredSubmissions.map(submission => (
            <SubmCardx key={submission.id} submission={submission} />
          ))}
        </div>
      )
      }

      
        
      </ScrollShadow>
  );
};

export default Submissions;