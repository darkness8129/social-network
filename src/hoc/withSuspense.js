import React, { Suspense } from 'react';
import Preloader from '../components/common/Preloader/Preloader';

// hoc to integrate suspense for lazy loading of components`
const withSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<Preloader />}>
            <Component {...props} />
        </Suspense>
    }
}

export default withSuspense;