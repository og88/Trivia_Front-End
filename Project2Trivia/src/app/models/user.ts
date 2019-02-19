export class User {
    constructor(
        public username: string,
        public pass: string,
        public tempPass: string,
        public email: string,
        public experience: number,
        public highScore: number
    ){};
}
