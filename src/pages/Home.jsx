import React, { useRef } from 'react';

import Discounted from '../components/Discounted';
import Explore from '../components/Explore';
import Featured from '../components/Featured';
import Highlights from '../components/Highlights';
import Landing from '../components/Landing';

export default function Home() {
    const featuresRef = useRef(null);

    const executeScroll = () => {
        featuresRef.current.scrollIntoView();
    };

    return (
        <>
            <Landing executeScroll={executeScroll} />
            <Highlights />
            <Featured featuresRef={featuresRef} />
            <Discounted />
            <Explore />
        </>
    );
}
