import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { category } from '../redux/categories/categories';
import Interaction from './Interaction';

const Catagories = () => {
  const status = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();

  return (
    <>
      <Interaction Click={() => dispatch(category())} name="Check Status" />
      <h2>{status}</h2>
    </>
  );
};
export default Catagories;
