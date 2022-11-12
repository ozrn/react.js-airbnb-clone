import Nav from "./Nav";
import Main from "./Main";
import Card from "./Card";
import data from "./data.js"

export default function App(){

  const experiencesData = data.map(experienceData => {

    return < Card

      key = {experienceData.id}

      img = {experienceData.coverImg}

      rating = {experienceData.stats.rating}

      reviewCount = {experienceData.stats.reviewCount}

      location = {experienceData.location}

      title = {experienceData.title}

      price = {experienceData.price}

      openSpots = {experienceData.openSpots}

    />

  })

  return(
    <div>
      <Nav />
      <Main />
      <section className = "cards-list" >
        {experiencesData}
      </section>
  </div>

  )
  }
