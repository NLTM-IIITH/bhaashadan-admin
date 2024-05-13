import { useState, useEffect } from "react";
import { Button, Input, ScrollShadow, Select, SelectItem } from "@nextui-org/react";

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

    useEffect(()=> {
      const fetchData = async () => {
        const response = await fetch("http://bhasha.iiit.ac.in/crowd/api/submissions/");
        const data = await response.json();
        setSubmissions(data);
      };
      fetchData();
    }, []);

  const filteredSubmissions = selectedLanguage === "All" ? submissions : submissions.filter(submission => submission.language === (selectedLanguage.charAt(0).toLowerCase() + selectedLanguage.slice(1)));

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
        <div className="w-4/5"><Input type="text" variant="underlined" label="Search ⌕" /></div>
        <div className="w-1/5">
          <Select
            label="Sort by" 
            className="w-lg"
            defaultSelectedKeys={["date"]}
          >
            <SelectItem key="date">Upload Date</SelectItem>
            <SelectItem key="user">User</SelectItem>
            <SelectItem key="uploads">Uploads</SelectItem>
          </Select>
        </div>
      </div>

        <div className="grid grid-cols-4 gap-4 py-10">
          {filteredSubmissions.map(submission => (
            <SubmCardx key={submission.id} submission={submission} />
          ))}
        </div>
        
      </ScrollShadow>
  );
};

export default Submissions;