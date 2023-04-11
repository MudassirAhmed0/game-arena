import { Button, HStack, Image, ListItem } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useGenre";

interface Props {
  genre: Genre;
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreListItem = ({ genre, onSelect, selectedGenre }: Props) => {
  return (
    <ListItem paddingY="5px">
      <HStack>
        <Image
          boxSize="32px"
          borderRadius={8}
          objectFit="cover"
          src={getCroppedImageUrl(genre.image_background)}
        />
        <Button
          fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"}
          fontSize={"lg"}
          variant="link"
          onClick={() => onSelect(genre)}
        >
          {" "}
          {genre.name}
        </Button>
      </HStack>
    </ListItem>
  );
};

export default GenreListItem;
