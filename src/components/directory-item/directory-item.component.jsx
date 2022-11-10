import { useNavigate } from "react-router-dom";
import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles";

const DirectoryItem = (props) => {

    const { id, title, imageUrl, route } = props.category;

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route)

    return (
        <DirectoryItemContainer key={id} onClick={ onNavigateHandler }>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body className='body'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;