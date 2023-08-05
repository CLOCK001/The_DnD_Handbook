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
      return(
        <div>
          <h1>{item && item.name}</h1>
          <h1>{item && item.weight}</h1>
          <h1>{item && item.equipment_category.name}</h1>
        </div>
      )
  }
  
  return (
    <div>
      {item && item.name}
    </div>
  )
}
