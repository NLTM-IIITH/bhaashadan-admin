import { useState } from "react";
import axios from "axios";
import { Autocomplete, AutocompleteItem, Button, } from "@nextui-org/react";

const Upload = () => {
  const languages = [ "Assamese", "Bangla", "English", "Gujarati", "Hindi", "Kannada", "Malayalam", "Manipuri", "Marathi", "Oriya", "Punjabi", "Tamil", "Telugu", ];
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files ? event.target.files[0] : null);
  };
  
  const handleUpload = async() => {
    if(!selectedLanguage || !selectedFile){
      alert("Please select a language and a file to upload");
      return;
    }

    const data = new FormData();
    data.append("language", selectedLanguage);
    data.append("file", selectedFile);

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://bhasha.iiit.ac.in/crowd/api/paragraphs/",
      data: data
    };

    try {
      const response = await axios.request(config);
      if(response.status === 200){
        alert("Uploaded");
      }
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

    return (
      <div>
        <h1 className="flex justify-start font-bold text-5xl p-6">New Paragraph</h1>
        <h1 className="flex justify-center pb-6">You are uploading {selectedLanguage}</h1>

        <div className="flex justify-evenly py-4">
          <div className="flex flex-col gap-y-[18rem]">
            <div>
              <Autocomplete
                variant="bordered"
                label="Select a language"
                className="max-w-xs"
                value={selectedLanguage}
              >
                {languages.map((language, index) => (
                  <AutocompleteItem key={index} onClick={()=>{setSelectedLanguage(language);}}>{language}</AutocompleteItem>
                ))}
              </Autocomplete>
            </div>
          </div>

          <div>
            <h1 className="pb-4">Upload a .zip file</h1>
            <input type="file" accept=".zip" onChange={handleFileChange} />
          </div>
        </div>

        <div className="flex justify-end py-4 mr-[27rem]">
          <Button color="success" variant="solid" radius="full" onClick={handleUpload}>Upload</Button>
        </div>
      </div>
    )
  }
  
  export default Upload
  