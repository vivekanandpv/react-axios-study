import React from 'react';
import { httpClient } from './axios-instance';

const Playground = (props) => {
  const [getResult, setGetResult] = React.useState('Not initiated');
  const [postResult, setPostResult] = React.useState('Not initiated');
  const [putResult, setPutResult] = React.useState('Not initiated');
  const [patchResult, setPatchResult] = React.useState('Not initiated');
  const [deleteResult, setDeleteResult] = React.useState('Not initiated');

  const callGet = () => {
    httpClient
      .get('users')
      .then((r) => {
        console.log('GET', r.data);
        setGetResult('Successful');
      })
      .catch((e) => setGetResult(`Failed: ${e.message}`));
  };

  const callPost = () => {
    httpClient
      .post('users', {
        firstName: 'Krishna',
        lastName: 'Sharma',
        email: 'krishna@gmail.com',
        city: 'Nagpur',
      })
      .then((r) => {
        console.log('POST', r.data);
        setPostResult('Successful');
      })
      .catch((e) => setPostResult(`Failed: ${e.message}`));
  };

  const callPut = () => {
    httpClient
      .put('users/1', {
        firstName: 'Krishna',
        lastName: 'Sharma',
        email: 'krishna@gmail.com',
        city: 'Nagpur',
      })
      .then((r) => {
        console.log('PUT', r.data);
        setPutResult('Successful');
      })
      .catch((e) => setPutResult(`Failed: ${e.message}`));
  };

  const callPatch = () => {
    httpClient
      .patch('users/1', {
        firstName: 'Krishna',
        lastName: 'Sharma',
        email: 'krishna@gmail.com',
        city: 'Nagpur',
      })
      .then((r) => {
        console.log('PATCH', r.data);
        setPatchResult('Successful');
      })
      .catch((e) => setPatchResult(`Failed: ${e.message}`));
  };

  const callDelete = () => {
    httpClient
      .delete('users/1')
      .then((r) => {
        console.log('DELETE', r.data);
        setDeleteResult('Successful');
      })
      .catch((e) => setDeleteResult(`Failed: ${e.message}`));
  };
  return (
    <>
      <h4 className='mb-4'>
        <button className='btn btn-primary btn-sm w-25 me-4' onClick={callGet}>
          GET
        </button>{' '}
        <span className={getResult.startsWith('Failed') ? 'text-danger' : null}>
          {getResult}
        </span>
      </h4>
      <h4 className='mb-4'>
        <button className='btn btn-primary btn-sm w-25 me-4' onClick={callPost}>
          POST
        </button>{' '}
        <span
          className={postResult.startsWith('Failed') ? 'text-danger' : null}
        >
          {postResult}
        </span>
      </h4>
      <h4 className='mb-4'>
        <button className='btn btn-primary btn-sm w-25 me-4' onClick={callPut}>
          PUT
        </button>{' '}
        <span className={putResult.startsWith('Failed') ? 'text-danger' : null}>
          {putResult}
        </span>
      </h4>
      <h4 className='mb-4'>
        <button
          className='btn btn-primary btn-sm w-25 me-4'
          onClick={callPatch}
        >
          PATCH
        </button>{' '}
        <span
          className={patchResult.startsWith('Failed') ? 'text-danger' : null}
        >
          {patchResult}
        </span>
      </h4>
      <h4 className='mb-4'>
        <button
          className='btn btn-primary btn-sm w-25 me-4'
          onClick={callDelete}
        >
          DELETE
        </button>{' '}
        <span
          className={deleteResult.startsWith('Failed') ? 'text-danger' : null}
        >
          {deleteResult}
        </span>
      </h4>
    </>
  );
};

export default Playground;
