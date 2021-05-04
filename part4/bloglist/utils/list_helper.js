const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const blogLikes = blogs.map(blog => blog.likes)
  const sumReducer = (sum, val) => (sum + val)
  
  const total = blogLikes.reduce(sumReducer, 0)

  if (blogs.length === 0) {
    return 0
  } else {
    return total
  }

}

module.exports = {
  dummy, 
  totalLikes
}