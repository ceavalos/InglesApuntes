function validarArchivo(){
    let texto = $("#P4_FILE_CONTENT).val();
    let mensaje  = "";
    $("#P4_IS_FORM_VALIDO").val("TRUE");
    if(texto == null || texto == '' ){        
            $("#P24_IS_FORM_VALIDO").val("FALSE");
            mensaje = "Error debe seleccionar un archivo.";
     }
      
     if ($("#P4_IS_FORM_VALIDO").val() === "FALSE") {
          Swal.fire({
              title: "Revisar",
              html: mensaje.trim(), // Eliminar el salto de línea final innecesario
              icon: "warning"
          });
      }
  }
  validarArchivo();
  