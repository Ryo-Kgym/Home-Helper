import {FC} from "react";
import {PossessionPointPresenter} from "./PossessionPointPresenter";

type PossessionPointContainerProps = {
    id: number,
    name: string,
    point: number,
}
export const PossessionPointContainer:
    FC<PossessionPointContainerProps> = (props: PossessionPointContainerProps) => {

    return <PossessionPointPresenter
        id={props.id}
        name={props.name}
        point={props.point}
    />
}