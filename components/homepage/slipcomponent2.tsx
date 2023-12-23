'use client'
import {Select,  SelectItem} from "@nextui-org/react";;
import {Avatar } from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,  useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";

import React from "react";

export default function SlipComponent2() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
  <div className=" w-[full]">
<div>
<Select
      className="max-w-xs"
      label="Select country"
    >
      <SelectItem
        key="argentina"
        startContent={<Avatar alt="Argentina" className="w-6 h-6" src="https://flagcdn.com/ar.svg" />}
      >
        Argentina
      </SelectItem>
      <SelectItem
        key="venezuela"
        startContent={<Avatar alt="Venezuela" className="w-6 h-6" src="https://flagcdn.com/ve.svg" />}
      >
        Venezuela
      </SelectItem>
      <SelectItem
        key="brazil"
        startContent={<Avatar alt="Brazil" className="w-6 h-6" src="https://flagcdn.com/br.svg" />}
      >
        Brazil
      </SelectItem>
      <SelectItem
        key="switzerland"
        startContent={
          <Avatar alt="Switzerland" className="w-6 h-6" src="https://flagcdn.com/ch.svg" />
        }
      >
        Switzerland
      </SelectItem>
      <SelectItem
        key="germany"
        startContent={<Avatar alt="Germany" className="w-6 h-6" src="https://flagcdn.com/de.svg" />}
      >
        Germany
      </SelectItem>
      <SelectItem
        key="spain"
        startContent={<Avatar alt="Spain" className="w-6 h-6" src="https://flagcdn.com/es.svg" />}
      >
        Spain
      </SelectItem>
      <SelectItem
        key="france"
        startContent={<Avatar alt="France" className="w-6 h-6" src="https://flagcdn.com/fr.svg" />}
      >
        France
      </SelectItem>
      <SelectItem
        key="italy"
        startContent={<Avatar alt="Italy" className="w-6 h-6" src="https://flagcdn.com/it.svg" />}
      >
        Italy
      </SelectItem>
      <SelectItem
        key="mexico"
        startContent={<Avatar alt="Mexico" className="w-6 h-6" src="https://flagcdn.com/mx.svg" />}
      >
        Mexico
      </SelectItem>
    </Select>
</div>
<div>



    <div className="flex flex-col">
        <Input
          label="Price"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
          endContent={
            <div className="flex items-center text-black">
              <label className="sr-only" htmlFor="currency">
                Currency
              </label>
              <select
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                <option>USD</option>
                <option>ARS</option>
                <option>EUR</option>
                <option>NGN</option>
              </select>
            </div>
          }
          type="number"
        />
        <Input
          type="text"
          label="text"
          placeholder="Place your beta bet"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center text-black">
              <span className="text-default-400 text-small">CODEBETA</span>
            </div>
          }
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">.00BS</span>
            </div>
          }
        />
      </div>
      <div className="flex align-middle flex-row items-center justify-center mt-5 gap-3 ">
    <Button className=" bg-green-600 w-[60%] items-center font-heading" isLoading>
      Place Bet On Beta
    </Button>
    <Button onPress={onOpen} color="secondary" className=" rounded-full  ml-1">Ask Me</Button>
<Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Beta Sporting Guide</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="success" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}>
                  I KNOW
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
</div>
    </div>  
</div>   
  );
}
