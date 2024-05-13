import { Card, CardBody, Button, Image } from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

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
    <div>
      <Card className="w-[17rem] h-[15rem]">
        <CardBody className=" flex justify-center">
            <Image
                className="w-[17rem]"
                alt="NextUI hero Image"
                src={submission.image}
            />
        </CardBody>
        <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1 className="text-xl flex justify-center font-semibold">Details</h1></ModalHeader>
              <ModalBody>
                <div className="flex flex-col">
                  <h1>Submission ID: {submission.id}</h1>
                  <h1>Uploaded by User ID: {submission.user_id}</h1>
                  <h1>Uploaded by: {submission.username}</h1>
                  <h1>Upload date: {new Date(submission.upload_date).toISOString().split('T')[0]}</h1>
                  <h1>User Contributions this month: 25</h1>
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
    </div>
  );
};

export default SubmCardx;