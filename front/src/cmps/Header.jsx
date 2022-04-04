import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import {onLogout} from '../store/user.actions.js'

function _Header ({user, onLogout}) { 
    console.log(user); 
    return(
        <section className='header'>
            <h1>List Songs</h1>
            {!user && <Link to="/login" className='login-signup-btn'>Log In</Link>}
            {user && <div className='user'>
                <div className='user-name'>Hello {user.username}</div>
                <button onClick={onLogout} className='login-signup-btn'>Log out</button>
            </div>}
        </section>
    )
}


function mapStateToProps(state) {
    return {
        user: state.userModule.user,
    }
}
const mapDispatchToProps = {
    onLogout
}



export const Header = connect(mapStateToProps, mapDispatchToProps)(_Header)