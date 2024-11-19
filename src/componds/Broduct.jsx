
// this is important line for export css file
import '../style/broduct.css'
export default function Broduct() {
  return (
    <div className='broduct'>
        
        <div className="img">
            <img src="https://img.freepik.com/free-photo/mountainous-landscape-three-peaks-nature-park-italy_181624-39421.jpg?t=st=1731965070~exp=1731968670~hmac=c9f1edd6dc27e4373617deb0159e9a5d486426b8381a79b6f6890bb3ae9d9933&w=740" alt="" />
        </div>
        <div className="content">
            <h3>San Francisco</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Scelerisque ut scelerisque viverra scelerisque risus quis.</p>
        </div>
        <div className="btn" onClick={()=>show()}>
            <p>details</p>
        </div>
    </div>
  )
}
function show(){
    <div className='broduct'>
        
        <div className="img">
            <img src="https://img.freepik.com/free-photo/mountainous-landscape-three-peaks-nature-park-italy_181624-39421.jpg?t=st=1731965070~exp=1731968670~hmac=c9f1edd6dc27e4373617deb0159e9a5d486426b8381a79b6f6890bb3ae9d9933&w=740" alt="" />
        </div>
        <div className="content">
            <h3>San Francisco</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Scelerisque ut scelerisque viverra scelerisque risus quis.</p>
        </div>
        <div className="btn" onClick={()=>show()}>
            <p>details</p>
        </div>
    </div>
    console.log("hi");
    
}