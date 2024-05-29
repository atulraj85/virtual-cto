export async function GET() {
  try {
    const data = {
      "/api": "Root API Endpoint",
      "/api/movies/getAll":
        "Returns a list of 10 movies sorted by Metacritic score in descending order",
      "/api/movies/create": "Endpoint to create a new movie",
      "/api/movies/[id]":
        "Endpoint to retrieve a specific movie by its ID, GET, PUT, DELETE",
      "/api/movies/page?page=2&size=2":
        "Returns a list of movies with page number [page] and size of page [size]",
      "/api/movies/genres": "Returns a list of unique genres and their counts",
      "/api/movies/averageMetacritic":
        "Returns the average Metacritic score of all movies",
      "/api/movies/averageMetacriticByGenre":
        "Returns the average Metacritic score for specific genres",
      "/api/movies/titles": "Returns a list of movie titles",
      "/api/movies/filter":
        "Returns a list of movies filtered by specific criteria",
    };
    return Response.json(data);
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
}
