import { findPosts } from "./postController.js";

export async function getSearchItems(req, res, next) {
  let searchQuery = req?.params?.searchString?.trim();

  searchQuery = decodeURIComponent(searchQuery);

  if (!searchQuery.length) return;

  const posts = await findPosts(searchQuery);
  //   const author = findAuthors(searchQuery);

  const searchResults = { posts };

  res.json(searchResults);
}
