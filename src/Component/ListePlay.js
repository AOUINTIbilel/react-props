import React from 'react';
import Ply from './Ply';
import './ListP.css';


const ListePlay = ({Players}) => {
    // console.log(props)
    // const {name} = props;
    console.log("Players : " , Players)
  return (
    <div className='lisPly'>
        {Players.map((elm) => <Ply obj={elm}  />)}
    </div>
  )
}

export default ListePlay