

const Card = (programdata, children) => {
  // console.log("Card Component", programdata)
  return (
     <div className={`card ${programdata.className}`}>
        
         {programdata.children}
    </div>
    
  )
}

export default Card