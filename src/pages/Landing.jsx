import Button from "../components/Button"
import { Link } from "react-router-dom"

export default function Landing() {
  const buttonArray = ["Class", "Race", "Rules", "Spells", "Monsters", "Equipment"]
  
  return (
    <div className="font-nunito">
      <div>
        <h1 className="text-slate-500 text-5xl sm:text-6xl md:text-7xl text-center m-4">The DnD Handbook</h1>
      </div>
      
      <div className="text-center m-5">
        {buttonArray.map((item) => (
            <Link key={item} to={`/Home/${item}`} >
              <Button  buttonLable={item} />
            </Link>
        ))}
      </div>
    </div>
  )
}

