import { Card, CardBody, Button, Image, ScrollShadow } from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { FaUser } from "react-icons/fa6";
import { MdLanguage, MdNumbers, MdOutlineDateRange } from "react-icons/md";
import { RiNumbersFill } from "react-icons/ri";

interface Submission{
  id: number;
  image: string;
  language: string;
  upload_date: string;
  user_id: number;
  username: string;
}

interface Props {
  submission: Submission;
}

const SubmCardx = ({submission}: Props) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <ScrollShadow className="py-2">
      <Card className="w-[18rem] h-[16rem]">
        <CardBody className="flex justify-center">
            <Image
                className="max-h-[14rem] max-w-[16rem]"
                alt="Image"
                src={submission.image}
            />
        </CardBody>
        <Button onPress={onOpen}>View Details</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1 className="text-xl flex justify-center font-semibold">Submission Details</h1></ModalHeader>
              <ModalBody>
                <div className="flex flex-col">
                  <div className="flex justify-center">
                    <Image
                      className="max-h-[470px] max-w-[800px]"
                      alt="Image"
                      src={submission.image}
                    />
                  </div>
                  <div className="flex justify-evenly py-4">

                    <div className="flex flex-col items-center">
                      <div className="bg-[#3d3d3df1] w-20 h-20 flex flex-col rounded-xl items-center py-4">
                        <MdNumbers color="white" className="w-12 h-12"/>
                        <h1 className="text-[#fff] text-[14px]">{submission.id}</h1>
                      </div>
                      <p className="text-[15px]">Submission ID</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="bg-[#3d3d3df1] w-20 h-20 flex flex-col rounded-xl items-center py-4">
                        <FaUser color="white" className="w-12 h-12"/>
                        <h1 className="text-[#fff] text-[10px]">{submission.username}</h1>
                      </div>
                      <p className="text-[15px]">Uploaded by</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="bg-[#3d3d3df1] w-20 h-20 flex flex-col rounded-xl items-center py-4">
                        <MdLanguage color="white" className="w-12 h-12"/>
                        <h1 className="text-[#fff] text-[14px]">{submission.language}</h1>
                      </div>
                      <p className="text-[15px]">Language</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="bg-[#3d3d3df1] w-20 h-20 flex flex-col rounded-xl items-center py-4">
                        <MdOutlineDateRange color="white" className="w-12 h-12"/>
                        <h1 className="text-[#fff] text-[14px]">{new Date(submission.upload_date).toISOString().split('T')[0]}</h1>
                      </div>
                      <p className="text-[15px]">Upload Date</p>
                    </div>

                  </div>
                </div>
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
    </ScrollShadow>
  );
};

export default SubmCardx;