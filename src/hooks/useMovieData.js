import request, { gql } from "graphql-request";
import { useQuery } from "react-query";
import { showToast } from "../utils/toastService";

const allMovies = gql`
  query Query {
    allFilms {
      films {
        title
        id
      }
    }
  }
`;

export const useMovieData = () => {
  return useQuery(
    ["movies"],
    async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        allMovies,
      ),
    {
      onError: () =>
        showToast("Something went wrong to fetch star wars movies data"),
    },
  );
};
