import { ProjectIdea } from "src/_models/project-idea";
import { Category } from "src/_models/category";
import { Language } from "src/_models/language";

export const ProjectIdeas : ProjectIdea[] = [
    {
        title : "Hacktoberfest 2019 Project Ideas",
        author: {name: "Alexandre Täschner", username: "aletaschner"},
        categories: [Category.Website],
        description: "Help people see their ideais developed by exposing them in an environment of people willing to contribute to open source powered by an website and a github repository",
        recommendedLanguages: [Language.Javascript],
        url: "https://github.com/aletaschner/HacktoberFest2019-ProjectIdeas"
    }
];
