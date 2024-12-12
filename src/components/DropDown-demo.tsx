import React, { useState } from "react";
import "../assets/home.style.scss";
import "../assets/dropdown.style.scss";
import DropDown from "./ui/drop-down";
import { TypeDataDropDwon } from "../types/types";

const DropDownDemo: React.FC<TypeDataDropDwon> = (props) => {
    const { data } = props;
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [onselect, setOnSelect] = useState<string | null>("");

    return (
        <DropDown.DropRoot>
            <DropDown.DropTrigger
                disabled={data.length < 0}
                className={isOpen && data.length < 0 ? "open" : undefined}
                onClick={() => setIsOpen((prev) => !prev)}>
                {!onselect ? "DropDown" : onselect}{" "}
                <span>
                    <img
                        width={20}
                        height={20}
                        src='./chevron-up.svg'
                        className={`${
                            isOpen && data.length > 0
                                ? "close_content"
                                : undefined
                        } checkOpen`}
                    />
                </span>
            </DropDown.DropTrigger>
            {isOpen && data.length > 0 && (
                <DropDown.dropContent>
                    {data.map((i) => (
                        <DropDown.DropItem
                            key={i.id}
                            onClick={() => {
                                if (!onselect) {
                                    setOnSelect(i.label);
                                } else {
                                    setOnSelect(null);
                                }
                            }}>
                            {i.label}
                            <span>
                                {i.label === onselect ? "✅" : undefined}
                            </span>
                        </DropDown.DropItem>
                    ))}
                </DropDown.dropContent>
            )}
        </DropDown.DropRoot>
    );
};

export default DropDownDemo;
