import { Button } from "./styles";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button className="isActive">
        {number}
      </Button>
    );
  }

  return (
    <Button
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
}
