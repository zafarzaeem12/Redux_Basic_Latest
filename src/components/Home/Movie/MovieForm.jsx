

const MovieForm = ({ Setname , Setfee , fee ,name ,handleChange}) => {
 

  return (
    <div>
       <form>
            <input type='text' value={name} onChange={(e) => Setname(e.target.value)}  />
            <input type='text' value={fee} onChange={(e) => Setfee(e.target.value)}  />
            <button onClick={(e) => handleChange (e)}> Create Movie </button>
        </form> 
    </div>
  )
}

export default MovieForm
