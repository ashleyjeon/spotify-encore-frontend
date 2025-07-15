import react from 'react'; 

const HomeNavBar = () => {
    return (
        <ul style= {{ 
            display: 'flex', 
            listStyle:'none', 
            gap: '2rem', 
            transform: 'translateX(-1rem)'
        }}>
            <li>[</li>
            <li>track</li>
            <li>artists</li>
            <li>explore</li>
            <li>]</li>
        </ul>
    )
}


export default HomeNavBar;