import starship from "../assets/images/starship.png";
import mirrorwatch from "../assets/images/mirrorwatch.png";
import perfection from "../assets/images/perfection.png";

export const interests = [
    {
        id: "perfection",
        title: "Perfection",
        description: "Perfection is possible, you just need to keep things organized. I actually enjoy maintaining everything under control.",
        fullDescription: `I believe that perfection is not just an abstract concept but a tangible goal achievable through meticulous organization and attention to detail. 
        
        In software development, this translates to writing clean, self-documenting code, maintaining comprehensive documentation, and ensuring that every component has a clear, single responsibility. I enjoy the process of refactoring and optimizing, turning chaotic codebases into well-oiled machines.
        
        My approach involves:
        - Strict adherence to coding standards.
        - Continuous integration and testing.
        - A passion for pixel-perfect UI implementation.`,
        image: perfection,
    },
    {
        id: "design",
        title: "Design",
        description: "If you are going to build something, make it look great. The user experience is something very important.",
        fullDescription: `Design is more than just aesthetics; it's about how a user interacts with the application. A great design guides the user effortlessly through the application flow.
        
        I actually do like making every piece of software visually appealing.
        An upcoming project of mine is MIRRORWATCH (image on top), a pixel art game that I'm designing and developing myself.
        
        If you haven't noticed, I enjoy building every kind of software, from web applications to games. I believe that a well-designed interface enhances user satisfaction and engagement.`,
        image: mirrorwatch,
    },
    {
        id: "space",
        title: "Space",
        description: "Aerospace engineering is something that always gets to impress me. Becoming multiplanetary is a pretty huge motivation for me.",
        fullDescription: `The complexity and precision required in aerospace engineering are a huge inspiration for my work in software. The idea of humanity becoming multiplanetary drives my curiosity and ambition.
        
        While I build software on Earth, I look up to the rigorous engineering standards of space missions:
        - Redundancy and reliability.
        - Performance under constraints.
        - Solving impossible problems.
        
        The only limit is our imagination.`,
        image: starship,
    }
];
