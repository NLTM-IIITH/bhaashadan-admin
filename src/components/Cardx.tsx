import { Card, CardBody, Button, ScrollShadow, Image } from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { LiaUploadSolid } from "react-icons/lia";
import { MdOutlineDateRange } from "react-icons/md";

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

interface Props{
  paragraph: Paragraph;
}

const Cardx = ({paragraph}: Props) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div>
      <Card className="w-[15rem] h-[10rem]">
        <CardBody>
          <p>Some Random Text.</p>
        </CardBody>
          <div className="flex justify-evenly">
            <div className="flex items-center"><LiaUploadSolid />{paragraph.submissions?.length}</div>
            <div className="flex items-center"><MdOutlineDateRange />{new Date(paragraph.upload_date).toISOString().split('T')[0]}</div>
          </div>
        <Button onPress={onOpen}>More Details</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Details</ModalHeader>
              <ModalBody>
                <div className="flex flex-col">
                  <h1>ID: {paragraph.id}</h1>
                  <h1>Language: {paragraph.language}</h1>
                  <h1>Submissions: {paragraph.submissions?.length}</h1>
                  <h1>Created on: {new Date(paragraph.upload_date).toISOString().split('T')[0]}</h1>
                </div>
                <h1 className="text-xl flex justify-center font-semibold">Submissions by users</h1>
                <ScrollShadow className="grid grid-cols-4 gap-x-10 gap-y-10 w-[850px] h-[400px]">
                  {paragraph.submissions?.map((sub)=> (
                    <>
                      <Image
                        width={200}
                        alt={"submitted by user"+sub.user_id}
                        src={sub.image}
                      />
                      <p>Submission ID: {sub.id}</p>
                      <p>Submitted by user id: {sub.user_id}</p>
                      <p>Submitted by: {sub.username}</p>
                      <p>Image Uploaded on: {new Date(sub.upload_date).toISOString().split('T')[0]}</p>
                    </>
                  ))}
                </ScrollShadow>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </Card>
    </div>
  );
};

export default Cardx;
