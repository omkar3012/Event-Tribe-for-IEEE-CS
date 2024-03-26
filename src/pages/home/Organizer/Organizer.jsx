import { Link } from "react-router-dom";
import Container from "../../../components/container/Container";
import organizer from '../../../assets/Organizer/organizer.jpg';


const Organizer = () => {
    return (
        <div className='bg-gray-200 py-16'>
            <Container>
                <div className='flex flex-col md:flex-row md:gap-10 items-center'>
                    <div className='flex-1'>
                        <img className='rounded-md' src={organizer} alt="" />
                    </div>
                    <div className='flex-1 bg-white md:-ml-20 p-12 rounded-md'>
                        <h2 className='text-2xl text-dark_01 md:text-5xl font-semibold'>Publish your papers with us</h2>
                        <p className='text-secondary my-4 text-justify'>
                            IEEE CS chapters serve as platforms for professionals, researchers, and students to exchange ideas, collaborate on projects, and contribute to the advancement of computer science and technology.
                        </p>
                        <Link to='request-organizer'>
                            <button className="bg-primary px-6 py-3 rounded-md text-white uppercase">Search Conferences</button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Organizer;