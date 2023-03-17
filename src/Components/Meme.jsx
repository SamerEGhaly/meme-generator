import React from "react"

function Meme(){
    
    const [allMemeImages, setAllMemeImages] = React.useState([])

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeImage: "http://i.imgflip.com/1bij.jpg"
    })

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(memeData => setAllMemeImages(memeData.data.memes))
    },[])

    function getMemeImage(){
        const randomIndex = Math.floor(Math.random() * allMemeImages.length)
        const imgUrl = allMemeImages[randomIndex].url
        setMeme(prevMeme => {
            return({
                ...prevMeme,
                memeImage: imgUrl
            })
        })
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => {
            return({
                ...prevMeme,
                [name] : value
            })
        })
    }

    return(
        <section className="meme">
            <div className="memeEditor">
                <input onChange={handleChange} type="text" name="topText" className="topText--input" placeholder="top text" value={meme.topText}/>
                <input onChange={handleChange} type="text" name="bottomText" className="bottomText--input" placeholder="bottom text" value={meme.bottomText}/>
                <button onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>
            <div className="memePreview">
                <img src={meme.memeImage} alt="meme image" className="memeImg"/>
                <p className="topText">{meme.topText}</p>
                <p className="bottomText">{meme.bottomText}</p>
            </div>
        </section>
    )
}

export default Meme