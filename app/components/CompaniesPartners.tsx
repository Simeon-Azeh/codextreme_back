import Image from 'next/image';

const companies = [
    { id: 1, name: 'Company 1', logo: '/mcflogo.svg' },
    { id: 3, name: 'Company 3', logo: '/bklogo.svg' },
    { id: 4, name: 'Company 4', logo: '/giz.svg' },
    { id: 5, name: 'Company 5', logo: '/rdblogo.svg' },
    { id: 2, name: 'Company 2', logo: '/ALUlogo.svg' },
];

const CompaniesPartners = () => {
    return (
        <div className="w-full lg:w-[90%] mx-auto py-10">
            <h2 className=" text-2xl font-semibold mb-8 text-black space-mono px-6 md:px-0">Companies We Have Worked With</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {companies.map((company) => (
                    <div key={company.id} className="flex justify-center items-center p-4">
                        <Image
                            src={company.logo}
                            alt={company.name}
                            width={150}
                            height={100}
                            className="grayscale hover:grayscale-0 transition duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompaniesPartners;
