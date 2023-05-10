import React from "react";
import Cards from "./Cards";
import Modal from "./modal";

function CardContainer({ items }) {
  console.log(items);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Cards
        image={items.img}
        names={items.name}
        ages={items.age}
        ranks={items.ranking}
        onClick={() => setIsOpen(true)}
      />
      <Modal
        images={items.img}
        names={items.name}
        ages={items.age}
        ranks={items.ranking}
        open={isOpen}
        bio = {items.description}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}

export default CardContainer;
