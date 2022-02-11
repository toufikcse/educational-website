import { useParams } from 'react-router-dom';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const CourseDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <ServiceDetail serviceId={serviceId}></ServiceDetail>
        </div>
    );
};

export default CourseDetail;