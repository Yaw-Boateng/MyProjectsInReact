export default function Card({text="Hello, World!", info}) {
  return (
    <div className="App mb-4">
      <h1 className="text-3xl font-bold hover:text-5xl ">{text}</h1>
      <p>{info}</p>
    </div>
  )
}