function MemeEditor(){
    return(
        <section className="memeEditor">
            <div className="meme--textInput">
                <input type="text" name="topText"/>
                <input type="text" name="bottomText" />
            </div>
            <button>Get a new meme image 🖼️</button>
        </section>
    )
}

export default MemeEditor