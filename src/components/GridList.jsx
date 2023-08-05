/* eslint-disable react/prop-types */
import Card from "./Card";

export default function GridList({items}) {
  return (
    <div className="m-2 inline md:grid md:grid-cols-3 md:gap-2">
      {items.map((item) => (
        <Card key={item.index} title={item.name} />
      ))}
    </div>
  )
}
