import React, { useState } from 'react'
import { addUser } from '../features/MySlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [bookname, setbookname] = useState("")
    const [category, setcategory] = useState("")
    const [author, setauthor] = useState("")
    const [desc, setdesc] = useState("")

    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1, bookname, category, author, desc}))
        navigate('/')
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Add New Book</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">BookName:</label>
                    <input type="text" name='name' className='form-control' placeholder='Enter booName' autoComplete='off' onChange={(e) => setbookname(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Category:</label>
                    <input type="text" name='email' className='form-control' placeholder='Enter category' autoComplete='off' onChange={(e) => setcategory(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="job">Author:</label>
                    <input type="text" name='job' className='form-control' placeholder='Enter author' autoComplete='off' onChange={(e) => setauthor(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="salary">Description:</label>
                    <input type="text" name='salary' className='form-control' placeholder='Enter description' autoComplete='off' onChange={(e) => setdesc(e.target.value)}/>
                </div><br />
                <button className='btn btn-info'>Submit</button>
            </form>

        </div>

    </div>
    
  )
}

export default Create;