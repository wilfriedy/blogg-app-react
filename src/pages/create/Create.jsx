import {useState} from 'react'
import './create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(author,title,body)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label >
          <span>Title</span>
          <input type="text" 
          onChange={(e)=>{setTitle(e.target.value)}}
          value = {title}
          />
        </label>
        <label >
          <span>Author</span>
          <input type="text" 
          onChange={(e)=>{setAuthor(e.target.value)}}
          value ={author}
          />
        </label>
        <label >
          <span>Body</span>
          <textarea 
           id="post-content" cols="30" rows="10"
           onChange={(e)=>{setBody(e.target.value)}
          }
          value = {body}
           ></textarea>
        </label>
        <button>Post article</button>
      </form>
    </div>
  )
}
