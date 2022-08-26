interface ISearchInputProps {
    onChange: (searchValue: string) => void;
}

function SearchInput({ onChange }: ISearchInputProps) {
    return (
        <input
            type="text"
            onChange={e => onChange(e.target.value)}
        />
    );
}

SearchInput.defaultProps = {
    isLightTheme: true,
    placeholder: null
};

export default SearchInput;
