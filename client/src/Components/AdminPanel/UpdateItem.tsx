import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useToast,
  VStack,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { ChangeEvent, useState } from "react";

interface IProps {
  id: string;
  getalldata: Function;
}

interface IUpdate {
  title: string;
  brand: string;
  image: string;
  price1: string;
  price2: string;
  off: string;
  qty: string;
}

const UpdateProduct: React.FC<IProps> = ({ id, getalldata }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [update, setUpdate] = useState<IUpdate>({
    title: "",
    brand: "",
    image: "",
    price1: "",
    price2: "",
    off: "",
    qty: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  const handleUpdate = (update: IUpdate, id: string) => {
    axios.patch(`http://localhost:8080/products/${id}`, update).then((res) => {
      getalldata();
      toast({
        title: "Hey! Akshay ❤️",
        description: `Product has been updated !! 💛`,
        status: "success",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    });
  };

  return (
    <>
      <Button
        variant="link"
        as="i"
        textDecoration={"underline"}
        fontSize="13px"
        color="#8181fb"
        _hover={{ cursor: "pointer" }}
        onClick={() => {
          onOpen();
        }}
      >
        Update prod.
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Product Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Input
                name="title"
                value={update.title}
                onChange={(e) => handleChange(e)}
                size="sm"
                type="text"
                placeholder="Enter Updated prduct title"
              />
              <Input
                name="brand"
                value={update.brand}
                onChange={(e) => handleChange(e)}
                size="sm"
                type="text"
                placeholder="Enter brand"
              />
              <Input
                name="image"
                value={update.image}
                onChange={(e) => handleChange(e)}
                size="sm"
                type="url"
                placeholder="updated image url"
              />
              <Input
                name="price1"
                value={update.price1}
                onChange={(e) => handleChange(e)}
                size="sm"
                type="number"
                placeholder="Current price"
              />
              <Input
                name="off"
                value={update.off}
                onChange={(e) => handleChange(e)}
                size="sm"
                type="number"
                placeholder="update discount"
              />
              <Input
                name="qty"
                value={update.qty}
                onChange={(e) => handleChange(e)}
                size="sm"
                type="number"
                placeholder="update quantity"
              />
              <Button
                w="full"
                colorScheme={"facebook"}
                onClick={() => handleUpdate(update, id)}
              >
                Update Product
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateProduct;
