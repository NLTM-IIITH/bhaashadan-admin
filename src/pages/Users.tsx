import { Button, Card, CardBody, ScrollShadow, Select, SelectItem, } from "@nextui-org/react";
import { useState, useEffect} from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { ImUpload3 } from "react-icons/im";
import { MdEmail, MdLanguage } from "react-icons/md";

import { jsPDF } from "jspdf";

interface User {
  id : number; // user_id
  username : string;
  language: string[];
  email: string;
  submission_count: number;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

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

  useEffect(()=> {
    const fetchData = async() => {
      const response = await fetch("http://bhasha.iiit.ac.in/crowd/api/users/");
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <ScrollShadow className="px-4 h-[90vh]">

      <div className="flex items-center">
        <h1 className="flex justify-center font-bold text-5xl p-6 w-4/5">User Analytics</h1>
        <div className="w-1/5">
          <Select
            label="Criteria"
            className="w-lg"
            defaultSelectedKeys={["today"]}
          >
            <SelectItem key="today">Today</SelectItem>
            <SelectItem key="week">Weekly</SelectItem>
            <SelectItem key="month">Monthly</SelectItem>
            <SelectItem key="year">Yearly</SelectItem>
          </Select>
        </div>
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
              <MdLanguage />
                Languages
                <Select
                  label="Language"
                  placeholder="Select an language"
                  selectionMode="multiple"
                  className="w-[5rem]"
                >
                <SelectItem key="asc" value="asc">Hindi</SelectItem>
                <SelectItem key="desc" value="desc">Telugu</SelectItem>
                <SelectItem key="desc" value="desc">English</SelectItem>
                <SelectItem key="desc" value="desc">Tamil</SelectItem>
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
              {users.map(user => (
                <p key={user.id} className="py-2">{user.id} : {user.username}</p>
              ))}
            </div>
          </div>

          <div className="w-1/3">
            <div className="flex flex-col items-center justify-center">
              {users.map(user => (
                <p key={user.id} className="py-2">{user.language}</p>
              ))}
            </div>
          </div>

          <div className="w-1/3">
            <div className="flex flex-col items-center justify-center">
              {users.map(user => (
                <p key={user.id} className="py-2">{user.email}</p>
              ))}
            </div>
          </div>

          <div className="w-1/3">
            <div className="flex flex-col items-center justify-center">
              {users.map(user => (
                <p key={user.id} className="py-2">{user.submission_count}</p>
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

    </ScrollShadow>
  )
}

export default Users;