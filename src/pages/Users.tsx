import { Button, Card, CardBody, Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Input, ScrollShadow, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, } from "@nextui-org/react";
import { useState, useEffect} from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaAngleDown, FaTrophy } from "react-icons/fa6";
import { ImUpload3 } from "react-icons/im";

import { jsPDF } from "jspdf";
import { BsArrowDownUp, BsThreeDotsVertical } from "react-icons/bs";

interface User {
  id : number; // user_id
  username : string;
  language: string[];
  email: string;
  submission_count: number;
}

const Users = () => {
  let [users, setUsers] = useState<User[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [nameSort, setNameSort] = useState(null);
  const [subSort, setSubSort] = useState(null);

  const handleIssueCertificate = (name: string) => {
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
      doc.text(name, 95, 120);

      doc.save("certificate.pdf");
    };

    img.src = 'public/images/certificate.png';
  }

  useEffect(()=> {
    const fetchUsers = async() => {
      const response = await fetch("http://bhasha.iiit.ac.in/crowd/api/users/");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const response = await fetch("http://bhasha.iiit.ac.in/crowd/api/submissions/");
      const data = await response.json();
      console.log(data);
      setSubmissions(data);
    };

    fetchSubmissions();
  }, []);

  if(searchTerm.length > 0){ 
    users = users.filter(para=> para.username.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  switch(nameSort){
    case "asc":
      users.sort((a, b) => a.username.localeCompare(b.username));
      break;
    case "desc":
      users.sort((a, b) => b.username.localeCompare(a.username));
      break;
    default:
      break;
  }

  switch(subSort){
    case "asc":
      users.sort((a, b) => a.submission_count - b.submission_count);
      break;
    case "desc":
      users.sort((a, b) => b.submission_count - a.submission_count);
      break;
    default:
      break;
  }
  
  return (
    <ScrollShadow className="px-4 h-[90vh]">

      <div className="flex items-center">
        <div className="flex justify-center font-bold text-5xl p-6">
          <Input
            isClearable
            variant="bordered"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableColumn className="flex gap-x-2 items-center">
            NAME 
            <div onClick={()=> setNameSort(nameSort === 'desc' ? 'asc' : nameSort === 'asc' ? 'desc' : 'asc')}>  
              <BsArrowDownUp />
            </div>
          </TableColumn>
          <TableColumn>LANGUAGES</TableColumn>
          <TableColumn>EMAIL ID</TableColumn>
          <TableColumn className="flex gap-x-2 items-center">
            Submissions
            <div onClick={()=> setSubSort(subSort === 'desc' ? 'asc' : subSort === 'asc' ? 'desc' : 'asc')}>  
              <BsArrowDownUp />
            </div> 
          </TableColumn>
        </TableHeader>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.language}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="flex gap-x-12 items-center">
                {user.submission_count}
                <Dropdown>
                  <DropdownTrigger>
                      <BsThreeDotsVertical />
                  </DropdownTrigger>
                  <DropdownMenu>
                      <DropdownItem>
                        <div onClick={handleIssueCertificate(user.username)}>
                          Issue Certificate
                        </div>
                      </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

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
                <Button color="primary" className="ml-10 mt-4" >Issue Certificate</Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

    </ScrollShadow>
  )
}

export default Users;