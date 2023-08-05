import { useParams } from "react-router-dom"

export default function Home() {
  const { book } = useParams()
  
  return (
    <div>
      {book}
    </div>
  )
}
