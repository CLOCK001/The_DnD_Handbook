/* eslint-disable react/prop-types */
export default function InfoItems({title, extra1, extra2, extra3, desc, number, imageSrc}) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <h5>{extra1}</h5>
        <h5>{extra2}</h5>
      </div>
      
      <div>
        <p>{desc}</p>
        <img src={imageSrc}/>
      </div>
      
      <div>
        <h1>{number}</h1>
        <h5>{extra3}</h5>
      </div>
    </div>
  )
}
