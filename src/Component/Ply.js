import React from 'react'
import './ListP.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Ply = ({obj}) => {
    console.log('player card : ' , obj)
    const { Name , Nationality , Age , JerseyNumber , Team  , Image } = obj
    return (
      <div >
   <Card className='Play'  style={{ width: '18rem', backgroundColor:'lightbluege' }}>
           <img src={Image} />  
                 <Card.Body>
          <Card.Title style={{color:'red', textAlign:'center'}}> {Name}</Card.Title>
          <Card.Text style={{fontFamily: 'monospace'}}>
            Nationality : {Nationality}
            <br />
            Age : {Age}
            <br />
            JerseyNumber : {JerseyNumber}
            <br />
            Team : {Team}
            <br />
            <br />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Ply