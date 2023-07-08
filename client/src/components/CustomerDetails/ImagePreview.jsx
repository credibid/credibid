import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Link,
} from '@chakra-ui/react';

const ImagePreview = ({ document }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <img
        src={document.link}
        alt={document.name}
        height='50'
        width='50'
        onClick={openModal}
        style={{ cursor: 'pointer' }}
      />
      <Modal isOpen={isOpen} onClose={closeModal} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{document.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img
              src={document.link}
              alt={document.name}
              style={{ maxWidth: '100%' }}
            />
          </ModalBody>
          <ModalFooter>
            <Button variant='ghost' onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImagePreview;
