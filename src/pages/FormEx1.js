// komponent funckyjny
import { useState } from 'react';

const vatTax = 0.25;

function useSelect(initialValue = 0) {
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return [value, handleChange];
}

function FormEx1() {
    const [tip, handleSelectChange] = useState('5');
    const [netSum, handleNetSumChange] = useSelect();
    const [summary, setSummary] = useState(0);
    const [result, showResult] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const handleButtonClick = () => {
        const withoutTax = (parseInt(tip) * parseInt(netSum) / 100) + parseInt(netSum);
        setSummary(withoutTax * vatTax + withoutTax);
        showResult(false);
    }
    const handleSelect = (event) => {
        handleSelectChange(event.target.value);
    }

    return (
        <div>
            <h1>1. Przeliczanie rachunku w restauracji - komponent funckyjny</h1>
            {result ?
                <form onSubmit={handleSubmit}>
                    <input type='number' name='netSum' placeholder='Podaj kwotę netto' onChange={handleNetSumChange} />
                    <label htmlFor="tip-label">Wielkość napiwku:</label>
                    <select name="tip" id="tip-label" onChange={handleSelect}>
                        <option value="5">5%</option>
                        <option value="10">10%</option>
                        <option value="15">15%</option>
                        <option value="20">20%</option>
                    </select>
                    <button type='submit' onClick={handleButtonClick}>Przelicz</button>
                </form> :
                <p>Cena brutto: {summary}</p>}
        </div>
    );
}

export default FormEx1;