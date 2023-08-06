import InfoItems from "../components/InfoItems"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Info() {
  const [item, setItem] = useState(null)
  const { api, catagory, index } = useParams()
  const url = "/" + api + "/" + catagory + "/" + index 
  const data = "https://www.dnd5eapi.co" + url
  
  useEffect(() => {
    const Fetch = async (api) => {
      let response = await fetch(api)
      const data = await response.json()
      setItem(data)
    }
    Fetch(data)
  }, [])

  switch(catagory) {
    case "equipment":
      return <InfoItems 
      title={item && item.name} 
      extra1={item && item.equipment_category.name} 
      extra2={`weight: ${item && item.weight}`}
      extra3={item && item.gear_category.name}

      />
  }
  
  return (
    <div>
      {item && item.name}
    </div>
  )
}
