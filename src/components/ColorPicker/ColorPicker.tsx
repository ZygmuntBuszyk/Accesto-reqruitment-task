import {useState} from "react";

interface IColorPickerProps {
    colors: string[];
    onChange(color: string): void;
}

function ColorPicker({ colors, onChange }: IColorPickerProps) {
    const [activeColor, setActiveColor] = useState<string>(colors[0]);

    return (
        <div>
            {
                colors.map((color: string, key:number) => (
                    <>
                        <input
                            key={key}
                            type="radio"
                            value={color}
                            checked={color === activeColor}
                            onChange={_ => {
                                setActiveColor(color)

                                onChange(color)
                        }} />

                        <label htmlFor={color}>{color}</label>
                    </>
                ))
            }
        </div>
    );
}

export default ColorPicker;
