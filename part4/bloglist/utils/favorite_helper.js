const favoriteBlog = (blogs) => {
    const blogLikes = blogs.map((blog) => blog.likes);
    const mostLikes = blogs[blogLikes.indexOf(Math.max(...blogLikes))]
    const mostLikesBlog = {
        title: mostLikes.title,
        author: mostLikes.author,
        likes: mostLikes.likes,
    }
    return mostLikesBlog
}

module.exports = {
    favoriteBlog,
};