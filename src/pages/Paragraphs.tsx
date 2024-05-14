import { useEffect, useState } from "react";
import { Button, Input, Progress, ScrollShadow, Select, SelectItem } from "@nextui-org/react";

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
  text: string;
  language: string;
  upload_date: string; // date created
  submissions: Submission[];
}

const Paragraphs = () => {
    const languages = [ "All", "Assamese", "Bangla", "English", "Gujarati", "Hindi", "Kannada", "Malayalam", "Manipuri", "Marathi", "Oriya", "Punjabi", "Tamil", "Telugu", ];
    const [selectedLanguage, setSelectedLanguage] = useState("All");
    const [paragraphs, setParagraphs] = useState<Paragraph[]>([]);
    const [selectedSort, setSelectedSort] = useState("dateno");
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
      const fetchData = async() => {
        setLoading(true);
        const data = await fetch("http://bhasha.iiit.ac.in/crowd/api/paragraphs/");
        const response = await data.json();
        setParagraphs(response);
        setLoading(false);
      };
      fetchData();
    }, []);

    let filteredParagraphs = selectedLanguage === "All" ? paragraphs : paragraphs.filter(para=> para.language === (selectedLanguage.charAt(0).toLowerCase() + selectedLanguage.slice(1)));

    // * Sort Logic

    filteredParagraphs = selectedSort === "pending" ? filteredParagraphs.filter(para=> para.submissions.length === 0) : filteredParagraphs;

    let sortedParagraphs = [...filteredParagraphs].sort((a, b)=> {
      switch(selectedSort){
        case "dateno":
          return new Date(b.upload_date).getTime() - new Date(a.upload_date).getTime();
        case "dateon":
          return new Date(a.upload_date).getTime() - new Date(b.upload_date).getTime();
        case "submissions":
          return b.submissions.length - a.submissions.length;
        default:
          return new Date(b.upload_date).getTime() - new Date(a.upload_date).getTime();
      }
    })

    // * search logic
    
    if(searchTerm.length > 0){ 
      sortedParagraphs = sortedParagraphs.filter(para=> para.text.toLowerCase().includes(searchTerm.toLowerCase()));
    }

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
        <div className="w-4/5"><Input type="text" variant="underlined" label="Search ⌕" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/></div>
        <div className="w-1/5">
          <Select
            label="Sort by"
            className="w-lg"
            defaultSelectedKeys={["dateno"]}
            onSelectionChange={(key: Set<string>) => setSelectedSort(Array.from(key).join(''))}
          >
            <SelectItem key="dateno">Upload Date - new to old</SelectItem>
            <SelectItem key="dateon">Upload Date - old to new</SelectItem>
            <SelectItem key="submissions">Submissions - Asc</SelectItem>
            <SelectItem key="pending">Pending</SelectItem>
          </Select>
        </div>
      </div>

      <h1 className="flex justify-center text-xl pt-4">You are viewing {selectedLanguage} Paragraphs</h1>

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
        <div className="grid grid-cols-4 justify-center gap-y-4 py-10">
        {sortedParagraphs.map(paragraph => (
          <Cardx key={paragraph.id} paragraph={paragraph}/>
        ))}
      </div>
      )
      }        
    </ScrollShadow>
  );
};

export default Paragraphs;
