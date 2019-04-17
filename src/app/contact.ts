export class Contact {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public gender: string,
        // is optional
        public company?: string
    ) {}
}

export const contacts: Contact[] = [
    {
        "firstName":"Manny",
        "lastName":"Henry",
        "email":"me.ert@gmail.com",
        "gender":"male",
        "company":"Linked"
    },
    {
        "firstName":"Owen",
        "lastName":"Schrondweiler",
        "email":"owen.ert@gmail.com",
        "gender":"male",
        "company":"Linked"
    }
]

export const companies = [ 'Linked', 'Manny design', 'Apple', 'Other'];