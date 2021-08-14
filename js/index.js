const linkAbout = document.getElementById('scrollToAboutMe');
const about = document.getElementById('about-me');
linkAbout.addEventListener('click', () => {
    window.scrollTo({
        top: about.offsetTop,
        behavior: 'smooth'
    })
})

const linkWorkExperience = document.getElementById('scrollToWorkExperience');
const workExperience = document.getElementById('work-experience');
linkWorkExperience.addEventListener('click', () => {
    window.scrollTo({
        top: workExperience.offsetTop,
        behavior: 'smooth'
    })
})

const linkEducation = document.getElementById('scrollToEducation');
const education = document.getElementById('education');
linkEducation.addEventListener('click', () => {
    window.scrollTo({
        top: education.offsetTop,
        behavior: 'smooth'
    })
})

const linkSkills = document.getElementById('scrollToSkills');
const skills = document.getElementById('skills');
linkSkills.addEventListener('click', () => {
    window.scrollTo({
        top: skills.offsetTop,
        behavior: 'smooth'
    })
})

const linkContactMe = document.getElementById('scrollToContactMe');
const contactMe = document.getElementById('contact-me');
linkContactMe.addEventListener('click', () => {
    window.scrollTo({
        top: skills.offsetTop,
        behavior: 'smooth'
    })
})

sendFormData = () => {
    const elements = document.getElementById("contact").elements;
    let data = {};
    let name = '';

    for (let i = 0; i < elements.length - 1; i++) {
        data[elements.item(i).name] = elements.item(i).value;

        if (`${elements.item(i).name} == fname`) {
            name = 'Firstname';
        } else if (`${elements.item(i).name} == lname`) {
            name = 'Lastname';
        } else {
            name = 'Message';
        }

        if (elements.item(i).value === "") {
            alert(`${name} tidak boleh kosong!`);
            break;
        }
    }
    console.log(data);
}

