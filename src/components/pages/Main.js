import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";

function Info({data}) {
    return <div>{data}</div>;
}

const textInfo = [
    { text: "we provide" },
    { text: "visual coding" },
    { text: "we solution" },
    { text: "for you webs" },
]

function Main() {
    return (
        <div>
            <Header />
            <Contents>
                <section id="mainCont">
                    <h2 className="sr-only">메인 컨텐츠 영역입니다.</h2>
                    <div className="main__cont">
                        {textInfo.map((mainText) => (
                            <Info data={mainText.text} key={mainText.text}/>
                        ))}
                    </div>
                    
                </section>
            </Contents>
            <Footer />
        </div>
        
    )
}

export default Main;