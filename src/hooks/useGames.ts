import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import useData from "./useData";
import { Genre } from "./useGenre";
import { Platform } from "./usePlatforms";
import { GameQuery } from "../App";

export interface platform {
  id: number;
  slug: string;
  name: string;
  image_background: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: "";
  platforms: { platform: platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        parent_platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.ordering,
      },
    },
    [gameQuery]
  );

export default useGames;
