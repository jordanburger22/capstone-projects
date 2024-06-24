import { useNavigate } from "react-router-dom"

function Home(){
    const navigate = useNavigate()

    return(

        <div className="home">
            <h1 className='home-header'>ValorantData</h1>
            <p className="home-p">An all in one place to get the information you need about Valorant agents and weapons simply and quickly.</p>
            <br></br>

            <div className='home-main-content'>
                <div onClick={() => navigate('/agents')} className="home-box-agent">
                    <h1 className="box-h1">Agents</h1>
                </div>

                <div onClick={() => navigate('/weapons')} className="home-box-weapon">
                    <h1 className="box-h1">Weapons</h1>
                </div>
            </div>
        </div>
    )
}

export default Home