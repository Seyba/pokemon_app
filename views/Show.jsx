const React = require('react')

const Show = props => {
    const { name, img} = props.pokemon
    
    const imgExtension = '.jpg'
    const url = img.concat('', imgExtension)

    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000'
        
    }
    const btn = {
        height: '50px',
        width: '150px',
        backgroundColor: '#ffffff',
        borderRadius: '9px',
        marginTop: '10px',
        marginBottom: '10px',
        fontSize: '30px',
        
    }
    

    return(
        <main style={myStyle}>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{name}</h2>
            <img src={url}/><br/>
            <button style={btn}>
                <a href="/pokemon">Back</a>
            </button>
            
        </main>
    )
}

module.exports = Show