import React from 'react'


const SongsForm = ({ Setname , Settime , time ,name ,handleChange}) => {
 

  return (
    <div>
       <form>
            <input type='text' value={name} onChange={(e) => Setname(e.target.value)}  />
            <input type='text' value={time} onChange={(e) => Settime(e.target.value)}  />
            <button onClick={(e) => handleChange (e)}> Create Songs </button>
        </form> 
    </div>
  )
}

export default SongsForm
