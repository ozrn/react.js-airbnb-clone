import Nav from "./Nav";
import Main from "./Main";
import Card from "./Card";
import katie from "./assets/katie-zaferes.png"

export default function App(){

  return(
    <div>
      <Nav />
      <Main />
      <Card
         img = {katie}
         rating = "5.0"
         reviewCount = {6}
         country = "USA"
         title = "Life lessons with Katie Zaferes"
         price = {136}

         />
    </div>
  )
}
