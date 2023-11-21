import { Button, Card, Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const Text = Typography.Text;

interface CourseCardProps {
  item: any;
  type?: 'course' | 'course-category';
}


const CourseCard = ({ item, type = 'course' }: CourseCardProps) => {
  const navigate = useNavigate();


  if(type === 'course-category') return (
    <Card className="hover:scale-105 hover:transition-transform w-full" bodyStyle={{
      backgroundImage: `url(${item.image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <Row justify={'center'} className={'py-7 px-2'}>
        <Col span={24} className={'flex flex-col items-center justify-center py-5'}>
            <Text className="pt-1 text-white text-xl font-semibold">{item?.name}</Text>
        </Col>

        <Col style={{
          padding: '20px 5px',
          width: '100%',
          margin: '0 30px',
        }}>
          <Button
            type={'primary'}
            onClick={() => navigate(`/courses/${item.slug}`)}
            className={'w-full'}
          >Explore More</Button>
        </Col>
      </Row>
    </Card>
  );

  return (
    <Card className="hover:opacity-80 hover:cursor-pointer" bodyStyle={{
      backgroundImage: `url(${item.image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <Row justify={'center'}>
        <Col span={24} className={'text-white text-xl font-semibold flex flex-col items-center justify-center'}>
          <div className={'flex flex-col justify-start py-4'}>
            <h3 className="pt-1">{item.title}</h3>
            <p className="py-1">{item.description}</p>
            <p className="">${Number(item.price - 0.01).toFixed(2)}</p>
          </div>
        </Col>

        <Col style={{
          padding: '20px 5px',
          opacity: 1
        }}>
          <Button
          >{item.category.name}</Button>
        </Col>
      </Row>
    </Card>
  );
}

export default CourseCard;