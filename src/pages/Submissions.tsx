import { useState } from "react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@nextui-org/react";

import { FaAngleDown } from "react-icons/fa";
import SubmCardx from "../components/SubmissionCard";

const Submissions = () => {
    const languages = [ "Assamese", "Bangla", "English", "Gujarati", "Hindi", "Kanaada", "Malayalam", "Manipuri", "Marathi", "Oriya", "Punjabi", "Tamil", "Telugu", ];
    const [selectedLanguage, setSelectedLanguage] = useState("Telugu");

  return (
    <div>
      <div className="py-4 flex justify-evenly">
        {languages.map(language => (
            <Button key={language} color="success" variant={language === selectedLanguage ? "solid" : "bordered"} radius="full" onClick={()=> setSelectedLanguage(language)}>
                {language}
            </Button>
        ))}
      </div>
        
      <div className="flex justify-evenly">
        <div className="w-4/5"><Input type="text" variant="underlined" label="Search ⌕" /></div>
        <div>
          <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="bordered" 
              >
                Sort By <FaAngleDown />
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>ID</DropdownItem>
              <DropdownItem>Upload Date</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

        <div className="grid grid-cols-5 gap-4 py-10">
          {Array.from({ length: 15 }).map((_, index) => (
            <SubmCardx key={index} />
          ))}
        </div>
        
      </div>
  );
};

export default Submissions;