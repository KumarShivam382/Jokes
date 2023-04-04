

const but = document.querySelector('#press');
let remover  = null;

 const jokeGenerator = async () => {
   try{      
      
      if(remover)
      {
         remover.remove();
      }


      const config = {headers : {Accept : 'application/json'}};
      const mainop = await axios.get('https://icanhazdadjoke.com/' , config);

      let newjoke = mainop.data.joke;
      const newli = document.createElement('li');
      newli.append(newjoke);
      const ul = document.querySelector('#merejokes');
      ul.append(newli);

      remover = newli;

   }
   catch(e) {
      if(remover)
      {
         remover.remove();
      }
      const newli = document.createElement('li');
      newli.append('Sorry unable to process any jokes :(');
      const ul = document.querySelector('#merejokes');
      ul.append(newli); 
      remover = newli;   

   }
 }

but.addEventListener('click' , jokeGenerator);
 