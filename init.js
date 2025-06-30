db.createCollection("Usermessages");

db.Usermessages.insertOne({
  Id_userEmisor: 3,
  Id_userReceptor: 4,
  Message: "Hola, ¿cómo estás?",
  Datecreate: new Date(),
  Status: "sent"
});
