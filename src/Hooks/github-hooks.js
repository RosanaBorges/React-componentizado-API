import React from "react";
import { GithubContext } from "../Components/Github";

const useGithub = () => {
    const { githubState, getUser, getUserRepos, getUserStarred } = React.useContext(
        GithubContext
        );

    return { githubState, getUser, getUserRepos, getUserStarred };
};

export default useGithub;