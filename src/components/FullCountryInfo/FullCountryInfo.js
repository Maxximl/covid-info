import React, { Component } from 'react';
import styles from './FullCountryInfo.module.css';
import MiniCards from '../MiniCards/MiniCards';
import CountryList from '../CountryList/CountryList';
import VirusMap from '../VirusMap/VirusMap';
import CountrySearch from '../CountrySearch/CountrySearch';

export default class FullCountryInfo extends Component {

    state = {
        country: 'World',
        searched: "",
    }

    handleSearching = (event) => {
        this.setState({ searched: event.target.value });
      };
    

    onCountrySelected = (country) => {
        this.setState({country});
    }

    render() {
        const { country, searched } = this.state;
        return (
            <div className={styles.container}>
                <MiniCards country={country} />
                <div>
                    <CountrySearch searched={searched} handleSearching={this.handleSearching} />
                    <CountryList onCountrySelected={this.onCountrySelected} searched={searched}/>
                </div>
                <div className={styles.map}>
                    <VirusMap onCountrySelected={this.onCountrySelected} zoom={0.2}/>
                </div>
                
            </div>
        )
    }

}