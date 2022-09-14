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
    const[repos, setRepos] = useState(mockRepos)
    const[requests, setRequests] = useState(0)
    const[isLoading, setIsLoading] = useState(false)
    const[error, setError] = useState({show: false, message: ''})

    const searchGithubUser = async(user) => {
        try {
            setIsLoading(true)
             const response = await fetch(`${rootUrl}/users/${user}`)
             const data = await response.json()
          if(response){
            setGithubUser(data)
            const {login, followers_url} = data
            const repos = await fetch(`${rootUrl}/users/${login}/repos?per_page=100`)
            const followers = await fetch(`${rootUrl}/users/${login}/repos?per_page=100`)
            const reposData = await repos.json()
            const followersData = await followers.json()
            console.log(followersData)
            setRepos(reposData)
            setFollowers(followersData)
          }else{
            toggleError(true, 'No user found matching this user name')
          }
          requestsChecker()
          setIsLoading(false)
         }catch (error){
            console.log(error)
        }
     }

    const requestsChecker = async() => {
        try {
            setIsLoading(true)
            const response = await fetch(`${rootUrl}/rate_limit`)
            const data = await response.json()    
            let {rate: {remaining}} = data     
            setRequests(remaining)
            setIsLoading(false)
            if(remaining === 0){
                toggleError(true, 'Sorry hourly rate limit has been exceeded')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const toggleError = ((show = false, message = '') => {
        setError({show, message})
    })

    useEffect(() => {
      requestsChecker()
    },[])

    return(
        <GithubContext.Provider value={{
            githubUser,
            followers,
            repos,
            requests,
            error,
            isLoading,
            searchGithubUser,
        }}>
            {children}
        </GithubContext.Provider>
    )
}


export {GithubContext, GithubProvider}

