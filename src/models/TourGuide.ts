export class TourGuide {
    name: string;
    pictureUrl: string;
    cities: string[];

    constructor(name: string, pictureUrl: string, cities: string[]) {
        this.name = name;
        this.pictureUrl = pictureUrl;
        this.cities = cities;
    }

    getAltText(): string {
        return `${this.name}`;
    }
}
