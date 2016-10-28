angular
  .module('app')
  .service('bandera', function ($http) {
    
    this.nombre = "bandera";
    this.traerSoloImagen = traerSoloImagen;
    this.traerTodos = traerTodos;
    var Url = "http://www.egos27.somee.com/api/bandera";
    this.traerUnPais = traerUnPais;

    function traerSoloImagen(){
      //recordar que GET no funciona, es get (es case sensitive)
      return $http.get(traerUrl()).then(

        function(respuesta){

        console.info("respuesta: ",respuesta);

        var banderas = [];    


        for (i = 0; i < respuesta.data.Paises.length; i++) 
        {
          banderas[i] = respuesta.data.Paises[i].BanderaChica;
          
        }
        
        

        return banderas;//respuesta.data.Paises[0].Bandera;   
        //se puede devolver como un array de string ["      "] o como [Bandera:"       "], buscar el foreach de javascript, mostrar despues con un ng-repeat
        },function(error){



        console.info("error: ",error);
        return error;
      });

    };

    function traerUnPais(Pais){

        return $http.get(traerUrl(Pais)).then(

        function(respuesta){

        console.info("respuesta pais: ",respuesta);
        //return respuesta.data.Paises;
        return respuesta.data;
        },function(error){



        console.info("error: ",error);
        return error;
      });

    };    
    
    //esta funcion es privada  
    function traerUrl(parametro){
        if (!parametro) 
        {
          return Url;
        }
        else
        {
          return Url + '/' + parametro;
        }
    };


   function traerTodos(){
    //recordar que GET no funciona, es get (es case sensitive)
      return $http.get(traerUrl()).then(

        function(respuesta){

        console.info("respuesta: ",respuesta);
        return respuesta.data.Paises;   
        },function(error){



        console.info("error: ",error);
        return error;
      });

    }



  })
