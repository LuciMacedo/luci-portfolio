import styled  from 'styled-components'


export const GalleryTitle = styled.section`
  background: ${(props) => props.theme['black-500']};
  border-radius: 10px;
  width: 60%;
  margin: 5rem auto;
  padding: 1rem;
  text-align: center;
  background: white;

  svg {
    color: ${(props) => props.theme['black-900']};
  }

  h1{
    margin: 1rem;
    color: ${(props) => props.theme['red']};
  }

  h2 {
    color: ${(props) => props.theme['black-900']};
  }

  a {
    color: ${(props) => props.theme['black-900']};
    text-decoration: none;
    p {
      margin: 1rem;
    }
    svg {
      color: ${(props) => props.theme['red']};
    }
  }
`

export const LinkStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  color: ${(props) => props.theme['black-500']};
  
    a {
      width: 40%;
      height: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      margin: .5rem;
      padding: .5rem;
      text-decoration: none;
      border: 3px solid ${(props) => props.theme['red']};
      border-radius: 10px;
      color: ${(props) => props.theme['black-500']};
      &:hover {
      background: ${(props) => props.theme['red']};;
      color: white;
      svg{
        color: white;
      }
    }
    } 
`