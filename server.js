
const app = require('./app.js')

app.listen(process.env.PORT || 5000, () =>{
    console.log('Server is up and running 🚀');
});