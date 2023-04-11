import { Box, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeltonCard from "./SkeltonCard";
import { Genre } from "../hooks/useGenre";
import PlatformSelector from "./PlatformSelector";
import { Platform } from "../hooks/usePlatforms";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, loading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && error}

      <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} gap={10}>
        {loading && skeletons.map((i) => <SkeltonCard key={i} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
