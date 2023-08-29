const React = require('react')

const Show = props => {
    const { name, img} = props.pokemon
    
    const imgExtension = '.jpg'
    const url = img.concat('', imgExtension)

    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000'
        
    }

    return(
        <main style={myStyle}>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{name}</h2>
            <img src={url}/>
            <a href="/pokemon">Back</a>
        </main>
    )
}

module.exports = Show