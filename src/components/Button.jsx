/* eslint-disable react/prop-types */
export default function Button({funcButton, buttonLable}) {
  return (
    <button onClick={funcButton} className="p-1 m-1 bg-slate-600 hover:bg-slate-700 text-slate-100 border border-slate-600 hover:border-slate-700 rounded-md">{buttonLable}</button>
  )
}
