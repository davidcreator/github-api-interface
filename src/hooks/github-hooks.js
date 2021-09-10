import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () => {
  const { githubState, getUser, getUserBio, getUserRepos, getUserStarred } = useContext(
    GithubContext
  );

  return { githubState, getUser, getUserBio, getUserRepos, getUserStarred };
};

export default useGithub;
