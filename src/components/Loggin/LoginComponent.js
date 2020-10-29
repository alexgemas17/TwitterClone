import React from 'react'
import { useDispatch } from 'react-redux'
import { StartLoginWithGithub, StartLoginWithGoogle } from '../../actions/auth'
import { LogoComponent } from '../Navbar/LogoComponent'

import './styles.css'

export const LoginComponent = () => {
    const dispatch = useDispatch()

    const handleInputLoginWithGithub = () => {
        dispatch( StartLoginWithGithub() )
    }

    const handleInputLoginWithGoogle = () => {
        dispatch( StartLoginWithGoogle() )
    }

    return (
        <div className='login'>
            <div className='LeftSide'>
                <i className="fab fa-twitter logoBackground"></i>
                <div>   
                    <div className='text-item'>
                        <i className="fas fa-search"></i>
                        <span> Sigue lo que te interesa. </span>
                    </div>
                    
                    <div className='text-item'>
                        <i className="fas fa-user-friends"></i>
                        <span> Entérate de qué está hablando la gente. </span>
                    </div>

                    <div className='text-item'>
                        <i className="fas fa-comments"></i>
                        <span> Únete a la conversación. </span>
                    </div>
                    
                </div>
            </div>

            <div className='RightSide'>
                <div className='Header'>
                    <div className='logo'>
                        <LogoComponent />
                    </div>
                    <h1>Mira lo que está pasando en el mundo en este momento</h1>
                </div>

                <div className='social-networks'>
                    <p> <b>Login with:</b></p>
                    
                    <div 
                        className="btn-login github" 
                        role="button" 
                        alt='github icon'
                        name='btn-github'
                        onClick={handleInputLoginWithGithub}
                    >

                        <div className="icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png" alt="github icon" />
                        </div>

                        <p className="btn-text">
                            <b>Sign in with Github</b>
                        </p>
                    </div>

                    <div  
                        className="btn-login linkedin" 
                        role="button" 
                        alt='linkedin icon'
                        name='btn-github'
                        onClick={handleInputLoginWithGoogle}
                    >
                        <div className="icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="linkedin icon" />
                        </div>

                        <p className="btn-text">
                            <b>Sign in with Google</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
