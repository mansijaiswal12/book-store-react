import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../features/MySlice';

const Update = () => {
  const {id} = useParams();
  const users = useSelector((state) => state.users);
  const existingUserArray = users.filter(singleItem => singleItem.id == id);

  const {bookname, category, author, desc} = existingUserArray[0];

  const [ubookname, setbookname] = useState(bookname);
  const [ucategory, setcategory] = useState(category);
  const [uauthor, setauthor] = useState(author);
  const [udesc, setdesc] = useState(desc);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      id:id,
      bookname: ubookname,
      category: ucategory,
      author: uauthor,
      desc: udesc
    })) 
    navigate('/')
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Update Book Collection</h3>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="name">BookName:</label>
                    <input type="text" name='name' className='form-control' placeholder='Enter BookName' value={ubookname} onChange={(e) => setbookname(e.target.value)}/>
                </div>
                
                <div>
                    <label htmlFor="email">Category:</label>
                    <input type="text" name='email' className='form-control' placeholder='Enter Category' value={ucategory} onChange={(e) => setcategory(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="job">Author:</label>
                    <input type="text" name='job' className='form-control' placeholder='Enter Author' value={uauthor} onChange={(e) => setauthor(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="salary">Description:</label>
                    <input type="text" name='salary' className='form-control' placeholder='Enter Description' value={udesc} onChange={(e) => setdesc(e.target.value)}/>
                </div><br />
                <button className='btn btn-info'>Update</button>
            </form>

        </div>

    </div>
  )
}

export default Update;