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
       objectId: user.id 
    };
  } else {
    console.log('error 2');
    // Login failed. You can return an error message.
    return {
      status: 0
    };
  }
});



Parse.Cloud.define("deleteUser", async (request) => {
  const objectId = request.params.objectId;
  console.log(objectId);
  const query = new Parse.Query("MUser");
  console.log(query);
  query.equalTo("objectId", objectId);
   
  const user = await query.first({ useMasterKey: true });
  console.log(user);
  if (user) {
    await user.destroy({ useMasterKey: true });
    return { status: 1 }; // Indicate success
  } else {
    return { status: 0 }; // User not found
  }
});



Parse.Cloud.define("updateUser", async (request) => {
  const { objectId, firstname, lastname } = request.params;

  const query = new Parse.Query("MUser");
  const user = await query.get(objectId, { useMasterKey: true });

  if (user) {
    user.set("firstname", firstname);
    user.set("lastname", lastname);
    await user.save(null, { useMasterKey: true });
    return { status: 1 }; // Indicate success
  } else {
    return { status: 0 }; // User not found
  }
});



// Parse.Cloud.define("getTeacherData", async (request) => {
//     const query1 = new Parse.Query('create_gig');
//     const query2 = new Parse.Query('MUserT');
    
//     const results1 = await query1.find();  // Fix typo in variable name (change 'results' to 'results1')
//     const results2 = await query2.find();  // Fix typo in variable name (change 'quer2' to 'query2')

//     const gigData = results1.map(result => ({
//         gigtitle: result.get('gigtitle'),
//     }));

//     const userData = results2.map(result => ({
//         firstname: result.get('firstname'),
//         // Add other properties you need from the MUserT class
//     }));

//     return [...gigData, ...userData ];
   
// });


// Parse.Cloud.define("getTeacherData", async (request) => {
//   const query1 = new Parse.Query('create_gig');
//   const query2 = new Parse.Query('MUserT');
  
//   const results1 = await query1.find();
//   const results2 = await query2.find();

//   const combinedData = [];

//   for (let i = 0; i < Math.max(results1.length, results2.length); i++) {
//       const gigItem = results1[i] ? { gigtitle: results1[i].get('gigtitle') } : {};
//       const userItem = results2[i] ? { firstname: results2[i].get('firstname') } : {};

//       combinedData.push({ ...gigItem, ...userItem });
//   }

//   return combinedData;
// });


Parse.Cloud.define("getTeacherData", async (request) => {
  const query1 = new Parse.Query('create_gig');
  const query2 = new Parse.Query('MUserT');
  
  const results1 = await query1.find();
  const results2 = await query2.find();

  const combinedData = [];

  for (let i = 0; i < results1.length; i++) {
      const gigUserId = results1[i].get('userId');
      const matchingUser = results2.find(user => user.id === gigUserId);

      if (matchingUser) {
          const gigItem = { gigtitle: results1[i].get('gigtitle') };
          const userItem = { firstname: matchingUser.get('firstname') };

          combinedData.push({ ...gigItem, ...userItem });
      }
  }

  return combinedData;
});




                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      