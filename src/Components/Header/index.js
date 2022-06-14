import React from "react";
import * as S from "./styled";
import useGithub from "../../Hooks/github-hooks";



const Header = () => {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = React.useState();
  
    const submitGetUser = () => {
      if (!usernameForSearch) return;
      return getUser(usernameForSearch);
    };
  
    return (
      <header>
        <h1>Github pesquisa</h1>             
        <S.Wrapper>
          <input
            type="text"
            placeholder="Digite o nome do usuário"
            onChange={(event) => setUsernameForSearch(event.target.value)}
          />
          <button type="submit" onClick={submitGetUser}>
            <span>Pesquisar</span>
          </button>
        </S.Wrapper>
      </header>
    );
  };
  
  export default Header;