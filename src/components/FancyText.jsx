export default function FancyText  ({title, text}){
    
  return title 
  ? <h2 className="bold text-3xl  mt-9">{text}</h2>
  : <h2 className="bold text-3xl  mt-9">{text}</h2>
}