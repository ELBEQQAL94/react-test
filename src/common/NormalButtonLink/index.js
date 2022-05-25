const NormalButtonLink = ({ buttonStyleContainer, title }) => {
    return (
        <a
            href="#"
            className={`${buttonStyleContainer} link`}
        >{title}</a>
    );
};

export default NormalButtonLink;