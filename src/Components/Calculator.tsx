import { Fragment, useState } from 'react'
import { AccountType } from '../Models/AccountType'
import { Price } from '../Models/Price';

const Calculator = () => {

    const [TotalBill, setTotalBill] = useState<number>(0);
    const [UserAccountType, setUserAccountType] = useState<AccountType>(AccountType.Gold);
    const [UserAdditionalLines, setUserAdditionalLines] = useState<number>(0);

    const setAccountType = (accountType: number) => {
        setUserAccountType(accountType);
    }

    const setAdditionalLines = (noOfAdditionalLines: number) => {
        setUserAdditionalLines(noOfAdditionalLines);
    }

    const calculateTotalBill = () => {
        const baseCharge = UserAccountType === AccountType.Gold ? Price.BaseGold : Price.BaseSilver;
        const additionCharge = UserAccountType === AccountType.Gold ? Price.AdditionalGold : Price.AdditionalSilver;
        const totalBill = baseCharge + (UserAdditionalLines * additionCharge);
        setTotalBill(totalBill);
    }

    return (
        <Fragment>
            Select Account Type:
            <div>
                <input id="gold-radio"
                    type="radio"
                    value={AccountType.Gold}
                    name="AccountType"
                    onChange={(e) => setAccountType(+e.target.value)}
                    checked={UserAccountType === AccountType.Gold}
                />
                <label htmlFor='gold-radio'>Gold</label>

            </div>
            <div>
                <input id="silver-radio"
                    type="radio"
                    value={AccountType.Silver}
                    name="AccountType"
                    onChange={(e) => setAccountType(+e.target.value)}
                    checked={UserAccountType === AccountType.Silver}
                />
                <label htmlFor='silver-radio'>Silver</label>
            </div>
            <br></br>
            Select Number Of Additional Lines:
            <div>
                <label>Additional Lines</label>
                <input type="number" min="0" value={UserAdditionalLines}
                    onChange={(e) => setAdditionalLines(+e.target.value)}
                ></input>
            </div>
            <br></br>
            <div>
                <button onClick={(e) => calculateTotalBill()}
                >Calculate Total Bill</button>
            </div>

            <div>Total Bill: {TotalBill}</div>
        </Fragment>
    )
}

export default Calculator