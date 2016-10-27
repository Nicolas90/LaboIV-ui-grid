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

    //console.log(uiGridConstants);


    
    
    
    $scope.mapData = {};
    $scope.mapData.latitud = 33.6803003;
    $scope.mapData.longitud = -116.173894;
    $scope.mapData.nombre = "clear";
    $scope.mapData.apellido = "";
    $scope.mapData.avatar = "";

    $scope.ListadoAmigos = {};


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
          field: 'posicion', name: 'posicion' , 
          cellTemplate: "<button class='btn btn-warning' name='posicion' ng-click='grid.appScope.posicion(row.entity)'>Posicion<button/>"
        },
        { 
          field: 'amigos', name: 'amigos' , 
          cellTemplate: "<button class='btn btn-warning' name='amigos' ng-click='grid.appScope.amigos(row.entity)'>Amigos<button/>"
        }
      ];
    };


    $scope.posicion = function(rta) 
    {
      console.log("Fila: ",rta);
      console.log("Latitud: ",rta.latitud);
      console.log("Longitud: ",rta.logitud);


      
      $scope.mapData.latitud = parseFloat(rta.latitud);
      $scope.mapData.longitud = parseFloat(rta.logitud);
      $scope.mapData.nombre = rta.nombre;
      $scope.mapData.apellido = rta.apellido;
      $scope.mapData.avatar = rta.avatar;
    };

    $scope.amigos = function(rta) 
    {
      //$scope.mapData.nombre = "clear";
      $scope.ListadoAmigos = rta.amigos;

      console.log("Amigos: ",$scope.ListadoAmigos);
    };





  })
