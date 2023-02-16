function MemeEditor(){
    return(
        <section className="memeEditor">
            <form action="">
                <input type="text" name="topText" className="topText--input" placeholder="top text" />
                <input type="text" name="bottomText" className="bottomText--input" placeholder="bottom text"/>
                <button>Get a new meme image 🖼️</button>
            </form>
        </section>
    )
}

export default MemeEditor