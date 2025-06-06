import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../assets/css/login.css";

export default function Root({ children }) {
    const [userAuth, setUserAuth] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    const [email, setMail] = useState("");
    const [mdp, setMDP] = useState("");

    const [error, setError] = useState(null);

    useEffect(() => {
        // Vérifier l'état de l'utilisateur connecté
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUserAuth(user);
            } else {
                setUserAuth(null);
            }
            setAuthLoading(false);
        });

        // Nettoyer l'abonnement pour éviter les fuites de mémoire
        return () => unsubscribe();
    }, []);

    const isAllow = () => {
        return userAuth?.email;
    };

    // Connexion : test email et password 
    const signIn = (email, mdp) => {
        setAuthLoading(true);

        signInWithEmailAndPassword(auth, email, mdp)
            .then((userCredential) => {
                // Connexion réussie
                const user = userCredential.user;
                setUserAuth(user);
                setAuthLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setAuthLoading(false);
            });
    };

    if (authLoading) {
        // Afficher une animation ou un message de chargement pendant l'authentification
        return (
			<div className="overlay">
				<div className="overlayDoor"></div>
				<div className="overlayContent">
					<div className="loader">
						<div className="inner"></div>
					</div>
				</div>
			</div>
		);
    }

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
                                type="email"
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
