import { useEffect, useState } from "react";
import { Button, Input, ScrollShadow, Select, SelectItem } from "@nextui-org/react";

import Cardx from "../components/Cardx";

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

const Pages = () => {
    const languages = [ "All", "Assamese", "Bangla", "English", "Gujarati", "Hindi", "Kannada", "Malayalam", "Manipuri", "Marathi", "Oriya", "Punjabi", "Tamil", "Telugu", ];
    const [selectedLanguage, setSelectedLanguage] = useState("All");
    const [paragraphs, setParagraphs] = useState<Paragraph[]>([]);

    useEffect(()=> {
      const fetchData = async() => {
        const data = await fetch("http://bhasha.iiit.ac.in/crowd/api/paragraphs/");
        const response = await data.json();
        setParagraphs(response);
      };
      fetchData();
    }, []);

    const filteredParagraphs = selectedLanguage === "All" ? paragraphs : paragraphs.filter(para=> para.language === (selectedLanguage.charAt(0).toLowerCase() + selectedLanguage.slice(1)));

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
            <SelectItem key="date">Upload Date - new to old</SelectItem>
            <SelectItem key="uploads">Submissions</SelectItem>
            <SelectItem key="user">User</SelectItem>
            <SelectItem key="pending">Pending</SelectItem>
          </Select>
        </div>
      </div>

      <h1 className="flex justify-center text-xl pt-4">You are viewing {selectedLanguage}</h1>
        <div className="grid grid-cols-5 gap-4 py-10">
          {filteredParagraphs.map(paragraph => (
            <Cardx key={paragraph.id} paragraph={paragraph}/>
          ))}
        </div>
        
      </ScrollShadow>
  );
};

export default Pages;
