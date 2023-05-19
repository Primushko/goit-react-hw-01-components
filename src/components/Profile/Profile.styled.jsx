import styled from '@emotion/styled';

export const ProfileCard = styled.div`
   padding:30px;
   background: ${p=>p.theme.colors.background};
   color: ${p => p.theme.colors.text};
  width: 530px;
  margin: 15px auto;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  overflow: hidden;
  
`;

export const Description = styled.div`
    justify-content: center;
    text-align:center;
`;

export const Avatar = styled.img`
    border-radius:50%;
    border: 6px solid ${p=>p.theme.colors.accent};
  
`;

export const AvatarName = styled.p`
    color: ${p=>p.theme.colors.accent};
    font-weight:bold;
    margin-top:20px;
`;
export const Tag = styled.p`
 margin-top: 10px;
`;
export const Location = styled.p`
    margin-top:10px;
`;

export const Stats = styled.ul`
display:flex;
 justify-content: center;
    

`;

export const Quantiny = styled.span`
    display:block;
`;
export const Label = styled.span`
  :not(:last-child){
    margin-right: 25px;
    color:${p=>p.theme.colors.accent};
  }

`;