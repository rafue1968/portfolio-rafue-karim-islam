export default function ShowProjects({projectlist=[]}){
    return (
        <div className="showProjects">
            <h1 className="project-title">Projects</h1>

            <div className="showProjectsList-grid">
                {projectlist.map((project) => (
                    
                    <div className="project-card" key={project.id} onClick={() => window.open(project.link, '_blank')} style={{cursor: "pointer"}}>
                        <h2 className="project-title">{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}