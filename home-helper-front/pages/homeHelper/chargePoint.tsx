import {DeclareTerm} from "../../components/page/charge_point/declareTerm";
import {HelpItemList} from "../../components/page/charge_point/helpItemList";

// TODO change structure
const index = (props: {
    data: {
        fromDate: string
        toDate: string
    }
}) => {
    return (
        <>
            <DeclareTerm
                fromDate={props.data.fromDate}
                toDate={props.data.toDate}
            />
            <HelpItemList/>
        </>)
}
export default index

export async function getServerSideProps() {
    const data = {
        fromDate: "11月13日",
        toDate: "今日",
    }

    return {props: {data}}
}
