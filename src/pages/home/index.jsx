import banner from "../../assets/banner.png";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { useNavigate  } from "react-router-dom";

import { HomeContainer, TitleHighlight, TextContent, Title, ImgBanner } from "./styles";

const Home = () => {

  const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/Login')
    }
  return (
    <>
      <Header />
      <HomeContainer>
        <div>
          <Title>
            <TitleHighlight>
              Implemente <br />
            </TitleHighlight>
            O seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button variant={"secondary"} title={"Começar agora"} onClick={handleClickSignIn}/>
        </div>
        <div>
          <ImgBanner src={banner} alt="Imagem principal" />
        </div>
      </HomeContainer>
    </>
  );
};

export { Home };
