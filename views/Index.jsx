const React = require('react')

const Index = props => {
    const { pokemon} = props
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000'
        
    }
    const styledLink = {
        textDecoration: 'none',
        listStyle: 'none',
        color: '#ffffff',
        fontSize: '20px'
        
    }
    const noBullet = {
        listStyle: 'none'
    }

    return(
        <main style={myStyle}>
            <h1>See All The Pokemon!!</h1>
            <ul>
                {pokemon.map((poke, i) => {
                    return <li style={noBullet}>
                        <a style={styledLink}href={`/pokemon/${i}`}>{poke.name}</a>
                    </li>
                })}
            </ul>
        </main>
    )
}

module.exports = Index