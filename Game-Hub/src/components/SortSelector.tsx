import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onOrderSelect: (order: string | null) => void;
  selectedOrder: string | null;
}

function SortSelector({ onOrderSelect, selectedOrder }: Props) {
  const sortOrder: { value: string; label: string }[] = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrder.find(
    (order) => order.value === selectedOrder
  );

  return (
    <Menu>
      <MenuButton fontSize={15} as={Button} rightIcon={<BsChevronDown />}>
        Sort By : {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            fontSize={18}
            onClick={() => onOrderSelect(order.value)}
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
export default SortSelector;
