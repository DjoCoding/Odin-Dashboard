import { Link } from "react-router-dom";

import styles from "./ProjectorMain.module.css"

function ProjectorMain({ isLogin }) {
    return(
        <main className={styles.container}>
            <div> 
                <h2>
                    {
                        isLogin
                        ?
                        "browse update organize your projects and ideas"
                        :
                        "start your journey with projector and be one of us"
                    }
                </h2>
                <div>
                    <p>
                        {
                            isLogin
                            ? 
                            "Don't have an account?"
                            :
                            "Already have an account?"
                        }
                    </p>
                    <button>
                        <Link to={isLogin ? "/signup" : "/login"}>
                            {
                                isLogin 
                                ?
                                "Sign Up"
                                :
                                "Log In"
                            }
                        </Link>
                    </button>
                </div>
            </div>
        </main>
    )
} 


export default ProjectorMain;
