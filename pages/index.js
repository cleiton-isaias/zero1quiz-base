import styled from "styled-components";
/* import Heads from '../src/components/Heads'; */
import db from "../db.json";
import Widget from "../src/components/Widget";
import Logo from "../src/components/Logo";
import QuizBackground from "../src/components/QuizBackground"
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";


/* function Title(props){ //propriedades

  return (
    <h1>
      {props.Children}
    </h1>
  )

  url(${db.bg})
} */

/* const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`; */

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return(   
        
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Zero 1 Quiz</title>
        <meta property="og:locale" content="pt_BR"></meta>
        <meta property="og:url" content="https://zero1quiz-base-git-master.cleiton-isaias.vercel.app/"></meta>
        <meta property="og:title" content="Zero 1 Quiz"></meta>
        <meta property="og:site_name" content="Zero 1 Quiz"></meta>
        <meta property="og:description" content="Website constrido para apraender e se divertir - Imersão Alura"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:image" content={db.bg}></meta>
    </Head> 
      <QuizContainer>
      <Logo></Logo>
        <Widget>
          <Widget.Header>
            <h1>The legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
          <p>
            Teste os seus conhecimentos sobre Zelda e divirta-se criando o seu
            AluraQuiz!
          </p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>
              Dá uma olhada nesses quizes incríveis que o pessoal da Imersão
              Alguma coisa fez:
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/cleiton-isaias" />
    </QuizBackground>
  );
}
