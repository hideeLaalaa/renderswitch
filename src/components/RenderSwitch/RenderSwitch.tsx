import React from "react"

export interface SwitchProps {
    value: string;
    default?: React.ReactNode;
    [key: string]: React.ReactNode;
}

const RenderSwitch = (props : SwitchProps) => {
    
    const defaultRender = <>Empty</>;
    
    return ( props[props.value || ""] || props.default || defaultRender );

};

export default RenderSwitch;
