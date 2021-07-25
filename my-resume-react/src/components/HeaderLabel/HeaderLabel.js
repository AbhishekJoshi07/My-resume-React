function HeaderLabel(props) {
    const { label, labelClasses } = props;

    return (
        <div className={["content-heading", labelClasses].join(" ")} aria-label={label}>
            {label}
        </div>
    );
}

export default HeaderLabel;
