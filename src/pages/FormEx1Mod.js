import React from 'react';

const vatTax = 0.25;

class FormEx1Mod extends React.Component {
    state = {
        tip: '5',
        netSum: '0',
        summary: '0',
        showResult: true
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    handleChange = (e) => {
        const keyName = e.target.name;
        this.setState({ [keyName]: e.target.value });
    }
    handleButtonClick = () => {
        const withoutTax = (parseInt(this.state.tip) * parseInt(this.state.netSum) / 100) + parseInt(this.state.netSum);
        console.log(this.state.tip);
        this.setState({ summary: withoutTax * vatTax + withoutTax });
        this.setState({ showResult: false });
    }
    render() {
        return (
            <div>
                <h2>1. Przeliczanie rachunku w restauracji - komponent funckyjny</h2>
                {this.state.showResult ?
                    <form onSubmit={this.handleSubmit}>
                        <input type='number' name='netSum' placeholder='Podaj kwotę netto' onChange={this.handleChange} />
                        <label htmlFor="tip-label">Wielkość napiwku:</label>
                        <select name="tip" id="tip-label" onChange={this.handleChange}>
                            <option value="5">5%</option>
                            <option value="10">10%</option>
                            <option value="15">15%</option>
                            <option value="20">20%</option>
                        </select>
                        <button type='submit' onClick={this.handleButtonClick}>Przelicz</button>
                    </form>
                    : <p>Cena brutto: {this.state.summary}</p>}
            </div>
        );
    }
}

export default FormEx1Mod;