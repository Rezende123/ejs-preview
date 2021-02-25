import lenguage from "src/assets/base";

export class TranslateMock {
    private lenguage: string;

    getDefaultLang = () => this.lenguage;
    setDefaultLang(lenguage) {
        this.lenguage = lenguage;
    }
}