import React, { useEffect, useRef, useState } from "react";
import "../assets/dropdown.style.scss";
import "../assets/home.style.scss";
import { TypeDataDropDwon } from "../types/types";
import DropDown from "./ui/drop-down";

const DropDownDemo: React.FC<TypeDataDropDwon> = (props) => {
  const { data } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [onselectLabel, setOnSelectLabel] = useState<string | null>(null);

  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        isOpen && setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);


  return (
    <DropDown.DropRoot ref={rootRef}>
      <DropDown.DropTrigger
        disabled={data.length < 0}
        className={isOpen && data.length > 0 ? "open" : undefined}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {!onselectLabel ? "DropDown" : onselectLabel}{" "}
        <span>
          <img
            width={20}
            height={20}
            src="./chevron-up.svg"
            className={`${
              isOpen && data.length > 0 ? "close_content" : undefined
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
                if (!onselectLabel) {
                  setOnSelectLabel(i.label);
                } else {
                  setOnSelectLabel('');
                }
              }}
            >
              {i.label}
              <span>{i.label === onselectLabel ? "✅" : undefined}</span>
            </DropDown.DropItem>
          ))}
        </DropDown.dropContent>
      )}
    </DropDown.DropRoot>
  );
};

export default DropDownDemo;
