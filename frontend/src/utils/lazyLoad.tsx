import { Flex } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import { MagicSpinner } from 'react-spinners-kit';

const lazyLoad = (importFunc: () => Promise<any>) => {
    const Loading = () => {
        return (
            <Flex
                minH = "100vh"
                align = "center"
                justify = "center"
            >
                <MagicSpinner 
                    size = { 70 }
                    color = "#3a82f7"
                    loading 
                />
            </Flex>
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