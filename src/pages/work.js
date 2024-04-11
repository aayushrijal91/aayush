import Project from '@/components/Project';
import { fetchQuery } from "@/util";

const Work = ({ projects }) => {
    if (!projects) {
        return <div>Loading...</div>;
    }

    return (
        <main className="py-32">
            <div className="container">
                <div className='flex flex-wrap pt-20 gap-y-7'>
                    {projects && projects.map((project, i) => (
                        <div key={i} className='md:w-1/2 lg:w-1/3 px-2'>
                            <Project
                                title={project.title}
                                link={project.link}
                                image={project.image}
                                projectType={project.projectType}
                                tools={project.tools}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Work;

export async function getServerSideProps() {
    const projects = await fetchQuery("projects");

    return {
        props: {
            projects
        }
    }
}