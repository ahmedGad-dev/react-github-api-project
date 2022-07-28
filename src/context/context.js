import React, { useState, useEffect, createContext } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';


const GithubContext = createContext()


const GithubProvider = ({children}) => {
    const[githubUser, setGithubUser] = useState(mockUser)
    const[followers, setFollowers] = useState(mockFollowers)
    const[repos, setREpos] = useState(mockRepos)


    return(
        <GithubContext.Provider value={{
            githubUser,
            followers,
            repos
        }}>
            {children}
        </GithubContext.Provider>
    )
}


export {GithubContext, GithubProvider}

