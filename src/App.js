import Nav from "./Nav";
import Main from "./Main";
import Card from "./Card";
import data from "./data.js"

export default function App(){

  const experiencesData = data.map(experienceData => {

    return < Card

      key = {experienceData.id}

      experienceData = {experienceData}

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
