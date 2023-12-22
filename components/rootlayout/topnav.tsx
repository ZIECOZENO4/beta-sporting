'use client'
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "@nextui-org/react";


export default function Navtwo() {

  const dropdownItems = [
    ['Sports', 'Announcement', 'Informations', 'User Info', 'Delete User'],
    ['Top Clubs', 'Table', 'Leagues', 'Cups', 'competitions'],
    ['News', 'Updates', 'Trends', 'World News'],
    ['Top Leagues', 'Top Players', 'Records', 'Cups'],
    ['CR7 Zones', 'Messi Zones', 'Violence Zone', 'Debate Zone'],
    ['Blog', 'Categories', 'Features', 'Contact', 'About'],
    ['FIFA 2023', 'Pes 2023', 'Beta Suopa', 'Count Down', 'Accelerator', 'Beta Visuals'],
    ['American Football', 'Ice Hockey', 'Baseball', 'Volleyball','Boxing','Badmenton'],
  ]; // Define the items for each dropdown

  const renderDropdown = (items: string[], buttonText: string) => (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">
          {buttonText}
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
        <DropdownSection title="Beta Sporting" showDivider>
          {items.map((item, index) => (
            <DropdownItem
              shortcut="BS"
              description={`Find all needed tips in ${item}`}
              key={index}
              onClick={() => window.location.href = `/${item.toLowerCase().replace(' ', '-')}`}
            >
              {item}
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
  

  
  return (
    <div className="hidden md:bg-slate-400 md:pb-5 md:flex md:space-x-4 md:p-10 md:pt-3">
      {dropdownItems.map((items, i) => (
        <div key={i} className="md:w-1/3">
          {renderDropdown(items, i === 0 ? "Home" : i === 1 ? "Football" : i === 2 ? "News" : i === 3 ? "Basket Ball": i === 4 ? "Zones": i === 5 ? "Blog": i === 6 ? "Gaming": i === 7 ? "More Sports" : "")}
        </div>
      ))}
    </div>
  );
}
