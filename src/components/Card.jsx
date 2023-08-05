/* eslint-disable react/prop-types */
export default function Card({title}) {
  return (
    <div className="p-3 m-2 bg-slate-700 text-slate-100 border border-slate-700 rounded-lg text-center">
      <h1>{title}</h1>
    </div>
  )
}
