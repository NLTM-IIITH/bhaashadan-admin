import { Card, CardBody, Button, ScrollShadow, Image } from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

const Cardx = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div>
      <Card className="w-[11rem] h-[8rem]">
        <CardBody>
          <p>Some Random Text.</p>
        </CardBody>
        <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Details</ModalHeader>
              <ModalBody>
                <div className="flex flex-col">
                  <h1>ID: 1234567890</h1>
                  <h1>Language: Telugu</h1>
                  <h1>Upload date: 01-01-2224</h1>
                </div>
                <h1 className="text-xl flex justify-center font-semibold">Submissions</h1>
                <ScrollShadow className="grid grid-cols-4 gap-x-10 gap-y-10 w-[850px] h-[400px]">
                  {Array.from({ length: 18 }).map((_) => (
                    <Image
                      width={200}
                      alt="NextUI hero Image"
                      src="https://yespunjab.com/wp-content/uploads/2021/01/Good-Handwriting.jpg"
                    />
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
