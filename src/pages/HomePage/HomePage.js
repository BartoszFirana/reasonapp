import React from 'react';
import Header from 'components/organisms/header/Header';
import Main from 'components/organisms/main/Main';
import Footer from 'components/organisms/footer/Footer';
import Products from 'views/products/Products';

const HomePage = () => {
    return (
        <>
            <Header />
            <Main>
                <Products />
            </Main>
            <Footer />
        </>
    );
};

export default HomePage;
