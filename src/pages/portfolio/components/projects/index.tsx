import { Button, Card, Flex, Typography } from "antd";
import "./projects.scss";

import gas_refrigerante from "../../../../assets/images/gas-refrigerante.webp";
import injetora_hidraulica from "../../../../assets/images/injetora-hidraulica.webp";
import mapa_com_rota from "../../../../assets/images/mapa-com-rota.webp";

const { Title, Paragraph } = Typography;

const projects = [
  {
    title: "Sistema de Monitoramento para Máquinas de Injeção Plástica",
    description:
      "Sistema fullstack com microsserviço OPC UA para comunicação com máquinas de injeção plástica. Coleta dados, gera métricas e relatórios, além de gerenciar estoque de moldes e matérias-primas.",
    techs: "React, Django, NestJS, Docker",
    image: injetora_hidraulica,
    link: "/projetos/monitoramento-maquinas",
  },
  {
    title: "Sistema de Garantia e Rastreamento de Produtos",
    description:
      "Sistema para rastreamento de garantia de cilindros de gás, com upload de mídias, autenticação JWT e segurança reforçada.",
    techs: "React, Django, JWT, Docker",
    image: gas_refrigerante,
    link: "/projetos/rastreamento-garantia",
  },
  {
    title: "App de Compartilhamento de Localização em Tempo Real",
    description:
      "Aplicativo mobile para compartilhamento de localização em tempo real, integração com Google Maps, Kafka e NestJS para atualizações instantâneas.",
    techs: "React Native, NestJS, Kafka, Redis, Docker",
    image: mapa_com_rota,
    link: "/projetos/localizacao-tempo-real",
  },
];

const Projects = () => {
  return (
    <Flex vertical gap={50} className="projects-container">
      {projects.map((proj, index) => (
        <Flex
          key={proj.title}
          className={`project ${index % 2 === 0 ? "row" : "row-reverse"}`}
          align="center"
          gap={50}
        >
          <div className="image-wrapper">
            <img src={proj.image} alt={proj.title} />
          </div>

          <div className="content">
            <Title level={3} style={{ color: "#fff" }}>
              {proj.title}
            </Title>
            <Paragraph style={{ color: "#c5c8cc" }}>
              {proj.description}
            </Paragraph>
            <Paragraph style={{ color: "#9fa2a8", fontStyle: "italic" }}>
              Tecnologias: {proj.techs}
            </Paragraph>
            <Button type="primary" href={proj.link}>
              Ver Detalhes
            </Button>
          </div>
        </Flex>
      ))}
    </Flex>
  );
};

export default Projects;
