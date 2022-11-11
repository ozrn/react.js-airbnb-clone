export default function Card(props){

  return(
    <div className = "card">

      <img src = {require("./assets/katie-zaferes.png")} className = "card-img" alt="katie-zaferes" />

      <div className = "sub-cards">

          <img src = {require("./assets/star.png")} className= "star-img"  alt="rating-star" />

          <span className = "gray"> 5.0 </span>

          <span className = "gray">  (6). </span>


          <span className = "gray"> USA </span>
      </div>

        <p>Life lessons with Katie Zaferes</p>

        <p> <b>From $136</b> / person </p>


    </div>
  )
}
