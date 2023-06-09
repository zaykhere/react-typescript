import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {

  const {games, error, isLoading} = useGames();
  const skeletons = [1,2,3,4,5,6];

  console.log({isLoading})

  return (
    <>
      {error && <Text> {error} </Text>}
      <SimpleGrid padding={10} columns={{
        sm: 1,
        md: 2,
        lg:3, 
        xl: 4
      }} spacing={10}>
        {isLoading && skeletons.map((skeleton) => (
          <GameCardSkeleton key={skeleton} isLoading={isLoading}/>
        ))}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
