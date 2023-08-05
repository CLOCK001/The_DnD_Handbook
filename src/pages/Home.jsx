import GridList from "../components/GridList"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Home() {
  const [items, setItems] = useState()
  const { book } = useParams()

  const Fetch = async (api) => {
    let response = await fetch(api)
    const data = await response.json()
    setItems(data.results)
  }

  useEffect(() => {
    switch(book) {
      case "Class":
        Fetch("https://www.dnd5eapi.co/api/classes")
        break;

      case "Race":
        Fetch("https://www.dnd5eapi.co/api/races")
        break;
      
      case "Rules":
        Fetch("https://www.dnd5eapi.co/api/rules")
        break;
      
      case "Spells":
        Fetch("https://www.dnd5eapi.co/api/spells")
        break;
      
      case "Monsters":
        Fetch("https://www.dnd5eapi.co/api/monsters")
        break;
      
      case "Equipment":
        Fetch("https://www.dnd5eapi.co/api/equipment")
        break;
      default:
        console.log("lol")
    }
  }, [])

  return (
    <div className="font-nunito">
      <h1 className="text-slate-500 text-5xl sm:text-6xl md:text-7xl text-center m-4">{book}</h1>
      {items && <GridList items={items}/>}
    </div>
  )
}
