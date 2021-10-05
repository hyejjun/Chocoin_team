import Styled from "styled-components"

const Orderlist = (props) => {
    return (
        <>
            <OrderList>
                { props.list }
            </OrderList>
        </>
    )
}

export default Orderlist

const OrderList = Styled.div`
    /* display: flex; */
    padding: 1rem 0;
    border-bottom: 1px solid #d9d9d9;
    cursor: pointer;

    & > div{
        width: 100%;
        display:flex;
    }

    & > div > p{
        width: 33.3%;
        font-size: 1rem;
        text-align: center;
    }

    & > p,span{
        font-size: 0.5em;
        font-weight: 400;
    }

`