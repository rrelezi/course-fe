import { Button, Col, Row } from 'antd'

const SidebarFooter = () => {
    return (
        <Row justify={'space-between'}>
            <Col span={12} className={'pr-4'}>
                <Button className={'w-full'}>View Cart</Button>
            </Col>
            <Col span={12}>
                <Button type={'primary'} className={'w-full bg-amber-200'}>
                    Checkout
                </Button>
            </Col>
        </Row>
    )
}

export default SidebarFooter
