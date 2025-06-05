import { Divider, Flex } from "antd";
import "../../styles/global.scss";
import MyPhoto from "./components/myPhoto";
import Name from "./components/name";
import MyServices from "./components/myServices";
import "./styles/index.scss";
import BoxSocial from "./components/boxSocial";
import Title from "antd/es/typography/Title";
import Skills from "./components/skills";
import Projects from "./components/projects";

const PortfolioPage = () => {

    const color = "#c5c8cc";

    return <Flex 
        vertical 
        className="container" 
        justify="center" 
        align="center"
        flex={1}
     >
        <section className="section-home">
            <Name/>
            <MyPhoto/>
            <MyServices/>
        </section>
        <BoxSocial/>
        <section className="section-skills">
            <div>
                <Title className="text-title" style={{color}}> Habilidades </Title>
                <Divider
                    size={"middle"}
                    style={{ backgroundColor: "#e34c26", borderWidth: "0.2em"}}
                />
            </div>
            <Skills />
        </section>
        <section className="section-projects">
            <div>
                <Title className="text-title" style={{color}}> Projetos Destaque </Title>
                <Divider
                    size={"middle"}
                    style={{ backgroundColor: "#e34c26", borderWidth: "0.2em"}}
                />
            </div>
            <Projects />
        </section>
    </Flex>
}

export default PortfolioPage;