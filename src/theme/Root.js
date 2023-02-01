import React, { useState } from "react";
import { signInWithGoogle, logout, auth } from "./firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../assets/css/login.css";
import Loading from "./Loading";

import LogoGcom from '../assets/svg/logo.svg'

export default function Root({ children }) {
    const [userAuth, setUserAuth] = useState(null);
    const [authLoading, setAuthLoading] = useState(false);

    const [email, setMail] = useState(null);
    const [mdp, setMDP] = useState(null);

    const [error, setError] = useState(null)

    // Permet d'accéder au resete de l'aplli quand l'utilisateur est connecté à Firebase
    auth.onAuthStateChanged(async function (user) {
        if (user !== null) {
            setUserAuth(user);
        }

        setAuthLoading(false);
    });

    const isAllow = () => {
        return userAuth?.email;
    };


    // Connexion : test email et password 
    const signIn = (email, mdp) => {
        setAuthLoading(true);

        signInWithEmailAndPassword(auth, email, mdp)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                setError(error.message)
                setAuthLoading(false);


                
            });
    };

    return (
        <React.Fragment>
            {isAllow() ? (
                <>{children}</>
            ) : (
                <div className="login">
                    <div className="login__container">
                        <div className="logo"></div>
                        <h1>Connexion</h1>
                        <div className="error_message">
                            {error && error}
                        </div>
                        <div className="login__field">
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={(e) => setMail(e.target.value)}
                            />
                        </div>
                        <div className="login__field">
                            <label>Mot de passe</label>
                            <input
                                type="password"
                                name="mdp"
                                value={mdp}
                                onChange={(e) => setMDP(e.target.value)}
                            />
                        </div>
                        <button
                            className="login__btn"
                            onClick={() => signIn(email, mdp)}
                        >
                            Se connecter
                        </button>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}
