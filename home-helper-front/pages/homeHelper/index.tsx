import {Layout} from "../../components/page/Layout";
import {CardLinkList} from "../../components/ui/Card";
import MainTitle from "../../components/page/MainTitle";

const index = (props: {
    data: {
        pageList: any[],
    }
}) => {
    return (
        <Layout
            main={
                <>
                    <MainTitle
                        label={'お手伝いアプリ'}
                    />
                    <CardLinkList
                        pageList={props.data.pageList}
                    />
                </>
            }
        />
    )
}
export default index

export async function getStaticProps() {
    const pageList = [
        {href: '/', label: 'ホーム', back: true,},
    ]

    const userList = [
        {id: '1', name: 'ユーザ1',},
        {id: '2', name: 'ユーザ2',},
    ]

    userList.map(user => {
        pageList.push({
            href: '/homeHelper/' + user.id,
            label: user.name,
            back: false,
        })
    })

    const data = {
        pageList: pageList,
    }

    return {props: {data}}
}