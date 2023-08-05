/* eslint-disable react/prop-types */
import Card from "./Card";
import { Link } from "react-router-dom";

export default function GridList({items}) {
  return (
    <div className="m-2 inline md:grid md:grid-cols-3 md:gap-2">
      {items.map((item) => (
        <Link key={item.index} to={`/Info${item.url}`}>
          <Card title={item.name} />
        </Link>
      ))}
    </div>
  )
}
