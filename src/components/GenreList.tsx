import { Heading, List } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import GenreListItem from "./GenreListItem";

interface Props {
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelect, selectedGenre }: Props) => {
  const { data: genres, error, loading } = useGenres();
  return (
    <>
      <Heading marginBottom={3} fontSize={"3xl"}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <GenreListItem
            selectedGenre={selectedGenre}
            onSelect={onSelect}
            key={genre.id}
            genre={genre}
          />
        ))}
      </List>
    </>
  );
};

export default GenreList;
