import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

const MyServices = () => {
    const color = "#c5c8cc";

    const o_que_faco = `
        Desenvolvo soluções completas, do front-end ao back-end, além de aplicativos mobile.
        Atuo também com modelagem de dados, arquitetura de sistemas e infraestrutura, utilizando
        tecnologias como Docker, Redis e Kafka para entregar projetos performáticos, escaláveis e seguros.
    `;

    return (
        <div
            className="services"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "16px",
                width: "100%",
                maxWidth: "800px", // Limita em telas muito grandes
                margin: "0 auto", // Centraliza no desktop
                boxSizing: "border-box"
            }}
        >
            <Title
                level={3}
                style={{
                    color,
                    fontSize: "clamp(24px, 5vw, 32px)", // Responsivo
                    marginBottom: 8
                }}
            >
                Serviços
            </Title>
            <Paragraph
                style={{
                    color,
                    textAlign: "justify",
                    lineHeight: 1.7,
                    fontSize: "clamp(14px, 3.5vw, 18px)" // Responsivo
                }}
            >
                {o_que_faco}
            </Paragraph>
        </div>
    );
};

export default MyServices;
