export default function Card(props){

  return(

    <div className = "card">

        <img src= {props.img} className = "card-img" alt = "reviewer" />

       <div className = "sub-cards">

            <img src = "./images/star.png" className= "star-img"  alt="rating-star" />

            <span className = "gray">{props.rating}</span>

            <span className = "gray">({props.reviewCount})</span>

            <span className = "gray">{props.country}</span>

         </div>

       <p className = "card-text">{props.title}</p>

       <p className = "card-price"><b>From ${props.price}</b> / person </p>

     </div>

   )
   }
