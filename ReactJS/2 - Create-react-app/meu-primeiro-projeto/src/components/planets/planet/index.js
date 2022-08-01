import PlanetImg from "../../shared/planet-img"

const clickEvent = (planetName) => {
  alert(`Clicando em ${planetName}`);
}

const Planet = (props) => {
  return (
    <div onClick={() => clickEvent(props.planetName)} >
      <h4>{props.planetName}</h4>
      <p>{props.description}</p>
      <PlanetImg imageUrl={props.imageUrl}/>  
    </div>
  )
}

export default Planet