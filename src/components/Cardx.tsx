import { Card, CardBody, Button, ScrollShadow, Image } from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { MdLanguage, MdNumbers, MdOutlineDateRange } from "react-icons/md";
import { RiNumbersFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";

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

interface Props{
  paragraph: Paragraph;
}

const Cardx = ({paragraph}: Props) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div>
      <Card className="w-[18rem] h-[16rem]">
        <CardBody className="flex overflow-y-auto h-[14rem]">
          {paragraph.text}
        </CardBody>
          <div className="flex justify-evenly pt-2">
            <div className="flex items-center gap-x-2"><RiNumbersFill />{paragraph.submissions?.length}</div>
            <div className="flex items-center gap-x-2"><MdOutlineDateRange />{new Date(paragraph.upload_date).toISOString().split('T')[0]}</div>
          </div>
        <Button onPress={onOpen}>View Submissions</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center text-2xl">Paragraph Details</ModalHeader>
              <ModalBody>

                  <div className="flex justify-evenly py-4">
                    <div className="bg-[#3d3d3df1] w-24 h-24 flex flex-col rounded-xl items-center py-4">
                      <MdNumbers color="white" className="w-12 h-12"/>
                      <h1 className="text-[#fff] text-[20px]">{paragraph.id}</h1>
                    </div>

                    <div className="bg-[#3d3d3df1] w-24 h-24 flex flex-col rounded-xl items-center py-4">
                      <MdLanguage color="white" className="w-12 h-12"/>
                      <h1 className="text-[#fff] text-[20px]">{paragraph.language}</h1>
                    </div>

                    <div className="bg-[#3d3d3df1] w-24 h-24 flex flex-col rounded-xl items-center py-4">
                      <RiNumbersFill color="white" className="w-12 h-12"/>
                      <h1 className="text-[#fff] text-[20px]">{paragraph.submissions?.length}</h1>
                    </div>

                    <div className="bg-[#3d3d3df1] w-24 h-24 flex flex-col rounded-xl items-center py-4">
                      <MdOutlineDateRange color="white" className="w-12 h-12"/>
                      <h1 className="text-[#fff] text-[15px]">{new Date(paragraph.upload_date).toISOString().split('T')[0]}</h1>
                    </div>
                  </div>

                <h1 className="text-xl flex justify-center font-semibold">Submissions by users</h1>
                <ScrollShadow className="grid grid-cols-3 gap-x-10 gap-y-10 w-[850px] h-[400px]">
                  {paragraph.submissions?.length > 0 ? (
                      paragraph.submissions.map((sub) => (
                          <div className="flex flex-col items-center">
                              <Image
                                  width={150}
                                  alt={"submitted by user"+sub.user_id}
                                  src={sub.image}
                              />
                              <div className="py-2">
                                  <p className="flex gap-x-2 items-center"><FaUser /> {sub.username}</p>
                                  <p className="flex gap-x-2 items-center"><MdOutlineDateRange /> {new Date(sub.upload_date).toISOString().split('T')[0]}</p>
                              </div>
                          </div>
                      ))
                  ) : (
                      <div className="flex justify-center">
                          <p>No submissions yet.</p>
                      </div>
                  )}
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
