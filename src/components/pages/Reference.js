import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import WrapTitle from "../layout/WrapTitle";
import ContInfo from "../layout/ContInfo";
//import { Link } from "react-router-dom";
import HtmlRef from "./HtmlRef";
import CssRef from "./CssRef";


const obj = {
    0: <HtmlRef />,
    1: <CssRef />,
  };

class Reference extends React.Component {

    state = {
        activeId: 0,
    };

    clickHandler = (id) => {
        this.setState({ activeId: id });
    };


    render() {

        return (
            <div>
                <div>
                    <Header />
                    <Contents>
                        <section id="referCont">
                            <div className="container">
                                <WrapTitle text={["reference", "site"]} />
                                <div className="refer__cont">
                                    <div className="table">
                                        <ul className="tabs">
                                            <li onClick={() => this.clickHandler(0)}>HTML</li>
                                            <li onClick={() => this.clickHandler(1)}>CSS</li>
                                        </ul>
                                        <ul className="contents">
                                            {obj[this.state.activeId]}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <ContInfo />
                    </Contents>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Reference;
