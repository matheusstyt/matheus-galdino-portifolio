import { Flex } from "antd";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";
import Title from "antd/es/typography/Title";

const BoxSocial = () => {
    const list: Array<{
        name: string;
        icon: IconType;
        url: string;
    }> = [
        {
            name: "Linkedin",
            icon: FaLinkedin,
            url: "https://www.linkedin.com/in/matheusstyt",
        },
        {
            name: "Github",
            icon: FaGithub,
            url: "https://github.com/matheusstyt",
        },
    ];
    const color = "#c5c8cc";

    return (
        <Flex gap={16} style={{
            backgroundColor: "#3b3e4c",
            padding: 15,
            marginTop: 10,
            zIndex: 2
        }}>
            {list.map(({ name, icon: Icon, url }) => (
                <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: "inherit",
                        fontSize: 24,
                        transition: "transform 0.2s ease",
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderRadius: 10,
                        border: "2px solid "+color
                    }}
                >
                    <Title level={4} style={{ padding: 0, margin: 0, color}}>
                        {name}
                    </Title>
                    <Icon color={color}/>
                </a>
            ))}
        </Flex>
    );
};

export default BoxSocial;
