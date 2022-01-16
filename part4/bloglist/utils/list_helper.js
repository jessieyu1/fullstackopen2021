// const dummy = (blogs) => {
//   return 1;
// };

const totalLikes = (blogs) => {
  const blogLikes = blogs.map((blog) => blog.likes);
  return blogLikes.reduce((sum, num) => sum + num, 0);
};
module.exports = {
  // dummy,
  totalLikes,
};
