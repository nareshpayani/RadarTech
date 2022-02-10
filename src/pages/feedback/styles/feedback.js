import styled from "styled-components";
import { colors } from "../../../components/common/element/elements.js";

export const Styles = styled.div`
    .registration-page {
        .registration-area {
            padding : 70px 0;
            .registration-box {
                max-width : 500px;
                margin: auto;
                border: 1px solid ${colors.border1};
                box-shadow: 0 0px 20px rgba(0,0,0,0.08);
                padding: 25px 30px;
                border-radius: 5px;
                .registration-title {
                    h3 {
                        color : ${colors.black2};
                        text-transform: uppercase;
                        font-weight: 600;
                        padding-bottom: 10px;
                        margin-bottom: 20px;
                        position: relative;
                        &:before {
                            position: absolute;
                            content: "";
                            background: ${colors.blue};
                            width: 50px;
                            height: 2px;
                            bottom: 0;
                            left: 50%;
                            margin-left: -25px;
                        }

                        @media(max-width: 575px) {
                            font-size : 20px;
                        }
                    }
                }

                form.form {
                    p.form-control {
                        padding      : 0;
                        width        : auto;
                        height       : auto;
                        background   : transparent;
                        border       : none;
                        margin-bottom: 28px;
                        position     : relative;

                        label {
                            font-size : 15px;
                            color : ${colors.text1};
                            font-weight : 500;

                            @media(max-width: 575px) {
                                font-size : 14px;
                            }
                        }

                        textarea {
                            width           : 100%;
                            height          : 150px;
                            background      : transparent;
                            border          : 1px solid ${colors.border3};
                            font-size       : 15px;
                            padding         : 15px 20px;
                            color           : ${colors.black2};
                            border-radius   : 5px;
            
                            &:focus {
                                border-color: ${colors.blue};
                            }
            
                            &::placeholder {
                                font-size : 14px;
                                font-style: italic;
                                color     : ${colors.text3};

                                @media(max-width: 575px) {
                                    font-size : 13px;
                                }
                            }
                        }

                        input {
                            width           : 100%;
                            height          : 48px;
                            background-color: #ffffff;
                            font-size       : 14px;
                            padding         : 15px 20px;
                            color           : ${colors.black1};
                            border          : 1px solid ${colors.border3};
                            border-radius : 5px;

                            &::placeholder {
                                font-size : 14px;
                                font-style: italic;
                                color     : ${colors.text3};

                                @media(max-width: 575px) {
                                    font-size : 13px;
                                }
                            }

                            &:focus {
                                border-color : ${colors.blue};
                            }

                            @media(max-width: 575px) {
                                height : 40px;
                            }
                        }

                        span {
                            color      : ${colors.red};
                            font-weight: 300;
                            position   : absolute;
                            bottom     : -20px;
                            left       : 0;
                            visibility : hidden;
                        }
                    }

                    p.form-control.success {
                        input {
                            border: 2px solid ${colors.blue};
                        }

                        &::before {
                            position   : absolute;
                            content    : "\f058";
                            font-family: "Line Awesome Free";
                            font-size  : 24px;
                            color      : ${colors.blue};
                            font-weight: 900;
                            top        : 34px;
                            right      : 10px;
                        }
                    }

                    p.form-control.error {
                        input {
                            border: 2px solid ${colors.red};
                        }

                        &::before {
                            position   : absolute;
                            content    : "\f06a";
                            font-family: "Line Awesome Free";
                            font-size  : 24px;
                            color      : ${colors.red};
                            font-weight: 900;
                            top        : 34px;
                            right      : 10px;
                        }
                    }

                    p.form-control.error {
                        span {
                            visibility: visible;
                        }
                    }

                    button {
                        font-size  : 16px;
                        color      : #fff;
                        background : ${colors.gr_bg};
                        width      : 100%;
                        height     : 48px;
                        font-weight: 500;
                        border     : none;
                        border-radius : 5px;
                        text-transform: uppercase;
                        margin-bottom : 20px;

                        &:hover {
                            background: ${colors.gr_bg2};

                            i {
                                color: #ffffff;
                            }
                        }

                        @media(max-width: 575px) {
                            font-size : 15px;
                            height     : 40px;
                        }
                    }
                    .file-container {
                        width    : 100%;
                        margin-bottom: 10px;
                        font-size : 15px;
                        color : ${colors.text1};
                        font-weight : 500;
                    }
                }

                .have_account-btn {
                    p {
                        font-size : 14px;
                        color     : ${colors.text3};
                        a {
                            font-size : 14px;
                            color : ${colors.blue};
                            font-weight : 500;
                            &:hover {
                                text-decoration : underline;
                            }
                        }
                    }
                }
            }

            @media(max-width: 767px) {
                padding: 30px 0;
            }
        }
    }
`;