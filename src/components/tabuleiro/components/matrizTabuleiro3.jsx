import { useEffect, useState } from "react";

export function Tabuleiro3(props) {

    const [ pinoTop, setPinoTop ] = useState(0);
    const [ pinoLeft, setPinoLeft ] = useState(0);
    const [ posicao, setPosicao ] = useState(0);
    const [ movendo, setMovendo ] = useState(false);
    const [ posicaoFinal, setPosicaoFinal ] = useState(props.posicao)

 //====================================================================

    const card = shuffleArray([
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital1.png", pergunta: "O twitter é uma rede social", resposta: true},    
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital9.png", pergunta: "O app Kwai é uma plataforma criada para postar fotos", resposta: false},    
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital11.png", pergunta: "O twitter é uma rede social que permite usuários enviar e ler mensagens curtas", resposta: true},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital19.png", pergunta: "Para usar o kwai é necessário ter uma conta no aplicativo", resposta: true},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital20.png", pergunta: "A Marca para uma start-up não tem tanta importância", resposta: false},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital21.png", pergunta: "O twitter tem como objetivo permitir que os usuários compartilhem informações em tempor real", resposta: true},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital22.png", pergunta: "Todos os perfis do Facebook são privados", resposta: false},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital23.png", pergunta: "Existem anúncios pagos no Facebook", resposta: true},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital24.png", pergunta: "No Facebook existem páginas de organizações ou figuras públicas", resposta: true},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital25.png", pergunta: "O chat GPT não consegue fornecer nenhuma informação útil", resposta: false},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital26.png", pergunta: "O chat Gpt se adéqua a necessidade específica das aplicações", resposta: true},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital27.png", pergunta: "O chat Gpt é igual a todos os outros chatbots", resposta: false},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital28.png", pergunta: "No Kwai existem várias categorias de conteúdo, como por exemplo dança, comédia, musica...", resposta: true},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital29.png", pergunta: "Manter frequência de postagem e interação com outros usuários são boas práticas no Kwai", resposta: true},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital30.png", pergunta: "As melhores práticas no twitter são: Postar pouco, não utilizar Hashtags e evitar interagir com outros usuários", resposta: false},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital31.png", pergunta: "O Facebook mensenger permite os usuários enviar mensagens de texto, vídeo ou voz", resposta: true},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital32.png", pergunta: "Clicando em no botão de joinha, você compartilha uma postagem no Faceook", resposta: false},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital33.png", pergunta: "Enviando solicitações de amizades para as pessoas, faz com que você obtenha mais amigos", resposta: true},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital34.png", pergunta: "O chatgpt foi desenvolvido pela Google", resposta: false},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital35.png", pergunta: "O chat Gpt é utilizado para diversas aplicações, como atendimento ao cliente e assistentes virtuais", resposta: true},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital36.png", pergunta: "O chat Gpt não pode ser personalizado", resposta: false},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital37.png", pergunta: "É possivel ganhar dinheiro através do Kwai", resposta: true},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital38.png", pergunta: "Um dos benefícios do Kwai é conectar pessoas de todo o mundo e aumentar a visibilidade dos criadores do conteúdo", resposta: true},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital39.png", pergunta: "O metaverso é um conceito de mundo virtual em 3D", resposta: true},    
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital42.png", pergunta: "Hashtags nas postagens do Facebook podem aumentar sua visibilidade", resposta: true},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital43.png", pergunta: "Stories do Instagram são postagem que duram 24hrs", resposta: true},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital44.png", pergunta: "O Instagram não podem ser utilizado para negócios", resposta: false},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital45.png", pergunta: "É possivel ganhar monetização no Instagram através de parcerias", resposta: true},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital46.png", pergunta: "O TikTok não pode ser monetizado", resposta: false},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital47.png", pergunta: "Vários talentos são descobertos através do Tiktok", resposta: true},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital48.png", pergunta: "No TikTok o usuário tem acesso a ferramentas de edição de vídeos para adicionar efeitos, filtros e música aos seus vídeos", resposta: true},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital49.png", pergunta: "O metaverso é um espaço em constante evolução, sempre avançando tecnologicamente", resposta: true},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital52.png", pergunta: "O Facebook é uma Rede Social", resposta: true},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital53.png", pergunta: "O instagram é utilizado por empresas para alcançar audiência engajada", resposta: true},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital54.png", pergunta: "O instagram é uma rede social que só é utilizada por pessoas e não empresas", resposta: false},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital56.png", pergunta: "O TikTok tem como objetivo permitir que seus usuários se divirtam através de conteúdos diversos", resposta: true},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital59.png", pergunta: "As empresas não estão investindo no metaverso", resposta: false},    
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital63.png", pergunta: "É possivel criar uma conta no Instagram através do app", resposta: true},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital65.png", pergunta: "Kwai é um aplicativo que serve para pedir comida", resposta: false},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital68.png", pergunta: "O metaverso pode ser usado tanto para o entretenimento quanto para a educação", resposta: true},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital69.png", pergunta: "O metaverso é 100% acessível", resposta: false},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital70.png", pergunta: "Rede social é uma plataforma online que permite pessoas se conectarem a outras", resposta: true},     
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital76.png", pergunta: "Equidade de gênero é a ideia de que todos os generos devem ter acesso igualitário", resposta: true},  
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital77.png", pergunta: "A lei de igualdade de remuneração é garantir que homens e mulheres recebam salários iguais pelo mesmo trabalho", resposta: true},   
        {url: "cardsJornadaAlfabetizacaoDigital/cardAlfabetizacaoDigital78.png", pergunta: "Lei maria da penha foi criada em 1985", resposta: false},  
    ])

    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
      }
      

  //====================================================================

  const [posicoes, setPosicoes] = useState([
    { left: 62 * 0, top: 0, numero: 0, card: {url: "cardsJornadaAlfabetizacaoDigital/card0.png", pergunta: null, resposta: false} },
    { left: 62 * 0, top: 60, numero: 1, card: card[0] },
    { left: 62 * 0, top: 60 * 2, numero: 2, card: card[1] },
    { left: 62 * 0, top: 60 * 3, numero: 3, card: null },
    { left: 62 * 0, top: 60 * 4, numero: 4, card: card[2] },
    { left: 62 * 0, top: 60 * 5, numero: 5, card: card[3] },
    { left: 62 * 1, top: 60 * 5, numero: 6, card: null },
    { left: 62 * 2, top: 60 * 5, numero: 7, card: card[4] },
    { left: 62 * 2, top: 60 * 4, numero: 8, card: card[5] },
    { left: 62 * 2, top: 60 * 3, numero: 9, card: null },
    { left: 62 * 2, top: 60 * 2, numero: 10, card: card[6]},
    { left: 62 * 2, top: 60, numero: 11, card: card[7] },
    { left: 62 * 3, top: 60, numero: 12, card: card[8] },
    { left: 62 * 4, top: 60, numero: 13, card: null },
    { left: 62 * 4, top: 60 * 2, numero: 14, card: card[9] },
    { left: 62 * 4, top: 60 * 3, numero: 15, card: card[10] },
    { left: 62 * 4, top: 60 * 4, numero: 16, card: card[11] },
    { left: 62 * 4, top: 60 * 5, numero: 17, card: null },
    { left: 62 * 5, top: 60 * 5, numero: 18, card: card[12] },
    { left: 62 * 6, top: 60 * 5, numero: 19, card: card[13] },
    { left: 62 * 6, top: 60 * 4, numero: 20, card: null },
    { left: 62 * 6, top: 60 * 3, numero: 21, card: card[14] },
    { left: 62 * 6, top: 60 * 2, numero: 22, card: card[15] },
    { left: 62 * 6, top: 60, numero: 23, card: null },
    { left: 62 * 7, top: 60, numero: 24, card: card[16] },
    { left: 62 * 8, top: 60, numero: 25, card: card[17] },
    { left: 62 * 8, top: 60 * 2, numero: 26, card: card[18] },
    { left: 62 * 8, top: 60 * 3, numero: 27, card: null },
    { left: 62 * 8, top: 60 * 4, numero: 28, card: card[19] },
    { left: 62 * 9, top: 60 * 4, numero: 29, card: card[20] },
    { left: 62 * 10, top: 60 * 4, numero: 30, card: card[21] },
    { left: 62 * 10, top: 60 * 3, numero: 31, card: null },
    { left: 62 * 10, top: 60 * 2, numero: 32, card: card[22] },
    { left: 62 * 10, top: 60, numero: 33, card: card[23] },
    {
      left: 62 * 10,
      top: 60 * 0,
      numero: 34,
      card: {url: "cardsJornadaAlfabetizacaoDigital/card0.png", pergunta: null, resposta: false},
    },
  ]);

  //====================================================================

  const calcularTop = () => setPinoTop(40+posicoes[posicao >= posicoes.length? 34 :  posicao].top)
  const calcularLeft = () => setPinoLeft(37+posicoes[posicao >= posicoes.length? 34 :  posicao].left)

  const pinoPassoAPasso = async (posicao) => {
        //avança ou retrocede o pino
        (posicao < props.posicao ? posicao++ : posicao--) 
      
        setPosicao(posicao)
        await new Promise(resolve => setTimeout(resolve, 500))
        if (posicao != props.posicao) 
            pinoPassoAPasso(posicao)
        else {
            setMovendo(false)
            props.onPinoMovendo(false)
        }
      
          
  }

  //======================================================================
  useEffect(() => {
      calcularLeft()
      calcularTop()
      if (posicao == props.posicao)
          props.abrirModalPergunta(posicoes[posicao >= posicoes.length ? (posicoes.length - 1) : posicao].card)
      else {
          if (!movendo) {
              setMovendo(true)
              props.onPinoMovendo(true)

              pinoPassoAPasso(posicao)
          } else {
              calcularLeft()
              calcularTop()
          }
      }
  }, [props.posicao, posicao])

  // ======================================================
  return (
      <div style={{position: 'relative'}}>
           {/* PINO */}
           <img
              style={
                  {
                      
                      position: 'relative',
                      width: 60,
                      top: pinoTop,
                      left: pinoLeft,
                      height: 90,
                      position: 'absolute'
                  }
              }
              src="/static/tabuleiro/pino.png"
          /> 
          {/* TABULEIRO */}
          <img
              style={styles.tabuleiro}
              src='/static/tabuleiro/tabuleiroAlfabetizacaoDigital.png'

          />

         
      </div>
  )

}

const styles = {
  tabuleiro: {
      width:747, 
      height: 532,
  }
}