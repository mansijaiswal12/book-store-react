import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../features/MySlice';

const Home = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();     

    const handleDelete = (id) => {
        dispatch(deleteUser({id: id}))

    }
  return (
    <div className='container '>
        <h2 className='text-center mt-4'>Book Store</h2>
        <Link to="/create" className='btn btn-success mb-4'>Add</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>BookName</th>
                    <th>Category</th>
                    <th>Author</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.bookname}</td>
                        <td>{user.category}</td>
                        <td>{user.author}</td>
                        <td>{user.desc}</td>
                        <td>
                            <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                            <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>X</button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>

    </div>
  )
}

export default Home;