import { Button, Divider, Flex } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { FaWhatsapp } from "react-icons/fa";
import { GrDownload } from "react-icons/gr";
import cv from "../../../../assets/pdf/Matheus da Silva Galdino - 2025.pdf";

const Name = () => {

    const quem_sou = `
    Programador Full Cycle que desenvolve soluções completas, do Front-End ao Back-End, 
    além de aplicações mobile. Atuo também como Analista de Sistemas, com forte domínio 
    em modelagem de dados e arquitetura escalável. Tenho experiência em ambientes de produção 
    utilizando Docker, além de trabalhar com tecnologias como Redis, Kafka e microsserviços.
    `;

    const color = "#c5c8cc";

    const number = `5592994517272`;

    const whatsappLink = `https://wa.me/${number}`;

    const handleClick = () => window.open(whatsappLink, '_blank');
    const handleClickPdf = () => window.open(cv, '_blank');

    return <div className="name" style={{ maxWidth: "30em"}}>
        <Title style={{ color, padding: 0, margin: 0 }}>
            Sou <br/>
            <b>Matheus Galdino</b>
        </Title>
        <Paragraph style={{ color, textAlign: "justify" }}>
            Software Engineer
        </Paragraph>
        <Divider
            size={"large"}
            style={{ backgroundColor: "#e34c26", borderWidth: "0.2em"}}
        />
        <Paragraph style={{ color, textAlign: "justify" }}>
            {quem_sou}
        </Paragraph>
        <Flex style={{ gap: "1em"}}>
            <Button variant="outlined" type="primary" size="large" onClick={handleClick}  icon={<FaWhatsapp />}>
            Fale comigo   
            </Button>
            <Button variant="outlined" type="primary" size="large" onClick={handleClickPdf}  icon={<GrDownload  />}>
            Baixar CV 
            </Button>
            
        </Flex>
    </div>
}
export default Name;