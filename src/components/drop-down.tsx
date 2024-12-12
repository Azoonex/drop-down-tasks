import "../assets/dropdown.style.scss";

import React, { ComponentPropsWithRef } from "react";

const DropRoot = React.forwardRef<HTMLDivElement, ComponentPropsWithRef<"nav">>(
    function DropRoot({ className, ...props }, ref) {
        return (
            <nav className={`${className} style_root`} {...props} ref={ref} />
        );
    }
);

DropRoot.displayName = "DropRoot";

const DropTrigger = React.forwardRef<
    HTMLButtonElement,
    ComponentPropsWithRef<"button">
>(function DropTrigger({ className, ...props }, ref) {
    return (
        <button className={`${className} style_trigger`} {...props} ref={ref} />
    );
});

DropTrigger.displayName = "DropTrigger";

const DropItem = React.forwardRef<HTMLLIElement, ComponentPropsWithRef<"li">>(
    function DropItem({ className, ...props }, ref) {
        return (
            <li className={`${className} style_item`} {...props} ref={ref} />
        );
    }
);

DropItem.displayName = "DropItem";

const dropContent = React.forwardRef<
    HTMLLIElement,
    ComponentPropsWithRef<"li">
>(function dropContent({ className, ...props }, ref) {
    return <li className={`${className} style_content`} {...props} ref={ref} />;
});

dropContent.displayName = "DropContent";

export default {
    DropRoot,
    DropTrigger,
    DropItem,
    dropContent,
};
