import React from "react";

import styles from './Button.module.scss';
import { Button } from "@mui/material";

interface ButtonProps {
    children: React.ReactNode;
    type?: "submit" | "reset" | "button" | undefined;
    onClick?: () => void;
    sx?: Record<string, string | number>
}

const CustomButton: React.FC<ButtonProps> = ({children, sx, ...rest}) => {
    return (
        <Button {...rest} className={styles.Button} sx={sx}>
            {children}
        </Button>
    );
};

export default CustomButton;