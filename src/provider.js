import React from "react";
import App from "./App";
import GlobalStyle, {styledglobal} from "./Global/styledglobal";
import GithubProvider from "./Components/Github";

const Providers = () => {
    return (
        <main>
            <GithubProvider>
                <GlobalStyle/>
                <App />
            </GithubProvider>
        </main>
    );
}
export default Providers;