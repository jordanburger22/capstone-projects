import { useParams, useNavigate } from "react-router-dom"
import { useContext } from "react"
import dataContext from "./dataContext"

function AgentDetails(){
    const navigate = useNavigate()

    const data = useContext(dataContext)
    const agents = data.agents

    const{agentId} = useParams()
    const foundAgent = agents.find(agent => agent.uuid === agentId)

    const agentAbilities = foundAgent.abilities

    const backgroundColors = foundAgent.backgroundGradientColors
    
    const hashtagColor = backgroundColors.map(color => "#" + color)

    const background = {
        background: `linear-gradient(50deg, ${hashtagColor})`
    }
    
    const ability = agentAbilities.map((ability, i) => (
        <div className="ability-container" key={i}>
            <img className="ability-icon" src={ability.displayIcon}/>
            <div className="ability-text">
                <h4 className="ability-text-header">{ability.displayName}</h4>
                <p className="ability-text-description">{ability.description}</p>
            </div>
        </div>
    ))

    return(
        <div className="agent-card-container" style={background}>
            <img 
                src={foundAgent.bustPortrait}
                className='agent-portrait' 
            />
            <div className="name-container">
                <h1 className="agent-card-name">{foundAgent.displayName}</h1>
                <h2 className="agent-card-role">{foundAgent.role.displayName}</h2>
                <p className="agent-card-description">{foundAgent.description}</p>
            </div>

            <div>
                {ability}
            </div>
            <p className="back-to-agents" onClick={() => navigate('/agents')}>Back to Agents</p>
        </div>
    )
}

export default AgentDetails

