import Nav from "./Nav";
import Main from "./Main";
import Card from "./Card";

export default function App(){

  return(
    <div>
      <Nav />
      <Main />
      <Card
         img = "./assets/katie-zaferes.png"
         rating = "5.0"
         reviewCount = "6"
         country = "USA"
         title = "Life lessons with Katie Zaferes"
         price = "From $136"

         />
    </div>
  )
}
