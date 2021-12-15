import React from "react";
import axios from "axios";
import PortInfo from "../info/PortInfo";
import WrapTitle from "../layout/WrapTitle";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import ContInfo from "../layout/ContInfo";


class Port extends React.Component {

    //변수를 만들고 싶을 때
    state = {
        isLoading: true,
        ports: []
    }
    
    getPorts = async () => {
        const { 
            data: { 
                data: {ports},
            }
        } = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");
        // console.log(ports);

        // 비동기 처리 - async와 await
        //console.log(ports.data.data.ports);
        this.setState({ ports, isLoading: false });
    }

    componentDidMount() {
        setTimeout(() => {
            //this.setState({ isLoading: false }); 테스트
            this.getPorts();
        }, 3000)
    }

    //출력 명령어
    render() {
        const { isLoading, ports } = this.state;

        return (
            <div>
                {isLoading ? (
                    <div>
                        로딩중입니다.
                    </div>
                    ) : (
                    <div>
                        <Header />
                        <Contents>
                            <section id="portCont">
                                <div className="container">
                                    <WrapTitle text={["introduce", "me"]} /> 
                                    <div className="port__cont">
                                        {ports.map((port) => (
                                            <PortInfo 
                                                key={port.id}
                                                title={port.title}
                                                category={port.category}
                                                link={port.link}
                                                image={port.image}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </section>
                            <ContInfo />
                        </Contents>
                        <Footer />
                    </div>
                )}
            </div>
        )
    }
}

export default Port;