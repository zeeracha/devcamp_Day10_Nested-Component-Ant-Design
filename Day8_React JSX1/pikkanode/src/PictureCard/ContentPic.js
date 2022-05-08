import React from 'react'

const ContentPic = () => {

  let Date ={ time : "8/5/2021"}
  let Like = { likes : 5}
  let Comment = { content : "🥨"}



  return (
    <>
    <h3>Date : {Date.time} </h3>
    <p>Like : {Like.likes}</p>
    <p>Comment : {Comment.content}</p>
    </>
  )
}

export default ContentPic;