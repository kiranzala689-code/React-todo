
import React, { useState } from 'react'

function Tod() {
  const [text,settext]=useState('')
  const [state,setstate]=useState([])
  const [edit,setedit]=useState(null)
  function handlechange(e){
    settext(e.target.value)
  }
  function handlesubmit(e){
    e.preventDefault()
    if (edit!==null) {
      state[edit]=text
      setstate([...state])
      setedit(null)
    }
    else{
      setstate([...state,text])
    }
    settext('')
  }
  function Delete(id){
    let ans=state.filter((el,i)=>{
      return i!=id
    })
    setstate(ans)
  }
  function Edit(id){
    settext(state[id])
    setedit(id)
  }
  return (
   <div style={{
  width: "400px",
  margin: "50px auto",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
}}>

  <form 
    onSubmit={handlesubmit}
    style={{display:"flex", gap:"10px", marginBottom:"15px"}}
  >
    <input
      type="text"
      placeholder="Enter name"
      value={text}
      onChange={handlechange}
      style={{
        flex:1,
        padding:"10px",
        borderRadius:"8px",
        border:"1px solid #520909"
      }}
    />

    <input
      type="submit"
      value="Add"
      style={{
        backgroundColor:"#3b3699",
        color:"white",
        border:"none",
        padding:"10px 15px",
        borderRadius:"8px",
        cursor:"pointer"
      }}
    />
  </form>

  {
    state.map((el,i)=>(
      <div key={i} style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"10px",
        marginTop:"10px",
        background:"#faf3f3",
        borderRadius:"8px"
      }}>
        <li style={{listStyle:"none"}}>{el}</li>

        <div style={{display:"flex", gap:"5px"}}>
          <button 
            onClick={()=>Delete(i)}
            style={{
              background:"#fc0808",
              color:"white",
              border:"none",
              padding:"5px 10px",
              borderRadius:"5px",
              cursor:"pointer"
            }}
          >
            Delete
          </button>

          <button 
            onClick={()=>Edit(i)}
            style={{
              background:"#1e5c64",
              color:"white",
              border:"none",
              padding:"5px 10px",
              borderRadius:"5px",
              cursor:"pointer"
            }}
          >
            Edit
          </button>
        </div>
      </div>
    ))
  }

</div>
  )
}

export default Tod

