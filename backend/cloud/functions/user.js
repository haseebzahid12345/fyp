Parse.Cloud.define("addUser" , async (request) => {
    const MUser = Parse.Object.extend("MUser");
    const user = new MUser(); 

    user.set("name" , request.params.name);
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
    user.set("lastLogin", new Date()); // Set the last login date
    await user.save(null, { useMasterKey: true });

    return {
      status: 1,
      name: user.get('name'),
      objectId: user.id 
    };
  } else {
    console.log('error 2');
    return { status: 0 };
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
  const { objectId, name } = request.params;

  const query = new Parse.Query("MUser");
  const user = await query.get(objectId, { useMasterKey: true });

  if (user) {
    user.set("name", name);
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


Parse.Cloud.define("getCardData", async (request) => {
  const cardQuery = new Parse.Query("Card");

  const cards = await cardQuery.find();
  const combinedData = cards.map(card => {
      return {
           objectId: card.id,
          gigtitle: card.get("title"),
          gigprice: card.get("price"),
          firstname: card.get("name")
      };
  });

  return combinedData;
});


Parse.Cloud.define("addFavourite", async (request) => {
  const { CardObjectId, currentUserObjectId } = request.params;

  const Favourite = Parse.Object.extend("favourites");
  const query = new Parse.Query(Favourite);
  query.equalTo("CardId", CardObjectId);
  query.equalTo("userId", currentUserObjectId);

  const existingEntry = await query.first();
  if (existingEntry) {
    // Entry already exists
    return { status: 0, message: 'It is already added ' };
  }

  // If no existing entry, create a new one
  const favourite = new Favourite();
  favourite.set("CardId", CardObjectId);
  favourite.set("userId", currentUserObjectId);

  await favourite.save();
  return { status: 1, message: ' Added to your favourites' };
});

Parse.Cloud.define("getFavorites", async (request) => {
  const { userId } = request.params;

  // Query to get favorite items for the user
  const Favourite = Parse.Object.extend("favourites");
  const favoriteQuery = new Parse.Query(Favourite);
  favoriteQuery.equalTo("userId", userId);

  const favorites = await favoriteQuery.find();
  const cardIds = favorites.map(f => f.get("CardId"));

  // Query to get card details
  const Card = Parse.Object.extend("Card");
  const cardQuery = new Parse.Query(Card);
  cardQuery.containedIn("objectId", cardIds);

  const cards = await cardQuery.find();
  const cardMap = cards.reduce((map, card) => {
    map[card.id] = card;
    return map;
  }, {});

  // Map each favorite to its details and include the favorite's object ID
  return favorites.map(favorite => {
    const card = cardMap[favorite.get("CardId")];
    return {
      favoriteObjectId: favorite.id, // Returning the objectId of the favorite
      gigtitle: card ? card.get("title") : '',
      gigprice: card ? card.get("price") : '',
      firstname: card ? card.get("name") : ''
    };
  });
});



// In your Parse Server cloud code (e.g., main.js)
Parse.Cloud.define("removeFavorite", async (request) => {
  const { objectId } = request.params;
  console.log(objectId);
  const Favourite = Parse.Object.extend("favourites");
  const query = new Parse.Query(Favourite);

  try {
    // Find the favorite object by its objectId
    const favoriteObject = await query.get(objectId, { useMasterKey: true });
    if (favoriteObject) {
      // Delete the favorite object
      await favoriteObject.destroy({ useMasterKey: true });
      return { success: true, message: "Favorite removed successfully." };
    } else {
      throw new Error("Favorite object not found");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error in removing favorite");
  }
});


// In your Parse Server Cloud Code (user.js)
Parse.Cloud.define("getCardById", async (request) => {
  const { id } = request.params;
  const Card = Parse.Object.extend("Card");
  const query = new Parse.Query(Card);

  try {
    const card = await query.get(id);
    return {
      status: 1,
      data: card,
    };
  } catch (error) {
    console.error('Error fetching card by ID', error);
    return {
      status: 0,
      message: "Error fetching card by ID",
      error: error.message,
    };
  }
});

Parse.Cloud.define("sendMessage", async (request) => {
  const { senderId, receiverId, text } = request.params;

  // Find or create a conversation
  let conversation = await findOrCreateConversation(senderId, receiverId);

  // Create a message in the Message class
  const Message = Parse.Object.extend("Message");
  const message = new Message();

  message.set("sender", { "__type": "Pointer", "className": "MUser", "objectId": senderId });
  message.set("receiver", { "__type": "Pointer", "className": "MUserT", "objectId": receiverId });
  message.set("conversation", { "__type": "Pointer", "className": "Conversation", "objectId": conversation.id });
  message.set("text", text);
  
  // Save the message
  await message.save();

  // Return the message object
  return {
    message: message,

    conversationId: conversation.id
  };
});

async function findOrCreateConversation(senderId, receiverId) {
  const Conversation = Parse.Object.extend("Conversation");
  const query = new Parse.Query(Conversation);

  // Use a compound query to find if a conversation already exists between the two users
  const query1 = new Parse.Query(Conversation);
  query1.equalTo("participant1", { "__type": "Pointer", "className": "MUser", "objectId": senderId });
  query1.equalTo("participant2", { "__type": "Pointer", "className": "MUserT", "objectId": receiverId });

  const query2 = new Parse.Query(Conversation);
  query2.equalTo("participant1", { "__type": "Pointer", "className": "MUserT", "objectId": receiverId });
  query2.equalTo("participant2", { "__type": "Pointer", "className": "MUser", "objectId": senderId });

  const mainQuery = Parse.Query.or(query1, query2);
  let conversation = await mainQuery.first();

  if (!conversation) {
    // Create a new conversation if one does not exist
    conversation = new Conversation();
    conversation.set("participant1", { "__type": "Pointer", "className": "MUser", "objectId": senderId });
    conversation.set("participant2", { "__type": "Pointer", "className": "MUserT", "objectId": receiverId });
    await conversation.save();
  }

  return conversation;
}


// In your Cloud Code (user.js)
Parse.Cloud.define("getMessages", async (request) => {
  const { conversationId } = request.params;
  const Message = Parse.Object.extend("Message");
  const query = new Parse.Query(Message);
  query.equalTo("conversation", { "__type": "Pointer", "className": "Conversation", "objectId": conversationId });
  query.include("sender");
  query.include("receiver");
  query.descending("createdAt"); // Optionally, sort the messages

  try {
    const messages = await query.find();
    return messages.map(message => {
      return {
        objectId: message.id,
        text: message.get("text"),
        senderId: message.get("sender").id,
        receiverId: message.get("receiver").id,
        createdAt: message.get("createdAt"),
      };
    });
  } catch (error) {
    console.error('Error fetching messages', error);
    return [];
  }
});








                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      