import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { deleteUser } from '../redux/user/userActions';

const ListUser = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  const genderType = (key) => {
    switch (key) {
      case 'm':
        return 'Male';
      case 'f':
        return 'Female';
      default:
        return 'Other';
    }
  };

  return (
    <div className='row'>
      <div className='col-md-12'>
        <Link to='/new' className='btn btn-primary float-right my-3'>
          <small className='fa fa-plus mr-2' />
          New User
        </Link>
      </div>
      <div className='col-md-12 table-responsive'>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Gender</th>
              <th scope='col'>Phone</th>
              <th scope='col'>City</th>
              <th scope='col'>Pincode</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {users.length ? (
              users.map((user, idx) => (
                <tr key={idx}>
                  <th scope='row'>{idx + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{genderType(user.gender)}</td>
                  <td>{user.phone}</td>
                  <td>{user.city}</td>
                  <td>{user.pincode}</td>
                  <td>
                    <Link
                      to={`/edit/${user.id}`}
                      className='badge  bg-warning mr-2'
                      style={{ cursor: 'pointer' }}>
                      Edit
                    </Link>
                    <a
                      className='badge bg-danger text-light ml-2'
                      style={{ cursor: 'pointer' }}
                      onClick={() => dispatch(deleteUser(user.id))}>
                      Delete
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className='text-center'>
                  No data. Create a new one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListUser;
