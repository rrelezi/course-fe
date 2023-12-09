import { Button, Card, Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { ICheckoutStore, useCheckoutStore } from "../../store";

const Text = Typography.Text;

interface CourseCardProps {
  item: any;
  type?: 'course' | 'course-category';
}


const CourseCard = ({ item, type = 'course' }: CourseCardProps) => {
  const navigate = useNavigate();
  const { addItem } = useCheckoutStore((state) => state as ICheckoutStore)

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
    <Card className="hover:scale-105 hover:transition-transform w-full" bodyStyle={{
      backgroundImage: `url(${item.image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <Row justify={'center'} className={'py-7 px-2'}>
        <Col span={24} className={'flex flex-col items-center justify-center'}>
          <div className={'flex flex-col justify-start py-4 px-6'}>
            <Text className="pt-2 text-white text-xl font-semibold">{item.name}</Text>
            <Text className="py-4 text-white text-lg font-normal">{item.description}</Text>
            <Text className="text-white text-xl">Only for ${Number(item.price - 0.01).toFixed(2)}</Text>
          </div>
        </Col>

        <Col style={{
          padding: '20px 5px',
          width: '100%',
          margin: '0 30px',
        }}>
          <Button
            className={'w-full h-40'}
            type={'primary'}
            onClick={() => addItem(item)}
          >Buy Now</Button>
        </Col>
      </Row>
    </Card>
  );
}

export default CourseCard;