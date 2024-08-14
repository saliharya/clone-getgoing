export class City {
    name: string;
    picture: string;
    country: string;

    constructor(name: string, picture: string, country: string) {
        this.name = name;
        this.picture = picture;
        this.country = country;
    }

    getAltText(): string {
        return `${this.name}`;
    }
}
