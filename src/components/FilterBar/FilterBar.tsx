import styles from './FilterBar.module.css';
import {useEffect, useState} from 'react';
import SearchInput from "../SearchInput";
import {IFilterQueryProps} from "../../services/CatService";
import ColorPicker from "../ColorPicker";

interface IFilterProps {
    onChangeFilter: (filter: IFilterQueryProps) => void;
}

function FilterBar({onChangeFilter}: IFilterProps) {
    const colors = ['Red', 'Green', 'Blue'];
    const [searchValue, setSearchValue] = useState<string>();
    const [color, setColor] = useState<string>(colors[0]);

    useEffect(() => {
        if(searchValue && color) {
            onChangeFilter({
                searchValue,
                color,
            })
        }
    }, [searchValue, color]);

    return (
        <div className={styles.container}>
            <div className={styles['filter-box']}>
                <p>
                    Text
                </p>

                <SearchInput
                    onChange={setSearchValue}
                />
            </div>

            <div className={styles['filter-box']}>
                <p>
                    Color
                </p>

                <ColorPicker
                    colors={colors}
                    onChange={setColor}
                />
            </div>

        </div>
    );
}

export default FilterBar;
