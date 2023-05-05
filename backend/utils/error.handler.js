const handleErrors = (err) => {
    let errors = {};
    //Duplicate key errors
    if (err.code === 11000) {
      console.log(Object.keys(err.keyPattern));
      errors[Object.keys(err.keyPattern)] = `${Object.keys(
        err.keyPattern
      )} already exists for another user`;
    }
  
    //validation Errors
  
    if (err.message.includes('user validation failed')) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
  

   //sign-up failed
//    if(err.message === 'user not created'){
//     errors.signUp = 'user not created';
//    }
  
    // Incorrect password for login
    if (err.message === 'incorrect password') {
      errors.password = 'That password is incorrect';
    }
  
    //user not found for login
  
    if (err.message === 'user not found') {
      errors.email = 'That user does not exist';
    }
  
    // user details error for login
  
    if(err.message === 'enter user details'){
      errors.userDetails = 'Enter User Details'
    }
  
    //handle jwt errors
    if (err.message.includes('jwt')) {
      errors.error = err.message;
    }
  
    return errors;
  };
  
  module.exports = { handleErrors };
  