import { Card, CardBody, Button, Image } from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

const SubmCardx = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div>
      <Card className="w-[17rem] h-[15rem]">
        <CardBody className=" flex justify-center">
            <Image
                className="w-[17rem]"
                alt="NextUI hero Image"
                src="https://yespunjab.com/wp-content/uploads/2021/01/Good-Handwriting.jpg"
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
                  <h1>Uploaded by: User 1024</h1>
                  <h1>Upload date: 01-01-2024</h1>
                  <h1>User Contributions this month: 444</h1>
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