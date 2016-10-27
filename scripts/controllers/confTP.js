angular
  .module('app')
  .controller('ControlTP', function($scope, data, i18nService, uiGridConstants) {
    $scope.titulo = "Configuracion Campos";
    // Objeto de configuracion de la grilla.
    $scope.gridOptions = {};
    $scope.gridOptions.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridOptions.paginationPageSize = 25;
    $scope.gridOptions.columnDefs = columnDefs();
    // Activo la busqueda en todos los campos.
    $scope.gridOptions.enableFiltering = true;
    // Configuracion del idioma.
    i18nService.setCurrentLang('es');

    data.data().then(function(rta){
      // Cargo los datos en la grilla.
      $scope.gridOptions.data = rta;


      //console.log(rta);

    });

    console.log(uiGridConstants);


    //$scope.map = {center: {latitud: 37.7699298, longitud: -122.4469157}, zoom: 12};
    
    
    //$scope.mapData = {};
    $scope.latitud = 39;
    $scope.longitud = 40;



//grid.appScope.NombreDeMiMetodo(row.entity){console.info(lo que recivo);} antes de la funcion , adentro del button


    function columnDefs () {
      return [
        { field: 'avatar', cellTemplate:"<img width=\"25px\" height=\"25px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"},
        { field: 'foto', cellTemplate:"<img width=\"25px\" height=\"25px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"},
        { field: 'id', name: '#', width: 45},
        { field: 'titulo', name: 'ocupacion'
          ,filter:{
            condition: uiGridConstants.filter.STARTS_WITH,
            placeholder: 'comienza con...'
          }
        },
        { field: 'nombre', name: 'nombre'
          ,enableFiltering: false
        },
        { field: 'apellido', name: 'apellido'},
        { field: 'email', name: 'mail'},
        { field: 'sexo', name: 'sexo'
        // filtro de busqueda.
          ,filter: {
            // term: '1',
            type: uiGridConstants.filter.SELECT,
            selectOptions: [
              {value: 'Male', label: 'Masculino'},
              {value: 'Female', label: 'Femenino'}
            ]
          }
          //filtro de los datos
          ,cellFilter: 'sexoTP'
        },
        { field: 'fechaNacimiento', name: 'fechaNacimiento'
          ,type: 'date'
          ,cellFilter: "date: 'dd-MM-yyyy'"
        },
        { 
          field: 'botonTP', name: 'botonTP' , 
          cellTemplate: "<button class='btn btn-warning' name='botonTP' ng-click='grid.appScope.botonTP(row.entity)'>Posicion<button/>"
        }
      ];
    };


    $scope.botonTP = function(rta) 
    {
      console.log(rta);
      //console.log("Latitud: ",rta.latitud);
      //console.log("Longitud: ",rta.logitud);


      //$scope.map.center.latitud = rta.latitud;
      //$scope.map.center.longitud = rta.logitud;




      $scope.latitud = 23;
      $scope.longitud = 11;


      /*
      $scope.latitud = rta.latitud;
      $scope.longitud = rta.logitud;
      
      */
      console.log("Latitud: ",$scope.latitud);
      console.log("Longitud: ",$scope.longitud);
      
    };

    $scope.botonTP2 = function() 
    {


      $scope.latitud = 58;
      $scope.longitud = 49;

      console.log("Latitud: ",$scope.latitud);
      console.log("Longitud: ",$scope.longitud);
    };





  })
