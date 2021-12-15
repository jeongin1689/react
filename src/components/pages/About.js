import React from "react";
import axios from "axios";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import WrapTitle from "../layout/WrapTitle";
import ContInfo from "../layout/ContInfo";
// import aboutImg1 from "../../assets/img/aboutImg01.jpg";
// import aboutImg2 from "../../assets/img/aboutImg02.jpg";
// import aboutImg3 from "../../assets/img/aboutImg03.jpg";
//컴포넌트화 시키면 주소가 다 달라지기 때문에 절대주소 사용 


class About extends React.Component {
    state = {
        textInfo : [],
    }

    getTextInfo = async () => {
        const {
            data: {
                data: {textInfo},
            },
        } = await axios.get("/ReferAbout.json");
        this.setState({ textInfo })
    }

    componentDidMount(){
        this.getTextInfo();
    }

    render(){
        const { textInfo } = this.state

        return (
            <>
                <Header />
                <Contents>
                <section id="aboutCont">
                    <div className="container">
                        <WrapTitle text={ ["introduce", "me"]}/>
                        <div className="about__cont">
                            {textInfo.map((content) => (
                                <Info
                                    h={content.h}
                                    p={content.p}
                                    aboutImg={content.aboutImg}
                                    key={content.aboutImg}
                                />
                            ))}  
                        </div>      
                    </div>
                    </section>
                <ContInfo/>
                </Contents>
                <Footer />
            </>
        )
    }
}    



function Info({ aboutImg, h, p }) {
    return (
        <div className="about">
            <div className="about__img">
                <img src={aboutImg} alt="이미지" />
            </div>
            <div className="about__txt">
                <h3>{ h }</h3>
                <p>{ p }</p>
            </div>
        </div>
    )
}




export default About;