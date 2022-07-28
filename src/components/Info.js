import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import InfoItem from './InfoItem';



const UserInfo = () => {
  const {githubUser} = React.useContext(GithubContext)
  const {public_repos, public_gists, followers , following} = githubUser

  const items = [
    {
      id: 1,
      icon: <GoRepo className='icon' />,
      label: 'repos',
      value: public_repos,
      color: 'pink',
    },
    {
      id: 2,
      icon: <FiUsers className='icon' />,
      label: 'followers',
      value: followers,
      color: 'green',
    },
    {
      id: 3,
      icon: <FiUserPlus className='icon' />,
      label: 'following',
      value: following,
      color: 'purple',
    },
    {
      id: 4,
      icon: <GoGist className='icon' />,
      label: 'gists',
      value: public_gists,
      color: 'yellow',
    },
  ];

  return(
    
       <Wrapper className='section-center'>
         {items.map((item) => {
           return <InfoItem className='item' key={item.id} {...item}></InfoItem>;
          })}
       </Wrapper>
   
    
  )
};

const Wrapper = styled.section`
 display:flex;
 justify-content: space-around;
 flex-wrap: wrap;
`;

export default UserInfo;
