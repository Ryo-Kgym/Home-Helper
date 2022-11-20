import Layout from "../../components/page/Layout";
import {CardLinkList} from "../../components/ui/Card";
import MainTitle from "../../components/page/MainTitle";

const pageList = [
    {href: '/', label: 'ホーム', back: true,},
    {href: '/homeHelper/1', label: 'ユーザ1', },
    {href: '/homeHelper/2', label: 'ユーザ2', },
]

const index = () => {
    return (
        <Layout
            main={
                <>
                    <MainTitle
                        label={'お手伝いアプリ！'}
                    />
                    <CardLinkList
                        pageList={pageList}
                    />
                </>
            }
        />
    )
}
export default index
