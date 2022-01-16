const mostNumber = (array) => {
    let count = {};
    let compare = 0;
    let mostAuthor;
    for (let i = 0; i < array.length; i++ ) {
        let ele = array[i];
        if (count[ele] === undefined ) {
            count[ele] = 1
        } else {
            count[ele] = count[ele] + 1
        }
        if (count[ele] > compare) {
            compare = count[ele]
            mostAuthor = array[i]
        }
    } return {
        author: mostAuthor,
        blogs: compare,
    }
}

const mostBlog = (blogs) => {
    const blogAuthors = blogs.map((blog) => blog.author);
    return mostNumber(blogAuthors)
}

module.exports = {
    mostBlog,
};