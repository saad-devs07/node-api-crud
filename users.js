class users {
    constructor (FirstName, LastName, Email, Password, CPassword){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Password = Password;
        this.CPassword = CPassword;
    }
}

module.exports = users;