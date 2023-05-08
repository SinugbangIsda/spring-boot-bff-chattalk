import { lazy, Suspense } from 'react';
import { CubeSpinner } from 'react-spinners-kit';

const lazyLoad = (importFunc: () => Promise<any>) => {
    const Loading = () => {
        return (
            <section className = "min-h-screen bg-[#141517]">
                <div className = "flex items-center justify-center min-h-screen">
                    <CubeSpinner size = { 42 } frontColor = "#E6613E" backColor = "#b95238" loading />
                </div>
            </section>
        )
    };
    
    const LazyComponent = lazy(importFunc);
    return (props: any) => (
        <Suspense fallback = { <Loading /> }>
            <LazyComponent { ...props } />
        </Suspense>
    );
};

export default lazyLoad;