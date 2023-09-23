import Card from './Card'
import './Card.css'
import staffList from './staffList'

import { Button } from 'semantic-ui-react'

 function cardComponent(staff,  i)
 {
    return <Card
    key={staff.key}
    avatar={staff.avatar}
    name={staff.name}
    position={staff.position}
    rating={staff.rating}
    author={staff.author}
    Auther = {staff.Auther}
/>
 }
function CardList123() {
    return (
        <div className='upper'>
            {/* <h1>Featured Articles </h1> */}
            <h1>Featured Tutorials </h1>
            <div className='row'>
                {staffList.slice(0,3).map(cardComponent)}

            </div>
            {/* <Button> See all articles</Button> */}

            {/* <h1>Featured Tutorials </h1> */}
            
            <div className='row'>
                {staffList.slice(3,6).map(cardComponent)}

            </div>
            <Button> See all tutorials</Button>
        </div>
        


    )

}

export default CardList123