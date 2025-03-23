
import FeatureCard from '../components/FeatureCard';

const featureData = [
    {
        id: 1,
        logo: "https://res.cloudinary.com/deqwiyyxl/image/upload/v1740660375/s7tqvhdluz5z8nzouafj.jpg",
        title: "Feature 1",
        description: "Description for feature 1."
    },
    {
        id: 2,
        logo: "https://res.cloudinary.com/deqwiyyxl/image/upload/v1740660375/s7tqvhdluz5z8nzouafj.jpg",
        title: "Feature 2",
        description: "Description for feature 2."
    },
    {
        id: 3,
        logo: "https://res.cloudinary.com/deqwiyyxl/image/upload/v1740660375/s7tqvhdluz5z8nzouafj.jpg",
        title: "Feature 3",
        description: "Description for feature 3."
    },
    // Add more features as needed
];

export const About = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4 p-4">
            {featureData.map(feature => (
                <div key={feature.id} className="flex justify-center">
                    <FeatureCard
                        logo={feature.logo}
                        title={feature.title}
                        description={feature.description}
                    />
                </div>
            ))}


            <div>
                <img src="https://res.cloudinary.com/deqwiyyxl/image/upload/v1742710135/aniket_hospital_pic_oy5kdh.jpg" alt="" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl" />
            </div>
        </div>
    );
}
