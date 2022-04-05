import { projects } from './db/projects';

const contentProject = document.querySelector('.content-projects');

const getProjects = ( project ) => {

    let html = `
    <div class="content-img">
        <img src=${project.img} alt="">

        <div class="projects-panel">
            <div>
                <div class="header-panel">
                    <span>Web</span>
                    <p>${project.title}</p>
                </div>
                <div class="stack-panel">
                    <span>Stack</span>
                    <ul class="content-lip">
                        <li>${project.stack[0]}</li>
                        <li>${project.stack[1]}</li>
                        <li>${project.stack[2]}</li>
                    </ul>
                </div>
                <div class="icons-panel">
                    <a href=${project.clip} class="iconf" target="_blank">
                        <i class='bx bx-paperclip'></i>
                    </a>
                    <a href=${project.code} class="iconf" target="_blank">
                        <i class='bx bxl-gitlab' ></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `

    const div = document.createElement('div');
    div.innerHTML = html;
    contentProject.appendChild(div);

}

export const initProject = () => {
    projects.forEach( getProjects );
}