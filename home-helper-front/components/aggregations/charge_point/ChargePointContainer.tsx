import {FC, useState} from "react";
import {ChargePointPresenter} from "./ChargePointPresenter";

type ChargePointContainerProps = {
    fromDate: string,
    helpItems: any[],
}

export const ChargePointContainer:
    FC<ChargePointContainerProps> = (props) => {

    const [totalPoint, setTotalPoint] = useState(0)

    const handleClickCount = (point: number, count: number) => {
        setTotalPoint(totalPoint + point * count)
    }

    return <ChargePointPresenter
        fromDate={props.fromDate}
        helpItems={props.helpItems}
        handleClickCount={handleClickCount}
        totalPoint={totalPoint}
    />
}