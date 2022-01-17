const groupBy = (arr) => {
  const res = Array.from(
    arr.reduce(
      (m, { author, likes }) => m.set(author, (m.get(author) || 0) + likes),
      new Map()
    ),
    ([author, likes]) => ({ author, likes })
  );
  return res;
};

const mostLikes = (blogs) => {
  const blogAuthors = blogs.map((blog) => {
    let blogLikes = {};
    blogLikes["author"] = blog.author;
    blogLikes["likes"] = blog.likes;
    return blogLikes;
  });
  const newAuthorList = groupBy(blogAuthors);
  const mostLikesNumber = Math.max(...newAuthorList.map((obj) => obj.likes));
  const mostLikesAuthor = newAuthorList.find(
    ({ likes }) => likes === mostLikesNumber
  );
  return mostLikesAuthor;
};

module.exports = {
  mostLikes,
};
