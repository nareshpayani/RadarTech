import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`

    /* Pagination */
    ul.pagination-box {
        margin-top: 20px;
        li {
            margin-right : 15px;
            a {
                font-size: 16px;
                color: ${colors.blue};
                width: 38px;
                height: 38px;
                border: 1px solid ${colors.border3};
                background-color: #fff;
                display: block;
                padding-top: 7px;
                border-radius: 50%;
                i {

                }
                &:hover {
                    background-color: ${colors.dark_blue};
                    color: #ffffff;
                    border-color : ${colors.dark_blue};
                }

                @media(max-width: 575px) {
                    font-size: 14px;
                    width: 30px;
                    height: 30px;
                    padding-top: 4px;
                }
            }
            &:last-child {
                margin-right : 0;
            }
        }
        li.active {
            a {
                background-color: ${colors.blue};
                color: #fff;
                border-color : ${colors.blue};
            }
        }

        @media(max-width: 767px) {
            margin-top: 5px;
        }
    }
`;