import React from 'react'
import styled from 'styled-components'

const InfoItem = ({ icon, label, value, color }) => {
    return (
        <Wrapper>     
          <span className={color}>{icon}</span>
          <div>
            <h3>{value}</h3>
            <p>{label}</p>
          </div>
        </Wrapper>     
      );
}

const Wrapper = styled.article`
border-radius: var(--radius);
padding: 1rem 2rem;
background: var(--clr-white);
display:flex;
flex-direction:row;
justify-content: space-between;
width: 250px;
margin-top: 20px;

span {
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
}



.icon {
    font-size: 1.5rem;
  }
  h3 {
    margin-bottom: 0;
    letter-spacing: 0;
  }
  p {
    margin-bottom: 0;
    text-transform: capitalize;
  }
  .pink {
    background: #ffe0f0;
    color: #da4a91;
  }
  .green {
    background: var(--clr-primary-10);
    color: var(--clr-primary-5);
  }
  .purple {
    background: #e6e6ff;
    color: #5d55fa;
  }
  .yellow {
    background: #fffbea;
    color: #f0b429;
  }
`;

export default InfoItem