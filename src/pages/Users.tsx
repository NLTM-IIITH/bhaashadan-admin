import { Button, Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, ScrollShadow, Select, SelectItem, } from "@nextui-org/react";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaAngleDown, FaTrophy } from "react-icons/fa6";
import { ImUpload3 } from "react-icons/im";
import { MdEmail } from "react-icons/md";

import { jsPDF } from "jspdf";

const Users = () => {
  const languages = [ "Assamese", "Bangla", "English", "Gujarati", "Hindi", "Kanaada", "Malayalam", "Manipuri", "Marathi", "Oriya", "Punjabi", "Tamil", "Telugu", ];
  const [selectedLanguage, setSelectedLanguage] = useState("Telugu");
  const handleIssueCertificate = () => {
    const doc = new jsPDF({orientation: "landscape"});

    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement('canvas');
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      const ctx = canvas.getContext('2d');
      if(ctx){
        ctx.drawImage(this, 0, 0);
      }
      const dataURL = canvas.toDataURL('image/jpeg');

      doc.addImage(dataURL, 'JPEG', 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height);

      doc.setFont("anastasia");
      doc.setFontSize(58);
      doc.setTextColor(50, 49, 47); 
      doc.text("Lorem Ipsum", 95, 120);

      doc.save("certificate.pdf");
    };

    img.src = 'public/images/certificate.png';
  }

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
        <h1 className="text-2xl font-semibold"> Analytics This Month </h1>
        <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="bordered" 
              >
                Sort By <FaAngleDown />
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>Today</DropdownItem>
              <DropdownItem>Month</DropdownItem>
              <DropdownItem>Year</DropdownItem>
            </DropdownMenu>
          </Dropdown>
      </div>

      <div className="px-8 py-4">
        <div className="flex w-full">

          <div className="w-1/3">
            <div className="flex gap-x-2 items-center justify-center">
              <FaUserAlt />
              Username
              <Select
                label="Sort"
                placeholder="Select an animal"
                defaultSelectedKeys={["asc"]}
                className="w-[5rem]"
              >
                <SelectItem key="asc" value="asc">Asc</SelectItem>
                <SelectItem key="desc" value="desc">Desc</SelectItem>
              </Select>
            </div>
          </div>

          <div className="w-1/3">
            <div className="flex gap-x-2 items-center justify-center">
              <MdEmail />
              Email ID
              <Select
                label="Sort"
                placeholder="Select an animal"
                defaultSelectedKeys={["asc"]}
                className="w-[5rem]"
              >
                <SelectItem key="asc" value="asc">Asc</SelectItem>
                <SelectItem key="desc" value="desc">Desc</SelectItem>
              </Select>
            </div>
          </div>

          <div className="w-1/3">
            <div className="flex gap-x-2 items-center justify-center">
              <ImUpload3 />
              Submissions
              <Select
                label="Sort"
                placeholder="Select an animal"
                defaultSelectedKeys={["asc"]}
                className="w-[5rem]"
              >
                <SelectItem key="asc" value="asc">Asc</SelectItem>
                <SelectItem key="desc" value="desc">Desc</SelectItem>
              </Select>
            </div>
          </div>
        </div>

        <ScrollShadow className="flex w-full py-4">
          <div className="w-1/3">
            <div className="flex flex-col items-center justify-center">
              {Array.from({ length: 20 }).map((_, index) => (
                <p key={index} className="py-2">lorem ipsum</p>
              ))}
            </div>
          </div>

          <div className="w-1/3">
            <div className="flex flex-col items-center justify-center">
              {Array.from({ length: 20 }).map((_, index) => (
                <p key={index} className="py-2">loremipsum@gmail.com</p>
              ))}
            </div>
          </div>

          <div className="w-1/3">
            <div className="flex flex-col items-center justify-center">
              <p className="py-2">20</p>
              {Array.from({ length: 19 }).map((_, index) => (
                <p key={index} className="py-2">10</p>
              ))}
            </div>
          </div>
        </ScrollShadow>
      </div>

      <div className="py-4">
        <Card className="py-4 w-[30rem] ml-40">
          <CardBody className="overflow-visible py-2">
            <div className="flex">
              <div>
                <FaTrophy size={100}/>
              </div>
              <div>
                <h1 className="text-xl ml-10">Top User this month</h1>
                <h1 className="text-xl ml-10 flex items-center gap-x-4"><FaUserAlt />Lorem Ipsum</h1>
                <h1 className="text-xl ml-10 flex items-center gap-x-4"><ImUpload3 />20 Submissions</h1>
                <Button color="primary" className="ml-10 mt-4" onClick={handleIssueCertificate}>Issue Certificate</Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

    </div>
  )
}

export default Users;