let User = function(data){
    this.data = data
    this.errors = []
}

User.prototype.validate = function() {
    if (this.data.username == "") {this.errors.push("You must provide a username")}
    if (this.data.email == "") {this.errors.push("You must provide a valid email address")}
    if (this.data.password == "") {this.errors.push("You must provide a password")}
    if (this.data.password.length > 0 && this.data.password.length < 12) {this.errors.push("Password must be at least 12 characters")}
    if (this.data.password.length > 100) {this.errors.push("Password mustn't exceed 100 characters")}
    if (this.data.username.length > 0 && this.data.username.length < 3) {this.errors.push("Username must be at least 3 characters")}
    if (this.data.username.length > 30) {this.errors.push("Username mustn't exceed 30 characters")}
}

User.prototype.register = function(){
    //1 - validate user data
    this.validate()

    //2 - if validation ok then save data into database
}

module.exports = User