export default function Card(props){

  let badgeText
  if (props.experienceData.openSpots === 0) {
    badgeText = "SOLD OUT"
  }else if (props.experienceData.location === "Online") {
    badgeText = "ONLINE"
  }

  return(

    <div className = "card">

        {badgeText && <div className = "card-badge">{badgeText}</div>}

        <img src= {props.experienceData.coverImg} className = "card-img" alt = "reviewer" />

       <div className = "sub-cards">

            <img src = "./images/star.png" className= "star-img"  alt="rating-star" />

            <span className = "gray">{props.experienceData.stats.rating}</span>

            <span className = "gray">({props.experienceData.stats.reviewCount})</span>

            <span className = "gray">{props.location}</span>

         </div>

       <p className = "card-text">{props.experienceData.title}</p>

       <p className = "card-price"><b>From ${props.experienceData.price}</b> / person </p>

     </div>

   )
   }
