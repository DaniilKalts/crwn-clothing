import './directory.styles.scss'
const DirectoryItem = (props) => {

    const { id, title, imageUrl } = props.category;

    return (
        <div className='directory-item-container' key={id}>
            <div className='background-image' style={{ 
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className='body'>
            <h2>{title}</h2>
            <p>Shop Now</p>
            </div>
        </div>
    )
}

export default DirectoryItem;