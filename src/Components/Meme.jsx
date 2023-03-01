import memesData from "../memesData"
import React from "react"

function Meme(){
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData.data.memes)

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeImage: "http://i.imgflip.com/1bij.jpg"
    })

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

    return(
        <section className="meme">
            <div className="memeEditor">
                <input type="text" name="topText" className="topText--input" placeholder="top text"/>
                <input type="text" name="bottomText" className="bottomText--input" placeholder="bottom text"/>
                <button onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>
            <div className="memePreview">
                <img src={meme.memeImage} alt="meme image" className="memeImg" />
                <p className="topText">{meme.topText}</p>
                <p className="bottomText">{meme.bottomText}</p>
            </div>
        </section>
    )
}

export default Meme