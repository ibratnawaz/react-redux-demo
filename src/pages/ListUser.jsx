import React from 'react';
import { Link } from 'react-router-dom';

const ListUser = () => {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <Link to='/new' className='btn btn-primary float-right my-3'>
          <small className='fa fa-plus mr-2' />
          New User
        </Link>
      </div>
      <div className='col-md-12'>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>First</th>
              <th scope='col'>Last</th>
              <th scope='col'>Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListUser;
