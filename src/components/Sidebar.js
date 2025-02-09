import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/taskSlice';

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => dispatch(setFilter('all'))}>All Tasks</li>
        <li onClick={() => dispatch(setFilter('pending'))}>Pending</li>
        <li onClick={() => dispatch(setFilter('completed'))}>Completed</li>
      </ul>
    </div>
  );
};

export default Sidebar;
