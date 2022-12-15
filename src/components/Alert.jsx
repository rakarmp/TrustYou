import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";

export default function ButtonAlert() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Button onClick={onOpen}>Tambah Artikel ?</Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Baca Dahulu</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Fork Repositori Buat Branch Kamu Sendiri Dan Tambah Artikel Di
            Folder `src/data/blog` Tambahkan File Dengan Extension .mdx Dan Buat
            Artikelnya Terus Push Perubahan Ke Branch Kamu Dan Jangan Lupa Pull
            Request Ke Branch Main Gua
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Kembali
            </Button>
            <a
              href="https://github.com/grizz12/TrustYou"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button colorScheme="blue" ml={3}>
                Lanjut
              </Button>
            </a>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
