import { Image } from "antd"
import eu_png from "../../../../assets/images/eu_png.png";

const MyPhoto = () => {
    return <div
        className="photo"
        style={{
            display: "flex",
            position: "relative", 
            justifyContent: "center", 
            alignItems: "flex-start"
        }}
    >
        <div
            style={{
                width: 350,
                height: 350,
                borderRadius: 300,
                backgroundColor: "#87312d",
                position: "absolute"
            }}
        >

        </div>
        <Image
            width={300}
            src={eu_png}
            style={{ zIndex: 2 }}
            alt="Matheus Galdino"
        />
    </div>
}

export default MyPhoto;