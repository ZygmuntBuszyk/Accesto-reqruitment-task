interface ICatCardProps {
    name: string;
    imageSource: string;
}

function CatCard({ name, imageSource}: ICatCardProps) {
    return (
        <img src={imageSource} alt={name} width={'100%'} height={'100%'}/>
    );
}

CatCard.defaultProps = {
    imageSource: null,
    name: null
};

export default CatCard;
