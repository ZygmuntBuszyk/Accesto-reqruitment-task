import { debounce } from 'lodash';

interface ISearchInputProps {
    onChange: (searchValue: string) => void;
}

function SearchBar({ onChange }: ISearchInputProps) {
    // value={this.state.value}
    return (
        <label>
            Text:
            <input
                type="text"
                onChange={e => debounce(onChange, 1000)(e.target.value)}
            />
        </label>
        // <Input
        //     prefix={<SearchIcon />}
        //     placeholder={!placeholder ? t('search') : placeholder}
        //     className={cx(styles.search, className, { [styles['search--light-theme']]: isLightTheme })}
        //     onChange={e => debounce(onChange, 500)(e.target.value)}
        // />
    );
}

SearchBar.defaultProps = {
    isLightTheme: true,
    placeholder: null
};

export default SearchBar;
