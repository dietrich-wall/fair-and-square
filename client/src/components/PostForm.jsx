import React from 'react'

const PostForm = () => {
  return (
    <div>
      <form id="name" action='http://localhost:8080/user' method='POST'>
        <input type="text" id="name" name="name"/>
        <input type="submit" value="give name now"></input>
      </form>
    </div>
  )
}

export default PostForm