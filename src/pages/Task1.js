import React from 'react';
import Input from "../ui/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {isBetween} from "../helper";
import {setCountFacts} from "../redux/slices/starWarsSlices";

const Task1 = () => {
    const countFacts = useSelector((state) => state.starWars.countFacts);
    const facts = useSelector((state) => state.starWars.facts);
    const dispatch = useDispatch();

    const validateCountFacts = (value) => {
        const length = value.length;
        switch (true) {
            case (length === 0):
                return '';
            case (length === 1):
                return (isBetween(+value, countFacts.min, countFacts.max)) ? +value : false;
            case (length > 1):
                return (isBetween(+value.slice(-1), countFacts.min, countFacts.max)) ? +value.slice(-1) : false;
            default:
                return false;
        }
    }
    const handleChangeCountFacts = (e) => {
        const validCountFacts = validateCountFacts(e.target.value);
        if (validCountFacts !== false && validCountFacts !== countFacts.value) {
            dispatch(setCountFacts(validCountFacts))
        }
    }

    const handleKeypressCountFacts = (e) => {
        if (!(Number(e.key))){
            e.preventDefault();
            return false
        }
    }

    return (
        <>
            <div className="factors">
                <Input type="number"
                       min={countFacts.min}
                       max={countFacts.max}
                       placeholder="Введите количество фактов"
                       onChange={(e) => handleChangeCountFacts(e)}
                       value={countFacts.value}
                       maxLength="2"
                       onKeyPress={(e) => handleKeypressCountFacts(e)}
                />

                <div className="factors-list">
                    <h5>Факты:</h5>
                    <ol>
                        {
                            facts.filter((item, index) => index < countFacts.value)
                                .map(item => <li key={item.id}>{item.value}</li>)
                        }
                    </ol>
                </div>
            </div>

        </>
    );
}

export {Task1};