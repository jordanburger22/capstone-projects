import { Link } from "react-router-dom"
import { useContext } from "react"
import dataContext from "./dataContext"


function Agents(){
    
    

    const data = useContext(dataContext)
    const agents = data.agents

    
    const agentList = agents.map(agent => (
        agent.isPlayableCharacter===true && 
        <div 
            key={agent.uuid} 
            className="agent-list-container">
                
            <Link to={`/agents/${agent.uuid}`}>
                <h1 className="agent-list-name">{agent.displayName}</h1>
                
                <img 
                    src={agent.displayIcon}
                    className="agent-list-img"
                />
                
            </Link>
        </div>
    ))


    return(
        // <div className="agent-list-container" style={setBackground}>
            
        //     <img 
        //         src={props.data.displayIcon}
        //         className="agent-list-img"
        //     />
        //     <h1 className="agent-list-name">{props.data.displayName}</h1>
        // </div>
        <div className="agent-list">
            <h1 className="agent-header">Agents</h1>
            {agentList}
        </div>
    )
}

export default Agents