import { Link } from 'react-router-dom';

export function Header (){
    return(
        <section className='header'>
            <h1>List Songs</h1>
            <Link to="/login">Log In</Link>
        </section>
    )
}