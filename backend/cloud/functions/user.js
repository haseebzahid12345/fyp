Parse.Cloud.define("addUser" , async (request) => {
    const MUser = Parse.Object.extend("MUser");
    const user = new MUser();   

    user.set("firstname" , request.params.firstname);
    user.set("lastname" , request.params.lastname);
    user.set("email" , request.params.email);
    user.set("password" , request.params.password);

    const reuslt = await user.save();
    return reuslt;

});



Parse.Cloud.define("login", async (request) => {
  const { email, password } = request.params;

  const query = new Parse.Query("MUser");
  query.equalTo("email", email);
  query.equalTo("password", password);

  const user = await query.first();

  if (user) {
    return {
      status: 1,
      firstname: user.get('firstname'),
    };
  } else {
    console.log('error 2');
    // Login failed. You can return an error message.
    return {
      status: 0
    };
  }
});

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      