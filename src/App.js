import Nav from "./Nav";
import Main from "./Main";
import Card from "./Card";
import data from "./data.js"

export default function App(){

  const experiencesData = data.map(experienceData => {

    return < Card
      img = {experienceData.coverImg}

      rating = {experienceData.stats.rating}

      reviewCount = {experienceData.stats.reviewCount}

      country = {experienceData.location}

      title = {experienceData.title}

      price = {experienceData.price}

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
