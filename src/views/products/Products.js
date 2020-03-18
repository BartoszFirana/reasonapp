import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'components/molecules/card/Card';
import styles from './Products.module.scss';
import { fetchItems } from 'Actions/index';

class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <>
                <div className={styles.wrapper}>
                    {console.log(this.props)
                    // this.props.products.map(product => {
                    //     return <Card key={product.id} name={product.name} price={product.price} />;
                    // })
                    }
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    const { products } = state;
    return { products };
};

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchItems('products')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
