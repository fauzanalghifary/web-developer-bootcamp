import { franc } from "franc";
import langs from "langs";

const langCode = franc("Alle mennesker er ");
console.log(langCode);

const language = langs.where("3", langCode);
console.log(language.name);
