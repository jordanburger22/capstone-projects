import { useParams, useNavigate } from "react-router-dom"
import { useContext } from "react"
import dataContext from "./dataContext"

function WeaponDetails(){
    const navigate = useNavigate()

    const data = useContext(dataContext)
    const weapons = data.weapons

    const {weaponId} = useParams()
    const foundWeapon = weapons.find(weapon => weapon.uuid === weaponId)

    const weaponSkins = foundWeapon.skins

    const filteredStandard = weaponSkins.filter(skin => skin.displayName !== `Standard ${foundWeapon.displayName}` )

    const randomFiltered = filteredStandard.filter(skin => skin.displayName !== "Random Favorite Skin")
   

    const skinDisplay1 = randomFiltered.map( skin => (
        <div className="skin-container" key={skin.uuid}>
                <h1>{skin.displayName}</h1>
                <img
                    className="skin-image" 
                    src={skin.chromas[0].fullRender}
                    />
            
        </div>
    ))

   
    
 

    return(
        <div className="weapon-data-container">
            {foundWeapon.category !== "EEquippableCategory::Melee" && 
            <div className="gun-container">

                <img 
                    src={foundWeapon.displayIcon}
                    className='weapon-img'
                    />
                <div className="weapon-basic-data">
                    <h1>{foundWeapon.displayName}</h1>
                    <h2>{foundWeapon.shopData.category}</h2>
                    <h3>Price: {foundWeapon.shopData.cost}</h3>
                </div>

                <div className="weapon-base-stats">
                    <h1>Hip Fire Stats</h1>
                    <h3>Fire Rate: {foundWeapon.weaponStats.fireRate}</h3>
                    <h3>Magazine Size: {foundWeapon.weaponStats.magazineSize}</h3>
                </div>

                {foundWeapon.weaponStats.altFireType === "EWeaponAltFireDisplayType::ADS" &&
                <div className="weapon-alt-stats">
                    <h1>ADS Stats</h1>
                    <h3>Fire Rate: {foundWeapon.weaponStats.adsStats.fireRate}</h3>
                    
                    {foundWeapon.weaponStats.adsStats.burstCount > 1 && 
                    <h3>Burst Count: {foundWeapon.weaponStats.adsStats.burstCount}</h3>}

                    <h3>Run Speed Multiplier: {foundWeapon.weaponStats.adsStats.runSpeedMultiplier}</h3>
                    <h3>First Bullet Accuracy: {foundWeapon.weaponStats.adsStats.firstBulletAccuracy}</h3>
                </div>}

                {foundWeapon.weaponStats.altFireType === "EWeaponAltFireDisplayType::Shotgun" && 
                <div className="weapon-alt-stats">
                    <h1>Alt Fire Stats</h1>
                    <h2>Alt Fire Style: Shotgun</h2>
                    <h3>Shotgun Pellet Count: {foundWeapon.weaponStats.altShotgunStats.shotgunPelletCount}</h3>
                    <h3>Burst Rate: {foundWeapon.weaponStats.altShotgunStats.burstRate}</h3>
                </div>}

                {foundWeapon.weaponStats.altFireType === "EWeaponAltFireDisplayType::AirBurst" && 
                <div className="weapon-alt-stats">
                    <h1>Alt Fire Stats</h1>
                    <h2>Alt Fire Style: AirBurst</h2>
                    <h3>Shotgun Pellet Count: {foundWeapon.weaponStats.airBurstStats.shotgunPelletCount}</h3>
                    <h3>Burst Distance: {foundWeapon.weaponStats.airBurstStats.burstDistance}</h3>    
                </div>}

            </div>}

            {foundWeapon.category === "EEquippableCategory::Melee" &&
            <div className="melee-container">
                <img 
                    src={foundWeapon.displayIcon}
                    className='melee-img'
                    />

                <h1 className="melee-name">{foundWeapon.displayName}</h1>
            </div>
            }
            
            <h1 className="weapon-skin-h1">Weapon Skins</h1>
            {skinDisplay1}
            <p className="back-to-weapons" onClick={() => navigate('/weapons')}>Back to Weapons</p>
        </div>
    )

}

export default WeaponDetails