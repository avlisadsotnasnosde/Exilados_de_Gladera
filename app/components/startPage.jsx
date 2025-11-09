"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../lib/theme";

export default function StartPage() {
  const titulo = "Salve Salve!!!";
  const conteudo = [
    "Somos os Exilados de Gladera, uma guilda neutra que nasceu do desejo de criar um refúgio acolhedor em meio às incertezas do mundo de Rubinot. Nosso propósito vai além de combates e conquistas: buscamos construir uma comunidade onde cada aventureiro — seja iniciante ou veterano — encontre apoio, respeito e companheirismo.",
    "🌿 Ajudamos em quests, acessos e progressão, sempre com foco na colaboração e no crescimento mútuo. Aqui, ninguém caminha sozinho se não desejar. Enfrentamos os desafios do jogo lado a lado, celebrando cada vitória como um triunfo coletivo.",
    "⚖️ Como uma guilda neutra, respeitamos todas as facções e estilos de jogo. Valorizamos a liberdade de escolha e acreditamos que a verdadeira força está na diversidade de talentos e histórias que cada membro traz consigo.",
    "🤝 Se você busca um lar onde a amizade, a cooperação e o espírito de equipe são mais importantes do que rankings ou rivalidades, os Exilados de Gladera são o seu lugar. Aqui, cada voz importa, cada jornada é respeitada, e cada conquista é compartilhada.",
    "Junte-se a nós e descubra que, mesmo em um mundo repleto de perigos e disputas, ainda é possível encontrar alianças verdadeiras e companheiros leais. Nos Exilados de Gladera, você sempre terá um lar — e uma família de aventureiros prontos para lutar ao seu lado.",
  ];
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="section"
        sx={{
          p: 2,
          color: "secondary.main",
        }}
      >
        {/* Imagem à esquerda ocupando 30% */}
        <Box
          sx={{
            float: "left",
            shapeOutside: "circle(50%)",
            borderRadius: "50%", // arredondamento visual
            width: 200,
            height: 200,
            overflow: "hidden",
            mr: 3,
            mb: 3,
          }}
        >
          <Image
            src="/eg.png"
            alt="Avatar"
            width={200}
            height={200}
            style={{ objectFit: "cover" }}
          />
        </Box>

        {/* Conteúdo à direita ocupando 70% */}
        <Box sx={{ flexBasis: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: "bold", mb: 2, color: "secondary.contrastText" }}
          >
            {titulo}
          </Typography>
          {conteudo.map((texto, index) => (
            <Typography
              key={index}
              textAlign="justify"
              variant="h5"
              component="p"
              sx={{ mb: 2, color: "secondary.contrastText" }}
            >
              {texto}
            </Typography>
          ))}
        </Box>
      </Box>
      <Container
        fixed
        sx={{ m: 2, borderRadius: "25px", backgroundColor: "primary.main" }}
      >
        <Typography
          textAlign="justify"
          variant="h4"
          component="h4"
          sx={{
            mb: 2,
            textAlign: "center",
            color: "primary.contrastText",
          }}
        >
          Para entrar na guilda:
        </Typography>
        <Typography
          textAlign="justify"
          variant="h5"
          component="h5"
          sx={{
            mb: 2,
            color: "primary.contrastText",
          }}
        >
          Pré-requisitos:
        </Typography>
      </Container>
    </ThemeProvider>
  );
}
