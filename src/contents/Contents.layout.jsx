import React from 'react';

const ContentsLayout = (WrappedComponent, language, Content) => {
    const componentContent = Content.language;

    return <WrappedComponent content={componentContent} />;
};

export default ContentsLayout