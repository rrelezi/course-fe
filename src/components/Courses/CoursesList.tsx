import { Col, Row, Typography } from 'antd'
import CourseCard from './CourseCard'

const Text = Typography.Text

interface CoursesListProps {
    items: any[]
    type?: 'course' | 'course-category'
}

const CoursesList = ({ items, type }: CoursesListProps) => (
    <Row gutter={[12, 12]} justify={'center'} className={'py-7 items-center'}>
        {items.map((item, index) => (
            <Col
                key={index}
                xs={24}
                sm={12}
                md={12}
                lg={type === 'course-category' ? 8 : 12}
                className={
                    'flex justify-center items-center text-2xl font-semibold w-full'
                }
            >
                <CourseCard item={item} type={type} />
            </Col>
        ))}
    </Row>
)

export default CoursesList
