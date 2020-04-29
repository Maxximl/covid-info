import React, { Component } from 'react';
import styles from './CountryInfo.module.css';
import MiniCards from '../MiniCards/MiniCards';
import CountryList from '../CountryList/CountryList';
import Maps from '../Maps/Maps';

export default class CountryInfoPage extends Component {

    state = {
        country: 'World',
    }

    onCountrySelected = (country) => {
        this.setState({country});
    }

    render() {
        const { country } = this.state;
        return (
            <div className={styles.container}>
                <MiniCards country={country}/>
                <CountryList onCountrySelected={this.onCountrySelected}/>
                <Maps />
            </div>
        )
    }

}
