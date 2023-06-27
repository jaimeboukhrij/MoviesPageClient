import React, { useEffect } from 'react';

const Scroll = ({ page, setPage }) => {

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

            if (scrollTop + clientHeight >= scrollHeight - 20) {
                page = page + 1
                setPage(page)
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

};

export default Scroll;
