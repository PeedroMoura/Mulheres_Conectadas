import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import Title from './Title';
import Paragraph from './Paragraph';
import { Link } from 'react-router-dom';

const ContentText = () => {
  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        mx: 6,
      }}
    >
      <Title text="Os ODS para o mundo" textAlign="center" />
      <Typography>'O que são os ODS?'</Typography>
      <Paragraph
        text="ODS significa Objetivos de Desenvolvimento Sustentável. São uma série de metas estabelecidas pelas Nações Unidas em 2015, que visam abordar os principais desafios globais até 2030, incluindo a erradicação da pobreza, a proteção do meio ambiente e a promoção da paz e da justiça."
        maxWidth="sm"
        mx={0}
        textAlign="justify"
      />

      <Paragraph
        text="Como cidadãos, temos uma responsabilidade fundamental em relação aos ODS. Aqui estão algumas formas de contribuir
            Conscientização e Educação: Informe-se sobre os ODS e compartilhe o conhecimento com outras pessoas. Isso inclui discutir os objetivos, os desafios e as possíveis soluções.
            Engajamento Cívico: Participe ativamente na vida pública, envolvendo-se em questões sociais, políticas e ambientais. Isso pode ser feito por meio do voto, da participação em organizações da sociedade civil ou até mesmo através de petições e manifestações pacíficas.
            Mudança de Comportamento: Adote práticas sustentáveis em sua vida diária, como economizar energia, reduzir o consumo de água, reciclar, utilizar transporte público ou compartilhado, comprar produtos sustentáveis e apoiar negócios socialmente responsáveis.
            Voluntariado: Dedique seu tempo e habilidades para projetos que contribuam para os ODS. Isso pode incluir atividades como trabalho comunitário, mentorias, ensino, participação em campanhas de conscientização e projetos de desenvolvimento sustentável.
            Influência e Advocacia: Use sua voz para promover mudanças positivas. Isso pode envolver escrever para autoridades, compartilhar informações nas redes sociais, assinar petições, participar de eventos e colaborar com grupos ou movimentos que compartilham objetivos semelhantes"
        maxWidth="sm"
        mx={0}
        textAlign="justify"
      />

      <Typography>'A Importância das ODS 5 e 10: Empoderando Mulheres com Igualdade e Inclusão'</Typography>
      <Paragraph
        text="As mulheres têm um papel vital no progresso da sociedade e na construção de um mundo mais justo e igualitário. Por isso, queremos destacar a importância das Metas de Desenvolvimento Sustentável (ODS) 5 e 10 para o nosso propósito.
            A ODS 5 - Igualdade de Gênero - é fundamental para a nossa atuação. Ela nos inspira a promover a igualdade entre homens e mulheres, fortalecer o empoderamento feminino e garantir o acesso igualitário a oportunidades. Reconhecemos que a igualdade de gênero é um direito humano fundamental e uma pré-condição essencial para um desenvolvimento sustentável e inclusivo. Ao colocarmos a ODS 5 no centro do nosso trabalho, buscamos eliminar as disparidades e desafios enfrentados pelas mulheres, capacitando-as para alcançar."
        maxWidth="sm"
        mx={0}
        textAlign="justify"
      />

      <Paragraph
        text="Da mesma forma, a ODS 10 - Redução das Desigualdades - desempenha um papel crucial em nosso compromisso de promover a inclusão e superar o gap de gênero no empreendedorismo de inovação. Reconhecemos que as mulheres, especialmente aquelas que enfrentam múltiplas formas de discriminação, muitas vezes são marginalizadas e excluídas de oportunidades econômicas e sociais. Ao abraçar a ODS 10, buscamos criar um ambiente onde todas as mulheres, independentemente de sua origem, identidade ou circunstância, possam ter acesso igual a recursos, capacitação e oportunidades para prosperar e contribuir plenamente."
        maxWidth="sm"
        mx={0}
        textAlign="justify"
      />
      <Paragraph
        text="Alinhamos nossas ações e iniciativas com essas duas metas ambiciosas. Capacitamos mulheres por meio de treinamentos, programas e mentoria, permitindo que elas adquiram habilidades essenciais para se destacar no mundo da inovação e do empreendedorismo. Promovemos um ambiente inclusivo, onde as mulheres se sentem valorizadas, apoiadas e encorajadas a buscar seus sonhos e metas."
        maxWidth="sm"
        mx={0}
        textAlign="justify"
      />
      <Paragraph
        text="Ao destacar a importância da ODS 5 e ODS 10, reforçamos nosso compromisso de impulsionar a igualdade de gênero, o empoderamento feminino e a redução das desigualdades. Convidamos você a se juntar a nós nessa jornada, apoiando nossos esforços para criar um mundo onde todas as mulheres tenham as mesmas oportunidades de sucesso. Juntos, podemos fazer a diferença e construir um futuro mais brilhante e equitativo para todas as mulheres."
        maxWidth="sm"
        mx={0}
        textAlign="justify"
      />
    </Stack>
  );
};

export default ContentText;
