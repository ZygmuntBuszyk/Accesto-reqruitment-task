import styles from './ColorPicker.module.css';
import {useState} from "react";

interface IColorPickerProps {
    colors: string[];
    onChange(color: string): void;
}

function ColorPicker({ colors, onChange }: IColorPickerProps) {
    const [activeColor, setActiveColor] = useState<string>(colors[0]);

    return (
        <div className={styles.container}>
            {
                colors.map((color: string) => (
                    <div key={color}>
                        <input
                            type="radio"
                            value={color}
                            checked={color === activeColor}
                            onChange={_ => {
                                setActiveColor(color)

                                onChange(color)
                        }} />

                        <label htmlFor={color}>{color}</label>
                    </div>
                ))
            }
        </div>
    );
}

export default ColorPicker;
