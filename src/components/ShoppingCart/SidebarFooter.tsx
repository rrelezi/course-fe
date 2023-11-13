import { Button, Col, Row } from 'antd'
import { useNavigate } from 'react-router-dom'

const SidebarFooter = ({
    setDrawerVisible,
}: {
    setDrawerVisible: (drawerVisible: boolean) => void
}) => {
    const navigate = useNavigate()

    const onViewCartClick = () => {
        navigate('/cart')
        setDrawerVisible(false);
    }

    return (
        <Row justify={'space-between'}>
            <Col span={12} className={'pr-4'}>
                <Button className={'w-full'} onClick={onViewCartClick}>
                    View Cart
                </Button>
            </Col>
            <Col span={12}>
                <Button type={'primary'} className={'w-full bg-indigo-200'}>
                    Checkout
                </Button>
            </Col>
        </Row>
    )
}

export default SidebarFooter
