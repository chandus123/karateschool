export class Eventdetails{

    name: string;
    date: string;
    venue: string;
    image: string;

    constructor(name : string, date : string, venue : string, image : string)
    {

        this.name = name;
        this.date = date;
        this.venue= venue;
        this.image= image;
    }
}