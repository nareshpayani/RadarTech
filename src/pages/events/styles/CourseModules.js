import styled from "styled-components";
import { colors } from "../../../components/common/element/elements.js";

export const Styles = styled.div`

    .tab-section {
        background: ${colors.bg2};
        padding   : 20px 0 65px;
        margin-bottom: 20px;
        
        .nav {
            background-color: #ffffff;
            border-radius : 5px;
            border  : 1px solid ${colors.border1};
            overflow: hidden;

            .nav-item {
                a.nav-link {
                    font-size    : 15px;
                    color        : ${colors.black1};
                    border-bottom: 1px solid ${colors.border1};
                    padding      : 18px 25px;

                    i {
                        color: ${colors.blue};
                    }
                }

                a.nav-link.active {
                    background: ${colors.gr_bg};
                    color     : #ffffff;

                    i {
                        color: #ffffff;
                    }
                }

                &:last-child {
                    a.nav-link {
                        border-bottom: none;
                    }
                }
            }

            @media(max-width: 767px) {
                margin-bottom : 30px;
            }
        }
       
        .tab-content {
            .tab-pane {
                h4.tab-title {
                    color        : ${colors.black1};
                    font-weight  : 600;
                    margin-bottom: 25px;

                    @media(max-width: 575px) {
                        margin-bottom: 15px;
                        font-size: 20px;
                    }
                }

                p.tab-desc {
                    font-size    : 15px;
                    color        : ${colors.text2};
                    line-height  : 30px;
                    margin-bottom: 25px;

                    @media(max-width: 575px) {
                        font-size: 14px;
                    }
                }

                ul.check-list {
                    li {
                        font-size    : 15px;
                        color        : ${colors.text2};
                        margin-bottom: 20px;
                        line-height  : 20px;

                        i {
                            float : left;
                            color : ${colors.blue};
                            
                            width : 35px;
                            height: 35px;
                            border-radius : 50%;
                            text-align  : center;
                            
                            margin-top  : 3px;
                            margin-right: 15px;
                        }

                        &:last-child {
                            margin-bottom: 0;
                        }

                        @media(max-width: 575px) {
                            font-size: 14px;
                        }
                    }
                }
            }
        }

        @media(max-width: 767px) {
            padding: 35px 0 30px;
        }

        h5 {
            color: ${colors.black2};
            font-weight: 600;
            padding-bottom: 10px;
            margin-bottom: 20px;
            margin-left: 20px;
            position: relative;
            &:before {
                position: absolute;
                content: "";
                background: ${colors.blue};
                width: 50px;
                height: 2px;
                bottom: 0;
                left: 0;
            }

            @media(max-width: 767px) {
                font-size : 17px;
            }
    }
`;