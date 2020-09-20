import React,{useEffect} from 'react'

export default function Post() {
  document.title = "Post"
  useEffect(() => {
    console.log("[Post] Load")
  }, [])
  // console.log("[Post] Load")
  return (
    <div>
      Post
    </div>
  )
}
