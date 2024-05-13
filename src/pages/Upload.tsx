import { useState } from "react";
import { Autocomplete, AutocompleteItem, Button, Textarea, } from "@nextui-org/react"

const Upload = () => {
  const languages = [ "Assamese", "Bangla", "English", "Gujarati", "Hindi", "Kanaada", "Malayalam", "Manipuri", "Marathi", "Oriya", "Punjabi", "Tamil", "Telugu", ];
  const [selectedLanguage, setSelectedLanguage] = useState("");

    return (
      <div>
        <h1 className="flex justify-start font-bold text-5xl p-6">New Paragraph</h1>
        <h1 className="flex justify-center pb-6">You are uploading {selectedLanguage}</h1>

        <div className="flex justify-evenly py-4">
          <div className="flex flex-col gap-y-[18rem]">
            <div>
              <Autocomplete
                defaultItems={languages}
                variant="bordered"
                label="Select a language"
                className="max-w-xs"
              >
                {languages.map((language, index) => (
                  <AutocompleteItem key={index} onClick={()=>{setSelectedLanguage(language)}}>{language}</AutocompleteItem>
                ))}
              </Autocomplete>
            </div>
          </div>

          <div>
            <h1 className="pb-4">Upload a .zip file</h1>
            <input type="file"/>
          </div>
        </div>

        <div className="flex justify-end py-4 mr-[27rem]">
          <Button color="success" variant="solid" radius="full">Upload</Button>
        </div>
      </div>
    )
  }
  
  export default Upload
  