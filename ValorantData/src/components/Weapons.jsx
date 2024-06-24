import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import dataContext from "./dataContext"

function Weapons(props){

    const data = useContext(dataContext)
    const weapons = data.weapons

    
    const weaponsList = weapons.map(weapons => (
        <Link to={`/weapons/${weapons.uuid}`} className="weapon-link" key={weapons.uuid}>
            <div className="weapons-list-container">
                    <h1 className="weapons-list-name">{weapons.displayName}</h1>
                    <img 
                        src={weapons.displayIcon}
                        className="weapons-list-img"
                    />
            </div>
         </Link>
    ))
    return(
        <div className="weapon-list">
            <h1 className="weapons-header">Weapons</h1> 
            {weaponsList}
        </div>
    )
}

export default Weapons