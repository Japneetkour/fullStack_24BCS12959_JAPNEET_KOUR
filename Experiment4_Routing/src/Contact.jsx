import { useNavigate } from "react-router-dom"
export default function Contact() {
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate("/");
  }
  return (
    <>
    <h1>Contact</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required />     
    </form>
    </>

  )
}