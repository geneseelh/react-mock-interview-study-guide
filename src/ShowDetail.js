import React, {useState, useEffect} from "react";

function ShowDetail({show}) {
    const [imgClicked, setImgClicked] = useState(false);
    const [titleClicked, setTitleClicked] = useState(false);
    const [akas, setAkas] = useState(null);
    

    function imageClickHandler(){
        setImgClicked(!imgClicked)
      }
    function titleClickHandler(){
        setTitleClicked(!titleClicked)
    }

    useEffect(()=>{
        if(titleClicked){
        fetch(`https://api.tvmaze.com/shows/${show.id}/akas`)
            .then(response => response.json())
            .then(data => setAkas(data))
            .catch(err => {console.log(err)});   
        } else if(!titleClicked){
            setAkas(null)
        }
        //console.log(show.id)
    }, [titleClicked]);
    
  return (
    <div>
        <h3 className="title" onClick={titleClickHandler}>{show.name}</h3> 
        {akas ? 
            <div>
                {akas.map((aka, index)=>{
                    return <div key={index}>{aka.name}<br/>{aka.country.name}</div>
                })}
            </div>
        : null}
        <img src={show.image.medium} onClick={imageClickHandler}/>
        {imgClicked ? 
            <div>
                {show.type}<br/>{show.status}
            </div> 
        : null}
    </div>
  )
}

export default ShowDetail;