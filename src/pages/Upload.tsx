import { useState } from "react";
import { Autocomplete, AutocompleteItem, Button, Textarea, } from "@nextui-org/react"

const Upload = () => {
  const languages = [ "Assamese", "Bangla", "English", "Gujarati", "Hindi", "Kanaada", "Malayalam", "Manipuri", "Marathi", "Oriya", "Punjabi", "Tamil", "Telugu", ];
  const [selectedLanguage, setSelectedLanguage] = useState("");

    return (
      <div>
        <h1 className="flex justify-center text-3xl py-4">Upload a New Page</h1>

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
            <Textarea
              minRows={3}
              label="Text"
              variant="bordered"
              placeholder="Enter the text"
              disableAutosize
              classNames={{
                base: "w-[30rem] h-[30rem]",
                input: "resize-y min-h-[25rem]"
              }}
            />
          </div>
        </div>

        <div className="flex justify-end mr-[16rem]">
          <Button color="success" variant="solid" radius="full">Upload</Button>
        </div>
      </div>
    )
  }
  
  export default Upload
  