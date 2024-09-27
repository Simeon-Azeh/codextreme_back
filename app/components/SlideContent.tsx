// components/SlideContent.tsx
import { Card, Button } from 'antd';
import { InfoCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';

const SlideContent = () => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold">Subtitle</h2>
      <h1 className="text-3xl font-bold my-4">Main Title</h1>
      <p className="mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card
            key={index}
            title={`Card ${index + 1}`}
            bordered={false}
            className="text-left"
            actions={[
              <Button type="primary" icon={<CheckCircleOutlined />}>
                Action
              </Button>,
              <Button type="link" icon={<InfoCircleOutlined />}>
                More Info
              </Button>,
            ]}
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SlideContent;
