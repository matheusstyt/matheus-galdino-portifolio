import { Card, Flex, Typography } from "antd";
import { 
    SiTypescript, SiReact, SiReacthookform, SiNestjs, SiPrisma, 
    SiRedis, SiApachekafka, SiPython, SiDjango, SiPostgresql, 
    SiDocker, SiNginx 
} from "react-icons/si";
import { DiRedis } from "react-icons/di";

const { Title } = Typography;

const skills = [
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "React Native", icon: SiReact },
    { name: "NestJS", icon: SiNestjs },
    { name: "Prisma", icon: SiPrisma },
    { name: "Redis", icon: DiRedis },
    { name: "Kafka", icon: SiApachekafka },
    { name: "Python", icon: SiPython },
    { name: "Django", icon: SiDjango },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Docker", icon: SiDocker },
    { name: "Nginx", icon: SiNginx },
];

const Skills = () => {
    return (
        <Flex 
            wrap="wrap" 
            gap={16} 
            justify="center"
            style={{ width: "100%", padding: "20px" }}
        >
            {skills.map(({ name, icon: Icon }) => (
                <Card
                    key={name}
                    hoverable
                    style={{
                        width: 180,
                        textAlign: "center",
                        backgroundColor: "#0d1117",
                        border: "1px solid #21262d",
                        color: "#c9d1d9",
                    }}
                >
                    <div style={{ fontSize: 40, marginBottom: 8 }}>
                        <Icon color="#e34c26"/>
                    </div>
                    <Title level={5} style={{ color: "#c9d1d9", margin: 0 }}>
                        {name}
                    </Title>
                </Card>
            ))}
        </Flex>
    );
};

export default Skills;
