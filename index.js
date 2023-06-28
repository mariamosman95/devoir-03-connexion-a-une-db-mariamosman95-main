const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')
require('dotenv').config(); // Afin de charger le ficheir .env

const Tortue = require("./models/Tortue")

const app = express();

app.use(cors());

// Connection à MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connexion à MongoDB réussie !");
  })
  .catch((error) => {
    console.log("Erreur de connexion à MongoDB : " + error);
  });

app.use(express.json());

app.post('/api/tortue/ajout', (req, res) => {
  res.send('Ajouté');

  const elt = new Tortue(req.body)
  elt.save()

  const Albert = new Tortue ({
    nom: "Albert",
     nomLatin: "Albertus",
     espece: "vert",
    vitesse: 34,
    habitat: "terre",
    
 })
Albert.save()
});

app.get('/api/tortue/:nom', async (req,res)=>{
    const data= await Tortue.findOne({ nom: req.params.nom })
    console.log(data)
    res.send(JSON.stringify(data))
    
})


//ça marche pas:

app.get('/api/tortue/miseajour', async (req,res)=>{
    const data= await Tortue.updateOne({ nom: 'Dupont' })
    console.log(data)
    res.send(JSON.stringify(data))
    
})



const port = process.env.SERVER_PORT || 3000
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});