import { Button, Card, Divider, Flex } from "antd";
import Title from "antd/es/typography/Title";
import { SiNestjs, SiReact, SiDocker, SiWhatsapp } from "react-icons/si";
import "./styles/index.scss";

const HomePage = () => {
  const color = "#c5c8cc";

  const services = [
    {
      title: "Sistemas Web e Mobile",
      description:
        "Criação de softwares personalizados, apps mobile e plataformas web sob medida.",
      icon: <SiReact size={40} color="#f55050" />,
    },
    {
      title: "Integração de APIs e Microsserviços",
      description:
        "Soluções robustas e escaláveis, utilizando Docker, Redis, Kafka e arquitetura de microsserviços.",
      icon: <SiNestjs size={40} color="#f55050" />,
    },
    {
      title: "Desenvolvimento de Websites",
      description:
        "Landing pages, websites institucionais, portfólios e lojas online com alta performance.",
      icon: <SiReact size={40} color="#f55050" />,
    },
    {
      title: "Infraestrutura e DevOps",
      description:
        "Automatização, deploy, containerização com Docker, orquestração e serviços em nuvem.",
      icon: <SiDocker size={40} color="#f55050" />,
    },
  ];

  return (
    <div className="homepage-background">
      <Flex
        vertical
        className="container"
        justify="flex-start"
        align="center"
        gap={32}
      >
        <div>
          <Title className="text-title" style={{ color }}>
            Contratar serviços
          </Title>
          <Divider
            size={"middle"}
            style={{ backgroundColor: "#e34c26", borderWidth: "0.2em" }}
          />
        </div>

        <Flex gap={24} wrap="wrap" justify="center" style={{ maxWidth: 1200 }}>
          {services.map((service) => (
            <Card
              key={service.title}
              className="service-card"
              title={
                <Flex align="center" gap={12}>
                  {service.icon}
                  <span>{service.title}</span>
                </Flex>
              }
              style={{
                width: 280,
              }}
              headStyle={{ color: "#fff", borderBottom: "1px solid #333" }}
              bodyStyle={{ color: "#c5c8cc", minHeight: 100 }}
            >
              {service.description}
            </Card>
          ))}
        </Flex>

        <Divider style={{ backgroundColor: "#e34c26", width: "60px" }} />

        <Flex
          vertical
          align="center"
          className="contact-box"
          gap={12}
        >
          <Title level={3} style={{ color: "#c5c8cc", margin: 0 }}>
            Entre em contato comigo
          </Title>
          <span style={{ color: "#999" }}>
            Vamos conversar sobre seu projeto ou sua ideia.
          </span>
          <a
            href="https://wa.me/SEUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              type="primary"
              style={{ backgroundColor: "#25D366", borderColor: "#25D366" }}
              icon={<SiWhatsapp />}
              size="large"
            >
              Fale comigo no WhatsApp
            </Button>
          </a>
        </Flex>
      </Flex>
    </div>
  );
};

export default HomePage;
