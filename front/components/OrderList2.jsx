import Styled from "styled-components"

const Orderlist2 = (props) => {
    console.log(props.list);
    return (
        <>
            <OrderList2>
                {
                    props.list
                }
            </OrderList2>
        </>
    )
}

export default Orderlist2

const OrderList2 = Styled.div`
    display: flex;
    padding: 1rem 0;
    border-bottom: 1px solid #d9d9d9;
    cursor: pointer;

    & > div{
        width: 33.3%;
    }

    & > p{
        margin: 0;
        font-size: 1rem;
        text-align: right;
        padding-right: 20px;
        font-weight: 500;
    }

    & > p,span{
        font-size: 0.5em;
        margin-left: 5px;
        font-weight: 400;
    }

`